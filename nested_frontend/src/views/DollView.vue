<template>
  <div>
  <v-layout>
    <v-flex xs8>
      <ContentContainer />
    </v-flex>
	</v-layout>
  </div>
</template>

<script>
import ContentContainer from '../components/ContentContainer'

export default {
  name: 'DollView',
  components: {
    ContentContainer,
  }
}
</script>

<style scoped>
</style>
