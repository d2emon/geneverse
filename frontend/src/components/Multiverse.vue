<template>
<v-card>
  <v-card-title primary-title>
    <div class="headline">{{name}}</div>
  </v-card-title>
  <v-card-text>
    Description of the {{name}}
  </v-card-text>
  <div>Universes: {{JSON.stringify(universes)}}</div>
</v-card>
</template>

<script>
export default {
  name: 'Multiverse',
  props: [
    'name',
    'universes'
  ],
  data: () => ({
    link: '/generate/universe'
  })
}

</script>

<style scoped>

</style>
