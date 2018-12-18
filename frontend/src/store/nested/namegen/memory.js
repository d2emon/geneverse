import {choose, rand, weightedChoose} from '../utils'

export const memoryText = () => {
  return weightedChoose(
        [
          choose([
            'Biking', 'Hiking', 'Swimming', 'Flying kites', 'Playing', 'Playing baseball', 'Stargazing',
            'Playing soccer', 'Playing basketball', 'Playing chess', 'Playing checkers', 'Playing video-games',
            'Watching TV', 'Cooking'
          ]) +
            ' with my ' +
            choose([
              'mother', 'father', 'parents', 'grand-father', 'grand-mother', 'grand-parents', 'uncle', 'aunt', 'cousin',
              'sister', 'brother'
            ]) +
            choose([
              '',
              ' when I was ' + choose([
                'a child',
                'young',
                rand(7, 21)
              ])
            ]) +
            '.',
          'The day I ' +
            choose([
              'learned how to ' +
                choose([
                  'drive', 'cook', 'love', 'kiss', 'read', 'forgive', 'make friends', 'speak another language',
                  'play ' + choose(['piano', 'drums', 'guitar', 'saxophone', 'cards'])
                ]),
              choose([
                'graduated high school',
                'graduated college',
                'got my license'
              ]),
              choose([
                'got promoted as ', 'got a job as ', 'finally became '
              ]) +
                choose([
                  'a cook', 'a reporter', 'a game designer', 'a lawyer', 'a doctor', 'a veterinarian', 'a biologist',
                  'a soldier', 'a physicist', 'a scientist', 'a geologist', 'a shopkeeper', 'a teacher', 'a historian',
                  'an archeologist', 'a musician', 'an artist', 'an athlete', 'a dancer'
                ])
            ]) +
            '.',
          choose([
            'Kissing', 'Cuddling with', 'Watching movies with', 'Staying up late with', 'Sharing secrets with',
            'Sharing childhood memories with', 'Feeling close to', 'Laying my arm around'
          ]) +
            ' ' +
            choose([
              'that one person', 'my best friend', 'my love interest', 'my crush'
            ]) +
            ' in ' +
            choose([
              'middle school', 'high school', 'college'
            ]) +
            '.',
          'The day I ' +
            choose([
              'got married', 'had my daughter', 'had my son', 'lost my father', 'lost my mother',
              'went on a trip with ' + choose(['my partner', 'my family', 'my friends']),
              'learned ' +
                choose(['I', 'my son', 'my daughter', 'my sister', 'my brother', 'my father', 'my mother']) +
                ' was ill',
              'learned we were at war', 'learned the war was over',
              'broke my ' + choose(['leg', 'ankle', 'elbow', 'knee', 'nose']), 'broke up with my partner',
              'lost my ' + weightedChoose(
                [
                  'dog', 'cat', 'bunny', 'hamster', 'gerbil', 'bird', 'goldfish', 'ferret', 'rat', 'iguana',
                  'pet spider'
                ],
                1.5
              )
            ]) +
            '.',
          'That one unforgettable ' +
            choose(['book', 'movie', 'video game', 'trip', 'kiss', 'person I met', 'party']) +
            '.'
        ],
        1.5
  )
}

