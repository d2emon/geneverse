import {choose, rand, weightedChoose} from '../utils'

export const sadThoughtText = () => {
  const wish = choose(
    ['a friend', 'friends', 'someone to hug', 'a family', 'someone who understands me', 'to have kids']
  )
  const wishToBe = choose(
    ['a pirate', 'a dolphin', 'an unicorn', 'a panda', 'a cyborg', 'a robot', 'a superhero', 'invisible']
  )
  const myself = choose(
    [
      'worthless', 'terrible', 'just a bad person', 'just not a good person', 'so awful', 'so alone. I need help',
      'never going to amount to anything', 'no good. My mom was right', 'not that bad, I guess', 'a faker',
      'so bad at this', 'too nice for my own good'
    ]
  )
  const toLearn = choose(['skill', 'language'])
  const toCall = choose(['her', 'him'])
  const miss = choose(['him', 'her', 'them']) + choose(['. So much', '', ''])
  const personalityWish = [
    choose(['wish I was', 'should be', 'want to be']),
    choose(['more generous', 'nicer', 'more popular', 'more interesting', 'more romantic'])
  ].join(' ')
  const hobby = choose(['singing', 'painting', 'dancing', 'writing', 'video-games', 'maths'])
  const secret = choose([
    'my balding hair', 'my parents', 'this', 'me', 'my drinking problem', 'my health problems',
    'what I do in the shower', 'what I did', "what I'm about to do", "what I'm doing", 'the movies I watch',
    'the books I read', 'the websites I go on'
  ])
  const secretIdentity = choose(
    [
      'a regular human being', 'perfectly normal', 'perfectly ordinary', 'spying on you right now', 'a wizard',
      'the smartest person in the world', 'the wisest person in the world', 'the most important person in the world',
      'a spider', 'a robot', 'a midget', 'a very ancient ghost', 'an extra-terrestrial', 'a tree', 'a flower',
      'a shark', 'a bear', 'my own cousin', 'an astral monstrosity', 'a secret'
    ]
  )
  const need = [
    choose(
      [
        'I need', 'I want', 'I might need', 'I should get', 'What I want is', 'What I need right now is', "I'll just get"
      ]
    ),
    choose(
      [
        'some new shoes', 'a new TV', 'a new computer', 'another car', 'a bigger house', 'a better job', 'a lover',
        'more pets', 'a makeover', 'a good movie', 'a nice dinner in town'
      ]
    )
  ].join(' ')
  const itchyPart = choose(['butt', 'nose', 'foot', 'ear', 'forehead', 'back'])
  const hurt = [
    choose(['head', 'leg', 'arm', 'belly', 'back', 'shoulder']),
    choose(['feels weird', 'feels icky', 'hurts', 'feels strange'])
  ].join(' ')
  const illPart = choose(['eyes', 'brain', 'head', 'chest', 'legs', 'back'])
  const marriage = [
    choose(['marriage', 'relationship']),
    choose(['is a failure', 'is a disaster', 'was a mistake', "isn't working"])
  ].join(' ')
  const food = [
    choose(
      [
        "I just can't stand the taste of", 'I am not going to finish', 'I paid way too much for', "I don't really like"
      ]
    ),
    choose(
      [
        'this hamburger', 'this steak', 'this salad', 'this pasta', 'this sandwich', 'this pizza', 'this meal',
        'this beer', 'this soda'
      ]
    )
  ].join(' ')
  const show = choose(
    [
      'I hate that show', 'That show is revolting', "I hate that show, but I'm going to watch it anyway",
      'My parents used to watch that show', "There's nothing on TV", "That's a stupid movie",
      "I've seen that movie already"
    ]
  )
  const ugh = choose(['Wait, ', 'Hold on. ', 'Ugh. ', 'Ugh, I told them ', ''])
  const allergy = choose(['shrimp', 'soy', 'pineapple'])

  const thought1 = choose(
    [
      'This place is crowded.', "I don't want to live here my whole life.",
      "I don't want to spend the rest of my life here.", 'I want to meet different people.', "I'm so alone.",
      "I don't want to be alone.", 'When did I get so lonely?', "I'm scared.", 'I feel so insignificant.',
      'Does it matter, really?', 'This is absurd.', 'I hate this place.', 'I hate the people here.',
      'Nobody understands me.', 'I wish the voices would stop.', "I'm in debt.", "I shouldn't spend so much.",
      "I don't really like my friends.", 'I regret doing that thing I did.', 'I hope they never find out.',
      'What if I get caught?', 'This is killing me.', 'What will happen to me when I die?', 'This is all sick.',
      "What's the point?", "I secretly know the meaning of life but I won't tell anyone.", "I know why we're here.",
      'What if this was real?', 'Some people need to check their privilege...', "This isn't what I wanted.",
      `I... I just want ${wish}.`, "Is this how it's going to end?", "Oh, that's going on my blog."
    ]
  )
  const thought2 = choose(
    [
      "I'm too lazy.", "I don't want to get fired.", "I'm worried.", "I don't deserve this.",
      'Why am I doing this to myself?', "This isn't like me.", `If only I was ${wishToBe}.`, "Hold me. I'm scared.",
      'This is my only shot at this.', 'This was my only shot at this, and I blew it.',
      "I won't make the same mistake twice.", 'If I must.', 'As you wish.', 'Where are my parents now?',
      'I hate myself sometimes.', `I'm ${myself}.`, 'What a waste.', 'I wish I was a better person.',
      `I should learn a new ${toLearn}.`, "I'm terrified of death.", "I don't want to get older.",
      "I wish I didn't waste my youth.", 'I regret so much.', "I shouldn't have said no.",
      `I should call ${toCall} and say sorry.`, 'I should call my parents.', `I miss ${miss}.`,
      `I ${personalityWish}.`, `I don't suck at ${hobby}. People just think I do.`,
      `Nobody must know about ${secret}.`, `I am secretly ${secretIdentity}.`,
      "I'm tired. I've been doing this all day.", "Don't listen to what they say. It's just not true.",
      'Too many rumors going on.', "It's not what it looks like, I swear!", 'Uh... I can explain.',
      "Well, I'm glad nobody can read my mind.", "My friends aren't real.", "I'm the only real person here."
  ])
  const thought3 = `${need}.`
  const thought4 = choose(
    [`My ${itchyPart} is itchy.`, `My ${hurt}.`, `I should see a doctor for my ${illPart}.`]
  )
  const thought5 = choose(
    [`This ${marriage}.`, 'I regret getting married.', 'I want a divorce.', "This isn't why I got married."]
  )
  const thought6 = choose(
    [
      `${food}.`,
      `${show}.`,
      `${ugh}I'm allergic to ${allergy}.`
    ]
  )
  const thought7 = choose(
    [
      'This will not stand.', "Dammit I'm mad.", 'Yes, I am mad.', "I won't let this happen.",
      'No. Never. Not if I have a word in it.', 'Over my dead body.', 'Do they have any idea how angry I am?',
      'I am absolutely furious.', 'This upsets me.', 'Well, I am upset.', 'On we march.', 'This is not over.',
      'I can see them, beyond the stars.', "I can sense them. They're coming.", 'Something is coming this way.',
      'Something is about to go horribly wrong.', 'It was written.', 'It is coming.', 'We must fight on.',
      "I've seen things.", "Oh no. I'm thinking weird stuff again.", "Do you really think I can't see you?",
      "I don't look at the world the way I used to.", "Can't you hear them?", "It's always there.",
      "It won't go away.", "There are things that I just can't explain.", 'Who where?',
      "They don't think it is like this. But it is.", 'The world looks too intense for me.', 'I never asked for this.',
      "No! I don't want that!", "What if we're all living in a giant computer simulation?",
      'This place would look good on fire!', "This is the end, isn't it?", 'The end.'
    ]
  )

  return weightedChoose(
    [
      thought1,
      thought2,
      thought3,
      thought4,
      thought5,
      thought6,
      thought7
    ],
    1.4
  )
}

