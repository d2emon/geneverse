import {choose, rand, title, weightedChoose} from '../utils'

export const paintingDescription = () => {
  // Paintings ! Most of these end up sounding rather disturbing, I wonder why ?
  const objs = [
    'apple', 'pear', 'peach', 'coconut', 'banana', 'fruit bowl', 'teapot', 'teacup', 'spoon', 'knife', 'fork',
    'lemon', 'plate of pasta', 'baby', 'girl', 'boy', 'person', 'young man', 'young woman', 'man', 'woman',
    'gentleman', 'lady', 'old person', 'businessman', 'salesman', 'ballerina', 'princess', 'prince', 'wizard',
    'king', 'queen', 'witch', 'dragon', 'knight', 'singer', 'comedian', 'magician', 'artist', 'cook', 'clown',
    'mime', 'dictator', 'president', 'flower pot', 'monster', 'creature', 'ice cream cone', 'cookie', 'fridge',
    'oven', 'bunny', 'penguin', 'llama', 'horse', 'beetle', 'spider', 'bird', 'duck', 'mouse', 'bat', 'monkey',
    'whale', 'fish', 'bear', 'shark', 'cat', 'dog', 'wolf', 'frog', 'snake', 'dolphin', 'chicken', 'brain',
    'skeleton', 'skull', 'eyeball', 'rose', 'hat', 'robot', 'android', 'ghost', 'dinosaur', 'flower', 'tree',
    'mushroom', 'worm', 'snowflake', 'clock', 'violin', 'tuba', 'saxophone', 'harp', 'piano', 'cosmic abomination',
    'video game character', 'pizza slice', 'sphere', 'cube', 'ovoid', 'torus', 'square', 'triangle', 'line', 'dot',
    'pyramid', 'abstract blob', 'hand', 'foot', 'beak', 'mouth', 'eye', 'tentacle', 'god', 'ancestor', 'unicorn',
    'vampire', 'midget', 'giant', 'mountain', 'caveman', 'feather', 'bubble', 'detective', 'cop', 'spinning top',
    'sponge', 'doll', 'train', 'manbox', 'person dressed as an animal', 'animal dressed as a person', 'moustache',
    'fetus', 'egg', 'phone', 'television', 'computer', 'humanoid', 'anthill', 'beehive', 'octopus', 'couple',
    'pair of shoes', 'mirror'
  ]
  const adjs = [
    'an ugly', 'a disfigured', 'a shapeless', 'a faceless', 'a rancid', 'a misshapen', 'a happy', 'a happy little',
    'a plump little', 'a fat little', 'a sad', 'a giant', 'a miniature', 'a small', 'a huge', 'an insane',
    'a crazy', 'a big-nosed', 'a big-mouthed', 'a long-eared', 'a scary', 'a talking', 'a jolly', 'a merry',
    'a bearded', 'a tall', 'a stout', 'a smiling', 'a tap-dancing', 'a very distressed-looking', 'a depressed',
    'a lovestruck', 'a wandering', 'an eerie', 'a sleepy', 'a lonely', 'a naked', 'a disturbing', 'a confused',
    'an evil-looking', 'a headless', 'a tidy little', 'a moist', 'a shrivelled', 'an eyeless', 'a bulging',
    'a murderous', 'a skinny', 'a skeletal', 'a ghostly', 'a tentacled', 'a monstrous', 'a horned', 'a robotic',
    'a wooden', 'a metal', 'a translucent', 'a rad', 'a pretty cool', 'a well-dressed', 'a regretful', 'a hopeful',
    'a famous', 'an infamous', 'a friendly', 'a flying', 'a winged', 'a jealous', 'a satisfied', 'a spiteful',
    'an elegant', 'a dapper', 'a mirrored'
  ]
  const tverbings = [
    'harassing', 'dancing with', 'screaming at', 'yelling at', 'laughing at', 'smiling at', 'kissing', 'licking',
    'arguing with', 'crying over', 'eating', 'mourning', 'devouring', 'killing', 'seducing', 'courting',
    'hanging out with', 'having a chat with', 'drawing', 'painting', 'running towards', 'insulting', 'stabbing',
    'tickling', 'nibbling', 'hugging', 'watching', 'looking at', 'staring at', 'pointing at', 'running away from',
    'chasing', 'stalking', 'following', 'holding hands with', 'being mean to', 'being nice to',
    'sharing toys with', 'tearing apart', 'trying to touch', 'reaching for', 'giving birth to', 'cleaning up',
    'strangling', 'exploring with', 'lasering', 'cutting up', 'singing for', 'intimidating', 'ignoring',
    'trying to eat', 'suffocating under the weight of', 'searching for', 'fishing for', 'trying to lure',
    'explaining something to', 'laying on', 'jumping on', 'stomping on', 'marrying', 'rejecting', 'playing with',
    'toying with', 'fused to', 'softly rubbing', 'spreading jam on', 'drooling on', 'climbing on', 'stepping on',
    'putting a hat on'
  ]
  const verbings = [
    'dancing', 'screaming', 'crying', 'laughing', 'flying', 'sleeping', 'resting', 'thinking', 'tap-dancing',
    'smiling', 'meditating', 'wiggling', 'jiggling', 'looking away', 'shivering', 'shaking', 'trembling',
    'moaning', 'drooling', 'twitching', 'spinning', 'melting', 'phasing out of existence', 'breathing heavily',
    'dying', 'slowly dying', 'floating away', 'looking terrified', 'looking happy as can be', 'playing music',
    'reading a book', 'losing all sanity', 'slowly coming this way', 'stifling laughter',
    'pretending not to notice anything', 'yawning', 'singing', 'stretching', 'taking notes', 'teleporting',
    'drowning', 'suffocating', 'vomiting', 'flying away', 'swimming away', 'shapeshifting', 'changing shapes',
    'morphing into something else', 'tearing apart', 'bursting into treats', 'trying to escape death',
    'sobbing sadly', 'clapping', 'staring at the viewer', 'blowing a raspberry', 'making a prank call',
    'looking upset', 'looking bored', 'looking sad', 'jogging', 'spilling spaghetti', 'looking satisfied',
    'partying', 'skiing', 'rotting away', 'wearing a hat'
  ]
  const locs = [
    'in outer space', 'in the moonlight', 'under a starry night', 'under a red sky', 'under an otherworldly sky',
    'in a kitchen', 'among the clouds', 'in the sky', 'on a table', 'in a blank room', 'outside a house',
    'in a dark room', 'on a bed', 'on a couch', 'in a living-room', 'in front of a house', 'on top of a house',
    'in the ocean', 'on the beach', 'on an airplane', 'on a boat', 'in front of a window', 'on top of a building',
    'on the town square', 'in a dark cave', 'in the forest', 'in the desert', 'on top of a mountain',
    'in a snowy landscape', 'in a storm', 'in an urban setting', 'in a metropolis', 'in a bar', 'at a party',
    'in a medieval setting', 'in a futuristic setting', 'in a restaurant', 'in an elegant stairway', 'in a castle',
    'in a lavish palace', 'in a museum', 'in an ancient temple', 'in an alien construction',
    'in an industrial landscape', 'on a movie set', 'in an opera', 'surrounded by strange contraptions',
    'in a laboratory', 'surrounded by geometric patterns', 'in an abstract landscape', 'in a geometric landscape',
    'on an alien planet', 'in a bloody landscape', 'in a bleak landscape', 'in a post-apocalyptic landscape',
    'in an alternate dimension', 'in a historic scene', 'in a bathroom', 'in a romantic setting',
    'surrounded by ruins', 'in a library', 'underwater', 'in a wasteland', 'in a long, dark corridor',
    'in a dark alley', 'surrounded by dancing figures', 'surrounded by judging faces',
    'surrounded by twisted statues', 'under the rain', 'atop a hill', 'in the sewers', "on a moon's surface"
  ]

  let res = [
    weightedChoose(
      [
        'A painting of', 'A portrait of', 'A picture of', 'A photograph of', 'A rendition of', 'A sculpture of',
        'A bas-relief of', 'An installation of', 'A series of pictures representing',
        'A series of photographs showing', 'A model of', 'A dyptic of', 'A tryptic of'
      ],
      3
    ),
    choose(
      [
        '$adj $obj $loc.', '$adj $obj $verbing $loc.', '$adj $obj $loc. The $obj is $verbing.',
        '$adj $obj and $adj2 $obj2 $loc. The $obj is $tverbing the $obj2.',
        '$adj $obj and $adj2 $obj2 $loc. The $obj2 is $verbing, and the $obj is $verbing2.',
        '$adj $obj $tverbing $adj2 $obj2. The $obj2 is $verbing.', '$adj $obj $tverbing $adj2 $obj2 $loc.'
      ]
    )
  ].join(' ')

  res = res.split('$verbing2').join(choose(verbings))
  res = res.split('$verbing').join(choose(verbings))
  res = res.split('$tverbing').join(choose(tverbings))
  res = res.split('$loc').join(choose(locs))
  res = res.split('$adj2').join(choose(adjs))
  res = res.split('$obj2').join(choose(objs))
  res = res.split('$adj').join(choose(adjs))
  res = res.split('$obj').join(choose(objs))
  return res
}

