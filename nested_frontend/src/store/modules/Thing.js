export const things = {}
let thingId = 0

class Thing {
  constructor (name, contains, namegen) {
    this.name = name
    this.contains = contains
    this.namegen = namegen || this.name

    things[name] = this
    thingId++
  }
}

export default Thing
