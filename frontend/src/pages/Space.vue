<template>
  <v-container fluid>
    <v-layout row wrap>
      <router-view />
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
