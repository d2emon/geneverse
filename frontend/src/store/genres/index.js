import Genre from './genre'
import action from './action'
import sim from './sim'
import strategy from './strategy'
import puzzle from './puzzle'
import rpg from './rpg'
import indie from './indie'

// yo no looky-loos
const genres = [
  action,
  sim,
  strategy,
  puzzle,
  rpg,
  indie
]

export const all = new Genre([], [], [], [])
genres.forEach(genre => {
  all.name = all.name.concat(genre.name)
  all.actions = all.actions.concat(genre.actions)
  all.things = all.things.concat(genre.things)
  all.goals = all.goals.concat(genre.goals)
})

export default genres
