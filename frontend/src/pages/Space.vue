<template>
  <v-container fluid>
    <h1>Space</h1>
    <canvas ref="space" @click="play" />
    <hr />
    <Starfield :stars="this.stars" :width="this.width" :height="this.height" />
  </v-container>
</template>

<script>
import Starfield from '@/components/Starfield'

export default {
  name: 'Space',
  components: {
    Starfield
  },
  data: () => ({
    width: 600,
    height: 600,

    stars: [],
    pos: 0,

    animating: false,

    context: null
  }),
  methods: {
    Star () {
      let width = this.width
      let height = this.height
      let depth = this.width
      return {
        x: Math.floor(Math.random() * width - (width / 2)),
        y: Math.floor(Math.random() * height - (height / 2)),
        z: Math.floor(Math.random() * depth)
      }
    },
    draw () {
      this.stars.forEach(star => {
        this.context.beginPath()
        this.context.arc(star.x + 300, star.y + 300, 4, 0, 180)
        this.context.fill()
      })
    },
    play () {
      this.animating = !this.animating

      setInterval(() => {
        if (!this.animating) return

        this.draw()

        this.pos += 10
        if (this.pos >= 600) {
          this.pos = 0
          this.animating = false
        }
      }, 50)
    }
  },
  mounted () {
    this.context = this.$refs.space.getContext('2d')
    this.$refs.space.width = this.width
    this.$refs.space.height = this.height

    this.stars = []
    for (let i = 0; i < 100; i++) {
      this.stars.push(this.Star())
    }

    this.pos = 0
    this.draw()
  }
}
</script>

<style scoped>

</style>
