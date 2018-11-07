<template>
  <div :class="selected">
    <HelloWorld />

    <NestedNav />
    <NestedThing v-if="instance" :thing="instance" />
    <NestedDebug />

    <h3>nestedscript.js</h3>

  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import NestedNav from './NestedNav'
import NestedDebug from './NestedDebug'
import NestedThing from './NestedThing'

export default {
  name: 'Nested',
  components: {
    HelloWorld,
    NestedNav,
    NestedDebug,
    NestedThing
  },
  computed: {
    selected () { return this.$store.state.styles.selected },
    instances () { return this.$store.state.nested.instances },
    instance () { return this.$store.state.nested.instances[0] }
  },
  data: () => ({
    seedObject: 'universe', // This can be set to anything else, like "firefighter" or "donut box".
    Offline: 0
  }),
  mounted () {
    this.$store.commit('debug/debug', 'Building...')

    // CleanThings();

    // // CheckMissingThings();
    // // alert("There are "+ThingsN+" thing archetypes.");

    this.$store.commit('debug/debug', '<div id="div0" class="thing"></div>')
    this.$store.dispatch('nested/launchNest', this.seedObject.toLowerCase())

    console.log(this.instances)
    console.log(this.instances[0])
    console.log(this.instance)
  }
}
</script>

<style scoped>

</style>
