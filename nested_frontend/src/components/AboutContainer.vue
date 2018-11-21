<template>
  <v-card>
    <v-card-text>
      <h1>Outfit creator</h1>
      <p>This outfit creator will let you mix and match a variety of clothing pieces, which can be used to create uniforms, outfits, casual dress, and all sorts of other costumes. The style is mostly fantasy/sci-fi-esque, but a lot of it will depend both on how you interpret the images, and on how you might paint or color them. Different materials will have different results, obviously.</p>

      <h2>Instructions</h2>
      <p>To create an outfit, all you have to do is click on the images in the tool below. Simply pick whether you want a male or female model, then click on the various pieces you'd like, and you're all done.<br />
            You can swap between the male and female model without losing the outfit, the clothing pieces will automatically be converted to the other versions.</p>

      <h2>Saving and loading</h2>
      <p>You can save up to 4 outfits locally in your browser. Simply use the save and load buttons down below. You can safely close your browser, and come back another time. The outfits will still be there. This only works if you don't use incognito mode, and only if you use a modern browser (so no IE7 for example).</p>

      <h2>Saving the image</h2>
      <p>If you'd like to save the entire outfit as an image, all you have to do is click the 'Turn to image' button. A new image will appear, this one is a single image, rather than a bunch of separate images. This image can be saved by right clicking it, and then selecting 'Save image as..'.</p>
    </v-card-text>

    <v-card-media>
    <div class="imgContFull">
      <div class="imgFull">
        <img style="box-shadow: none;" src="https://rollforfantasy.com/images/backgrounds/clothingCreatorExample.png" alt="Painted Outfit Examples" />
      </div>
    </div>
    </v-card-media>
  </v-card>

</template>

<script>
export default {
  name: 'AboutContainer'
}
</script>

<style scoped>
.imgContFull{
	clear: both;
	margin: 25px 0;
}
.imgContRight{
	float: right;
	margin: 15px 0 0 25px;
}
.imgContLeft{
	float: left;
	margin: 15px 25px 0 0;
}
.imgFull{
	text-align: center;
}
.imgFull img{
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	box-shadow: 0 0 5px 0 #000;
	overflow: hidden;
	max-width: 100%;
}
</style>
