import * as THREE from 'three';

const skyVertexShader = `
  varying vec3 vWorldPos;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const skyFragmentShader = `
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uBottom;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  varying vec3 vWorldPos;
  void main() {
    float h = normalize(vWorldPos).y;
    vec3 color = h > 0.0
      ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55))
      : mix(uHorizon, uBottom, pow(clamp(-h, 0.0, 1.0), 0.6));
    float sunAmount = max(dot(normalize(vWorldPos), normalize(uSunDir)), 0.0);
    color += uSunColor * pow(sunAmount, 220.0) * 2.2;
    color += uSunColor * pow(sunAmount, 6.0) * 0.15;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export interface SkySystem {
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  skyMesh: THREE.Mesh;
  fog: THREE.FogExp2;
  update(t01: number): void;
}

/** Builds a golden-hour-to-overcast-evening lighting rig that drifts as the match (`t01` 0..1) progresses. */
export function createSky(scene: THREE.Scene): SkySystem {
  const sun = new THREE.DirectionalLight(0xffe2b8, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 260;
  sun.shadow.camera.left = -110;
  sun.shadow.camera.right = 110;
  sun.shadow.camera.top = 110;
  sun.shadow.camera.bottom = -110;
  sun.shadow.bias = -0.0015;
  sun.shadow.normalBias = 0.03;
  scene.add(sun);
  scene.add(sun.target);

  const hemi = new THREE.HemisphereLight(0x9db4c9, 0x4a4030, 0.9);
  scene.add(hemi);

  // Ambient floor so cliff faces, character models and building shadow-sides never crush to pure black.
  const ambient = new THREE.AmbientLight(0xa8a294, 0.45);
  scene.add(ambient);

  const fog = new THREE.FogExp2(0xb9a888, 0.0016);
  scene.fog = fog;

  const skyGeo = new THREE.SphereGeometry(700, 24, 16);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color(0x6f93b8) },
      uHorizon: { value: new THREE.Color(0xe7b98a) },
      uBottom: { value: new THREE.Color(0x3a3428) },
      uSunDir: { value: new THREE.Vector3(0.4, 0.5, 0.3) },
      uSunColor: { value: new THREE.Color(0xffdca0) },
    },
    vertexShader: skyVertexShader,
    fragmentShader: skyFragmentShader,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  skyMesh.renderOrder = -10;
  scene.add(skyMesh);

  function update(t01: number): void {
    // Sun arcs from high afternoon toward a low, warm evening angle as t01 -> 1.
    const azimuth = 2.4 + t01 * 0.6;
    const elevation = THREE.MathUtils.lerp(0.95, 0.32, t01);
    const dist = 260;
    const dir = new THREE.Vector3(
      Math.cos(azimuth) * Math.cos(elevation),
      Math.sin(elevation),
      Math.sin(azimuth) * Math.cos(elevation),
    );
    sun.position.copy(dir).multiplyScalar(dist);
    sun.target.position.set(0, 0, 0);

    const warmth = THREE.MathUtils.lerp(1.0, 0.7, t01);
    sun.color.setRGB(1.0, 0.85 * warmth + 0.15, 0.6 * warmth + 0.2);
    sun.intensity = THREE.MathUtils.lerp(2.2, 1.3, t01);

    hemi.intensity = THREE.MathUtils.lerp(0.9, 0.55, t01);

    const fogNear = THREE.MathUtils.lerp(0.0014, 0.0026, t01);
    fog.density = fogNear;
    const fogColor = new THREE.Color().lerpColors(new THREE.Color(0xcfb896), new THREE.Color(0x5b5c62), t01);
    fog.color.copy(fogColor);

    (skyMat.uniforms.uSunDir.value as THREE.Vector3).copy(dir);
    (skyMat.uniforms.uTop.value as THREE.Color).lerpColors(new THREE.Color(0x6f93b8), new THREE.Color(0x2c3242), t01);
    (skyMat.uniforms.uHorizon.value as THREE.Color).lerpColors(
      new THREE.Color(0xe7b98a),
      new THREE.Color(0x6c6559),
      t01,
    );
    (skyMat.uniforms.uBottom.value as THREE.Color).lerpColors(new THREE.Color(0x3a3428), new THREE.Color(0x201d1a), t01);

    scene.background = null;
  }

  update(0);
  return { sun, hemi, skyMesh, fog, update };
}

export function getSunDirection(sky: SkySystem): THREE.Vector3 {
  return sky.sun.position.clone().normalize();
}
