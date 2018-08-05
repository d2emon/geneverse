<template>
  <div
    class="cluster"
    :style="`left:${x}px;top:${y}px;`"
  >
    <router-link :to="link">
      <img
        :src="`http://localhost:5000/empty-img-32-${id}.png?${Math.random()}`"
        :title="JSON.stringify({id: id, cluster: cluster})"
      />
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
  data: () => ({
    link: '/generate/supercluster'
  })
}
</script>

<style scoped>
.cluster {
  position: absolute;
}
</style>
