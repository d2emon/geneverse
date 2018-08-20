<template>
  <div
    class="universe"
    :style="`left:${x}px;top:${y}px;`"
  >
    <router-link :to="link">
      <img
        :src="`http://localhost:5000/space/img-512s${universe.id}.png?${Math.random()}`"
        :title="JSON.stringify({id: id, universe: universe})"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Universe',
  props: [
    'x',
    'y',
    'size',
    'id',
    'universe'
  ],
  data: () => ({
    link: '/generate/universe'
  })
}
</script>

<style scoped>
.universe {
  position: absolute;
}
</style>