export const noteDescription = () => {
  // Notes found hidden in people's pockets, etc. Can contain recipes, laundry bills, or creepy observations.
  const dinner = choose(['', ' It was great.', ' I enjoyed it.'])
  const idea = choose(['neat', 'cool', 'awesome', 'stupid'])
  const story = choose(['a book', 'a joke', 'a story', 'a film'])
  const subjects = [
    choose(
      ['pirates', 'ninjas', 'dinosaurs', 'unicorns', 'robots', 'cyborgs', 'scientists', 'superheroes', 'maths']
    ),
    choose(
      [
        'surgeons', 'penguins', 'dolphins', 'cheese', 'dragons', 'ghosts', 'kittens', 'sarcasm', 'astronomers',
        'banana peels'
      ]
    ),
    choose(
      [
        'spaceships', 'vegetarians', 'babies', 'art', 'time travel', 'abortions', 'philosophy', 'computers',
        'punctuation', 'magnets', 'geometry', 'language'
      ]
    )
  ]

  const simpleNote = choose(
    [
      "I'm sorry.", 'I regret everything.', 'I regret nothing!', "Please don't judge me.",
      'I wish things went otherwise.', "I didn't know what to say.", `Thanks for the dinner.${dinner}`,
      `I have this ${idea} idea for ${story}. It involves ${subjects[0]}, ${subjects[1]} and ${subjects[2]}.`,
      'Socks and sandals. Because I can.', "I like shorts. They're comfy and easy to wear.",
      'Ski masks are in right now.', 'Recipe for happiness :<br>1)?',
      "How to be happy :<br>-eat well<br>-sleep early<br>-don't ask questions",
      "Hey.<br>I'll show you something neat :<br>add?seed=*** to the url<br>" +
        'and replace *** by whatever you want,<br>like person or bookshelf or ocean.',
      'You will find the strangest things in the oddest places.',
      "I'd love to learn a foreign language. But they don't seem to exist...",
      'Alright, how comes everybody in the universe has an american name?'
    ]
  )
  const destroyed = choose(
    [
      'burnt', 'partly-burnt', 'washed-off', 'bleached', 'covered in scribblings', 'covered in strange symbols',
      'covered in intricate patterns', 'covered in densely-written instructions'
    ]
  )
  const code = [
    choose(
      [
        'A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
      ]
    ),
    rand(0, 9),
    rand(0, 9),
    rand(0, 9),
    rand(0, 9)
  ].join('')
  const creepyNote = choose(
    [
      'I know who you are.', 'I see you.', 'Stop looking through my stuff!',
      'So, I was right after all? You were sifting through my stuff?', "They don't know where I hid it.", 'Hi!',
      'Hello there!', 'Pay attention.', "I'm proud of you.", "Don't look behind you.",
      "It's on its way to find you now.", "Let's not get too meta.",
      'we are all nested<br>we are all viewed<br>we are all viewing<br>nested<br>nesters<br>nestees<br>all is one',
      'Well? Did you?', 'OH MY GOD<br>WHAT IF SOMEONE IS LOOKING AT ALL THIS RIGHT NOW',
      'I found myself in a website once.',
      'But for real though. Nothing is of any significance to anything. There is no overarching story. ' +
        'There is no grand scheme of things. There is only here and now.',
      'Tell you what. None of this is randomly generated. All this data is actually being transferred from the ' +
        'real world.',
      'Every time you refresh, a new universe is being born just for you. Think about it before you close the ' +
        'page.',
      'Did you know? A team of 781 persons worked on this game for 11 years, painstakingly adding in every ' +
        'single thing they could think of.',
      'aint no universe like a nested universe', 'this party gettin started or what', 'it aint stopping oh god',
      'There is no Nested; only shark.', 'Nothing makes sense, and nothing ever will.',
      "There's no real point to anything, and that's okay.", 'Hands off, you plebeian!',
      'Everything is fine. Everything is fine. Everything is fine. There is nothing to worry about. ' +
        'Nothing at all.',
      "I have a secret for you. Wait no, I don't.", "Tell me a secret. Wait. I don't care.",
      `(The note is ${destroyed} and indecipherable.)`, 'This universe is so. Very. Large.', code
    ]
  )
  const laundryBill = choose([`Laundry service : $${rand(10, 50)}.${rand(0, 9)}0`])
  const food = [
    choose(['toast', 'bagel', 'breadstick', 'garlic bread', 'pita', 'taco shell']),
    choose(['eggs', 'ground beef', 'fries', 'ice cream', 'mashed potatoes']),
    choose(
      [
        'chocolate syrup', 'whipped cream', 'cheese', 'mayonaise', 'vinegar', 'tabasco', 'cough syrup', 'soy sauce'
      ]
    )
  ]
  const receipe = choose([`Recipe :<br>-${food[0]}<br>-${food[1]}<br>-${food[2]}`])

  const note = choose(
    [
      simpleNote,
      creepyNote,
      laundryBill,
      receipe
    ]
  )
  return `"${note}"`
}

