<template>
  <div :class="selected">
    <HelloWorld />

    <NestedNav />
    <NestedThing :thing="{ display: 0, type: {}, children: [ {n: 100, name: 'Child'} ], id: 0, name: 'universe' }"/>
    <NestedThing :thing="{ display: 0, type: {}, children: [ {n: 101, name: 'Child'}, {n: 102, name: 'Child'} ], id: 10, name: 'universe' }"/>
    <NestedThing :thing="{ display: 0, type: {}, children: [], id: 1, name: 'universe1' }"/>
    <NestedDebug />

    <h3>nestedscript.js</h3>

    <div>
      LaunchNest(SeedObject.toLowerCase());
    </div>
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
    selected () { return this.$store.state.styles.selected }
  },
  data: () => ({
    SeedObject: 'universe', //This can be set to anything else, like "firefighter" or "donut box".
    Offline: 0
  }),
  mounted () {
    this.$store.commit('debug/debug', 'Building...')

    // CleanThings();

    // //CheckMissingThings();
    // //alert("There are "+ThingsN+" thing archetypes.");

    // document.getElementById("debug").innerHTML="";
    this.$store.commit('debug/debug', '<div id="div0" class="thing"></div>')

    /*
function LaunchNest(what)
{
	if (!Things[what]) what="error";
	var Seed=Make(what);
	Seed.Grow(0);
	Seed.List();
}

     */
  }
}
</script>

<style scoped>

</style>