export const happyThoughtText = () => {
  const fun = choose(
    ['unexpected', 'awkward', 'fun', 'just funny', 'strange', 'interesting', 'odd', 'peculiar', 'weird']
  )
  const love = choose(['they', 'she', 'he'])
  const toBe = choose(
    ['a pirate', 'a dolphin', 'an unicorn', 'a panda', 'a cyborg', 'a robot', 'a superhero', 'invisible']
  )
  const toDo = choose(
    [
      'You want a piece of this?', "I'm all business, all the time.", 'I vibrate through walls.',
      'This is going to be gay as hell.', "We're making this happen!"
    ]
  )
  const toLearn = choose(['skill', 'language'])
  const toCall = choose(['her', 'him'])
  const hobby = choose(['singing', 'painting', 'dancing', 'writing', 'video-games', 'maths'])
  const secretIdentity = choose(
    [
      'super-hardcore', 'perfectly normal', 'perfectly ordinary', 'peeking over your shoulder right now', 'a wizard',
      'the smartest person in the world', 'the wisest person in the world', 'the most important person in the world',
      'a spider', 'a robot', 'a midget', 'a very ancient ghost', 'an extra-terrestrial', 'a tree', 'a flower',
      'a shark', 'a bear', 'my own cousin', 'an astral monstrosity', 'a secret'
    ]
  )
  const need = [
    choose(
      [
        'Hmm! I should get', 'I know what would be awesome...', 'Time for', 'I need', 'You know what? I need',
        "Know what I need? I'll tell you - "
      ]
    ),
    choose(
      [
        'some new shoes', 'a new TV', 'a new computer', 'a new car', 'a bigger house', 'a cooler job', 'a lover',
        'more pets', 'a makeover', 'a good movie', 'a nice dinner in town'
      ]
    )
  ].join(' ')

  const thought1 = choose(
    [
      'What a nice day!', "It's sunny today.", "It's a sunny day out.", "It's such a nice day.",
      "It's such a great day to be alive!", 'This is a happy kind of day.', 'I feel great.', "Ooh, I'm feeling fine.",
      "I'm feeling awesome.", 'Hey, this is great!', "I'm so glad I came here.", 'I regret nothing!',
      'Regrets are pointless.', 'I have no regrets.', 'This is what I wanted!', "Everything's going just fine.",
      "I can't wait!", 'Things are going smoothly.', "I'm just happy to be here.", `Well, this is ${fun}.`,
      'I know the meaning of life!', "I didn't expect this!", "I'm glad someone understands me.",
      "I'm glad someone likes me for who I am.", 'I love my friends!', 'Life is good!',
      'I could picture myself spending the rest of my life here.', 'I should meet new friends!', 'I feel loved.',
      'I feel almighty!', 'I matter.', 'This place is nice.', "Everybody's great in some way!",
      `I hope ${love}'ll like me!`, 'I wonder what happens next!', "It's all going to be alright.",
      "It'll all be alright in the end. I just know it.", 'This is actually okay.', 'I love the whole world!',
      'The world is a big place!', 'The world is amazing!', 'So it has come to this.',
      'Well this is an interesting development.', "Let's see what happens next.", 'Oh hey. I found me.',
      'I NEED to blog about this.'
    ]
  )
  const thought2 = choose(
    [
      'I should take a self-help course!', "I'm doing alright.", 'My job is pretty fulfilling.',
      "I don't really worry.", 'Worrying is pointless!', 'This is cooler than I expected!',
      'Haha, this is just like me.', `Wouldn't it be awesome if I was ${toBe}?`, "I'm pretty self-confident.",
      "I'm a pretty big deal.", "I'm pretty extreme.", toDo, 'I mean, wow.',
      'Yep. Just a regular human person. Nothing to see here.', 'I want to become even better!',
      `I should learn a new ${toLearn}!`, "I hope I'll become a nice old person.", 'I kinda miss my youth!',
      `I should call ${toCall} and say "I love you"!`, 'Maybe I should call my parents?',
      'You can always better yourself.', `Do I really suck at ${hobby}?`, `I'm secretly ${secretIdentity}!`,
      'H-here I go!', 'This place would look good on fire!',
      "I don't worry, because I know nothing matters in the end.", "Well, I'm glad nobody can read my mind."
    ]
  )
  const thought3 = `${need}!`
  const thought4 = choose(
    [
      'This is the best relationship ever.', 'I love being married!',
      "Marriage isn't as bad as they make it out to be!", 'This relationship is awesome!', 'I love my family.',
      'I love doing stuff with my family.'
    ]
  )
  const thought5 = choose(
    [
      choose(
        [
          'I really, really like', "I can't get enough of", "I'm going to get more of", 'I wonder what they put in'
        ]
      ) + ' ' + choose(
        [
          'this hamburger', 'this steak', 'this salad', 'this pasta', 'this sandwich', 'this pizza', 'this meal',
          'this beer', 'this soda'
        ]
      ) + '.',
      choose(
        [
          'Haha, I love that show!', 'That show is confusing!', 'That show is hilarious.',
          "That's a silly show, but there's nothing on TV anyway.", 'Oooh, my parents used to watch that show!',
          "There's nothing on TV!", "That movie's plot is hilariously bad.", "I've never seen that movie before!"
        ]
      )
    ]
  )

  return weightedChoose(
    [
      thought1,
      thought2,
      thought3,
      thought4,
      thought5
    ],
    1.4
  )
}

