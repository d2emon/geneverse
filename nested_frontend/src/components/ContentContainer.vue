<template>
  <v-card>
		<div class="contentContainer">
			<div id="armorContainer">
				<v-btn-toggle id="gender">
          <v-btn v-for="gender in Object.keys(genders)" :key="gender" class="genderSlct" :id="gender">{{genders[gender]}}</v-btn>
				</v-btn-toggle>
				<div id="slctLeft">
          <v-btn-toggle  class="slctnLeft" v-model="clothGroup">
            <v-btn v-for="cloth in Object.keys(cloths)" :key="cloth" class="selection" :id="cloth">{{cloths[cloth]}}</v-btn>
          </v-btn-toggle>
					<div class="slctContLeft">
						<div :id="`${Object.keys(cloths)[clothGroup]}Bg`" class="slctBgs activeContLeft">
              {{clothGroup}}::{{Object.keys(cloths)[clothGroup]}}
              <div v-for="item in lists.scarfs" :key="item" :id="item" class="armBg" :style="`background-image: url('https://rollforfantasy.com/images/clothing/nmale/${item}.png');`"></div>
						</div>
					</div>
				</div>
				<div id="armor">
					<section class="armorPieces">
								<div class="armPiece" id="scarfArm"></div>
								<div class="armPiece" id="jacketArm"></div>
								<div class="armPiece" id="gloveArm"></div>
								<div class="armPiece" id="beltArm"></div>
								<div class="armPiece" id="shirtArm"></div>
								<div class="armPiece" id="shoesArm"></div>
								<div class="armPiece" id="skirtArm"></div>
								<div class="armPiece" id="pantsArm"></div>
								<div class="armPiece" id="gndArm"></div>
								<div class="armPiece" id="bshoesArm"></div>
								<div class="armPiece" id="bskirtArm"></div>
								<div class="armPiece" id="bshirtArm"></div>
								<div class="armPiece" id="bjacketArm"></div>
					</section>
				</div>
				<div id="saveButtons" style="width: 600px; margin: 0 auto; float: none;">
								<div class="saveBtn">
									<input type="button" value="Save 1" id="save1" name="save1" />
									<input class="loadBtn" type="button" value="Load 1" id="load1" name="save1" />
								</div>
								<div class="saveBtn">
									<input type="button" value="Save 2" id="save2" name="save2" />
									<input class="loadBtn" type="button" value="Load 2" id="load2" name="save2" />
								</div>
								<div class="saveBtn">
									<input type="button" value="Save 3" id="save3" name="save3" />
									<input class="loadBtn" type="button" value="Load 3" id="load3" name="save3" />
								</div>
								<div class="saveBtn">
									<input type="button" value="Save 4" id="save4" name="save4" />
									<input class="loadBtn" type="button" value="Load 4" id="load4" name="save4" />
								</div>
				</div>
				<div id="canvasCont" style="width: 600px; margin: 0 auto; float: none;">
								<div class="armControl">
									<input type="button" value="Clear All" id="clearAll" />
								</div>
								<canvas id="canvas" width="600" height="400"></canvas>
								<div class="canvasControl">
									<input type="button" value="Turn to image" id="toPic" />
								</div>
				</div>
			</div>
		</div>
  </v-card>
</template>

<script>
export default {
  name: 'ContentContainer',
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
      for (let i = 0; i < 30; i++) res.push(`shirt${i + 1}`)
      return res
    },
    shirts2: () => {
      const res = []
      for (let i = 30; i < 60; i++) res.push(`shirt${i + 1}`)
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
  },
  data() {
    return {
      genders: {
        male: 'Male',
        female: 'Female'
      },
      cloths: {
        jackets: 'Jackets',
        shirts: 'Shirts',
        shirts2: 'Shirts 2',
        pants: 'Pants',
        skirts: 'Skirts',
        shoes: 'Shoes',
        scarfs: 'Scarfs',
        belts: 'Belts',
        gloves: 'Gloves'
      },
      clothGroup: 0,
      lists: {
        jackets: this.jackets,
        shirts: this.shirts,
        shirts2: this.shirts2,
        pants: this.pants,
        skirts: this.skirts,
        shoes: this.shoes,
        scarfs: this.scarfs,
        belts: this.belts,
        gloves: this.gloves,
      }
    }
  }
}
</script>

<style scoped>
.armBg, .armBgs{
	background-size: cover;
	border: 1px solid #ff9900;
	float: left;
	height: 48px;
	width: 48px;
}
</style>
