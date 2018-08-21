<template>
  <v-container fluid>
    <v-layout column align-center>
      <v-flex xs12>
            <v-breadcrumbs divider="/">
              <v-breadcrumbs-item
                v-for="item in breadcrumbs"
                :key="item.text"
                :disabled="item.disabled"
                :to="item.to"
              >
                {{ item.text }}
              </v-breadcrumbs-item>
            </v-breadcrumbs>
      </v-flex>
      <v-flex xs12 sm6>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>{{ current.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card>
          <v-card-title>
            <div style="max-height: 200px; overflow: auto;">{{current}}</div>
          </v-card-title>

          <v-list two-line avatar>
            <template v-for="card in cards">
              <v-list-tile
                :key="card.id"
                :to="card.link"
                :title="JSON.stringify(card.data)"
              >
                <v-list-tile-avatar>
                  <img :src="cardImage(card)" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-text="card.title"></v-list-tile-title>
                  <v-list-tile-sub-title>{{card.data}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

const rootUrl = 'http://localhost:5000/api/v1.0/generate/'

export default {
  name: 'Generated',
  data: () => ({
    uri: rootUrl + 'multiverse',
    current: {
      title: 'UNTITLED'
    },
    breadcrumbs: [],
    cards: []
  }),
  methods: {
    generate (generator) {
      generator = generator || 'multiverse'
      this.breadcrumbs.push({
        text: generator,
        to: '/generate/' + generator,
        disabled: false
      })
      /*
      if (generator) {
        console.log(generator)
        this.uri = rootUrl + generator
      } else {
        this.uri = rootUrl + 'multiverse'
      }
      */
      this.uri = rootUrl + generator

      axios.get(this.uri)
      .then(response => {
        let data = response.data
        let parent = data.result
        let children = parent.children
        console.log(data)
        console.log(parent)
        console.log(children)
        this.current = {
          title: parent.name,
          data: parent
        }
        this.cards = []
        children.forEach((item, id) => {
          let card = {
            id: id,
            title: item.name,
            flex: 6,
            data: item,
            uri: item.uri,
            imagefile: item.imagefile,
            link: '/generate/' + item.generator
          }
          this.cards.push(card)
        })
        this.setFlex()
      })
    },
    setFlex () {
      let row = 12
      let f = 3
      this.cards.forEach(card => {
        // let flex = (Math.floor(Math.random() * (row / f)) + 1) * f
        let flex = f
        card.flex = flex
        row -= flex
        if (row <= 0) row = 12
      })
    },
    cardImage (card) {
      // image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      return '/static/' + card.imagefile
    }
  },
  mounted () {
    this.generate(this.$route.params.generator_id)
  },
  watch: {
    '$route.params.generator_id': function (generator) {
      console.log(this)
      this.generate(generator)
    }
  }
}
</script>

<style scoped>

</style>
