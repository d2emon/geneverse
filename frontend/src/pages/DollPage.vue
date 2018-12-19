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
import ContentContainer from '../components/nested/ContentContainer'

export default {
  name: 'DollPage',
  components: {
    ContentContainer
  }
}
</script>

<style scoped>
</style>
