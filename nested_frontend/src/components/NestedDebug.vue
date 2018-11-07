<template>
  <div id="debug">
    <div v-for="(text, id) in debug" :key="id">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedDebug',
  computed: {
    debug () { return this.$store.state.debug.debug }
  }
}
</script>

<style scoped>

</style>