export const medievalThoughtText = () => {
  return weightedChoose(
    [
          choose([
            'Today was a fine day.', 'Many things happened on this day.', 'What an eventful week this has been.',
            "It's been a good year so far.", 'So much to do, so little time.', 'I was born too soon.',
            "I'm still young. I'll manage.",
            'I would still be ' +
              choose([
                'an adventurer', 'a bandit', 'a traveller', 'a travelling merchant', 'a hunter', 'a courrier'
              ]) +
              ' if not for that ' +
              choose([
                'witch', 'ambush years ago', 'dragon', 'new king', 'stupid accident', 'unfortunate wound'
              ]) +
              '.',
            'What a surprising world we live in.', "Hopefully next year's crops will be fruitful.",
            'What hides yonder?', 'What lies yonder, I wonder.', 'So many things out of my comprehension.',
            'I want to see more of this world.', 'I am sworn to carry this burden.',
            "I'll " +
              choose(['ready my spells', 'grab my sword', 'grab my axe', 'grab my shield', 'pack my things']) +
              ' and go on an adventure.',
            'I will ' +
              choose(['compose a sonnet', 'tell the tale', 'write a saga', 'compose a song']) +
              ' of ' +
              choose([
                'witches', 'princesses', 'adventure', 'fate', 'distant kingdoms', 'unicorns', 'knights', 'bards',
                'swords', 'love'
              ]) +
              ' and ' +
              choose([
                'wizards', 'princes', 'dragons', 'magic', 'paladins', 'warlocks', 'dungeons', 'destruction',
                'monsters', 'friendship'
              ]) +
              '!',
            'I want to travel and see ' +
              choose([
                'the unicorns', 'the dinosaurs', 'a dragon', 'the steam monsters', 'the goblin kingdoms',
                'the dwarves in the mountains', 'pixies', 'fairies', 'catpeople', 'sharkpeople', 'dogpeople',
                'the troll pits', 'the wizard kingdom', 'the footfaces', 'the cephalites', 'the gembabies'
              ]) +
              '!',
            'What strange and terrifying creatures could live in the distant lands?',
            "I've heard so many stories about the things that live in the farlands.",
            'Thank our star, I feel fine now.',
            choose(['She', 'He', 'They']) +
              ' ' +
              choose([
                'will regret it', 'will regret saying that', 'will regret doing that', 'must pay, somehow',
                "will get what's coming", 'will get what is deserved', 'will see how right I was',
                'will not hold me back any longer', 'will regret laughing at me'
              ]) +
              '.',
            choose([
              'Our star will guide us throughout.', 'I trust our star to guide us in the right direction.',
              'I trust our star to point us to the right choices.'
            ]),
            'I need to ' +
              choose(['find', 'see', 'consult']) +
              ' ' +
              choose(['a physician', 'a witch', 'a wizard', 'an apothecary', 'an exorcist', 'a priest']) +
              '.',
            choose([
              'What is that smoke on the horizon?', 'That new moon keeps getting bigger.',
              'Will the court wizards keep us safe?', 'The Entities are due soon.',
              "All of our cattle is getting sick. What's happening?",
              "I don't want to take part in another sacrifice.", "Let's hope that sacrifice was worth it.",
              'I hate those dark rituals.', 'I hope the liches will leave us alone this year.',
              'I keep finding these weird stones.', 'Some must fight, so that all may be free.'
            ])
          ])
    ],
    1.1
  )
}

