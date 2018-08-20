<template>
  <v-flex xs6>
    <v-card dark class="space">
      <v-card-title primary-title>
        <div class="space-card-title">
          <h3 class="headline mb-0" v-text="universe.name" />
        </div>
        <div v-text="universe.description" />
        <div>{{JSON.stringify(universe)}}</div>
      </v-card-title>

      <v-card-text>
        <div class="universes" :style="`background-image: url(http://localhost:5000/space/img-512s${universe.id}.png?${Math.random()});`">
          <Universe
            :x="universe.x * 64"
            :y="universe.y * 64"
            :size="64"
            :id="universe.id"
            :universe="universe"
            :clusters="clusters"
          />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Universe from '../components/Universe'

export default {
  name: 'UniversePage',
  components: {
    Universe
  },
  computed: {
    universe () { return this.$store.state.stars.universe },
    // stars () { return this.$store.state.stars.stars },
    clusters () { return this.$store.state.stars.clusters }
  },
  mounted () {
    this.$store.dispatch('stars/loadUniverse', {
      id: this.$route.params.id
    })
    // this.$store.dispatch('stars/loadClusters')
  }
}
</script>

<style scoped>
.space {
  background-color: #000000;
  background-image: url("/static/back/space-back.jpg");
  text-align: center;
  position: relative;
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
  height: 512px;
  width: 512px;
  margin: 0 auto;
}
</style>
