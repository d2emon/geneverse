<template>
  <div
    class="galaxy"
    :style="style"
  >
    <router-link
      :to="link"
      :title="JSON.stringify({id: id, galaxy: galaxy})"
    >
      <img
        :src="image"
      /><br />
      <span class="galaxy-title">{{ galaxy.name }}</span>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'Galaxy',
  props: [
    'x',
    'y',
    'id',
    'galaxy'
  ],
  computed: {
    style () { return `left:${this.x}px;top:${this.y}px;` },
    image () { return `http://localhost:5000/space/galaxy-img-${Math.round(this.galaxy.radius)}s${this.galaxy.id}.png?${Math.random()}` },
    link () { return `/space/galaxy/${this.galaxy.id}` }
  }
}
</script>

<style scoped>
.galaxy {
  position: absolute;
}
.galaxy a {
  color: white;
  text-decoration: none;
}
</style>
