<template>
    <section class="armorPieces">
				<div class="armPiece" id="scarfArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/scarf2.png&quot;);"></div>
				<div class="armPiece" id="jacketArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/jacket1.png&quot;);"></div>
				<div class="armPiece" id="gloveArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/gloves29.png&quot;);"></div>
				<div class="armPiece" id="beltArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/belt2.png&quot;);"></div>
				<div class="armPiece" id="shirtArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/shirt50.png&quot;);"></div>
				<div class="armPiece" id="shoesArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/shoes9.png&quot;);"></div>
				<div class="armPiece" id="skirtArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/skirt24.png&quot;);"></div>
				<div class="armPiece" id="pantsArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/.png&quot;);"></div>
				<div class="armPiece" id="gndArm" style="background-image: url(&quot;https://rollforfantasy.com/images/armor/female/body.png&quot;);"></div>
				<div class="armPiece" id="bshoesArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/bshoes9.png&quot;);"></div>
				<div class="armPiece" id="bskirtArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/bskirt24.png&quot;);"></div>
				<div class="armPiece" id="bshirtArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/bshirt50.png&quot;);"></div>
				<div class="armPiece" id="bjacketArm" style="background-image: url(&quot;https://rollforfantasy.com/images/clothing/nfemale/bjacket1.png&quot;);"></div>
    </section>
</template>

