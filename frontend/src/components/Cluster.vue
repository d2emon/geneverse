<template>
  <div
    class="cluster"
    :style="style"
  >
    <router-link
      :to="link"
      :title="JSON.stringify({id: id, cluster: cluster})"
    >
      <img
        :src="image"
      /><br />
      <span class="cluster-title">{{ cluster.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Cluster',
  props: [
    'x',
    'y',
    'id',
    'cluster'
  ],
  computed: {
    style () { return `left:${this.x}px;top:${this.y}px;` },
    image () { return `http://localhost:5000/space/cluster-img-${Math.round(this.cluster.size * 10)}s${this.cluster.id}.png?${Math.random()}` },
    link () { return `/space/supercluster/${this.cluster.id}` }
  }
}
</script>

<style scoped>
.cluster {
  position: absolute;
}
.cluster a {
  color: white;
  text-decoration: none;
}
</style>
