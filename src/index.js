import {
  Group,
  SphereGeometry,
  MeshBasicMaterial,
  TextureLoader,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Mesh
} from 'three';

import earthTexture from './earth.png';

// Scene
const scene = new Scene();

// Top-level node
const sceneRoot = new Group();
scene.add(sceneRoot);

// Earth Spin
const earthSpin = new Group();
sceneRoot.add(earthSpin);

// Earth Mesh
const geometryEarth = new SphereGeometry(1, 20, 20);
const materialEarth = new MeshBasicMaterial();
const loaderEarth = new TextureLoader();

loaderEarth.load(earthTexture, (texture) => {
  materialEarth.map = texture;
  materialEarth.needsUpdate = true;      
});

const earthMesh = new Mesh(geometryEarth, materialEarth);
earthSpin.add(earthMesh);

// Camera
const camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.z = 5;

// Renderer
const renderer = new WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Container
const container = document.getElementById('container');
container.appendChild(renderer.domElement);

// Mouse position
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  // mouseX, mouseY are in the range [-1, 1]
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  mouseX = (event.clientX - windowHalfX) / windowHalfX;
  mouseY = (event.clientY - windowHalfY) / windowHalfY;
});

window.addEventListener('resize', () => {
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
	// Set up the camera
	camera.position.x = 0;
	camera.position.y = -mouseY*10;
	camera.lookAt(scene.position);

	// Perform animations
	earthSpin.rotation.y += 0.01;

	// Render the scene
	renderer.render(scene, camera);
}

function animate() {
  // Request to be called again for next frame
	requestAnimationFrame(animate);
	render();
}

animate(); // Enter an infinite loop