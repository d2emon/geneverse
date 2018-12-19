<template>
  <div>
    <NestedNav />
    <NestedThing v-if="instance" :thing="instance" />
  </div>
</template>

<script>
import NestedNav from '../components/nested/NestedNav'
import NestedThing from '../components/nested/NestedThing'

export default {
  name: 'NestedItem',
  components: {
    NestedNav,
    NestedThing
  },
  computed: {
    instance () { return this.$store.state.nested.instances[this.instanceId] }
  },
  data: () => ({
    item: '',
    instanceId: 0
  }),
  mounted () {
    this.$store.dispatch('nested/cleanThings')

    this.item = this.$route.params.item
    this.$store.dispatch('nested/launchNest', this.item.toLowerCase())
  },
  watch: {
    '$route' (to, from) {
      this.item = to.params.item
      this.$store.dispatch('nested/launchNest', this.item.toLowerCase())
      this.instanceId = this.$store.state.nested.instances.length - 1
      this.$store.dispatch('nested/grow', this.instance)
      this.instance.children.forEach(child => {
        this.$store.commit('nested/setName', child)
      })
    }
  }
}
</script>

<style scoped>
.nested {
  margin-top: 50px;
}
</style>
