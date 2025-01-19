import {
  Vector3,
  Vector2,
  PlaneGeometry,
  Mesh, 
  MeshPhongMaterial, 
  DoubleSide, 
  Scene, 
  PerspectiveCamera,
  WebGLRenderer, 
  PCFSoftShadowMap, 
  CineonToneMapping,
  Raycaster,
  ShaderMaterial,
  PointLight,
  NearestFilter,
  MeshToonMaterial,
  Color,
  AmbientLight,
  MathUtils,
  ConeGeometry,
  SphereGeometry,
  MeshBasicMaterial
} from "../../../node_modules/three/build/three.module.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { ParticleSystem, ParticleProps3D, ParticleEmitter } from "./particleSystem.js"
import Stats from "stats.js"

const createGround = s => {
  const g = new Mesh(
    new PlaneGeometry(100, 100),
    new MeshPhongMaterial({ color: 0x586F3E, side: DoubleSide })
  )
  g.rotation.x = Math.PI / 2
  s.add(g)
}

const updateParticleForces = (sphere, particles, delta) => {
  const sp = sphere.position
  const r = sphere.geometry.boundingSphere.radius
  for (const p of particles) {
    if (!p.active) continue
    const pp = p.mesh.position
    const dist = sp.distanceTo(pp)
    if (dist < r) {
      const dir = new Vector3().subVectors(pp, sp).normalize()
      p.force.add(dir.multiplyScalar((r - dist) * 500 * delta))
    }
  }
}

