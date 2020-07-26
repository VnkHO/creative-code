global.THREE = require('three')

const canvasSketch = require('canvas-sketch')
const random = require('canvas-sketch-util/random')
const palettes = require('nice-color-palettes')
const eases = require('eases')
const BezierEasing = require('bezier-easing')

const settings = {
  animate: true,
  dimensions: [1024, 1280],
  // dimensions: [512, 512],
  fps: 24,
  duration: 4,
  // Get a WebGL canvas rather than 2D
  context: 'webgl',
  // Turn on MSAA
  attributes: {antialias: true},
}

const sketch = ({context, width, height}) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    context,
  })

  // WebGL background color
  renderer.setClearColor('hsl(0, 0%, 90%)', 1)

  // Setup a camera, we will update its settings on resize
  const camera = new THREE.OrthographicCamera()

  // Setup your scene
  const scene = new THREE.Scene()

  const colorCount = random.rangeFloor(2, 6)
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount)

  // Re-use the same Geometry across all our cubes
  const geometry = new THREE.BoxGeometry(1, 1, 1)

  // Basic "unlit" material with no depth

  // Create the mesh
  for (let i = 0; i < 40; i++) {
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({color: random.pick(palette)}),
    )
    // Smaller cube
    mesh.scale.setScalar(0.5)

    // 2D - TOP LEFT --> 0; 0 || BOTTOM LEFT --> height; width of the screen
    // 3D --> `Virtual world` with these arbitrary coordinates.
    // Better to think it about of it in terms of real world units like (cm, meters, inches, ...)
    // So let's say we want everything in our virtual world to be in meters and then we specify an origin and everything is relative to that origin.
    // So for example the center is 0, 0, 0.
    mesh.position.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1),
    )

    mesh.scale.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1),
    )

    mesh.scale.multiplyScalar(0.5) // Function that will multiply the x, y and z by the same number value that you give it
    // Then add the group to the scene
    scene.add(mesh)
  }

  scene.add(new THREE.AmbientLight('hsl(0, 0, 20%'))

  // Pass a color, and intensity
  const light = new THREE.DirectionalLight('white', 1)
  light.position.set(0, 0, 4)
  scene.add(light)

  const easeFn = BezierEasing(0.25, 0.54, 0.95, 0.17)

  // draw each frame
  return {
    // Handle resize events here
    resize({pixelRatio, viewportWidth, viewportHeight}) {
      renderer.setPixelRatio(pixelRatio)
      renderer.setSize(viewportWidth, viewportHeight)

      // Setup an isometric perspective
      const aspect = viewportWidth / viewportHeight
      const zoom = 1.85
      camera.left = -zoom * aspect
      camera.right = zoom * aspect
      camera.top = zoom
      camera.bottom = -zoom
      camera.near = -100
      camera.far = 100
      camera.position.set(zoom, zoom, zoom)
      camera.lookAt(new THREE.Vector3())

      // Update camera properties
      camera.updateProjectionMatrix()
    },
    // And render events here
    render({playhead}) {
      const t = Math.sin(playhead * Math.PI)
      scene.rotation. = easeFn(t)
      // Draw scene with our camera
      renderer.render(scene, camera)
    },
    // Dispose of WebGL context (optional)
    unload() {
      renderer.dispose()
    },
  }
}

canvasSketch(sketch, settings)
