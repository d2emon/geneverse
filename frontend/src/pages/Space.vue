<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs4>
        <Multiverse
          :name="multiverse.name"
          :description="multiverse.description"
          :universes="multiverse.universes"
          :multiverse="multiverse"
        />
      </v-flex>
    </v-layout>
    <div>
    </div>
  </v-container>
</template>

<script>
import Multiverse from '../components/Multiverse'

export default {
  name: 'Space',
  components: {
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
</style>
