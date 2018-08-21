<template>
  <div
    class="cluster"
    :style="style"
    :title="JSON.stringify({id: id, universe: cluster})"
  >
    <Galaxy
      v-for="(galaxy, i) in galaxies"
      :key="'galaxy-' + i"
      :x="galaxy.location.x * 20"
      :y="galaxy.location.y * 20"
      :id="i"
      :galaxy="galaxy"
    />
  </div>

</template>

<script>
import Galaxy from '../components/Galaxy'

export default {
  name: 'ClusterMap',
  components: {
    Galaxy
  },
  props: [
    'x',
    'y',
    'size',
    'id',
    'cluster',
    'galaxies'
  ],
  computed: {
    style () { return `height:${this.size * 200}px;width:${this.size * 200}px;background-image: url(http://localhost:5000/space/img-${this.size * 200}s${this.id}.png?${Math.random()});` },
    // image () { return `http://localhost:5000/space/galaxy-img-${Math.round(this.galaxy.radius * 10)}s${this.galaxy.id}.png?${Math.random()}` },
    // link () { return `/space/galaxy/${this.galaxy.id}` }
  },
  data: () => ({
    link: '/generate/galaxy'
  })
}
</script>

<style scoped>
.cluster {
  position: relative;
  margin: 0 auto;
}
</style>