export const medievalMemoryText = () => {
  return weightedChoose(
        [
          choose([
            'Tending the fields', 'Tending the animals', 'Harvesting the crops', 'Learning to cook',
            'Learning magic tricks', 'Learning alchemy', 'Learning how to yield a sword',
            'Learning how to defend myself', 'Learning how to shoot a bow', 'Learning about the gods above',
            'Learning about the spirits that inhabit every thing', 'Learning proper manners', 'Looking at the skies',
            'Swimming in the rivers', 'Exploring the woods', 'Wandering the wild expanses',
            'Getting lost in the woods', 'Travelling to the city', 'Running from wild beasts', 'Hunting wild beasts',
            'Taking part in the great hunt', 'Tracking beasts', 'Sparring'
          ]) +
            ' with my ' +
            choose([
              'mother', 'father', 'parents', 'grand-father', 'grand-mother', 'grand-parents', 'uncle', 'aunt',
              'cousin', 'sister', 'brother', 'caretaker', 'master'
            ]) +
            choose([
              '',
              ' when I was ' + choose(['a child', 'young', rand(6, 16)])
            ]) +
            '.',
          'The day I ' +
            choose([
              'found my calling',
              'mastered ' +
                choose([
                  'the art of blacksmithing', 'the art of swordfighting', 'the arcane arts', 'the arts of writing',
                  'the art of war', 'all of the arts and sciences'
                ]),
              choose(['finished my training', 'finished my education', 'was accepted into the guild']),
              choose([
                'found task as ', 'was called to become ', 'finally became '
              ]) +
                choose([
                  'a cook', 'a squire', 'an engineer', 'a footsoldier', 'a bard', 'a peasant', 'a blacksmith',
                  'a lumberjack', 'a monk'
                ])
            ]) +
            '.',
          choose([
            'The sweetness of the lips of', 'The fond affection I felt for', 'Conversing late into the night with',
            'The kinship I felt for'
          ]) +
            ' ' +
            choose(['that one person', 'my companion', 'my love interest', 'the person I courted']) +
            ' ' +
            choose(['when I was still a child', 'when I was young', 'when I was in training']) +
            '.',
          'The day I ' +
            choose([
              'wed my partner', 'became a parent', 'lost my father', 'lost my mother',
              'explored the world with ' + choose(['my partner', 'my family', 'my companions', 'my master']),
              'learned ' + choose([
                'I', 'my son', 'my daughter', 'my sister', 'my brother', 'my father', 'my mother'
              ]) +
                ' was ill',
              'fell victim to disease', 'learned we were at war', 'learned the war was over', 'took part in the war',
              'helped strike down a dragon', 'had to leave our town due to contagious diseases',
              'was forced to move to a new town', 'was forced to become a beggar', 'visited our castle',
              'saw a display of magic at the castle',
              'broke my ' + choose(['leg', 'ankle', 'elbow', 'knee', 'nose']),
              'lost ' +
                choose([
                  'my dog', 'my cat', 'my cattle', 'a valuable trinket', 'a magic artifact', 'my way in the forest'
                ])
            ]) +
          '.'
        ],
        1.5
  )
}

export const ancientMemoryText = () => {
  return weightedChoose(
        [
          choose([
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
          ]) +
            ' with my ' +
            choose(['mother', 'father', 'family', 'tribe', 'sister', 'brother']) +
            choose([
              '',
              ' when I was ' + choose(['a child', 'younger'])
            ]) +
            '.',
          'The day I ' +
            choose([
              'followed the path of my ancestors',
              'mastered ' +
                choose([
                  'the art of stonecarving', 'the art of woodcarving', 'the art of making fire', 'the shamanic way',
                  'the art of painting images on cave walls', 'the techniques of spear-throwing', 'hunting'
                ])
            ]) +
            '.',
          choose(['The affection I felt for', 'Talking late into the night with', 'The kinship I felt for']) +
            ' ' +
            choose(['my mate', 'my friend', 'my friends', 'my tribe']) +
            ' ' +
            choose([
              'when I was still a child', 'when I was young', 'when I was in training', 'when I was on that great hunt'
            ]) +
            '.',
          'The day I ' +
            choose([
              'had my son', 'had my daughter', 'lost my father', 'lost my mother',
              'became the last of my tribe and had to find a new tribe to take me in',
              'became accepted into a new tribe',
              'explored the wilderness with ' + choose(['my mate', 'my friend', 'my tribe']),
              'realized ' + choose(['I', 'my son', 'my daughter', 'my father', 'my mother']) + ' was sick',
              'fell sick', 'encountered members of another tribe', 'had a skirmish with another tribe',
              'helped strike down a wild beast', 'almost starved', 'found a new way to cut rocks',
              'broke my ' + choose(['leg', 'ankle', 'elbow', 'knee', 'nose']),
              'got lost in the forest'
            ]) +
            '.'
        ],
        1.5
  )
}

