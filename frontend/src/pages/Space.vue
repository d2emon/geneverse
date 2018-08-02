<template>
  <v-container fluid>
    <h1>Space</h1>
    <div class="star-field" ref="space" @click="play">
      <Starfield
        :stars="this.stars"
        :width="this.width"
        :height="this.height"
        :depth="this.depth"
        :animate="this.animating"
      />
    </div>
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
    width: 400,
    height: 400,
    depth: 1000,

    spaceWidth: 2000,
    spaceHeight: 2000,
    spaceDepth: 2000,

    stars: [],
    animating: false
  }),
  methods: {
    Star () {
      let width = this.spaceWidth
      let height = this.spaceHeight
      let depth = this.spaceDepth
      return {
        x: Math.floor(Math.random() * width - (width / 2)),
        y: Math.floor(Math.random() * height - (height / 2)),
        z: Math.floor(Math.random() * depth - (depth / 2))
      }
    },
    play () {
      this.animating = !this.animating
    }
  },
  mounted () {
    this.stars.splice(0, this.stars.length)
    for (let i = 0; i < 200; i++) {
      this.stars.push(this.Star())
    }

    console.log(this.$refs.space.offsetWidth)
    this.width = this.$refs.space.offsetWidth
  }
}
</script>

<style scoped>
.star-field {
  width: 100%;
  height: 400px;
  background-color: black;
  text-align: center;
}
</style>