export const bookDescription = () => {
  // This is probably my favorite name generator.
  const leader = choose(
    [
      'Money', 'A savior', 'A wizard', 'A warrior', 'A hero', 'A prince', 'A king', 'A princess', 'A queen', 'Cake',
      'Booze'
    ]
  )
  const place = [
    choose(['G', 'P', 'S', 'St', 'Sh', 'B', 'F', 'K', 'Z', 'Az', 'Oz']),
    choose(['', '', '', 'r', 'l']),
    choose(['u', 'o', 'a', 'e']),
    choose(
      [
        'r', 'sh', 'nd', 'st', 'sd', 'kl', 'kt', 'pl', 'fr', 'ck', 'sh', 'ff', 'gg', 'l', 'lig', 'rag', 'sha', 'pta',
        'lir', 'limd', 'lim', 'shim', 'stel'
      ]
    ),
    choose(['i', 'u', 'o', 'oo', 'e', 'ee', 'y', 'a']),
    choose(['ll', 'th', 'h', 'k', 'lm', 'r', 'g', 'gh', 'n', 'm', 'p', 's', 'rg', 'lg'])
  ].join('')

  const book1 = [
    choose(
      [
        'All about ', 'Of ', 'Everything you need to know about', 'The definitive guide to', "A beginner's guide to",
        'How to deal with', 'Dealing with', 'Hanging out with', 'Making friends with', 'I fell in love with',
        'Falling in love with', 'The shocking truth about', "They're serious :", "Here's a book about",
        'A conversation with', 'Why we need more', 'Nobody understands', 'Who cares about', 'A study on',
        'These are not my', 'Say no to', 'Getting away from', 'Getting along with', 'Avoiding', 'Approaching',
        'Investigating', 'Not worth it :', 'Stay away from', 'Never underestimate', 'Anatomy of', 'I hate', 'I love',
        'Who hates', 'Who loves', 'They were', 'Living with', 'Cooking with', 'Cooking for',
        `${rand(10, 200)} recipes for`, 'A few words on', 'They know where you live :', 'What I think about',
        "What you didn't know about", 'The truth on', "What they don't show you about", 'Hey look,', 'Aw crap,',
        'Holy crap,', 'Understanding', 'Getting rid of', 'Delicious', "They're okay :", 'Licking', 'Reasoning with',
        "You can't explain that :", 'Drawing', 'Choosing your', 'Night of the', 'Day of the', 'Revenge of the',
        'The book of', 'The big book of', "Those aren't my", 'Hey everyone,', 'The chorus of'
      ]
    ),
    choose(
      [
        'weird', 'mutant', 'normal', 'serious', 'elongated', 'exploding', 'obese', 'skinny', 'whiny', 'stupid',
        'slimy', 'creamy', 'tiny', 'small', 'giant', 'gigantic', 'ancient', 'tasty', 'obnoxious', 'invisible',
        'shiny', 'boring', 'confused', 'lost', 'lonely', 'curly', 'frilly', 'friendly', 'annoying', 'space', 'green',
        'orange', 'purple', 'mauve', 'transparent', 'stilted', 'hairy', 'bald', 'ridiculous', 'demanding',
        'imaginary', 'awkward', 'stubborn', 'pretentious', 'naughty', 'nasty', 'lazy', 'fancy', 'magic', 'clumsy',
        'smelly', 'bearded', 'sleazy', 'rabid', 'translucent', 'edible', 'inedible', 'foreign', 'snotty',
        'mind-reading', 'telepathic', 'silent'
      ]
    ),
    choose(
      [
        'shrimps', 'birds', 'people', 'friends', 'relatives', 'chappies', 'whales', 'deities', 'cactii', 'fungi',
        'shellfish', 'alligators', 'jellyfish', 'crabs', 'hoboes', 'machines', 'robots', 'goats', 'cyborgs', 'ninjas',
        'fish', 'mushrooms', 'mammals', 'reptiles', 'amphibians', 'cephalopods', 'spiders', 'fossils', 'moustaches',
        'perverts', 'mermaids', 'squids', 'lampreys', 'seafood', 'turtles', 'unicorns', 'barbarians', 'vampires',
        'werewolves', 'teenagers', 'babies', 'kids', 'ladies', 'superheroes', 'roads', 'hats', 'insects', 'centaurs'
      ]
    )
  ].join(' ')
  const book2 = [
    choose(
      [
        'Tales of', 'Chronicles of', 'A history of', 'The gates of', 'Objective : ', 'Reaching for', 'War for',
        'Battle for', `${leader} for`, 'The ruins of', 'The prophet of', 'Zealots on', 'Mysteries of', 'The temple of',
        'The vagrant from', 'The nights of', 'Conquerors from', 'They came from', 'The spaceships on',
        'The soldiers of', 'The warrior from', 'On the moons of', 'Saving', 'Glory for', 'Rulers of', 'Kings of',
        'Lords of', 'Princes of'
      ]
    ),
    place
  ].join(' ')
  const book3 = choose(
    [
      [
        choose(['How to', 'Learning how to', 'Teaching yourself how to']),
        choose(
          [
            'knit', 'dance', 'swim', 'cook', 'play piano', 'program', 'be cool', 'be popular', 'be friendly',
            'be nice', 'be smarter', 'stay fit', 'be succesful', 'make money', 'be funny', 'find a job', 'write books',
            'make a website', 'play chess', 'do magic tricks', 'do yoga', 'be happy'
          ]
        )
      ].join(' '),
      [
        choose(
          [
            "A beginner's guide to", 'All about', 'Everything you need to know about', 'The basics of',
            'The secrets of', 'The definitive guide to', 'Advanced techniques for'
          ]
        ),
        choose(
          [
            'knitting', 'dancing', 'swimming', 'cooking', 'playing piano', 'programming', 'being cool',
            'being popular', 'being friendly', 'being nice', 'getting smarter', 'staying fit', 'being succesful',
            'making money', 'being funny', 'finding a job', 'writing books', 'making websites', 'playing chess',
            'magic tricks', 'yoga', 'happiness'
          ]
        )
      ].join(' ')
    ]
  )
  const book4 = choose([
    '',
    choose(
      [
        'The',
        choose(
          [
            'The amazing', 'The ridiculous', 'The heart-warming', 'The retarded', 'The downright retarded',
            'The stupid', 'The simply stupid', 'The insulting', 'The repulsive', 'The revolting', 'The delightful',
            'The distracting', 'The flabbergasting', 'The mind-numbing', 'The silly', 'The clever', 'The boring',
            'The idiotic', 'The hilarious', 'The endless', 'The illustrated'
          ]
        )
      ]
    ) +
      ' ' +
      choose([
        'adventure', 'adventures', 'tale', 'tales', 'story', 'stories', 'happenings', 'stumblings', 'discoveries'
      ]) +
      ' of '
  ]) +
    choose(
      [
        weightedChoose(
          [
            'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
            'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian',
            'Ronald', 'Anthony', 'Kevin', 'Jason', 'Jeff', 'Jack'
          ],
          1.5
        ),
        choose([
          'A', 'Ana', 'Ba', 'Bo', 'Bra', 'Bro', 'Bee', 'Bea', 'Bre', 'Bi', 'Ca', 'Cla', 'Co', 'Da', 'Dee', 'Dri',
          'E', 'Fa', 'Fi', 'Fo', 'Fro', 'Go', 'Ga', 'Gri', 'Gi', 'Gnu', 'Ha', 'Ho', 'I', 'Jo', 'Ja', 'Je', 'Kla',
          'Ko', 'Klo', 'Lo', 'Lee', 'Mi', 'Ma', 'Mu', 'Ni', 'Nee', 'O', 'Oo', 'Pi', 'Pa', 'Po', 'Qua', 'Quo',
          'Quee', 'Ri', 'Ra', 'Ro', 'Sti', 'Sla', 'Shwa', 'Shwo', 'To', 'Tra', 'U', 'Vo', 'Vro', 'Wo', 'Wee', 'Wi',
          'Xi', 'Y', 'Zi', 'Zo', 'Za'
        ]) +
          choose([
            'bble', 'rble', 'pple', 'ttle', 'ffle', 'stle', 'ffin', 'ggin', 'ggle', 'rgle', 'rbus', 'rtus', 'bus',
            'tus', 'gus', 'rtus', 'rtos', 'zzle'
          ])
      ]
    ) +
    choose([
      ' the',
      ', the ' +
      choose([
        'amazing', 'stupid', 'boring', 'diminutive', 'giant', 'friendly', 'psychotic', 'crafty', 'swift',
        'cowardly', 'mighty', 'hilarious', 'magic', 'midget', 'tiny', 'clumsy', 'lazy', 'fancy', 'nasty',
        'naughty', 'hairy', 'bald', 'disgusting', 'smelly', 'failed', 'noble'
      ])
    ]) +
    ' ' +
    choose([
      'bard', 'poet', 'prince', 'knight', 'wizard', 'sorcerer', 'tourist', 'shopkeeper', 'joker', 'blacksmith',
      'butcher', 'gardener', 'magician', 'mage', 'astronomer', 'alchemist', 'merchant', 'pirate', 'ninja',
      'shoemaker', 'monk'
    ]) +
    choose([
      '', '', '', '', '',
      ' ' + choose(['from space'])
    ])
  const book5 = choose(
    [
      'A shocking', 'An amazing', 'A vibrant', 'A heart-warming', 'A true', 'An astounding', 'A riveting',
      'A twisted', 'A short', 'An elaborate', 'An overly elaborate', 'A ridiculous', 'A hilarious', 'A boring',
      'An illustrated', 'A mind-numbing', 'A'
    ]
  ) +
    ' ' +
    choose(['story', 'tale', 'essay', 'book']) +
    ' ' +
    choose(['involving', 'about', 'on the subject of']) +
    ' ' +
    choose([
      'pirates', 'ninjas', 'dinosaurs', 'unicorns', 'robots', 'cyborgs', 'scientists', 'superheroes', 'maths'
    ]) +
    ', ' +
    choose([
      'surgeons', 'penguins', 'dolphins', 'cheese', 'dragons', 'ghosts', 'kittens', 'sarcasm', 'astronomers',
      'banana peels'
    ]) +
    ' and ' +
    choose([
      'spaceships', 'vegetarians', 'babies', 'art', 'time travel', 'abortions', 'philosophy', 'computers',
      'punctuation', 'magnets', 'geometry', 'language'
    ])
  const book6 = choose(
    [
      '', '',
      choose([
        'Meet', "Hey, it's", 'The life of', 'My life as', 'The day I woke up as', 'My life with', 'Living with',
        'My friend', 'Me and my friend', 'My buddy', 'Me and my buddy', 'My neighbor'
      ]) +
        ' ',
      choose([
        'The',
        choose([
          'The amazing', 'The ridiculous', 'The heart-warming', 'The retarded', 'The downright retarded',
          'The stupid', 'The simply stupid', 'The insulting', 'The repulsive', 'The revolting', 'The delightful',
          'The distracting', 'The flabbergasting', 'The mind-numbing', 'The silly', 'The clever', 'The boring',
          'The idiotic', 'The hilarious', 'The endless', 'The illustrated'
        ])
      ]) +
        ' ' +
        choose([
          'adventure', 'adventures', 'tale', 'tales', 'story', 'stories', 'happenings', 'stumblings', 'discoveries'
        ]) +
        ' of '
    ]
  ) +
    choose(
      [
        weightedChoose(
          [
            'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
            'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian',
            'Ronald', 'Anthony', 'Kevin', 'Jason', 'Jeff', 'Jack'
          ],
          1.5
        ),
        weightedChoose(
          [
            'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret',
            'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon',
            'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah'
          ],
          1.5
        )
      ]
    ) +
    ', the ' +
    choose([
      'weird', 'mutant', 'normal', 'serious', 'confused', 'lost', 'exploding', 'obese', 'skinny', 'whiny',
      'stupid', 'slimy', 'tiny', 'giant', 'ancient', 'obnoxious', 'invisible', 'boring', 'annoying', 'space',
      'hairy', 'bald', 'ridiculous', 'imaginary', 'awkward', 'stubborn', 'pretentious', 'naughty', 'nasty',
      'lazy', 'fancy', 'magic', 'clumsy', 'smelly', 'bearded', 'lonely', 'sleazy', 'rabid', 'translucent',
      'edible', 'inedible', 'foreign', 'snotty', 'mind-reading', 'telepathic', 'silent'
    ]) +
    ' ' +
    choose([
      'shrimp', 'bird', 'person', 'chap', 'whale', 'deity', 'cactus', 'fungus', 'alligator', 'jellyfish', 'crab',
      'hobo', 'machine', 'robot', 'goat', 'cyborg', 'ninja', 'fish', 'mushroom', 'spider', 'pervert', 'mermaid',
      'squid', 'lamprey', 'turtle', 'unicorn', 'barbarian', 'vampire', 'werewolf', 'teenager', 'baby', 'kid',
      'lady', 'superhero', 'insect', 'centaur', 'shopkeeper', 'caveman', 'school teacher', 'cosmonaut',
      'scientist', 'doctor', 'car salesman', 'baker', 'butcher', 'cop', 'minister'
    ])

  let res = choose(
    [
      book1,
      book2,
      book3,
      book4,
      book5,
      book6
    ]
  )
  if (rand(0, 10) === 0) {
    const part = [
      choose(['Part', 'Tome', 'Volume']),
      choose(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'])
    ].join(' ')
    res += `, ${part}`
  }
  return title(res)
}

export const charDescription = () => {
  let chars = "aaaabbccddeeeeffgghhhiijkkllmmnnooppqqrrrssstttuuvwwxyz.,;!?:()-'"
  if (rand(0, 20) === 0) chars += '0123456789*$/#&'
  const char = choose(chars.split(''))
  return (rand(0, 30) === 0) ? char.toUpperCase() : char
}

export const monumentDescription = () => {
  let res = choose(
    [
      choose(
        [
          choose([
            weightedChoose(
              [
                'old', 'new', 'ancient', 'historic', 'royal', 'imperial', 'sunken', 'painted', 'crooked', 'slanted',
                'high', 'rising', 'underground', 'immersed', 'twisted', 'shaky', 'lucky', 'glorious', 'flying'
              ],
              2
            ),
            weightedChoose(
              [
                'great', 'big', 'large', 'giant', 'huge', 'grand', 'gigantic', 'colossal', 'tremendous', 'humongous'
              ],
              0.5
            )
          ]) +
            ' '
        ]
      ) +
        choose(
          [
            '', '', '',
            choose([
              'stone', 'gold', 'silver', 'copper', 'bronze', 'metal', 'white', 'black', 'blue', 'green', 'yellow',
              'red', 'grey', 'crimson', 'azure', 'viridian'
            ]) +
              ' '
          ]
        ) +
        weightedChoose(
          [
            'tower',
            choose([
              '', 'smiling ', 'proud ', 'wise ', 'horse ', 'freedom ', 'watching ', 'crying ', 'singing '
            ]) +
              'statue',
            'bridge', 'park', 'towers', 'palace', 'statues', 'gardens', 'parks', 'cathedral', 'ruins', 'wall',
            'church', 'maze', 'castle', 'radio tower', 'arena', 'keep', 'colossus', 'space needle', 'house',
            'villa', 'manor', 'dungeon', 'opera', 'pyramid', 'cave', 'ark', 'wheel'
          ],
          5
        )
    ]
  )
  return title(`The ${res}`)
}
