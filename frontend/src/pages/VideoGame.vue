<template>
  <div class="body">
    <div class="seed">
      <v-text-field label="Seed" placeholder="Seed" v-model="seed" />
    </div>
    <v-btn @click="sanity = !sanity" class="sanity">{{ sanity ? 'Insane' : 'Sane' }}</v-btn>
    <div :class="sanity ? 'sane' : 'insane'">
      <h1><a @click="generate" :class="sanity ? 'sane' : 'insane'">{{str}}</a></h1>
      <div class="log" v-html="log" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGame',
  computed: {
    str () { return this.$store.state.game.game },
    log () { return this.$store.state.game.log }
  },
  data: () => ({
    seed: '.',
    toggle: false,
    sanity: true
  }),
  methods: {
    seedinput (seedValue) {
      if (seedValue && seedValue.charAt(0) !== '.') {
        this.seed = seedValue
      } else {
        seedValue = this.seed
      }
    },
    toggleSanity () {
      this.sanity = !this.toggle
    },
    generate () {
      this.$store.dispatch('game/generate', this.sanity)
    }
  },
  created: function () {
    this.seed = this.$store.state.game.seed
    this.toggleSanity()
    this.generate()
  }
}
</script>

<style scoped>
.body {
	font-family: Georgia,serif;
}
.sane {
	background: #000000;
	color: #ffffff;
  height: 100%;
}
.insane {
	background: #000000;
	color: #ff0000;
  height: 100%;
}
a {
	color:#333333;
	text-decoration:none;
	outline:none;
	transition: text-shadow 0.5s;
	-moz-transition: text-shadow 0.5s; /* Firefox 4 */
	-webkit-transition: text-shadow 0.5s; /* Safari and Chrome */
	-o-transition: text-shadow 0.5s; /* Opera */
}
a:hover {
	color:#ffffff;
	text-shadow:0px 0px 4px #999999;
}
a.insane:hover {
	color:#ffffff;
	text-shadow:0px 0px 4px #ffffff,2px -2px 2px #600,-2px 2px 2px #000066;
}

.log
{
	float:left;
	display:inline-block;
	overflow:hidden;
	width:240px;
	height:24px;
	background:#333;
	border:1px solid #666;
	color:transparent;
	font-family:Tahoma,sans-serif;
	padding:0px;
	font-size:10px;
	transition: width 0.5s, height 0.5s, color 0.5s;
	-moz-transition: width 0.5s, height 0.5s, color 0.5s; /* Firefox 4 */
	-webkit-transition: width 0.5s, height 0.5s, color 0.5s; /* Safari and Chrome */
	-o-transition: width 0.5s, height 0.5s, color 0.5s; /* Opera */
}
.log:hover {
	width:240px;
	height:240px;
	overflow-y:scroll;
	color:#ffffff;
}
.log:before {
  display:block;
  content:'Log';
  color:#ffffff;
  padding:4px 4px 6px 4px;
  width:32px;
  text-align:center;
}
.log div {
  margin:0px;
  padding:2px 6px;
}
.log div:nth-child(odd) {
  background:#222222;
}
</style>
