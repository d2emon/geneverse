<template>
  <canvas ref="starfield" />
</template>

<script>
export default {
  name: 'Starfield',
  props: {
    stars: Array,
    width: { type: Number, default: 400 },
    height: { type: Number, default: 400 },
    depth: { type: Number, default: 400 },
    starSize: { type: Number, default: 1 },
    starStyle: { type: String, default: '#ffffff' },
    initialPos: { type: Number, default: 0 },
    animate: { type: Boolean, default: false },
    speed: { type: Number, default: 50 },
    interval: { type: Number, default: 100 }
  },
  data: () => ({
    canvas: null,
    context: null,

    pos: 0
  }),
  methods: {
    projectStar (star) {
      let x0 = this.width / 2
      let y0 = this.height / 2
      let distance = star.z - this.pos
      if (distance <= 0) distance += this.depth
      let modifier = 1 - distance / this.depth

      return {
        x: star.x * modifier + x0,
        y: star.y * modifier + y0,
        size: this.starSize * modifier
      }
    },
    draw () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.context.fillStyle = this.starStyle
      this.stars.forEach(star => {
        let projection = this.projectStar(star)
        if (projection.size < 0) return

        this.context.beginPath()
        this.context.arc(projection.x, projection.y, projection.size, 0, 180)
        this.context.fill()
      })
    },
    move () {
      this.pos += this.speed
      if (this.pos >= this.depth) this.pos = this.initialPos
      this.draw()
    }
  },
  watch: {
    width: function (value) { this.canvas.width = value },
    height: function (value) { this.canvas.height = value },
    stars: function (value) { this.draw() }
  },
  mounted () {
    this.canvas = this.$refs.starfield
    this.context = this.canvas.getContext('2d')

    this.canvas.width = this.width
    this.canvas.height = this.height

    this.pos = this.initialPos

    this.draw()

    setInterval(() => {
      if (!this.animate) return
      this.move()
    }, this.interval)
  },
  updated () {
    this.draw()
  }
}
</script>

<style scoped>

</style>
