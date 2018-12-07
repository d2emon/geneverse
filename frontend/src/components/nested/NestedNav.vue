<template>
  <div id="header" class="nav">
    <h1>Nested</h1>
    <span id="madeby"> © <a href="http://orteil.dashnet.org/">Orteil</a>, 2011-2013 - hosted by <a href="http://dashnet.org/">DashNet</a></span>
    <div id="styles">
      <a v-for="(style, id) in styles" :key="id" @click="setStyle(id)" :style="`background-color:${style.color};`">-</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedNav',
  computed: {
    styles () { return this.$store.state.styles.styles }
  },
  methods: {
    setStyle (styleId) {
      const style = this.styles[styleId].style
      if (style) {
        this.$store.commit('styles/setSelected', style)
      }
    }
  }
}
</script>

<style scoped>
</style>