export const ancientThoughtText = () => {
  return weightedChoose(
    [
          choose([
            'Today. Nice day.', 'Many things, today.', 'Good year so far. Not many dead children.',
            "I sure hope wolves don't eat my baby again.", 'Family comes back from hunt soon. Right?',
            'Busy. Always busy.', 'I was born too soon.', 'I am young still. So much to learn!',
            'I must stay home because of wound. Total baloney.', 'Spoiled meat and no fire is utter baloney.',
            'Beasts are getting scarce. Absolute baloney.', 'The spirits must hate me. Only explanation.',
            'Oh, my aching head.', "No. I don't want.", 'This displeases me.',
            'Sun setting soon. Must ready the fire.', "We mustn't do that mistake with the fire again.",
            'We live in surprising world.', 'Many more hunts to come.', 'What lies beyond hills?',
            'Does sun sleep behind mountains?', 'I do not comprehend many things. But I will try.',
            'This world. I want to see more of it.',
            'I must ' +
              choose([
                'sharpen spears for next hunt', 'prepare for next hunt', 'tend to my children now',
                'get ready for big hunt', 'get tools ready for tomorrow'
              ]) +
              '.',
            'I am curious. About distant things.', "I don't feel so sick anymore.", "I won't eat raw rabbit again.",
            choose(['She', 'He', 'They']) +
              ' ' +
              choose([
                'will regret it', 'will regret saying that', 'will regret doing that', 'must pay',
                "will get what's coming", 'will get what is deserved', 'will see how right I was',
                'will not hold me back any longer', 'will regret laughing at me'
              ]) +
              '.',
            choose([
              'Our shaman will guide us throughout.', 'I trust our shaman to guide us in the right direction.',
              'I trust our shaman to point us to the right choices.', 'Where has our shaman gone now?',
              'I must consult our shaman.'
            ]),
            choose([
              'What is smoke on horizon?', 'Moon... getting bigger.', 'Will our shaman keep us safe?',
              'The Old Things come back soon.', 'All the beasts, they are getting sick. What is happening?',
              'I do not want to take part in another sacrifice.', 'Let us hope sacrifice was worth it.',
              'I do not like those dark rituals.', 'I hope the Old Things will leave us alone this year.',
              'I keep finding these strange stones.', 'I saw the lights. But nobody believes me.',
              'Oh boy. Shamanic ritual soon. We eat funny mushrooms.',
              'Have ritual. Smoke plants. All get naked. Good times.', 'I shake fist at you, spirits!'
            ]),
            'I have great idea! ' +
              choose([
                'Round stone. Rolls fast, make transportation!', 'Shiny rocks. Melt on fire, make weapons!',
                'Hungry wolves. Make friends, hunt for us!', 'Wild seeds. Plant in ground, harvest later!',
                'Babies. Eat the babies. Free meat!', 'Tickle auroch udder, drink free udderjuice!',
                'Smash rocks found on the beach. Eat insides.'
              ])
          ])
    ],
    1.1
  )
}

