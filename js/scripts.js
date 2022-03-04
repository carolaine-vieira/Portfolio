import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.138.2-mAMNcGi9eJzMFQBfERhF/mode=imports,min/optimized/three.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import data from './params.js';

const {height, speed, turnSpeed} = data.player;
const {roomWidth, roomHeight, roomDepth, useWireframe} = data.room;
const {floorColor, roofColor} = data.room.roomColors;

const initGame = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls( camera, renderer.domElement );

  //Meshs
  const meshFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth, roomHeight, 10, 10),
    new THREE.MeshBasicMaterial( { 
      color: floorColor, 
      wireframe: useWireframe,
    })
  );
  const meshRoof = new THREE.Mesh(
    new THREE.PlaneGeometry(roomWidth, roomHeight, 10, 10),
    new THREE.MeshBasicMaterial( { 
      color: roofColor, 
      wireframe: useWireframe,
    })
  );
  const wall_1 = new THREE.Mesh( 
    new THREE.BoxGeometry(5, roomDepth, 0.2),
    new THREE.MeshPhongMaterial( { 
      color: "#fff", 
      wireframe: useWireframe,
    })
  );  
  const wall_2 = new THREE.Mesh( 
    new THREE.BoxGeometry(5, roomDepth, 0.2),
    new THREE.MeshPhongMaterial( { 
      color: "green", 
      wireframe: useWireframe,
    })
  );
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(roomWidth, 6, roomHeight, 10, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: useWireframe })
  );
  const frontDoor = new THREE.Mesh( 
    new THREE.BoxGeometry(2, roomDepth, 0.2),
    new THREE.MeshBasicMaterial( { 
      color: "#eee", 
      wireframe: useWireframe,
      side: THREE.BackSide
    })
  );

  // Colors  
  const roomBackground = new THREE.Color( 'black' );  

  // Lights
  const ambientLight = new THREE.AmbientLight("#ffffff", 0.3);
  const light = new THREE.PointLight("#fff", 0.8, 18);

  // Floor
  meshFloor.rotation.x -= Math.PI / 2;
  meshFloor.position.y = -2;
  meshFloor.receiveShadow = true;  
  
  // Roof
  meshRoof.rotation.x -= Math.PI / 2;
  meshRoof.position.y = 2.5;

  // Wall 2
  wall_2.position.set(5, 0);
  wall_2.receiveShadow = true;
  wall_2.castShadow = true;

  // Front Door
  frontDoor.position.set(0, 0, -9.8);

  // Light 
  light.position.set(-3, 6, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;
  
  // Scene
  scene.background = roomBackground;
  
  scene.add( 
    //Scene basic shape
    cube,
    // meshRoof,  
    wall_1, 
    wall_2,
    meshFloor, 
    frontDoor
  );  
  
  scene.add(
    ambientLight,
    light
  );  
  
  // Camera
  camera.position.set(0, height, -5);
  camera.lookAt(new THREE.Vector3(0, height, 0));  
  
  // Controls
  controls.listenToKeyEvents(window); 
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = 1;
  controls.maxDistance = 25;

  // Renderer
  renderer.setSize( window.innerWidth, window.innerHeight );  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  
  document.body.appendChild( renderer.domElement );
  
  function animate() {
    requestAnimationFrame( animate );
    // wall_1.rotation.y += 0.01;
    renderer.render( scene, camera );
  };
  animate();

  playerMovement(camera);
}

const playerMovement = (camera) => {
  window.addEventListener("keydown", (e) => {
    const k = e.key;
  
    if(k === "w"){ 
      camera.position.x -= Math.sin(camera.rotation.y) * speed;
      camera.position.z -= -Math.cos(camera.rotation.y) * speed;
    }
    if(k === "a"){ 
      camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * speed;
      camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * speed;
    }
    if(k === "s"){ 
      camera.position.x += Math.sin(camera.rotation.y) * speed;
      camera.position.z += -Math.cos(camera.rotation.y) * speed;
    }
    if(k === "d"){ 
      camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * speed;
      camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * speed;
    }
  });
}

initGame();