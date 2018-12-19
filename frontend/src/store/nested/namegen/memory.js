import {choose, rand, weightedChoose} from '../utils'

const unforgettable = items => `That one unforgettable ${choose(items)}.`

const memoryActivity = (activities, partnerGroups, ages, times = ['']) => {
  const activity = choose(activities)
  const partners = choose(partnerGroups)
  const age = () => choose(ages)
  const time = choose((times || ['']).push(` when I was ${age()}`))
  return `${activity}  with my ${partners}${time}.`
}

const memorySchoolActivity = (activities, partners, schools) => {
  const activity = choose(activities)
  const partner = choose(partners)
  const school = choose(schools)
  return `${activity}  ${partner} ${school}.`
}

const memoryDay = (events) => {
  return `The day I ${choose(events)}.`
}

const memoryStudy = (learnText, subjects, graduates, jobs, additional) => {
  const events = []
  if (additional) events.push(additional)
  events.push(`${learnText} ${choose(subjects)}`)
  if (graduates) events.push(choose(graduates))
  console.log(jobs)
  if (jobs) events.push(`${choose(jobs.getJob)} ${choose(jobs.jobs)}`)

  return memoryDay(events)
}

export const memoryText = () => {
  const activities = [
    'Biking', 'Hiking', 'Swimming', 'Flying kites', 'Playing', 'Playing baseball', 'Stargazing',
    'Playing soccer', 'Playing basketball', 'Playing chess', 'Playing checkers', 'Playing video-games',
    'Watching TV', 'Cooking'
  ]
  const partners = [
    'mother', 'father', 'parents', 'grand-father', 'grand-mother', 'grand-parents', 'uncle', 'aunt', 'cousin',
    'sister', 'brother'
  ]
  const ages = [
    'a child',
    'young',
    rand(7, 21)
  ]

  const play = choose(['piano', 'drums', 'guitar', 'saxophone', 'cards'])
  const subjects = [
    'drive', 'cook', 'love', 'kiss', 'read', 'forgive', 'make friends', 'speak another language', `play ${play}`
  ]
  const graduates = ['graduated high school', 'graduated college', 'got my license']
  const jobs = {
    getJob: ['got promoted as ', 'got a job as ', 'finally became '],
    jobs: [
      'a cook', 'a reporter', 'a game designer', 'a lawyer', 'a doctor', 'a veterinarian', 'a biologist',
      'a soldier', 'a physicist', 'a scientist', 'a geologist', 'a shopkeeper', 'a teacher', 'a historian',
      'an archeologist', 'a musician', 'an artist', 'an athlete', 'a dancer'
    ]
  }

  const schoolActivities = [
    'Kissing', 'Cuddling with', 'Watching movies with', 'Staying up late with', 'Sharing secrets with',
    'Sharing childhood memories with', 'Feeling close to', 'Laying my arm around'
  ]
  const schoolPartners = [
    'that one person', 'my best friend', 'my love interest', 'my crush'
  ]
  const schools = ['in middle school', 'in high school', 'in college']

  const partner = choose(['my partner', 'my family', 'my friends'])
  const relative = choose(['I', 'my son', 'my daughter', 'my sister', 'my brother', 'my father', 'my mother'])
  const part = choose(['leg', 'ankle', 'elbow', 'knee', 'nose'])
  const loose = weightedChoose(
    [
      'dog', 'cat', 'bunny', 'hamster', 'gerbil', 'bird', 'goldfish', 'ferret', 'rat', 'iguana', 'pet spider'
    ],
    1.5
  )
  const events = [
    'got married', 'had my daughter', 'had my son', 'lost my father', 'lost my mother',
    `went on a trip with ${partner}`, `learned ${relative} was ill`, 'learned we were at war',
    'learned the war was over', `broke my ${part}`, 'broke up with my partner', `lost my ${loose}`
  ]

  const items = ['book', 'movie', 'video game', 'trip', 'kiss', 'person I met', 'party']
  return weightedChoose(
    [
      memoryActivity(activities, partners, ages),
      memoryStudy('learned how to', subjects, graduates, jobs),
      memorySchoolActivity(schoolActivities, schoolPartners, schools),
      memoryDay(events),
      unforgettable(items)
    ],
    1.5
  )
}