export const initializeScene = (mountRef, cameraRef, lightRef) => {
  let id
  const scene = new Scene()
  const camera = new PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.3, 100)
  cameraRef.current = camera
  camera.position.set(2.8, 0.9, 1.5)
  camera.lookAt(0, 1, 0)

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  mountRef.current.appendChild(renderer.domElement)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  renderer.shadowMap.autoUpdate = false
  renderer.toneMapping = CineonToneMapping
  renderer.toneMappingExposure = 1

  const stats = new Stats()
  stats.showPanel(0)
  document.body.appendChild(stats.dom)

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  const pointer = new Vector2()
  const raycaster = new Raycaster()
  raycaster.far = 6
  document.addEventListener("mousemove", e => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
  })

  const backgroundShader = {
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new Vector3(window.innerWidth, window.innerHeight, 1) },
      iMouse: { value: new Vector2(0, 0) },
    },
    vertexShader: `
      varying vec2 fragCoord;
      void main(){
        fragCoord = uv;
        gl_Position = vec4(position,1.0);
      }
    `,
    fragmentShader: `
      #define iterations 15
      #define formuparam 0.53
      #define volsteps 10
      #define stepsize 0.12
      #define zoom 0.900
      #define tile 0.350
      #define speed 0.003
      #define brightness 0.002
      #define darkmatter 0.900
      #define distfading 0.750
      #define saturation 0.850

      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec2 iMouse;

      float SCurve(float v){
        if(v<0.5)return v*v*v*v*v*16.0;
        v-=1.0;return v*v*v*v*v*16.0+1.0;
      }

      void mainImage(out vec4 c,in vec2 fc){
        vec2 uv=fc/iResolution.xy-0.5;uv.y*=iResolution.y/iResolution.x;
        vec3 dir=vec3(uv*zoom,1.0);
        float t=iTime*speed+0.25;
        float a1=0.5+iMouse.x/iResolution.x*2.0;
        float a2=0.8+iMouse.y/iResolution.y*2.0;
        mat2 r1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));
        mat2 r2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));
        dir.xz*=r1;dir.xy*=r2;
        vec3 from=vec3(1.0,0.5,0.5)+vec3(t*2.0,t,-2.0);
        from.xz*=r1;from.xy*=r2;
        float s=0.1,fade=1.0;vec3 v=vec3(0.0);
        for(int i=0;i<volsteps;i++){
          vec3 p=from+s*dir*0.5;p=abs(vec3(tile)-mod(p,vec3(tile*2.0)));
          float pa,a=pa=0.0;
          for(int j=0;j<iterations;j++){
            p=abs(p)/dot(p,p)-formuparam;a+=abs(length(p)-pa);pa=length(p);
          }
          float dm=max(0.0,darkmatter-a*a*0.001);
          a=pow(a,2.5);
          if(i>6)fade*=1.0-dm;
          v+=fade;v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade;
          fade*=distfading;s+=stepsize;
        }
        v=mix(vec3(length(v)),v,saturation);
        vec4 C=vec4(v*0.01,1.0);
        C.r=pow(C.r,0.35);C.g=pow(C.g,0.36);C.b=pow(C.b,0.4);
        vec4 L=C;
        C.r=mix(L.r,SCurve(C.r),1.0);
        C.g=mix(L.g,SCurve(C.g),0.9);
        C.b=mix(L.b,SCurve(C.b),0.6);
        c=C;
      }

      void main(){
        mainImage(gl_FragColor,gl_FragCoord.xy);
      }
    `,
  }

  const shaderMaterial = new ShaderMaterial(backgroundShader)
  const bgMesh = new Mesh(new PlaneGeometry(2, 2), shaderMaterial)
  bgMesh.position.z = -6
  bgMesh.material.depthTest = true
  bgMesh.material.depthWrite = false
  scene.add(bgMesh)

  window.addEventListener("resize", handleResize)
  const loader = new GLTFLoader()
  const texLoader = new TextureLoader()

  const pointLight = new PointLight(0xCD6605, 20, 6, 1)
  lightRef.current = pointLight
  pointLight.shadow.mapSize.set(2048,2048)
  pointLight.shadow.camera.near=0.1
  pointLight.shadow.camera.far=5
  pointLight.castShadow=true
  pointLight.shadow.bias=1e-7
  pointLight.position.set(0,0.4,-0.1)
  pointLight.shadow.radius=25
  scene.add(pointLight)

  function flicker() {
    const targetIntensity = Math.random() * 5 + 17.5;
    const duration = 100;
    const startIntensity = pointLight.intensity;
    const startTime = performance.now();
  
    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      pointLight.intensity = startIntensity + (targetIntensity - startIntensity) * progress;
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(flicker, 100);
      }
    }
  
    requestAnimationFrame(animate);
  }
  flicker()

  const gradientMaps = (() => {
    const threeTone = texLoader.load("https://threejs.org/examples/textures/gradientMaps/threeTone.jpg")
    threeTone.minFilter = NearestFilter
    threeTone.magFilter = NearestFilter
    const fiveTone = texLoader.load("https://threejs.org/examples/textures/gradientMaps/fiveTone.jpg")
    fiveTone.minFilter = NearestFilter
    fiveTone.magFilter = NearestFilter
    return { none: null, threeTone, fiveTone }
  })()

  loader.load(
    "sceneglb.glb",
    gltf => {
      gltf.scene.traverse(n => {
        if (n.isMesh) {
          n.receiveShadow = true
          n.castShadow = true
          if (n.material) {
            const m = n.material
            if (n.name.includes("Node")) {
              n.material = new MeshToonMaterial({
                color: m.color,
                map: m.map,
                emissive: new Color(0x666666),
                emissiveIntensity:0.1,
                gradientMap: gradientMaps.fiveTone,
              })
            } else {
              n.material = new MeshPhongMaterial({
                color: m.color,
                map: m.map,
                shininess:20,
                emissive:new Color(0x333333),
                emissiveIntensity:0.06,
                fog:false,
              })
              if (n.name.includes("rockFlat")) n.receiveShadow=false
              if (m.aoMap) {
                n.material.aoMap = m.aoMap
                n.material.aoMapIntensity=1.0
              }
            }
          }
        }
      })
      scene.add(gltf.scene)
      renderer.shadowMap.needsUpdate = true;
    },
    xhr => console.log(`Loading progress: ${(xhr.loaded / xhr.total)*100}%`),
    e => console.error("An error occurred:", e)
  )

  const ambientLight = new AmbientLight(0xffffff,0.5)
  scene.add(ambientLight)
  createGround(scene)

  const psA = new ParticleSystem(scene,200)
  const psB = new ParticleSystem(scene,200)
  const propsA = new ParticleProps3D()
  const propsB = new ParticleProps3D()

  propsA.colorA.set(1,0.05,0)
  propsA.colorB.set(1,0.71,0.008)
  propsB.colorA.set(0.08,0.08,0.08)
  propsB.colorB.set(0.5,0.5,0.5)
  propsA.size=0.3
  propsB.size=0.3
  propsA.sizeVariation=0.2
  propsB.sizeVariation=0.2
  propsA.sizeFade=r=>MathUtils.lerp(0.01/propsA.size,1,r)
  propsB.sizeFade=r=>MathUtils.lerp(1.5,0.01,r)
  propsA.alphaFade=r=>r
  propsB.alphaFade=r=>r
  propsA.velocity.set(0,0.5,0)
  propsB.velocity.set(0,0.5,0)
  propsA.velocityVariation.set(0,1,0)
  propsB.velocityVariation.set(0,1,0)
  propsA.lifeTime=1
  propsB.lifeTime=1
  propsA.particleForce.set(0,0.2,0)
  propsB.particleForce.set(0,0.6,0)
  propsA.particleEmitter=new ParticleEmitter(new Mesh(new ConeGeometry(0.2,0.2)))
  propsB.particleEmitter=new ParticleEmitter(new Mesh(new ConeGeometry(0.2,0.2)))
  propsA.particleEmitter.shape.position.set(0.02,0.4,-0.12)
  propsB.particleEmitter.shape.position.set(-0.03,0.45,-0.17)

  const sphere = new Mesh(
    new SphereGeometry(0.5,32,32),
    new MeshBasicMaterial({ color:0xff0000, wireframe:true, visible:false })
  )
  sphere.position.set(0,5,0)
  scene.add(sphere)
  
  let prev = performance.now()

  const animate = () => {
    id = requestAnimationFrame(animate)
    stats.begin()
    const now = performance.now()
    const delta = (now - prev)*0.001
    prev=now
    shaderMaterial.uniforms.iTime.value=now*0.001
    shaderMaterial.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight,1)
    raycaster.setFromCamera(pointer,camera)
    const intersects = raycaster.intersectObjects(scene.children,true).filter(o=>o.distance>2)
    if (intersects.length) sphere.position.copy(intersects[0].point)
    else sphere.position.set(10,10,5)

    renderer.autoClear=false
    renderer.clear()
    renderer.render(scene,camera)
    psA.emit(propsA)
    psB.emit(propsB)
    updateParticleForces(sphere, psA.particles, delta)
    updateParticleForces(sphere, psB.particles, delta)
    psA.update(delta)
    psB.update(delta)
    stats.end()
  }
  animate()

  const cleanup = () => {
    cancelAnimationFrame(id)
    renderer.dispose()
    if (mountRef.current) mountRef.current.removeChild(renderer.domElement)
  }

  return cleanup
}
