import { choose, weightedChoose, rand, title } from './utils'
import { personName, medievalPersonName, ancientPersonName, futurePersonName } from './namegen/person'
import { memoryText, medievalMemoryText, ancientMemoryText, futureMemoryText } from './namegen/memory'
import { sadThoughtText, happyThoughtText, medievalThoughtText, ancientThoughtText, futureThoughtText } from './namegen/thought'
import { paintingDescription, noteDescription, bookDescription, charDescription, monumentDescription } from './namegen/description'
// import { things } from "./Thing"

const instances = []
let instanceId = 0

class Instance {
  constructor (thing) {
    this.name = 'thing'
    this.type = thing
    this.parent = null
    this.children = []
    this.n = instanceId
    this.grown = false

    instanceId++
    instances.push(this)
  }

  generateName () {
    const instanceName = this.type.namegen

    if (typeof (instanceName) !== 'string') {
      this.name = ''
      if (typeof (instanceName[0]) === 'string') {
        this.name = choose(instanceName)
      } else {
        instanceName.forEach(part => {
          this.name += choose(part)
        })
      }
    } else {
      this.name = instanceName
    }

    let nameParts = this.name.split('|')
    this.name = nameParts[0]

    if (this.name === '*PERSON*' || this.name === '*MAN*' || this.name === '*WOMAN*') {
      this.name = personName(this.name)
    } else if (this.name === '*MEDIEVAL PERSON*' || this.name === '*MEDIEVAL MAN*' || this.name === '*MEDIEVAL WOMAN*') {
      this.name = medievalPersonName(this.name)
    } else if (this.name === '*ANCIENT PERSON*' || this.name === '*ANCIENT MAN*' || this.name === '*ANCIENT WOMAN*') {
      this.name = ancientPersonName(this.name)
    } else if (this.name === '*FUTURE PERSON*' || this.name === '*FUTURE MAN*' || this.name === '*FUTURE WOMAN*') {
      this.name = futurePersonName(this.name)
    } else if (this.name === '*MEMORY*') {
      // Memories and thoughts are a little tricky because they have to be gender-neutral (you can't go up levels to figure out if the person is male or female).
      this.name = memoryText(this.name)
    } else if (this.name === '*SADTHOUGHT*') {
      this.name = sadThoughtText(this.name)
    } else if (this.name === '*HAPPYTHOUGHT*') {
      this.name = happyThoughtText(this.name)
    } else if (this.name === '*MEDIEVAL MEMORY*') {
      this.name = medievalMemoryText(this.name)
    } else if (this.name === '*MEDIEVAL THOUGHT*') {
      this.name = medievalThoughtText(this.name)
    } else if (this.name === '*ANCIENT MEMORY*') {
      this.name = ancientMemoryText(this.name)
    } else if (this.name === '*ANCIENT THOUGHT*') {
      this.name = ancientThoughtText(this.name)
    } else if (this.name === '*FUTURE MEMORY*') {
      this.name = futureMemoryText(this.name)
    } else if (this.name === '*FUTURE THOUGHT*') {
      this.name = futureThoughtText(this.name)
    } else if (this.name === '*PAINTING*') {
      this.name = paintingDescription(this.name)
    } else if (this.name === '*NOTE*') {
      this.name = noteDescription(this.name)
    } else if (this.name === '*BOOK*') {
      this.name = bookDescription(this.name)
    } else if (this.name === '*CHAR*') {
      this.name = charDescription(this.name)
    } else if (this.name === '*MONUMENT*') {
      this.name = monumentDescription(this.name)
    }

    if (nameParts[1] !== undefined) this.name += nameParts[1]
  }

  addStyle () {
    // special-case pictures
    if (this.name === 'sharkverse') return "background-image:url('nestedSharkverse.png');"
    else if (this.name === 'baconverse') return "background-image:url('nestedBaconverse.png');"
    else if (this.name === 'doughnutverse') return "background-image:url('nestedDoughnutverse.png');"
    else if (this.name === 'lasagnaverse') return "background-image:url('nestedLasagnaverse.png');"
    return ''
  }
}

export default Instance

/*
Instance.prototype.List = function () {
  var str = ''
  for (var i in this.children) {
    str += '<div id="div' + this.children[i].n + '">' + this.children[i].name + '</div>'
  }
  // if (this.children.length>0) document.getElementById("div"+this.n).innerHTML='<span onclick="Toggle('+this.n+');"><span class="arrow" id="arrow'+this.n+'">+</span> '+this.name+'</span><div id="container'+this.n+'" class="thing" style="display:none;">'+str+'</div>';
  if (this.children.length > 0) document.getElementById('div' + this.n).innerHTML = '<a href="javascript:Toggle(' + this.n + ');" style="padding-right:8px;" alt="archetype : ' + (this.type.name) + '" title="archetype : ' + (this.type.name) + '"><span class="arrow" id="arrow' + this.n + '">+</span> ' + this.name + '</a><div id="container' + this.n + '" class="thing" style="display:none;' + addStyle + '">' + str + '</div>'
  else document.getElementById('div' + this.n).innerHTML = '<span class="emptyThing">' + this.name + '</span>'
}

 */
