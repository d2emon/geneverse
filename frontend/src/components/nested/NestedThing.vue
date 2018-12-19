<template>
  <div id="div0" class="thing">
    <a
      @click="toggle(thing.n)"
      style="padding-right:8px;"
      :alt="`archetype : ${thing.type.name}`"
      :title="`archetype : ${thing.type.name}`"
    >
      <span class="arrow" :id="`arrow${thing.n}`">{{arrowText}}</span> {{thing.name}}
    </a>
    <div
      v-if="thing.children && thing.children.length"
      :id="`container${thing.n}`"
      class="thing"
      :style="displayContainer ? 'display: block;' : 'display: none;'"
    >
      <div
        v-for="(child, id) in thing.children"
        :key="id"
        :id="`div${child.n}`"
      >
        <NestedThing :thing="child" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedThing',
  props: [
    'thing'
  ],
  data: () => ({
    display: false,
    displayContainer: false,
    arrowText: '+'
  }),
  methods: {
    toggle (thingId) {
      if (!this.display) {
        this.$store.dispatch('nested/grow', this.thing)
        this.thing.children.forEach(child => {
          this.$store.commit('nested/setName', child)
          // this.$store.dispatch('nested/grow', child)
        })
        this.display = true
        this.displayContainer = true
        this.arrowText = '-'
      } else {
        this.display = false
        this.displayContainer = false
        this.arrowText = '+'
      }
    }
  }
}
/*
  var addStyle="";
  //special-case pictures
  if (this.name=="sharkverse") addStyle="background-image:url('nestedSharkverse.png');";
  else if (this.name=="baconverse") addStyle="background-image:url('nestedBaconverse.png');";
  else if (this.name=="doughnutverse") addStyle="background-image:url('nestedDoughnutverse.png');";
  else if (this.name=="lasagnaverse") addStyle="background-image:url('nestedLasagnaverse.png');";
 */
</script>

<style scoped>

</style>