export const medievalMemoryText = () => {
  const activities = [
    'Tending the fields', 'Tending the animals', 'Harvesting the crops', 'Learning to cook',
    'Learning magic tricks', 'Learning alchemy', 'Learning how to yield a sword',
    'Learning how to defend myself', 'Learning how to shoot a bow', 'Learning about the gods above',
    'Learning about the spirits that inhabit every thing', 'Learning proper manners', 'Looking at the skies',
    'Swimming in the rivers', 'Exploring the woods', 'Wandering the wild expanses',
    'Getting lost in the woods', 'Travelling to the city', 'Running from wild beasts', 'Hunting wild beasts',
    'Taking part in the great hunt', 'Tracking beasts', 'Sparring'
  ]
  const partners = [
    'mother', 'father', 'parents', 'grand-father', 'grand-mother', 'grand-parents', 'uncle', 'aunt', 'cousin',
    'sister', 'brother', 'caretaker', 'master'
  ]
  const ages = ['a child', 'young', rand(6, 16)]

  const subjects = [
    'the art of blacksmithing', 'the art of swordfighting', 'the arcane arts', 'the arts of writing', 'the art of war',
    'all of the arts and sciences'
  ]
  const graduates = ['finished my training', 'finished my education', 'was accepted into the guild']
  const jobs = {
    getJob: ['found task as ', 'was called to become ', 'finally became '],
    jobs: [
      'a cook', 'a squire', 'an engineer', 'a footsoldier', 'a bard', 'a peasant', 'a blacksmith', 'a lumberjack',
      'a monk'
    ]
  }

  const schoolActivities = [
    'The sweetness of the lips of', 'The fond affection I felt for', 'Conversing late into the night with',
    'The kinship I felt for'
  ]
  const schoolPartners = ['that one person', 'my companion', 'my love interest', 'the person I courted']
  const schools = ['when I was still a child', 'when I was young', 'when I was in training']

  const partner = choose(['my partner', 'my family', 'my companions', 'my master'])
  const relative = choose(['I', 'my son', 'my daughter', 'my sister', 'my brother', 'my father', 'my mother'])
  const part = choose(['leg', 'ankle', 'elbow', 'knee', 'nose'])
  const loose = choose(
    ['my dog', 'my cat', 'my cattle', 'a valuable trinket', 'a magic artifact', 'my way in the forest']
  )
  const events = [
    'wed my partner', 'became a parent', 'lost my father', 'lost my mother', `explored the world with ${partner}`,
    `learned ${relative} was ill`, 'fell victim to disease', 'learned we were at war', 'learned the war was over',
    'took part in the war', 'helped strike down a dragon', 'had to leave our town due to contagious diseases',
    'was forced to move to a new town', 'was forced to become a beggar', 'visited our castle',
    'saw a display of magic at the castle', `broke my ${part}`, `lost ${loose}`
  ]

  return weightedChoose(
    [
      memoryActivity(activities, partners, ages),
      memoryStudy('mastered', subjects, graduates, jobs, 'found my calling'),
      memorySchoolActivity(schoolActivities, schoolPartners, schools),
      memoryDay(events)
    ],
    1.5
  )
}

export const ancientMemoryText = () => {
  const activities = [
    'Scouting for wild beasts', 'Tending the fire', 'Chopping wood', 'Learning the secrets of fire',
    'Learning the shamanic ways', 'Scouting the wilderness for resources', 'Searching for fresh water',
    'Taking part in the great hunt',
    choose([
      'Hunting wild', 'Tracking', 'Running from wild', 'Ambushing', 'Making pelts from', 'Skinning',
      'Slicing the meat off'
    ]) +
      ' ' +
      choose([
        'mammoths', 'saber-toothed cats', 'mountain lions', 'wooly rhinoceroses', 'wolves', 'aurochs',
        'rabbits'
      ]),
    'Bringing our catch back to the settlement', 'Harvesting wild berries', 'Harvesting wild grain',
    'Fetching water', 'Learning how to throw a spear', 'Learning how to use a harpoon',
    'Learning how to sculpt the stone', 'Learning about the spirits', 'Hiding from wild beasts',
    'Staring at birds in the sky', 'Looking at the stars at night', 'Looking at the skies',
    'Swimming in the rivers', 'Exploring the woods', 'Wandering the wild lands', 'Getting lost in the woods'
  ]
  const partners = ['mother', 'father', 'family', 'tribe', 'sister', 'brother']
  const ages = ['a child', 'younger']

  const subjects = [
    'the art of stonecarving', 'the art of woodcarving', 'the art of making fire', 'the shamanic way',
    'the art of painting images on cave walls', 'the techniques of spear-throwing', 'hunting'
  ]

  const schoolActivities = ['The affection I felt for', 'Talking late into the night with', 'The kinship I felt for']
  const schoolPartners = ['my mate', 'my friend', 'my friends', 'my tribe']
  const schools = [
    'when I was still a child', 'when I was young', 'when I was in training', 'when I was on that great hunt'
  ]

  const partner = choose(['my mate', 'my friend', 'my tribe'])
  const relative = choose(['I', 'my son', 'my daughter', 'my father', 'my mother'])
  const part = choose(['leg', 'ankle', 'elbow', 'knee', 'nose'])
  const events = [
    'had my son', 'had my daughter', 'lost my father', 'lost my mother',
    'became the last of my tribe and had to find a new tribe to take me in', 'became accepted into a new tribe',
    `explored the wilderness with ${partner}`, `realized ${relative} was sick`, 'fell sick',
    'encountered members of another tribe', 'had a skirmish with another tribe', 'helped strike down a wild beast',
    'almost starved', 'found a new way to cut rocks', `broke my ${part}`, 'got lost in the forest'
  ]

  return weightedChoose(
    [
      memoryActivity(activities, partners, ages),
      memoryStudy('mastered', subjects, false, false, 'followed the path of my ancestors'),
      memorySchoolActivity(schoolActivities, schoolPartners, schools),
      memoryDay(events)
    ],
    1.5
  )
}

