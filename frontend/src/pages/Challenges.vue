<template>
  <v-container fluid>
    <v-layout row wrap class="space">
      <v-flex xs12>
        <h1>Space</h1>
      </v-flex>
      <v-flex xs12>
        <div class="clusters">
          <img src="http://localhost:5000/space/img-1024.png" />
          <div
            v-for="(cluster, i) in clusters"
            :key="'cluster-' + i"
            :style="'position: absolute; left:' + cluster.x + 'px;top:' + cluster.y + 'px;opacity: 0.5;'"
          >
            <router-link to="/generate/supercluster">
              <img
                src="http://localhost:5000/img-16.png"
                :title="JSON.stringify({id: i, cluster: cluster})"
              />
            </router-link>
          </div>
        </div>
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
import Starfield from '@/components/challenges/Starfield'
import MengerSponge from '@/components/challenges/MengerSponge'

export default {
  name: 'Challenges',
  components: {
    Starfield,
    MengerSponge
  },
  computed: {
    stars () { return this.$store.state.stars.stars },
    clusters () { return this.$store.state.stars.clusters }
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
    /*
    let rect = this.$refs.space.getBoundingClientRect()
    this.$refs.filter.style.top = rect.top
    this.$refs.filter.style.left = rect.left
    this.$refs.filter.style.width = this.height
    this.$refs.filter.style.height = this.height
    */

    this.$store.dispatch('stars/loadClusters')
  }
}
</script>

<style scoped>
.space h1 {
  /* text-align: center; */
  color: #ffffff;
}
.star-field {
  width: 100%;
  /* background-color: black; */
}
/*
.filter-image {
  position: absolute;
  z-index: 100;
  opacity: 0.5;
}
*/
.space {
  background-color: #000000;
  background-image: url("/static/back/space-back.jpg");
  background-repeat: repeat;
  text-align: center;
}
.clusters {
  position: relative;
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
}
</style>
