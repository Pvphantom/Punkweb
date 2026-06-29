// =========================================================
//  3D animated background — endless neon Night City grid
//  + drifting data particles. Three.js via importmap.
// =========================================================
import * as THREE from 'three';

const canvas = document.getElementById('bg-canvas');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05060a, 0.045);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2.2, 6);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ---- Neon perspective grid (two planes scrolling toward camera) ----
const GRID_SIZE = 40;
const GRID_DIV = 40;
function makeGrid(color) {
  const g = new THREE.GridHelper(GRID_SIZE, GRID_DIV, color, color);
  g.material.transparent = true;
  g.material.opacity = 0.32;
  g.rotation.x = 0; // floor
  return g;
}
const gridA = makeGrid(0x00f0ff);
const gridB = makeGrid(0x00f0ff);
gridA.position.y = -2;
gridB.position.y = -2;
gridB.position.z = -GRID_SIZE;
scene.add(gridA, gridB);

// ceiling grid (magenta) for the tunnel feel
const ceilA = makeGrid(0xff2e88);
const ceilB = makeGrid(0xff2e88);
ceilA.material.opacity = 0.18;
ceilB.material.opacity = 0.18;
ceilA.position.y = 6;
ceilB.position.y = 6;
ceilB.position.z = -GRID_SIZE;
scene.add(ceilA, ceilB);

// ---- Drifting data particles ----
const COUNT = reduced ? 200 : 900;
const pGeo = new THREE.BufferGeometry();
const positions = new Float32Array(COUNT * 3);
const speeds = new Float32Array(COUNT);
for (let i = 0; i < COUNT; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 40;
  positions[i * 3 + 1] = Math.random() * 8 - 2;
  positions[i * 3 + 2] = -Math.random() * 60;
  speeds[i] = 0.02 + Math.random() * 0.06;
}
pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const pMat = new THREE.PointsMaterial({
  color: 0xfcee0a, size: 0.06, transparent: true, opacity: 0.85,
  blending: THREE.AdditiveBlending, depthWrite: false,
});
const points = new THREE.Points(pGeo, pMat);
scene.add(points);

// ---- Floating wireframe "buildings" on the horizon ----
const buildings = new THREE.Group();
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
for (let i = 0; i < 24; i++) {
  const h = 1 + Math.random() * 6;
  const edges = new THREE.EdgesGeometry(boxGeo);
  const mat = new THREE.LineBasicMaterial({
    color: Math.random() > 0.5 ? 0x00f0ff : 0xb026ff,
    transparent: true, opacity: 0.5,
  });
  const b = new THREE.LineSegments(edges, mat);
  b.scale.set(0.6 + Math.random(), h, 0.6 + Math.random());
  b.position.set((Math.random() - 0.5) * 36, h / 2 - 2, -10 - Math.random() * 30);
  buildings.add(b);
}
scene.add(buildings);

// ---- Mouse parallax ----
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
window.addEventListener('mousemove', (e) => {
  mouse.tx = (e.clientX / window.innerWidth - 0.5);
  mouse.ty = (e.clientY / window.innerHeight - 0.5);
});

// expose a "pulse" the rest of the site can trigger on button clicks
let pulse = 0;
window.__cyberPulse = () => { pulse = 1; };

// ---- Animate ----
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  // scroll the grids toward the camera, wrap around
  const gridSpeed = (reduced ? 2 : 6) + pulse * 30;
  [gridA, gridB, ceilA, ceilB].forEach((g) => {
    g.position.z += gridSpeed * dt;
    if (g.position.z > GRID_SIZE) g.position.z -= GRID_SIZE * 2;
  });

  // particles stream forward
  const pos = pGeo.attributes.position.array;
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3 + 2] += (speeds[i] + pulse * 0.5) * 60 * dt;
    if (pos[i * 3 + 2] > 8) {
      pos[i * 3 + 2] = -60;
      pos[i * 3] = (Math.random() - 0.5) * 40;
    }
  }
  pGeo.attributes.position.needsUpdate = true;

  buildings.rotation.y = Math.sin(t * 0.05) * 0.05;

  // smooth mouse parallax
  mouse.x += (mouse.tx - mouse.x) * 0.05;
  mouse.y += (mouse.ty - mouse.y) * 0.05;
  camera.position.x = mouse.x * 2;
  camera.position.y = 2.2 - mouse.y * 1.2 + pulse * 0.3;
  camera.lookAt(0, 1.5, -6);

  pulse *= 0.92; // decay the pulse
  renderer.render(scene, camera);
}
animate();

// ---- Resize ----
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