export const futureThoughtText = () => {
  return weightedChoose(
    [
          choose([
            "That's nice... that's really nice.", 'All of this stuff is so nice.', 'So nice, wow.',
            'I need a couple decades on an exotic planet to cool off.',
            "Oh boy, they've come up with a new food pill flavor!", 'Which food pills will I be ingesting today?',
            'Who where?', 'Those are nice limbs. I bet they cost, uh, a lot, though.',
            "I think I'll need more nanocredits.", "We've come a long way.", 'What will we discover tomorrow?',
            'This system is getting cramped.', 'I wonder - can we ever reverse entropy?',
            "Meatspace's getting stale for me.", "I'm still at least " + rand(5, 90) + '% meat!',
            "I think I'll go visit some biorelatives.", 'Ugh. My biocontributors are visiting again.',
            "One day I'll just upload myself.",
            choose([
              'Needs', 'What this planet needs is', 'What we need as a species is', 'What I need is'
            ]) +
              ' ' +
              choose([
                'more clones', 'more clams', 'more magnets', 'more nano', 'more nanostuff', 'more food pill flavors',
                'more planets', 'more revived extinct species'
              ]) +
              '.',
            'These last few centuries have been a little boring.', "I'll say, I'm a little bit bored.",
            "I don't really give a clam's hinge.", "Everything's so nano.", "That's totally nano.",
            "I wonder, where's my nanobro right now?", "I hope we don't get assimilated.",
            "I'm synthesizing " +
              choose([
                'dinosaurs', 'trilobites', 'businessmen', 'birds', 'cavemen', 'clones', 'forbidden food',
                'more nanogoo', 'moonclams', 'my own clone', 'a synthesizing machine', 'nanocredits'
              ]) +
              ' and nobody can stop me!',
            'I think I lost my ' +
              choose([
                'wall-vibrating device', 'transponder', 'synchotron', 'pocket biano', 'blitar', 'praxophone',
                'moonclam', 'ID key'
              ]) +
              '.',
            'Time for ' +
              choose([
                'a new brainlobe', 'my nanomolting', 'a new arm', 'a new leg', 'a new pelvis', 'a new face',
                'a new nanomate', 'my yearly checkup', 'some sprowsing', 'a good old videoverse'
              ]) +
              '!',
            choose([
              "That videoverse's plot is barely believable.", 'That videoverse has some nicely-written characters.',
              'I think this videoverse is too large for me.', "I'm getting lost in this videoverse.",
              "I can't view this videoverse anymore. Way too scary.", "I can't stop crying at that videoverse..."
            ])
          ])
    ],
    1.5
  )
}
