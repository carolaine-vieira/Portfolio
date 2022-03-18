import * as THREE from "./three-js/build/three.module.js";
import { OrbitControls } from "./three-js/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "./three-js/examples/jsm/controls/PointerLockControls.js";
import { Flow } from "./three-js/examples/jsm/modifiers/CurveModifier.js";
import data from './params.js';

const {roomWidth, roomLength, roomHeight, useWireframe} = data.room;
const {floorColor, roofColor, roomWall} = data.room.roomColors;

var crate, crateTexture, crateNormalMap, crateBumpMap;

const initGame = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10);
  const ray = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const controls = new PointerLockControls(camera, document.body);  
  const orbControls = new OrbitControls(camera, document.body);  
  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3();  
  const blocker = document.getElementById( 'blocker' );
  const instructions = document.getElementById( 'instructions' );
  const elementsGroup = new THREE.Group();
  const tableGroup = new THREE.Group();
  const panelGroup = new THREE.Group();

  let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
  let prevTime = performance.now();  

  var textureLoader = new THREE.TextureLoader();
	crateTexture = textureLoader.load("assets/crate0_diffuse.png");
	crateBumpMap = textureLoader.load("assets/crate0_bump.png");
	crateNormalMap = textureLoader.load("assets/crate0_normal.png");

  const elements = {
    structure: {
      floor: new THREE.Mesh(
        new THREE.CircleGeometry((roomWidth - 15), roomWidth),
        new THREE.MeshPhongMaterial({ 
          color: floorColor, 
          wireframe: useWireframe,
          flatShading: true
        })
      ),
      roof: new THREE.Mesh(
        // new THREE.PlaneGeometry(roomWidth, roomLength, roomWidth, roomWidth),
        new THREE.CircleGeometry((roomWidth - 15), roomWidth * 2),
        new THREE.MeshPhongMaterial({ 
          color: roofColor, 
          wireframe: false,
          opacity: 0.5,
          transparent: true
        }),
      ),
    },
    lights: {
      ambientLight: new THREE.AmbientLight("#ffffff", 0.5),
      center: new THREE.PointLight("#ffffff", 0.6, roomWidth * 0.7), 
      roof: new THREE.PointLight("#de004e", 0.9, roomWidth),
    },
    colors: {
      roomBackground: new THREE.Color('#321450')
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
    },
    miscellaneous: {
      globeAlt: new THREE.Mesh(
        new THREE.SphereGeometry(4, 16, 16),
        new THREE.MeshPhongMaterial({ 
          color: "#de004e", 
          // wireframe: true,
          emissive: "#000000",
          specular: "#ffffff",
          shininess: 40,
          side: THREE.FrontSide,
          flatShading: true
        })
      ),
      globe: new THREE.Mesh(
        new THREE.SphereGeometry(4, 16, 16),
        new THREE.MeshBasicMaterial({ 
          color: 0xffffff, 
          wireframe: true,
        })
      ),
    }
  }

  elements.structure.floor.rotation.x -= Math.PI / 2;
  elements.structure.floor.position.y = -(roomHeight / 2);
  elements.structure.floor.receiveShadow = true;    
  elements.structure.floor.name = "Floor";
  
  elements.structure.roof.rotation.x = Math.PI / 2;
  elements.structure.roof.position.y = roomHeight / 2;
  elements.structure.roof.name = "Roof";

  elements.lights.center.position.set(0, 6, 0);
  elements.lights.center.castShadow = true;
  elements.lights.center.name = "Center Light";

  elements.lights.roof.position.set(0, roomHeight * 2, 0);
  elements.lights.roof.castShadow = true;
  elements.lights.roof.rotation.x = Math.PI / 2;
  elements.lights.roof.name = "Roof Light";

  elements.random.te.position.set(2.5, 3/2, 10);
  elements.random.te.receiveShadow = true;
  elements.random.te.castShadow = true;  
  elements.random.te.name = "Caixa";

  elements.miscellaneous.globe.position.y = (roomHeight / 2) - 3.8;
  elements.miscellaneous.globe.position.x = 0.1;
  elements.miscellaneous.globe.castShadow = true;
  elements.miscellaneous.globe.name = "Globe";

  const globeTable = Array.apply(null, Array(6)).map(() => { 
    return new THREE.Mesh(
      new THREE.RingGeometry(4, 10, 50), 
      new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    ); 
  })
  
  globeTable.forEach((table, index) => {
    if( index === globeTable.length - 1 ) table.castShadow = true;    
    table.rotation.x -= Math.PI / 2;
    table.position.y = -(roomHeight / 2) + 3 - (index / 5);
    tableGroup.add(table);
  });

  const panel = Array.apply(null, Array(20)).map(() => { 
    return new THREE.Mesh(
      new THREE.PlaneGeometry((roomWidth / 3), (roomHeight / 2) ), 
      new THREE.MeshPhongMaterial({ color: "pink", side: THREE.DoubleSide })
    ); 
  })
  
  panel.forEach((panel, index) => {
    // if( index === globeTable.length - 1 ) table.castShadow = true;    
    // table.rotation.x -= Math.PI / 2;
    panel.position.z = -20 + (index / 100);
    panelGroup.add(panel);
  });

  
  elementsGroup.add( 
    // elements.structure.roof,  
    elements.structure.floor,
    elements.lights.ambientLight,
    elements.lights.center,
    elements.lights.roof,
    elements.random.te,
    elements.miscellaneous.globe,
    tableGroup,
    panelGroup
  );  

  scene.background = elements.colors.roomBackground;
  scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
  scene.add(elementsGroup);
  // scene.add(controls.getObject());
  
  camera.position.set(0, 0, -(roomWidth / 2.1));
  camera.lookAt(new THREE.Vector3(0, 0, 0));  
  
  // controls.maxPolarAngle = 3;  
  orbControls.maxPolarAngle = Math.PI / 2;
  orbControls.maxDistance = 300;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;  

  // Functions  
  window.addEventListener("resize", function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  });  

  instructions.addEventListener( 'click', function enablePlayerInteraction() {
    window.addEventListener('keydown', function onKeyDown(e) {
      const k = e.code;    
      if(k === "ShiftLeft" || k === "ShiftRight") controls.lock();
    });

    window.addEventListener('keyup', function onKeyUp(e) {
      const k = e.code;    
      if(k === "ShiftLeft" || k === "ShiftRight") controls.unlock();
    });
  });

  // controls.addEventListener('lock', () => function (){
  //   instructions.style.display = 'none';
  //   blocker.style.display = 'none';
  // });

  // controls.addEventListener('unlock', () => function (){
  //   blocker.style.display = 'block';
  //   instructions.style.display = 'none';
  // });    

  document.addEventListener('keydown', function onKeyDown(e) {
    const k = e.code;
  
    if(k === "ArrowUp" || k === "KeyW") moveForward = true;
    if(k === "ArrowLeft" || k === "KeyA") moveLeft = true;
    if(k === "ArrowDown" || k === "KeyS") moveBackward = true; 
    if(k === "ArrowUp" || k === "KeyD") moveRight = true;
  });

  document.addEventListener('keyup', function onKeyUp(e) {
    const k = e.code;
  
    if(k === "ArrowUp" || k === "KeyW") moveForward = false;
    if(k === "ArrowLeft" || k === "KeyA") moveLeft = false;
    if(k === "ArrowDown" || k === "KeyS") moveBackward = false; 
    if(k === "ArrowUp" || k === "KeyD") moveRight = false;
  });  

  const color = new THREE.Color();
  const spheres = [];

  // spheres

  const boxGeometry = new THREE.SphereGeometry( 2, 32, 32 ).toNonIndexed();

  const position = boxGeometry.attributes.position;
  const colorsBox = [];

  for ( let i = 0, l = position.count; i < l; i ++ ) {
    color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
    colorsBox.push( color.r, color.g, color.b );
  }

  boxGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsBox, 3 ) );

  for ( let i = 0; i < 100; i ++ ) {
    const boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: true } );
    boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

    const box = new THREE.Mesh( boxGeometry, boxMaterial );
    box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
    box.position.y = Math.floor( Math.random() * 20 ) * 20 + roomHeight / 2;
    box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;

    scene.add(box);
    spheres.push(box);
  }

  function animate() {    
    requestAnimationFrame( animate );    

    const time = performance.now();

    if ( controls.isLocked === true ) {
      raycaster.ray.origin.copy( controls.getObject().position );
      
      // raycaster.ray.origin.y -= 10;

      const intersections = raycaster.intersectObjects( scene.children, false );
      const onObject = intersections.length > 0;

      const delta = ( time - prevTime ) / 1000;

      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;

      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number( moveForward ) - Number( moveBackward );
      direction.x = Number( moveRight ) - Number( moveLeft );
      direction.normalize(); // this ensures consistent movements in all directions

      if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
      if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

      if ( onObject === true ) {
        // velocity.y = Math.max( 0, velocity.y );
        // canJump = true;
      }

      controls.moveRight( - velocity.x * delta );
      controls.moveForward( - velocity.z * delta );

      // controls.getObject().position.y += ( velocity.y * delta ); // new behavior

      if ( controls.getObject().position.y < 10 ) {
        // velocity.y = 0;
        // controls.getObject().position.y = 10;
        // canJump = true;
      }
    }
    prevTime = time;

    renderer.render( scene, camera ); 
    
    function render() {    
      const targetElement = scene.getObjectByName( "Globe" );  
      // ray.setFromCamera( pointer, camera );

      let intersects = [];    
      intersects = ray.intersectObjects( scene.children );
      // console.log(intersects)

      // if(intersects.length > 0){
      //   intersects.forEach(el => {
      //     if( el.object === targetElement ) {
      //       el.object.material.color.set( 0xff0000 );
      //     } else  {
      //       elements.miscellaneous.globe.material.color.set( 0xffffff ) 
      //     }
      //   })   
      // }    
      // renderer.render( scene, camera );    
    }
    
    window.addEventListener( 'pointermove', function onPointerMove(event) {  
      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;    
    });    
    window.requestAnimationFrame(render);
  }  

  animate(); 



}
initGame();
