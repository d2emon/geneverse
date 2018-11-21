<template>
  <div>
  <v-layout>
    <v-flex xs4>
      <AboutContainer />
    </v-flex>
    <v-flex xs8>
      <ContentContainer />
    </v-flex>
    <v-flex xs4>
      <v-card>
        <Doll />
      </v-card>
    </v-flex>
	</v-layout>
  </div>
</template>

<script>
import ContentContainer from '../components/ContentContainer'
import Doll from '../components/Doll'
import AboutContainer from '../components/AboutContainer'

export default {
  name: 'DollView',
  components: {
    AboutContainer,
    Doll,
    ContentContainer,
  }
}
</script>

<style scoped>
</style>
