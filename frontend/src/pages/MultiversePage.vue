<template>
  <v-flex xs4>
    <Multiverse
      :name="multiverse.name"
      :description="multiverse.description"
      :universes="universes"
      :multiverse="multiverse"
    />
  </v-flex>
</template>

<script>
import Multiverse from '../components/Multiverse'

export default {
  name: 'MultiversePage',
  components: {
    Multiverse
  },
  computed: {
    multiverse () { return this.$store.state.stars.multiverse },
    universes () { return this.$store.state.stars.universes }
  },
  mounted () {
    this.$store.dispatch('stars/loadMultiverse', {
      id: this.$route.params.id
    })
    // this.$store.dispatch('stars/loadUniverses')
  }
}
</script>

<style scoped>

</style>