export const futureMemoryText = () => {
  return weightedChoose(
        [
          choose([
            'Spraying the clearpath', 'Clearing the tendrils', 'Shedding our nanomolts', 'Ionizing the biomass',
            'Collecting stardust', 'Equipping my first synchotron', 'Brainalyzing each other',
            'Learning how to use a transponder', 'Reversing polarities', 'Stepping into that astrodeck',
            'My first time in microgravity', 'Browsing the stars', 'Synthesizing new organisms',
            'That night we spent synthesizing every exotic food we could think of',
            'Synthesizing new outfits for hours', 'Getting our lungs removed', 'Riding the claytide',
            'Searching the moon for clams', 'Learning old-timey cooking', 'Visualizing old videoverses',
            'Experiencing that exciting new videoverse', 'Losing our headsets and getting lost', 'Earning my lifekey',
            'Inadvertantly spawning starkids'
          ]) +
            ' with my ' +
            choose([
              'biocontributor', 'biocontributors', 'distant biocontributor', 'biosibling', 'biomate', 'biopartner',
              'nanobro', 'nanofamily'
            ]) +
            choose([
              '', '', '', ' when I was ' + choose(['a kid', 'younger', rand(30, 120)])
            ]) +
            '.',
          'The cycle I ' + choose([
            'learned how to ' +
              choose([
                'sprowse a ship', 'cook the old-timey way', 'love', 'kiss', 'forgive', 'forget',
                'make friends on the nanoverse', 'speak my hundredth language',
                'play ' + choose(['biano', 'prums', 'blitar', 'praxophone', 'videocards'])
              ]),
            choose(['graduated videoschool', 'graduated videocollege', 'got my sprowsing license']),
            choose(['got promoted as ', 'got a job as ', 'finally became ']) +
            choose([
              'a food pill designer', 'a videowriter', 'a videoverse engineer', 'a thoughtsprayer', 'a biomedic',
              'a nanomedic', 'an exobiologist', 'a warfare engineer', 'a nanophysicist', 'a nanoscientist',
              'a nanogeologist', 'a market intendant', 'a videoteacher', 'a historian', 'an archeologist',
              'a videomusician', 'an videoartist', 'a bodyenhancer', 'a videodancer', 'a mindsensor',
              'a commercial ship sprowser', 'a sprowseship engineer', 'a nanobot whisperer'
            ])
          ]) +
            '.',
          choose([
            'Kissing', 'Cuddling with', 'Visualizing videoverses with', 'Staying up late with',
            'Sharing mindsecrets with', 'Sharing childhood videomemories with', 'Feeling close to',
            'Laying my arm around'
          ]) +
            ' ' +
            choose(['that one person', 'my biomate', 'my biopartner', 'my nanobro']) +
            ' in ' +
            choose(['videoschool', 'sprowsing school', 'videocollege']) +
            '.',
          'The cycle I ' +
            choose([
              'got nanowed', 'biocontributed my biodaughter', 'biocontributed my bioson', 'lost a biocontributor',
              'went on a trip with ' +
                choose(['my biomate', 'my biopartner', 'my nanobro', 'my nanofamily', 'my biocontributors']),
              'learned ' +
                choose(['I', 'my bioson', 'my biodaughter', 'my biosibling', 'a biocontributor of mine']) +
                ' had a nanodisease',
              'learned we found a new galaxy', 'learned we met a new lifeform',
              'got a new ' + choose(['leg', 'ankle', 'elbow', 'knee', 'nose', 'brain']),
              'ended my biocontract with my biomate',
              'lost my ' +
                weightedChoose(
                  [
                    'dwog', 'cwat', 'bwunny', 'namster', 'werbil', 'bwird', 'rubyfish', 'fwerret', 'giant lizard',
                    'pet clam'
                  ],
                  1.5
                )
            ]) +
            '.',
          'That one unforgettable ' +
            choose([
              'videoverse', 'videomemory', 'mindsecret', 'cosmotrip', 'kiss', 'person I met', 'lifeform I met', 'party'
            ]) +
            '.'
        ],
        1.5
  )
}
