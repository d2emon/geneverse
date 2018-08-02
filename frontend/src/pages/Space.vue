<template>
  <v-container fluid>
    <h1>Space</h1>
    <div class="star-field" ref="space" @click="play">
      <Starfield
        :stars="this.stars"
        :width="this.width"
        :height="this.height"
        :depth="this.depth"
        :starSize="4"
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
  computed: {
    stars () { return this.$store.state.stars.stars }
  },
  data: () => ({
    width: 400,
    height: 400,
    depth: 1000,

    animating: false
  }),
  methods: {
    play () { this.animating = !this.animating }
  },
  mounted () {
    this.$store.dispatch('stars/load', { count: 500 })
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