<script>
  /*
	var gnd = "male";
	var scarf = "";
	var jacket = "";
	var shirt = "";
	var pants = "";
	var shoes = "";
	var gloves = "";
	var belt = "";
	var skirt = "";

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	$(".selection").click(function(){
		var slct = $(this).attr('id');
		$('.slctnLeft > .selection').removeClass('activeTitleLeft');
		$(this).addClass('activeTitleLeft');
		$('.slctContLeft > .slctBgs').removeClass('activeContLeft');
		$("#" + slct + 'Bg').addClass('activeContLeft');
	});
	$("#load1, #load2, #load3, #load4").click(function(){
		var nm = $(this).attr("name");
		$("#armor").html(window.localStorage["outfitSaved" + nm]);
	});
	$("#save1, #save2, #save3, #save4").click(function(){
		var nm = $(this).attr("name");
		window.localStorage.setItem('outfitSaved' + nm, $("#armor").html());
	});
	$(".genderSlct").click(function(){
		gnd = $(this).attr('id');
		$('#gender > .genderSlct').removeClass('slctdGender');
		$(this).addClass('slctdGender');

		$("#gndArm").css("background-image", "url('../images/armor/" + gnd + "/body.png')");
		$(".armBg").each(function(i, obj){
			var curId = $(this).attr('id');
			var newUrl = "url('../images/clothing/n" + gnd + "/" + curId + ".png')";
			$(this).css("background-image", newUrl);
		});
		$("#scarfArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + scarf + ".png')");
		$("#gloveArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + gloves + ".png')");
		$("#jacketArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + jacket + ".png')");
		$("#shirtArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + shirt + ".png')");
		$("#shirtArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + shirt + ".png')");
		$("#shoesArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + shoes + ".png')");
		$("#pantsArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + pants + ".png')");
		$("#skirtArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + skirt + ".png')");
		$("#beltArm").css("background-image", "url('../images/clothing/n" + gnd + "/" + belt + ".png')");
		$("#bshoesArm").css("background-image", "url('../images/clothing/n" + gnd + "/b" + shoes + ".png')");
		$("#bshirtArm").css("background-image", "url('../images/clothing/n" + gnd + "/b" + shirt + ".png')");
		$("#bjacketArm").css("background-image", "url('../images/clothing/n" + gnd + "/b" + jacket + ".png')");
	});
	$("#clearAll").click(function(){
		$(".armPiece").css('background-image', 'none');
		$('.genderSlct').removeClass('slctdGender');
		scarf = "";
		jacket = "";
		shirt = "";
		pants = "";
		gloves = "";
		shoes = "";
		skirt = "";
	});
	$("#scarfsBg > .armBg").click(function(){
		nscarf = $(this).attr('id');
		if(nscarf === scarf){
			$("#scarfArm").css('background-image', 'none');
			scarf = "";
		}else{
			var slct = $(this).css('background-image');
			$("#scarfArm").css({"background-image": slct});
			scarf = nscarf;
		}
	});
	$("#jacketsBg > .armBg").click(function(){
		njacket = $(this).attr('id');
		if(njacket === jacket){
			$("#jacketArm, #bjacketArm").css('background-image', 'none');
			jacket = "";
		}else{
			var slct = $(this).css('background-image');
			$("#jacketArm").css({"background-image": slct});
			$("#bjacketArm").css({"background-image": "url('../images/clothing/n" + gnd + "/b" + njacket + ".png')"});
			jacket = njacket;
		}
	});
	$("#shirtsBg > .armBg, #shirts2Bg > .armBg").click(function(){
		nshirt = $(this).attr('id');
		if(nshirt === shirt){
			$("#shirtArm, #bshirtArm").css('background-image', 'none');
			shirt = "";
		}else{
			var slct = $(this).css('background-image');
			$("#shirtArm").css({"background-image": slct});
			$("#bshirtArm").css({"background-image": "url('../images/clothing/n" + gnd + "/b" + nshirt + ".png')"});
			shirt = nshirt;
		}
	});
	$("#skirtsBg > .armBg").click(function(){
		nskirt = $(this).attr('id');
		if(nskirt === skirt){
			$("#skirtArm, #bskirtArm").css('background-image', 'none');
			skirt = "";
		}else{
			var slct = $(this).css('background-image');
			$("#skirtArm").css({"background-image": slct});
			$("#bskirtArm").css({"background-image": "url('../images/clothing/n" + gnd + "/b" + nskirt + ".png')"});
			skirt = nskirt;
		}
	});
	$("#pantsBg > .armBg").click(function(){
		npants = $(this).attr('id');
		if(npants === pants){
			$("#pantsArm").css('background-image', 'none');
			pants = "";
		}else{
			var slct = $(this).css('background-image');
			$("#pantsArm").css({"background-image": slct});
			pants = npants;
		}
	});
	$("#shoesBg > .armBg").click(function(){
		nshoes = $(this).attr('id');
		if(nshoes === shoes){
			$("#shoesArm, #bshoesArm").css('background-image', 'none');
			shoes = "";
		}else{
			var slct = $(this).css('background-image');
			$("#shoesArm").css({"background-image": slct});
			$("#bshoesArm").css({"background-image": "url('../images/clothing/n" + gnd + "/b" + nshoes + ".png')"});
			shoes = nshoes;
		}
	});
	$("#glovesBg > .armBg").click(function(){
		ngloves = $(this).attr('id');
		if(ngloves === gloves){
			$("#gloveArm").css('background-image', 'none');
			gloves = "";
		}else{
			var slct = $(this).css('background-image');
			$("#gloveArm").css({"background-image": slct});
			gloves = ngloves;
		}
	});
	$("#beltsBg > .armBg").click(function(){
		nbelt = $(this).attr('id');
		if(nbelt === belt){
			$("#beltArm").css('background-image', 'none');
			belt = "";
		}else{
			var slct = $(this).css('background-image');
			$("#beltArm").css({"background-image": slct});
			belt = nbelt;
		}
	});
	$("#toPic").click(function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		$("#canvas").css({"display": "inline"});
		$($(".armPiece").get().reverse()).each(function(){
			imgTop = $(this).css("margin-top").replace('px','');
			imgLeft = $(this).css("margin-left").replace('px','');
			imgWd = $(this).css("width").replace('px','');
			imgHt = $(this).css("height").replace('px','');
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
		});
	});

   */
    export default {
        name: "Doll"
    }
</script>

