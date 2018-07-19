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

                    <v-container
                        fluid
                        grid-list-md
                    >
                        <v-layout row wrap>
                            <v-flex
                                v-for="card in cards"
                                v-bind="{ [`xs${card.flex}`]: true }"
                                :key="card.id"
                            >
                                <v-card>
                                    <v-card-media
                                        :src="cardImage(card)"
                                        height="200px"
                                    >
                                        <v-container
                                            fill-height
                                            fluid
                                            pa-2
                                        >
                                            <v-layout fill-height>
                                                <v-flex xs12 align-end flexbox>
                                                    <span class="headline white--text" v-text="card.title"></span>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-media>
                                    <v-card-title>
                                        <h3 class="headline" xs12>{{card.title}}</h3>
                                        <v-flex xs12 style="overflow: auto;">
                                            {{card.data}}
                                        </v-flex>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn flat :to="card.link">Go</v-btn>
                                        <v-btn flat @click="cardClick(card)">Enter</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon>favorite</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon>bookmark</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon>share</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
        let flex = (Math.floor(Math.random() * (row / f)) + 1) * f
        card.flex = flex
        row -= flex
        if (row <= 0) row = 12
      })
    },
    cardImage (card) {
      // image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      return '/static/' + card.imagefile
    },
    cardClick (card) {
      console.log('Card Clicked', card)
      this.uri = card.uri
      this.generate()
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
