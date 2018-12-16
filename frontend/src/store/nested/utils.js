// Returns an element from an array at random.
export const choose = arr => arr[Math.floor(Math.random() * arr.length)]

// just put the first letter in uppercase yo
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const weightedChoose = (arr, weight) => {
  // Returns an element from an array at random according to a weight.
  // A weight of 2 means the first element will be picked roughly twice as often as the second; a weight of 0.5 means
  // half as often. A weight of 1 gives a flat, even distribution.
  if (weight <= 0 || weight === undefined) weight = 1
  return arr[Math.floor(Math.pow(Math.random(), weight) * arr.length)]

  // return arr[Math.floor((1-Math.pow(Math.random(),1/weightChoose))*arr.length)];//this would give a different curve

  // previously
  /*
  var iChoose;
  var arrChoose=[];
  if (weightChoose<=0 || weightChoose==undefined) weightChoose=1;
  for (iChoose=0;iChoose<arr.length;iChoose++)
  {
    if (Math.round(Math.random()*(iChoose*weightChoose))==0) arrChoose.push(arr[iChoose]);
  }
  return Choose(arrChoose);
  */
}

// Return a number between min and max, included.
export const rand = (min, max) => parseFloat(Math.floor(Math.random() * (max - min + 1))) + parseFloat(min)

/*
function CheckMissingThings () {
  var allContents = []
  var allMissing = []
  for (var i in Things) {
    var thisThing = Things[i]
    for (var i2 in thisThing.contains) {
      thisContent = thisThing.contains[i2]
      if (typeof (thisContent) !== 'string') {
        for (var i3 in thisContent) { allContents.push(thisContent[i3]) }
      } else allContents.push(thisContent)
    }
  }
  for (var i in allContents) {
    var thisContent = allContents[i]
    if (thisContent.charAt(0) == '.') thisContent = thisContent.substring(1)
    thisContent = thisContent.split(',')
    thisContent = thisContent[0]
    if (!Things[thisContent] && thisContent != '') allMissing.push(thisContent)
  }
  //	allMissing=allMissing.filter(function(elem,pos) {return allMissing.indexOf(elem)==pos;});//remove duplicates

  var str = "Things that are linked to, but don't exist :\n"
  for (var i in allMissing) {
    str += allMissing[i] + '\n'
  }
  alert(str)
}
*/

export const title = (what) => {
  // Changes a string like "the cat is on the table" to "the Cat Is on the Table"
  /*
  what = what.split(' ')
  var toReturn = ''
  for (var i in what) {
    if (what[i] != 'of' && what[i] != 'in' && what[i] != 'on' && what[i] != 'and' && what[i] != 'the' && what[i] != 'an' && what[i] != 'a' && what[i] != 'with' && what[i] != 'to' && what[i] != 'for') what[i] = what[i].substring(0, 1).toUpperCase() + what[i].substring(1)
    toReturn += ' ' + what[i]
  }
  return toReturn.substring(1)
   */
  return what
}

/*
function Toggle (what) {
  if (Instances[what].display == 0) {
    for (var i in Instances[what].children) {
      if (Instances[what].children[i].grown == false) { Instances[what].children[i].Grow(0); Instances[what].children[i].List(0) }
    }

    Instances[what].display = 1
    document.getElementById('container' + what).style.display = 'block'
    document.getElementById('arrow' + what).innerHTML = '-'
  } else if (Instances[what].display == 1) {
    Instances[what].display = 0
    document.getElementById('container' + what).style.display = 'none'
    document.getElementById('arrow' + what).innerHTML = '+'
  }
}

 */
