import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.138.2-mAMNcGi9eJzMFQBfERhF/mode=imports,min/optimized/three.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: "ffffff" } );
const cube = new THREE.Mesh( geometry, material );
const room = new THREE.Mesh( 
  new THREE.BoxGeometry(30, 15, 15),
  new THREE.MeshBasicMaterial( { color: "fff", wireframe: true } )
);

scene.add( room );

// camera.position.z = 1;
camera.position.set(0, 0, -1);

function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();

