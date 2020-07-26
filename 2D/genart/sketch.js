const canvasSketch = require('canvas-sketch')
const {lerp} = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')
const palettes = require('nice-color-palettes')

random.setSeed(random.getRandomSeed())

const settings = {
  // suffix: random.getSeed(),
  dimensions: [2048, 2048],
}

const sketch = () => {
  const colorCount = random.rangeFloor(2, 6)
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount)

  // Points of the grid

  const createGrid = () => {
    const points = []
    const count = 40
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        // top left (0, 0)
        // bottom left (1, 1)
        const u = count <= 1 ? 0.5 : x / (count - 1) // Between 0 and 1 || go to all the way
        const v = count <= 1 ? 0.5 : y / (count - 1) // Between 0 and 1 || go to all the way
        const radius = Math.abs(random.noise2D(u, v) * 0.35) // Horizontal and vertical coordinate
        points.push({
          color: random.pick(palette),
          radius,
          rotation: random.noise2D(u, v),
          position: [u, v],
        })
      }
    }
    return points
  }

  // random.setSeed('512') // Deterministic randomness
  const points = createGrid().filter(() => random.value() > 0.5)
  const margin = 200

  return ({context, width, height}) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)

    points.forEach((data) => {
      const {radius, position, color, rotation} = data

      const [u, v] = position

      const x = lerp(margin, width - margin, u)
      const y = lerp(margin, height - margin, v)

      // context.beginPath()
      // context.arc(x, y, radius * width, 0, Math.PI * 2, false)
      // context.strokeStyle = 'black'
      // context.lineWidth = 20
      // context.fillStyle = color
      // context.fill()

      context.save()
      context.fillStyle = color
      context.font = `${radius * width}px "Helvetica"`
      context.translate(x, y)
      context.rotate(rotation) // degree; rotate from the grid coordinate
      context.fillText('-', 0, 0)

      context.restore()
    })
  }
}

canvasSketch(sketch, settings)
