<template>
  <v-flex xs6>
    <v-card dark class="space">
      <v-card-title primary-title>
        <div class="space-card-title">
          <h3 class="headline mb-0" v-text="cluster.name" />
        </div>
        <div v-text="cluster.description" />
        <div>{{JSON.stringify(cluster)}}</div>
      </v-card-title>

      <v-card-text>
        <div class="universes" :style="`background-image: url(http://localhost:5000/space/img-512s${cluster.id}.png?${Math.random()});`">
          <Universe
            :x="cluster.x * 64"
            :y="cluster.y * 64"
            :size="64"
            :id="cluster.id"
            :universe="cluster"
            :clusters="galaxies"
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
  name: 'SuperclusterPage',
  components: {
    Universe
  },
  computed: {
    cluster () { return this.$store.state.stars.cluster },
    galaxies () { return this.$store.state.stars.galaxies }
  },
  mounted () {
    this.$store.dispatch('stars/loadCluster', {
      id: this.$route.params.id
    })
  }
}
</script>

<style scoped>

</style>
