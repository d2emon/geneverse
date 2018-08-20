<template>
  <div
    class="universe"
    :style="`background-image: url(http://localhost:5000/space/img-512s${universe.id}.png?${Math.random()});`"
    :title="JSON.stringify({id: id, universe: universe})"
  >
    <Cluster
      v-for="(cluster, i) in clusters"
      :key="'cluster-' + i"
      :x="cluster.location.x"
      :y="cluster.location.y"
      :id="i"
      :cluster="cluster"
    />
  </div>
</template>

<script>
import Cluster from '../components/Cluster'

export default {
  name: 'Universe',
  components: {
    Cluster
  },
  props: [
    'x',
    'y',
    'size',
    'id',
    'universe',
    'clusters'
  ],
  data: () => ({
    link: '/generate/universe'
  })
}
</script>

<style scoped>
.universe {
  position: relative;
  height: 512px;
  width: 512px;
  margin: 0 auto;
}
</style>
