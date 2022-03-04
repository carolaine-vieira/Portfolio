import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.138.2-mAMNcGi9eJzMFQBfERhF/mode=imports,min/optimized/three.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import data from './params.js';

const {height, speed, turnSpeed} = data.player;
const {roomWidth, roomLength, roomHeight, useWireframe} = data.room;
const {floorColor, roofColor} = data.room.roomColors;

var crate, crateTexture, crateNormalMap, crateBumpMap;

const initGame = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);

  var textureLoader = new THREE.TextureLoader();
	crateTexture = textureLoader.load("assets/crate0_diffuse.png");
	crateBumpMap = textureLoader.load("assets/crate0_bump.png");
	crateNormalMap = textureLoader.load("assets/crate0_normal.png");

  // Elements
  const elements = {
    structure: {
      floor: new THREE.Mesh(
        new THREE.PlaneGeometry(roomWidth, roomLength, 10, 10),
        new THREE.MeshPhongMaterial({ color: floorColor, wireframe: useWireframe })
      ),
      roof: new THREE.Mesh(
        new THREE.PlaneGeometry(roomWidth, roomLength, 10, 10),
        new THREE.MeshBasicMaterial({ color: roofColor, wireframe: useWireframe })
      ),
    },
    walls: {
      wall_1: new THREE.Mesh( 
        new THREE.BoxGeometry(4, roomHeight, 0.2),
        new THREE.MeshPhongMaterial({ color: "#fff", wireframe: useWireframe })
      ),
      wall_2: new THREE.Mesh( 
        new THREE.BoxGeometry(5, roomHeight, 0.2),
        new THREE.MeshPhongMaterial({ color: "green", wireframe: useWireframe })
      ),
      cube: new THREE.Mesh(
        new THREE.BoxGeometry(roomWidth, 6, roomLength, 10, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: useWireframe })
      ),    
    },
    doors: {
      frontDoor: new THREE.Mesh( 
        new THREE.BoxGeometry(2, roomHeight, 0.2),
        new THREE.MeshBasicMaterial({ color: "#eee", wireframe: useWireframe, side: THREE.BackSide })
      )
    },
    lights: {
      ambientLight: new THREE.AmbientLight("#ffffff", 0.3),
      projects: new THREE.PointLight("#fff", 0.8, 18), 
      skills: new THREE.PointLight("red", 0.8, 18)
    },
    colors: {
      roomBackground: new THREE.Color('skyblue')
    },
    random: {
      te: new THREE.Mesh(
        new THREE.BoxGeometry(3,3,3),
        new THREE.MeshPhongMaterial({
          color:0xffffff,
          map: crateTexture,
          bumpMap: crateBumpMap,
          normalMap: crateNormalMap
        })
      )
    }
  }
  console.log(elements);

  // Floor
  elements.structure.floor.rotation.x -= Math.PI / 2;
  elements.structure.floor.position.y = -2;
  elements.structure.floor.receiveShadow = true;  
  
  // Roof
  elements.structure.roof.rotation.x -= Math.PI / 2;
  elements.structure.roof.position.y = 2.5;

  // Wall 1
  elements.walls.wall_1.receiveShadow = true;
  elements.walls.wall_1.castShadow = true;

  // Wall 2
  elements.walls.wall_2.position.set(5, 0);
  elements.walls.wall_2.receiveShadow = true;
  elements.walls.wall_2.castShadow = true;

  // Front Door
  elements.doors.frontDoor.position.set(0, 0, -9.8);

  // Lights
  elements.lights.projects.position.set(-3, 6, -3);
  elements.lights.projects.castShadow = true;
  elements.lights.projects.shadow.camera.near = 0.1;
  elements.lights.projects.shadow.camera.far = 25;

  elements.lights.skills.position.set(0, 6, 0);
  elements.lights.skills.castShadow = true;
  elements.lights.skills.shadow.camera.near = 0.1;
  elements.lights.skills.shadow.camera.far = 25;

  elements.random.te.position.set(2.5, 3/2, 2.5);
  elements.random.te.receiveShadow = true;
  elements.random.te.castShadow = true;  
  
  // Scene
  scene.background = elements.colors.roomBackground;
  
  scene.add( 
    //Scene structure
    // elements.walls.cube,
    // elements.structure.roof,  
    elements.walls.wall_1, 
    elements.walls.wall_2,
    elements.structure.floor, 
    elements.doors.frontDoor,
    elements.lights.ambientLight,
    elements.lights.projects,
    elements.random.te
  );  
  
  // Camera
  camera.position.set(0, height, -9.7);
  camera.lookAt(new THREE.Vector3(0, height, 0));  
  
  // Controls
  controls.listenToKeyEvents(window); 
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = 1.4;
  controls.maxDistance = 25;

  // Renderer
  renderer.setSize( window.innerWidth, window.innerHeight );  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  
  document.body.appendChild( renderer.domElement );
  
  const animate = () => {
    requestAnimationFrame( animate );
    // scene.rotation.y += 0.01;
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