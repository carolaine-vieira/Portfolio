import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.138.2-mAMNcGi9eJzMFQBfERhF/mode=imports,min/optimized/three.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

const player = {
  height: 1.8,
};

const meshFloor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshBasicMaterial( { 
    color: "#222", 
    wireframe: false,
  })
);
meshFloor.rotation.x -= Math.PI / 2;
meshFloor.position.y = -2.5;

const scene = new THREE.Scene();

scene.add( meshFloor );

const roomBackground = new THREE.Color( 'skyblue' );
scene.background = roomBackground;

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const wall_1 = new THREE.Mesh( 
  new THREE.BoxGeometry(5, 5, 0.2),
  new THREE.MeshBasicMaterial( { 
    color: "#fff", 
    wireframe: true,
  })
);

const wall_2 = new THREE.Mesh( 
  new THREE.BoxGeometry(5, 5, 0.2),
  new THREE.MeshBasicMaterial( { 
    color: "green", 
    wireframe: true,
  })
);
wall_2.position.x = 5;

scene.add( wall_1 );

scene.add( wall_2 );

camera.position.set(0, player.height, -5);
camera.lookAt(new THREE.Vector3(0, player.height, 0));

function animate() {
  requestAnimationFrame( animate );

  // wall_1.rotation.y += 0.01;

  renderer.render( scene, camera );
};
animate();

window.addEventListener("keydown", (e) => {
  switch(e.key) {
    case "ArrowLeft":
      camera.rotation.y += Math.PI * 0.01;
      break;

    case "ArrowRight":
      camera.rotation.y -= Math.PI * 0.01;
      break;

    case "ArrowUp":
      camera.rotation.x += Math.PI * 0.01;
      break;

    case "ArrowDown":
      camera.rotation.x -= Math.PI * 0.01;
      break;
  }
});
