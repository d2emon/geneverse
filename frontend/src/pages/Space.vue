<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Space</h1>
      </v-flex>
      <v-flex xs6 @click="play" ref="space">
        <Starfield
          class="star-field"
          :stars="this.stars"
          :height="this.height"
          :depth="this.depth"
          :star-size="4"
          :animate="this.animating"
        />
      </v-flex>
      <v-flex xs6 ref="sponge">
        <MengerSponge
           style="width: 100%;"
           :iterations="16"
        />
      </v-flex>
    </v-layout>
    <div>
    </div>
  </v-container>
</template>

<script>
import Starfield from '@/components/Starfield'
import MengerSponge from '@/components/MengerSponge'

export default {
  name: 'Space',
  components: {
    Starfield,
    MengerSponge
  },
  computed: {
    stars () { return this.$store.state.stars.stars }
  },
  data: () => ({
    depth: 1000,
    height: null,

    animating: false
  }),
  methods: {
    play () { this.animating = !this.animating }
  },
  mounted () {
    this.$store.dispatch('stars/load', { count: 500 })
    console.log(this.$refs.space)
    this.height = this.$refs.space.offsetWidth
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.star-field {
  width: 100%;
  background-color: black;
}
</style>
