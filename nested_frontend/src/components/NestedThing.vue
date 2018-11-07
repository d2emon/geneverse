<template>
  <div id="div0" class="thing">
    <div v-if="thing.children.length">
      <a @click="toggle(thing.n)" style="padding-right:8px;" :alt="`archetype : ${thing.type.name}`" title="`archetype : ${thing.type.name}`">
        <span class="arrow" :id="`arrow${thing.n}`">{{arrowText}}</span> {{thing.name}}
      </a>
      <div :id="`container${thing.n}`" class="thing" :style="displayContainer ? 'display: block;' : 'display: none;'">
        <div id="div1">thing</div>
        <div id="div2">thing</div>
        <div id="div3">thing</div>
        <div id="div4">thing</div>
        <div id="div5">thing</div>
        <div id="div6">thing</div>
        <div id="div7">thing</div>
        <div id="div8">thing</div>
        <div id="div9">thing</div>
        <div id="div10">thing</div>
        <div v-for="(child, id) in thing.children" :key="id" :id="`div${child.n}`"><NestedThing :thing="{ display: 0, type: {}, children: [], id: 1, name: child.name }" /></div>
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
    displayContainer: false,
    arrowText: '+',
  }),
  methods: {
    toggle (thingId) {
      //if (instances[thingId].display === 0) {
      if (!this.thing.display) {
        this.thing.children.forEach(child => {
          if (!child.grown) {
            // Instances[what].children[i].Grow(0);
            // Instances[what].children[i].List(0);
          }
        })
        // instances[thingId].display = 1
        this.thing.display = true
        this.displayContainer = true
        this.arrowText = '-'
      //} else if (instances[thingId].display === 1) {
      } else {
        //instances[thingId].display = 0
        this.thing.display = false
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
