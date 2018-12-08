import { choose } from '../nested/utils'

class Genre {
  constructor (name, actions, things, goals) {
    this.name = name
    this.actions = actions
    this.things = things
    this.goals = goals // not really goals anymore
  }

  generate () {
    return {
      name: choose(this.name),
      action: choose(this.actions),
      thing: choose(this.things),
      goal: choose(this.goals)
    }
  }
}

export default Genre
