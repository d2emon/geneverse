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

          <div class="clusters">
            <div
              v-for="(cluster, i) in clusters"
              :key="'cluster-' + i"
              :style="'position: absolute; left:' + cluster.x + 'px;top:' + cluster.y + 'px;'"
            >
              <router-link to="/generate/supercluster">
                <img
                  :src="'http://localhost:5000/empty-img-32-' + i + '.png?' + Math.random()"
                  :title="JSON.stringify({id: i, cluster: cluster})"
                />
              </router-link>
            </div>
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
export default {
  name: 'Space',
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
.clusters {
  position: relative;
  height: 1032px;
  width: 1032px;
  margin: 0 auto;
}
</style>
