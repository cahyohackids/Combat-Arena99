var fh=Object.defineProperty;var ph=(i,t,e)=>t in i?fh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var T=(i,t,e)=>ph(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="169",mh=0,zo=1,gh=2,no=1,ua=2,_n=3,zn=0,Re=1,$e=2,Mn=0,Ni=1,ko=2,Bo=3,Ho=4,vh=5,ii=100,_h=101,yh=102,xh=103,Mh=104,Sh=200,wh=201,bh=202,Th=203,da=204,fa=205,Eh=206,Ah=207,Ch=208,Rh=209,Ph=210,Lh=211,Dh=212,Ih=213,Uh=214,pa=0,ma=1,ga=2,Bi=3,va=4,_a=5,ya=6,xa=7,dc=0,Nh=1,Fh=2,On=0,fc=1,pc=2,mc=3,io=4,Oh=5,gc=6,vc=7,_c=300,Hi=301,Vi=302,Ma=303,Sa=304,pr=306,wa=1e3,ri=1001,ba=1002,Ie=1003,zh=1004,xs=1005,nn=1006,wr=1007,ai=1008,bn=1009,yc=1010,xc=1011,fs=1012,so=1013,oi=1014,on=1015,Yi=1016,ro=1017,ao=1018,Gi=1020,Mc=35902,Sc=1021,wc=1022,rn=1023,bc=1024,Tc=1025,Fi=1026,Wi=1027,oo=1028,lo=1029,Ec=1030,co=1031,ho=1033,Js=33776,js=33777,Qs=33778,tr=33779,Ta=35840,Ea=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Da=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,za=37814,ka=37815,Ba=37816,Ha=37817,Va=37818,Ga=37819,Wa=37820,Xa=37821,er=36492,qa=36494,Ya=36495,Ac=36283,$a=36284,Ka=36285,Za=36286,kh=3200,Bh=3201,Cc=0,Hh=1,Fn="",tn="srgb",Vn="srgb-linear",uo="display-p3",mr="display-p3-linear",ar="linear",re="srgb",or="rec709",lr="p3",di=7680,Vo=519,Vh=512,Gh=513,Wh=514,Rc=515,Xh=516,qh=517,Yh=518,$h=519,Ja=35044,Go="300 es",xn=2e3,cr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wo=1234567;const cs=Math.PI/180,ps=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function fo(i,t){return(i%t+t)%t}function Kh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zh(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function Jh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function jh(i,t=1){return t-Math.abs(fo(i,t*2)-t)}function Qh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nu(i,t){return i+Math.random()*(t-i)}function iu(i){return i*(.5-Math.random())}function su(i){i!==void 0&&(Wo=i);let t=Wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(i){return i*cs}function au(i){return i*ps}function ou(i){return(i&i-1)===0&&i!==0}function lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:cs,RAD2DEG:ps,generateUUID:Sn,clamp:xe,euclideanModulo:fo,mapLinear:Kh,inverseLerp:Zh,lerp:hs,damp:Jh,pingpong:jh,smoothstep:Qh,smootherstep:tu,randInt:eu,randFloat:nu,randFloatSpread:iu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:ou,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:jt,denormalize:sn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],w=s[7],P=s[2],C=s[5],A=s[8];return r[0]=a*_+o*y+l*P,r[3]=a*m+o*x+l*C,r[6]=a*f+o*w+l*A,r[1]=c*_+h*y+u*P,r[4]=c*m+h*x+u*C,r[7]=c*f+h*w+u*A,r[2]=d*_+p*y+g*P,r[5]=d*m+p*x+g*C,r[8]=d*f+p*w+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Ft;function Pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){const i=hr("canvas");return i.style.display="block",i}const Xo={};function nr(i){i in Xo||(Xo[i]=!0,console.warn(i))}function du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qo=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yo=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Vn]:{transfer:ar,primaries:or,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:re,primaries:or,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:ar,primaries:lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Yo),fromReference:i=>i.applyMatrix3(qo)},[uo]:{transfer:re,primaries:lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yo),fromReference:i=>i.applyMatrix3(qo).convertLinearToSRGB()}},mu=new Set([Vn,mr]),Yt={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ji[t].toReference,s=Ji[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ji[i].primaries},getTransfer:function(i){return i===Fn?ar:Ji[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ji[t].luminanceCoefficients)}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=hr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vu=0;class Lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Er(s[a].image)):r.push(Er(s[a]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class Ee extends $i{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=ri,s=ri,r=nn,a=ai,o=rn,l=bn,c=Ee.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Sn(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=_c;Ee.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,w=(p+1)/2,P=(f+1)/2,C=(h+d)/4,A=(u+_)/4,D=(g+m)/4;return x>w&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=A/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=D/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dc extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,f*y);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const w=o*y;if(l=l*m+d*w,c=c*m+p*w,h=h*m+g*w,u=u*m+_*w,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new R,$o=new ci;class hi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ss.subVectors(this.max,ji),pi.subVectors(t.a,ji),mi.subVectors(t.b,ji),gi.subVectors(t.c,ji),Rn.subVectors(mi,pi),Pn.subVectors(gi,mi),Wn.subVectors(pi,gi);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Wn.y,Wn.x,0];return!Cr(e,pi,mi,gi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,pi,mi,gi,Ss))?!1:(ws.crossVectors(Rn,Pn),e=[ws.x,ws.y,ws.z],Cr(e,pi,mi,gi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],Je=new R,Ms=new hi,pi=new R,mi=new R,gi=new R,Rn=new R,Pn=new R,Wn=new R,ji=new R,Ss=new R,ws=new R,Xn=new R;function Cr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);const o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mu=new hi,Qi=new R,Rr=new R;class ms{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Rr)),this.expandByPoint(Qi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new R,Pr=new R,bs=new R,Ln=new R,Lr=new R,Ts=new R,Dr=new R;class po{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Ln.dot(this.direction),l=-Ln.dot(bs),c=Ln.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(bs,d),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),Ts.subVectors(n,t),Dr.crossVectors(Lr,Ts);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(Ts.crossVectors(Ln,Ts));if(l<0)return null;const c=o*this.direction.dot(Lr.cross(Ln));if(c<0||l+c>a)return null;const h=-o*Ln.dot(Dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Su,t,wu)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Dn.crossVectors(n,ke),Dn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Dn.crossVectors(n,ke)),Dn.normalize(),Es.crossVectors(ke,Dn),s[0]=Dn.x,s[4]=Es.x,s[8]=ke.x,s[1]=Dn.y,s[5]=Es.y,s[9]=ke.y,s[2]=Dn.z,s[6]=Es.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],w=n[11],P=n[15],C=s[0],A=s[4],D=s[8],X=s[12],v=s[1],S=s[5],F=s[9],O=s[13],H=s[2],q=s[6],V=s[10],Z=s[14],W=s[3],ct=s[7],ht=s[11],yt=s[15];return r[0]=a*C+o*v+l*H+c*W,r[4]=a*A+o*S+l*q+c*ct,r[8]=a*D+o*F+l*V+c*ht,r[12]=a*X+o*O+l*Z+c*yt,r[1]=h*C+u*v+d*H+p*W,r[5]=h*A+u*S+d*q+p*ct,r[9]=h*D+u*F+d*V+p*ht,r[13]=h*X+u*O+d*Z+p*yt,r[2]=g*C+_*v+m*H+f*W,r[6]=g*A+_*S+m*q+f*ct,r[10]=g*D+_*F+m*V+f*ht,r[14]=g*X+_*O+m*Z+f*yt,r[3]=y*C+x*v+w*H+P*W,r[7]=y*A+x*S+w*q+P*ct,r[11]=y*D+x*F+w*V+P*ht,r[15]=y*X+x*O+w*Z+P*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,x=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,w=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=e*y+n*x+s*w+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=y*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=w*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=P*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,y=l*c,x=l*h,w=l*u,P=n.x,C=n.y,A=n.z;return s[0]=(1-(_+f))*P,s[1]=(p+w)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-w)*C,s[5]=(1-(d+f))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===xn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===cr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(o===xn)g=(a+r)*u,_=-2*u;else if(o===cr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new R,je=new te,Su=new R(0,0,0),wu=new R(1,1,1),Dn=new R,Es=new R,ke=new R,Ko=new te,Zo=new ci;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bu=0;const Jo=new R,_i=new ci,mn=new te,As=new R,ts=new R,Tu=new R,Eu=new ci,jo=new R(1,0,0),Qo=new R(0,1,0),tl=new R(0,0,1),el={type:"added"},Au={type:"removed"},yi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class le extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new R,e=new cn,n=new ci,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ft}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Qo,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Jo.copy(t).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Qo,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ts,As,this.up):mn.lookAt(As,ts,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(mn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}le.DEFAULT_UP=new R(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new R,gn=new R,Ur=new R,vn=new R,xi=new R,Mi=new R,nl=new R,Nr=new R,Fr=new R,Or=new R,zr=new ie,kr=new ie,Br=new ie;class Ke{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),gn.subVectors(n,e),Ur.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(gn),l=Qe.dot(Ur),c=gn.dot(gn),h=gn.dot(Ur),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return zr.setScalar(0),kr.setScalar(0),Br.setScalar(0),zr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zr,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;xi.subVectors(s,n),Mi.subVectors(r,n),Nr.subVectors(t,n);const l=xi.dot(Nr),c=Mi.dot(Nr);if(l<=0&&c<=0)return e.copy(n);Fr.subVectors(t,s);const h=xi.dot(Fr),u=Mi.dot(Fr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);Or.subVectors(t,r);const p=xi.dot(Or),g=Mi.dot(Or);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Mi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return nl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(nl,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(xi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=fo(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hr(a,r,t+1/3),this.g=Hr(a,r,t),this.b=Hr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Yt.fromWorkingColorSpace(be.copy(this),t),Math.round(xe(be.r*255,0,255))*65536+Math.round(xe(be.g*255,0,255))*256+Math.round(xe(be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=tn){Yt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Cs);const n=hs(In.h,Cs.h,e),s=hs(In.s,Cs.s,e),r=hs(In.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new vt;vt.NAMES=Ic;let Cu=0;class Ki extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ni,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zi extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new R,Rs=new it;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Uc extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ru=0;const qe=new te,Vr=new le,Si=new R,Be=new hi,es=new hi,ye=new R;class Ge extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pc(t)?Nc:Uc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Be.min,es.min),Be.expandByPoint(ye),ye.addVectors(Be.max,es.max),Be.expandByPoint(ye)):(Be.expandByPoint(es.min),Be.expandByPoint(es.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),ye.add(Si)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new R,l[D]=new R;const c=new R,h=new R,u=new R,d=new it,p=new it,g=new it,_=new R,m=new R;function f(D,X,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[D].add(_),o[X].add(_),o[v].add(_),l[D].add(m),l[X].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,X=y.length;D<X;++D){const v=y[D],S=v.start,F=v.count;for(let O=S,H=S+F;O<H;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new R,w=new R,P=new R,C=new R;function A(D){P.fromBufferAttribute(s,D),C.copy(P);const X=o[D];x.copy(X),x.sub(P.multiplyScalar(P.dot(X))).normalize(),w.crossVectors(C,X);const S=w.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,S)}for(let D=0,X=y.length;D<X;++D){const v=y[D],S=v.start,F=v.count;for(let O=S,H=S+F;O<H;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new te,qn=new po,Ps=new ms,sl=new R,Ls=new R,Ds=new R,Is=new R,Gr=new R,Us=new R,rl=new R,Ns=new R;class Ot extends le{constructor(t=new Ge,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),a?Us.addScaledVector(Gr,h):Us.addScaledVector(Gr.sub(e),h))}e.add(Us)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Ps.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Ps,sl)===null||qn.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(il.copy(r).invert(),qn.copy(t.ray).applyMatrix4(il),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,P=x;w<P;w+=3){const C=o.getX(w),A=o.getX(w+1),D=o.getX(w+2);s=Fs(this,f,t,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);s=Fs(this,a,t,n,c,h,u,y,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,P=x;w<P;w+=3){const C=w,A=w+1,D=w+2;s=Fs(this,f,t,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,w=m+2;s=Fs(this,a,t,n,c,h,u,y,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pu(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zn,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Fs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ls),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Is);const h=Pu(i,t,e,n,Ls,Ds,Is,rl);if(h){const u=new R;Ke.getBarycoord(rl,Ls,Ds,Is,u),s&&(h.uv=Ke.getInterpolatedAttribute(s,o,l,c,u,new it)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,o,l,c,u,new it)),a&&(h.normal=Ke.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};Ke.getNormal(Ls,Ds,Is,d.normal),h.face=d,h.barycoord=u}return h}class hn extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,f,y,x,w,P,C,A,D,X){const v=w/A,S=P/D,F=w/2,O=P/2,H=C/2,q=A+1,V=D+1;let Z=0,W=0;const ct=new R;for(let ht=0;ht<V;ht++){const yt=ht*S-O;for(let Xt=0;Xt<q;Xt++){const Zt=Xt*v-F;ct[_]=Zt*y,ct[m]=yt*x,ct[f]=H,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[f]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Xt/A),u.push(1-ht/D),Z+=1}}for(let ht=0;ht<D;ht++)for(let yt=0;yt<A;yt++){const Xt=d+yt+q*ht,Zt=d+yt+q*(ht+1),Y=d+(yt+1)+q*(ht+1),Q=d+(yt+1)+q*ht;l.push(Xt,Zt,Q),l.push(Zt,Y,Q),W+=6}o.addGroup(p,W,X),p+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function Lu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const go={clone:Xi,merge:Ce};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oc extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new R,al=new it,ol=new it;class He extends Oc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,al,ol),e.subVectors(ol,al)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class Uu extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(wi,bi,t,e);s.layers=this.layers,this.add(s);const r=new He(wi,bi,t,e);r.layers=this.layers,this.add(r);const a=new He(wi,bi,t,e);a.layers=this.layers,this.add(a);const o=new He(wi,bi,t,e);o.layers=this.layers,this.add(o);const l=new He(wi,bi,t,e);l.layers=this.layers,this.add(l);const c=new He(wi,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zc extends Ee{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nu extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hn(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Mn});r.uniforms.tEquirect.value=e;const a=new Ot(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=nn),new Uu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Wr=new R,Fu=new R,Ou=new Ft;class ti{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(Fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ou.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new ms,Os=new R;class vo{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,m-p,w-f).normalize(),n[1].setComponents(l+r,d+c,m+p,w+f).normalize(),n[2].setComponents(l+a,d+h,m+g,w+y).normalize(),n[3].setComponents(l-a,d-h,m-g,w-y).normalize(),n[4].setComponents(l-o,d-u,m-_,w-x).normalize(),e===xn)n[5].setComponents(l+o,d+u,m+_,w+x).normalize();else if(e===cr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Os.x=s.normal.x>0?t.max.x:t.min.x,Os.y=s.normal.y>0?t.max.y:t.min.y,Os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Tn extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let x=0;x<c;x++){const w=x*u-r;g.push(w,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const x=y+c*f,w=y+c*(f+1),P=y+1+c*(f+1),C=y+1+c*f;p.push(x,w,C),p.push(w,P,C)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ju=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,op=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:ku,alphahash_pars_fragment:Bu,alphamap_fragment:Hu,alphamap_pars_fragment:Vu,alphatest_fragment:Gu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:$u,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:Ju,iridescence_fragment:ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:td,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:ad,color_vertex:od,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:vd,envmap_common_pars_fragment:_d,envmap_pars_fragment:yd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Ld,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:wd,fog_fragment:bd,fog_pars_fragment:Td,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:Ad,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Id,lights_phong_fragment:Ud,lights_phong_pars_fragment:Nd,lights_physical_fragment:Fd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Bd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:$d,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:tf,morphtarget_vertex:ef,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:rf,normal_pars_vertex:af,normal_vertex:of,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:df,opaque_fragment:ff,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:vf,dithering_pars_fragment:_f,roughnessmap_fragment:yf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:wf,shadowmask_pars_fragment:bf,skinbase_vertex:Tf,skinning_pars_vertex:Ef,skinning_vertex:Af,skinnormal_vertex:Cf,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:If,transmission_pars_fragment:Uf,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Bf,backgroundCube_vert:Hf,backgroundCube_frag:Vf,cube_vert:Gf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:$f,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:Jf,linedashed_frag:jf,meshbasic_vert:Qf,meshbasic_frag:tp,meshlambert_vert:ep,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:sp,meshnormal_vert:rp,meshnormal_frag:ap,meshphong_vert:op,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:dp,points_vert:fp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:vp,sprite_frag:_p},nt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},an={basic:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ce([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ce([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ce([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ce([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ce([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ce([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ce([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ce([nt.lights,nt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};an.physical={uniforms:Ce([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const zs={r:0,b:0,g:0},$n=new cn,yp=new te;function xp(i,t,e,n,s,r,a){const o=new vt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const w=g(y);w===null?f(o,l):w&&w.isColor&&(f(w,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===pr)?(h===void 0&&(h=new Ot(new hn(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Xi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(x.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler($n)),h.material.toneMapped=Yt.getTransfer(w.colorSpace)!==re,(u!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ot(new Tn(2,2),new Ne({name:"BackgroundMaterial",uniforms:Xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(w.colorSpace)!==re,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(zs,Fc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function Mp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,S,F,O,H){let q=!1;const V=u(O,F,S);r!==V&&(r=V,c(r.object)),q=p(v,O,F,H),q&&g(v,O,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,w(v,S,F,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,F){const O=F.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let q=H[S.id];q===void 0&&(q={},H[S.id]=q);let V=q[O];return V===void 0&&(V=d(l()),q[O]=V),V}function d(v){const S=[],F=[],O=[];for(let H=0;H<e;H++)S[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,S,F,O){const H=r.attributes,q=S.attributes;let V=0;const Z=F.getAttributes();for(const W in Z)if(Z[W].location>=0){const ht=H[W];let yt=q[W];if(yt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(v,S,F,O){const H={},q=S.attributes;let V=0;const Z=F.getAttributes();for(const W in Z)if(Z[W].location>=0){let ht=q[W];ht===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),H[W]=yt,V++}r.attributes=H,r.attributesNum=V,r.index=O}function _(){const v=r.newAttributes;for(let S=0,F=v.length;S<F;S++)v[S]=0}function m(v){f(v,0)}function f(v,S){const F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),H[v]!==S&&(i.vertexAttribDivisor(v,S),H[v]=S)}function y(){const v=r.newAttributes,S=r.enabledAttributes;for(let F=0,O=S.length;F<O;F++)S[F]!==v[F]&&(i.disableVertexAttribArray(F),S[F]=0)}function x(v,S,F,O,H,q,V){V===!0?i.vertexAttribIPointer(v,S,F,H,q):i.vertexAttribPointer(v,S,F,O,H,q)}function w(v,S,F,O){_();const H=O.attributes,q=F.getAttributes(),V=S.defaultAttributeValues;for(const Z in q){const W=q[Z];if(W.location>=0){let ct=H[Z];if(ct===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const ht=ct.normalized,yt=ct.itemSize,Xt=t.get(ct);if(Xt===void 0)continue;const Zt=Xt.buffer,Y=Xt.type,Q=Xt.bytesPerElement,gt=Y===i.INT||Y===i.UNSIGNED_INT||ct.gpuType===so;if(ct.isInterleavedBufferAttribute){const ut=ct.data,Dt=ut.stride,Tt=ct.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)f(W.location+Bt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Bt=0;Bt<W.locationSize;Bt++)x(W.location+Bt,yt/W.locationSize,Y,ht,Dt*Q,(Tt+yt/W.locationSize*Bt)*Q,gt)}else{if(ct.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)f(W.location+ut,ct.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ut=0;ut<W.locationSize;ut++)x(W.location+ut,yt/W.locationSize,Y,ht,yt*Q,yt/W.locationSize*ut*Q,gt)}}else if(V!==void 0){const ht=V[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(W.location,ht);break;case 3:i.vertexAttrib3fv(W.location,ht);break;case 4:i.vertexAttrib4fv(W.location,ht);break;default:i.vertexAttrib1fv(W.location,ht)}}}}y()}function P(){D();for(const v in n){const S=n[v];for(const F in S){const O=S[F];for(const H in O)h(O[H].object),delete O[H];delete S[F]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const F in S){const O=S[F];for(const H in O)h(O[H].object),delete O[H];delete S[F]}delete n[v.id]}function A(v){for(const S in n){const F=n[S];if(F[v.id]===void 0)continue;const O=F[v.id];for(const H in O)h(O[H].object),delete O[H];delete F[v.id]}}function D(){X(),a=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Sp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:P,maxSamples:C}}function bp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ti,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let w=f.clippingState||null;l.value=w,w=h(g,d,x,p);for(let P=0;P!==x;++P)w[P]=e[P];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,w=p;x!==_;++x,w+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Tp(i){let t=new WeakMap;function e(a,o){return o===Ma?a.mapping=Hi:o===Sa&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ma||o===Sa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _o extends Oc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,ll=[.125,.215,.35,.446,.526,.582],si=20,Xr=new _o,cl=new vt;let qr=null,Yr=0,$r=0,Kr=!1;const ei=(1+Math.sqrt(5))/2,Ti=1/ei,hl=[new R(-ei,Ti,0),new R(ei,Ti,0),new R(-Ti,0,ei),new R(Ti,0,ei),new R(0,ei,-Ti),new R(0,ei,Ti),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,$r),this._renderer.xr.enabled=Kr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Yi,format:rn,colorSpace:Vn,depthBuffer:!1},s=dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(r)),this._blurMaterial=Ap(r,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){const o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cl),h.toneMapping=On,h.autoClear=!1;const p=new zi({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Ot(new hn,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(cl),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;ks(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hl[(s-r-1)%hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let y=0;for(let A=0;A<si;++A){const D=A/_,X=Math.exp(-D*D/2);f.push(X),A===0?y+=X:A<m&&(y+=2*X)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const w=this._sizeLods[s],P=3*w*(s>x-Ii?s-x+Ii:0),C=4*(this._cubeSize-w);ks(e,P,C,3*w,2*w),l.setRenderTarget(e),l.render(u,Xr)}}function Ep(i){const t=[],e=[],n=[];let s=i;const r=i-Ii+1+ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ii?l=ll[a-i+Ii-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,D=C>2?0:-1,X=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(X,_*g*C),x.set(d,m*g*C);const v=[C,C,C,C,C,C];w.set(v,f*g*C)}const P=new Ge;P.setAttribute("position",new Ve(y,_)),P.setAttribute("uv",new Ve(x,m)),P.setAttribute("faceIndex",new Ve(w,f)),t.push(P),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dl(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ap(i,t,e){const n=new Float32Array(si),s=new R(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function fl(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function pl(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ma||l===Sa,h=l===Hi||l===Vi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ul(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ul(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,w=y.length;x<w;x+=3){const P=y[x+0],C=y[x+1],A=y[x+2];d.push(P,C,C,A,A,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const P=x+0,C=x+1,A=x+2;d.push(P,C,C,A,A,P)}}else return;const m=new(Pc(d)?Nc:Uc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Lp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<_.length;y++)e.update(f,n,_[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ip(i,t,e){const n=new WeakMap,s=new ie;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let P=o.attributes.position.count*w,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*C*4*u),D=new Dc(A,P,C,u);D.type=on,D.needsUpdate=!0;const X=w*4;for(let S=0;S<u;S++){const F=f[S],O=y[S],H=x[S],q=P*C*4*S;for(let V=0;V<F.count;V++){const Z=V*X;g===!0&&(s.fromBufferAttribute(F,V),A[q+Z+0]=s.x,A[q+Z+1]=s.y,A[q+Z+2]=s.z,A[q+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,V),A[q+Z+4]=s.x,A[q+Z+5]=s.y,A[q+Z+6]=s.z,A[q+Z+7]=0),m===!0&&(s.fromBufferAttribute(H,V),A[q+Z+8]=s.x,A[q+Z+9]=s.y,A[q+Z+10]=s.z,A[q+Z+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new it(P,C)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Up(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Bc extends Ee{constructor(t,e,n,s,r,a,o,l,c,h=Fi){if(h!==Fi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=oi),n===void 0&&h===Wi&&(n=Gi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hc=new Ee,ml=new Bc(1,1),Vc=new Dc,Gc=new xu,Wc=new zc,gl=[],vl=[],_l=new Float32Array(16),yl=new Float32Array(9),xl=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gl[s];if(r===void 0&&(r=new Float32Array(s),gl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),_e(e,n)}}function Bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),_e(e,n)}}function Hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;_l.set(n),i.uniformMatrix4fv(this.addr,!1,_l),_e(e,n)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ml.compareFunction=Rc,r=ml):r=Hc,e.setTexture2D(t||r,s)}function Jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gc,s)}function jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wc,s)}function Qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vc,s)}function tm(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return zp;case 35674:return kp;case 35675:return Bp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function sm(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function rm(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function am(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function om(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function dm(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function gm(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hc,r[a])}function vm(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gc,r[a])}function _m(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wc,r[a])}function ym(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vc,r[a])}function xm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return ym}}class Mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xm(e.type)}}class wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Ml(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),a=Zr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ml(e,c===void 0?new Mm(o,i,t):new Sm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new wm(o),Ml(e,u)),e=u}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);bm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Sl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tm=37297;let Em=0;function Am(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Cm(i){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i);let n;switch(t===e?n="":t===lr&&e===or?n="LinearDisplayP3ToLinearSRGB":t===or&&e===lr&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case mr:return[n,"LinearTransferOETF"];case tn:case uo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(t),a)}else return s}function Rm(i,t){const e=Cm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pm(i,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="Cineon";break;case io:e="ACESFilmic";break;case gc:e="AgX";break;case vc:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new R;function Lm(){Yt.getLuminanceCoefficients(Bs);const i=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Im(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function bl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(Nm,Om)}const Fm=new Map;function Om(i,t){let e=Nt[t];if(e===void 0){const n=Fm.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(zm,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Al(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ua?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Vi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Fh:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bm(e),c=Hm(e),h=Vm(e),u=Gm(e),d=Wm(e),p=Dm(e),g=Im(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Nt.tonemapping_pars_fragment:"",e.toneMapping!==On?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=ja(a),a=bl(a,e),a=Tl(a,e),o=ja(o),o=bl(o,e),o=Tl(o,e),a=El(a),o=El(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+a,w=y+f+o,P=Sl(s,s.VERTEX_SHADER,x),C=Sl(s,s.FRAGMENT_SHADER,w);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(S){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(C).trim();let q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,C);else{const Z=wl(s,P,"vertex"),W=wl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+Z+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||H==="")&&(V=!1);V&&(S.diagnostics={runnable:q,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(P),s.deleteShader(C),D=new ir(s,_),X=Um(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let X;this.getAttributes=function(){return X===void 0&&A(this),X};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Tm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $m(t),e.set(t,n)),n}}class $m{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Km(i,t,e,n,s,r,a){const o=new mo,l=new Ym,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,S,F,O,H){const q=O.fog,V=H.geometry,Z=v.isMeshStandardMaterial?O.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),ct=W&&W.mapping===pr?W.image.height:null,ht=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=yt!==void 0?yt.length:0;let Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let Y,Q,gt,ut;if(ht){const Le=an[ht];Y=Le.vertexShader,Q=Le.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,l.update(v),gt=l.getVertexShaderID(v),ut=l.getFragmentShaderID(v);const Dt=i.getRenderTarget(),Tt=H.isInstancedMesh===!0,Bt=H.isBatchedMesh===!0,ee=!!v.map,Ht=!!v.matcap,L=!!W,Fe=!!v.aoMap,zt=!!v.lightMap,Gt=!!v.bumpMap,At=!!v.normalMap,ae=!!v.displacementMap,Pt=!!v.emissiveMap,E=!!v.metalnessMap,M=!!v.roughnessMap,z=v.anisotropy>0,K=v.clearcoat>0,j=v.dispersion>0,$=v.iridescence>0,xt=v.sheen>0,st=v.transmission>0,dt=z&&!!v.anisotropyMap,Wt=K&&!!v.clearcoatMap,tt=K&&!!v.clearcoatNormalMap,ft=K&&!!v.clearcoatRoughnessMap,Ct=$&&!!v.iridescenceMap,Rt=$&&!!v.iridescenceThicknessMap,pt=xt&&!!v.sheenColorMap,kt=xt&&!!v.sheenRoughnessMap,It=!!v.specularMap,se=!!v.specularColorMap,I=!!v.specularIntensityMap,ot=st&&!!v.transmissionMap,G=st&&!!v.thicknessMap,J=!!v.gradientMap,rt=!!v.alphaMap,lt=v.alphaTest>0,Vt=!!v.alphaHash,pe=!!v.extensions;let Pe=On;v.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const qt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:gt,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&H._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&H.instanceColor!==null,instancingMorph:Tt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Vn,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Ht,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:ct,aoMap:Fe,lightMap:zt,bumpMap:Gt,normalMap:At,displacementMap:p&&ae,emissiveMap:Pt,normalMapObjectSpace:At&&v.normalMapType===Hh,normalMapTangentSpace:At&&v.normalMapType===Cc,metalnessMap:E,roughnessMap:M,anisotropy:z,anisotropyMap:dt,clearcoat:K,clearcoatMap:Wt,clearcoatNormalMap:tt,clearcoatRoughnessMap:ft,dispersion:j,iridescence:$,iridescenceMap:Ct,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:kt,specularMap:It,specularColorMap:se,specularIntensityMap:I,transmission:st,transmissionMap:ot,thicknessMap:G,gradientMap:J,opaque:v.transparent===!1&&v.blending===Ni&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Vt,combine:v.combine,mapUv:ee&&m(v.map.channel),aoMapUv:Fe&&m(v.aoMap.channel),lightMapUv:zt&&m(v.lightMap.channel),bumpMapUv:Gt&&m(v.bumpMap.channel),normalMapUv:At&&m(v.normalMap.channel),displacementMapUv:ae&&m(v.displacementMap.channel),emissiveMapUv:Pt&&m(v.emissiveMap.channel),metalnessMapUv:E&&m(v.metalnessMap.channel),roughnessMapUv:M&&m(v.roughnessMap.channel),anisotropyMapUv:dt&&m(v.anisotropyMap.channel),clearcoatMapUv:Wt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(v.sheenRoughnessMap.channel),specularMapUv:It&&m(v.specularMap.channel),specularColorMapUv:se&&m(v.specularColorMap.channel),specularIntensityMapUv:I&&m(v.specularIntensityMap.channel),transmissionMapUv:ot&&m(v.transmissionMap.channel),thicknessMapUv:G&&m(v.thicknessMap.channel),alphaMapUv:rt&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(At||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(ee||rt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===Re,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)S.push(F),S.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const S=_[v.type];let F;if(S){const O=an[S];F=go.clone(O.uniforms)}else F=v.uniforms;return F}function C(v,S){let F;for(let O=0,H=h.length;O<H;O++){const q=h[O];if(q.cacheKey===S){F=q,++F.usedTimes;break}}return F===void 0&&(F=new Xm(i,S,v,r),h.push(F)),F}function A(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function X(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:X}}function Zm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Jm),n.length>1&&n.sort(d||Cl),s.length>1&&s.sort(d||Cl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rl,i.set(n,[a])):s>=r.length?(a=new Rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,w=0,P=0,C=0,A=0;c.sort(ng);for(let X=0,v=c.length;X<v;X++){const S=c[X],F=S.color,O=S.intensity,H=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],O);A++}else if(S.isDirectionalLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,W=e.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=S.shadow.matrix,y++}n.directional[p]=V,p++}else if(S.isSpotLight){const V=t.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[_]=V;const Z=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,Z.updateMatrices(S),S.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,S.castShadow){const W=e.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=q,w++}_++}else if(S.isRectAreaLight){const V=t.get(S);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=V,m++}else if(S.isPointLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const Z=S.shadow,W=e.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=V,g++}else if(S.isHemisphereLight){const V=t.get(S);V.skyColor.copy(S.color).multiplyScalar(O),V.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==w||D.numSpotMaps!==P||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=w,D.numSpotMaps=P,D.numLightProbes=A,n.version=eg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(x.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Pl(i){const t=new ig(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pl(i),t.set(s,[o])):r>=a.length?(o=new Pl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class rg extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ag extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(i,t,e){let n=new vo;const s=new it,r=new it,a=new ie,o=new rg({depthPacking:Bh}),l=new ag,c={},h=e.maxTextureSize,u={[zn]:Re,[Re]:zn,[$e]:$e},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:og,fragmentShader:lg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let f=this.type;this.render=function(C,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const X=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Mn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==_n&&this.type===_n,H=f===_n&&this.type!==_n;for(let q=0,V=C.length;q<V;q++){const Z=C[q],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||O===!0||H===!0){const yt=this.type!==_n?{minFilter:Ie,magFilter:Ie}:{};W.map!==null&&W.map.dispose(),W.map=new kn(s.x,s.y,yt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ht=W.getViewportCount();for(let yt=0;yt<ht;yt++){const Xt=W.getViewport(yt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),F.viewport(a),W.updateMatrices(Z,yt),n=W.getFrustum(),w(A,D,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&y(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(X,v,S)};function y(C,A){const D=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function x(C,A,D,X){let v=null;const S=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)v=S;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=v.uuid,O=A.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let q=H[O];q===void 0&&(q=v.clone(),H[O]=q,A.addEventListener("dispose",P)),v=q}if(v.visible=A.visible,v.wireframe=A.wireframe,X===_n?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=D}return v}function w(C,A,D,X,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===_n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const O=t.update(C),H=C.material;if(Array.isArray(H)){const q=O.groups;for(let V=0,Z=q.length;V<Z;V++){const W=q[V],ct=H[W.materialIndex];if(ct&&ct.visible){const ht=x(C,ct,X,v);C.onBeforeShadow(i,C,A,D,O,ht,W),i.renderBufferDirect(D,null,O,ht,C,W),C.onAfterShadow(i,C,A,D,O,ht,W)}}}else if(H.visible){const q=x(C,H,X,v);C.onBeforeShadow(i,C,A,D,O,q,null),i.renderBufferDirect(D,null,O,q,C,null),C.onAfterShadow(i,C,A,D,O,q,null)}}const F=C.children;for(let O=0,H=F.length;O<H;O++)w(F[O],A,D,X,v)}function P(C){C.target.removeEventListener("dispose",P);for(const D in c){const X=c[D],v=C.target.uuid;v in X&&(X[v].dispose(),delete X[v])}}}const hg={[pa]:ma,[ga]:ya,[va]:xa,[Bi]:_a,[ma]:pa,[ya]:ga,[xa]:va,[_a]:Bi};function ug(i){function t(){let I=!1;const ot=new ie;let G=null;const J=new ie(0,0,0,0);return{setMask:function(rt){G!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){I=rt},setClear:function(rt,lt,Vt,pe,Pe){Pe===!0&&(rt*=pe,lt*=pe,Vt*=pe),ot.set(rt,lt,Vt,pe),J.equals(ot)===!1&&(i.clearColor(rt,lt,Vt,pe),J.copy(ot))},reset:function(){I=!1,G=null,J.set(-1,0,0,0)}}}function e(){let I=!1,ot=!1,G=null,J=null,rt=null;return{setReversed:function(lt){ot=lt},setTest:function(lt){lt?gt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(lt){G!==lt&&!I&&(i.depthMask(lt),G=lt)},setFunc:function(lt){if(ot&&(lt=hg[lt]),J!==lt){switch(lt){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=lt}},setLocked:function(lt){I=lt},setClear:function(lt){rt!==lt&&(i.clearDepth(lt),rt=lt)},reset:function(){I=!1,G=null,J=null,rt=null}}}function n(){let I=!1,ot=null,G=null,J=null,rt=null,lt=null,Vt=null,pe=null,Pe=null;return{setTest:function(qt){I||(qt?gt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(qt){ot!==qt&&!I&&(i.stencilMask(qt),ot=qt)},setFunc:function(qt,Le,dn){(G!==qt||J!==Le||rt!==dn)&&(i.stencilFunc(qt,Le,dn),G=qt,J=Le,rt=dn)},setOp:function(qt,Le,dn){(lt!==qt||Vt!==Le||pe!==dn)&&(i.stencilOp(qt,Le,dn),lt=qt,Vt=Le,pe=dn)},setLocked:function(qt){I=qt},setClear:function(qt){Pe!==qt&&(i.clearStencil(qt),Pe=qt)},reset:function(){I=!1,ot=null,G=null,J=null,rt=null,lt=null,Vt=null,pe=null,Pe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,w=null,P=null,C=new vt(0,0,0),A=0,D=!1,X=null,v=null,S=null,F=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=V>=2);let W=null,ct={};const ht=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Xt=new ie().fromArray(ht),Zt=new ie().fromArray(yt);function Y(I,ot,G,J){const rt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(I,lt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<G;Vt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return lt}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),r.setFunc(Bi),zt(!1),Gt(zo),gt(i.CULL_FACE),L(Mn);function gt(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ut(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Dt(I,ot){return h[I]!==ot?(i.bindFramebuffer(I,ot),h[I]=ot,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Tt(I,ot){let G=d,J=!1;if(I){G=u.get(ot),G===void 0&&(G=[],u.set(ot,G));const rt=I.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Vt=rt.length;lt<Vt;lt++)G[lt]=i.COLOR_ATTACHMENT0+lt;G.length=rt.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function Bt(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ee={[ii]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};ee[xh]=i.MIN,ee[Mh]=i.MAX;const Ht={[Sh]:i.ZERO,[wh]:i.ONE,[bh]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[Eh]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[Rh]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Ih]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,ot,G,J,rt,lt,Vt,pe,Pe,qt){if(I===Mn){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),I!==vh){if(I!==_||qt!==D){if((m!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),m=ii,x=ii),qt)switch(I){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,y=null,w=null,P=null,C.set(0,0,0),A=0,_=I,D=qt}return}rt=rt||ot,lt=lt||G,Vt=Vt||J,(ot!==m||rt!==x)&&(i.blendEquationSeparate(ee[ot],ee[rt]),m=ot,x=rt),(G!==f||J!==y||lt!==w||Vt!==P)&&(i.blendFuncSeparate(Ht[G],Ht[J],Ht[lt],Ht[Vt]),f=G,y=J,w=lt,P=Vt),(pe.equals(C)===!1||Pe!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Pe),C.copy(pe),A=Pe),_=I,D=!1}function Fe(I,ot){I.side===$e?ut(i.CULL_FACE):gt(i.CULL_FACE);let G=I.side===Re;ot&&(G=!G),zt(G),I.blending===Ni&&I.transparent===!1?L(Mn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){X!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),X=I)}function Gt(I){I!==mh?(gt(i.CULL_FACE),I!==v&&(I===zo?i.cullFace(i.BACK):I===gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),v=I}function At(I){I!==S&&(q&&i.lineWidth(I),S=I)}function ae(I,ot,G){I?(gt(i.POLYGON_OFFSET_FILL),(F!==ot||O!==G)&&(i.polygonOffset(ot,G),F=ot,O=G)):ut(i.POLYGON_OFFSET_FILL)}function Pt(I){I?gt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+H-1),W!==I&&(i.activeTexture(I),W=I)}function M(I,ot,G){G===void 0&&(W===null?G=i.TEXTURE0+H-1:G=W);let J=ct[G];J===void 0&&(J={type:void 0,texture:void 0},ct[G]=J),(J.type!==I||J.texture!==ot)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(I,ot||Q[I]),J.type=I,J.texture=ot)}function z(){const I=ct[W];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){Xt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Xt.copy(I))}function pt(I){Zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function kt(I,ot){let G=l.get(ot);G===void 0&&(G=new WeakMap,l.set(ot,G));let J=G.get(I);J===void 0&&(J=i.getUniformBlockIndex(ot,I.name),G.set(I,J))}function It(I,ot){const J=l.get(ot).get(I);o.get(ot)!==J&&(i.uniformBlockBinding(ot,J,I.__bindingPointIndex),o.set(ot,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ct={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,w=null,P=null,C=new vt(0,0,0),A=0,D=!1,X=null,v=null,S=null,F=null,O=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:gt,disable:ut,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:Bt,setBlending:L,setMaterial:Fe,setFlipSided:zt,setCullFace:Gt,setLineWidth:At,setPolygonOffset:ae,setScissorTest:Pt,activeTexture:E,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:Ct,updateUBOMapping:kt,uniformBlockBinding:It,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:se}}function Ll(i,t,e,n){const s=dg(n);switch(e){case Sc:return i*t;case bc:return i*t;case Tc:return i*t*2;case oo:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case Ec:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ho:return i*t*4/s.components*s.byteLength;case Js:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case Ta:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case er:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ac:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case bn:case yc:return{byteLength:1,components:1};case fs:case xc:case Yi:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case oi:case so:case on:return{byteLength:4,components:1};case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return p?new OffscreenCanvas(E,M):hr("canvas")}function _(E,M,z){let K=1;const j=Pt(E);if((j.width>z||j.height>z)&&(K=z/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(K*j.width),xt=Math.floor(K*j.height);u===void 0&&(u=g($,xt));const st=M?g($,xt):u;return st.width=$,st.height=xt,st.getContext("2d").drawImage(E,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+xt+")."),st}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==Ie&&E.minFilter!==nn}function f(E){i.generateMipmap(E)}function y(E,M,z,K,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const xt=j?ar:Yt.getTransfer(K);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=xt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(E,M){let z;return E?M===null||M===oi||M===Gi?z=i.DEPTH24_STENCIL8:M===on?z=i.DEPTH32F_STENCIL8:M===fs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oi||M===Gi?z=i.DEPTH_COMPONENT24:M===on?z=i.DEPTH_COMPONENT32F:M===fs&&(z=i.DEPTH_COMPONENT16),z}function w(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function P(E){const M=E.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&h.delete(M)}function C(E){const M=E.target;M.removeEventListener("dispose",C),X(M)}function A(E){const M=n.get(E);if(M.__webglInit===void 0)return;const z=E.source,K=d.get(z);if(K){const j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(E),Object.keys(K).length===0&&d.delete(z)}n.remove(E)}function D(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const z=E.source,K=d.get(z);delete K[M.__cacheKey],a.memory.textures--}function X(E){const M=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[K][j]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=E.textures;for(let K=0,j=z.length;K<j;K++){const $=n.get(z[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[K])}n.remove(E)}let v=0;function S(){v=0}function F(){const E=v;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),v+=1,E}function O(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function H(E,M){const z=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(z,E,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function q(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Zt(z,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function V(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Zt(z,E,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Z(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const W={[wa]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},ct={[Ie]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ht={[Vh]:i.NEVER,[$h]:i.ALWAYS,[Gh]:i.LESS,[Rc]:i.LEQUAL,[Wh]:i.EQUAL,[Yh]:i.GEQUAL,[Xh]:i.GREATER,[qh]:i.NOTEQUAL};function yt(E,M){if(M.type===on&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===wr||M.magFilter===xs||M.magFilter===ai||M.minFilter===nn||M.minFilter===wr||M.minFilter===xs||M.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,W[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,W[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,W[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ct[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ie||M.minFilter!==xs&&M.minFilter!==ai||M.type===on&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",P));const K=M.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const $=O(M);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[$].usedTimes++;const xt=j[E.__cacheKey];xt!==void 0&&(j[E.__cacheKey].usedTimes--,xt.usedTimes===0&&D(M)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return z}function Zt(E,M,z){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const j=Xt(E,M),$=M.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+z);const xt=n.get($);if($.version!==xt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const st=Yt.getPrimaries(Yt.workingColorSpace),dt=M.colorSpace===Fn?null:Yt.getPrimaries(M.colorSpace),Wt=M.colorSpace===Fn||st===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=_(M.image,!1,s.maxTextureSize);tt=ae(M,tt);const ft=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type);let Rt=y(M.internalFormat,ft,Ct,M.colorSpace,M.isVideoTexture);yt(K,M);let pt;const kt=M.mipmaps,It=M.isVideoTexture!==!0,se=xt.__version===void 0||j===!0,I=$.dataReady,ot=w(M,tt);if(M.isDepthTexture)Rt=x(M.format===Wi,M.type),se&&(It?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,Ct,null));else if(M.isDataTexture)if(kt.length>0){It&&se&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,kt[0].width,kt[0].height);for(let G=0,J=kt.length;G<J;G++)pt=kt[G],It?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Ct,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,Ct,pt.data);M.generateMipmaps=!1}else It?(se&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,tt.width,tt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,Ct,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,Ct,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,kt[0].width,kt[0].height,tt.depth);for(let G=0,J=kt.length;G<J;G++)if(pt=kt[G],M.format!==rn)if(ft!==null)if(It){if(I)if(M.layerUpdates.size>0){const rt=Ll(pt.width,pt.height,M.format,M.type);for(const lt of M.layerUpdates){const Vt=pt.data.subarray(lt*rt/pt.data.BYTES_PER_ELEMENT,(lt+1)*rt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,lt,pt.width,pt.height,1,ft,Vt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,tt.depth,ft,Ct,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,tt.depth,0,ft,Ct,pt.data)}else{It&&se&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,kt[0].width,kt[0].height);for(let G=0,J=kt.length;G<J;G++)pt=kt[G],M.format!==rn?ft!==null?It?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Ct,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,Ct,pt.data)}else if(M.isDataArrayTexture)if(It){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,tt.width,tt.height,tt.depth),I)if(M.layerUpdates.size>0){const G=Ll(tt.width,tt.height,M.format,M.type);for(const J of M.layerUpdates){const rt=tt.data.subarray(J*G/tt.data.BYTES_PER_ELEMENT,(J+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,ft,Ct,rt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,ft,Ct,tt.data);else if(M.isData3DTexture)It?(se&&e.texStorage3D(i.TEXTURE_3D,ot,Rt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,ft,Ct,tt.data);else if(M.isFramebufferTexture){if(se)if(It)e.texStorage2D(i.TEXTURE_2D,ot,Rt,tt.width,tt.height);else{let G=tt.width,J=tt.height;for(let rt=0;rt<ot;rt++)e.texImage2D(i.TEXTURE_2D,rt,Rt,G,J,0,ft,Ct,null),G>>=1,J>>=1}}else if(kt.length>0){if(It&&se){const G=Pt(kt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}for(let G=0,J=kt.length;G<J;G++)pt=kt[G],It?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,Ct,pt):e.texImage2D(i.TEXTURE_2D,G,Rt,ft,Ct,pt);M.generateMipmaps=!1}else if(It){if(se){const G=Pt(tt);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,Ct,tt);m(M)&&f(K),xt.__version=$.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Y(E,M,z){if(M.image.length!==6)return;const K=Xt(E,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const $=n.get(j);if(j.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const xt=Yt.getPrimaries(Yt.workingColorSpace),st=M.colorSpace===Fn?null:Yt.getPrimaries(M.colorSpace),dt=M.colorSpace===Fn||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Wt&&!tt?ft[J]=_(M.image[J],!0,s.maxCubemapSize):ft[J]=tt?M.image[J].image:M.image[J],ft[J]=ae(M,ft[J]);const Ct=ft[0],Rt=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),kt=y(M.internalFormat,Rt,pt,M.colorSpace),It=M.isVideoTexture!==!0,se=$.__version===void 0||K===!0,I=j.dataReady;let ot=w(M,Ct);yt(i.TEXTURE_CUBE_MAP,M);let G;if(Wt){It&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,Ct.width,Ct.height);for(let J=0;J<6;J++){G=ft[J].mipmaps;for(let rt=0;rt<G.length;rt++){const lt=G[rt];M.format!==rn?Rt!==null?It?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,kt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,lt.width,lt.height,Rt,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,kt,lt.width,lt.height,0,Rt,pt,lt.data)}}}else{if(G=M.mipmaps,It&&se){G.length>0&&ot++;const J=Pt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){It?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Rt,pt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,ft[J].width,ft[J].height,0,Rt,pt,ft[J].data);for(let rt=0;rt<G.length;rt++){const Vt=G[rt].image[J].image;It?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,Vt.width,Vt.height,Rt,pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,kt,Vt.width,Vt.height,0,Rt,pt,Vt.data)}}else{It?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,pt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Rt,pt,ft[J]);for(let rt=0;rt<G.length;rt++){const lt=G[rt];It?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,Rt,pt,lt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,kt,Rt,pt,lt.image[J])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),$.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Q(E,M,z,K,j,$){const xt=r.convert(z.format,z.colorSpace),st=r.convert(z.type),dt=y(z.internalFormat,xt,st,z.colorSpace);if(!n.get(M).__hasExternalTextures){const tt=Math.max(1,M.width>>$),ft=Math.max(1,M.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,dt,tt,ft,M.depth,0,xt,st,null):e.texImage2D(j,$,dt,tt,ft,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,n.get(z).__webglTexture,0,zt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,n.get(z).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(E,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=x(M.stencilBuffer,j),xt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=zt(M);Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,E)}else{const K=M.textures;for(let j=0;j<K.length;j++){const $=K[j],xt=r.convert($.format,$.colorSpace),st=r.convert($.type),dt=y($.internalFormat,xt,st,$.colorSpace),Wt=zt(M);z&&Gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,dt,M.width,M.height):Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,dt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,j=zt(M);if(M.depthTexture.format===Fi)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Wi)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Dt(E){const M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=K}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ut(M.__webglFramebuffer,E)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),gt(M.__webglDepthbuffer[K],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),gt(M.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(E,M,z){const K=n.get(E);M!==void 0&&Q(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Dt(E)}function Bt(E){const M=E.texture,z=n.get(E),K=n.get(M);E.addEventListener("dispose",C);const j=E.textures,$=E.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let dt=0;dt<M.mipmaps.length;dt++)z.__webglFramebuffer[st][dt]=i.createFramebuffer()}else z.__webglFramebuffer[st]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)z.__webglFramebuffer[st]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,dt=j.length;st<dt;st++){const Wt=n.get(j[st]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Gt(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const dt=j[st];z.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[st]);const Wt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),ft=y(dt.internalFormat,Wt,tt,dt.colorSpace,E.isXRRenderTarget===!0),Ct=zt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,z.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),yt(i.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(z.__webglFramebuffer[st][dt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt);else Q(z.__webglFramebuffer[st],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,dt=j.length;st<dt;st++){const Wt=j[st],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),yt(i.TEXTURE_2D,Wt),Q(z.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),m(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),yt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(z.__webglFramebuffer[dt],E,M,i.COLOR_ATTACHMENT0,st,dt);else Q(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,st,0);m(M)&&f(st),e.unbindTexture()}E.depthBuffer&&Dt(E)}function ee(E){const M=E.textures;for(let z=0,K=M.length;z<K;z++){const j=M[z];if(m(j)){const $=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(j).__webglTexture;e.bindTexture($,xt),f($),e.unbindTexture()}}}const Ht=[],L=[];function Fe(E){if(E.samples>0){if(Gt(E)===!1){const M=E.textures,z=E.width,K=E.height;let j=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(E),st=M.length>1;if(st)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,j,i.NEAREST),l===!0&&(Ht.length=0,L.length=0,Ht.push(i.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ht.push($),L.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function zt(E){return Math.min(s.maxSamples,E.samples)}function Gt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function ae(E,M){const z=E.colorSpace,K=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Vn&&z!==Fn&&(Yt.getTransfer(z)===re?(K!==rn||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Tt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Gt}function pg(i,t){function e(n,s=Fn){let r;const a=Yt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.BYTE;if(n===xc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===wc)return i.RGB;if(n===rn)return i.RGBA;if(n===bc)return i.LUMINANCE;if(n===Tc)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===Ec)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===Js||n===js||n===Qs||n===tr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ea||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===ka||n===Ba||n===Ha||n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===er)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===$a||n===Ka||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ne({vertexShader:vg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xg extends $i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new yg,m=e.getContextAttributes();let f=null,y=null;const x=[],w=[],P=new it;let C=null;const A=new He;A.layers.enable(1),A.viewport=new ie;const D=new He;D.layers.enable(2),D.viewport=new ie;const X=[A,D],v=new mg;v.layers.enable(1),v.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Jr,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Jr,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Jr,x[Y]=Q),Q.getHandSpace()};function O(Y){const Q=w.indexOf(Y.inputSource);if(Q===-1)return;const gt=x[Q];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<x.length;Y++){const Q=w[Y];Q!==null&&(w[Y]=null,x[Y].disconnect(Q))}S=null,F=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new kn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,gt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Wi:Fi,gt=m.stencil?Gi:oi);const Dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new kn(d.textureWidth,d.textureHeight,{format:rn,type:bn,depthTexture:new Bc(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){const gt=Y.removed[Q],ut=w.indexOf(gt);ut>=0&&(w[ut]=null,x[ut].disconnect(gt))}for(let Q=0;Q<Y.added.length;Q++){const gt=Y.added[Q];let ut=w.indexOf(gt);if(ut===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=w.length){w.push(gt),ut=Tt;break}else if(w[Tt]===null){w[Tt]=gt,ut=Tt;break}if(ut===-1)break}const Dt=x[ut];Dt&&Dt.connect(gt)}}const V=new R,Z=new R;function W(Y,Q,gt){V.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const ut=V.distanceTo(Z),Dt=Q.projectionMatrix.elements,Tt=gt.projectionMatrix.elements,Bt=Dt[14]/(Dt[10]-1),ee=Dt[14]/(Dt[10]+1),Ht=(Dt[9]+1)/Dt[5],L=(Dt[9]-1)/Dt[5],Fe=(Dt[8]-1)/Dt[0],zt=(Tt[8]+1)/Tt[0],Gt=Bt*Fe,At=Bt*zt,ae=ut/(-Fe+zt),Pt=ae*-Fe;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const E=Bt+ae,M=ee+ae,z=Gt-Pt,K=At+(ut-Pt),j=Ht*ee/M*E,$=L*ee/M*E;Y.projectionMatrix.makePerspective(z,K,j,$,E,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ct(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),v.near=D.near=A.near=Q,v.far=D.far=A.far=gt,(S!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,F=v.far);const ut=Y.parent,Dt=v.cameras;ct(v,ut);for(let Tt=0;Tt<Dt.length;Tt++)ct(Dt[Tt],ut);Dt.length===2?W(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),ht(Y,v,ut)};function ht(Y,Q,gt){gt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ps*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function Xt(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ut=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Tt=0;Tt<gt.length;Tt++){const Bt=gt[Tt];let ee=null;if(p!==null)ee=p.getViewport(Bt);else{const L=u.getViewSubImage(d,Bt);ee=L.viewport,Tt===0&&(t.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let Ht=X[Tt];Ht===void 0&&(Ht=new He,Ht.layers.enable(Tt),Ht.viewport=new ie,X[Tt]=Ht),Ht.matrix.fromArray(Bt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Bt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ee.x,ee.y,ee.width,ee.height),Tt===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(Ht)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Tt=u.getDepthInformation(gt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let gt=0;gt<x.length;gt++){const ut=w[gt],Dt=x[gt];ut!==null&&Dt!==void 0&&Dt.update(ut,Q,c||a)}yt&&yt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Zt=new kc;Zt.setAnimationLoop(Xt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}}const Kn=new cn,Mg=new te;function Sg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),x=y.envMap,w=y.envMapRotation;x&&(m.envMap.value=x,Kn.copy(w),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Kn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const w=x.program;n.uniformBlockBinding(y,w)}function c(y,x){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(y,P);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const x=u();y.__bindingPointIndex=x;const w=i.createBuffer(),P=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],w=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,A=w.length;C<A;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let X=0,v=D.length;X<v;X++){const S=D[X];if(p(S,C,X,P)===!0){const F=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let q=0;q<O.length;q++){const V=O[q],Z=_(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+H,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,w,P){const C=y.value,A=x+"_"+w;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const D=P[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(y){const x=y.uniforms;let w=0;const P=16;for(let A=0,D=x.length;A<D;A++){const X=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,S=X.length;v<S;v++){const F=X[v],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,q=O.length;H<q;H++){const V=O[H],Z=_(V),W=w%P,ct=W%Z.boundary,ht=W+ct;w+=ct,ht!==0&&P-ht<Z.storage&&(w+=P-ht),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=Z.storage}}}const C=w%P;return C>0&&(w+=P-C),y.__size=w,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class bg{constructor(t={}){const{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=On,this.toneMappingExposure=1;const x=this;let w=!1,P=0,C=0,A=null,D=-1,X=null;const v=new ie,S=new ie;let F=null;const O=new vt(0);let H=0,q=e.width,V=e.height,Z=1,W=null,ct=null;const ht=new ie(0,0,q,V),yt=new ie(0,0,q,V);let Xt=!1;const Zt=new vo;let Y=!1,Q=!1;const gt=new te,ut=new te,Dt=new R,Tt=new ie,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Ht(){return A===null?Z:1}let L=n;function Fe(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const U="webgl2";if(L=Fe(U,b),L===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Gt,At,ae,Pt,E,M,z,K,j,$,xt,st,dt,Wt,tt,ft,Ct,Rt,pt,kt,It,se,I;function ot(){zt=new Rp(L),zt.init(),It=new pg(L,zt),Gt=new wp(L,zt,t,It),At=new ug(L),Gt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),ae=new Dp(L),Pt=new Zm,E=new fg(L,zt,At,Pt,Gt,It,ae),M=new Tp(x),z=new Cp(x),K=new zu(L),se=new Mp(L,K),j=new Pp(L,K,ae,se),$=new Up(L,j,K,ae),Rt=new Ip(L,Gt,E),tt=new bp(Pt),xt=new Km(x,M,z,zt,Gt,se,tt),st=new Sg(x,Pt),dt=new jm,Wt=new sg(zt),Ct=new xp(x,M,z,At,$,d,l),ft=new cg(x,$,Gt),I=new wg(L,ae,Gt,At),pt=new Sp(L,zt,ae),kt=new Lp(L,zt,ae),ae.programs=xt.programs,x.capabilities=Gt,x.extensions=zt,x.properties=Pt,x.renderLists=dt,x.shadowMap=ft,x.state=At,x.info=ae}ot();const G=new xg(x,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(q,V,!1))},this.getSize=function(b){return b.set(q,V)},this.setSize=function(b,U,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,V=U,e.width=Math.floor(b*Z),e.height=Math.floor(U*Z),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(q*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,U,k){q=b,V=U,Z=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(ht)},this.setViewport=function(b,U,k,B){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,U,k,B),At.viewport(v.copy(ht).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(yt)},this.setScissor=function(b,U,k,B){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,U,k,B),At.scissor(S.copy(yt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){At.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){ct=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,U=!0,k=!0){let B=0;if(b){let N=!1;if(A!==null){const et=A.texture.format;N=et===ho||et===co||et===lo}if(N){const et=A.texture.type,at=et===bn||et===oi||et===fs||et===Gi||et===ro||et===ao,mt=Ct.getClearColor(),_t=Ct.getClearAlpha(),bt=mt.r,Et=mt.g,Mt=mt.b;at?(p[0]=bt,p[1]=Et,p[2]=Mt,p[3]=_t,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=bt,g[1]=Et,g[2]=Mt,g[3]=_t,L.clearBufferiv(L.COLOR,0,g))}else B|=L.COLOR_BUFFER_BIT}U&&(B|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),dt.dispose(),Wt.dispose(),Pt.dispose(),M.dispose(),z.dispose(),$.dispose(),se.dispose(),I.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Po),G.removeEventListener("sessionend",Lo),Gn.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=ae.autoReset,U=ft.enabled,k=ft.autoUpdate,B=ft.needsUpdate,N=ft.type;ot(),ae.autoReset=b,ft.enabled=U,ft.autoUpdate=k,ft.needsUpdate=B,ft.type=N}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vt(b){const U=b.target;U.removeEventListener("dispose",Vt),pe(U)}function pe(b){Pe(b),Pt.remove(b)}function Pe(b){const U=Pt.get(b).programs;U!==void 0&&(U.forEach(function(k){xt.releaseProgram(k)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,B,N,et){U===null&&(U=Bt);const at=N.isMesh&&N.matrixWorld.determinant()<0,mt=ch(b,U,k,B,N);At.setMaterial(B,at);let _t=k.index,bt=1;if(B.wireframe===!0){if(_t=j.getWireframeAttribute(k),_t===void 0)return;bt=2}const Et=k.drawRange,Mt=k.attributes.position;let Jt=Et.start*bt,oe=(Et.start+Et.count)*bt;et!==null&&(Jt=Math.max(Jt,et.start*bt),oe=Math.min(oe,(et.start+et.count)*bt)),_t!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,_t.count)):Mt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Mt.count));const ue=oe-Jt;if(ue<0||ue===1/0)return;se.setup(N,B,mt,k,_t);let Oe,$t=pt;if(_t!==null&&(Oe=K.get(_t),$t=kt,$t.setIndex(Oe)),N.isMesh)B.wireframe===!0?(At.setLineWidth(B.wireframeLinewidth*Ht()),$t.setMode(L.LINES)):$t.setMode(L.TRIANGLES);else if(N.isLine){let St=B.linewidth;St===void 0&&(St=1),At.setLineWidth(St*Ht()),N.isLineSegments?$t.setMode(L.LINES):N.isLineLoop?$t.setMode(L.LINE_LOOP):$t.setMode(L.LINE_STRIP)}else N.isPoints?$t.setMode(L.POINTS):N.isSprite&&$t.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,Me=N._multiDrawCounts,Kt=N._multiDrawCount,Ze=_t?K.get(_t).bytesPerElement:1,ui=Pt.get(B).currentProgram.getUniforms();for(let ze=0;ze<Kt;ze++)ui.setValue(L,"_gl_DrawID",ze),$t.render(St[ze]/Ze,Me[ze])}else if(N.isInstancedMesh)$t.renderInstances(Jt,ue,N.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,St);$t.renderInstances(Jt,ue,Me)}else $t.render(Jt,ue)};function qt(b,U,k){b.transparent===!0&&b.side===$e&&b.forceSinglePass===!1?(b.side=Re,b.needsUpdate=!0,ys(b,U,k),b.side=zn,b.needsUpdate=!0,ys(b,U,k),b.side=$e):ys(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),m=Wt.get(k),m.init(U),y.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let at=0;at<et.length;at++){const mt=et[at];qt(mt,k,N),B.add(mt)}else qt(et,k,N),B.add(et)}),y.pop(),m=null,B},this.compileAsync=function(b,U,k=null){const B=this.compile(b,U,k);return new Promise(N=>{function et(){if(B.forEach(function(at){Pt.get(at).currentProgram.isReady()&&B.delete(at)}),B.size===0){N(b);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Le=null;function dn(b){Le&&Le(b)}function Po(){Gn.stop()}function Lo(){Gn.start()}const Gn=new kc;Gn.setAnimationLoop(dn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){Le=b,G.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},G.addEventListener("sessionstart",Po),G.addEventListener("sessionend",Lo),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),m=Wt.get(b,y.length),m.init(U),y.push(m),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Zt.setFromProjectionMatrix(ut),Q=this.localClippingEnabled,Y=tt.init(this.clippingPlanes,Q),_=dt.get(b,f.length),_.init(),f.push(_),G.enabled===!0&&G.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&yr(et,U,-1/0,x.sortObjects)}yr(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,ct),ee=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ee&&Ct.addToRenderList(_,b),this.info.render.frame++,Y===!0&&tt.beginShadows();const k=m.state.shadowsArray;ft.render(k,b,U),Y===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let at=0,mt=et.length;at<mt;at++){const _t=et[at];Io(B,N,b,_t)}ee&&Ct.render(b);for(let at=0,mt=et.length;at<mt;at++){const _t=et[at];Do(_,b,_t,_t.viewport)}}else N.length>0&&Io(B,N,b,U),ee&&Ct.render(b),Do(_,b,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),se.resetDefaultState(),D=-1,X=null,y.pop(),y.length>0?(m=y[y.length-1],Y===!0&&tt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function yr(b,U,k,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Zt.intersectsSprite(b)){B&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const at=$.update(b),mt=b.material;mt.visible&&_.push(b,at,mt,k,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Zt.intersectsObject(b))){const at=$.update(b),mt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Tt.copy(at.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(mt)){const _t=at.groups;for(let bt=0,Et=_t.length;bt<Et;bt++){const Mt=_t[bt],Jt=mt[Mt.materialIndex];Jt&&Jt.visible&&_.push(b,at,Jt,k,Tt.z,Mt)}}else mt.visible&&_.push(b,at,mt,k,Tt.z,null)}}const et=b.children;for(let at=0,mt=et.length;at<mt;at++)yr(et[at],U,k,B)}function Do(b,U,k,B){const N=b.opaque,et=b.transmissive,at=b.transparent;m.setupLightsView(k),Y===!0&&tt.setGlobalState(x.clippingPlanes,k),B&&At.viewport(v.copy(B)),N.length>0&&_s(N,U,k),et.length>0&&_s(et,U,k),at.length>0&&_s(at,U,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Io(b,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new kn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Yi:bn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=m.state.transmissionRenderTarget[B.id],at=B.viewport||v;et.setSize(at.z,at.w);const mt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(O),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),ee&&Ct.render(k);const _t=x.toneMapping;x.toneMapping=On;const bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),Y===!0&&tt.setGlobalState(x.clippingPlanes,B),_s(b,k,B),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Mt=0,Jt=U.length;Mt<Jt;Mt++){const oe=U[Mt],ue=oe.object,Oe=oe.geometry,$t=oe.material,St=oe.group;if($t.side===$e&&ue.layers.test(B.layers)){const Me=$t.side;$t.side=Re,$t.needsUpdate=!0,Uo(ue,k,B,Oe,$t,St),$t.side=Me,$t.needsUpdate=!0,Et=!0}}Et===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}x.setRenderTarget(mt),x.setClearColor(O,H),bt!==void 0&&(B.viewport=bt),x.toneMapping=_t}function _s(b,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=b.length;N<et;N++){const at=b[N],mt=at.object,_t=at.geometry,bt=B===null?at.material:B,Et=at.group;mt.layers.test(k.layers)&&Uo(mt,U,k,_t,bt,Et)}}function Uo(b,U,k,B,N,et){b.onBeforeRender(x,U,k,B,N,et),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,k,B,b,et),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,x.renderBufferDirect(k,U,B,N,b,et),N.side=zn,N.needsUpdate=!0,x.renderBufferDirect(k,U,B,N,b,et),N.side=$e):x.renderBufferDirect(k,U,B,N,b,et),b.onAfterRender(x,U,k,B,N,et)}function ys(b,U,k){U.isScene!==!0&&(U=Bt);const B=Pt.get(b),N=m.state.lights,et=m.state.shadowsArray,at=N.state.version,mt=xt.getParameters(b,N.state,et,U,k),_t=xt.getProgramCacheKey(mt);let bt=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",Vt),bt=new Map,B.programs=bt);let Et=bt.get(_t);if(Et!==void 0){if(B.currentProgram===Et&&B.lightsStateVersion===at)return Fo(b,mt),Et}else mt.uniforms=xt.getUniforms(b),b.onBeforeCompile(mt,x),Et=xt.acquireProgram(mt,_t),bt.set(_t,Et),B.uniforms=mt.uniforms;const Mt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Fo(b,mt),B.needsLights=uh(b),B.lightsStateVersion=at,B.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Et,B.uniformsList=null,Et}function No(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ir.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Fo(b,U){const k=Pt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function ch(b,U,k,B,N){U.isScene!==!0&&(U=Bt),E.resetTextureUnits();const et=U.fog,at=B.isMeshStandardMaterial?U.environment:null,mt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vn,_t=(B.isMeshStandardMaterial?z:M).get(B.envMap||at),bt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Et=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let ue=On;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=x.toneMapping);const Oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$t=Oe!==void 0?Oe.length:0,St=Pt.get(B),Me=m.state.lights;if(Y===!0&&(Q===!0||b!==X)){const Xe=b===X&&B.id===D;tt.setState(B,b,Xe)}let Kt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Me.state.version||St.outputColorSpace!==mt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==_t||B.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==bt||St.vertexTangents!==Et||St.morphTargets!==Mt||St.morphNormals!==Jt||St.morphColors!==oe||St.toneMapping!==ue||St.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,St.__version=B.version);let Ze=St.currentProgram;Kt===!0&&(Ze=ys(B,U,N));let ui=!1,ze=!1,xr=!1;const de=Ze.getUniforms(),Cn=St.uniforms;if(At.useProgram(Ze.program)&&(ui=!0,ze=!0,xr=!0),B.id!==D&&(D=B.id,ze=!0),ui||X!==b){Gt.reverseDepthBuffer?(gt.copy(b.projectionMatrix),fu(gt),pu(gt),de.setValue(L,"projectionMatrix",gt)):de.setValue(L,"projectionMatrix",b.projectionMatrix),de.setValue(L,"viewMatrix",b.matrixWorldInverse);const Xe=de.map.cameraPosition;Xe!==void 0&&Xe.setValue(L,Dt.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,ze=!0,xr=!0)}if(N.isSkinnedMesh){de.setOptional(L,N,"bindMatrix"),de.setOptional(L,N,"bindMatrixInverse");const Xe=N.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),de.setValue(L,"boneTexture",Xe.boneTexture,E))}N.isBatchedMesh&&(de.setOptional(L,N,"batchingTexture"),de.setValue(L,"batchingTexture",N._matricesTexture,E),de.setOptional(L,N,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",N._indirectTexture,E),de.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",N._colorsTexture,E));const Mr=k.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&Rt.update(N,k,Ze),(ze||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,de.setValue(L,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Cn.envMap.value=_t,Cn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Cn.envMapIntensity.value=U.environmentIntensity),ze&&(de.setValue(L,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&hh(Cn,xr),et&&B.fog===!0&&st.refreshFogUniforms(Cn,et),st.refreshMaterialUniforms(Cn,B,Z,V,m.state.transmissionRenderTarget[b.id]),ir.upload(L,No(St),Cn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ir.upload(L,No(St),Cn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(L,"center",N.center),de.setValue(L,"modelViewMatrix",N.modelViewMatrix),de.setValue(L,"normalMatrix",N.normalMatrix),de.setValue(L,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xe=B.uniformsGroups;for(let Sr=0,dh=Xe.length;Sr<dh;Sr++){const Oo=Xe[Sr];I.update(Oo,Ze),I.bind(Oo,Ze)}}return Ze}function hh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function uh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,k){Pt.get(b.texture).__webglTexture=U,Pt.get(b.depthTexture).__webglTexture=k;const B=Pt.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const k=Pt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){A=b,P=U,C=k;let B=!0,N=null,et=!1,at=!1;if(b){const _t=Pt.get(b);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(_t.__hasExternalTextures)E.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Mt=b.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Pt.has(Mt)&&(b.width!==Mt.image.width||b.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(at=!0);const Et=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?N=Et[U][k]:N=Et[U],et=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?N=Et[k]:N=Et,v.copy(b.viewport),S.copy(b.scissor),F=b.scissorTest}else v.copy(ht).multiplyScalar(Z).floor(),S.copy(yt).multiplyScalar(Z).floor(),F=Xt;if(At.bindFramebuffer(L.FRAMEBUFFER,N)&&B&&At.drawBuffers(b,N),At.viewport(v),At.scissor(S),At.setScissorTest(F),et){const _t=Pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,k)}else if(at){const _t=Pt.get(b.texture),bt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,k||0,bt)}D=-1},this.readRenderTargetPixels=function(b,U,k,B,N,et,at){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(mt=mt[at]),mt){At.bindFramebuffer(L.FRAMEBUFFER,mt);try{const _t=b.texture,bt=_t.format,Et=_t.type;if(!Gt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&k>=0&&k<=b.height-N&&L.readPixels(U,k,B,N,It.convert(bt),It.convert(Et),et)}finally{const _t=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,B,N,et,at){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(mt=mt[at]),mt){const _t=b.texture,bt=_t.format,Et=_t.type;if(!Gt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-B&&k>=0&&k<=b.height-N){At.bindFramebuffer(L.FRAMEBUFFER,mt);const Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),L.readPixels(U,k,B,N,It.convert(bt),It.convert(Et),0);const Jt=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,Jt);const oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await du(L,oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(Mt),L.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(b.image.width*B),et=Math.floor(b.image.height*B),at=U!==null?U.x:0,mt=U!==null?U.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,at,mt,N,et),At.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,B=null,N=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let et,at,mt,_t,bt,Et;k!==null?(et=k.max.x-k.min.x,at=k.max.y-k.min.y,mt=k.min.x,_t=k.min.y):(et=b.image.width,at=b.image.height,mt=0,_t=0),B!==null?(bt=B.x,Et=B.y):(bt=0,Et=0);const Mt=It.convert(U.format),Jt=It.convert(U.type);E.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=L.getParameter(L.UNPACK_ROW_LENGTH),ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Oe=L.getParameter(L.UNPACK_SKIP_PIXELS),$t=L.getParameter(L.UNPACK_SKIP_ROWS),St=L.getParameter(L.UNPACK_SKIP_IMAGES),Me=b.isCompressedTexture?b.mipmaps[N]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,_t),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,bt,Et,et,at,Mt,Jt,Me.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,bt,Et,Me.width,Me.height,Mt,Me.data):L.texSubImage2D(L.TEXTURE_2D,N,bt,Et,et,at,Mt,Jt,Me),L.pixelStorei(L.UNPACK_ROW_LENGTH,oe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,St),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,B=null,N=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let et,at,mt,_t,bt,Et,Mt,Jt,oe;const ue=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(et=k.max.x-k.min.x,at=k.max.y-k.min.y,mt=k.max.z-k.min.z,_t=k.min.x,bt=k.min.y,Et=k.min.z):(et=ue.width,at=ue.height,mt=ue.depth,_t=0,bt=0,Et=0),B!==null?(Mt=B.x,Jt=B.y,oe=B.z):(Mt=0,Jt=0,oe=0);const Oe=It.convert(U.format),$t=It.convert(U.type);let St;if(U.isData3DTexture)E.setTexture3D(U,0),St=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)E.setTexture2DArray(U,0),St=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Me=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),ui=L.getParameter(L.UNPACK_SKIP_ROWS),ze=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(St,N,Mt,Jt,oe,et,at,mt,Oe,$t,ue.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(St,N,Mt,Jt,oe,et,at,mt,Oe,ue.data):L.texSubImage3D(St,N,Mt,Jt,oe,et,at,mt,Oe,$t,ue),L.pixelStorei(L.UNPACK_ROW_LENGTH,Me),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,ui),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&L.generateMipmap(St),At.unbindTexture()},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,At.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===uo?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===mr?"display-p3":"srgb"}}class xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tg extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new R;class ur{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ur(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xc extends Ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ei;const ns=new R,Ai=new R,Ci=new R,Ri=new it,is=new it,qc=new te,Hs=new R,ss=new R,Vs=new R,Dl=new it,jr=new it,Il=new it;class Ag extends le{constructor(t=new Xc){if(super(),this.isSprite=!0,this.type="Sprite",Ei===void 0){Ei=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eg(e,5);Ei.setIndex([0,1,2,0,2,3]),Ei.setAttribute("position",new ur(n,3,0,!1)),Ei.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Ei,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Gs(Hs.set(-.5,-.5,0),Ci,a,Ai,s,r),Gs(ss.set(.5,-.5,0),Ci,a,Ai,s,r),Gs(Vs.set(.5,.5,0),Ci,a,Ai,s,r),Dl.set(0,0),jr.set(1,0),Il.set(1,1);let o=t.ray.intersectTriangle(Hs,ss,Vs,!1,ns);if(o===null&&(Gs(ss.set(-.5,.5,0),Ci,a,Ai,s,r),jr.set(0,1),o=t.ray.intersectTriangle(Hs,Vs,ss,!1,ns),o===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:Ke.getInterpolation(ns,Hs,ss,Vs,Dl,jr,Il,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(i,t,e,n,s,r){Ri.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(is.x=r*Ri.x-s*Ri.y,is.y=s*Ri.x+r*Ri.y):is.copy(Ri),i.copy(t),i.x+=is.x,i.y+=is.y,i.applyMatrix4(qc)}class Cg extends Ee{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ie,h=Ie,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new te,Nl=new te,Ws=[],Fl=new hi,Rg=new te,rs=new Ot,as=new ms;class Xs extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),Fl.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Fl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),as.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),Nl.multiplyMatrices(n,Pi),rs.matrixWorld=Nl,rs.raycast(t,Ws);for(let a=0,o=Ws.length;a<o;a++){const l=Ws[a];l.instanceId=r,l.object=this,e.push(l)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cg(new Float32Array(s*this.count),s,this.count,oo,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pg extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,l=new te;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(xe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mo extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lg extends Mo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const qs=new R,Qr=new So,ta=new So,ea=new So;class Dg extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ea.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ea.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qr.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ol(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ig(i,t){const e=1-i;return e*e*t}function Ug(i,t){return 2*(1-i)*i*t}function Ng(i,t){return i*i*t}function us(i,t,e,n){return Ig(i,t)+Ug(i,e)+Ng(i,n)}function Fg(i,t){const e=1-i;return e*e*e*t}function Og(i,t){const e=1-i;return 3*e*e*i*t}function zg(i,t){return 3*(1-i)*i*i*t}function kg(i,t){return i*i*i*t}function ds(i,t,e,n,s){return Fg(i,t)+Og(i,e)+zg(i,n)+kg(i,s)}class Yc extends un{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bg extends un{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y),ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $c extends un{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hg extends un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kc extends un{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vg extends un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y),us(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ol(o,l.x,c.x,h.x,u.x),Ol(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:Lg,CatmullRomCurve3:Dg,CubicBezierCurve:Yc,CubicBezierCurve3:Bg,EllipseCurve:Mo,LineCurve:$c,LineCurve3:Hg,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:Vg,SplineCurve:Zc});class Gg extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new zl[s.type]().fromJSON(s))}return this}}class Wg extends Gg{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $c(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kc(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Yc(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Mo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wo extends Ge{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,d=new it,p=new R,g=new R,_=new R;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=e;y++){const x=n+y*h*s,w=Math.sin(x),P=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*w,u.y=t[C].y,u.z=t[C].x*P,a.push(u.x,u.y,u.z),d.x=y/e,d.y=C/(t.length-1),o.push(d.x,d.y);const A=l[3*C+0]*w,D=l[3*C+1],X=l[3*C+0]*P;c.push(A,D,X)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const w=x+y*t.length,P=w,C=w+t.length,A=w+t.length+1,D=w+1;r.push(P,C,D),r.push(A,D,C)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.points,t.segments,t.phiStart,t.phiLength)}}class bo extends wo{constructor(t=1,e=1,n=4,s=8){const r=new Wg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class We extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2));function y(){const w=new R,P=new R;let C=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const X=[],v=D/r,S=v*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,H=O*l+o,q=Math.sin(H),V=Math.cos(H);P.x=S*q,P.y=-v*n+m,P.z=S*V,u.push(P.x,P.y,P.z),w.set(q,A,V).normalize(),d.push(w.x,w.y,w.z),p.push(O,1-v),X.push(g++)}_.push(X)}for(let D=0;D<s;D++)for(let X=0;X<r;X++){const v=_[X][D],S=_[X+1][D],F=_[X+1][D+1],O=_[X][D+1];t>0&&(h.push(v,S,O),C+=3),e>0&&(h.push(S,F,O),C+=3)}c.addGroup(f,C,0),f+=C}function x(w){const P=g,C=new it,A=new R;let D=0;const X=w===!0?t:e,v=w===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const S=g;for(let F=0;F<=s;F++){const H=F/s*l+o,q=Math.cos(H),V=Math.sin(H);A.x=X*V,A.y=m*v,A.z=X*q,u.push(A.x,A.y,A.z),d.push(0,v,0),C.x=q*.5+.5,C.y=V*.5*v+.5,p.push(C.x,C.y),g++}for(let F=0;F<s;F++){const O=P+F,H=S+F;w===!0?h.push(H,H+1,O):h.push(H+1,H,O),D+=3}c.addGroup(f,D,w===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends We{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new R,w=new R,P=new R;for(let C=0;C<e.length;C+=3)p(e[C+0],x),p(e[C+1],w),p(e[C+2],P),l(x,w,P,y)}function l(y,x,w,P){const C=P+1,A=[];for(let D=0;D<=C;D++){A[D]=[];const X=y.clone().lerp(w,D/C),v=x.clone().lerp(w,D/C),S=C-D;for(let F=0;F<=S;F++)F===0&&D===C?A[D][F]=X:A[D][F]=X.clone().lerp(v,F/S)}for(let D=0;D<C;D++)for(let X=0;X<2*(C-D)-1;X++){const v=Math.floor(X/2);X%2===0?(d(A[D][v+1]),d(A[D+1][v]),d(A[D][v])):(d(A[D][v+1]),d(A[D+1][v+1]),d(A[D+1][v]))}}function c(y){const x=new R;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(y),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){const y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const w=m(y)/2/Math.PI+.5,P=f(y)/Math.PI+.5;a.push(w,1-P)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],w=a[y+2],P=a[y+4],C=Math.max(x,w,P),A=Math.min(x,w,P);C>.9&&A<.1&&(x<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){const w=y*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){const y=new R,x=new R,w=new R,P=new R,C=new it,A=new it,D=new it;for(let X=0,v=0;X<r.length;X+=9,v+=6){y.set(r[X+0],r[X+1],r[X+2]),x.set(r[X+3],r[X+4],r[X+5]),w.set(r[X+6],r[X+7],r[X+8]),C.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),P.copy(y).add(x).add(w).divideScalar(3);const S=m(P);_(C,v+0,y,S),_(A,v+2,x,S),_(D,v+4,w,S)}}function _(y,x,w,P){P<0&&y.x===1&&(a[x]=y.x-1),w.x===0&&w.z===0&&(a[x]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}class vr extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class Bn extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let w=0;f===0&&a===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(s+C*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+w,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=h[f][y+1],w=h[f][y],P=h[f+1][y],C=h[f+1][y+1];(f!==0||a>0)&&p.push(x,w,C),(f!==n-1||l<Math.PI)&&p.push(w,P,C)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xg extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lt extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _r extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qg extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new te,kl=new R,Bl=new R;class Jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hl=new te,os=new R,ia=new R;class Yg extends Jc{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class $g extends _r{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kg extends Jc{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zg extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jg extends _r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ys;class jg{static getContext(){return Ys===void 0&&(Ys=new(window.AudioContext||window.webkitAudioContext)),Ys}static setContext(t){Ys=t}}class Ao{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vl(){return performance.now()}const Zn=new R,Gl=new ci,Qg=new R,Jn=new R;class t0 extends le{constructor(){super(),this.type="AudioListener",this.context=jg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ao}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zn,Gl,Qg),Jn.set(0,0,-1).applyQuaternion(Gl),e.positionX){const s=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Zn.x,s),e.positionY.linearRampToValueAtTime(Zn.y,s),e.positionZ.linearRampToValueAtTime(Zn.z,s),e.forwardX.linearRampToValueAtTime(Jn.x,s),e.forwardY.linearRampToValueAtTime(Jn.y,s),e.forwardZ.linearRampToValueAtTime(Jn.z,s),e.upX.linearRampToValueAtTime(n.x,s),e.upY.linearRampToValueAtTime(n.y,s),e.upZ.linearRampToValueAtTime(n.z,s)}else e.setPosition(Zn.x,Zn.y,Zn.z),e.setOrientation(Jn.x,Jn.y,Jn.z,n.x,n.y,n.z)}}class sr extends le{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const jn=new R,Wl=new ci,e0=new R,Qn=new R;class n0 extends sr{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(jn,Wl,e0),Qn.set(0,0,1).applyQuaternion(Wl);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(jn.x,n),e.positionY.linearRampToValueAtTime(jn.y,n),e.positionZ.linearRampToValueAtTime(jn.z,n),e.orientationX.linearRampToValueAtTime(Qn.x,n),e.orientationY.linearRampToValueAtTime(Qn.y,n),e.orientationZ.linearRampToValueAtTime(Qn.z,n)}else e.setPosition(jn.x,jn.y,jn.z),e.setOrientation(Qn.x,Qn.y,Qn.z)}}const Xl=new te;class Co{constructor(t,e,n=0,s=1/0){this.ray=new po(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Qa(t[s],this,n,e);return n.sort(ql),n}}function ql(i,t){return i.distance-t.distance}function Qa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Qa(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const i0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const s0=new _o(-1,1,1,-1,0,1);class r0 extends Ge{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}}const a0=new r0;class jc{constructor(t){this._mesh=new Ot(a0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,s0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qc extends gs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=go.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new jc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yl extends gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class o0 extends gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class l0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qc(i0),this.copyPass.material.blending=Mn,this.clock=new Ao}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Yl!==void 0&&(a instanceof Yl?n=!0:a instanceof o0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class c0 extends gs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const h0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class u0 extends gs{constructor(){super();const t=h0;this.uniforms=go.clone(t.uniforms),this.material=new Xg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new jc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const d0={uniforms:{tDiffuse:{value:null},uVignette:{value:.35},uGrade:{value:new vt(1,.98,.93)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette;
    uniform vec3 uGrade;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      color.rgb *= uGrade;
      vec2 d = vUv - 0.5;
      float vig = 1.0 - dot(d, d) * uVignette * 2.2;
      color.rgb *= clamp(vig, 0.55, 1.0);
      gl_FragColor = color;
    }
  `};class f0{constructor(t){T(this,"renderer");T(this,"scene");T(this,"camera");T(this,"composer");T(this,"gradePass");T(this,"container");T(this,"resolutionScale",1);T(this,"postProcessingEnabled",!0);this.container=t,this.scene=new Tg,this.camera=new He(68,window.innerWidth/window.innerHeight,.1,900),this.renderer=new bg({antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ua,this.renderer.toneMapping=io,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=tn,this.renderer.domElement.id="game-canvas",t.appendChild(this.renderer.domElement),this.composer=new l0(this.renderer);const e=new c0(this.scene,this.camera);this.composer.addPass(e),this.gradePass=new Qc(d0),this.composer.addPass(this.gradePass),this.composer.addPass(new u0),this.resize(),window.addEventListener("resize",()=>this.resize())}setGraphicsPreset(t){t==="low"?(this.renderer.shadowMap.enabled=!1,this.resolutionScale=.75):t==="medium"?(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=no,this.resolutionScale=.9):(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ua,this.resolutionScale=1),this.resize()}setPostProcessing(t){this.postProcessingEnabled=t}setResolutionScale(t){this.resolutionScale=t,this.resize()}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix();const n=Math.min(window.devicePixelRatio,2)*this.resolutionScale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!0),this.composer.setSize(t,e),this.composer.setPixelRatio(n)}render(){this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.postProcessingEnabled?this.composer.render():this.renderer.render(this.scene,this.camera)}getDrawCallInfo(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}}}class p0{constructor(t){T(this,"keys",new Set);T(this,"keysPressed",new Set);T(this,"keysReleased",new Set);T(this,"mouseDX",0);T(this,"mouseDY",0);T(this,"mouseButtons",new Set);T(this,"mouseButtonsPressed",new Set);T(this,"mouseButtonsReleased",new Set);T(this,"wheelDelta",0);T(this,"pointerLocked",!1);T(this,"settings",{sensitivity:1,aimSensitivity:.6,invertY:!1});T(this,"enabled",!0);T(this,"target");T(this,"requestLock",()=>{this.enabled&&!this.pointerLocked&&this.target.requestPointerLock()});T(this,"onLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.target});T(this,"onKeyDown",t=>{if(!this.enabled)return;const e=t.code;this.keys.has(e)||this.keysPressed.add(e),this.keys.add(e),["Space","Tab"].includes(e)&&t.preventDefault()});T(this,"onKeyUp",t=>{this.keys.delete(t.code),this.keysReleased.add(t.code)});T(this,"onMouseDown",t=>{this.enabled&&(this.mouseButtons.add(t.button),this.mouseButtonsPressed.add(t.button))});T(this,"onMouseUp",t=>{this.mouseButtons.delete(t.button),this.mouseButtonsReleased.add(t.button)});T(this,"onMouseMove",t=>{!this.enabled||!this.pointerLocked||(this.mouseDX+=t.movementX,this.mouseDY+=t.movementY)});T(this,"onWheel",t=>{this.enabled&&(this.wheelDelta+=Math.sign(t.deltaY))});T(this,"clearAll",()=>{this.keys.clear()});this.target=t,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),t.addEventListener("wheel",this.onWheel,{passive:!0}),t.addEventListener("click",this.requestLock),document.addEventListener("pointerlockchange",this.onLockChange),window.addEventListener("blur",this.clearAll),t.addEventListener("contextmenu",e=>e.preventDefault())}isDown(t){return this.keys.has(t)}wasPressed(t){return this.keysPressed.has(t)}wasReleased(t){return this.keysReleased.has(t)}isMouseDown(t){return this.mouseButtons.has(t)}wasMousePressed(t){return this.mouseButtonsPressed.has(t)}endFrame(){this.keysPressed.clear(),this.keysReleased.clear(),this.mouseButtonsPressed.clear(),this.mouseButtonsReleased.clear(),this.mouseDX=0,this.mouseDY=0,this.wheelDelta=0}exitPointerLock(){document.pointerLockElement&&document.exitPointerLock()}}class m0{constructor(){T(this,"handlers",{})}on(t,e){var n;return((n=this.handlers)[t]??(n[t]=new Set)).add(e),()=>this.off(t,e)}off(t,e){this.handlers[t]?.delete(e)}emit(t,e){this.handlers[t]?.forEach(n=>n(e))}}const $l={graphicsPreset:"high",resolutionScale:1,shadowQuality:"high",vegetationDensity:"high",postProcessing:!0,masterVolume:.8,sfxVolume:1,musicVolume:.6,mouseSensitivity:1,aimSensitivity:.6,invertY:!1,cameraShake:!0,reducedMotion:!1,highContrastPrompts:!1},Kl="last-sector-save-v1";let sa=null;function g0(){try{const i="__ls_test__";return localStorage.setItem(i,"1"),localStorage.removeItem(i),!0}catch{return!1}}const Zl=g0();class $s{static load(){const t={settings:{...$l},loadout:"assault",bestExtractionTime:null,successfulExtractions:0,totalMatches:0};if(!Zl)return sa??t;try{const e=localStorage.getItem(Kl);if(!e)return t;const n=JSON.parse(e);return{settings:{...$l,...n.settings},loadout:n.loadout??"assault",bestExtractionTime:n.bestExtractionTime??null,successfulExtractions:n.successfulExtractions??0,totalMatches:n.totalMatches??0}}catch{return t}}static save(t){if(!Zl){sa=t;return}try{localStorage.setItem(Kl,JSON.stringify(t))}catch{sa=t}}}function En(i,t=44100){return new OfflineAudioContext(1,Math.ceil(i*t),t)}async function An(i){return i.startRendering()}function vs(i,t){const e=i.createBuffer(1,Math.ceil(t*i.sampleRate),i.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return e}function th(i,t){const e=i.getChannelData(0),n=Math.min(e.length,Math.floor(t*i.sampleRate));for(let s=0;s<n;s++){const r=s/n;e[e.length-n+s]*=1-r}return i}async function v0(i){const e={rifle:{dur:.28,body:900,crack:2600,boom:140,tone:.5},smg:{dur:.16,body:1300,crack:3200,boom:180,tone:.35},marksman:{dur:.35,body:700,crack:2200,boom:110,tone:.6},shotgun:{dur:.4,body:500,crack:1800,boom:90,tone:.75},sniper:{dur:.5,body:450,crack:1600,boom:70,tone:.85},pistol:{dur:.22,body:1e3,crack:2800,boom:200,tone:.4}}[i],n=En(e.dur),s=n.createBufferSource();s.buffer=vs(n,e.dur);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=e.crack,r.Q.value=.7;const a=n.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(e.body*2.2,0),a.frequency.exponentialRampToValueAtTime(e.boom,e.dur);const o=n.createGain();o.gain.setValueAtTime(1,0),o.gain.exponentialRampToValueAtTime(.001,e.dur);const l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(e.boom*2,0),l.frequency.exponentialRampToValueAtTime(e.boom*.6,e.dur);const c=n.createGain();return c.gain.setValueAtTime(e.tone,0),c.gain.exponentialRampToValueAtTime(.001,e.dur*.9),s.connect(r).connect(a).connect(o).connect(n.destination),l.connect(c).connect(n.destination),s.start(0),l.start(0),l.stop(e.dur),An(n)}async function _0(i){const e=En(.12),n=e.createBufferSource();n.buffer=vs(e,.12);const s=e.createBiquadFilter(),r=e.createGain();return r.gain.setValueAtTime(.8,0),r.gain.exponentialRampToValueAtTime(.001,.12),i==="grass"?(s.type="lowpass",s.frequency.value=900):i==="concrete"?(s.type="bandpass",s.frequency.value=1800,s.Q.value=1):i==="metal"?(s.type="highpass",s.frequency.value=2200):(s.type="bandpass",s.frequency.value=1200,s.Q.value=.8),n.connect(s).connect(r).connect(e.destination),n.start(0),An(e)}async function y0(i){const t=i==="metal"?.3:.18,e=En(t),n=e.createBufferSource();n.buffer=vs(e,t);const s=e.createBiquadFilter(),r=e.createGain();r.gain.setValueAtTime(.7,0),r.gain.exponentialRampToValueAtTime(.001,t);const a={terrain:["lowpass",700],concrete:["bandpass",1500],metal:["highpass",2600],wood:["bandpass",1e3],body:["lowpass",500],rock:["bandpass",1300]},[o,l]=a[i];if(s.type=o,s.frequency.value=l,n.connect(s).connect(r).connect(e.destination),n.start(0),i==="metal"){const c=e.createOscillator();c.type="triangle",c.frequency.value=1800;const h=e.createGain();h.gain.setValueAtTime(.15,0),h.gain.exponentialRampToValueAtTime(.001,t),c.connect(h).connect(e.destination),c.start(0),c.stop(t)}return An(e)}async function x0(){const t=En(.18),e=t.createBufferSource();e.buffer=vs(t,.18);const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=2400,n.Q.value=3;const s=t.createGain();return s.gain.setValueAtTime(.6,0),s.gain.exponentialRampToValueAtTime(.001,.18),e.connect(n).connect(s).connect(t.destination),e.start(0),An(t)}async function M0(i){const e=En(.12),n=e.createOscillator();n.type="sine";const s={click:700,hover:500,confirm:620,error:220};n.frequency.setValueAtTime(s[i],0),i==="confirm"&&n.frequency.exponentialRampToValueAtTime(1e3,.12),i==="error"&&n.frequency.exponentialRampToValueAtTime(140,.12);const r=e.createGain();return r.gain.setValueAtTime(.35,0),r.gain.exponentialRampToValueAtTime(.001,.12),n.connect(r).connect(e.destination),n.start(0),n.stop(.12),An(e)}async function S0(){const t=En(1.2),e=t.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(320,0),e.frequency.linearRampToValueAtTime(460,1.2*.5),e.frequency.linearRampToValueAtTime(320,1.2);const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;const s=t.createGain();return s.gain.setValueAtTime(.001,0),s.gain.linearRampToValueAtTime(.4,.1),s.gain.linearRampToValueAtTime(.001,1.2),e.connect(n).connect(s).connect(t.destination),e.start(0),e.stop(1.2),An(t)}async function w0(){const t=En(.9),e=t.createOscillator();e.type="sine",e.frequency.value=880;const n=t.createGain();return n.gain.setValueAtTime(.001,0),n.gain.linearRampToValueAtTime(.35,.05),n.gain.linearRampToValueAtTime(.001,.4),n.gain.linearRampToValueAtTime(.35,.5),n.gain.linearRampToValueAtTime(.001,.9),e.connect(n).connect(t.destination),e.start(0),e.stop(.9),An(t)}async function b0(){const t=En(8),e=t.createBufferSource();e.buffer=vs(t,8),e.loop=!1;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=500;const s=t.createOscillator();s.frequency.value=.15;const r=t.createGain();r.gain.value=220,s.connect(r).connect(n.frequency);const a=t.createGain();a.gain.value=.18,e.connect(n).connect(a).connect(t.destination),e.start(0),s.start(0);const o=await An(t);return th(o,.5),o}async function T0(){const t=En(24),e=[55,55*1.5,55*1.19,55*2],n=t.createGain();n.gain.value=.22,n.connect(t.destination);for(const r of e){const a=t.createOscillator();a.type="sine",a.frequency.value=r;const o=t.createOscillator();o.type="sine",o.frequency.value=r*1.004;const l=t.createGain();l.gain.value=.5;const c=t.createOscillator();c.frequency.value=.05+Math.random()*.05;const h=t.createGain();h.gain.value=.15,c.connect(h).connect(l.gain),a.connect(l),o.connect(l),l.connect(n),a.start(0),o.start(0),c.start(0),a.stop(24),o.stop(24)}const s=await An(t);return th(s,1.5),s}const en={raven:{id:"raven",name:"RAVEN",slot:"primary",ammoType:"medium",automatic:!0,damage:26,headshotMultiplier:2,fireInterval:.1,magSize:30,reserveMax:180,reloadTime:2.3,pellets:1,hipSpread:.055,aimSpread:.008,movingSpreadMult:1.8,sprintSpreadMult:3,recoilVertical:.016,recoilHorizontal:.006,recoilRecoverySpeed:9,rangeStart:45,rangeEnd:110,minDamageMult:.55,bulletSpeed:340,adsZoom:.82,adsTime:.18,muzzleFlashSize:1,soundProfile:"rifle"},vex:{id:"vex",name:"VEX",slot:"primary",ammoType:"light",automatic:!0,damage:17,headshotMultiplier:1.8,fireInterval:.072,magSize:40,reserveMax:240,reloadTime:1.9,pellets:1,hipSpread:.045,aimSpread:.012,movingSpreadMult:1.4,sprintSpreadMult:2.2,recoilVertical:.011,recoilHorizontal:.008,recoilRecoverySpeed:11,rangeStart:20,rangeEnd:55,minDamageMult:.4,bulletSpeed:320,adsZoom:.88,adsTime:.13,muzzleFlashSize:.85,soundProfile:"smg"},sentinel:{id:"sentinel",name:"SENTINEL",slot:"primary",ammoType:"precision",automatic:!1,damage:52,headshotMultiplier:2.2,fireInterval:.24,magSize:12,reserveMax:72,reloadTime:2.6,pellets:1,hipSpread:.05,aimSpread:.004,movingSpreadMult:2.2,sprintSpreadMult:3.5,recoilVertical:.038,recoilHorizontal:.012,recoilRecoverySpeed:7,rangeStart:90,rangeEnd:180,minDamageMult:.7,bulletSpeed:420,adsZoom:.62,adsTime:.22,muzzleFlashSize:1.2,soundProfile:"marksman"},breach:{id:"breach",name:"BREACH",slot:"primary",ammoType:"shells",automatic:!1,damage:22,headshotMultiplier:1.6,fireInterval:.75,magSize:6,reserveMax:36,reloadTime:.55,pellets:9,hipSpread:.09,aimSpread:.055,movingSpreadMult:1.3,sprintSpreadMult:1.8,recoilVertical:.05,recoilHorizontal:.02,recoilRecoverySpeed:6,rangeStart:8,rangeEnd:22,minDamageMult:.2,bulletSpeed:280,adsZoom:.92,adsTime:.16,muzzleFlashSize:1.6,soundProfile:"shotgun"},longbow:{id:"longbow",name:"LONGBOW",slot:"primary",ammoType:"heavy",automatic:!1,damage:95,headshotMultiplier:2.5,fireInterval:1.35,magSize:5,reserveMax:30,reloadTime:3.2,pellets:1,hipSpread:.07,aimSpread:.003,movingSpreadMult:2.5,sprintSpreadMult:4,recoilVertical:.09,recoilHorizontal:.02,recoilRecoverySpeed:5,rangeStart:130,rangeEnd:260,minDamageMult:.8,bulletSpeed:480,adsZoom:.4,adsTime:.3,muzzleFlashSize:1.8,soundProfile:"sniper"},sidewinder:{id:"sidewinder",name:"SIDEWINDER",slot:"sidearm",ammoType:"light",automatic:!1,damage:24,headshotMultiplier:2,fireInterval:.16,magSize:14,reserveMax:84,reloadTime:1.5,pellets:1,hipSpread:.04,aimSpread:.01,movingSpreadMult:1.5,sprintSpreadMult:2.4,recoilVertical:.02,recoilHorizontal:.009,recoilRecoverySpeed:10,rangeStart:30,rangeEnd:70,minDamageMult:.5,bulletSpeed:300,adsZoom:.9,adsTime:.12,muzzleFlashSize:.8,soundProfile:"pistol"}},E0={frag:{id:"frag",name:"Frag Pulse",fuseTime:2.2,radius:7,damage:110,throwSpeed:18},smoke:{id:"smoke",name:"Smoke Canister",fuseTime:1.4,radius:9,damage:0,throwSpeed:15}};class A0{constructor(t){T(this,"listener",new t0);T(this,"buffers",new Map);T(this,"pool",[]);T(this,"poolIndex",0);T(this,"ready",!1);T(this,"ambience",null);T(this,"music",null);T(this,"masterVolume",.8);T(this,"sfxVolume",1);T(this,"musicVolume",.6);T(this,"sceneRoot",null);t.add(this.listener);for(let e=0;e<24;e++)this.pool.push(new n0(this.listener))}async init(){try{const t=[];for(const e of Object.keys(en)){const n=en[e].soundProfile;t.push(v0(n).then(s=>this.buffers.set(`gun_${e}`,s)))}for(const e of["grass","concrete","metal","wood"])t.push(_0(e).then(n=>this.buffers.set(`step_${e}`,n)));for(const e of["terrain","concrete","metal","wood","body","rock"])t.push(y0(e).then(n=>this.buffers.set(`impact_${e}`,n)));t.push(x0().then(e=>this.buffers.set("reload",e)));for(const e of["click","hover","confirm","error"])t.push(M0(e).then(n=>this.buffers.set(`ui_${e}`,n)));t.push(S0().then(e=>this.buffers.set("zone_warning",e))),t.push(w0().then(e=>this.buffers.set("extraction_beacon",e))),t.push(b0().then(e=>this.buffers.set("ambience_wind",e))),t.push(T0().then(e=>this.buffers.set("music_bed",e))),await Promise.all(t),this.ready=!0}catch(t){console.warn("Audio synthesis failed; continuing without sound.",t),this.ready=!1}}getSource(){const t=this.pool[this.poolIndex];return this.poolIndex=(this.poolIndex+1)%this.pool.length,t.isPlaying&&t.stop(),t}playAt(t,e,n=1){if(!this.ready)return;const s=this.buffers.get(t);if(!s)return;const r=this.getSource();r.parent&&r.parent.remove(r);const a=new le;a.position.copy(e),a.add(r),this.sceneRoot?.add(a),r.setBuffer(s),r.setVolume(n*this.sfxVolume*this.masterVolume),r.setRefDistance(8),r.setRolloffFactor(1.6),r.setMaxDistance(220),r.play();const o=(s.duration+.05)*1e3;setTimeout(()=>{a.remove(r),this.sceneRoot?.remove(a)},o)}setSceneRoot(t){this.sceneRoot=t}playUI(t){if(!this.ready)return;const e=this.buffers.get(`ui_${t}`);if(!e)return;const n=new sr(this.listener);n.setBuffer(e),n.setVolume(.5*this.masterVolume),n.play()}startAmbience(){if(!this.ready||this.ambience)return;const t=this.buffers.get("ambience_wind");t&&(this.ambience=new sr(this.listener),this.ambience.setBuffer(t),this.ambience.setLoop(!0),this.ambience.setVolume(.4*this.masterVolume),this.ambience.play())}startMusic(){if(!this.ready||this.music)return;const t=this.buffers.get("music_bed");t&&(this.music=new sr(this.listener),this.music.setBuffer(t),this.music.setLoop(!0),this.music.setVolume(this.musicVolume*this.masterVolume),this.music.play())}updateVolumes(t,e,n){this.masterVolume=t,this.sfxVolume=e,this.musicVolume=n,this.ambience&&this.ambience.setVolume(.4*this.masterVolume),this.music&&this.music.setVolume(this.musicVolume*this.masterVolume)}stopAll(){this.ambience?.stop(),this.music?.stop(),this.ambience=null,this.music=null}bindGameEvents(t){t.on("weapon:fire",e=>this.playAt(`gun_${e.weaponId}`,e.position,e.isPlayer?.9:.75)),t.on("weapon:reload",e=>this.playAt("reload",e.position,.6)),t.on("player:footstep",e=>this.playAt(`step_${e.surface==="rock"||e.surface==="sand"?"concrete":e.surface}`,e.position,e.sprinting?.5:.3)),t.on("zone:warning",()=>this.playUI("error")),t.on("extraction:started",()=>this.playUI("confirm")),t.on("loot:pickup",()=>this.playUI("confirm"))}}const rr={assault:{id:"assault",name:"Assault",description:"Balanced automatic firepower for aggressive pushes and close-quarter clears.",primary:"raven",sidearm:"sidewinder",vest:1,helmet:1,bandages:2,medkits:0,frags:1,smokes:1},scout:{id:"scout",name:"Scout",description:"Light and fast — high mobility, close-range SMG, extra smoke for repositioning.",primary:"vex",sidearm:"sidewinder",vest:0,helmet:0,bandages:3,medkits:0,frags:0,smokes:2},marksman:{id:"marksman",name:"Marksman",description:"Precision engagements at range. Slower, but every shot counts.",primary:"sentinel",sidearm:"sidewinder",vest:1,helmet:0,bandages:2,medkits:1,frags:0,smokes:1},balanced:{id:"balanced",name:"Balanced",description:"A dependable all-rounder for players still learning the island.",primary:"raven",sidearm:"sidewinder",vest:1,helmet:1,bandages:1,medkits:1,frags:1,smokes:0}};function Ut(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n}class C0{constructor(t,e,n){T(this,"root");T(this,"screens",new Map);T(this,"callbacks");T(this,"selectedLoadout","assault");T(this,"save");T(this,"loadingFill");T(this,"resultsPanelEls");this.root=t,this.save=e,this.callbacks=n,this.selectedLoadout=e.loadout??"assault",this.buildLoadingScreen(),this.buildMainMenu(),this.buildLoadoutScreen(),this.buildPauseScreen(),this.buildSettingsScreen("pause"),this.buildSettingsScreen("menu"),this.buildHowToPlay(),this.buildResultsScreen()}btn(t,e,n="btn"){const s=Ut("button",n,t);return s.addEventListener("mouseenter",()=>this.callbacks.onUISound("hover")),s.addEventListener("click",()=>{this.callbacks.onUISound("click"),e()}),s}show(t){for(const[e,n]of this.screens)n.classList.toggle("hidden",e!==t)}hideAll(){for(const t of this.screens.values())t.classList.add("hidden")}register(t,e){e.classList.add("hidden"),this.root.appendChild(e),this.screens.set(t,e)}buildLoadingScreen(){const t=Ut("div","screen");t.id="loading-screen",t.innerHTML=`
      <div class="load-title">LAST SECTOR — LOADING BLACKRIDGE…</div>
      <div class="load-bar-track"><div class="load-bar-fill" id="load-fill"></div></div>
      <div class="load-tip" id="load-tip">Tip: The Signal Collapse always pushes toward the extraction point — use it to plan your route.</div>
    `,this.register("loading",t),this.loadingFill=t.querySelector("#load-fill")}setLoadProgress(t,e){if(this.loadingFill.style.width=`${Math.round(t*100)}%`,e){const n=this.screens.get("loading")?.querySelector("#load-tip");n&&(n.textContent=e)}}buildMainMenu(){const t=Ut("div","screen"),e=Ut("div","panel menu-panel");e.innerHTML=`
      <div class="title-block">
        <h1>LAST SECTOR</h1>
        <div class="subtitle">Operation Blackridge</div>
      </div>
    `,e.appendChild(this.btn("Deploy",()=>this.show("loadout"),"btn primary")),e.appendChild(this.btn("Loadout",()=>this.show("loadout"))),e.appendChild(this.btn("Settings",()=>this.show("settings-menu"))),e.appendChild(this.btn("How To Play",()=>this.show("how-to-play")));const n=Ut("div","menu-footer",`Best extraction: ${this.save.bestExtractionTime?this.save.bestExtractionTime.toFixed(0)+"s":"—"} · Extractions: ${this.save.successfulExtractions}`);e.appendChild(n),t.appendChild(e),this.register("menu",t)}updateMenuStats(t){this.save=t}buildLoadoutScreen(){const t=Ut("div","screen"),e=Ut("div","panel loadout-panel"),n=Ut("div","title-block");n.innerHTML='<h1 style="font-size:26px;letter-spacing:4px;">LOADOUT</h1>',e.appendChild(n);const s=Ut("div","loadout-classes"),r=Ut("div","loadout-details");e.appendChild(s),e.appendChild(r);const a=()=>{const l=rr[this.selectedLoadout];r.innerHTML=`
        <div class="loadout-slot"><div class="slot-label">Primary</div>${l.primary.toUpperCase()}</div>
        <div class="loadout-slot"><div class="slot-label">Sidearm</div>${l.sidearm.toUpperCase()}</div>
        <div class="loadout-slot"><div class="slot-label">Armor</div>Vest ${l.vest} · Helmet ${l.helmet}</div>
        <div class="loadout-slot"><div class="slot-label">Supplies</div>Bandage×${l.bandages} Medkit×${l.medkits} Frag×${l.frags} Smoke×${l.smokes}</div>
      `};for(const l of Object.keys(rr)){const c=rr[l],h=Ut("div","loadout-class"+(l===this.selectedLoadout?" selected":""));h.innerHTML=`<h3>${c.name}</h3><p>${c.description}</p>`,h.addEventListener("click",()=>{this.selectedLoadout=l,this.save.loadout=l,s.querySelectorAll(".loadout-class").forEach(u=>u.classList.remove("selected")),h.classList.add("selected"),a(),this.callbacks.onUISound("click")}),s.appendChild(h)}a();const o=Ut("div","results-actions");o.appendChild(this.btn("Back",()=>this.show("menu"))),o.appendChild(this.btn("Deploy",()=>this.callbacks.onDeploy(this.selectedLoadout),"btn primary")),e.appendChild(o),t.appendChild(e),this.register("loadout",t)}buildPauseScreen(){const t=Ut("div","screen"),e=Ut("div","panel menu-panel");e.innerHTML='<div class="title-block"><h1 style="font-size:30px;">PAUSED</h1></div>',e.appendChild(this.btn("Resume",()=>this.callbacks.onResume(),"btn primary")),e.appendChild(this.btn("Settings",()=>this.show("settings-pause"))),e.appendChild(this.btn("Restart Mission",()=>this.callbacks.onRestart())),e.appendChild(this.btn("Quit to Menu",()=>this.callbacks.onQuitToMenu(),"btn danger")),t.appendChild(e),this.register("pause",t)}buildSettingsScreen(t){const e=Ut("div","screen"),n=Ut("div","panel");n.style.padding="32px";const s=Ut("div","title-block");s.innerHTML='<h1 style="font-size:24px;letter-spacing:4px;">SETTINGS</h1>',n.appendChild(s);const r=Ut("div","settings-grid");n.appendChild(r);const a=this.save.settings,o=(u,d,p,g)=>{const _=Ut("div","settings-row");_.appendChild(Ut("label",void 0,u));const m=Ut("div","segmented");for(const f of d){const y=Ut("button","seg-btn"+(f===p?" active":""),f);y.addEventListener("click",()=>{m.querySelectorAll(".seg-btn").forEach(x=>x.classList.remove("active")),y.classList.add("active"),g(f),this.callbacks.onUISound("click")}),m.appendChild(y)}_.appendChild(m),r.appendChild(_)},l=(u,d,p,g,_,m)=>{const f=Ut("div","settings-row");f.appendChild(Ut("label",void 0,u));const y=Ut("input");y.type="range",y.min=String(d),y.max=String(p),y.step=String(g),y.value=String(_),y.addEventListener("input",()=>m(parseFloat(y.value))),f.appendChild(y),r.appendChild(f)},c=(u,d,p)=>{const g=Ut("div","settings-row checkbox-row"),_=Ut("input");_.type="checkbox",_.checked=d,_.addEventListener("change",()=>p(_.checked)),g.appendChild(_),g.appendChild(Ut("label",void 0,u)),r.appendChild(g)};r.appendChild(Ut("div","section-label","Graphics")),o("Preset",["low","medium","high"],a.graphicsPreset,u=>{a.graphicsPreset=u,this.callbacks.onSettingsChange(a)}),l("Resolution Scale",.5,1,.05,a.resolutionScale,u=>{a.resolutionScale=u,this.callbacks.onSettingsChange(a)}),o("Shadow Quality",["low","medium","high"],a.shadowQuality,u=>{a.shadowQuality=u,this.callbacks.onSettingsChange(a)}),o("Vegetation Density",["low","medium","high"],a.vegetationDensity,u=>{a.vegetationDensity=u,this.callbacks.onSettingsChange(a)}),c("Post-Processing",a.postProcessing,u=>{a.postProcessing=u,this.callbacks.onSettingsChange(a)}),r.appendChild(Ut("div","section-label","Audio")),l("Master Volume",0,1,.05,a.masterVolume,u=>{a.masterVolume=u,this.callbacks.onSettingsChange(a)}),l("SFX Volume",0,1,.05,a.sfxVolume,u=>{a.sfxVolume=u,this.callbacks.onSettingsChange(a)}),l("Music Volume",0,1,.05,a.musicVolume,u=>{a.musicVolume=u,this.callbacks.onSettingsChange(a)}),r.appendChild(Ut("div","section-label","Controls")),l("Mouse Sensitivity",.2,2,.05,a.mouseSensitivity,u=>{a.mouseSensitivity=u,this.callbacks.onSettingsChange(a)}),l("Aim Sensitivity",.2,2,.05,a.aimSensitivity,u=>{a.aimSensitivity=u,this.callbacks.onSettingsChange(a)}),c("Invert Y",a.invertY,u=>{a.invertY=u,this.callbacks.onSettingsChange(a)}),c("Camera Shake",a.cameraShake,u=>{a.cameraShake=u,this.callbacks.onSettingsChange(a)}),r.appendChild(Ut("div","section-label","Accessibility")),c("Reduced Motion",a.reducedMotion,u=>{a.reducedMotion=u,this.callbacks.onSettingsChange(a)}),c("High-Contrast Prompts",a.highContrastPrompts,u=>{a.highContrastPrompts=u,this.callbacks.onSettingsChange(a)});const h=Ut("div","results-actions");h.style.marginTop="18px",h.appendChild(this.btn("Back",()=>this.show(t==="menu"?"menu":"pause"),"btn primary")),n.appendChild(h),e.appendChild(n),this.register(`settings-${t}`,e)}buildHowToPlay(){const t=Ut("div","screen"),e=Ut("div","panel");e.style.width="520px",e.style.padding="32px",e.innerHTML=`
      <div class="title-block"><h1 style="font-size:24px;letter-spacing:4px;">HOW TO PLAY</h1></div>
      <div style="font-size:13px;line-height:2;color:rgba(231,226,211,0.85);">
        WASD Move · Mouse Look · Shift Sprint · C/Ctrl Crouch · Space Jump<br/>
        RMB Aim · LMB Fire · R Reload · F Interact/Loot<br/>
        1/2 Primaries · 3 Sidearm · 4 Heal · G Throwable<br/>
        Tab Inventory · M Map · Esc Pause · F3 Debug Overlay<br/><br/>
        Survive the Signal Collapse, loot the island's six locations, and reach extraction before the zone — or the enemy — closes in.
      </div>
    `,e.appendChild(this.btn("Back",()=>this.show("menu"),"btn primary")),t.appendChild(e),this.register("how-to-play",t)}buildResultsScreen(){const t=Ut("div","screen"),e=Ut("div","panel results-panel"),n=Ut("div","results-title"),s=Ut("div","results-reason"),r=Ut("div","stats-grid");e.appendChild(n),e.appendChild(s),e.appendChild(r);const a=Ut("div","results-actions");a.appendChild(this.btn("Retry",()=>this.callbacks.onRestart(),"btn primary")),a.appendChild(this.btn("Main Menu",()=>this.callbacks.onQuitToMenu())),e.appendChild(a),t.appendChild(e),this.register("results",t),this.resultsPanelEls={title:n,reason:s,grid:r}}showResults(t,e){const{title:n,reason:s,grid:r}=this.resultsPanelEls;n.textContent=t.success?"MISSION COMPLETE":"MISSION FAILED",n.className="results-title "+(t.success?"success":"fail"),s.textContent=e;const a=[["Survival Time",`${t.survivalTime.toFixed(0)}s`],["Kills",`${t.kills}`],["Accuracy",`${t.shotsFired>0?Math.round(t.shotsHit/t.shotsFired*100):0}%`],["Damage Dealt",`${Math.round(t.damageDealt)}`],["Loot Collected",`${t.lootCollected}`],["Distance Traveled",`${Math.round(t.distanceTraveled)}m`],["Extraction Bonus",`${t.extractionBonus}`],["Shots Fired",`${t.shotsFired}`]];r.innerHTML="";for(const[o,l]of a){const c=Ut("div","stat-item");c.innerHTML=`<span>${o}</span><span class="val">${l}</span>`,r.appendChild(c)}this.show("results")}updateSave(t){this.save=t}}const Ue=400,dr=-6,qi=[{id:"village",name:"Blackridge Village",center:[-260,-80],radius:95,falloff:60,baseHeight:4,kind:"flat",shapeAmount:0,lootDensity:"medium",enemyDensity:"medium"},{id:"outpost",name:"Argo Outpost",center:[220,-190],radius:85,falloff:55,baseHeight:9,kind:"flat",shapeAmount:0,lootDensity:"high",enemyDensity:"high"},{id:"cedarHill",name:"Cedar Hill",center:[-190,230],radius:120,falloff:90,baseHeight:2,kind:"hill",shapeAmount:52,lootDensity:"medium",enemyDensity:"medium"},{id:"northport",name:"Northport",center:[305,190],radius:95,falloff:60,baseHeight:1,kind:"flat",shapeAmount:0,lootDensity:"medium",enemyDensity:"medium"},{id:"quarry",name:"Redstone Quarry",center:[55,-270],radius:95,falloff:55,baseHeight:5,kind:"pit",shapeAmount:34,lootDensity:"medium",enemyDensity:"low"},{id:"facility",name:"Echo Research Facility",center:[20,55],radius:78,falloff:45,baseHeight:3,kind:"flat",shapeAmount:0,lootDensity:"veryHigh",enemyDensity:"high"}],R0=[["village","outpost"],["village","cedarHill"],["outpost","facility"],["outpost","quarry"],["cedarHill","facility"],["facility","northport"],["quarry","northport"]];function Hn(i){const t=qi.find(e=>e.id===i);if(!t)throw new Error(`Unknown location ${i}`);return t}function fr(i,t){let e=null,n=1/0;for(const s of qi){const r=i-s.center[0],a=t-s.center[1],o=Math.sqrt(r*r+a*a);o<s.radius&&o<n&&(e=s,n=o)}return e}const P0={village:"#8a7a5a",outpost:"#6b6b52",cedarHill:"#3f5a3a",northport:"#4a6270",quarry:"#6b5a4a",facility:"#5a5a58",wilds:"#4a5540"};function Jl(i,t,e,n){i.clearRect(0,0,t,t),i.fillStyle="#12130f",i.fillRect(0,0,t,t);const s=n?130:Ue+20,r=n?e.playerX:0,a=n?e.playerZ:0,o=(t/2-6)/s,l=(f,y)=>[t/2+(f-r)*o,t/2+(y-a)*o];i.strokeStyle="rgba(126,140,110,0.5)",i.lineWidth=2,i.beginPath();const[c,h]=l(0,0);i.arc(c,h,Ue*o,0,Math.PI*2),i.stroke();for(const f of qi){const[y,x]=l(f.center[0],f.center[1]);i.fillStyle=P0[f.id]??"#555",i.beginPath(),i.arc(y,x,Math.max(3,f.radius*o),0,Math.PI*2),i.fill(),e.showLocationLabels&&(i.fillStyle="rgba(231,226,211,0.85)",i.font="11px Consolas, monospace",i.textAlign="center",i.fillText(f.name.toUpperCase(),y,x-f.radius*o-6))}const[u,d]=l(e.zone.center.x,e.zone.center.y);if(i.strokeStyle=e.zone.stage==="final"?"rgba(220,60,40,0.9)":"rgba(220,140,60,0.85)",i.lineWidth=2,i.beginPath(),i.arc(u,d,Math.max(1,e.zone.currentRadius*o),0,Math.PI*2),i.stroke(),e.zone.stage!=="final"){const[f,y]=l(e.zone.nextCenter.x,e.zone.nextCenter.y);i.strokeStyle="rgba(220,140,60,0.35)",i.setLineDash([4,4]),i.beginPath(),i.arc(f,y,Math.max(1,e.zone.targetRadius*o),0,Math.PI*2),i.stroke(),i.setLineDash([])}const[p,g]=l(e.extraction.x,e.extraction.z);i.strokeStyle=e.extraction.active?"#f0b361":"rgba(240,179,97,0.4)",i.lineWidth=2,i.beginPath(),i.moveTo(p-7,g),i.lineTo(p+7,g),i.moveTo(p,g-7),i.lineTo(p,g+7),i.stroke(),i.beginPath(),i.arc(p,g,10,0,Math.PI*2),i.stroke();const[_,m]=l(e.playerX,e.playerZ);i.save(),i.translate(_,m),i.rotate(e.playerYaw),i.fillStyle="#f0b361",i.beginPath(),i.moveTo(0,-8),i.lineTo(5,6),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore()}function ce(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n}const L0=["N","NE","E","SE","S","SW","W","NW"];class D0{constructor(t){T(this,"root");T(this,"hostilesEl");T(this,"phaseEl");T(this,"timerEl");T(this,"healthFill");T(this,"armorFill");T(this,"staminaFill");T(this,"armorPips");T(this,"ammoCount");T(this,"ammoReserve");T(this,"weaponNameEl");T(this,"fireModeEl");T(this,"reloadFill");T(this,"crosshair");T(this,"hitMarker");T(this,"interactPrompt");T(this,"compassStrip");T(this,"damageVignette");T(this,"hitDirIndicator");T(this,"hitDirTimeout",null);T(this,"zoneDamageOverlay");T(this,"extractionBanner");T(this,"extractionTimer");T(this,"debugOverlay");T(this,"tutorialContainer");T(this,"mapScreen");T(this,"mapCanvas");T(this,"minimapCanvas");T(this,"inventoryScreen");T(this,"inventoryGrid");T(this,"hitMarkerTimeout",null);T(this,"activeTutorials",new Map);this.root=t,this.build()}build(){const t=ce("div");t.id="hud",this.root.appendChild(t);const e=ce("div","hud-bottom-left");e.innerHTML=`
      <div class="bar-row"><span class="bar-label">❤</span><div class="bar-track"><div class="bar-fill health" id="hp-fill"></div></div></div>
      <div class="bar-row"><span class="bar-label">◆</span><div class="bar-track"><div class="bar-fill armor" id="armor-fill"></div></div><div class="armor-pips" id="armor-pips"></div></div>
      <div class="bar-row"><span class="bar-label">⚡</span><div class="bar-track"><div class="bar-fill stamina" id="stamina-fill"></div></div></div>
    `,t.appendChild(e),this.healthFill=e.querySelector("#hp-fill"),this.armorFill=e.querySelector("#armor-fill"),this.staminaFill=e.querySelector("#stamina-fill"),this.armorPips=e.querySelector("#armor-pips");const n=ce("div","hud-bottom-right");n.innerHTML=`
      <div class="weapon-name" id="weapon-name">—</div>
      <div class="ammo-count"><span id="ammo-mag">0</span> <span class="ammo-reserve" id="ammo-reserve">/ 0</span></div>
      <div class="fire-mode" id="fire-mode"></div>
      <div class="reload-bar"><div class="reload-fill" id="reload-fill"></div></div>
    `,t.appendChild(n),this.ammoCount=n.querySelector("#ammo-mag"),this.ammoReserve=n.querySelector("#ammo-reserve"),this.weaponNameEl=n.querySelector("#weapon-name"),this.fireModeEl=n.querySelector("#fire-mode"),this.reloadFill=n.querySelector("#reload-fill");const s=ce("div","hud-top-center");s.innerHTML='<div id="compass"><div id="compass-strip"></div><div class="compass-center-marker"></div></div>',t.appendChild(s),this.compassStrip=s.querySelector("#compass-strip"),this.buildCompassStrip();const r=ce("div","hud-top-right");r.innerHTML=`
      <div class="zone-phase-label" id="zone-phase">SIGNAL COLLAPSE — PHASE 1/4</div>
      <div class="zone-timer" id="zone-timer">--:--</div>
      <div class="hostiles-count" id="hostiles-count">Hostiles: —</div>
    `,t.appendChild(r),this.phaseEl=r.querySelector("#zone-phase"),this.timerEl=r.querySelector("#zone-timer"),this.hostilesEl=r.querySelector("#hostiles-count");const a=ce("div",void 0,'<div class="ch-line top"></div><div class="ch-line bottom"></div><div class="ch-line left"></div><div class="ch-line right"></div>');a.id="crosshair",t.appendChild(a),this.crosshair=a,this.hitMarker=ce("div",void 0,"✕"),this.hitMarker.id="hit-marker",t.appendChild(this.hitMarker),this.interactPrompt=ce("div"),this.interactPrompt.id="interact-prompt",this.interactPrompt.classList.add("hidden"),t.appendChild(this.interactPrompt),this.damageVignette=ce("div"),this.damageVignette.id="damage-vignette",t.appendChild(this.damageVignette),this.hitDirIndicator=ce("div","hit-dir-indicator"),this.hitDirIndicator.style.opacity="0",t.appendChild(this.hitDirIndicator),this.zoneDamageOverlay=ce("div"),this.zoneDamageOverlay.id="zone-damage-overlay",t.appendChild(this.zoneDamageOverlay),this.extractionBanner=ce("div"),this.extractionBanner.id="extraction-banner",this.extractionBanner.classList.add("hidden"),this.extractionBanner.innerHTML='<div class="ex-title" id="ex-title">EXTRACTION ACTIVE</div><div class="ex-timer" id="ex-timer">00:00</div>',t.appendChild(this.extractionBanner),this.extractionTimer=this.extractionBanner.querySelector("#ex-timer");const o=ce("canvas");o.id="minimap",o.width=168,o.height=168,t.appendChild(o),this.minimapCanvas=o,this.debugOverlay=ce("div"),this.debugOverlay.id="debug-overlay",this.debugOverlay.classList.add("hidden"),t.appendChild(this.debugOverlay),this.tutorialContainer=ce("div"),t.appendChild(this.tutorialContainer),this.mapScreen=ce("div","screen hidden"),this.mapScreen.id="map-screen";const l=ce("div");l.id="map-canvas-wrap";const c=ce("canvas");c.id="map-canvas",c.width=780,c.height=780,l.appendChild(c),this.mapScreen.appendChild(l),this.root.appendChild(this.mapScreen),this.mapCanvas=c,this.inventoryScreen=ce("div","screen hidden"),this.inventoryScreen.id="inventory-screen";const h=ce("div","panel");h.innerHTML='<div class="title-block"><h1 style="font-size:22px;letter-spacing:3px;">INVENTORY</h1></div>';const u=ce("div","inv-grid");h.appendChild(u),this.inventoryScreen.appendChild(h),this.root.appendChild(this.inventoryScreen),this.inventoryGrid=u}buildCompassStrip(){let t="";for(let e=-180;e<=540;e+=15){const n=(e%360+360)%360,s=Math.round(n/45)%8,r=n%45===0?L0[s]:(n%15===0,"");t+=`<span data-deg="${e}">${r}</span>`}this.compassStrip.innerHTML=t}showInteractPrompt(t){if(!t){this.interactPrompt.classList.add("hidden");return}this.interactPrompt.classList.remove("hidden"),this.interactPrompt.innerHTML=`<span class="key">F</span>${t}`}showTutorial(t,e,n,s){if(this.activeTutorials.has(t))return;const r=ce("div","tutorial-prompt",e);r.style.left=`${n}px`,r.style.top=`${s}px`,this.tutorialContainer.appendChild(r),this.activeTutorials.set(t,r),setTimeout(()=>{r.remove(),this.activeTutorials.delete(t)},4500)}flashHitMarker(t){this.hitMarker.style.opacity="1",this.hitMarker.style.color=t?"#e05a3f":"#e7e2d3",this.hitMarkerTimeout&&window.clearTimeout(this.hitMarkerTimeout),this.hitMarkerTimeout=window.setTimeout(()=>{this.hitMarker.style.opacity="0"},180)}flashDamage(t){this.damageVignette.style.boxShadow=`inset 0 0 180px rgba(180,30,20,${Math.min(.75,t)})`,setTimeout(()=>{this.damageVignette.style.boxShadow="inset 0 0 140px rgba(180,30,20,0)"},220)}showHitDirection(t){this.hitDirIndicator.style.transform=`rotate(${t}rad)`,this.hitDirIndicator.style.opacity="1",this.hitDirTimeout&&window.clearTimeout(this.hitDirTimeout),this.hitDirTimeout=window.setTimeout(()=>{this.hitDirIndicator.style.opacity="0"},900)}setZoneDamageActive(t){this.zoneDamageOverlay.style.opacity=t?"1":"0"}setHighContrast(t){this.root.classList.toggle("high-contrast",t)}setMapVisible(t){this.mapScreen.classList.toggle("hidden",!t)}setInventoryVisible(t,e){this.inventoryScreen.classList.toggle("hidden",!t),t&&e&&this.renderInventory(e)}renderInventory(t){const e=t.state,n=[["Primary 1",e.primary[0]?.def.name??"Empty",e.primary[0]?`${e.primary[0].magAmmo}/${e.primary[0].reserveAmmo}`:""],["Primary 2",e.primary[1]?.def.name??"Empty",e.primary[1]?`${e.primary[1].magAmmo}/${e.primary[1].reserveAmmo}`:""],["Sidearm",e.sidearm?.def.name??"Empty",e.sidearm?`${e.sidearm.magAmmo}/${e.sidearm.reserveAmmo}`:""],["Helmet",e.helmetLevel>0?`Level ${e.helmetLevel}`:"None",""],["Vest",e.vestLevel>0?`Level ${e.vestLevel}`:"None",""],["Healing",`Bandage×${e.bandages}  Medkit×${e.medkits}`,""],["Throwables",`Frag×${e.frags}  Smoke×${e.smokes}`,""],["Light Ammo",`${e.ammo.light}`,""],["Medium Ammo",`${e.ammo.medium}`,""],["Heavy Ammo",`${e.ammo.heavy}`,""],["Shells",`${e.ammo.shells}`,""],["Precision Rounds",`${e.ammo.precision}`,""]];this.inventoryGrid.innerHTML="";for(const[s,r,a]of n){const o=ce("div","inv-slot"+(r==="Empty"||r==="None"?" empty":""));o.innerHTML=`<div class="slot-title">${s}</div><div class="slot-item">${r}</div><div>${a}</div>`,this.inventoryGrid.appendChild(o)}}setDebugVisible(t){this.debugOverlay.classList.toggle("hidden",!t)}update(t){this.healthFill.style.width=`${t.health/t.maxHealth*100}%`,this.armorFill.style.width=`${t.vestLevel/3*100}%`,this.staminaFill.style.width=`${t.stamina/t.maxStamina*100}%`,this.armorPips.innerHTML=[1,2,3].map(c=>`<div class="armor-pip${c<=t.helmetLevel?" filled":""}"></div>`).join(""),t.weapon?(this.weaponNameEl.textContent=t.weapon.def.name,this.ammoCount.textContent=String(t.weapon.magAmmo),this.ammoReserve.textContent=`/ ${t.weapon.reserveAmmo}`,this.fireModeEl.textContent=t.weapon.def.automatic?"AUTO":"SEMI",this.reloadFill.style.width=`${t.weapon.reloadProgress01*100}%`):(this.weaponNameEl.textContent="UNARMED",this.ammoCount.textContent="–",this.ammoReserve.textContent="",this.fireModeEl.textContent="",this.reloadFill.style.width="0%");const e=-(t.yawDegrees/15)*46;this.compassStrip.style.transform=`translateX(${e+230}px)`;const n=t.zone.stage==="final"?"FINAL":`${t.zone.phaseIndex+1}/4`;this.phaseEl.textContent=`SIGNAL COLLAPSE — PHASE ${n}`;const s=t.zone.timeRemainingInStage,r=Math.floor(s/60),a=Math.floor(s%60);if(this.timerEl.textContent=`${r}:${a.toString().padStart(2,"0")}`,this.timerEl.classList.toggle("danger",t.zone.stage==="shrinking"||t.zone.stage==="final"),this.hostilesEl.textContent=`Hostiles: ${t.hostilesRemaining}`,t.extractionActive){this.extractionBanner.classList.remove("hidden");const c=Math.floor(t.extractionRemaining/60),h=Math.floor(t.extractionRemaining%60);this.extractionTimer.textContent=`${c}:${h.toString().padStart(2,"0")}`,this.extractionBanner.querySelector("#ex-title").textContent=t.extractionContested?"EXTRACTION CONTESTED":`EXTRACTION IN ${c}:${h.toString().padStart(2,"0")}`}else this.extractionBanner.classList.add("hidden");t.debugVisible?(this.debugOverlay.classList.remove("hidden"),this.debugOverlay.innerHTML=`FPS: ${t.fps.toFixed(0)}<br/>Draw calls: ${t.drawCalls}<br/>Triangles: ${t.triangles}<br/>Pos: ${t.playerX.toFixed(0)}, ${t.playerZ.toFixed(0)}<br/>Zone phase: ${n}`):this.debugOverlay.classList.add("hidden");const o=this.crosshair.dataset.aiming==="1";if(this.crosshair.classList.toggle("hidden",o),!this.mapScreen.classList.contains("hidden")){const c=this.mapCanvas.getContext("2d");Jl(c,this.mapCanvas.width,{playerX:t.playerX,playerZ:t.playerZ,playerYaw:t.playerYaw,zone:t.zone,extraction:{x:t.extractionX,z:t.extractionZ,active:t.extractionActive},showLocationLabels:!0},!1)}const l=this.minimapCanvas.getContext("2d");Jl(l,this.minimapCanvas.width,{playerX:t.playerX,playerZ:t.playerZ,playerYaw:t.playerYaw,zone:t.zone,extraction:{x:t.extractionX,z:t.extractionZ,active:t.extractionActive},showLocationLabels:!1},!0)}setCrosshairSpread(t,e){this.crosshair.dataset.aiming=e?"1":"0";const n=this.crosshair.querySelectorAll(".ch-line");n[0].style.top=`${-t-6}px`,n[0].style.height="6px",n[1].style.top=`${t}px`,n[1].style.height="6px",n[2].style.left=`${-t-6}px`,n[2].style.width="6px",n[3].style.left=`${t}px`,n[3].style.width="6px"}}class jl{constructor(t){T(this,"perm");const e=new Uint8Array(256);for(let r=0;r<256;r++)e[r]=r;let n=t>>>0;const s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let r=255;r>0;r--){const a=Math.floor(s()*(r+1));[e[r],e[a]]=[e[a],e[r]]}this.perm=new Uint8Array(512);for(let r=0;r<512;r++)this.perm[r]=e[r&255]}grad(t,e,n){const s=t&7,r=s<4?e:n,a=s<4?n:e;return(s&1?-r:r)+(s&2?-a:a)}fade(t){return t*t*t*(t*(t*6-15)+10)}noise(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const r=this.fade(t),a=this.fade(e),o=this.perm,l=o[n+o[s]],c=o[n+o[s+1]],h=o[n+1+o[s]],u=o[n+1+o[s+1]],d=(_,m,f)=>_+f*(m-_),p=d(this.grad(l,t,e),this.grad(h,t-1,e),r),g=d(this.grad(c,t,e-1),this.grad(u,t-1,e-1),r);return d(p,g,a)}fbm(t,e,n=5,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let h=0;h<n;h++)l+=this.noise(t*o,e*o)*a,c+=a,a*=r,o*=s;return l/c}ridged(t,e,n=4){let s=.5,r=1,a=0;for(let o=0;o<n;o++){const l=1-Math.abs(this.noise(t*r,e*r));a+=l*l*s,s*=.5,r*=2.1}return a}}function Ro(i,t,e){return i<t?t:i>e?e:i}function Ui(i,t,e){return i+(t-i)*e}function yn(i,t,e,n){return Ui(i,t,1-Math.exp(-e*n))}function ln(i){return Ro(i,0,1)}function I0(i){return i*180/Math.PI}function Ks(i,t,e){const n=ln((e-i)/(t-i));return n*n*(3-2*n)}function Ql(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class U0{constructor(t){T(this,"noise");T(this,"detail");T(this,"roads",[]);this.noise=new jl(t),this.detail=new jl(t^2654435769);for(const[e,n]of R0){const s=Hn(e),r=Hn(n);this.roads.push({a:s.center,b:r.center,ha:s.baseHeight,hb:r.baseHeight})}}distToSeg(t,e,n){const[s,r]=n.a,[a,o]=n.b,l=a-s,c=o-r,h=l*l+c*c||1;let u=((t-s)*l+(e-r)*c)/h;u=ln(u);const d=s+l*u,p=r+c*u,g=t-d,_=e-p;return{d:Math.sqrt(g*g+_*_),t:u}}baseHeight(t,e){const n=this.noise.fbm(t*.0016,e*.0016,5,2,.5)*14,s=this.detail.fbm(t*.01,e*.01,3,2.1,.5)*2.2;return n+s}getHeight(t,e){let n=this.baseHeight(t,e);for(const a of qi){const o=t-a.center[0],l=e-a.center[1],c=Math.sqrt(o*o+l*l),h=1-Ks(a.radius,a.radius+a.falloff,c);if(h<=.001)continue;let u=a.baseHeight;if(a.kind==="hill"){const d=ln(1-c/(a.radius+a.falloff*.6)),p=d*d*(3-2*d);u=a.baseHeight+p*a.shapeAmount+this.detail.fbm(t*.02,e*.02,3)*4}else if(a.kind==="pit"){const d=1-Ks(a.radius*.35,a.radius,c);u=a.baseHeight-d*a.shapeAmount}else u=a.baseHeight+this.detail.fbm(t*.03,e*.03,2)*.6;n=Ui(n,u,h)}for(const a of this.roads){const{d:o,t:l}=this.distToSeg(t,e,a),c=1-Ks(5,11,o);if(c>.001){const h=Ui(a.ha,a.hb,l);n=Ui(n,h,c*.9)}}const s=Math.sqrt(t*t+e*e),r=Ue-55;if(s>r){const a=Ks(r,Ue+20,s);n=Ui(n,dr-4,a)}return n}getNormal(t,e,n=.5){const s=this.getHeight(t-n,e),r=this.getHeight(t+n,e),a=this.getHeight(t,e-n),o=this.getHeight(t,e+n),l=s-r,c=a-o,h=2*n,u=Math.sqrt(l*l+h*h+c*c);return[l/u,h/u,c/u]}isRoad(t,e){for(const n of this.roads)if(this.distToSeg(t,e,n).d<9)return!0;return!1}isUnderwater(t,e){return this.getHeight(t,e)<dr-.2}}class N0{constructor(){T(this,"blockers",[]);T(this,"raycastMeshes",[]);T(this,"coverPoints",[])}addCircle(t,e,n,s,r){this.blockers.push({type:"circle",x:t,z:e,radius:n,baseY:s,height:r})}addBox(t,e,n,s,r,a,o=0){this.blockers.push({type:"box",minX:t,maxX:e,minZ:n,maxZ:s,baseY:r,height:a,rotY:o})}addRaycastMesh(t){this.raycastMeshes.push(t)}addCoverPoint(t,e,n,s,r=1.1){this.coverPoints.push({x:t,z:e,normalX:n,normalZ:s,height:r})}resolve(t,e,n,s,r){let a=t,o=e;for(const l of this.blockers)if(!(n>l.baseY+l.height||n+r<l.baseY))if(l.type==="circle"){const c=a-l.x,h=o-l.z,u=Math.sqrt(c*c+h*h),d=l.radius+s;if(u<d&&u>1e-4){const p=(d-u)/u;a+=c*p,o+=h*p}else u<=1e-4&&(a+=s)}else{Math.max(l.minX-s,Math.min(a,l.maxX+s)),Math.max(l.minZ-s,Math.min(o,l.maxZ+s));const c=Math.max(l.minX,Math.min(a,l.maxX)),h=Math.max(l.minZ,Math.min(o,l.maxZ)),u=a-c,d=o-h,p=Math.sqrt(u*u+d*d);if(p<s)if(p>1e-4){const g=(s-p)/p;a+=u*g,o+=d*g}else{const g=a-l.minX,_=l.maxX-a,m=o-l.minZ,f=l.maxZ-o,y=Math.min(g,_,m,f);y===g?a=l.minX-s:y===_?a=l.maxX+s:y===m?o=l.minZ-s:o=l.maxZ+s}}return[a,o]}isBlocked(t,e,n,s){for(const r of this.blockers)if(!(n>r.baseY+r.height||n+s<r.baseY)){if(r.type==="circle"){const a=t-r.x,o=e-r.z;if(a*a+o*o<r.radius*r.radius)return!0}else if(t>=r.minX&&t<=r.maxX&&e>=r.minZ&&e<=r.maxZ)return!0}return!1}}const tc=new vt(.235,.28,.165),F0=new vt(.36,.35,.2),ec=new vt(.33,.28,.22),nc=new vt(.36,.35,.33),O0=new vt(.58,.52,.4),z0=new vt(.46,.46,.44),k0=new vt(.19,.21,.14);function B0(i,t){const e=fr(i,t);if(!e)return!1;if(e.id==="facility"||e.id==="outpost"){const n=i-e.center[0],s=t-e.center[1];return Math.sqrt(n*n+s*s)<e.radius*.55}return!1}function H0(i,t=300){const e=Ue*2+40,n=new Tn(e,e,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=new Float32Array(s.count*3),a=new vt;for(let c=0;c<s.count;c++){const h=s.getX(c),u=s.getZ(c),d=i.getHeight(h,u);s.setY(c,d);const[p,g,_]=i.getNormal(h,u,1.2),m=1-ln(g),f=fr(h,u);let y=tc;f?.id==="quarry"?y=nc:f?.id==="cedarHill"?y=k0:d<dr+2.5&&(y=O0),a.copy(y),B0(h,u)?a.copy(z0):i.isRoad(h,u)?a.lerp(ec,.85):m>.55?a.lerp(nc,ln((m-.55)*2.2)):m>.3&&a.lerp(ec,ln((m-.3)*1.6));const x=Math.sin(h*.13)*Math.cos(u*.11)*.5+.5;y===tc&&a.lerp(F0,x*.18),r[c*3]=a.r,r[c*3+1]=a.g,r[c*3+2]=a.b}n.setAttribute("color",new Ve(r,3)),n.computeVertexNormals();const o=new Lt({vertexColors:!0,roughness:.95,metalness:0}),l=new Ot(n,o);return l.receiveShadow=!0,l.castShadow=!1,l.name="terrain",l.matrixAutoUpdate=!1,l.updateMatrix(),l}const V0=`
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
`,G0=`
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
`;function W0(){const i=Ue*2+900,t=new Tn(i,i,64,64);t.rotateX(-Math.PI/2);const e=new Ne({uniforms:{uTime:{value:0},uColorShallow:{value:new vt(.09,.22,.24)},uColorDeep:{value:new vt(.02,.07,.1)},uSunDir:{value:new R(.4,.6,.3)}},vertexShader:V0,fragmentShader:G0,transparent:!0}),n=new Ot(t,e);return n.position.y=dr,n.name="ocean",n.renderOrder=1,n}function X0(i,t,e){const n=i.material;n.uniforms.uTime.value=t,n.uniforms.uSunDir.value.copy(e)}const q0=`
  varying vec3 vWorldPos;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Y0=`
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
`;function $0(i){const t=new Zg(16769720,2.2);t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=10,t.shadow.camera.far=260,t.shadow.camera.left=-110,t.shadow.camera.right=110,t.shadow.camera.top=110,t.shadow.camera.bottom=-110,t.shadow.bias=-.0015,t.shadow.normalBias=.03,i.add(t),i.add(t.target);const e=new qg(10335433,4866096,.9);i.add(e);const n=new Jg(11051668,.45);i.add(n);const s=new xo(12167304,.0016);i.fog=s;const r=new Bn(700,24,16),a=new Ne({uniforms:{uTop:{value:new vt(7312312)},uHorizon:{value:new vt(15186314)},uBottom:{value:new vt(3814440)},uSunDir:{value:new R(.4,.5,.3)},uSunColor:{value:new vt(16768160)}},vertexShader:q0,fragmentShader:Y0,side:Re,depthWrite:!1,fog:!1}),o=new Ot(r,a);o.renderOrder=-10,i.add(o);function l(c){const h=2.4+c*.6,u=Se.lerp(.95,.32,c),d=260,p=new R(Math.cos(h)*Math.cos(u),Math.sin(u),Math.sin(h)*Math.cos(u));t.position.copy(p).multiplyScalar(d),t.target.position.set(0,0,0);const g=Se.lerp(1,.7,c);t.color.setRGB(1,.85*g+.15,.6*g+.2),t.intensity=Se.lerp(2.2,1.3,c),e.intensity=Se.lerp(.9,.55,c);const _=Se.lerp(.0014,.0026,c);s.density=_;const m=new vt().lerpColors(new vt(13613206),new vt(5987426),c);s.color.copy(m),a.uniforms.uSunDir.value.copy(p),a.uniforms.uTop.value.lerpColors(new vt(7312312),new vt(2896450),c),a.uniforms.uHorizon.value.lerpColors(new vt(15186314),new vt(7103833),c),a.uniforms.uBottom.value.lerpColors(new vt(3814440),new vt(2104602),c),i.background=null}return l(0),{sun:t,hemi:e,skyMesh:o,fog:s,update:l}}function K0(i){return i.sun.position.clone().normalize()}const wt={concrete:new Lt({color:9078396,roughness:.95,metalness:.02}),concreteDark:new Lt({color:5526092,roughness:.9,metalness:.02}),wallPlaster:new Lt({color:12102542,roughness:.88,metalness:0}),wallPlasterDirty:new Lt({color:9405808,roughness:.92,metalness:0}),woodPlank:new Lt({color:5981489,roughness:.85,metalness:0}),woodDark:new Lt({color:3548952,roughness:.85,metalness:0}),roofTin:new Lt({color:4143670,roughness:.6,metalness:.55}),roofRust:new Lt({color:5913126,roughness:.75,metalness:.3}),metal:new Lt({color:7040618,roughness:.5,metalness:.75}),metalDark:new Lt({color:3026991,roughness:.55,metalness:.7}),rust:new Lt({color:7029543,roughness:.8,metalness:.4}),glassDark:new Lt({color:1712678,roughness:.15,metalness:.4,transparent:!0,opacity:.85}),containerBlue:new Lt({color:3495531,roughness:.55,metalness:.5}),containerRust:new Lt({color:8014380,roughness:.65,metalness:.4}),containerGreen:new Lt({color:4479550,roughness:.6,metalness:.45}),containerOlive:new Lt({color:5790786,roughness:.6,metalness:.4}),sandbag:new Lt({color:10127971,roughness:.95,metalness:0}),fabricCamo:new Lt({color:4934199,roughness:.9,metalness:0}),rockGrey:new Lt({color:5986383,roughness:.95,metalness:.03}),barkTree:new Lt({color:3943968,roughness:.9,metalness:0}),foliage:new Lt({color:2897440,roughness:.85,metalness:0}),foliageDry:new Lt({color:5658151,roughness:.85,metalness:0}),vehicleWreck:new Lt({color:4865848,roughness:.7,metalness:.35}),concreteBarrier:new Lt({color:10197647,roughness:.9,metalness:0}),chainlink:new Lt({color:8883076,roughness:.6,metalness:.6,transparent:!0,opacity:.55,side:$e}),crane:new Lt({color:12091962,roughness:.65,metalness:.5}),asphalt:new Lt({color:2894632,roughness:.95,metalness:0}),sand:new Lt({color:9667167,roughness:.95,metalness:0}),emissiveAmber:new Lt({color:1709842,emissive:16755268,emissiveIntensity:1.6,roughness:.5}),emissiveRed:new Lt({color:1707277,emissive:16720418,emissiveIntensity:2,roughness:.5})};function Z0(){return Object.values(wt)}function Qt(i,t,e,n){const s=new Ot(new hn(i,t,e),n);return s.castShadow=!0,s.receiveShadow=!0,s}function ki(i){const{width:t,depth:e,height:n}=i,s=i.wallMat??wt.wallPlaster,r=i.roofMat??wt.roofTin,a=.25,o=new ne,l=1.5,c=i.doorSide??"south",h=Qt(t,.2,e,wt.concreteDark);h.position.y=.1,h.receiveShadow=!0,o.add(h);function u(m,f){const y=new ne;if(!f){const A=Qt(m,n,a,s);return A.position.y=n/2,y.add(A),y}const x=(m-l)/2,w=Qt(x,n,a,s);w.position.set(-(m/2)+x/2,n/2,0);const P=Qt(x,n,a,s);P.position.set(m/2-x/2,n/2,0);const C=Qt(l,n*.32,a,s);return C.position.set(0,n-n*.16,0),y.add(w,P,C),y}const d=u(t,c==="north");d.position.set(0,0,-e/2);const p=u(t,c==="south");p.position.set(0,0,e/2);const g=u(e,c==="east");g.rotation.y=Math.PI/2,g.position.set(t/2,0,0);const _=u(e,c==="west");if(_.rotation.y=Math.PI/2,_.position.set(-t/2,0,0),o.add(d,p,g,_),i.windows)for(const m of[-1,1]){const f=Qt(1.1,1.1,.06,wt.glassDark);f.position.set((t/2-.05)*m,n*.55,0),f.rotation.y=Math.PI/2,o.add(f)}if(i.pitchedRoof){const m=Qt(Math.sqrt((t/2)**2+(n*.4)**2),.15,e+.6,r),f=Math.atan2(n*.4,t/2);m.rotation.z=f,m.position.set(-t/4,n+n*.2/2,0);const y=m.clone();y.rotation.z=-f,y.position.set(t/4,n+n*.2/2,0),o.add(m,y)}else{const m=Qt(t+.4,.25,e+.4,r);m.position.y=n+.12,o.add(m)}return o}function wn(i,t,e,n,s,r,a,o,l=0,c=!0){const h=Math.cos(l),u=Math.sin(l),d=e/2,p=n/2,g=[[-d,-p],[d,-p],[d,p],[-d,p]].map(([f,y])=>[r+f*h-y*u,a+f*u+y*h]),_=g.map(f=>f[0]),m=g.map(f=>f[1]);i.addBox(Math.min(..._),Math.max(..._),Math.min(...m),Math.max(...m),o,s)}function eh(i="blue"){const t=i==="blue"?wt.containerBlue:i==="rust"?wt.containerRust:i==="green"?wt.containerGreen:wt.containerOlive,e=new ne,n=2.44,s=2.6,r=6.06,a=Qt(n,s,r,t);a.position.y=s/2,e.add(a);for(let l=-2;l<=2;l++){const c=Qt(.06,s*.94,r*.98,wt.metalDark);c.position.set(l*n/5,s/2,0),e.add(c)}const o=Qt(n*.98,s*.9,.1,wt.metalDark);return o.position.set(0,s/2,r/2),e.add(o),e}function J0(i=.9){const t=Qt(i,i,i,wt.woodPlank);return t.position.y=i/2,t}function j0(){const i=new We(.38,.38,.9,12),t=new Ot(i,wt.rust);return t.position.y=.45,t.castShadow=!0,t.receiveShadow=!0,t}function Q0(i,t=1){const e=new ne,n=Math.round(t/.32),s=Math.max(2,Math.round(i/.55));for(let r=0;r<n;r++)for(let a=0;a<s;a++){const o=new Bn(.32,6,5);o.scale(1.3,.7,1);const l=new Ot(o,wt.sandbag);l.position.set(-i/2+a*(i/(s-1||1)),.16+r*.3,r%2*.08),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return e}function nh(i,t=2){const e=new ne,n=Math.max(2,Math.round(i/3));for(let r=0;r<n;r++){const a=new Ot(new We(.06,.06,t,6),wt.metalDark);a.position.set(-i/2+r*i/(n-1||1),t/2,0),a.castShadow=!0,e.add(a)}const s=Qt(i,t*.92,.04,wt.chainlink);return s.position.y=t/2,s.castShadow=!1,e.add(s),e}function ih(i=7){const t=new ne,e=1.6;for(const o of[-1,1])for(const l of[-1,1]){const c=Qt(.18,i,.18,wt.woodDark);c.position.set(o*e,i/2,l*e),t.add(c)}for(let o=1;o<3;o++){const l=Qt(e*2+.2,.12,.12,wt.woodDark);l.position.set(0,i/3*o,e),t.add(l);const c=l.clone();c.position.z=-e,t.add(c)}const n=Qt(e*2+.6,.2,e*2+.6,wt.woodPlank);n.position.y=i,t.add(n);const s=1;for(const o of[0,1,2,3]){const l=Qt(o%2===0?e*2+.6:.1,s,o%2===0?.1:e*2+.6,wt.woodDark),c=e+.3;o===0&&l.position.set(0,i+s/2,-c),o===1&&l.position.set(c,i+s/2,0),o===2&&l.position.set(0,i+s/2,c),o===3&&l.position.set(-c,i+s/2,0),t.add(l)}const r=Qt(e*2+1,.15,e*2+1,wt.roofRust);r.position.y=i+2.2,t.add(r);const a=Qt(.1,2.2,.1,wt.metalDark);return a.position.y=i+1.1,t.add(a),t}function tv(i=1){const t=new vr(i,0),e=t.attributes.position;for(let s=0;s<e.count;s++){const r=.15+Math.random()*.2;e.setXYZ(s,e.getX(s)*(1+Math.random()*r),e.getY(s)*(1+Math.random()*r*.6),e.getZ(s)*(1+Math.random()*r))}t.computeVertexNormals();const n=new Ot(t,wt.rockGrey);return n.castShadow=!0,n.receiveShadow=!0,n}function ev(i=9){const t=new ne,e=new Ot(new We(.06,.09,i,6),wt.metal);e.position.y=i/2,e.castShadow=!0,t.add(e);for(let s=0;s<3;s++){const r=Qt(.03,i*.55,.03,wt.metalDark);r.position.set(Math.cos(s/3*Math.PI*2)*1.4,i*.35,Math.sin(s/3*Math.PI*2)*1.4),r.rotation.x=.35,t.add(r)}const n=new Ot(new Bn(.5,8,6,0,Math.PI*2,0,Math.PI/2),wt.metal);return n.rotation.x=Math.PI,n.position.y=i*.85,t.add(n),t}function nv(i="sedan"){const t=new ne,e=i==="truck"?5.4:4.2,n=i==="truck"?2.2:1.8,s=Qt(n,1.1,e,wt.vehicleWreck);s.position.y=.65,s.rotation.z=(Math.random()-.5)*.08,t.add(s);const r=Qt(n*.85,.7,e*.45,wt.metalDark);r.position.set(0,1.3,i==="truck"?e*.15:0),t.add(r);const a=new We(.4,.4,.3,10);for(const o of[-1,1])for(const l of[-1,1]){const c=new Ot(a,wt.metalDark);c.rotation.z=Math.PI/2,c.position.set(o*n/2,.4,l*(e/2-.7)),t.add(c)}return t}function ic(i=14){const t=new ne,e=new Ot(new hn(.9,i,.9),wt.crane);e.position.y=i/2,e.castShadow=!0,t.add(e);const n=Qt(16,.7,.7,wt.crane);n.position.set(4,i,0),t.add(n);const s=Qt(4,.7,.7,wt.crane);s.position.set(-3.5,i,0),t.add(s);const r=Qt(1.2,1.2,1.2,wt.metalDark);r.position.set(0,i-1,.8),t.add(r);const a=Qt(.05,6,.05,wt.metalDark);return a.position.set(9,i-3,0),t.add(a),t}function sh(i=2){const t=new hn(i,.8,.5),e=new Ot(t,wt.concreteBarrier);return e.position.y=.4,e.castShadow=!0,e.receiveShadow=!0,e}function iv(){const i=new ne,t=Qt(4,2,3,wt.metal);t.position.y=1,i.add(t);const e=Qt(.6,.6,6,wt.metalDark);e.position.set(0,2.5,2.5),e.rotation.x=-.4,i.add(e);const n=Qt(1.4,1,1.6,wt.rust);n.position.set(0,1.3,5.3),i.add(n);for(const s of[-1,1]){const r=new Ot(new We(.9,.9,1,10),wt.metalDark);r.rotation.z=Math.PI/2,r.position.set(s*1.6,.9,-.5),i.add(r)}return i}function he(i,t,e,n,s=0){i.position.x=t,i.position.z=e,i.position.y=n.hf.getHeight(t,e)+s,n.scene.add(i),n.colliders.addRaycastMesh(i)}function Te(i,t,e,n,s){i.loot.push({x:t,z:e,y:i.hf.getHeight(t,e),rarity:n,locationId:s})}function ge(i,t,e,n,s,r){i.enemies.push({x:t,z:e,y:i.hf.getHeight(t,e),locationId:n,squadId:s,role:r})}function rh(i,t,e,n,s){for(let r=0;r<s;r++){const a=i.rng.range(0,Math.PI*2),o=i.rng.range(n*.3,n),l=t+Math.cos(a)*o,c=e+Math.sin(a)*o,h=tv(i.rng.range(.5,2.2));h.rotation.y=i.rng.range(0,Math.PI*2),he(h,l,c,i),i.colliders.addCircle(l,c,h.geometry.boundingSphere?.radius??1,i.hf.getHeight(l,c),2.5)}}function sv(i){const t=Hn("village"),[e,n]=t.center,s="village-a",r=3,a=3,o=26;let l=0;for(let c=0;c<r;c++)for(let h=0;h<a;h++){const u=i.rng.range(-3,3),d=i.rng.range(-3,3),p=e-o+h*o+u,g=n-o+c*o+d,_=i.rng.range(6,9),m=i.rng.range(6,9),f=i.rng.range(3,4.2),y=i.rng.pick(["north","south","east","west"]),x=ki({width:_,depth:m,height:f,wallMat:i.rng.chance(.5)?wt.wallPlaster:wt.wallPlasterDirty,roofMat:i.rng.chance(.5)?wt.roofTin:wt.roofRust,doorSide:y,pitchedRoof:i.rng.chance(.6),windows:!0});x.rotation.y=i.rng.pick([0,Math.PI/2,Math.PI,Math.PI*3/2]),he(x,p,g,i),wn(i.colliders,x,_,m,f,p,g,i.hf.getHeight(p,g),x.rotation.y),l%2===0&&Te(i,p+i.rng.range(-2,2),g+i.rng.range(-2,2),i.rng.pick(["common","uncommon"]),"village"),l++}for(let c=0;c<6;c++){const h=e+i.rng.range(-o*1.4,o*1.4),u=n+i.rng.range(-o*1.4,o*1.4),d=nh(i.rng.range(4,8),1.4);d.rotation.y=i.rng.pick([0,Math.PI/2]),he(d,h,u,i)}for(let c=0;c<4;c++){const h=e+i.rng.range(-40,40),u=n+i.rng.range(-40,40),d=nv("sedan");d.rotation.y=i.rng.range(0,Math.PI*2),he(d,h,u,i),i.colliders.addCircle(h,u,2.6,i.hf.getHeight(h,u),1.6),i.colliders.addCoverPoint(h,u,Math.cos(d.rotation.y),Math.sin(d.rotation.y))}Te(i,e,n,"uncommon","village"),ge(i,e-20,n-10,"village",s,"leader"),ge(i,e+15,n+12,"village",s,"member"),ge(i,e+5,n-25,"village",s+"2","leader")}function rv(i){const t=Hn("outpost"),[e,n]=t.center,s=[[e-45,n-45],[e+45,n-45],[e+45,n+45],[e-45,n+45]];s.forEach(([o,l],c)=>{const h=ih(8);he(h,o,l,i),i.colliders.addCircle(o,l,2.2,i.hf.getHeight(o,l),8),c%2===0&&ge(i,o,l,"outpost","outpost-tower",c===0?"leader":"member")});for(let o=0;o<s.length;o++){const[l,c]=s[o],[h,u]=s[(o+1)%s.length],d=(l+h)/2,p=(c+u)/2,g=Math.hypot(h-l,u-c),_=Math.atan2(u-c,h-l),m=Q0(g*.92,1.1);m.rotation.y=_,he(m,d,p,i),wn(i.colliders,m,g*.92,.8,1.1,d,p,i.hf.getHeight(d,p),_)}const r=[[e-10,n,0],[e+12,n-5,Math.PI/2]];for(const[o,l,c]of r){const h=ki({width:12,depth:7,height:3.6,doorSide:"south",pitchedRoof:!1,windows:!0,wallMat:wt.concrete});h.rotation.y=c,he(h,o,l,i),wn(i.colliders,h,12,7,3.6,o,l,i.hf.getHeight(o,l),c),Te(i,o+2,l+1,"rare","outpost")}for(let o=0;o<6;o++){const l=e+i.rng.range(-30,30),c=n+i.rng.range(-30,30),h=eh(i.rng.pick(["olive","green","rust"]));h.rotation.y=i.rng.pick([0,Math.PI/2]),he(h,l,c,i),wn(i.colliders,h,2.44,6.06,2.6,l,c,i.hf.getHeight(l,c),h.rotation.y),i.colliders.addCoverPoint(l,c,Math.cos(h.rotation.y+Math.PI/2),Math.sin(h.rotation.y+Math.PI/2)),o%2===0&&Te(i,l,c+3.5,"rare","outpost")}for(let o=0;o<10;o++){const l=e+i.rng.range(-35,35),c=n+i.rng.range(-35,35),h=J0();he(h,l,c,i),i.rng.chance(.4)&&Te(i,l+.6,c,i.rng.pick(["common","uncommon"]),"outpost")}const a=ev(10);he(a,e,n,i),i.colliders.addCircle(e,n,.6,i.hf.getHeight(e,n),10),Te(i,e,n-6,"rare","outpost"),ge(i,e-8,n-8,"outpost","outpost-yard","leader"),ge(i,e+8,n+8,"outpost","outpost-yard","member"),ge(i,e,n+20,"outpost","outpost-yard2","member")}function av(i){const t=Hn("cedarHill"),[e,n]=t.center;rh(i,e,n,t.radius*.9,18);const s=ih(9);he(s,e,n,i),i.colliders.addCircle(e,n,2.2,i.hf.getHeight(e,n),9),Te(i,e,n,"rare","cedarHill"),ge(i,e,n,"cedarHill","hill-marksman","leader"),ge(i,e+30,n-20,"cedarHill","hill-b","member"),ge(i,e-25,n+15,"cedarHill","hill-b","member");for(let r=0;r<5;r++){const a=i.rng.range(0,Math.PI*2),o=i.rng.range(15,t.radius*.85);Te(i,e+Math.cos(a)*o,n+Math.sin(a)*o,i.rng.pick(["common","uncommon"]),"cedarHill")}}function ov(i){const t=Hn("northport"),[e,n]=t.center,s=ki({width:20,depth:12,height:6,wallMat:wt.metal,roofMat:wt.roofTin,doorSide:"south",pitchedRoof:!1,windows:!0});he(s,e-15,n-5,i),wn(i.colliders,s,20,12,6,e-15,n-5,i.hf.getHeight(e-15,n-5),0),Te(i,e-15,n-5,"rare","northport");const r=ic(14);he(r,e+20,n+10,i);const a=ic(12);a.rotation.y=Math.PI,he(a,e+32,n-8,i);let o=e+5;for(let l=0;l<8;l++){const c=n+20-l*6.4,h=eh(i.rng.pick(["blue","rust","green"]));h.rotation.y=Math.PI/2,he(h,o,c,i),wn(i.colliders,h,2.44,6.06,2.6,o,c,i.hf.getHeight(o,c),Math.PI/2),l%3===0&&Te(i,o,c+3.6,"uncommon","northport")}for(let l=0;l<6;l++){const c=e+i.rng.range(-30,40),h=n+i.rng.range(-25,30),u=j0();he(u,c,h,i)}ge(i,e-10,n-10,"northport","port-a","leader"),ge(i,e+10,n+5,"northport","port-a","member"),ge(i,e+25,n+15,"northport","port-b","member")}function lv(i){const t=Hn("quarry"),[e,n]=t.center,s=iv();s.rotation.y=i.rng.range(0,Math.PI*2),he(s,e,n,i),i.colliders.addCircle(e,n,3.2,i.hf.getHeight(e,n),3),rh(i,e,n,t.radius,20);for(let r=0;r<8;r++){const a=i.rng.range(0,Math.PI*2),o=i.rng.range(10,t.radius*.8),l=e+Math.cos(a)*o,c=n+Math.sin(a)*o,h=sh(i.rng.range(1.5,2.5));h.rotation.y=a,he(h,l,c,i),i.colliders.addCoverPoint(l,c,Math.cos(a),Math.sin(a))}Te(i,e,n,"uncommon","quarry"),Te(i,e+25,n-15,"rare","quarry"),ge(i,e-15,n+10,"quarry","quarry-a","leader"),ge(i,e+20,n-5,"quarry","quarry-a","member")}function cv(i){const t=Hn("facility"),[e,n]=t.center,s=ki({width:26,depth:18,height:6.5,wallMat:wt.concrete,roofMat:wt.concreteDark,doorSide:"south",pitchedRoof:!1,windows:!0});he(s,e,n,i),wn(i.colliders,s,26,18,6.5,e,n,i.hf.getHeight(e,n),0);const r=ki({width:10,depth:8,height:4.5,wallMat:wt.concrete,doorSide:"west",windows:!0});he(r,e-22,n+6,i),wn(i.colliders,r,10,8,4.5,e-22,n+6,i.hf.getHeight(e-22,n+6),0);const a=ki({width:10,depth:8,height:4.5,wallMat:wt.concreteDark,doorSide:"east",windows:!0});a.rotation.y=Math.PI,he(a,e+22,n-6,i),wn(i.colliders,a,10,8,4.5,e+22,n-6,i.hf.getHeight(e+22,n-6),Math.PI);for(let l=0;l<6;l++){const c=e+i.rng.range(-32,32),h=n+i.rng.range(-24,24),u=sh(2);u.rotation.y=i.rng.range(0,Math.PI*2),he(u,c,h,i)}const o=nh(t.radius*1.6,2.4);he(o,e,n-t.radius*.75,i),Te(i,e,n,"rare","facility"),Te(i,e-22,n+6,"rare","facility"),Te(i,e+22,n-6,"rare","facility"),ge(i,e-5,n-5,"facility","facility-a","leader"),ge(i,e+8,n+8,"facility","facility-a","member"),ge(i,e-18,n+10,"facility","facility-b","leader"),ge(i,e+18,n-10,"facility","facility-b","member")}function hv(i){for(let t=0;t<14;t++){const e=i.rng.range(0,Math.PI*2),n=i.rng.range(80,370),s=Math.cos(e)*n,r=Math.sin(e)*n;i.hf.isUnderwater(s,r)||i.rng.chance(.5)&&i.rng.chance(.7)||Te(i,s,r,i.rng.pick(["common","common","uncommon"]),"wilds")}for(let t=0;t<2;t++){const e=i.rng.range(0,Math.PI*2),n=i.rng.range(100,340),s=Math.cos(e)*n,r=Math.sin(e)*n;ge(i,s,r,"wilds",`wilds-${t}`,"leader")}}function uv(i){sv(i),rv(i),av(i),ov(i),lv(i),cv(i),hv(i)}class li{constructor(t){T(this,"state");this.state=t>>>0}next(){this.state|=0,this.state=this.state+1831565813|0;let t=Math.imul(this.state^this.state>>>15,1|this.state);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}shuffle(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(this.next()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}}function ah(){return Math.random()*4294967295>>>0}const Nn={low:{trees:260,rocks:140,grass:900},medium:{trees:480,rocks:220,grass:2200},high:{trees:750,rocks:320,grass:4200}};function dv(){return{trunk:new We(.18,.3,3.2,6),foliage:new To(1.6,3.4,7)}}function fv(i,t,e,n,s="high"){const r=new li(n^1374496523),a=new ne;a.name="vegetation",i.add(a);const{trunk:o,foliage:l}=dv(),c=new Xs(o,wt.barkTree,Nn.high.trees),h=new Xs(l,wt.foliage,Nn.high.trees);c.castShadow=!0,h.castShadow=!0,c.receiveShadow=!0,c.name="veg-trunks",h.name="veg-foliage";const u=new vr(1,0),d=new Xs(u,wt.rockGrey,Nn.high.rocks);d.castShadow=!0,d.receiveShadow=!0;const p=new Tn(.6,.7);p.translate(0,.35,0);const g=new Lt({color:3818786,side:$e,roughness:1,metalness:0,alphaTest:.5,transparent:!1}),_=new Xs(p,g,Nn.high.grass);_.castShadow=!1,_.receiveShadow=!1,a.add(c,h,d,_);const m=[],f=[],y=[],x=Nn.high.trees;let w=0;for(;m.length<x&&w<x*6;){w++;const S=r.range(0,Math.PI*2),F=Math.sqrt(r.next())*(Ue-30),O=Math.cos(S)*F,H=Math.sin(S)*F;if(t.isUnderwater(O,H)||e.isBlocked(O,H,t.getHeight(O,H),3))continue;const q=fr(O,H);let V=.35;if(q?.id==="cedarHill"?V=1:(q&&["village","outpost","facility"].includes(q.id)||q?.id==="quarry")&&(V=.05),!r.chance(V))continue;const[Z,W,ct]=t.getNormal(O,H);W<.6||m.push({x:O,z:H,y:t.getHeight(O,H),scale:r.range(.7,1.5),rot:r.range(0,Math.PI*2)})}w=0;const P=Nn.high.rocks;for(;f.length<P&&w<P*6;){w++;const S=r.range(0,Math.PI*2),F=Math.sqrt(r.next())*(Ue-20),O=Math.cos(S)*F,H=Math.sin(S)*F;t.isUnderwater(O,H)||e.isBlocked(O,H,t.getHeight(O,H),2)||f.push({x:O,z:H,y:t.getHeight(O,H),scale:r.range(.4,1.8),rot:r.range(0,Math.PI*2)})}w=0;const C=Nn.high.grass;for(;y.length<C&&w<C*4;){w++;const S=r.range(0,Math.PI*2),F=Math.sqrt(r.next())*(Ue-15),O=Math.cos(S)*F,H=Math.sin(S)*F;if(t.isUnderwater(O,H))continue;const q=fr(O,H);q&&["village","outpost","facility","quarry"].includes(q.id)||y.push({x:O,z:H,y:t.getHeight(O,H),scale:r.range(.7,1.3),rot:r.range(0,Math.PI*2)})}const A=new le;function D(S,F,O,H=0){const q=Math.min(O,F.length);for(let V=0;V<q;V++){const Z=F[V];A.position.set(Z.x,Z.y+H,Z.z),A.rotation.set(0,Z.rot,0),A.scale.setScalar(Z.scale),A.updateMatrix(),S.setMatrixAt(V,A.matrix)}S.count=q,S.instanceMatrix.needsUpdate=!0}function X(S){const F=Nn[S];D(c,m,F.trees,1.6),D(h,m,F.trees,3.2),D(d,f,F.rocks),D(_,y,F.grass)}X(s);function v(S){}return{group:a,setDensity:X,update:v}}class pv{constructor(t,e=ah(),n="high"){T(this,"seed");T(this,"hf");T(this,"colliders",new N0);T(this,"scene");T(this,"terrain");T(this,"ocean");T(this,"sky");T(this,"vegetation");T(this,"loot",[]);T(this,"enemySpawns",[]);T(this,"pois",[]);T(this,"playerSpawns",[]);T(this,"matchTime01",0);T(this,"elapsed",0);this.seed=e,this.scene=t,this.hf=new U0(e),this.terrain=H0(this.hf),t.add(this.terrain),this.colliders.addRaycastMesh(this.terrain),this.ocean=W0(),t.add(this.ocean),this.sky=$0(t);const s=new li(e),r={scene:t,hf:this.hf,colliders:this.colliders,rng:s,loot:this.loot,enemies:this.enemySpawns};uv(r),this.vegetation=fv(t,this.hf,this.colliders,e,n);for(const c of qi)this.pois.push({id:c.id,name:c.name,x:c.center[0],z:c.center[1]});const a=(c,h)=>{if(this.hf.isUnderwater(c,h))return!1;const[,u]=this.hf.getNormal(c,h,2);return!(u<.82||this.colliders.isBlocked(c,h,this.hf.getHeight(c,h),2))},o=(c,h,u,d)=>{for(let p=0;p<20;p++){const g=s.range(0,Math.PI*2),_=s.range(u,d),m=c+Math.cos(g)*_,f=h+Math.sin(g)*_;if(a(m,f)){this.playerSpawns.push({x:m,z:f});return}}},l=new Set(["cedarHill","northport","quarry","wilds"]);for(const c of qi)if(l.has(c.id))for(let h=0;h<2;h++)o(c.center[0],c.center[1],c.radius*.6,c.radius*1.1);for(let c=0;c<8;c++)o(0,0,140,340);this.playerSpawns.length===0&&this.playerSpawns.push({x:0,z:0})}heightAt(t,e){return this.hf.getHeight(t,e)}isOutOfBounds(t,e){return Math.sqrt(t*t+e*e)>Ue-8}clampToBounds(t,e){const n=Math.sqrt(t*t+e*e),s=Ue-8;if(n<=s)return[t,e];const r=s/n;return[t*r,e*r]}update(t,e,n){this.elapsed+=t,this.matchTime01=Math.min(1,this.elapsed/e),this.sky.update(this.matchTime01),X0(this.ocean,this.elapsed,K0(this.sky)),this.vegetation.update(n)}}const mv=1.68,gv=1.05,vv=.4,_v=-22,yv=6.6,xv=4.4,sc=7.6,Mv=2.4,Sv=2.6,wv=26,bv=8;class Tv{constructor(t,e){T(this,"position",new R(0,0,0));T(this,"velocity",new R);T(this,"yaw",0);T(this,"pitch",0);T(this,"grounded",!0);T(this,"stance","stand");T(this,"sprinting",!1);T(this,"aiming",!1);T(this,"stamina",100);T(this,"maxStamina",100);T(this,"health",100);T(this,"distanceTraveled",0);T(this,"groundY",0);T(this,"lastFootstepDist",0);T(this,"timeSinceLand",0);T(this,"noclip",!1);T(this,"onFootstep",null);T(this,"moveInputBlocked",!1);this.world=t,this.input=e}get eyeHeight(){return this.stance==="crouch"?gv:mv}get eyePosition(){return new R(this.position.x,this.position.y+this.eyeHeight,this.position.z)}get speedFraction(){const t=Math.hypot(this.velocity.x,this.velocity.z);return ln(t/sc)}get currentSurface(){return this.groundLocationHint()}groundLocationHint(){if(this.world.hf.isRoad(this.position.x,this.position.z))return"concrete";const t=this.world.pois.find(e=>Math.hypot(e.x-this.position.x,e.z-this.position.z)<60);return t?.id==="facility"||t?.id==="outpost"?"concrete":t?.id==="quarry"?"rock":t?.id==="northport"?"metal":"grass"}teleport(t,e){this.position.set(t,this.world.heightAt(t,e),e),this.velocity.set(0,0,0)}setLookDelta(t,e,n,s){this.yaw-=t*.0022*n;const r=s?-1:1;this.pitch-=e*.0022*n*r,this.pitch=Ro(this.pitch,-1.3,1.3)}update(t,e){const n=this.input,s=n.isDown("KeyC")||n.isDown("ControlLeft");this.stance=s?"crouch":"stand";let r=0,a=0;this.moveInputBlocked||(n.isDown("KeyW")&&(a+=1),n.isDown("KeyS")&&(a-=1),n.isDown("KeyD")&&(r+=1),n.isDown("KeyA")&&(r-=1));const o=r!==0||a!==0,l=n.isDown("ShiftLeft")&&o&&a>0&&!this.aiming&&e;if(this.sprinting=l&&this.stamina>1,this.sprinting)this.stamina=Math.max(0,this.stamina-t*18);else{const C=this.stance==="crouch"?14:10;this.stamina=Math.min(this.maxStamina,this.stamina+t*C)}let c=xv;this.stance==="crouch"?c=Mv:this.aiming?c=Sv:this.sprinting&&(c=sc);const h=Math.hypot(r,a)||1;r/=h,a/=h;const u=Math.sin(this.yaw),d=Math.cos(this.yaw),p=r*d+a*u,g=-r*u+a*d,_=o?p*c:0,m=o?g*c:0,f=this.grounded?wv:bv;this.velocity.x=yn(this.velocity.x,_,f,t)*1,this.velocity.z=yn(this.velocity.z,m,f,t)*1,this.grounded&&n.wasPressed("Space")&&this.stance!=="crouch"&&(this.velocity.y=yv,this.grounded=!1),this.velocity.y+=_v*t;let y=this.position.x+this.velocity.x*t,x=this.position.z+this.velocity.z*t,w=this.position.y+this.velocity.y*t;this.noclip||([y,x]=this.world.colliders.resolve(y,x,w,vv,this.eyeHeight),[y,x]=this.world.clampToBounds(y,x)),this.groundY=this.world.heightAt(y,x),w<=this.groundY?(w=this.groundY,this.velocity.y<0&&(this.velocity.y=0),this.grounded||(this.timeSinceLand=0),this.grounded=!0):(this.grounded=!1,this.timeSinceLand+=t);const P=Math.hypot(y-this.position.x,x-this.position.z);if(this.distanceTraveled+=P,this.position.set(y,w,x),this.grounded&&o){this.lastFootstepDist+=P;const C=this.sprinting?3.2:this.stance==="crouch"?5.5:4.2;this.lastFootstepDist>C&&(this.lastFootstepDist=0,this.onFootstep?.(this.currentSurface,this.sprinting))}}}const rc=3.6,Ev=1.5,ac=.55,Av=.42,Cv=.25,oc=68,Rv=52;class Pv{constructor(t){T(this,"camera");T(this,"raycaster",new Co);T(this,"currentDistance",rc);T(this,"currentShoulder",ac);T(this,"currentFov",oc);T(this,"shakeTime",0);T(this,"shakeMag",0);T(this,"shakeEnabled",!0);T(this,"recoilPitch",0);T(this,"recoilYaw",0);this.camera=t}addRecoil(t,e){this.recoilPitch+=t,this.recoilYaw+=e}addShake(t,e){this.shakeEnabled&&(this.shakeMag=Math.max(this.shakeMag,t),this.shakeTime=Math.max(this.shakeTime,e))}update(t,e,n,s){this.recoilPitch=yn(this.recoilPitch,0,9,t),this.recoilYaw=yn(this.recoilYaw,0,6,t);const r=e.aiming?Ev:rc,a=e.aiming?Av:ac,o=e.aiming?Rv*s:oc;this.currentDistance=yn(this.currentDistance,r,14,t),this.currentShoulder=yn(this.currentShoulder,a,14,t),this.currentFov=yn(this.currentFov,o,12,t);const l=e.eyePosition.clone();l.y+=Cv*(e.aiming?.4:1);const c=e.yaw+this.recoilYaw,h=e.pitch+this.recoilPitch,u=new R(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)),d=new R(Math.cos(c),0,-Math.sin(c)),p=l.clone().addScaledVector(u,-this.currentDistance).addScaledVector(d,this.currentShoulder);p.y+=this.currentDistance*.12;const g=p.clone().sub(l),_=g.length();let m=_;if(_>.01){this.raycaster.set(l,g.clone().normalize()),this.raycaster.far=_,this.raycaster.near=.05;const P=this.raycaster.intersectObjects(n,!1);P.length>0&&(m=Math.max(.3,P[0].distance-.25))}const f=l.clone().addScaledVector(g.normalize(),m);let y=0,x=0;if(this.shakeTime>0){const P=this.shakeTime;y=(Math.random()-.5)*this.shakeMag*P,x=(Math.random()-.5)*this.shakeMag*P,this.shakeTime=Math.max(0,this.shakeTime-t),this.shakeTime===0&&(this.shakeMag=0)}this.camera.position.set(f.x+y,f.y+x,f.z);const w=l.clone().addScaledVector(u,20);this.camera.up.set(0,1,0),this.camera.lookAt(w),this.camera.fov=Ui(this.camera.fov,this.currentFov,Math.min(1,t*14)),this.camera.updateProjectionMatrix()}getAimRay(t){const e=t.yaw+this.recoilYaw,n=t.pitch+this.recoilPitch,s=new R(Math.sin(e)*Math.cos(n),Math.sin(n),Math.cos(e)*Math.cos(n));return new po(this.camera.position.clone(),s.normalize())}}const lc={bandage:{id:"bandage",name:"Bandage",healAmount:30,duration:2.6},medkit:{id:"medkit",name:"Medkit",healAmount:85,duration:5.5}},Lv=.12,Dv=.16;class Iv{constructor(t){T(this,"health",100);T(this,"maxHealth",100);T(this,"vestLevel",0);T(this,"helmetLevel",0);T(this,"alive",!0);T(this,"healing",null);T(this,"lastHitDirection",new R);T(this,"lastDamageTime",-10);T(this,"invulnerable",!1);this.bus=t}get isHealing(){return this.healing!==null}get healProgress01(){return this.healing?1-this.healing.remaining/this.healing.item.duration:0}startHeal(t){return this.health>=this.maxHealth||this.healing?!1:(this.healing={item:lc[t],remaining:lc[t].duration},!0)}cancelHeal(){this.healing=null}update(t){this.healing&&(this.healing.remaining-=t,this.healing.remaining<=0&&(this.health=Math.min(this.maxHealth,this.health+this.healing.item.healAmount),this.bus.emit("player:heal",{amount:this.healing.item.healAmount}),this.healing=null))}applyDamage(t,e,n,s=!1){if(!this.alive||this.invulnerable)return;let r=t;s||(n?r*=1-this.helmetLevel*Dv:r*=1-this.vestLevel*Lv,this.healing=null),r=Math.max(1,r),this.health=Math.max(0,this.health-r),this.lastHitDirection.copy(e),this.lastDamageTime=performance.now()/1e3;const a=this.health<=0;a&&(this.alive=!1),this.bus.emit("player:damaged",{amount:r,direction:e.clone(),killed:a}),a&&this.bus.emit("player:died",{reason:s?"zone":"combat"})}reset(){this.health=this.maxHealth,this.vestLevel=0,this.helmetLevel=0,this.alive=!0,this.healing=null}}class Uv{constructor(t,e){T(this,"id","player");T(this,"team","player");this.controller=t,this.health=e}isAlive(){return this.health.alive}getPosition(){return this.controller.position.clone()}getHeadPosition(){return this.controller.position.clone().add(new R(0,this.controller.eyeHeight,0))}getTorsoPosition(){return this.controller.position.clone().add(new R(0,this.controller.eyeHeight*.6,0))}applyDamage(t,e,n){this.health.applyDamage(t,e,n==="head")}}function Li(i,t,e){const n=new bo(i,t,4,8),s=new Ot(n,e);return s.castShadow=!0,s.receiveShadow=!1,s}function oh(i){const t=new Lt({color:i.uniform,roughness:.85,metalness:0}),e=new Lt({color:i.uniformDark,roughness:.85,metalness:0}),n=new Lt({color:i.skin,roughness:.7,metalness:0}),s=new ne,r=new ne;r.position.y=.92,s.add(r);const a=new ne;a.position.y=.32,r.add(a);const o=Li(.19,.34,t);o.position.y=.2,o.name="hit-torso",a.add(o);const l=new ne;l.position.y=.42,a.add(l);const c=new ne;c.position.y=.14,l.add(c);const h=new Ot(new Bn(.135,10,8),n);if(h.castShadow=!0,h.name="hit-head",c.add(h),i.helmet!==void 0){const y=new Lt({color:i.helmet,roughness:.6,metalness:.3}),x=new Ot(new Bn(.15,10,8,0,Math.PI*2,0,Math.PI*.62),y);x.position.y=.02,c.add(x)}if(i.vest!==void 0){const y=new Lt({color:i.vest,roughness:.8,metalness:0}),x=Li(.205,.24,y);x.position.y=.24,x.scale.set(1,.86,1),a.add(x)}function u(y){const x=new ne;x.position.set(y*.235,.36,0),a.add(x);const w=Li(.06,.24,t);w.position.y=-.13,w.name="hit-limb",x.add(w);const P=new ne;P.position.set(0,-.26,0),x.add(P);const C=Li(.05,.22,e);C.position.y=-.12,C.name="hit-limb",P.add(C);const A=new ne;return A.position.set(0,-.26,0),P.add(A),{upper:x,lower:P,hand:A}}const d=u(1),p=u(-1);function g(y){const x=new ne;x.position.set(y*.1,-.12,0),r.add(x);const w=Li(.075,.26,e);w.position.y=-.15,w.name="hit-limb",x.add(w);const P=new ne;P.position.set(0,-.3,0),x.add(P);const C=Li(.065,.26,e);return C.position.y=-.15,C.name="hit-limb",P.add(C),{upper:x,lower:P}}const _=g(1),m=g(-1),f=new ne;return f.position.set(.02,-.05,.12),d.hand.add(f),s.castShadow=!0,{root:s,hip:r,chest:a,head:c,headMesh:h,torsoMesh:o,upperArmR:d.upper,lowerArmR:d.lower,handR:d.hand,upperArmL:p.upper,lowerArmL:p.lower,upperLegR:_.upper,lowerLegR:_.lower,upperLegL:m.upper,lowerLegL:m.lower,weaponSocket:f,walkPhase:0}}function to(i,t,e){if(t.deadT>0){i.root.rotation.x=Se.lerp(0,Math.PI/2,Math.min(1,t.deadT)),i.hip.position.y=Se.lerp(.92,.22,Math.min(1,t.deadT));return}const n=t.crouching?.68:.92;i.hip.position.y=Se.lerp(i.hip.position.y,n,Math.min(1,e*10));const s=6+t.moveSpeed01*4;t.moving?i.walkPhase+=e*s:i.walkPhase=Se.lerp(i.walkPhase,Math.round(i.walkPhase/Math.PI)*Math.PI,e*8);const r=t.moving?.55*Math.min(1,.3+t.moveSpeed01):0;if(i.upperLegR.rotation.x=Math.sin(i.walkPhase)*r,i.upperLegL.rotation.x=Math.sin(i.walkPhase+Math.PI)*r,i.lowerLegR.rotation.x=Math.max(0,-Math.sin(i.walkPhase+.6)*r*1.3),i.lowerLegL.rotation.x=Math.max(0,-Math.sin(i.walkPhase+Math.PI+.6)*r*1.3),t.aiming){const a=Se.clamp(t.aimPitch,-1.1,1.1);i.upperArmR.rotation.x=-1.2-a*.5,i.lowerArmR.rotation.x=.3,i.upperArmL.rotation.x=-1.15-a*.5,i.chest.rotation.x=a*.28}else{const a=t.moving?.4*Math.min(1,.3+t.moveSpeed01):.05;i.upperArmR.rotation.x=Math.sin(i.walkPhase+Math.PI)*a-.25,i.upperArmL.rotation.x=Math.sin(i.walkPhase)*a-.25,i.lowerArmR.rotation.x=Se.lerp(i.lowerArmR.rotation.x,.15,e*6),i.lowerArmL.rotation.x=Se.lerp(i.lowerArmL.rotation.x,.15,e*6),i.chest.rotation.x=Se.lerp(i.chest.rotation.x,0,e*6)}i.root.rotation.x=Se.lerp(i.root.rotation.x,0,e*10)}const cc=new Lt({color:2829096,roughness:.55,metalness:.5}),ra=new Lt({color:1776409,roughness:.4,metalness:.7}),Nv=new Lt({color:4863264,roughness:.8,metalness:0}),Fv=new Lt({color:2039580,roughness:.6,metalness:.4});function Di(i,t,e,n){const s=new Ot(new hn(i,t,e),n);return s.castShadow=!0,s}function lh(i){const t=new ne;let e=.55,n=.35,s=!0,r=.22,a=!1;switch(i){case"raven":e=.5,n=.32,r=.24;break;case"vex":e=.36,n=.18,r=.2,s=!1;break;case"sentinel":e=.62,n=.42,r=.2,a=!0;break;case"breach":e=.5,n=.4,r=0;break;case"longbow":e=.7,n=.55,r=.12,a=!0;break;case"sidewinder":e=.22,n=.12,r=.14,s=!1;break}const o=Di(.08,.11,e,cc);o.position.z=0,t.add(o);const l=Di(.035,.035,n,ra);if(l.position.z=e/2+n/2,t.add(l),s){const d=Di(.05,.09,.26,Nv);d.position.z=-(e/2+.11),t.add(d)}if(r>0){const d=Di(.05,r,.07,Fv);d.position.set(0,-r/2-.03,e*.12),d.rotation.x=.2,t.add(d)}const c=Di(.045,.16,.05,cc);if(c.position.set(0,-.1,-e*.12),c.rotation.x=.3,t.add(c),a){const d=new Ot(new We(.025,.025,.22,8),ra);d.rotation.z=Math.PI/2,d.position.set(0,.07,e*.05),t.add(d)}else{const d=Di(.02,.03,.03,ra);d.position.set(0,.065,e*.3),t.add(d)}const h=new le;h.position.z=e/2+n,t.add(h);const u=new le;return u.position.set(.05,.03,0),t.add(u),t.rotation.y=Math.PI,t.scale.setScalar(1.15),{group:t,muzzle:h,ejectionPort:u}}class Ov{constructor(t){T(this,"modelParts");T(this,"weaponMesh",null);T(this,"currentWeaponId",null);T(this,"deps");T(this,"shotsFired",0);T(this,"shotsHit",0);T(this,"damageDealt",0);this.deps=t,this.modelParts=oh({uniform:5264444,uniformDark:3619369,skin:13214587,helmet:void 0,vest:void 0}),t.world.scene.add(this.modelParts.root),t.registry.register(t.combatant,[{mesh:this.modelParts.headMesh,part:"head"},{mesh:this.modelParts.torsoMesh,part:"torso"}]),this.modelParts.root.traverse(e=>{e.name==="hit-limb"&&t.registry.register(t.combatant,[{mesh:e,part:"limb"}])}),t.bus.on("damage",e=>{e.sourceId==="player"&&!e.isPlayer&&(this.shotsHit++,this.damageDealt+=e.amount)})}preMovementUpdate(){const t=this.deps.input,e=this.deps.player,n=this.deps.inventory;if(!t.enabled)return;e.aiming=t.isMouseDown(2)&&!e.sprinting;const s=e.aiming?t.settings.aimSensitivity:t.settings.sensitivity;e.setLookDelta(t.mouseDX,t.mouseDY,s,t.settings.invertY),this.deps.health.vestLevel=n.state.vestLevel,this.deps.health.helmetLevel=n.state.helmetLevel,t.wasPressed("Digit1")&&n.selectSlot("primary1"),t.wasPressed("Digit2")&&n.selectSlot("primary2"),t.wasPressed("Digit3")&&n.selectSlot("sidearm"),this.syncWeaponMesh()}syncWeaponMesh(){const e=this.deps.inventory.getActiveWeapon()?.def.id??null;e!==this.currentWeaponId&&(this.currentWeaponId=e,this.weaponMesh&&(this.modelParts.weaponSocket.remove(this.weaponMesh.group),this.weaponMesh=null),e&&(this.weaponMesh=lh(e),this.modelParts.weaponSocket.add(this.weaponMesh.group)))}postMovementUpdate(t,e){const n=this.deps.input,s=this.deps.player,r=this.deps.inventory,a=this.deps.health;this.modelParts.root.position.copy(s.position),this.modelParts.root.rotation.y=s.yaw,this.modelParts.root.updateMatrixWorld(!0);const o=r.getActiveWeapon();if(n.enabled&&o){if(n.wasPressed("KeyR")&&o.startReload()&&(this.deps.bus.emit("weapon:reload",{weaponId:o.def.id,isPlayer:!0,position:s.position.clone()}),a.cancelHeal()),(o.def.automatic?n.isMouseDown(0):n.wasMousePressed(0))&&!a.isHealing){const h=this.weaponMesh?this.weaponMesh.muzzle.getWorldPosition(new R):s.eyePosition,u=this.deps.camera.getAimRay(s),d={origin:u.origin,direction:u.direction,muzzleWorldPos:h,environmentTargets:this.deps.world.colliders.raycastMeshes,registry:this.deps.registry,effects:this.deps.effects,bus:this.deps.bus,excludeCombatantId:"player",isPlayerShooter:!0,movingSpreadFactor:s.speedFraction,sprinting:s.sprinting,aiming:s.aiming},p=o.tryFire(e,d);p&&(this.shotsFired++,this.deps.camera.addRecoil(p.recoilPitch,p.recoilYaw),this.deps.camera.addShake(.02,.05))}if(n.wasPressed("KeyG")){const h=r.state.frags>0?"frag":r.state.smokes>0?"smoke":null;if(h&&r.useThrowable(h)){const u=this.deps.camera.getAimRay(s).direction;this.deps.throwables.throw(h,s.eyePosition,u,"player")}}if(n.wasPressed("Digit4")){const u=a.health<=40&&r.state.medkits>0?"medkit":r.state.bandages>0?"bandage":r.state.medkits>0?"medkit":null;u&&r.useHeal(u)&&a.startHeal(u)}}o?.update(t);const l=s.pitch;to(this.modelParts,{moveSpeed01:s.speedFraction,aiming:s.aiming,crouching:s.stance==="crouch",aimPitch:l,moving:s.speedFraction>.05,deadT:a.alive?0:1},t)}get activeWeaponLabel(){return this.deps.inventory.getActiveWeapon()?.def.name??"—"}}function zv(i){const t=i.name||i.parent?.name||"";return t==="terrain"?"terrain":t.includes("rock")||t.includes("veg")?"rock":"concrete"}const aa=new Co;class kv{constructor(t,e){T(this,"pool",{});this.type=t,this.pool[t]=e}get(t){return t===this.type?this.pool[t]??0:0}consume(t,e){if(t!==this.type)return 0;const n=Math.min(e,this.pool[t]??0);return this.pool[t]-=n,n}add(t,e){t===this.type&&(this.pool[t]=(this.pool[t]??0)+e)}}class ni{constructor(t,e,n){T(this,"def");T(this,"magAmmo");T(this,"reloading",!1);T(this,"ammoSource");T(this,"reloadTimer",0);T(this,"lastFireAt",-999);T(this,"fireHeld",!1);T(this,"onReloadComplete",null);this.def=t,this.magAmmo=t.magSize,this.ammoSource=n??new kv(t.ammoType,e)}get reserveAmmo(){return this.ammoSource.get(this.def.ammoType)}get canReload(){return!this.reloading&&this.magAmmo<this.def.magSize&&this.reserveAmmo>0}get isDry(){return this.magAmmo===0&&this.reserveAmmo===0}get reloadProgress01(){return this.reloading?1-this.reloadTimer/this.def.reloadTime:0}startReload(){return this.canReload?(this.reloading=!0,this.reloadTimer=this.def.reloadTime,!0):!1}cancelReload(){this.reloading=!1}addReserve(t){this.ammoSource.add(this.def.ammoType,t)}update(t){if(this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0)){const e=this.def.magSize-this.magAmmo,n=this.ammoSource.consume(this.def.ammoType,e);this.magAmmo+=n,this.reloading=!1,this.onReloadComplete?.()}}canFire(t){return this.reloading||this.magAmmo<=0?!1:t-this.lastFireAt>=this.def.fireInterval}setTriggerHeld(t){this.fireHeld=t}tryFire(t,e){if(!this.canFire(t))return this.magAmmo<=0&&!this.reloading&&e.bus.emit("weapon:empty",{weaponId:this.def.id,isPlayer:e.isPlayerShooter}),null;this.lastFireAt=t,this.magAmmo--,e.bus.emit("weapon:fire",{weaponId:this.def.id,position:e.muzzleWorldPos.clone(),isPlayer:e.isPlayerShooter}),e.effects.spawnMuzzleFlash(e.muzzleWorldPos,this.def.muzzleFlashSize);let n=e.aiming?this.def.aimSpread:this.def.hipSpread;n*=1+e.movingSpreadFactor*(this.def.movingSpreadMult-1),e.sprinting&&(n*=this.def.sprintSpreadMult);const s=Math.max(1,this.def.pellets);for(let a=0;a<s;a++)this.firePellet(e,n);const r=(Math.random()-.5)*this.def.recoilHorizontal;return{recoilPitch:this.def.recoilVertical,recoilYaw:r}}firePellet(t,e){const n=t.direction.clone();if(e>1e-4){const l=Math.random()*Math.PI*2,c=Math.sqrt(Math.random())*e,h=Math.abs(n.y)<.99?new R(0,1,0):new R(1,0,0),u=new R().crossVectors(n,h).normalize(),d=new R().crossVectors(u,n).normalize();n.addScaledVector(u,Math.cos(l)*c).addScaledVector(d,Math.sin(l)*c).normalize()}aa.set(t.origin,n),aa.far=this.def.rangeEnd+20;const s=t.environmentTargets.concat(t.registry.hitMeshes),r=aa.intersectObjects(s,!1);let a=null;for(const l of r){const c=t.registry.resolve(l.object);if(c&&c.combatant.id===t.excludeCombatantId)continue;a=l.point;const h=l.distance,u=this.damageFalloff(h);if(c){const d=c.part,p=d==="head"?this.def.headshotMultiplier:1,g=this.def.damage*u*p,_=n.clone();c.combatant.applyDamage(g,_,d,t.excludeCombatantId),c.combatant.onHitReaction?.(_,d),t.effects.spawnImpact(l.point,l.face?.normal??new R(0,1,0),"body"),t.bus.emit("damage",{targetId:c.combatant.id,amount:g,isPlayer:c.combatant.team==="player",isHeadshot:d==="head",killed:!c.combatant.isAlive(),position:l.point.clone(),sourceId:t.excludeCombatantId})}else{const d=l.face?l.face.normal.clone().transformDirection(l.object.matrixWorld):new R(0,1,0);t.effects.spawnImpact(l.point,d,zv(l.object))}break}const o=a??t.origin.clone().addScaledVector(n,this.def.rangeEnd);t.effects.spawnTracer(t.muzzleWorldPos,o,this.def.bulletSpeed)}damageFalloff(t){if(t<=this.def.rangeStart)return 1;if(t>=this.def.rangeEnd)return this.def.minDamageMult;const e=(t-this.def.rangeStart)/(this.def.rangeEnd-this.def.rangeStart);return Se.lerp(1,this.def.minDamageMult,e)}}class Bv{constructor(){T(this,"state",{primary:[null,null],sidearm:null,activeSlot:"primary1",ammo:{light:0,medium:0,heavy:0,shells:0,precision:0},helmetLevel:0,vestLevel:0,bandages:0,medkits:0,frags:0,smokes:0,lootCollected:0})}getActiveWeapon(){return this.state.activeSlot==="sidearm"?this.state.sidearm:this.state.activeSlot==="primary1"?this.state.primary[0]:this.state.primary[1]}equipStarting(t,e="sidewinder"){this.state.ammo[en[t].ammoType]+=Math.floor(en[t].reserveMax*.5),this.state.ammo[en[e].ammoType]+=Math.floor(en[e].reserveMax*.6),this.state.primary[0]=new ni(en[t],0,this),this.state.sidearm=new ni(en[e],0,this),this.state.activeSlot="primary1"}pickupWeapon(t){const e=en[t];if(this.state.ammo[e.ammoType]=Math.min(999,this.state.ammo[e.ammoType]+Math.floor(e.reserveMax*.4)),e.slot==="sidearm")return this.state.sidearm=new ni(e,0,this),"sidearm";if(!this.state.primary[0])return this.state.primary[0]=new ni(e,0,this),"primary1";if(!this.state.primary[1])return this.state.primary[1]=new ni(e,0,this),"primary2";const n=this.state.activeSlot==="primary2"?"primary2":"primary1",s=n==="primary1"?0:1;return this.state.primary[s]=new ni(e,0,this),n}cycleWeapon(){const t=["primary1","primary2","sidearm"];let e=t.indexOf(this.state.activeSlot);for(let n=0;n<t.length;n++){e=(e+1)%t.length;const s=t[e];if(s==="sidearm"&&this.state.sidearm){this.state.activeSlot=s;return}if(s==="primary1"&&this.state.primary[0]){this.state.activeSlot=s;return}if(s==="primary2"&&this.state.primary[1]){this.state.activeSlot=s;return}}}selectSlot(t){return t==="primary1"&&this.state.primary[0]?(this.state.activeSlot=t,!0):t==="primary2"&&this.state.primary[1]?(this.state.activeSlot=t,!0):t==="sidearm"&&this.state.sidearm?(this.state.activeSlot=t,!0):!1}addAmmo(t,e){this.state.ammo[t]=Math.min(999,this.state.ammo[t]+e)}get(t){return this.state.ammo[t]}consume(t,e){const n=Math.min(e,this.state.ammo[t]);return this.state.ammo[t]-=n,n}add(t,e){this.addAmmo(t,e)}addArmor(t,e){if(t==="helmet"){if(e<=this.state.helmetLevel)return!1;this.state.helmetLevel=e}else{if(e<=this.state.vestLevel)return!1;this.state.vestLevel=e}return!0}addHeal(t,e=1){t==="bandage"?this.state.bandages+=e:this.state.medkits+=e}addThrowable(t,e=1){t==="frag"?this.state.frags+=e:this.state.smokes+=e}useHeal(t){return t==="bandage"&&this.state.bandages>0?(this.state.bandages--,!0):t==="medkit"&&this.state.medkits>0?(this.state.medkits--,!0):!1}useThrowable(t){return t==="frag"&&this.state.frags>0?(this.state.frags--,!0):t==="smoke"&&this.state.smokes>0?(this.state.smokes--,!0):!1}}const Hv=[{kind:"weapon",id:"raven",label:"RAVEN AR",rarity:"uncommon",weight:10},{kind:"weapon",id:"vex",label:"VEX SMG",rarity:"common",weight:12},{kind:"weapon",id:"sentinel",label:"SENTINEL DMR",rarity:"rare",weight:6},{kind:"weapon",id:"breach",label:"BREACH Shotgun",rarity:"uncommon",weight:8},{kind:"weapon",id:"longbow",label:"LONGBOW Rifle",rarity:"rare",weight:5},{kind:"weapon",id:"sidewinder",label:"SIDEWINDER Pistol",rarity:"common",weight:14},{kind:"ammo",id:"light",label:"Light Ammo",rarity:"common",weight:20,ammoAmount:60},{kind:"ammo",id:"medium",label:"Medium Ammo",rarity:"common",weight:18,ammoAmount:60},{kind:"ammo",id:"heavy",label:"Heavy Ammo",rarity:"uncommon",weight:8,ammoAmount:15},{kind:"ammo",id:"shells",label:"Shells",rarity:"uncommon",weight:10,ammoAmount:12},{kind:"ammo",id:"precision",label:"Precision Rounds",rarity:"uncommon",weight:8,ammoAmount:15},{kind:"armor",id:"helmet1",label:"Helmet Mk.I",rarity:"common",weight:10,armorSlot:"helmet",armorLevel:1},{kind:"armor",id:"helmet2",label:"Helmet Mk.II",rarity:"uncommon",weight:6,armorSlot:"helmet",armorLevel:2},{kind:"armor",id:"helmet3",label:"Helmet Mk.III",rarity:"rare",weight:3,armorSlot:"helmet",armorLevel:3},{kind:"armor",id:"vest1",label:"Vest Mk.I",rarity:"common",weight:10,armorSlot:"vest",armorLevel:1},{kind:"armor",id:"vest2",label:"Vest Mk.II",rarity:"uncommon",weight:6,armorSlot:"vest",armorLevel:2},{kind:"armor",id:"vest3",label:"Vest Mk.III",rarity:"rare",weight:3,armorSlot:"vest",armorLevel:3},{kind:"heal",id:"bandage",label:"Bandage",rarity:"common",weight:22},{kind:"heal",id:"medkit",label:"Medkit",rarity:"uncommon",weight:10},{kind:"throwable",id:"frag",label:"Frag Pulse",rarity:"uncommon",weight:9},{kind:"throwable",id:"smoke",label:"Smoke Canister",rarity:"common",weight:10}];function Vv(i,t){const e=Hv.filter(r=>r.rarity===i),n=e.reduce((r,a)=>r+a.weight,0);let s=t()*n;for(const r of e)if(s-=r.weight,s<=0)return r;return e[0]}const hc={common:12102542,uncommon:8365513,rare:14064202};function Gv(i){const t=new ne,e=new Lt({color:hc[i]??16777215,emissive:hc[i]??16777215,emissiveIntensity:.5,roughness:.4,metalness:.3}),n=new Ot(new hn(.4,.16,.28),e);n.position.y=.1,n.castShadow=!0,t.add(n);const s=new We(.02,.02,2.2,6),r=new zi({color:e.color,transparent:!0,opacity:.35}),a=new Ot(s,r);return a.position.y=1.2,t.add(a),t}const Wv=2.2;class Xv{constructor(t,e,n){T(this,"items",[]);T(this,"bobTime",0);T(this,"pendingPickup",null);this.world=t,this.bus=n;const s=new li(e^305441741);for(const r of t.loot){const a=Vv(r.rarity,()=>s.next()),o=Gv(r.rarity);o.position.set(r.x,r.y+.05,r.z),t.scene.add(o),this.items.push({entry:a,mesh:o,position:o.position.clone(),collected:!1})}}update(t,e,n){this.bobTime+=t;let s=null,r=Wv,a=null;for(const o of this.items){if(o.collected)continue;o.mesh.rotation.y+=t*1.2,o.mesh.position.y=o.position.y+Math.sin(this.bobTime*2+o.position.x)*.06+.1;const l=Math.hypot(o.position.x-e.position.x,o.position.z-e.position.z);l<r&&(r=l,a=o,s=o.entry.label)}return a&&a.mesh.children[0].scale.setScalar(1.15),this.pendingPickup=a,s}tryPickup(t){const e=this.pendingPickup;if(!e||e.collected)return!1;e.collected=!0,this.world.scene.remove(e.mesh),t.state.lootCollected++;const n=e.entry;return n.kind==="weapon"?t.pickupWeapon(n.id):n.kind==="ammo"?t.addAmmo(n.id,n.ammoAmount??30):n.kind==="armor"?t.addArmor(n.armorSlot,n.armorLevel):n.kind==="heal"?t.addHeal(n.id):n.kind==="throwable"&&t.addThrowable(n.id),this.bus.emit("loot:pickup",{itemName:n.label,itemType:n.kind}),!0}}class qv{constructor(){T(this,"meshToHit",new Map);T(this,"combatants",new Map);T(this,"hitMeshes",[])}register(t,e){this.combatants.set(t.id,t);for(const{mesh:n,part:s}of e)this.meshToHit.set(n,{combatant:t,part:s}),this.hitMeshes.push(n)}unregister(t){this.combatants.delete(t.id),this.hitMeshes=this.hitMeshes.filter(e=>this.meshToHit.get(e)?.combatant.id!==t.id);for(const[e,n]of this.meshToHit)n.combatant.id===t.id&&this.meshToHit.delete(e)}resolve(t){let e=t;for(;e;){const n=this.meshToHit.get(e);if(n)return n;e=e.parent}return null}getAll(){return Array.from(this.combatants.values())}}class oa{constructor(t,e,n=0){T(this,"free",[]);T(this,"active",new Set);T(this,"factory");T(this,"reset");this.factory=t,this.reset=e;for(let s=0;s<n;s++)this.free.push(this.factory())}acquire(){const t=this.free.pop()??this.factory();return this.active.add(t),t}release(t){this.active.has(t)&&(this.active.delete(t),this.reset(t),this.free.push(t))}forEachActive(t){this.active.forEach(t)}get activeCount(){return this.active.size}}const Yv={terrain:7035450,concrete:13223096,metal:16764794,wood:9069624,body:11743784,rock:10130826},$v=220,Kv=90,Zv=40;class Jv{constructor(t){T(this,"scene");T(this,"particlePool");T(this,"decalPool");T(this,"tracerPool");T(this,"particleGeo",new Tn(.08,.08));T(this,"decalGeo",new Tn(.18,.18));T(this,"tracerGeo",new We(.012,.012,1,5));T(this,"muzzleLight");T(this,"muzzleLightTimer",0);T(this,"qualityScale",1);this.scene=t,this.particlePool=new oa(()=>{const e=new zi({color:16777215,transparent:!0,depthWrite:!1}),n=new Ot(this.particleGeo,e);return n.visible=!1,t.add(n),{mesh:n,velocity:new R,life:0,maxLife:1,active:!1}},e=>{e.mesh.visible=!1,e.active=!1},$v),this.decalPool=new oa(()=>{const e=new zi({color:0,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),n=new Ot(this.decalGeo,e);return n.visible=!1,t.add(n),{mesh:n,life:0}},e=>{e.mesh.visible=!1},Kv),this.tracerPool=new oa(()=>{const e=new zi({color:16771504,transparent:!0,opacity:.9}),n=new Ot(this.tracerGeo,e);return n.visible=!1,t.add(n),{mesh:n,start:new R,end:new R,speed:300,t:0,active:!1}},e=>{e.mesh.visible=!1,e.active=!1},Zv),this.muzzleLight=new $g(16756838,0,6,2),t.add(this.muzzleLight)}spawnMuzzleFlash(t,e){this.muzzleLight.position.copy(t),this.muzzleLight.intensity=6*e,this.muzzleLightTimer=.045}spawnTracer(t,e,n){if(this.qualityScale<.5&&Math.random()>.5)return;const s=this.tracerPool.acquire();s.start.copy(t),s.end.copy(e),s.speed=n,s.t=0,s.active=!0,s.mesh.visible=!0;const r=t.distanceTo(e),a=Math.min(2.4,r*.12);s.mesh.scale.set(1,a,1)}spawnImpact(t,e,n){const s=Math.round((n==="body"?5:8)*this.qualityScale),r=Yv[n];for(let a=0;a<s;a++){const o=this.particlePool.acquire();o.active=!0,o.mesh.visible=!0,o.mesh.material.color.setHex(r),o.mesh.material.opacity=1,o.mesh.position.copy(t);const l=2.4;o.velocity.set(e.x*2+(Math.random()-.5)*l,Math.abs(e.y)*2+Math.random()*2,e.z*2+(Math.random()-.5)*l),o.life=0,o.maxLife=.35+Math.random()*.3}if(n!=="body"&&this.qualityScale>.4){const a=this.decalPool.acquire();a.mesh.visible=!0,a.mesh.position.copy(t).addScaledVector(e,.02),a.mesh.lookAt(t.clone().add(e)),a.life=12,a.mesh.material.color.setHex(n==="concrete"||n==="rock"?1118481:1707781)}}update(t){this.muzzleLightTimer>0&&(this.muzzleLightTimer-=t,this.muzzleLightTimer<=0&&(this.muzzleLight.intensity=0)),this.particlePool.forEachActive(e=>{if(!e.active)return;if(e.life+=t,e.life>=e.maxLife){this.particlePool.release(e);return}e.velocity.y-=9*t,e.mesh.position.addScaledVector(e.velocity,t);const n=1-e.life/e.maxLife;e.mesh.material.opacity=n}),this.decalPool.forEachActive(e=>{e.life-=t,e.life<=0&&this.decalPool.release(e)}),this.tracerPool.forEachActive(e=>{if(!e.active)return;e.t+=t*e.speed;const n=e.start.distanceTo(e.end);if(e.t>=n){this.tracerPool.release(e);return}const s=e.start.clone().lerp(e.end,e.t/n);e.mesh.position.copy(s),e.mesh.lookAt(e.end),e.mesh.rotateX(Math.PI/2)})}}function jv(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(220,215,205,0.9)"),n.addColorStop(.5,"rgba(190,185,175,0.5)"),n.addColorStop(1,"rgba(190,185,175,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),new Pg(t)}let la=null;class Qv{constructor(t,e,n,s){T(this,"active",[]);T(this,"smokeVolumes",[]);T(this,"world");T(this,"registry");T(this,"effects");T(this,"bus");T(this,"fragMat",new Lt({color:3026472,roughness:.5,metalness:.6}));T(this,"smokeMat",new Lt({color:5591881,roughness:.5,metalness:.6}));this.world=t,this.registry=e,this.effects=n,this.bus=s,la||(la=jv())}throw(t,e,n,s){const r=E0[t],a=new Bn(.08,8,6),o=new Ot(a,t==="frag"?this.fragMat:this.smokeMat);o.castShadow=!0,o.position.copy(e),this.world.scene.add(o),this.active.push({def:r,position:e.clone(),velocity:n.clone().normalize().multiplyScalar(r.throwSpeed).add(new R(0,2.2,0)),fuse:r.fuseTime,mesh:o,sourceId:s,exploded:!1})}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.velocity.y-=16*t;const s=n.position.clone().addScaledVector(n.velocity,t),r=this.world.heightAt(s.x,s.z);s.y<=r+.08&&(s.y=r+.08,n.velocity.y<0&&(n.velocity.y*=-.4,n.velocity.x*=.6,n.velocity.z*=.6)),n.position.copy(s),n.mesh.position.copy(s),n.fuse-=t,n.fuse<=0&&!n.exploded&&(n.exploded=!0,this.detonate(n),this.world.scene.remove(n.mesh),this.active.splice(e,1))}for(let e=this.smokeVolumes.length-1;e>=0;e--){const n=this.smokeVolumes[e];n.life-=t;const s=Math.min(1,(n.maxLife-n.life)/1.2),r=n.life<2?Math.max(0,n.life/2):1;for(const a of n.sprites){const o=n.radius*(.5+s*.7);a.scale.set(o,o,1),a.material.opacity=.55*r}if(n.life<=0){for(const a of n.sprites)this.world.scene.remove(a);this.smokeVolumes.splice(e,1)}}}detonate(t){if(t.def.id==="frag"){this.bus.emit("grenade:explode",{position:t.position.clone(),radius:t.def.radius}),this.effects.spawnImpact(t.position,new R(0,1,0),"terrain");for(const e of this.registry.getAll()){if(!e.isAlive())continue;const n=e.getPosition().distanceTo(t.position);if(n>t.def.radius)continue;const s=1-n/t.def.radius,r=t.def.damage*s*s,a=e.getPosition().clone().sub(t.position).normalize();e.applyDamage(r,a,"torso",t.sourceId)}}else{this.bus.emit("smoke:deployed",{position:t.position.clone(),radius:t.def.radius});const e=[];for(let n=0;n<10;n++){const s=new Xc({map:la,transparent:!0,opacity:.05,depthWrite:!1}),r=new Ag(s),a=new R((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3);r.position.copy(t.position).add(a).setY(t.position.y+1+Math.random()*1.5),r.scale.set(.1,.1,1),this.world.scene.add(r),e.push(r)}this.smokeVolumes.push({position:t.position.clone(),radius:t.def.radius,life:9,maxLife:9,sprites:e})}}segmentBlockedBySmoke(t,e){for(const n of this.smokeVolumes)if(t_(t,e,n.position).distanceTo(n.position)<n.radius)return!0;return!1}}function t_(i,t,e){const n=t.clone().sub(i),s=Se.clamp(e.clone().sub(i).dot(n)/n.lengthSq(),0,1);return i.clone().addScaledVector(n,s)}const Ye=4;class e_{constructor(){T(this,"items",[])}get size(){return this.items.length}push(t,e){const n=this.items;n.push({f:t,idx:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].f<=n[s].f)break;[n[r],n[s]]=[n[s],n[r]],s=r}}pop(){const t=this.items;if(t.length===0)return;const e=t[0],n=t.pop();if(t.length>0){t[0]=n;let s=0;for(;;){const r=s*2+1,a=s*2+2;let o=s;if(r<t.length&&t[r].f<t[o].f&&(o=r),a<t.length&&t[a].f<t[o].f&&(o=a),o===s)break;[t[o],t[s]]=[t[s],t[o]],s=o}}return e}}class n_{constructor(t,e){T(this,"size");T(this,"origin");T(this,"walkable");this.size=Math.ceil(Ue*2/Ye),this.origin=-Ue,this.walkable=new Uint8Array(this.size*this.size);for(let n=0;n<this.size;n++)for(let s=0;s<this.size;s++){const r=this.origin+s*Ye+Ye/2,a=this.origin+n*Ye+Ye/2;let o=!t.isUnderwater(r,a);if(o){const[,l]=t.getNormal(r,a,1.5);l<.55&&(o=!1)}o&&e.isBlocked(r,a,t.getHeight(r,a),2.2)&&(o=!1),this.walkable[n*this.size+s]=o?1:0}}worldToGrid(t,e){const n=Math.floor((t-this.origin)/Ye),s=Math.floor((e-this.origin)/Ye);return[n,s]}gridToWorld(t,e){return[this.origin+t*Ye+Ye/2,this.origin+e*Ye+Ye/2]}idx(t,e){return e*this.size+t}isWalkableWorld(t,e){const[n,s]=this.worldToGrid(t,e);return n<0||s<0||n>=this.size||s>=this.size?!1:this.walkable[this.idx(n,s)]===1}nearestWalkable(t,e){if(t>=0&&e>=0&&t<this.size&&e<this.size&&this.walkable[this.idx(t,e)]===1)return[t,e];for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){if(Math.max(Math.abs(r),Math.abs(s))!==n)continue;const a=t+r,o=e+s;if(!(a<0||o<0||a>=this.size||o>=this.size)&&this.walkable[this.idx(a,o)]===1)return[a,o]}return null}findPath(t,e,n,s,r=6e3){const a=this.worldToGrid(t,e),o=this.worldToGrid(n,s),l=this.nearestWalkable(a[0],a[1]),c=this.nearestWalkable(o[0],o[1]);if(!l||!c)return null;const h=this.idx(l[0],l[1]),u=this.idx(c[0],c[1]);if(h===u)return[this.gridToWorld(c[0],c[1])];const d=this.size*this.size,p=new Float32Array(d).fill(1/0),g=new Int32Array(d).fill(-1),_=new Uint8Array(d);p[h]=0;const m=new e_,f=(w,P)=>Math.hypot(w-c[0],P-c[1]);m.push(f(l[0],l[1]),h);const y=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];let x=0;for(;m.size>0&&x<r;){x++;const w=m.pop();if(_[w.idx])continue;if(_[w.idx]=1,w.idx===u)break;const P=w.idx%this.size,C=Math.floor(w.idx/this.size);for(const[A,D,X]of y){const v=P+A,S=C+D;if(v<0||S<0||v>=this.size||S>=this.size)continue;const F=this.idx(v,S);if(this.walkable[F]!==1||_[F])continue;const O=p[w.idx]+X;O<p[F]&&(p[F]=O,g[F]=w.idx,m.push(O+f(v,S),F))}}if(_[u]!==1&&g[u]===-1&&u!==h){let w=-1,P=1/0;for(let C=0;C<d;C++){if(!_[C])continue;const A=C%this.size,D=Math.floor(C/this.size),X=f(A,D);X<P&&(P=X,w=C)}return w===-1?null:this.reconstruct(g,w)}return this.reconstruct(g,u)}reconstruct(t,e){const n=[];let s=e,r=0;for(;s!==-1&&r<1e5;){r++;const a=s%this.size,o=Math.floor(s/this.size);n.push(this.gridToWorld(a,o)),s=t[s]}return n.reverse(),this.simplify(n)}lineWalkable(t,e){const n=Math.ceil(Math.hypot(e[0]-t[0],e[1]-t[1])/(Ye*.5));for(let s=0;s<=n;s++){const r=s/n,a=t[0]+(e[0]-t[0])*r,o=t[1]+(e[1]-t[1])*r;if(!this.isWalkableWorld(a,o))return!1}return!0}simplify(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(let s=2;s<t.length;s++)this.lineWalkable(t[n],t[s])||(e.push(t[s-1]),n=s-1);return e.push(t[t.length-1]),e}}class i_{constructor(){T(this,"squads",new Map)}getOrCreate(t){let e=this.squads.get(t);return e||(e={squadId:t,members:new Set,lastKnownPlayerPos:null,lastKnownPlayerTime:-999,alertLevel:0,flankerId:null,coverSlots:new Map},this.squads.set(t,e)),e}reportSighting(t,e,n){const s=this.getOrCreate(t);s.lastKnownPlayerPos=e.clone(),s.lastKnownPlayerTime=n,s.alertLevel=2}decay(t,e,n=25){const s=this.squads.get(t);s&&(s.alertLevel===2&&e-s.lastKnownPlayerTime>n&&(s.alertLevel=1),s.alertLevel===1&&e-s.lastKnownPlayerTime>n*2&&(s.alertLevel=0,s.lastKnownPlayerPos=null))}claimFlanker(t,e){const n=this.getOrCreate(t);return n.flankerId===null||n.flankerId===e?(n.flankerId=e,!0):!1}releaseFlanker(t,e){const n=this.squads.get(t);n&&n.flankerId===e&&(n.flankerId=null)}claimCover(t,e,n){const s=this.getOrCreate(t);for(const[r,a]of s.coverSlots)if(r!==e&&Math.hypot(a[0]-n[0],a[1]-n[1])<4)return!1;return s.coverSlots.set(e,n),!0}releaseCover(t,e){this.squads.get(t)?.coverSlots.delete(e)}}const Zs=new Co;function s_(i){const{eyePos:t,forwardYaw:e,fov:n,range:s,targetPos:r,colliders:a,throwables:o}=i,l=r.clone().sub(t),c=l.length();if(c>s)return!1;const h=new R(Math.sin(e),0,Math.cos(e)),u=new R(l.x,0,l.z).normalize();return!(h.angleTo(u)>n/2||o.segmentBlockedBySmoke(t,r)||(Zs.set(t,l.normalize()),Zs.far=c-.2,Zs.near=.05,Zs.intersectObjects(a.raycastMeshes,!1).length>0))}function r_(i,t,e,n,s,r,a,o){const l=[];for(const c of i.coverPoints){const h=a-c.x,u=o-c.z;if(h*c.normalX+u*c.normalZ<.5)continue;const p=c.x-c.normalX*.9,g=c.z-c.normalZ*.9,_=Math.hypot(s-p,r-g),m=Math.hypot(a-c.x,o-c.z);if(m<6)continue;const f=_*1+Math.abs(m-22)*.3;l.push({score:f,choice:{x:c.x,z:c.z,standX:p,standZ:g}})}l.sort((c,h)=>c.score-h.score);for(const c of l)if(t.claimCover(e,n,[c.choice.x,c.choice.z]))return c.choice;return null}const a_={scout:{id:"scout",name:"Scout",health:70,vestLevel:0,helmetLevel:0,moveSpeed:3.6,sprintSpeed:6.8,weaponId:"vex",visionRange:55,visionFOV:2.2,hearingRange:40,reactionTime:.25,aimTime:.25,baseAccuracy:.55,fireBurstMin:3,fireBurstMax:7,burstPause:.5,preferredRange:14,fleeHealthFrac:.3,color:4934199,colorDark:3355167},rifleman:{id:"rifleman",name:"Rifleman",health:95,vestLevel:1,helmetLevel:1,moveSpeed:3.2,sprintSpeed:5.8,weaponId:"raven",visionRange:65,visionFOV:2,hearingRange:45,reactionTime:.35,aimTime:.35,baseAccuracy:.62,fireBurstMin:2,fireBurstMax:5,burstPause:.65,preferredRange:28,fleeHealthFrac:.22,color:5659714,colorDark:3817003},guard:{id:"guard",name:"Guard",health:105,vestLevel:2,helmetLevel:1,moveSpeed:2.9,sprintSpeed:5.2,weaponId:"raven",visionRange:50,visionFOV:2.4,hearingRange:42,reactionTime:.3,aimTime:.3,baseAccuracy:.6,fireBurstMin:3,fireBurstMax:6,burstPause:.55,preferredRange:22,fleeHealthFrac:.15,color:4998710,colorDark:3288610},marksman:{id:"marksman",name:"Marksman",health:80,vestLevel:1,helmetLevel:0,moveSpeed:2.8,sprintSpeed:5,weaponId:"sentinel",visionRange:95,visionFOV:1.6,hearingRange:35,reactionTime:.55,aimTime:.6,baseAccuracy:.78,fireBurstMin:1,fireBurstMax:1,burstPause:1.3,preferredRange:55,fleeHealthFrac:.35,color:4015413,colorDark:2567200},heavy:{id:"heavy",name:"Heavy",health:160,vestLevel:3,helmetLevel:2,moveSpeed:2.3,sprintSpeed:3.6,weaponId:"breach",visionRange:40,visionFOV:2.3,hearingRange:40,reactionTime:.4,aimTime:.3,baseAccuracy:.58,fireBurstMin:1,fireBurstMax:2,burstPause:.8,preferredRange:9,fleeHealthFrac:.08,color:3815984,colorDark:2302752}};function o_(i,t){const e=i==="leader"?[["rifleman",.35],["guard",.25],["marksman",.2],["heavy",.2]]:[["scout",.3],["rifleman",.35],["guard",.15],["marksman",.1],["heavy",.1]],n=t();let s=0;for(const[r,a]of e)if(s+=a,n<=s)return r;return"rifleman"}let l_=0;class c_{constructor(t,e,n,s){T(this,"id");T(this,"team","enemy");T(this,"archetype");T(this,"squadId");T(this,"position",new R);T(this,"yaw",0);T(this,"health");T(this,"maxHealth");T(this,"weapon");T(this,"state","idle");T(this,"stateTimer",0);T(this,"velocity",new R);T(this,"path",[]);T(this,"pathIndex",0);T(this,"pathRecalcTimer",Math.random()*1.2);T(this,"perceptionTimer",Math.random()*.3);T(this,"aimTimer",0);T(this,"burstCount",0);T(this,"burstTarget",0);T(this,"burstPauseTimer",0);T(this,"spawnPoint");T(this,"patrolTarget",null);T(this,"wasVisible",!1);T(this,"deadT",0);T(this,"isMoving",!1);T(this,"moveSpeed01",0);T(this,"aiming",!1);T(this,"firingVisual",0);T(this,"coverPos",null);T(this,"flankTarget",null);T(this,"hitFlashTimer",0);T(this,"alive",!0);T(this,"group");T(this,"modelParts");T(this,"weaponMesh");T(this,"deps");T(this,"debugName");this.deps=t,this.archetype=a_[e],this.squadId=n,this.id=`enemy-${l_++}`,this.debugName=`${this.archetype.name}#${this.id}`,this.health=this.archetype.health,this.maxHealth=this.archetype.health,this.spawnPoint=s.clone(),this.position.copy(s),this.weapon=new ni(en[this.archetype.weaponId],en[this.archetype.weaponId].reserveMax),this.modelParts=oh({uniform:this.archetype.color,uniformDark:this.archetype.colorDark,skin:13214587,helmet:this.archetype.helmetLevel>0?2829094:void 0,vest:this.archetype.vestLevel>0?3355948:void 0}),this.group=this.modelParts.root,this.weaponMesh=lh(this.archetype.weaponId),this.modelParts.weaponSocket.add(this.weaponMesh.group),t.world.scene.add(this.group),t.registry.register(this,[{mesh:this.modelParts.headMesh,part:"head"},{mesh:this.modelParts.torsoMesh,part:"torso"}]),this.modelParts.root.traverse(r=>{r.name==="hit-limb"&&t.registry.register(this,[{mesh:r,part:"limb"}])}),t.squad.getOrCreate(n).members.add(this.id)}isAlive(){return this.alive}getPosition(){return this.position.clone()}getHeadPosition(){return this.modelParts.headMesh.getWorldPosition(new R)}getTorsoPosition(){return this.modelParts.torsoMesh.getWorldPosition(new R)}applyDamage(t,e,n,s){if(!this.alive)return;const r=n==="head"?this.archetype.helmetLevel*.16:this.archetype.vestLevel*.12,a=Math.max(1,t*(1-r));this.health=Math.max(0,this.health-a),this.hitFlashTimer=.15;const o=this.deps.squad.getOrCreate(this.squadId);o.lastKnownPlayerPos=this.deps.player.position.clone(),o.lastKnownPlayerTime=this.deps.world.elapsed,o.alertLevel=2,this.health<=0&&(this.alive=!1,this.state="dead",this.deps.bus.emit("kill",{targetId:this.id,isPlayer:!1,weaponId:"",headshot:n==="head"}))}onHitReaction(){}setPath(t){this.path=t??[],this.pathIndex=0}moveToward(t,e,n){const s=t.x-this.position.x,r=t.z-this.position.z,a=Math.hypot(s,r);if(this.isMoving=a>.3,this.moveSpeed01=ln(n/this.archetype.sprintSpeed),a<.05)return;const o=s/a,l=r/a,c=o*n,h=l*n;this.velocity.x=yn(this.velocity.x,c,10,e),this.velocity.z=yn(this.velocity.z,h,10,e);let u=this.position.x+this.velocity.x*e,d=this.position.z+this.velocity.z*e;if([u,d]=this.deps.world.colliders.resolve(u,d,this.position.y,.4,1.7),[u,d]=this.deps.world.clampToBounds(u,d),this.position.x=u,this.position.z=d,this.position.y=this.deps.world.heightAt(u,d),!this.aiming){const p=Math.atan2(o,l);this.yaw+=Ql(this.yaw,p)*Math.min(1,e*8)}}followPath(t,e){if(this.path.length===0)return!1;if(this.pathIndex>=this.path.length)return!0;const[n,s]=this.path[this.pathIndex],r=new R(n,0,s);return Math.hypot(n-this.position.x,s-this.position.z)<1.2&&(this.pathIndex++,this.pathIndex>=this.path.length)?!0:(this.moveToward(r,t,e),!1)}requestPathTo(t,e){const n=this.deps.navGrid.findPath(this.position.x,this.position.z,t,e);this.setPath(n)}facePoint(t,e,n,s=6){const r=t-this.position.x,a=e-this.position.z,o=Math.atan2(r,a);this.yaw+=Ql(this.yaw,o)*Math.min(1,n*s)}perceivePlayer(t){if(!this.deps.playerHealth.alive)return!1;const e=this.position.clone().add(new R(0,1.55,0)),n=this.deps.player.position.clone().add(new R(0,this.deps.player.eyeHeight*.7,0)),s=s_({eyePos:e,forwardYaw:this.yaw,fov:this.archetype.visionFOV,range:this.archetype.visionRange,targetPos:n,colliders:this.deps.world.colliders,throwables:this.deps.throwables});return s&&this.deps.squad.reportSighting(this.squadId,this.deps.player.position,t),s}tryHearPlayer(t){}update(t,e){if(this.state==="dead"){this.deadT=Math.min(1,this.deadT+t*1.5),to(this.modelParts,{moveSpeed01:0,aiming:!1,crouching:!1,aimPitch:0,moving:!1,deadT:this.deadT},t),this.syncTransform();return}this.hitFlashTimer=Math.max(0,this.hitFlashTimer-t),this.weapon.update(t),this.stateTimer+=t;const n=this.deps.squad.getOrCreate(this.squadId);this.deps.squad.decay(this.squadId,e),this.perceptionTimer-=t;let s=!1;this.perceptionTimer<=0?(this.perceptionTimer=.15+Math.random()*.1,s=this.perceivePlayer(e),this.wasVisible=s):s=this.wasVisible,this.tryHearPlayer(e),this.decideState(s,n,e),this.act(t,e,s,n),this.aiming=this.state==="combat"||this.state==="takeCover"||this.state==="flank";const r=this.aiming?this.computeAimPitch():0;to(this.modelParts,{moveSpeed01:this.moveSpeed01,aiming:this.aiming,crouching:this.state==="takeCover",aimPitch:r,moving:this.isMoving,firing:this.firingVisual>0,deadT:0},t),this.firingVisual=Math.max(0,this.firingVisual-t),this.syncTransform()}computeAimPitch(){const t=this.deps.player.position.clone().add(new R(0,this.deps.player.eyeHeight*.6,0)),e=t.y-(this.position.y+1.5),n=Math.hypot(t.x-this.position.x,t.z-this.position.z)||1;return Ro(Math.atan2(e,n),-1.1,1.1)}decideState(t,e,n){if(this.state==="retreat"){this.stateTimer>5&&this.health>this.maxHealth*.4&&this.setState("combat",n);return}if(this.health<this.maxHealth*this.archetype.fleeHealthFrac){this.setState("retreat",n);return}t||e.alertLevel===2?this.state!=="combat"&&this.state!=="takeCover"&&this.state!=="flank"&&this.setState("combat",n):e.alertLevel===1?this.state!=="investigate"&&this.state!=="search"&&this.setState("investigate",n):this.state!=="patrol"&&this.state!=="idle"&&this.setState("patrol",n),this.state==="combat"&&!t&&e.lastKnownPlayerTime>0&&n-e.lastKnownPlayerTime>4&&this.setState("search",n),this.state==="combat"&&this.stateTimer>3.5+Math.random()*3&&(this.deps.squad.claimFlanker(this.squadId,this.id)&&Math.random()<.5?this.setState("flank",n):Math.random()<.4&&this.setState("takeCover",n))}setState(t,e){this.state!==t&&(this.state==="flank"&&this.deps.squad.releaseFlanker(this.squadId,this.id),this.state==="takeCover"&&this.deps.squad.releaseCover(this.squadId,this.id),this.state=t,this.stateTimer=0,this.path=[],this.pathIndex=0,t==="combat"&&(this.aimTimer=this.archetype.reactionTime+this.archetype.aimTime,this.burstCount=0,this.burstTarget=0,this.burstPauseTimer=0))}act(t,e,n,s){switch(this.state){case"idle":this.isMoving=!1,this.moveSpeed01=0,this.stateTimer>2+Math.random()*3&&this.setState("patrol",e);break;case"patrol":{if(!this.patrolTarget||this.position.distanceTo(this.patrolTarget)<2){const a=Math.random()*Math.PI*2,o=8+Math.random()*22;this.patrolTarget=new R(this.spawnPoint.x+Math.cos(a)*o,0,this.spawnPoint.z+Math.sin(a)*o),this.requestPathTo(this.patrolTarget.x,this.patrolTarget.z)}this.followPath(t,this.archetype.moveSpeed*.55)&&(this.patrolTarget=null);break}case"investigate":{const r=s.lastKnownPlayerPos??this.spawnPoint;this.pathRecalcTimer-=t,this.pathRecalcTimer<=0&&(this.pathRecalcTimer=1+Math.random()*.5,this.requestPathTo(r.x,r.z)),this.followPath(t,this.archetype.moveSpeed*.85)&&this.setState("search",e);break}case"search":{this.isMoving=!1,this.moveSpeed01=.1,this.facePoint(this.position.x+Math.sin(e*.7)*5,this.position.z+Math.cos(e*.7)*5,t,1.5),this.stateTimer>6+Math.random()*4&&(s.alertLevel=0,this.setState("patrol",e));break}case"combat":this.handleCombat(t,e,n,s,this.position.x,this.position.z);break;case"takeCover":{if(!this.coverPos){const l=r_(this.deps.world.colliders,this.deps.squad,this.squadId,this.id,this.position.x,this.position.z,s.lastKnownPlayerPos?.x??this.position.x,s.lastKnownPlayerPos?.z??this.position.z);if(l)this.coverPos=[l.standX,l.standZ],this.requestPathTo(l.standX,l.standZ);else{this.setState("combat",e);break}}const[r,a]=this.coverPos;(this.followPath(t,this.archetype.sprintSpeed)||this.position.distanceTo(new R(r,0,a))<2.5)&&(this.isMoving=!1,this.moveSpeed01=0,this.handleCombat(t,e,n,s,r,a)),this.stateTimer>6&&(this.deps.squad.releaseCover(this.squadId,this.id),this.coverPos=null,this.setState("combat",e));break}case"flank":{if(!this.flankTarget){const a=s.lastKnownPlayerPos??this.position,o=Math.atan2(this.position.x-a.x,this.position.z-a.z),l=Math.random()<.5?1:-1,c=o+l*(Math.PI/2+Math.random()*.4),h=16+Math.random()*10;this.flankTarget=[a.x+Math.sin(c)*h,a.z+Math.cos(c)*h],this.requestPathTo(this.flankTarget[0],this.flankTarget[1])}this.followPath(t,this.archetype.sprintSpeed)&&(this.deps.squad.releaseFlanker(this.squadId,this.id),this.flankTarget=null,this.setState("combat",e)),this.stateTimer>7&&(this.deps.squad.releaseFlanker(this.squadId,this.id),this.flankTarget=null,this.setState("combat",e));break}case"retreat":{const r=this.position.clone().sub(this.deps.player.position).normalize(),a=this.spawnPoint.clone().addScaledVector(r,5);this.pathRecalcTimer-=t,(this.pathRecalcTimer<=0||this.path.length===0)&&(this.pathRecalcTimer=1.5,this.requestPathTo(a.x,a.z)),this.followPath(t,this.archetype.sprintSpeed);break}}}handleCombat(t,e,n,s,r,a){const o=s.lastKnownPlayerPos??this.deps.player.position;this.facePoint(o.x,o.z,t,5);const l=Math.hypot(this.position.x-r,this.position.z-a);if(this.state==="combat"&&l>1.5){const w=this.position.distanceTo(o),C=w<this.archetype.preferredRange*.6?this.position.clone().sub(o).normalize():w>this.archetype.preferredRange*1.4?o.clone().sub(this.position).normalize():null;C?this.moveToward(this.position.clone().addScaledVector(C,4),t,this.archetype.moveSpeed):(this.isMoving=!1,this.moveSpeed01=0)}else this.isMoving=!1,this.moveSpeed01=0;if(!n)return;if(this.aimTimer>0){this.aimTimer-=t;return}if(this.burstPauseTimer>0){this.burstPauseTimer-=t;return}if(this.weapon.isDry&&this.weapon.startReload()||this.weapon.reloading)return;if(this.burstCount>=this.burstTarget){this.burstCount=0,this.burstTarget=this.archetype.fireBurstMin+Math.floor(Math.random()*(this.archetype.fireBurstMax-this.archetype.fireBurstMin+1)),this.burstPauseTimer=this.archetype.burstPause*(.7+Math.random()*.6);return}const c=this.weaponMesh.muzzle.getWorldPosition(new R),h=this.position.clone().add(new R(0,1.55,0)),u=this.deps.player.position.clone().add(new R(0,this.deps.player.eyeHeight*.85,0)),d=u.clone().sub(h).normalize(),p=h.distanceTo(u),g=this.deps.player.sprinting?.35:this.deps.player.speedFraction>.1?.15:0,_=ln((p-this.archetype.preferredRange)/(this.archetype.visionRange-this.archetype.preferredRange))*.35,f=(1-ln(this.archetype.baseAccuracy-g-_))*.09;if(f>5e-4){const w=new R((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),P=w.sub(d.clone().multiplyScalar(w.dot(d))).normalize(),C=Math.random()*f;d.applyAxisAngle(P,C).normalize()}const y={origin:h,direction:d,muzzleWorldPos:c,environmentTargets:this.deps.world.colliders.raycastMeshes,registry:this.deps.registry,effects:this.deps.effects,bus:this.deps.bus,excludeCombatantId:this.id,isPlayerShooter:!1,movingSpreadFactor:0,sprinting:!1,aiming:!0};this.weapon.tryFire(e,y)&&(this.burstCount++,this.firingVisual=.08)}syncTransform(){this.group.position.copy(this.position),this.group.rotation.y=this.yaw}dispose(){this.deps.world.scene.remove(this.group),this.deps.registry.unregister(this)}}class h_{constructor(t){T(this,"enemies",[]);T(this,"navGrid");T(this,"squad",new i_);T(this,"deps");this.deps=t,this.navGrid=new n_(t.world.hf,t.world.colliders);const e=new li(t.seed^2135587861),n=new Map;for(const r of t.world.enemySpawns){const a=n.get(r.squadId)??[];a.push(r),n.set(r.squadId,a)}const s={world:t.world,navGrid:this.navGrid,squad:this.squad,registry:t.registry,effects:t.effects,throwables:t.throwables,bus:t.bus,player:t.player,playerHealth:t.playerHealth,playerCombatant:t.playerCombatant};for(const[,r]of n)for(const a of r){const o=o_(a.role,()=>e.next()),l=new R(a.x,a.y,a.z),c=new c_(s,o,a.squadId,l);this.enemies.push(c)}}get aliveCount(){return this.enemies.filter(t=>t.isAlive()).length}update(t,e){for(const n of this.enemies)n.update(t,e)}dispose(){for(const t of this.enemies)t.dispose()}}const De=[{radius:Ue-10,durationToShrink:95,shrinkTime:45,damagePerSecond:2},{radius:230,durationToShrink:80,shrinkTime:40,damagePerSecond:4},{radius:120,durationToShrink:70,shrinkTime:35,damagePerSecond:7},{radius:45,durationToShrink:60,shrinkTime:30,damagePerSecond:12}];class u_{constructor(t,e,n){T(this,"center");T(this,"nextCenter");T(this,"extractionPoint");T(this,"phaseIndex",-1);T(this,"timer",0);T(this,"currentRadius");T(this,"targetRadius");T(this,"stage","safe");T(this,"warned10",!1);T(this,"warned60",!1);this.bus=t;const s=new li(e^610844154);this.extractionPoint=n,this.center=new it(0,0),this.nextCenter=this.pickNextCenter(s,De[0].radius),this.currentRadius=De[0].radius,this.targetRadius=De[0].radius,this.advancePhase(s)}pickNextCenter(t,e){const n=this.extractionPoint.clone().multiplyScalar(.5+t.next()*.3),s=new it(t.range(-40,40),t.range(-40,40)),r=n.add(s),a=Math.max(10,e*.35);return r.length()>a&&r.setLength(a),r}advancePhase(t){if(this.phaseIndex++,this.timer=0,this.warned10=!1,this.warned60=!1,this.phaseIndex>=De.length){this.stage="final",this.center.copy(this.extractionPoint),this.targetRadius=22,this.bus.emit("zone:phase",{phase:De.length,total:De.length});return}this.stage="safe",this.currentRadius=this.phaseIndex===0?De[0].radius:this.targetRadius,this.center.copy(this.nextCenter);const e=De[this.phaseIndex];this.targetRadius=e.radius,this.phaseIndex+1<De.length?this.nextCenter=this.pickNextCenter(t,e.radius):this.nextCenter.copy(this.extractionPoint),this.bus.emit("zone:phase",{phase:this.phaseIndex+1,total:De.length})}get currentPhase(){return this.phaseIndex>=0&&this.phaseIndex<De.length?De[this.phaseIndex]:null}get timeRemainingInStage(){const t=this.currentPhase;if(!t)return 0;const e=this.stage==="safe"?t.durationToShrink:t.shrinkTime;return Math.max(0,e-this.timer)}isInsideZone(t,e){const n=t-this.center.x,s=e-this.center.y;return Math.sqrt(n*n+s*s)<=this.currentRadius}update(t,e){if(this.stage==="final")return;const n=this.currentPhase;if(n){if(this.timer+=t,this.stage==="safe"){const s=n.durationToShrink-this.timer;s<=60&&!this.warned60&&(this.warned60=!0,this.bus.emit("zone:warning",{secondsToShrink:60})),s<=10&&!this.warned10&&(this.warned10=!0,this.bus.emit("zone:warning",{secondsToShrink:10})),this.timer>=n.durationToShrink&&(this.stage="shrinking",this.timer=0)}else if(this.stage==="shrinking"){const s=Math.min(1,this.timer/n.shrinkTime),r=this.phaseIndex===0?De[0].radius:De[Math.max(0,this.phaseIndex-1)].radius;this.currentRadius=Se.lerp(r,n.radius,s),this.center.lerpVectors(this.center,this.nextCenter,t/Math.max(.1,n.shrinkTime-this.timer+t)),s>=1&&this.advancePhase(e)}}}damageOutsideZone(t,e){if(this.stage==="final")return 0;const n=this.currentPhase;return!n||this.isInsideZone(t,e)?0:n.damagePerSecond}}const ca=22,d_=10;class f_{constructor(t,e){T(this,"state","inactive");T(this,"point");T(this,"holdRemaining",ca);T(this,"started",!1);this.bus=t,this.point=e}activate(){this.state==="inactive"&&(this.state="active",this.bus.emit("extraction:started",{seconds:ca}))}isPlayerInRadius(t,e){return Math.hypot(t-this.point.x,e-this.point.y)<=d_}update(t,e,n,s,r){if(this.state==="inactive"||this.state==="complete")return;this.isPlayerInRadius(e,n)&&s?(this.state="holding",this.holdRemaining-=t,this.started||(this.started=!0),this.bus.emit("extraction:progress",{remaining:Math.max(0,this.holdRemaining),contested:r}),this.holdRemaining<=0&&(this.state="complete",this.bus.emit("extraction:success",{}))):this.started&&(this.state="active",this.bus.emit("extraction:progress",{remaining:Math.max(0,this.holdRemaining),contested:!1}))}get progress01(){return 1-this.holdRemaining/ca}}const p_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,m_=`
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float edge = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y));
    float scan = sin(vUv.y * 40.0 - uTime * 1.5) * 0.5 + 0.5;
    float alpha = edge * (0.28 + scan * 0.18);
    gl_FragColor = vec4(uColor, alpha);
  }
`;class g_{constructor(t){T(this,"mesh");T(this,"material");const e=new We(1,1,60,64,1,!0);this.material=new Ne({uniforms:{uTime:{value:0},uColor:{value:new vt(16733491)}},vertexShader:p_,fragmentShader:m_,transparent:!0,side:$e,depthWrite:!1}),this.mesh=new Ot(e,this.material),this.mesh.renderOrder=5,t.add(this.mesh)}update(t,e,n,s){this.mesh.position.set(e.center.x,s+30,e.center.y),this.mesh.scale.set(e.currentRadius,1,e.currentRadius),this.material.uniforms.uTime.value=n;const r=e.stage==="final"?16722463:16752714;this.material.uniforms.uColor.value.setHex(r)}}let ha=null;function v_(){return ha||(ha=new Set(Z0())),ha}function __(i){const t=v_();i.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose();const s=n.material;if(s){const r=Array.isArray(s)?s:[s];for(const a of r){if(t.has(a))continue;const o=a;o.map?.dispose(),o.emissiveMap?.dispose(),a.dispose()}}});for(const e of[...i.children])i.remove(e)}class y_{constructor(){T(this,"samples",[]);T(this,"maxSamples",60);T(this,"fps",60);T(this,"frameMs",16.6);T(this,"drawCalls",0);T(this,"triangles",0);T(this,"lowFrameStreak",0);T(this,"highFrameStreak",0);T(this,"qualityScale",1);T(this,"onQualityChange",null)}update(t){const e=t>0?1/t:60;this.samples.push(e),this.samples.length>this.maxSamples&&this.samples.shift();const n=this.samples.reduce((s,r)=>s+r,0)/this.samples.length;this.fps=n,this.frameMs=1e3/Math.max(n,.001),n<40?(this.lowFrameStreak++,this.highFrameStreak=0):n>55?(this.highFrameStreak++,this.lowFrameStreak=0):(this.lowFrameStreak=0,this.highFrameStreak=0),this.lowFrameStreak>90&&this.qualityScale>.4?(this.qualityScale=Math.max(.4,this.qualityScale-.15),this.lowFrameStreak=0,this.onQualityChange?.(this.qualityScale)):this.highFrameStreak>240&&this.qualityScale<1&&(this.qualityScale=Math.min(1,this.qualityScale+.1),this.highFrameStreak=0,this.onQualityChange?.(this.qualityScale))}}const x_=620;class M_{constructor(t,e,n,s,r,a,o,l=ah()){T(this,"world");T(this,"player");T(this,"playerCamera");T(this,"playerHealth");T(this,"playerCombatant");T(this,"weaponController");T(this,"inventory");T(this,"registry",new qv);T(this,"effects");T(this,"throwables");T(this,"enemyManager");T(this,"loot");T(this,"zone");T(this,"extraction");T(this,"zoneVisual");T(this,"perf",new y_);T(this,"engine");T(this,"input");T(this,"bus");T(this,"audio");T(this,"hud");T(this,"elapsed",0);T(this,"ended",!1);T(this,"endResult",null);T(this,"zoneRng");T(this,"mapVisible",!1);T(this,"inventoryVisible",!1);T(this,"debugVisible",!1);T(this,"reducedMotion",!1);T(this,"tutorialsShown",new Set);T(this,"movedDistanceForTutorial",0);T(this,"extractionPoint2D");T(this,"seed");T(this,"killCount",0);T(this,"damageTakenTotal",0);this.engine=t,this.input=e,this.bus=n,this.audio=s,this.hud=r,this.seed=l;const c=a.vegetationDensity;this.world=new pv(t.scene,l,c);const h=new li(l^5614097),u=h.pick(this.world.playerSpawns);this.player=new Tv(this.world,e),this.player.teleport(u.x,u.z),this.player.yaw=h.range(0,Math.PI*2),this.player.onFootstep=(p,g)=>{n.emit("player:footstep",{surface:p,position:this.player.position.clone(),sprinting:g})},this.playerCamera=new Pv(t.camera),this.playerHealth=new Iv(n),this.playerCombatant=new Uv(this.player,this.playerHealth),this.inventory=new Bv,this.inventory.equipStarting(o.primary,o.sidearm),this.inventory.addArmor("vest",o.vest),this.inventory.addArmor("helmet",o.helmet),this.inventory.addHeal("bandage",o.bandages),this.inventory.addHeal("medkit",o.medkits),this.inventory.addThrowable("frag",o.frags),this.inventory.addThrowable("smoke",o.smokes),this.playerHealth.vestLevel=o.vest,this.playerHealth.helmetLevel=o.helmet,this.effects=new Jv(t.scene),this.throwables=new Qv(this.world,this.registry,this.effects,n),this.weaponController=new Ov({world:this.world,input:e,player:this.player,camera:this.playerCamera,health:this.playerHealth,inventory:this.inventory,registry:this.registry,effects:this.effects,throwables:this.throwables,bus:n,combatant:this.playerCombatant}),this.enemyManager=new h_({world:this.world,registry:this.registry,effects:this.effects,throwables:this.throwables,bus:n,player:this.player,playerHealth:this.playerHealth,playerCombatant:this.playerCombatant,seed:l}),this.loot=new Xv(this.world,l,n);const d=h.pick(this.world.pois.filter(p=>Math.hypot(p.x-u.x,p.z-u.z)>150));this.extractionPoint2D=new it(d.x,d.z),this.zoneRng=new li(l^10061994),this.zone=new u_(n,l,this.extractionPoint2D),this.extraction=new f_(n,this.extractionPoint2D),this.zoneVisual=new g_(t.scene),s.setSceneRoot(t.scene),s.startAmbience(),s.startMusic(),this.bus.on("player:died",()=>this.finish("killed")),this.bus.on("extraction:success",()=>this.finish("extracted")),this.bus.on("kill",p=>{p.isPlayer||this.killCount++}),this.bus.on("damage",p=>{p.isPlayer?r.flashDamage(this.reducedMotion?.18:.5):p.sourceId==="player"&&r.flashHitMarker(p.killed)}),this.bus.on("player:damaged",p=>{const _=Math.atan2(-p.direction.x,-p.direction.z)-this.player.yaw;r.showHitDirection(_)}),e.settings.sensitivity=a.mouseSensitivity,e.settings.aimSensitivity=a.aimSensitivity,this.playerCamera.shakeEnabled=a.cameraShake&&!a.reducedMotion,this.reducedMotion=a.reducedMotion,r.setHighContrast(a.highContrastPrompts),this.bus.emit("match:start",{seed:l}),this.showTutorial("move","WASD — MOVE",window.innerWidth/2-60,window.innerHeight/2+80)}showTutorial(t,e,n,s){this.tutorialsShown.has(t)||(this.tutorialsShown.add(t),this.hud.showTutorial(t,e,n,s))}finish(t){if(this.ended)return;this.ended=!0;const e=t==="extracted",n={survivalTime:this.elapsed,kills:this.killCount,shotsHit:this.weaponController.shotsHit,shotsFired:this.weaponController.shotsFired,damageDealt:this.weaponController.damageDealt,damageTaken:100-this.playerHealth.health>=0?this.damageTakenTotal:0,lootCollected:this.inventory.state.lootCollected,distanceTraveled:this.player.distanceTraveled,extractionBonus:e?Math.round(50+this.killCount*15):0,success:e};this.endResult={stats:n,reason:t},this.bus.emit("match:end",{success:e,stats:n})}get result(){return this.endResult}get isEnded(){return this.ended}applyLiveSettings(t){this.playerCamera.shakeEnabled=t.cameraShake&&!t.reducedMotion,this.reducedMotion=t.reducedMotion,this.hud.setHighContrast(t.highContrastPrompts),this.world.vegetation.setDensity(t.vegetationDensity),this.input.settings.sensitivity=t.mouseSensitivity,this.input.settings.aimSensitivity=t.aimSensitivity,this.input.settings.invertY=t.invertY}setInputEnabled(t){this.input.enabled=t,t||this.input.exitPointerLock()}update(t){if(this.ended)return;this.elapsed+=t,this.perf.update(t);const e=this.input;e.wasPressed("Tab")&&(this.inventoryVisible=!this.inventoryVisible,this.mapVisible=!1),e.wasPressed("KeyM")&&(this.mapVisible=!this.mapVisible,this.inventoryVisible=!1),e.wasPressed("F3")&&(this.debugVisible=!this.debugVisible);const n=this.mapVisible||this.inventoryVisible;if(this.hud.setMapVisible(this.mapVisible),this.hud.setInventoryVisible(this.inventoryVisible,this.inventory),this.hud.setDebugVisible(this.debugVisible),!n){this.weaponController.preMovementUpdate();const s=this.playerHealth.isHealing;this.player.update(t,!0),s&&this.player.speedFraction>.05&&this.playerHealth.cancelHeal(),this.weaponController.postMovementUpdate(t,this.elapsed);const r=this.playerHealth.health;this.playerHealth.update(t);const a=this.zone.damageOutsideZone(this.player.position.x,this.player.position.z);a>0&&this.playerHealth.applyDamage(a*t,new R(0,1,0),!1,!0),this.hud.setZoneDamageActive(a>0),this.playerHealth.health<r&&(this.damageTakenTotal+=r-this.playerHealth.health);const o=this.loot.update(t,this.player,this.inventory);this.hud.showInteractPrompt(o),o&&e.wasPressed("KeyF")&&this.loot.tryPickup(this.inventory),this.throwables.update(t),this.enemyManager.update(t,this.elapsed),this.effects.update(t),this.zone.update(t,this.zoneRng),this.zone.stage==="final"&&this.extraction.state==="inactive"&&this.extraction.activate();const l=this.enemyManager.enemies.some(c=>c.isAlive()&&c.position.distanceTo(new R(this.extractionPoint2D.x,c.position.y,this.extractionPoint2D.y))<14);this.extraction.update(t,this.player.position.x,this.player.position.z,this.playerHealth.alive,l),this.zoneVisual.update(t,this.zone,this.elapsed,this.player.position.y),this.playerCamera.update(t,this.player,this.world.colliders.raycastMeshes,(this.player.aiming,1)),this.runTutorials()}this.updateHUD(),this.world.update(t,x_,this.engine.camera.position)}runTutorials(){this.movedDistanceForTutorial=this.player.distanceTraveled,this.movedDistanceForTutorial>2&&this.showTutorial("aim","RMB — AIM · LMB — FIRE",window.innerWidth/2-90,window.innerHeight/2+100),this.inventory.state.lootCollected===0&&this.movedDistanceForTutorial>8&&this.showTutorial("loot","F — PICK UP nearby loot",window.innerWidth/2-90,window.innerHeight-220),this.zone.phaseIndex>=0&&!this.tutorialsShown.has("zone")&&this.showTutorial("zone","The Signal Collapse is active — watch the top-right timer",window.innerWidth/2-160,140)}updateHUD(){const t=this.inventory.getActiveWeapon(),e=this.engine.getDrawCallInfo();this.hud.update({health:this.playerHealth.health,maxHealth:this.playerHealth.maxHealth,vestLevel:this.playerHealth.vestLevel,helmetLevel:this.playerHealth.helmetLevel,stamina:this.player.stamina,maxStamina:this.player.maxStamina,weapon:t,yawDegrees:I0(this.player.yaw),zone:this.zone,hostilesRemaining:this.enemyManager.aliveCount,extractionActive:this.extraction.state!=="inactive"&&this.extraction.state!=="complete",extractionRemaining:this.extraction.holdRemaining,extractionContested:!1,extractionX:this.extractionPoint2D.x,extractionZ:this.extractionPoint2D.y,playerX:this.player.position.x,playerZ:this.player.position.z,playerYaw:this.player.yaw,fps:this.perf.fps,drawCalls:e.calls,triangles:e.triangles,debugVisible:this.debugVisible,reducedMotion:this.reducedMotion,healProgress01:this.playerHealth.healProgress01,isHealing:this.playerHealth.isHealing});const n=this.player.aiming?2:8+this.player.speedFraction*14;this.hud.setCrosshairSpread(n,this.player.aiming)}dispose(){this.enemyManager.dispose(),__(this.engine.scene),this.audio.stopAll()}}const uc=["Tip: Smoke Canisters block enemy line of sight — use them to break contact.","Tip: Marksmen keep their distance and hit hard. Close the gap or use cover.","Tip: The Signal Collapse always converges on the extraction point.","Tip: Headshots deal significantly more damage — armor helps, helmets help more.","Tip: Sprinting is loud. Nearby enemies can hear you coming."];class S_{constructor(t,e){T(this,"engine");T(this,"input");T(this,"bus",new m0);T(this,"audio");T(this,"ui");T(this,"hud");T(this,"save",$s.load());T(this,"state","loading");T(this,"match",null);T(this,"clock",new Ao);T(this,"uiRoot");this.uiRoot=e,this.engine=new f0(t),this.input=new p0(this.engine.renderer.domElement),this.audio=new A0(this.engine.camera),this.hud=new D0(e),this.ui=new C0(e,this.save,{onDeploy:n=>this.deploy(n),onResume:()=>this.resume(),onRestart:()=>this.restart(),onQuitToMenu:()=>this.quitToMenu(),onSettingsChange:n=>this.applySettings(n,!0),onUISound:n=>this.audio.playUI(n)}),this.applySettings(this.save.settings,!1),this.ui.show("loading"),this.boot(),window.addEventListener("keydown",n=>{n.code==="Escape"&&this.onEscape()}),requestAnimationFrame(()=>this.loop())}async boot(){const t=performance.now();let e=0;const n=setInterval(()=>{e=Math.min(.92,e+.05),this.ui.setLoadProgress(e,uc[Math.floor(Math.random()*uc.length)])},140);await this.audio.init(),this.audio.bindGameEvents(this.bus);const s=performance.now()-t;s<900&&await new Promise(r=>setTimeout(r,900-s)),clearInterval(n),this.ui.setLoadProgress(1),setTimeout(()=>{this.state="menu",this.ui.show("menu")},200)}applySettings(t,e){this.engine.setGraphicsPreset(t.graphicsPreset),this.engine.setResolutionScale(t.resolutionScale),this.engine.setPostProcessing(t.postProcessing),this.audio.updateVolumes(t.masterVolume,t.sfxVolume,t.musicVolume),this.input.settings.sensitivity=t.mouseSensitivity,this.input.settings.aimSensitivity=t.aimSensitivity,this.input.settings.invertY=t.invertY,this.save.settings=t,this.match?.applyLiveSettings(t),e&&$s.save(this.save)}deploy(t){this.save.loadout=t,$s.save(this.save),this.ui.hideAll(),this.match=new M_(this.engine,this.input,this.bus,this.audio,this.hud,this.save.settings,rr[t]),this.state="playing",this.engine.renderer.domElement.requestPointerLock()}onEscape(){this.state==="playing"?(this.state="paused",this.match?.setInputEnabled(!1),this.ui.show("pause")):this.state==="paused"&&this.resume()}resume(){this.state="playing",this.ui.hideAll(),this.match?.setInputEnabled(!0),this.engine.renderer.domElement.requestPointerLock()}restart(){this.match?.dispose(),this.match=null,this.ui.hideAll(),this.deploy(this.save.loadout??"assault")}quitToMenu(){this.match?.dispose(),this.match=null,this.input.exitPointerLock(),this.state="menu",this.ui.updateMenuStats(this.save),this.ui.hideAll(),this.ui.show("menu")}handleMatchEnd(){if(!this.match)return;const t=this.match.result;if(!t)return;this.state="results",this.input.exitPointerLock(),t.stats.success&&(this.save.successfulExtractions++,(this.save.bestExtractionTime===null||t.stats.survivalTime<this.save.bestExtractionTime)&&(this.save.bestExtractionTime=t.stats.survivalTime)),this.save.totalMatches++,$s.save(this.save);const e={extracted:"Extraction successful. Signal secured.",killed:"Neutralized by hostile forces.",zone:"Lost to the Signal Collapse.",quit:"Mission aborted."};this.ui.showResults(t.stats,e[t.reason]??"")}loop(){const t=Math.min(this.clock.getDelta(),.05);this.state==="playing"&&this.match&&(this.match.update(t),this.match.isEnded&&this.handleMatchEnd()),this.engine.render(),this.input.endFrame(),requestAnimationFrame(()=>this.loop())}}const w_=document.getElementById("mobile-gate");w_.innerHTML=`
  <h1>LAST SECTOR</h1>
  <p>Operation Blackridge is built for desktop browsers with a mouse and keyboard.
  Please open this page on a desktop or laptop computer for the full tactical experience.</p>
`;function b_(){const i=window.matchMedia("(pointer: fine)").matches,t=window.innerWidth>=900;return i&&t}if(b_()){const i=document.getElementById("viewport"),t=document.getElementById("ui-root");new S_(i,t)}
