<template>
  <v-card>
		<div class="contentContainer">
			<div id="armorContainer">
        <v-toolbar>
          <v-btn-toggle id="gender" mandatory>
            <v-btn v-for="gender in Object.keys(genders)" :key="gender" class="genderSlct" :id="gender" @click="setGender(gender)">{{genders[gender]}}</v-btn>
          </v-btn-toggle>
          <v-divider vertical class="mx-2" />
          <v-btn-toggle  class="slctnLeft" v-model="clothGroup" mandatory>
            <v-btn v-for="item in Object.keys(cloths)" :key="item" class="selection" :id="item">{{cloths[item]}}</v-btn>
          </v-btn-toggle>
        </v-toolbar>

				<div id="slctLeft">
          <v-btn flat class="armBg" @click="selectCloth(clothGroup, '')">Remove</v-btn>
          <v-btn flat v-for="item in lists[cloth]" :key="item" :id="item" class="armBg" @click="selectCloth(clothGroup, item)">
            <img width="48 px" :src="`https://rollforfantasy.com/images/clothing/n${genderId}/${item}.png`" />
          </v-btn>
				</div>

        <Doll
          :scarf="outfit.scarfs"
          :jacket="outfit.jackets"
          :gloves="outfit.gloves"
          :belt="outfit.belts"
          :shirt="outfit.shirts"
          :shoes="outfit.shoes"
          :skirt="outfit.skirts"
          :pants="outfit.pants"
          :gender="genderId"
        />

				<v-toolbar id="saveButtons">
					<v-btn class="armControl" id="clearAll" @click="clearAll">Clear All</v-btn>
					<v-btn-toggle class="saveBtn ma-2" v-for="id in [1, 2, 3, 4]" :key="id">
            <v-btn :id="`save${id}`" :name="`save${id}`" @click="save(id)">Save {{id}}</v-btn>
            <v-btn class="loadBtn" :id="`load${id}`" :name="`save${id}`" @click="load(id)">Load {{id}}</v-btn>
					</v-btn-toggle>
				</v-toolbar>
			</div>
		</div>
  </v-card>
</template>

<script>
import Doll from './Doll'
export default {
  name: 'ContentContainer',
  components: {Doll},
  computed: {
    scarfs: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`scarf${i + 1}`)
      return res
    },
    jackets: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`jacket${i + 1}`)
      return res
    },
    shirts: () => {
      const res = []
      for (let i = 0; i < 60; i++) res.push(`shirt${i + 1}`)
      return res
    },
    pants: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`pants${i + 1}`)
      return res
    },
    shoes: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`shoes${i + 1}`)
      return res
    },
    skirts: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`skirt${i + 1}`)
      return res
    },
    belts: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`belt${i + 1}`)
      return res
    },
    gloves: () => {
      const res = []
      for (let i = 0; i < 30; i++) res.push(`gloves${i + 1}`)
      return res
    },
    lists () {
      return {
        jackets: this.jackets,
        shirts: this.shirts,
        shirts2: this.shirts2,
        pants: this.pants,
        skirts: this.skirts,
        shoes: this.shoes,
        scarfs: this.scarfs,
        belts: this.belts,
        gloves: this.gloves
      }
    },
    cloth () { return Object.keys(this.cloths)[this.clothGroup] }
  },
  data: () => ({
    genders: {
      male: 'Male',
      female: 'Female'
    },
    cloths: {
      jackets: 'Jackets',
      shirts: 'Shirts',
      pants: 'Pants',
      skirts: 'Skirts',
      shoes: 'Shoes',
      scarfs: 'Scarfs',
      belts: 'Belts',
      gloves: 'Gloves'
    },
    outfit: {
      scarfs: '',
      jackets: '',
      shirts: '',
      pants: '',
      belts: '',
      gloves: '',
      shoes: '',
      skirts: ''
    },
    clothGroup: 0,
    genderId: 'male'
  }),
  methods: {
    setGender (genderId) {
      this.genderId = genderId
    },
    clearAll () {
      // this.genderId = ''
      this.outfit.scarfs = ''
      this.outfit.jackets = ''
      this.outfit.shirts = ''
      this.outfit.pants = ''
      this.outfit.gloves = ''
      this.outfit.shoes = ''
      this.outfit.skirts = ''
      this.outfit.belts = ''
    },
    selectCloth (clothGroup, item) {
      this.outfit[this.cloth] = item
      console.log(clothGroup, this.cloth, item, this.outfit)
    },
    save (slotId) {
      console.log('save', slotId)
      /*
      var nm = $(this).attr("name");
      window.localStorage.setItem('outfitSaved' + nm, $("#armor").html());
       */
    },
    load (slotId) {
      console.log('load', slotId)
      /*
      var nm = $(this).attr("name");
      $("#armor").html(window.localStorage["outfitSaved" + nm]);
       */
    }
  }
}
</script>

<style scoped>
.armBg, .armBgs{
  /*
	background-size: cover;
	border: 1px solid #ff9900;
	float: left;
	width: 48px;
	*/
	height: 50px;
}
.armBg img{
	width: 48px;
	/* max-height: 50px; */
}

.genderSlct p, .selection p{
	color: #ff9900;
}
.slctdType p, .slctdGender p, .activeTitleLeft p{
	color: #ffffff;
}

#slctLeft {
  /* height: 300px; */
}
</style>
