<template>
<v-card dark class="space">
  <v-card-title primary-title>
    <div class="headline" v-text="name" />
  </v-card-title>
  <v-card-text>
    {{description}}
  </v-card-text>

  <v-list one-line>
    <template v-for="universe in universes">
      <v-list-tile
        :key="universe.id"
        :to="'/space/universe/' + universe.id"
        :title="JSON.stringify(universe)"
      >
        <v-list-tile-content>
          <v-list-tile-title v-text="universe.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>

  <v-card-actions>
    <v-btn flat>Share</v-btn>
    <v-btn flat>Explore</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import Universe from './Universe'

export default {
  name: 'Multiverse',
  props: [
    'multiverse',
    'name',
    'description',
    'universes'
  ],
  components: {
    Universe
  },
  data: () => ({
    link: '/generate/universe'
  })
}
</script>

<style scoped>
.space {
  background: #000000 url("/static/back/space-back.jpg") repeat;
  /* text-align: center; */
  /* position: relative; */
  /* width: 512px; */
}
.v-list {
  background-color: transparent;
}
.universes {
  position: relative;
  height: 512px;
  width: 512px;
  margin: 0 auto;
}
</style>
