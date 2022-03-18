
let params ={
  bendDepth: 4
}

let geom = new THREE.PlaneGeometry(16, 9, 20, 20);
planeCurve(geom, params.bendDepth);
let mat = new THREE.MeshBasicMaterial({
  // wireframe: true,
  side : THREE.DoubleSide,
  map: new THREE.TextureLoader().load("https://threejs.org/examples/textures/uv_grid_opengl.jpg")
});
let o = new THREE.Mesh(geom, mat);
scene.add(o)

renderer.setAnimationLoop( _ => {
  renderer.render(scene, camera);
})

function planeCurve(g, z)
{
  
  let p = g.parameters;
  let hw = p.width * 0.5;
  
  let a = new THREE.Vector2(-hw, 0);
  let b = new THREE.Vector2(0, z);
  let c = new THREE.Vector2(hw, 0);
  
  let ab = new THREE.Vector2().subVectors(a, b);
  let bc = new THREE.Vector2().subVectors(b, c);
  let ac = new THREE.Vector2().subVectors(a, c);
  
  let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
  
  let center = new THREE.Vector2(0, z - r);
  let baseV = new THREE.Vector2().subVectors(a, center);
  let baseAngle = baseV.angle() - (Math.PI * 0.5);
  let arc = baseAngle * 2;
  
  let uv = g.attributes.uv;
  let pos = g.attributes.position;
  let mainV = new THREE.Vector2();
  for (let i = 0; i < uv.count; i++){
    let uvRatio = 1 - uv.getX(i);
    let y = pos.getY(i);
    mainV.copy(c).rotateAround(center, (arc * uvRatio));
    pos.setXYZ(i, mainV.x, y, -mainV.y);
  }
  
  pos.needsUpdate = true;
  
}
