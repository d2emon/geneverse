<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="space">
          <v-card-title primary-title>
            <div class="space-card-title">
              <h3 class="headline mb-0">Space</h3>
            </div>
            <div>Description of the ...</div>
          </v-card-title>

          <div>{{JSON.stringify(multiverse)}}</div>
          <div class="clusters">
            <Cluster
              v-for="(cluster, i) in clusters"
              :key="'cluster-' + i"
              :x="cluster.x"
              :y="cluster.y"
              :id="i"
              :cluster="cluster"
            />
          </div>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div>
    </div>
  </v-container>
</template>

<script>
import Cluster from '../components/Cluster'

export default {
  name: 'Universe',
  components: {
    Cluster
  },
  computed: {
    multiverse () { return this.$store.state.stars.multiverse },
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
    this.$store.dispatch('stars/loadMultiverse')
    this.$store.dispatch('stars/loadStars', { count: 500 })
    this.$store.dispatch('stars/loadClusters')
  }
}
</script>

<style scoped>
.space {
  background-color: #000000;
  /* background-image: url("/static/back/space-back.jpg"); */
  text-align: center;
  position: relative;
  color: white;
}
.space-card-title {
  width: 100%;
}
.universes {
  position: relative;
  height: 512px;
  width: 512px;
  margin: 0 auto;
}
.clusters {
  position: relative;
  height: 1032px;
  width: 1032px;
  margin: 0 auto;
}
</style>
