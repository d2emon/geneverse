<template>
  <div id="div0" class="thing">
    <div v-if="thing.children && thing.children.length">
      <a @click="toggle(thing.n)" style="padding-right:8px;" :alt="`archetype : ${thing.type.name}`" title="`archetype : ${thing.type.name}`">
        <span class="arrow" :id="`arrow${thing.n}`">{{arrowText}}</span> {{thing.name}}
      </a>
      <div :id="`container${thing.n}`" class="thing" :style="displayContainer ? 'display: block;' : 'display: none;'">
        <div v-for="(child, id) in thing.children" :key="id" :id="`div${child.n}`"><NestedThing :thing="child" /></div>
      </div>
    </div>
    <div v-else>
      <span class="emptyThing">{{thing.name}}</span>
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
    arrowText: '+',
  }),
  methods: {
    toggle (thingId) {
      //if (instances[thingId].display === 0) {
      if (!this.display) {
        this.thing.children.forEach(child => {
          this.$store.dispatch('nested/grow', child)
        })
        // instances[thingId].display = 1
        this.display = true
        this.displayContainer = true
        this.arrowText = '-'
      //} else if (instances[thingId].display === 1) {
      } else {
        //instances[thingId].display = 0
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