export const futureMemoryText = () => {
  const activities = [
    'Spraying the clearpath', 'Clearing the tendrils', 'Shedding our nanomolts', 'Ionizing the biomass',
    'Collecting stardust', 'Equipping my first synchotron', 'Brainalyzing each other',
    'Learning how to use a transponder', 'Reversing polarities', 'Stepping into that astrodeck',
    'My first time in microgravity', 'Browsing the stars', 'Synthesizing new organisms',
    'That night we spent synthesizing every exotic food we could think of',
    'Synthesizing new outfits for hours', 'Getting our lungs removed', 'Riding the claytide',
    'Searching the moon for clams', 'Learning old-timey cooking', 'Visualizing old videoverses',
    'Experiencing that exciting new videoverse', 'Losing our headsets and getting lost', 'Earning my lifekey',
    'Inadvertantly spawning starkids'
  ]
  const partners = [
    'biocontributor', 'biocontributors', 'distant biocontributor', 'biosibling', 'biomate', 'biopartner',
    'nanobro', 'nanofamily'
  ]
  const ages = ['a kid', 'younger', rand(30, 120)]

  const play = choose(['biano', 'prums', 'blitar', 'praxophone', 'videocards'])
  const subjects = [
    'sprowse a ship', 'cook the old-timey way', 'love', 'kiss', 'forgive', 'forget', 'make friends on the nanoverse',
    'speak my hundredth language', `play ${play}`
  ]
  const graduates = ['graduated videoschool', 'graduated videocollege', 'got my sprowsing license']
  const jobs = {
    getJob: ['got promoted as ', 'got a job as ', 'finally became '],
    jobs: [
      'a food pill designer', 'a videowriter', 'a videoverse engineer', 'a thoughtsprayer', 'a biomedic',
      'a nanomedic', 'an exobiologist', 'a warfare engineer', 'a nanophysicist', 'a nanoscientist', 'a nanogeologist',
      'a market intendant', 'a videoteacher', 'a historian', 'an archeologist', 'a videomusician', 'an videoartist',
      'a bodyenhancer', 'a videodancer', 'a mindsensor', 'a commercial ship sprowser', 'a sprowseship engineer',
      'a nanobot whisperer'
    ]
  }

  const schoolActivities = [
    'Kissing', 'Cuddling with', 'Visualizing videoverses with', 'Staying up late with',
    'Sharing mindsecrets with', 'Sharing childhood videomemories with', 'Feeling close to',
    'Laying my arm around'
  ]
  const schoolPartners = ['that one person', 'my biomate', 'my biopartner', 'my nanobro']
  const schools = ['in videoschool', 'in sprowsing school', 'in videocollege']

  const partner = choose(['my biomate', 'my biopartner', 'my nanobro', 'my nanofamily', 'my biocontributors'])
  const relative = choose(['I', 'my bioson', 'my biodaughter', 'my biosibling', 'a biocontributor of mine'])
  const part = choose(['leg', 'ankle', 'elbow', 'knee', 'nose', 'brain'])
  const loose = weightedChoose(
    [
      'dwog', 'cwat', 'bwunny', 'namster', 'werbil', 'bwird', 'rubyfish', 'fwerret', 'giant lizard', 'pet clam'
    ],
    1.5
  )
  const events = [
    'got nanowed', 'biocontributed my biodaughter', 'biocontributed my bioson', 'lost a biocontributor',
    `went on a trip with ${partner}`, `learned ${relative} had a nanodisease`, 'learned we found a new galaxy',
    'learned we met a new lifeform', `got a new ${part}`, 'ended my biocontract with my biomate', `lost my ${loose}`
  ]

  const items = [
    'videoverse', 'videomemory', 'mindsecret', 'cosmotrip', 'kiss', 'person I met', 'lifeform I met', 'party'
  ]
  return weightedChoose(
    [
      memoryActivity(activities, partners, ages, ['', '', '']),
      memoryStudy('learned how to', subjects, graduates, jobs),
      memorySchoolActivity(schoolActivities, schoolPartners, schools),
      memoryDay(events),
      unforgettable(items)
    ],
    1.5
  )
}
