const sanitize = str => str
const tidy = str => str
const title = str => str
const replaceAll = (v1, v2, data) => data
const pluralize = str => str
const choose = (data) => data[0]
const chooseWithLimits = (data, uniques) => data[0]
const log = text => console.log(text)
const beginsWith = (str, begin) => true

const LOWER = 'abc'
const UPPER = 'ABC'
const CAPITAL = 'Abc'

function getCase (str) {
  if (str === str.toLowerCase()) return LOWER
  else if (str === str.toUpperCase()) return UPPER
  else if (str.charAt(0) === str.charAt(0).toUpperCase()) return CAPITAL
  return LOWER
}

function setCase (str, format) {
  if (format === LOWER) return str // str.toLowerCase()
  else if (format === UPPER) return str.toUpperCase()
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const listNames = {}
const lists = []
let inList = 0
const res = {
  name: '',
  author: '',
  desc: '',
  picture: '',
  again: '',
  amount: '',
  src: '',
  seed: '',

  title: '',
  gameNameAndAuthor: '',
  gameDesc: '',
  pic: {
    style: {}
  },
  generateButton: '',
  game: {
    className: ''
  },
  amoutInput: 1,
  gameSource: '',

  nesting: 0,
  allUnique: false,
  commenting: false,

  nameSanitized () { sanitize(this.name) },
  authorSanitized () { sanitize(this.author) }
}

function toText (obj, as) {
  as = as || ''

  log(`Turning ${obj.text} to text.`)
  const output = (as !== '' && obj.tags && obj.tags.custom[as]) ? obj.tags.custom[as] : obj.text
  // else if (as!='') out=''
  const parsed = parse(output)
  log(`Turned ${obj.text} into ${parsed}.`)
  // return reparse(parsed)
  return parsed
}

function parse (data) {
  data = data || ''

  let splitted = data.split('')
  let tag
  let ignore = 0
  return splitted.reduce((output, item) => {
    if (item === '[') {
      if (tag === undefined) {
        tag = ''
      } else {
        ignore++
        tag += item
      }
      return output
    }

    if (item === ']' && tag !== undefined) {
      if (ignore) {
        ignore--
        tag += item
        return output
      }

      const tagSplit = tag.split(' ')
      const tagCase = tagSplit[tagSplit.length - 1]
      const text = parseTag(tag)

      log(`Parsed : ${text}.`)
      tag = undefined
      return output + setCase(text, getCase(tagCase))
    }

    if (tag !== undefined) {
      tag += item
      return output
    }

    return output + item
  }, '')
}

function parseTag (tag, toObj, unique) {
  const parseMeta = item => {
    // several
    if (item.charAt(0) === 'x') {
      const times = item.substring(1).split('-')
      times[0] = parseInt(times[0])
      times[1] = parseInt(times[1] || times[0])
      return {
        times: Math.min(Math.floor(Math.random() * ((times[1] + 1) - times[0]) + times[0]), 50)
      }
    }

    // keep the same
    if (item.charAt(0) === '#') return { identifier: item.substring(1) }
    // parseInt(meta[i].substring(1));

    // use another version of the word
    if (beginsWith(item, 'as ')) return { as: (item.substring(3)).toLowerCase() }

    // default to something else if the "as" isn't available
    if (beginsWith(item, 'or ')) return { defaults: item.substring(3) }

    // don't display it
    if (item === 'hidden') return { hidden: 1 }

    // add it to the list of non-repeatables
    if (item === 'unique') return { unique: 1 }

    // cap every first letter
    if (item === 'title') return { title: 1 }

    // everything to lower case
    if (item === 'lower') return { lower: 1 }

    // remove all spaces
    if (item === 'compress') return { compress: 1 }

    // record the same text
    if (item === 'written') return { written: 1 }

    if (item === 'first part') return { part: 1 }
    if (item === 'middle part') return { part: 2 }
    if (item === 'last part') return { part: 3 }

    // set the letter case
    const casing = getCase(item)
    tag = setCase(tag, casing)
    return { tag, casing }
  }

  const applyTag = (output, tag) => {
    if (tag.indexOf('-') !== -1 && tag.replace('-', '') === parseInt(tag.replace('-', ''))) {
      let number = tag.split('-')
      number[0] = parseInt(number[0])
      number[1] = parseInt(number[1])
      return output + Math.floor(Math.random() * ((number[1] + 1) - number[0]) + number[0])
    }
    if (tag === '') return output + ''
    if (tag === '/') return output + '<br>'
    if (tag.toLowerCase() === 'author\'s name') return output + res.author
    if (tag.toLowerCase() === 'game\'s name') return output + res.name
    if (tag === '*CLEAR*') {
      res.identified = []
      return output + ''
    }
    if (tag === '===') {
      log('=========================')
      return output + ''
    }
    if (tag === '*DEBUG ON*') {
      res.debugging = 1
      return output + ''
    }
    if (tag === '*DEBUG OFF*') {
      res.debugging = 0
      return output + ''
    }
    return output + `[${tag}]`
  }

  const applyMeta = (input, meta, obj) => {
    let output = input
    if (meta.identifier) {
      if (meta.written) {
        // const text = toText(obj, meta.as)
        res.identified[meta.identifier] = setCase(output, meta.casing) // Game.SetCase(text,Game.GetCase(tag));
        output = res.identified[meta.identifier]
      } else {
        res.identified[meta.identifier] = obj
      }
      log(`Stored "${obj.text}" into ${meta.identifier}.`)
    }

    if (meta.part === 1) output = output.substring(0, Math.ceil(output.length / 3))
    else if (meta.part === 2) output = output.substring(Math.floor(output.length / 3), Math.ceil(output.length / 3 * 2))
    else if (meta.part === 3) output = output.substring(Math.floor(output.length / 3 * 2))

    if (meta.lower) output = output.toLowerCase()
    if (meta.title) output = title(output)
    if (meta.compress) output = replaceAll(' ', '', output)
    if (meta.hidden) output = ''
    return output
  }

  log(`Now parsing ${tag}.`)
  res.nesting++

  let out = ''
  let obj = 0
  let meta = []
  let metaData = {
    times: 1,
    identifier: 0,
    as: '',
    hidden: false,
    unique: res.allUnique || unique || 0,
    title: false,
    lower: false,
    written: false,
    part: 0,
    compress: false,
    casing: getCase(tag),
    defaults: '',
    tag
  }

  if (tag.indexOf('|') !== -1) {
    let arr = []
    let ignore = 0
    const bit = tag.split('').reduce((output, item) => {
      if (item === '[') {
        ignore++
        return output + item
      }

      if (item === ']') {
        ignore--
        return output + item
      }

      if (item === '|' && ignore <= 0) {
        arr.push(output)
        return ''
      }

      return output + item
    }, '')

    arr.push(bit)
    const toParse = unique ? chooseWithLimits(arr, res.uniques) : choose(arr)
    // don't
    if (toObj && 1 === 2) {
      obj = parseToObj(toParse)
      out = obj.text
    } else {
      out = parse(toParse)
    }
    if (unique) unique.push(out)
  } else {
    if (tag.indexOf(',') !== -1) {
      meta = tag.split(',')
      tag = meta.shift()
      metaData = meta.reduce((newMeta, item) => {
        return {
          ...newMeta,
          ...parseMeta(item)
        }
      }, metaData)
    }
    if (tag.charAt(0) === '#') {
      const id = tag.substring(1) // parseInt(tag.substring(1));
      if (!res.identified[id]) {
        // console.log('Can\'t find an identifier for '+id+'.');
      } else {
        let { times, as, defaults } = metaData
        for (let i = 0; i < times; i++) {
          obj = res.identified[id]
          if (as !== '' && typeof obj !== 'string') {
            if (as.charAt(0) === '#') {
              const asId = as.substring(1)
              as = (!res.identified[asId] || typeof res.identified[asId] !== 'string') ? as : res.identified[asId]
            }
            if (obj.tags.custom[as]) {
              obj = parseToObj(obj.tags.custom[as], 0, unique)
            } else if (defaults !== '') {
              obj = (typeof defaults === 'string')
                ? defaults
                : parseToObj(defaults, 0, unique)
            }
          }
          out += (typeof obj === 'string' ? obj : toText(obj, as))
        }
      }
    } else if (listNames.indexOf(tag.toLowerCase()) !== -1) {
      let {times, as, identifier} = metaData
      for (let i = 0; i < times; i++) {
        log(`Generating "${tag}"...`)
        if (as !== '' && as.charAt(0) === '#') {
          const asId = as.substring(1)
          as = (!res.identified[asId] || typeof res.identified[asId] !== 'string') ? as : res.identified[asId]
        }

        obj = lists[tag.toLowerCase()].generate(as, 1)
        log(`We got "${obj.text}".`)
        if (identifier && typeof obj !== 'string' && (obj.text.split('[').length - 1) === 1) {
          const oldObj = obj
          obj = parseToObj(obj.text)
          if (typeof obj === 'string') obj = oldObj
          log(`Refined into "${obj.text}".`)
        }
        const text = (typeof obj === 'string') ? obj : toText(obj, as)
        out += text
        if (unique) res.unique += obj.text
        log(`Generated "${obj.text}" into "${text}".`)
      }
    } else {
      out = applyTag(out, tag)
    }

    out = applyMeta(out, metaData, obj)
  }
  out = setCase(out, metaData.casing)
  res.nesting--
  log(`Done parsing ${tag} : "${((obj && typeof obj !== 'string') ? (obj.text + ' (object)') : (out + ' (raw)'))}".`)
  return toObj ? (obj || out) : out
}

function parseToObj (data, toObj, unique) {
  data = data || ''

  const splitted = data.split('')
  let tag
  let ignore = 0
  const out = splitted.reduce((output, item) => {
    if (item === '[') {
      if (tag === undefined) {
        tag = ''
      } else {
        ignore++
        tag += item
      }
      return output
    }
    if (item === ']' && tag !== undefined && ignore) {
      if (ignore) {
        ignore--
        tag += item
        return output
      }

      // const tagSplit = tag.split(' ')
      // const tagCase = tagSplit[tagSplit.length - 1]
      const parsed = parseTag(tag, 1, unique)
      log(`Parsed "${tag}" to obj : ${(typeof parsed === 'string' ? (parsed + ' (raw)') : (parsed.text))}.`)
      tag = undefined
      return parsed
    }
    if (tag !== undefined) {
      tag += item
      return output
    }
    return output + item
  }, '')
  log(`Parsed to failed obj : ${out}.`)
  return out
}

function parseData (data, lists) {
  const title = res => `${res.nameSanitized()} by ${res.authorSanitized()} | made with RandomGen by Orteil`
  const gameNameAndAuthor = res => `<span id="gameName">${res.nameSanitized()}</span>` +
    `<span id="gameAuthor"> by ${res.authorSanitized()}</span>`
  const desc = res => sanitize(res.desc)
  const pic = res => ({
    display: 'block',
    backgroundImage: `url(${res.picture})`
  })
  const generateButton = res => sanitize(res.again)
  const amount = res => res.amount || 1
  const text = res => {
    let src = res.src
    if (src.indexOf('www.') === -1 && src.indexOf('http://') === -1 && src.indexOf('https://') === -1) {
      src = (src.indexOf('.txt') === -1)
        ? `http://pastebin.com/raw.php?i=${src}`
        : `http://orteil.dashnet.org/randomgen/gens/${src}`
    }
    return sanitize(src)
  }

  // const originalData = data
  // clean up

  // collapse tabs etc into single spaces
  data = replaceAll(String.fromCharCode(10), String.fromCharCode(13), data)
  data = replaceAll(String.fromCharCode(13), '[linebreak]', data)
  data = data.replace(/\s+/g, ' ')
  data = replaceAll('[linebreak]', String.fromCharCode(13), data)
  // data=replaceAll(String.fromCharCode(13)+String.fromCharCode(32),String.fromCharCode(13),data);
  // data=replaceAll(String.fromCharCode(13)+String.fromCharCode(45),String.fromCharCode(13),data);

  // for (var i=0;i<40;i++){str+=data.charCodeAt(i)+' : '+data.charAt(i)+'<br>';}

  // split into lines
  data = data.split(String.fromCharCode(13))

  // create lists
  data.forEach(parseLine)

  res.title = title(res)
  res.gameNameAndAuthor = gameNameAndAuthor(res)
  res.gameDesc = desc(res)
  if (res.picture !== '') res.pic.style = pic(res)
  res.generateButton = generateButton(res)
  res.game.className = 'generatorLoaded'
  res.amountInput = amount()
  res.gameSource = text(res)

  generate(lists)
}

function parseLine (data) {
  if (beginsWith(data, '//')) {
    // comment
    // ~absolutely nothing~
  } else if (beginsWith(data, '/*')) {
    // comment block
    res.commenting = 1
  } else if (beginsWith(data, '*/')) {
    // end comment block
    res.commenting = 0
  } else if (res.commenting) {
  } else if (data.length <= 0) {
  } else if (beginsWith(data.toLowerCase(), '$[note] ')) {
    data = data.replace(/\$\[note\] /i, '')
    //console.log('Note : '+data);
  } else if (beginsWith(data.toLowerCase(), '$include ')) {
    data = data.replace(/\$include /i, '')
  } else if (beginsWith(data.toLowerCase(), '$name : ')) {
    data = data.replace(/\$name : /i, '')
    res.name = data
  } else if (beginsWith(data.toLowerCase(), '$author : ')) {
    data = data.replace(/\$author : /i, '')
    res.author = data
  } else if (beginsWith(data.toLowerCase(), '$picture : ')) {
    data = data.replace(/\$picture : /i, '')
    res.picture = data
  } else if (beginsWith(data.toLowerCase(), '$description : ')) {
    data = data.replace(/\$description : /i, '')
    res.desc = data
  } else if (beginsWith(data.toLowerCase(), '$button : ')) {
    data = data.replace(/\$button : /i, '')
    res.again = data
  } else if (beginsWith(data.toLowerCase(), '$amount : ')) {
    data = data.replace(/\$amount : /i, '')
    if (!res.amount) res.amount = Math.max(1, Math.min(50, parseInt(data))) || 1)
  } else if (data.toLowerCase() === '$force unique') {
    res.allUnique = 1
  } else if (data.toLowerCase() === '$allow duplicates') {
    res.allUnique = 0
  } else if (data[0] === '$') {
    data = data.substring(1)
    if (data[0] === '+') {
      data = data.substring(1)
      inList = (listNames.indexOf(data.toLowerCase()) !== -1) ? lists[data] : lists[data]
    } else {
      if (listNames.indexOf(data.toLowerCase()) !== -1) {
        commit('addList', { name: data, data: [] } )
        commit('setInList', state.lists[data])
      } else commit('setInList', state.lists[data])
    }
  } else {
			if (state.inList) {
			  const tags={
			    chance: 1,
          custom: {}
			  }
				// modifier tags
				if (data.charAt(data.length-1) === '}' && data.indexOf(' {') !== -1) {
				  const tagstr = data.substring(data.indexOf('{') + 1, data.lastIndexOf('}')).split('}{')
          tagstr.forEach(item => {
						if (item.charAt(item.length - 1) === '%') tags.chance = parseFloat(item.substring(0, item.length - 1)) * 0.01
						else if (item.indexOf(':') !== -1) {
						  item = item.split(':')
              tags.custom[item[0].toLowerCase()] = item[1]
						}
          })
					data = data.substring(0, data.indexOf(' {'))
				}
				commit('addInList', {
				  data: {
				    'text': data,
            'tags': tags,
            'type': state.inList.name
				  }
				})
				// console.log('Pushed '+data+' (chance : '+tags.chance+') to list '+Game.inList.name);
			}
  }
}

