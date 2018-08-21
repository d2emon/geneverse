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
        <div class="universes">
          <ClusterMap
            v-if="cluster.location"
            :x="cluster.location.x"
            :y="cluster.location.y"
            :size="cluster.size"
            :id="cluster.id"
            :cluster="cluster"
            :galaxies="galaxies"
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
import ClusterMap from '../components/ClusterMap'

export default {
  name: 'SuperclusterPage',
  components: {
    Universe,
    ClusterMap
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
