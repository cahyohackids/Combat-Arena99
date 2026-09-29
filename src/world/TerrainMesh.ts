import * as THREE from 'three';
import { HeightField } from './HeightField';
import { locationAt, MAP_RADIUS, WATER_LEVEL } from './Locations';
import { clamp01 } from '@/utils/MathUtils';

const GRASS = new THREE.Color(0.235, 0.28, 0.165);
const GRASS_DRY = new THREE.Color(0.36, 0.35, 0.2);
const DIRT = new THREE.Color(0.33, 0.28, 0.22);
const ROCK = new THREE.Color(0.36, 0.35, 0.33);
const SAND = new THREE.Color(0.58, 0.52, 0.4);
const CONCRETE = new THREE.Color(0.46, 0.46, 0.44);
const FOREST_FLOOR = new THREE.Color(0.19, 0.21, 0.14);

function isPaved(x: number, z: number): boolean {
  const loc = locationAt(x, z);
  if (!loc) return false;
  if (loc.id === 'facility' || loc.id === 'outpost') {
    const dx = x - loc.center[0];
    const dz = z - loc.center[1];
    return Math.sqrt(dx * dx + dz * dz) < loc.radius * 0.55;
  }
  return false;
}

export function buildTerrainMesh(hf: HeightField, segments = 300): THREE.Mesh {
  const size = MAP_RADIUS * 2 + 40;
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const tmpColor = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const h = hf.getHeight(x, z);
    pos.setY(i, h);

    const [nx, ny, nz] = hf.getNormal(x, z, 1.2);
    const slope = 1 - clamp01(ny);
    const loc = locationAt(x, z);

    let base = GRASS;
    if (loc?.id === 'quarry') base = ROCK;
    else if (loc?.id === 'cedarHill') base = FOREST_FLOOR;
    else if (h < WATER_LEVEL + 2.5) base = SAND;

    tmpColor.copy(base);

    if (isPaved(x, z)) {
      tmpColor.copy(CONCRETE);
    } else if (hf.isRoad(x, z)) {
      tmpColor.lerp(DIRT, 0.85);
    } else if (slope > 0.55) {
      tmpColor.lerp(ROCK, clamp01((slope - 0.55) * 2.2));
    } else if (slope > 0.3) {
      tmpColor.lerp(DIRT, clamp01((slope - 0.3) * 1.6));
    }

    // Break up flat color with cheap per-vertex dry-patch variance.
    const variance = Math.sin(x * 0.13) * Math.cos(z * 0.11) * 0.5 + 0.5;
    if (base === GRASS) tmpColor.lerp(GRASS_DRY, variance * 0.18);

    void nx;
    void nz;
    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.95,
    metalness: 0.0,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.name = 'terrain';
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  return mesh;
}

const oceanVertexShader = `
  uniform float uTime;
  varying vec3 vWorldPos;
  varying float vWave;
  void main() {
    vec3 p = position;
    float w = sin(p.x * 0.05 + uTime * 0.8) * 0.18 + cos(p.z * 0.045 - uTime * 0.6) * 0.15;
    p.y += w;
    vWave = w;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const oceanFragmentShader = `
  uniform vec3 uColorShallow;
  uniform vec3 uColorDeep;
  uniform vec3 uSunDir;
  varying vec3 vWorldPos;
  varying float vWave;
  void main() {
    float depthMix = clamp(vWave * 0.5 + 0.5, 0.0, 1.0);
    vec3 base = mix(uColorDeep, uColorShallow, depthMix);
    vec3 normal = normalize(vec3(-vWave * 0.3, 1.0, vWave * 0.2));
    float spec = pow(max(dot(normal, normalize(uSunDir)), 0.0), 40.0);
    vec3 color = base + spec * 0.35;
    gl_FragColor = vec4(color, 0.92);
  }
`;

export function buildOcean(): THREE.Mesh {
  const size = MAP_RADIUS * 2 + 900;
  const geo = new THREE.PlaneGeometry(size, size, 64, 64);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorShallow: { value: new THREE.Color(0.09, 0.22, 0.24) },
      uColorDeep: { value: new THREE.Color(0.02, 0.07, 0.1) },
      uSunDir: { value: new THREE.Vector3(0.4, 0.6, 0.3) },
    },
    vertexShader: oceanVertexShader,
    fragmentShader: oceanFragmentShader,
    transparent: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = WATER_LEVEL;
  mesh.name = 'ocean';
  mesh.renderOrder = 1;
  return mesh;
}

export function updateOcean(ocean: THREE.Mesh, time: number, sunDir: THREE.Vector3): void {
  const mat = ocean.material as THREE.ShaderMaterial;
  mat.uniforms.uTime.value = time;
  mat.uniforms.uSunDir.value.copy(sunDir);
}