function generate ({ lists, listNames, inList, reset }) {
  res.amount = res.amount || 1
  const seed = (res.seed !== '' && listNames.indexOf(res.seed.toLowerCase()) !== -1) ? lists[res.seed] : inList

  let str = ''
  for (let i = 0; i < res.amount; i++) {
    reset()
    str += `<div class="generation">${tidy(sanitize(reparse(seed.generate())))}</div>`
  }
  res.amoutInput = res.amount || 1
  res.text = str
}

function generate_new (as, toObj) {
  as = as || ''

  if (res.nesting > 30) {
    console.log('Too much nesting is going on. Things are invoking themselves in a loop! Please try again.')
    throw {
      name: 'FatalError',
      message: 'Too much nesting; possible recursion.'
    }
  }
  // const out = choose(this.data)

  // const out = ''

  const pickedData = res.data.filter(item => Math.random() < item.tags.chance)
  const list = pickedData.map(item => item.text)
  const picked = (pickedData.length > 0)
    ? chooseWithLimits(pickedData, res.uniques)
    : {
      text: '',
      tags: [],
      type: ''
    }

  log(`Picking between ${list.join(',')}. Picked "${picked.text}"!`)
  return toObj ? picked : toText({ obj: picked, as })
}

// second pass, for stuff like [an] etc
function reparse (data) {
  const applyTag = (parsed, tag, id, rawData) => {
    if (tag.toLowerCase() === 'a' || tag.toLowerCase() === 'an') {
      let letter = ''
      let offset = 1
      let innerTag = false
      while (rawData[id + offset] && letter === '') {
        if (rawData[id + offset] === '<') innerTag = true
        else if (rawData[id + offset] === '>') innerTag = false
        else if (rawData[id + offset] !== ' ' && !innerTag) letter = rawData[id + offset].toLowerCase()
        offset++
      }

      // if (me[parseInt(i)+2]) letter=me[parseInt(i)+2].toLowerCase();
      const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
      const word = (vowels.indexOf(letter) !== -1) ? 'an' : 'a'
      return parsed + setCase(word, getCase(tag))
    } else if (tag.toLowerCase() === 's') {
      let lastWord = ' ' + parsed
      let start = lastWord.lastIndexOf(' ') + 1
      lastWord = lastWord.substring(start)
      return parsed.substring(0, start - 1) + setCase(pluralize(lastWord), getCase(lastWord))
    } else if (tag === ' ') {
      return `${parsed} `
    }
    return `${parsed}[${tag}]`
  }

  // data=data.replace(/\s+/g,' ');
  const splitted = data.split('')
  let tag
  return splitted.reduce((output, item, id) => {
    if (item === '[') {
      tag = ''
      return output
    }

    if (item === ']' && tag !== undefined) {
      tag = undefined
      return applyTag(output, tag, id, splitted)
    }

    if (tag !== undefined) {
      tag += item
      return output
    }

    return output + item
  }, '')
}
