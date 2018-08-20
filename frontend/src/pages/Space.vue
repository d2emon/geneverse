<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="space">
          <v-card-title primary-title>
            <div class="space-card-title">
              <h3 class="headline mb-0" v-text="multiverse.name" />
            </div>
            <div>Description of the {{multiverse.name}}</div>
          </v-card-title>

          <Multiverse
            :name="multiverse.name"
            :universes="multiverse.universes"
          />

          <div class="universes">
            <Universe
              v-for="(universe, i) in multiverse.universes"
              :key="'universe-' + i"
              :x="universe.x * 64"
              :y="universe.y * 64"
              :size="64"
              :id="i"
              :universe="universe"
            />
          </div>
          <div>{{JSON.stringify(multiverse)}}</div>

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
import Multiverse from '../components/Multiverse'
import Universe from '../components/Universe'

export default {
  name: 'Space',
  components: {
    Universe,
    Multiverse
  },
  computed: {
    multiverse () { return this.$store.state.stars.multiverse }
  },
  mounted () {
    this.$store.dispatch('stars/loadMultiverse')
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
  width: 512px;
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
</style>
