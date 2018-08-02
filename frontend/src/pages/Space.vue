<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Space</h1>
      </v-flex>
      <v-flex xs6 ref="space">
        <div class="star-field" @click="play">
            <Starfield
              style="width: 100%; height: 100%;"
              :stars="this.stars"
              :depth="this.depth"
              :starSize="4"
              :animate="this.animating"
            />
        </div>
      </v-flex>
      <v-flex xs6>
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

    animating: false
  }),
  methods: {
    play () { this.animating = !this.animating }
  },
  mounted () {
    this.$store.dispatch('stars/load', { count: 500 })
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.star-field {
  height: 400px;
  background-color: black;
  text-align: center;
}
</style>