<style scoped>
#armorContainer{
	border: 1px solid #ff9900;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	-moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	color: #ff9900;
	font-size: 120%;
	height: auto;
	margin: 0 auto;
	overflow: hidden;
	text-align: center;
	width: 600px;
}
#armorType, #gender, #armorControls, #saveButtons{
	border-bottom: 1px solid #ff9900;
	float: left;
	height: 50px;
	width: 100%;
}
#slctLeft, #slctRight, #armor{
	float: left;
}
#armor, #canvas{
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	background-color: #ffffff;
	border: 1px solid #ff9900;
	border-bottom: none;
	height: 400px;
	width: 600px;
}
#canvas{
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	display: none;
	margin-top: 15px;
}
.armorSlct, .genderSlct, .slctnRight, .slctnLeft, .slctContRight, .slctContLeft, .selectionRight, .selection, .cloakSepOne, .cloakSepTwo{
	float: left;
	width: 100%;
}
.genderSlct, .armorSlct{
	height: 50px;
	width: 50%;
}
.armorSlct{
	width: 33%;
}
.armorSlct p, .genderSlct p, .selectionRight p, .selection p{
	margin-top: 14px;
}
.selection{
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	border: 1px solid #ff9900;
	border-right: none;
	font-size: 90%;
	height: 48px;
	width: 33.3333333333%;
}
.slctContRight, .slctContLeft{
	background-color: #ffffff;
}
#scarfsBg, #jacketsBg, #shirtsBg, #pantsBg, #shoesBg, #glovesBg, #shirts2Bg, #skirtsBg, #beltsBg{
	display: none;
}
.activeTitleLeft, .activeTitleRight, .slctdGender, .slctdType{
	color: #ffffff;
}
.activeContLeft, .activeContRight{
	display: block!important;
}
.armBg, .armBgs{
	background-size: cover;
	border: 1px solid #ff9900;
	float: left;
	height: 48px;
	width: 48px;
}
#shldLeftBg .armBg{
	transform: scale(-1, 1);
	-webkit-transform: scale(-1, 1);
	-moz-transform: scale(-1, 1);
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
.armControl{
	float: left;
	width: 33%;
}
.canvasControl{
	margin: 0 auto;
	text-align: center;
}
.saveBtn{
	float: left;
	width: 25%;
}
#toPic{
	margin-bottom: 10px;
	position: relative;
	z-index: 9999;
}
.armControl input, .saveBtn input, .canvasControl input{
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	-moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
	background-color: transparent;
	border: 1px solid #ff9900;
	color: #ff9900;
	font-size: 79%;
	height: 25px;
	margin-top: 13px;
}
/* clothing bg2 */
/*
#scarf1{background-image: url('../images/clothing/nmale/scarf1.png');}
#scarf2{background-image: url('../images/clothing/nmale/scarf2.png');}
#scarf3{background-image: url('../images/clothing/nmale/scarf3.png');}
#scarf4{background-image: url('../images/clothing/nmale/scarf4.png');}
#scarf5{background-image: url('../images/clothing/nmale/scarf5.png');}
#scarf6{background-image: url('../images/clothing/nmale/scarf6.png');}
#scarf7{background-image: url('../images/clothing/nmale/scarf7.png');}
#scarf8{background-image: url('../images/clothing/nmale/scarf8.png');}
#scarf9{background-image: url('../images/clothing/nmale/scarf9.png');}
#scarf10{background-image: url('../images/clothing/nmale/scarf10.png');}
#scarf11{background-image: url('../images/clothing/nmale/scarf11.png');}
#scarf12{background-image: url('../images/clothing/nmale/scarf12.png');}
#scarf13{background-image: url('../images/clothing/nmale/scarf13.png');}
#scarf14{background-image: url('../images/clothing/nmale/scarf14.png');}
#scarf15{background-image: url('../images/clothing/nmale/scarf15.png');}
#scarf16{background-image: url('../images/clothing/nmale/scarf16.png');}
#scarf17{background-image: url('../images/clothing/nmale/scarf17.png');}
#scarf18{background-image: url('../images/clothing/nmale/scarf18.png');}
#scarf19{background-image: url('../images/clothing/nmale/scarf19.png');}
#scarf20{background-image: url('../images/clothing/nmale/scarf20.png');}
#scarf21{background-image: url('../images/clothing/nmale/scarf21.png');}
#scarf22{background-image: url('../images/clothing/nmale/scarf22.png');}
#scarf23{background-image: url('../images/clothing/nmale/scarf23.png');}
#scarf24{background-image: url('../images/clothing/nmale/scarf24.png');}
#scarf25{background-image: url('../images/clothing/nmale/scarf25.png');}
#scarf26{background-image: url('../images/clothing/nmale/scarf26.png');}
#scarf27{background-image: url('../images/clothing/nmale/scarf27.png');}
#scarf28{background-image: url('../images/clothing/nmale/scarf28.png');}
#scarf29{background-image: url('../images/clothing/nmale/scarf29.png');}
#scarf30{background-image: url('../images/clothing/nmale/scarf30.png');}
#skirt1{background-image: url('../images/clothing/nmale/skirt1.png');}
#skirt2{background-image: url('../images/clothing/nmale/skirt2.png');}
#skirt3{background-image: url('../images/clothing/nmale/skirt3.png');}
#skirt4{background-image: url('../images/clothing/nmale/skirt4.png');}
#skirt5{background-image: url('../images/clothing/nmale/skirt5.png');}
#skirt6{background-image: url('../images/clothing/nmale/skirt6.png');}
#skirt7{background-image: url('../images/clothing/nmale/skirt7.png');}
#skirt8{background-image: url('../images/clothing/nmale/skirt8.png');}
#skirt9{background-image: url('../images/clothing/nmale/skirt9.png');}
#skirt10{background-image: url('../images/clothing/nmale/skirt10.png');}
#skirt11{background-image: url('../images/clothing/nmale/skirt11.png');}
#skirt12{background-image: url('../images/clothing/nmale/skirt12.png');}
#skirt13{background-image: url('../images/clothing/nmale/skirt13.png');}
#skirt14{background-image: url('../images/clothing/nmale/skirt14.png');}
#skirt15{background-image: url('../images/clothing/nmale/skirt15.png');}
#skirt16{background-image: url('../images/clothing/nmale/skirt16.png');}
#skirt17{background-image: url('../images/clothing/nmale/skirt17.png');}
#skirt18{background-image: url('../images/clothing/nmale/skirt18.png');}
#skirt19{background-image: url('../images/clothing/nmale/skirt19.png');}
#skirt20{background-image: url('../images/clothing/nmale/skirt20.png');}
#skirt21{background-image: url('../images/clothing/nmale/skirt21.png');}
#skirt22{background-image: url('../images/clothing/nmale/skirt22.png');}
#skirt23{background-image: url('../images/clothing/nmale/skirt23.png');}
#skirt24{background-image: url('../images/clothing/nmale/skirt24.png');}
#skirt25{background-image: url('../images/clothing/nmale/skirt25.png');}
#skirt26{background-image: url('../images/clothing/nmale/skirt26.png');}
#skirt27{background-image: url('../images/clothing/nmale/skirt27.png');}
#skirt28{background-image: url('../images/clothing/nmale/skirt28.png');}
#skirt29{background-image: url('../images/clothing/nmale/skirt29.png');}
#skirt30{background-image: url('../images/clothing/nmale/skirt30.png');}
#jacket1{background-image: url('../images/clothing/nmale/jacket1.png');}
#jacket2{background-image: url('../images/clothing/nmale/jacket2.png');}
#jacket3{background-image: url('../images/clothing/nmale/jacket3.png');}
#jacket4{background-image: url('../images/clothing/nmale/jacket4.png');}
#jacket5{background-image: url('../images/clothing/nmale/jacket5.png');}
#jacket6{background-image: url('../images/clothing/nmale/jacket6.png');}
#jacket7{background-image: url('../images/clothing/nmale/jacket7.png');}
#jacket8{background-image: url('../images/clothing/nmale/jacket8.png');}
#jacket9{background-image: url('../images/clothing/nmale/jacket9.png');}
#jacket10{background-image: url('../images/clothing/nmale/jacket10.png');}
#jacket11{background-image: url('../images/clothing/nmale/jacket11.png');}
#jacket12{background-image: url('../images/clothing/nmale/jacket12.png');}
#jacket13{background-image: url('../images/clothing/nmale/jacket13.png');}
#jacket14{background-image: url('../images/clothing/nmale/jacket14.png');}
#jacket15{background-image: url('../images/clothing/nmale/jacket15.png');}
#jacket16{background-image: url('../images/clothing/nmale/jacket16.png');}
#jacket17{background-image: url('../images/clothing/nmale/jacket17.png');}
#jacket18{background-image: url('../images/clothing/nmale/jacket18.png');}
#jacket19{background-image: url('../images/clothing/nmale/jacket19.png');}
#jacket20{background-image: url('../images/clothing/nmale/jacket20.png');}
#jacket21{background-image: url('../images/clothing/nmale/jacket21.png');}
#jacket22{background-image: url('../images/clothing/nmale/jacket22.png');}
#jacket23{background-image: url('../images/clothing/nmale/jacket23.png');}
#jacket24{background-image: url('../images/clothing/nmale/jacket24.png');}
#jacket25{background-image: url('../images/clothing/nmale/jacket25.png');}
#jacket26{background-image: url('../images/clothing/nmale/jacket26.png');}
#jacket27{background-image: url('../images/clothing/nmale/jacket27.png');}
#jacket28{background-image: url('../images/clothing/nmale/jacket28.png');}
#jacket29{background-image: url('../images/clothing/nmale/jacket29.png');}
#jacket30{background-image: url('../images/clothing/nmale/jacket30.png');}
#belt1{background-image: url('../images/clothing/nmale/belt1.png');}
#belt2{background-image: url('../images/clothing/nmale/belt2.png');}
#belt3{background-image: url('../images/clothing/nmale/belt3.png');}
#belt4{background-image: url('../images/clothing/nmale/belt4.png');}
#belt5{background-image: url('../images/clothing/nmale/belt5.png');}
#belt6{background-image: url('../images/clothing/nmale/belt6.png');}
#belt7{background-image: url('../images/clothing/nmale/belt7.png');}
#belt8{background-image: url('../images/clothing/nmale/belt8.png');}
#belt9{background-image: url('../images/clothing/nmale/belt9.png');}
#belt10{background-image: url('../images/clothing/nmale/belt10.png');}
#belt11{background-image: url('../images/clothing/nmale/belt11.png');}
#belt12{background-image: url('../images/clothing/nmale/belt12.png');}
#belt13{background-image: url('../images/clothing/nmale/belt13.png');}
#belt14{background-image: url('../images/clothing/nmale/belt14.png');}
#belt15{background-image: url('../images/clothing/nmale/belt15.png');}
#belt16{background-image: url('../images/clothing/nmale/belt16.png');}
#belt17{background-image: url('../images/clothing/nmale/belt17.png');}
#belt18{background-image: url('../images/clothing/nmale/belt18.png');}
#belt19{background-image: url('../images/clothing/nmale/belt19.png');}
#belt20{background-image: url('../images/clothing/nmale/belt20.png');}
#belt21{background-image: url('../images/clothing/nmale/belt21.png');}
#belt22{background-image: url('../images/clothing/nmale/belt22.png');}
#belt23{background-image: url('../images/clothing/nmale/belt23.png');}
#belt24{background-image: url('../images/clothing/nmale/belt24.png');}
#belt25{background-image: url('../images/clothing/nmale/belt25.png');}
#belt26{background-image: url('../images/clothing/nmale/belt26.png');}
#belt27{background-image: url('../images/clothing/nmale/belt27.png');}
#belt28{background-image: url('../images/clothing/nmale/belt28.png');}
#belt29{background-image: url('../images/clothing/nmale/belt29.png');}
#belt30{background-image: url('../images/clothing/nmale/belt30.png');}
#shirt1{background-image: url('../images/clothing/nmale/shirt1.png');}
#shirt2{background-image: url('../images/clothing/nmale/shirt2.png');}
#shirt3{background-image: url('../images/clothing/nmale/shirt3.png');}
#shirt4{background-image: url('../images/clothing/nmale/shirt4.png');}
#shirt5{background-image: url('../images/clothing/nmale/shirt5.png');}
#shirt6{background-image: url('../images/clothing/nmale/shirt6.png');}
#shirt7{background-image: url('../images/clothing/nmale/shirt7.png');}
#shirt8{background-image: url('../images/clothing/nmale/shirt8.png');}
#shirt9{background-image: url('../images/clothing/nmale/shirt9.png');}
#shirt10{background-image: url('../images/clothing/nmale/shirt10.png');}
#shirt11{background-image: url('../images/clothing/nmale/shirt11.png');}
#shirt12{background-image: url('../images/clothing/nmale/shirt12.png');}
#shirt13{background-image: url('../images/clothing/nmale/shirt13.png');}
#shirt14{background-image: url('../images/clothing/nmale/shirt14.png');}
#shirt15{background-image: url('../images/clothing/nmale/shirt15.png');}
#shirt16{background-image: url('../images/clothing/nmale/shirt16.png');}
#shirt17{background-image: url('../images/clothing/nmale/shirt17.png');}
#shirt18{background-image: url('../images/clothing/nmale/shirt18.png');}
#shirt19{background-image: url('../images/clothing/nmale/shirt19.png');}
#shirt20{background-image: url('../images/clothing/nmale/shirt20.png');}
#shirt21{background-image: url('../images/clothing/nmale/shirt21.png');}
#shirt22{background-image: url('../images/clothing/nmale/shirt22.png');}
#shirt23{background-image: url('../images/clothing/nmale/shirt23.png');}
#shirt24{background-image: url('../images/clothing/nmale/shirt24.png');}
#shirt25{background-image: url('../images/clothing/nmale/shirt25.png');}
#shirt26{background-image: url('../images/clothing/nmale/shirt26.png');}
#shirt27{background-image: url('../images/clothing/nmale/shirt27.png');}
#shirt28{background-image: url('../images/clothing/nmale/shirt28.png');}
#shirt29{background-image: url('../images/clothing/nmale/shirt29.png');}
#shirt30{background-image: url('../images/clothing/nmale/shirt30.png');}
#shirt31{background-image: url('../images/clothing/nmale/shirt31.png');}
#shirt32{background-image: url('../images/clothing/nmale/shirt32.png');}
#shirt33{background-image: url('../images/clothing/nmale/shirt33.png');}
#shirt34{background-image: url('../images/clothing/nmale/shirt34.png');}
#shirt35{background-image: url('../images/clothing/nmale/shirt35.png');}
#shirt36{background-image: url('../images/clothing/nmale/shirt36.png');}
#shirt37{background-image: url('../images/clothing/nmale/shirt37.png');}
#shirt38{background-image: url('../images/clothing/nmale/shirt38.png');}
#shirt39{background-image: url('../images/clothing/nmale/shirt39.png');}
#shirt40{background-image: url('../images/clothing/nmale/shirt40.png');}
#shirt41{background-image: url('../images/clothing/nmale/shirt41.png');}
#shirt42{background-image: url('../images/clothing/nmale/shirt42.png');}
#shirt43{background-image: url('../images/clothing/nmale/shirt43.png');}
#shirt44{background-image: url('../images/clothing/nmale/shirt44.png');}
#shirt45{background-image: url('../images/clothing/nmale/shirt45.png');}
#shirt46{background-image: url('../images/clothing/nmale/shirt46.png');}
#shirt47{background-image: url('../images/clothing/nmale/shirt47.png');}
#shirt48{background-image: url('../images/clothing/nmale/shirt48.png');}
#shirt49{background-image: url('../images/clothing/nmale/shirt49.png');}
#shirt50{background-image: url('../images/clothing/nmale/shirt50.png');}
#shirt51{background-image: url('../images/clothing/nmale/shirt51.png');}
#shirt52{background-image: url('../images/clothing/nmale/shirt52.png');}
#shirt53{background-image: url('../images/clothing/nmale/shirt53.png');}
#shirt54{background-image: url('../images/clothing/nmale/shirt54.png');}
#shirt55{background-image: url('../images/clothing/nmale/shirt55.png');}
#shirt56{background-image: url('../images/clothing/nmale/shirt56.png');}
#shirt57{background-image: url('../images/clothing/nmale/shirt57.png');}
#shirt58{background-image: url('../images/clothing/nmale/shirt58.png');}
#shirt59{background-image: url('../images/clothing/nmale/shirt59.png');}
#shirt60{background-image: url('../images/clothing/nmale/shirt60.png');}
#pants1{background-image: url('../images/clothing/nmale/pants1.png');}
#pants2{background-image: url('../images/clothing/nmale/pants2.png');}
#pants3{background-image: url('../images/clothing/nmale/pants3.png');}
#pants4{background-image: url('../images/clothing/nmale/pants4.png');}
#pants5{background-image: url('../images/clothing/nmale/pants5.png');}
#pants6{background-image: url('../images/clothing/nmale/pants6.png');}
#pants7{background-image: url('../images/clothing/nmale/pants7.png');}
#pants8{background-image: url('../images/clothing/nmale/pants8.png');}
#pants9{background-image: url('../images/clothing/nmale/pants9.png');}
#pants10{background-image: url('../images/clothing/nmale/pants10.png');}
#pants11{background-image: url('../images/clothing/nmale/pants11.png');}
#pants12{background-image: url('../images/clothing/nmale/pants12.png');}
#pants13{background-image: url('../images/clothing/nmale/pants13.png');}
#pants14{background-image: url('../images/clothing/nmale/pants14.png');}
#pants15{background-image: url('../images/clothing/nmale/pants15.png');}
#pants16{background-image: url('../images/clothing/nmale/pants16.png');}
#pants17{background-image: url('../images/clothing/nmale/pants17.png');}
#pants18{background-image: url('../images/clothing/nmale/pants18.png');}
#pants19{background-image: url('../images/clothing/nmale/pants19.png');}
#pants20{background-image: url('../images/clothing/nmale/pants20.png');}
#pants21{background-image: url('../images/clothing/nmale/pants21.png');}
#pants22{background-image: url('../images/clothing/nmale/pants22.png');}
#pants23{background-image: url('../images/clothing/nmale/pants23.png');}
#pants24{background-image: url('../images/clothing/nmale/pants24.png');}
#pants25{background-image: url('../images/clothing/nmale/pants25.png');}
#pants26{background-image: url('../images/clothing/nmale/pants26.png');}
#pants27{background-image: url('../images/clothing/nmale/pants27.png');}
#pants28{background-image: url('../images/clothing/nmale/pants28.png');}
#pants29{background-image: url('../images/clothing/nmale/pants29.png');}
#pants30{background-image: url('../images/clothing/nmale/pants30.png');}
#shoes1{background-image: url('../images/clothing/nmale/shoes1.png');}
#shoes2{background-image: url('../images/clothing/nmale/shoes2.png');}
#shoes3{background-image: url('../images/clothing/nmale/shoes3.png');}
#shoes4{background-image: url('../images/clothing/nmale/shoes4.png');}
#shoes5{background-image: url('../images/clothing/nmale/shoes5.png');}
#shoes6{background-image: url('../images/clothing/nmale/shoes6.png');}
#shoes7{background-image: url('../images/clothing/nmale/shoes7.png');}
#shoes8{background-image: url('../images/clothing/nmale/shoes8.png');}
#shoes9{background-image: url('../images/clothing/nmale/shoes9.png');}
#shoes10{background-image: url('../images/clothing/nmale/shoes10.png');}
#shoes11{background-image: url('../images/clothing/nmale/shoes11.png');}
#shoes12{background-image: url('../images/clothing/nmale/shoes12.png');}
#shoes13{background-image: url('../images/clothing/nmale/shoes13.png');}
#shoes14{background-image: url('../images/clothing/nmale/shoes14.png');}
#shoes15{background-image: url('../images/clothing/nmale/shoes15.png');}
#shoes16{background-image: url('../images/clothing/nmale/shoes16.png');}
#shoes17{background-image: url('../images/clothing/nmale/shoes17.png');}
#shoes18{background-image: url('../images/clothing/nmale/shoes18.png');}
#shoes19{background-image: url('../images/clothing/nmale/shoes19.png');}
#shoes20{background-image: url('../images/clothing/nmale/shoes20.png');}
#shoes21{background-image: url('../images/clothing/nmale/shoes21.png');}
#shoes22{background-image: url('../images/clothing/nmale/shoes22.png');}
#shoes23{background-image: url('../images/clothing/nmale/shoes23.png');}
#shoes24{background-image: url('../images/clothing/nmale/shoes24.png');}
#shoes25{background-image: url('../images/clothing/nmale/shoes25.png');}
#shoes26{background-image: url('../images/clothing/nmale/shoes26.png');}
#shoes27{background-image: url('../images/clothing/nmale/shoes27.png');}
#shoes28{background-image: url('../images/clothing/nmale/shoes28.png');}
#shoes29{background-image: url('../images/clothing/nmale/shoes29.png');}
#shoes30{background-image: url('../images/clothing/nmale/shoes30.png');}
#gloves1{background-image: url('../images/clothing/nmale/gloves1.png');}
#gloves2{background-image: url('../images/clothing/nmale/gloves2.png');}
#gloves3{background-image: url('../images/clothing/nmale/gloves3.png');}
#gloves4{background-image: url('../images/clothing/nmale/gloves4.png');}
#gloves5{background-image: url('../images/clothing/nmale/gloves5.png');}
#gloves6{background-image: url('../images/clothing/nmale/gloves6.png');}
#gloves7{background-image: url('../images/clothing/nmale/gloves7.png');}
#gloves8{background-image: url('../images/clothing/nmale/gloves8.png');}
#gloves9{background-image: url('../images/clothing/nmale/gloves9.png');}
#gloves10{background-image: url('../images/clothing/nmale/gloves10.png');}
#gloves11{background-image: url('../images/clothing/nmale/gloves11.png');}
#gloves12{background-image: url('../images/clothing/nmale/gloves12.png');}
#gloves13{background-image: url('../images/clothing/nmale/gloves13.png');}
#gloves14{background-image: url('../images/clothing/nmale/gloves14.png');}
#gloves15{background-image: url('../images/clothing/nmale/gloves15.png');}
#gloves16{background-image: url('../images/clothing/nmale/gloves16.png');}
#gloves17{background-image: url('../images/clothing/nmale/gloves17.png');}
#gloves18{background-image: url('../images/clothing/nmale/gloves18.png');}
#gloves19{background-image: url('../images/clothing/nmale/gloves19.png');}
#gloves20{background-image: url('../images/clothing/nmale/gloves20.png');}
#gloves21{background-image: url('../images/clothing/nmale/gloves21.png');}
#gloves22{background-image: url('../images/clothing/nmale/gloves22.png');}
#gloves23{background-image: url('../images/clothing/nmale/gloves23.png');}
#gloves24{background-image: url('../images/clothing/nmale/gloves24.png');}
#gloves25{background-image: url('../images/clothing/nmale/gloves25.png');}
#gloves26{background-image: url('../images/clothing/nmale/gloves26.png');}
#gloves27{background-image: url('../images/clothing/nmale/gloves27.png');}
#gloves28{background-image: url('../images/clothing/nmale/gloves28.png');}
#gloves29{background-image: url('../images/clothing/nmale/gloves29.png');}
#gloves30{background-image: url('../images/clothing/nmale/gloves30.png');}
*/
</style>
