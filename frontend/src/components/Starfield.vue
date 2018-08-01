<template>
  <canvas ref="starfield" />
</template>

<script>
export default {
  name: 'Starfield',
  props: [
    'stars',
    'width',
    'height'
  ],
  data: () => ({
    context: null
  }),
  methods: {
    projectStar (star) {
      /*
      const starSize = (star) => {
        let z = star.z - this.pos
        // if (z < 0) return 0
        if (z < 0) z += 600
        return 8 * (1 - z / this.width)
      }
      */
      // let z = star.z - this.pos
      // if (z < 0) z += 600

      // let sx = star.x * 600 / z + this.width / 2
      // let sy = star.y * 600 / z + this.height / 2

      // let sx = star.x + this.width / 2
      // let sy = star.y + this.height / 2

      // console.log(star.z, z, this.pos)
      // console.log(star.x, sx)
      // console.log(star.y, sy)
      // console.log(starSize(star))

      console.log(8 * (star.z / 600))
      return {
        x: star.x + 300,
        y: star.y + 300,
        size: 8 // * (star.z / 600)
      }
    },
    draw () {
      this.context.fillStyle = '#000000'
      this.context.fillRect(0, 0, this.width, this.height)

      this.context.fillStyle = '#ffffff'

      console.log(this)
      console.log(this.stars)
      this.stars.forEach(star => {
        console.log(star)

        let projection = this.projectStar(star)
        this.context.beginPath()
        this.context.arc(projection.x, projection.y, projection.size, 0, 180)
        this.context.fill()
      })
    }
  },
  mounted () {
    this.context = this.$refs.starfield.getContext('2d')
    this.$refs.starfield.width = this.width
    this.$refs.starfield.height = this.height

    // this.pos = 0
    // this.draw()
  },
  update () {
    this.draw()
  }

}
</script>

<style scoped>

</style>
