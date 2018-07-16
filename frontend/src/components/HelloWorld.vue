<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 sm6 offset-sm3>
          <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{ current.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card>
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
                      :src="card.src"
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
                    <div>
                      {{card.data}}
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="cardClick(card)">
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
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    uri: 'http://localhost:5000/api/v1.0/generate/multiverse',
    current: {
      title: 'UNTITLED'
    },
    cards: [
      { id: 0, title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { id: 1, title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { id: 2, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
    ]
  }),
  methods: {
    generate () {
      axios.get(this.uri)
      .then(response => {
        let data = response.data
        let parent = data.result
        let children = parent.children
        console.log(data)
        console.log(parent)
        console.log(children)
        this.current = {
          title: parent.name
        }
        this.cards = []
        children.forEach((item, id) => {
          this.cards.push({
            id: id,
            title: item.name,
            src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            flex: 6,
            data: item,
            uri: item.uri
          })
        })
      })
    },
    cardClick (card) {
      console.log('Card Clicked', card)
      this.uri = card.uri
      this.generate()
    }
  },
  mounted () {
    this.generate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
