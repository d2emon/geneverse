<template>
  <div>
    <section class="armor armorPieces">
  		<div class="armPiece" id="scarfArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.scarf}.png&quot;);`"></div>
	  	<div class="armPiece" id="jacketArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.jacket}.png&quot;);`"></div>
		  <div class="armPiece" id="gloveArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.gloves}.png&quot;);`"></div>
			<div class="armPiece" id="beltArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.belt}.png&quot;);`"></div>
			<div class="armPiece" id="shirtArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.shirt}.png&quot;);`"></div>
			<div class="armPiece" id="shoesArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.shoes}.png&quot;);`"></div>
			<div class="armPiece" id="skirtArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.skirt}.png&quot;);`"></div>
			<div class="armPiece" id="pantsArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/${this.pants}.png&quot;);`"></div>
			<div class="armPiece" id="gndArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/armor/${gender}/body.png&quot;);`"></div>
			<div class="armPiece" id="bshoesArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/b${this.shoes}.png&quot;);`"></div>
			<div class="armPiece" id="bskirtArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/b${this.skirt}.png&quot;);`"></div>
			<div class="armPiece" id="bshirtArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/b${this.shirt}.png&quot;);`"></div>
			<div class="armPiece" id="bjacketArm" :style="`background-image: url(&quot;https://rollforfantasy.com/images/clothing/n${gender}/b${this.jacket}.png&quot;);`"></div>
    </section>
		<div id="canvasCont" style="width: 600px; margin: 0 auto; float: none;">
			<canvas id="canvas" width="600" height="400"></canvas>
			<v-btn class="canvasControl" id="toPic" @click="toImage">Turn to image</v-btn>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Doll',
  props: [
    'gender',
    'scarf',
    'jacket',
    'shirt',
    'pants',
    'shoes',
    'gloves',
    'belt',
    'skirt'
  ],
  methods: {
    toImage () {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')

      context.clearRect(0, 0, canvas.width, canvas.height)
      // $("#canvas").css({"display": "inline"});
      /*
      $($(".armPiece").get().reverse()).each(function(){
        imgTop = $(this).css("margin-top").replace('px','');
        imgLeft = $(this).css("margin-left").replace('px','');
        imgWd = $(this).css("width").replace('px','');
        imgHt = $(this).css("height").replace('px','');
        var img = new Image();
        img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
        context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
      });
       */
    }
  }
}
</script>

<style scoped>
.armor, #canvas{
	height: 400px;
	width: 600px;
}
#canvas{
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	display: none;
	margin-top: 15px;
}
#scarfArm, #gloveArm, #jacketArm, #shirtArm, #shoesArm, #pantsArm, #bshoesArm, #bshirtArm, #bjacketArm, #gndArm, #skirtArm, #bskirtArm, #beltArm{
	background-repeat: no-repeat;
	height: 500px;
	position: absolute;
	width: 200px;
	z-index: 2;
}
#beltsBg div{
	background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
}
#gndArm{
	height: 400px;
	margin: 0 0 0 200px;
	z-index: 5;
}
#scarfArm{
	height: 106px;
	margin: 78px 0 0 253px;
	width: 95px;
	z-index: 13;
}
#beltArm{
	height: 37px;
	margin: 182px 0 0 257px;
	width: 86px;
	z-index: 10;
}
#skirtArm{
	height: 178px;
	margin: 182px 0 0 249px;
	width: 102px;
	z-index: 8;
}
#bskirtArm{
	height: 172px;
	margin: 189px 0 0 254px;
	width: 92px;
	z-index: 3;
}
#jacketArm{
	height: 203px;
	margin: 77px 0 0 222px;
	width: 155px;
	z-index: 12;
}
#shirtArm{
	height: 178px;
	margin: 92px 0 0 231px;
	width: 136px;
	z-index: 9;
}
#pantsArm{
	height: 175px;
	margin: 182px 0 0 257px;
	width: 85px;
	z-index: 6;
}
#shoesArm{
	height: 66px;
	margin: 322px 0 0 245px;
	width: 109px;
	z-index: 7;
}
#gloveArm{
	height: 48px;
	margin: 180px 0 0 229px;
	width: 142px;
	z-index: 11;
}
#bjacketArm{
	height: 227px;
	margin: 77px 0 0 249px;
	width: 102px;
	z-index: 1;
}
#bshoesArm{
	height: 39px;
	margin: 322px 0 0 255px;
	width: 89px;
	z-index: 4;
}
#bshirtArm{
	height: 234px;
	margin: 92px 0 0 237px;
	width: 126px;
	z-index: 2;
}
.canvasControl{
	margin: 0 auto;
	text-align: center;
}
</style>
