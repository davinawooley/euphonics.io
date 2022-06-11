import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const particlesTextures = textureLoader.load('/textures/particles/13.png')


const particlesGeometry =new THREE.TorusBufferGeometry(1, 32, 32)
const particlesGeometry2 =new THREE.TorusBufferGeometry(1, 32, 32)

const count = 50000

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count*3)

for(let i = 0; i < count * 30; i++){
    positions[i] = (Math.random() -.15)*100
    colors[i] = Math.random()
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors,3))

particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(positions, 2))
particlesGeometry2.setAttribute('color', new THREE.BufferAttribute('purple',1))


const particlesMaterials = new THREE.PointsMaterial({
    size:0.075, sizeAttenuation:true, color: '#983FE0', map : particlesTextures, transparent : true, alphaMap: particlesTextures, depthWrite:false, blending: THREE.AdditiveBlending, vertexColors: true

})
const particlesMaterials2 = new THREE.PointsMaterial({
    size:1, sizeAttenuation:true, color: '#983FE0', map : particlesTextures, transparent : true, alphaMap: particlesTextures, depthWrite:false, blending: THREE.AdditiveBlending, vertexColors: true

})
 
const particles = new THREE.Points(particlesGeometry, particlesMaterials)
scene.add(particles)


const particles2 = new THREE.Points(particlesGeometry2, particlesMaterials2)
scene.add(particles2)
const light = new THREE.PointLight(0x000000, 0, 60, 2000);
  light.position.set(0, 1000, 0);
  scene.add(light)
// const ambientLight = new THREE.AmbientLight('0x3A3B3C', -2)
// scene.add(ambientLight)

/**

 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = -1

camera.position.x = 0
camera.position.y = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.minAzimuthAngle =-Math.PI*5; 
// controls.minDistance = 20.0; 
// controls.maxDistance = 50.0;
controls.maxPolarAngle = 2;
// controls.minPolarAngle=0;
// controls.target.set(10, 9, 10)
controls.enableDamping = true




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()/2.5


for (let i = 0; i<count; i++){
    const i3 = i * 1
    const x = particlesGeometry.attributes.position.array[i3]
    const x2 = particlesGeometry2.attributes.position.array[i3]
    particlesGeometry.attributes.position.array[i3*5+10] = Math.sin(elapsedTime+x)
    particlesGeometry2.attributes.position.array[i3+9] = Math.sin(elapsedTime+x2)
    // camera.position.y = Math.random() * (2-0)+ 0
   
}

particlesGeometry.attributes.position.needsUpdate = true
particlesGeometry2.attributes.position.needsUpdate = true

// camera.position.x = Math.random() * (3-2)+ 2



    controls.update()

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()