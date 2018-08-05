<template>
  <v-container fluid>
    <v-layout row wrap class="space">
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div class="space-card-title">
              <h3 class="headline mb-0">Space</h3>
            </div>
            <div>Description of the ...</div>
          </v-card-title>

          <v-card-media
            src="/static/back/space-back.jpg"
            height="1000px"
          >
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
          </v-card-media>

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
  background-image: url("/static/back/space-back.jpg");
  text-align: center;
}
.space-card-title {
  width: 100%;
}
.clusters {
  position: relative;
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
}
</style>
