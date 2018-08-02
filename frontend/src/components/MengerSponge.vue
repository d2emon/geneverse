<template>
  <canvas ref="menger" />
</template>

<script>
export default {
  name: 'MengerSponge',
  props: {
    size: Number,
    iterations: { type: Number, default: 4 },
    cellStyle: { type: String, default: '#000000' }
  },
  data: () => ({
    canvas: null,
    context: null
  }),
  methods: {
    sponge (x, y, size, iteration) {
      if (iteration <= 0) return
      let d = size / 3
      if (d < 1) return
      this.context.fillStyle = this.cellStyle
      this.context.fillRect(x, y, size, size)
      for (let i = 0; i < size; i += d) {
        for (let j = 0; j < size; j += d) {
          if ((i === d) && (j === d)) {
            this.context.clearRect(x + i, y + j, d, d)
            continue
          }
          this.sponge(x + i, y + j, d, iteration - 1)
        }
      }
    },
    draw () {
      this.canvas.height = this.canvas.width
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      let size = this.size || this.canvas.width
      this.sponge(0, 0, size, this.iterations)
    }
  },
  watch: {
    size: function (value) {
      this.canvas.width = value
      this.draw()
    }
  },
  mounted () {
    this.canvas = this.$refs.menger
    this.context = this.canvas.getContext('2d')

    if (this.size) this.canvas.width = this.size

    this.draw()
  },
  updated () {
    this.draw()
  }
}
</script>

<style scoped>

</style>
