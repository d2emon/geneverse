import { choose, weightedChoose, rand } from './utils'
import { things } from "./Thing"

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
    function personName (name) {
      // Generates a first name + last name, compiled from the 100 most popular names in the USA. Yes, every person in the universe is an American.
      let gender
      if (name === '*PERSON*') gender = choose([0, 1])
      else if (name === '*MAN*') gender = 1
      else if (name === '*WOMAN*') gender = 0

      // http://names.mongabay.com/male_names.htm
      let firstname = ''
      if (gender === 0) {
        firstname = weightedChoose(
          [
            'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy',
            'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle',
            'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda',
            'Amy', 'Anna', 'Rebecca', 'Virginia', 'Kathleen', 'Pamela', 'Martha', 'Debra', 'Amanda', 'Stephanie',
            'Carolyn', 'Christine', 'Marie', 'Janet', 'Catherine', 'Frances', 'Ann', 'Joyce', 'Diane', 'Alice',
            'Julie', 'Heather', 'Teresa', 'Doris', 'Gloria', 'Evelyn', 'Jean', 'Cheryl', 'Mildred', 'Katherine',
            'Joan', 'Ashley', 'Judith', 'Rose', 'Janice', 'Kelly', 'Nicole', 'Judy', 'Christina', 'Kathy', 'Theresa',
            'Beverly', 'Denise', 'Tammy', 'Irene', 'Jane', 'Lori', 'Rachel', 'Marilyn', 'Andrea', 'Kathryn', 'Louise',
            'Sara', 'Anne', 'Jacqueline', 'Wanda', 'Bonnie', 'Julia', 'Ruby', 'Lois', 'Tina', 'Phyllis', 'Norma',
            'Paula', 'Diana', 'Annie', 'Lillian', 'Emily', 'Robin'
          ],
          1.2
        )
      } else if (gender === 1) {
        firstname = weightedChoose(
          [
            'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
            'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian',
            'Ronald', 'Anthony', 'Kevin', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Jose', 'Larry', 'Jeffrey', 'Frank',
            'Scott', 'Eric', 'Stephen', 'Andrew', 'Raymond', 'Gregory', 'Joshua', 'Jerry', 'Dennis', 'Walter',
            'Patrick', 'Peter', 'Harold', 'Douglas', 'Henry', 'Carl', 'Arthur', 'Ryan', 'Roger', 'Joe', 'Juan', 'Jack',
            'Albert', 'Jonathan', 'Justin', 'Terry', 'Gerald', 'Keith', 'Samuel', 'Willie', 'Ralph', 'Lawrence',
            'Nicholas', 'Roy', 'Benjamin', 'Bruce', 'Brandon', 'Adam', 'Harry', 'Fred', 'Wayne', 'Billy', 'Steve',
            'Louis', 'Jeremy', 'Aaron', 'Randy', 'Howard', 'Eugene', 'Carlos', 'Russell', 'Bobby', 'Victor', 'Martin',
            'Ernest', 'Phillip', 'Todd', 'Jesse', 'Craig', 'Alan', 'Shawn', 'Clarence', 'Sean', 'Philip', 'Chris',
            'Johnny', 'Earl', 'Jimmy', 'Antonio'
          ],
          1.2
        )
      }

      let lastname = (rand(0, 30) === 1) ? 'Mc' : ''
      lastname += weightedChoose(
        [
          'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
          'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
          'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young',
          'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez',
          'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres', 'Parker', 'Collins',
          'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook', 'Rogers', 'Morgan',
          'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard', 'Ward', 'Cox', 'Diaz',
          'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price',
          'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins',
          'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan',
          'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West',
          'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens',
          'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson',
          'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford',
          'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt',
          'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice',
          'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver',
          'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters',
          'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley'
        ],
        2
      )
      if (gender === 1 && rand(0, 2000) === 1) {
        lastname = choose(['Elvis Presley', 'Gabe Newell']) // 4chan made me do it
      }
      return `${firstname} ${lastname}`
    }

    function medievalPersonName (name) {
      // Generates a medieval first name + last name, mostly taken from http://www.infernaldreams.com/names/Europe/Medieval/England.htm
      let gender
      if (name === '*MEDIEVAL PERSON*') gender = choose([0, 1])
      else if (name === '*MEDIEVAL MAN*') gender = 1
      else if (name === '*MEDIEVAL WOMAN*') gender = 0

      let firstname = ''
      if (gender === 0) {
        firstname = choose(
          [
            'Millicent', 'Alinor', 'Eleanor', 'Agnes', 'Alice', 'Avice', 'Beatrice', 'Cecily', 'Emma', 'Isabella',
            'Joan', 'Juliana', 'Margery', 'Matilda', 'Roh', 'Morgan', 'Elizabeth', 'Kethleen'
          ],
          1.2
        )
      } else if (gender === 1) {
        firstname = choose(
          [
            'Adam', 'Geoffrey', 'Gilbert', 'Henry', 'Hugh', 'John', 'Nicholas', 'Peter', 'Ralf', 'Richard', 'Robert',
            'Roger', 'Simon', 'Thomas', 'Walter', 'William', 'Robin', 'Albin', 'Bayard', 'Erwin'
          ],
          1.2
        )
      }

      let lastname = ''
      lastname += choose([
        'Strong', 'Tall', 'Grand', 'Bold', 'Big', 'Small', 'Fine', 'Good', 'Glad', 'Green', 'Blue', 'Red', 'Black',
        'White', 'Pale', 'Gray', 'Gold', 'Silver', 'Dark', 'Light', 'Brave', 'Sly'
      ])
      lastname += choose([
        'ington', 'son', 'house', 'door', 'castle', 'forest', 'tree', 'leaf', 'wind', 'rain', 'snow', 'rock', 'stone',
        'river', 'sea', 'ship', 'smith', 'craft', 'cook', 'worth', 'might', 'wolf', 'bear', 'sheep', 'pig', 'fox',
        'hunt', 'dragon'
      ])
      return `${firstname} ${lastname}`
    }

    function ancientPersonName (name) {
      // Generates a primitive name
      let gender
      if (name === '*ANCIENT PERSON*') gender = choose([0, 1])
      else if (name === '*ANCIENT MAN*') gender = 1
      else if (name === '*ANCIENT WOMAN*') gender = 0

      const firstname = choose([
        'Passing', 'Walking', 'Running', 'Sitting', 'Kneeling', 'Timid', 'Dreaming', 'Swift', 'Deadly', 'Wise', 'Old',
        'Young', 'Ugly', 'Bright', 'Broken', 'Fine', 'Soulful', 'Loud', 'Mad', 'Crazed', 'Unending', 'Lone', 'Sure',
        'Steady', 'Hungry', 'Crafty', 'Thirsty', 'Rising', 'Falling', 'Huge', 'Magnificent', 'Deep', 'Aching',
        'Mourning', 'Sweet', 'Kind', 'Comforting', 'Misshapen', 'Smiling', 'Sneaking', 'Trusted', 'Shifty', 'Furious',
        'Lustful'
      ])

      let lastname = choose([
        'Thought', 'Eyes', 'Legs', 'Hands', 'Nose', 'Sorrow', 'Scream', 'Whisper', 'Rage', 'Stream', 'River', 'Sky',
        'Light', 'Spark', 'Moon', 'Sun', 'Star', 'Forest', 'Cloud', 'Tree', 'Rock', 'Beast', 'Rabbit', 'Wolf',
        'Auroch', 'Mammoth', 'Lion', 'Spear', 'Flame', 'Cave', 'Ocean', 'Snail', 'Slug', 'Bear', 'Shark', 'Toad',
        'Day', 'Night', 'Friend', 'Snake', 'Ears', 'Spirit', 'Track', 'Pebble', 'Boulder', 'Mountain', 'Volcano',
        'Storm', 'Rain', 'Snow'
      ])

      if (gender === 1 && rand(0, 250) === 1) return 'Dave'
      return `${firstname} ${lastname}`
    }

    function futurePersonName (name) {
      // Generates a futuristic first name + last name
      let gender
      if (name === '*FUTURE PERSON*') gender = choose([0, 1])
      else if (name === '*FUTURE MAN*') gender = 1
      else if (name === '*FUTURE WOMAN*') gender = 0

      let firstname = ''
      if (gender === 0) {
        firstname = choose([
          'Alice', 'Trillian', 'Zeria', 'Zinda', 'Myriad', 'Shosset', 'Tary', 'Wayt', 'Cassidy', 'Millanda', 'Replika',
          'Simia', 'Mirrix', 'Bariona', 'Sossis', 'Kroassent', 'Five', 'Seven', 'Fourteen'
        ])
      } else if (gender === 1) {
        firstname = choose([
          'Bob', 'Zaphod', 'Zorvax', 'Zerebius', 'Borbon', 'Bradbury', 'Isaac', 'Werber', 'Omni', 'Robion', 'Shossur',
          'Alistor', 'Clonos', 'Sorbel', 'Boodin', 'Bagget', 'Three', 'Twelve', 'Twenty'
        ])
      }

      let lastname = ''
      lastname += choose([
        'Zar', 'Star', 'Solar', 'Jaro', 'Mera', 'Gar', 'Dar', 'Bar', 'Mar', 'Mor', 'Dor', 'Kar', 'Kra', 'Sbur',
        'Bostro', 'Astro', 'Cosmo', 'Poly', 'Beeble', 'Pro', 'Nano', 'Shimmer', 'Glimmer', 'Wander', 'Lea', 'Magna'
      ])
      lastname += choose([
        'bion', 'bius', 'micus', 'bicus', 'dion', 'dius', 'billion', 'million', 'bistor', 'bostrud', 'wund', 'brox',
        'biotis', 'saurus', 'boticus', 'meld', 'sweep', 'block', 'dine', 'zine', 'nople', 'neon', 'ba', 'zor', 'zar',
        'klor'
      ])
      return `${firstname} ${lastname}`
    }

    function memoryText () {
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

    function sadThoughtText () {
      return weightedChoose(
        [
          choose([
            'This place is crowded.', "I don't want to live here my whole life.",
            "I don't want to spend the rest of my life here.", 'I want to meet different people.', "I'm so alone.",
            "I don't want to be alone.", 'When did I get so lonely?', "I'm scared.", 'I feel so insignificant.',
            'Does it matter, really?', 'This is absurd.', 'I hate this place.', 'I hate the people here.',
            'Nobody understands me.', 'I wish the voices would stop.', "I'm in debt.", "I shouldn't spend so much.",
            "I don't really like my friends.", 'I regret doing that thing I did.', 'I hope they never find out.',
            'What if I get caught?', 'This is killing me.', 'What will happen to me when I die?', 'This is all sick.',
            "What's the point?", "I secretly know the meaning of life but I won't tell anyone.",
            "I know why we're here.", 'What if this was real?', 'Some people need to check their privilege...',
            "This isn't what I wanted.",
            'I... I just want ' +
              choose([
                'a friend', 'friends', 'someone to hug', 'a family', 'someone who understands me', 'to have kids'
              ]) +
              '.',
            "Is this how it's going to end?", "Oh, that's going on my blog."
          ]),
          choose([
            "I'm too lazy.", "I don't want to get fired.", "I'm worried.", "I don't deserve this.",
            'Why am I doing this to myself?', "This isn't like me.",
            'If only I was ' +
              choose([
                'a pirate', 'a dolphin', 'an unicorn', 'a panda', 'a cyborg', 'a robot', 'a superhero', 'invisible'
              ]) +
              '.',
            "Hold me. I'm scared.", 'This is my only shot at this.', 'This was my only shot at this, and I blew it.',
            "I won't make the same mistake twice.", 'If I must.', 'As you wish.', 'Where are my parents now?',
            'I hate myself sometimes.',
            "I'm " +
              choose([
                'worthless', 'terrible', 'just a bad person', 'just not a good person', 'so awful',
                'so alone. I need help', 'never going to amount to anything', 'no good. My mom was right',
                'not that bad, I guess', 'a faker', 'so bad at this', 'too nice for my own good'
              ]) +
              '.',
            'What a waste.', 'I wish I was a better person.',
            'I should learn a new ' + choose(['skill', 'language']) + '.',
            "I'm terrified of death.", "I don't want to get older.", "I wish I didn't waste my youth.",
            'I regret so much.', "I shouldn't have said no.",
            'I should call ' + choose(['her', 'him']) + ' and say sorry.',
            'I should call my parents.',
            'I miss ' + choose(['him', 'her', 'them']) + choose(['. So much', '', '']) + '.',
            'I ' +
              choose(['wish I was', 'should be', 'want to be']) +
              ' ' +
              choose(['more generous', 'nicer', 'more popular', 'more interesting', 'more romantic']) +
              '.',
            "I don't suck at " +
              choose(['singing', 'painting', 'dancing', 'writing', 'video-games', 'maths']) +
              '. People just think I do.',
            'Nobody must know about ' +
              choose([
                'my balding hair', 'my parents', 'this', 'me', 'my drinking problem', 'my health problems',
                'what I do in the shower', 'what I did', "what I'm about to do", "what I'm doing",
                'the movies I watch', 'the books I read', 'the websites I go on'
              ]) +
              '.',
            'I am secretly ' +
              choose([
                'a regular human being', 'perfectly normal', 'perfectly ordinary', 'spying on you right now',
                'a wizard', 'the smartest person in the world', 'the wisest person in the world',
                'the most important person in the world', 'a spider', 'a robot', 'a midget', 'a very ancient ghost',
                'an extra-terrestrial', 'a tree', 'a flower', 'a shark', 'a bear', 'my own cousin',
                'an astral monstrosity', 'a secret'
              ]) +
              '.',
            "I'm tired. I've been doing this all day.", "Don't listen to what they say. It's just not true.",
            'Too many rumors going on.', "It's not what it looks like, I swear!", 'Uh... I can explain.',
            "Well, I'm glad nobody can read my mind.", "My friends aren't real.", "I'm the only real person here."
          ]),
          choose([
            'I need', 'I want', 'I might need', 'I should get', 'What I want is', 'What I need right now is',
            "I'll just get"
          ]) +
            ' ' +
            choose([
              'some new shoes', 'a new TV', 'a new computer', 'another car', 'a bigger house', 'a better job',
              'a lover', 'more pets', 'a makeover', 'a good movie', 'a nice dinner in town'
            ]) +
            '.',
          choose([
            'My ' +
              choose(['butt', 'nose', 'foot', 'ear', 'forehead', 'back']) +
              ' is itchy.',
            'My ' +
              choose(['head', 'leg', 'arm', 'belly', 'back', 'shoulder']) +
              ' ' +
              choose(['feels weird', 'feels icky', 'hurts', 'feels strange']) +
              '.',
            'I should see a doctor for my ' +
              choose(['eyes', 'brain', 'head', 'chest', 'legs', 'back']) +
              '.'
          ]),
          choose([
            'This ' +
              choose(['marriage', 'relationship']) +
              ' ' +
              choose(['is a failure', 'is a disaster', 'was a mistake', "isn't working"]),
            'I regret getting married', 'I want a divorce', "This isn't why I got married"
          ]) +
            '.',
          choose([
            choose([
              "I just can't stand the taste of", 'I am not going to finish', 'I paid way too much for',
              "I don't really like"
            ]) +
              ' ' +
              choose([
                'this hamburger', 'this steak', 'this salad', 'this pasta', 'this sandwich', 'this pizza', 'this meal',
                'this beer', 'this soda'
              ]) +
              '.',
            choose([
              'I hate that show', 'That show is revolting', "I hate that show, but I'm going to watch it anyway",
              'My parents used to watch that show', "There's nothing on TV", "That's a stupid movie",
              "I've seen that movie already"
            ]) +
              '.',
            choose(['Wait, ', 'Hold on. ', 'Ugh. ', 'Ugh, I told them ', '']) +
              "I'm allergic to " +
              choose(['shrimp', 'soy', 'pineapple']) +
              '.'
          ]),
          choose([
            'This will not stand.', "Dammit I'm mad.", 'Yes, I am mad.', "I won't let this happen.",
            'No. Never. Not if I have a word in it.', 'Over my dead body.', 'Do they have any idea how angry I am?',
            'I am absolutely furious.', 'This upsets me.', 'Well, I am upset.', 'On we march.', 'This is not over.',
            'I can see them, beyond the stars.', "I can sense them. They're coming.", 'Something is coming this way.',
            'Something is about to go horribly wrong.', 'It was written.', 'It is coming.', 'We must fight on.',
            "I've seen things.", "Oh no. I'm thinking weird stuff again.", "Do you really think I can't see you?",
            "I don't look at the world the way I used to.", "Can't you hear them?", "It's always there.",
            "It won't go away.", "There are things that I just can't explain.", 'Who where?',
            "They don't think it is like this. But it is.", 'The world looks too intense for me.',
            'I never asked for this.', "No! I don't want that!",
            "What if we're all living in a giant computer simulation?", 'This place would look good on fire!',
            "This is the end, isn't it?", 'The end.'
          ])
        ],
        1.4
      )
    }

    function happyThoughtText () {
      return weightedChoose(
        [
          choose([
            'What a nice day!', "It's sunny today.", "It's a sunny day out.", "It's such a nice day.",
            "It's such a great day to be alive!", 'This is a happy kind of day.', 'I feel great.',
            "Ooh, I'm feeling fine.", "I'm feeling awesome.", 'Hey, this is great!', "I'm so glad I came here.",
            'I regret nothing!', 'Regrets are pointless.', 'I have no regrets.', 'This is what I wanted!',
            "Everything's going just fine.", "I can't wait!", 'Things are going smoothly.',
            "I'm just happy to be here.",
            'Well, this is ' +
              choose([
                'unexpected', 'awkward', 'fun', 'just funny', 'strange', 'interesting', 'odd', 'peculiar', 'weird'
              ]) +
              '.',
            'I know the meaning of life!', "I didn't expect this!", "I'm glad someone understands me.",
            "I'm glad someone likes me for who I am.", 'I love my friends!', 'Life is good!',
            'I could picture myself spending the rest of my life here.', 'I should meet new friends!', 'I feel loved.',
            'I feel almighty!', 'I matter.', 'This place is nice.', "Everybody's great in some way!",
            'I hope ' +
              choose(['they', 'she', 'he']) +
              "'ll like me!",
            'I wonder what happens next!', "It's all going to be alright.",
            "It'll all be alright in the end. I just know it.", 'This is actually okay.', 'I love the whole world!',
            'The world is a big place!', 'The world is amazing!', 'So it has come to this.',
            'Well this is an interesting development.', "Let's see what happens next.", 'Oh hey. I found me.',
            'I NEED to blog about this.'
          ]),
          choose([
            'I should take a self-help course!', "I'm doing alright.", 'My job is pretty fulfilling.',
            "I don't really worry.", 'Worrying is pointless!', 'This is cooler than I expected!',
            'Haha, this is just like me.',
            "Wouldn't it be awesome if I was " +
              choose([
                'a pirate', 'a dolphin', 'an unicorn', 'a panda', 'a cyborg', 'a robot', 'a superhero', 'invisible'
              ]) +
              '?',
            "I'm pretty self-confident.", "I'm a pretty big deal.", "I'm pretty extreme.",
            choose([
              'You want a piece of this?', "I'm all business, all the time.", 'I vibrate through walls.',
              'This is going to be gay as hell.', "We're making this happen!"
            ]),
            'I mean, wow.', 'Yep. Just a regular human person. Nothing to see here.', 'I want to become even better!',
            'I should learn a new ' + choose(['skill', 'language']) + '!',
            "I hope I'll become a nice old person.", 'I kinda miss my youth!',
            'I should call ' + choose(['her', 'him']) + ' and say "I love you"!',
            'Maybe I should call my parents?', 'You can always better yourself.',
            'Do I really suck at ' +
              choose([
                'singing', 'painting', 'dancing', 'writing', 'video-games', 'maths'
              ]) +
              '?',
            "I'm secretly " +
              choose([
                'super-hardcore', 'perfectly normal', 'perfectly ordinary', 'peeking over your shoulder right now',
                'a wizard', 'the smartest person in the world', 'the wisest person in the world',
                'the most important person in the world', 'a spider', 'a robot', 'a midget', 'a very ancient ghost',
                'an extra-terrestrial', 'a tree', 'a flower', 'a shark', 'a bear', 'my own cousin',
                'an astral monstrosity', 'a secret'
              ]) +
              '!',
            'H-here I go!', 'This place would look good on fire!',
            "I don't worry, because I know nothing matters in the end.", "Well, I'm glad nobody can read my mind."
          ]),
          choose([
            'Hmm! I should get', 'I know what would be awesome...', 'Time for', 'I need', 'You know what? I need',
            "Know what I need? I'll tell you - "
          ]) +
            ' ' +
            choose([
              'some new shoes', 'a new TV', 'a new computer', 'a new car', 'a bigger house', 'a cooler job', 'a lover',
              'more pets', 'a makeover', 'a good movie', 'a nice dinner in town'
            ]) +
            '!',
          choose([
            'This is the best relationship ever.', 'I love being married!',
            "Marriage isn't as bad as they make it out to be!", 'This relationship is awesome!', 'I love my family.',
            'I love doing stuff with my family.'
          ]),
          choose([
            choose([
              'I really, really like', "I can't get enough of", "I'm going to get more of", 'I wonder what they put in'
            ]) +
              ' ' +
              choose([
                'this hamburger', 'this steak', 'this salad', 'this pasta', 'this sandwich', 'this pizza', 'this meal',
                'this beer', 'this soda'
              ]) +
              '.',
            choose([
              'Haha, I love that show!', 'That show is confusing!', 'That show is hilarious.',
              "That's a silly show, but there's nothing on TV anyway.", 'Oooh, my parents used to watch that show!',
              "There's nothing on TV!", "That movie's plot is hilariously bad.", "I've never seen that movie before!"
            ])
          ])
        ],
        1.4
      )
    }

    function medievalMemoryText () {
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

    function medievalThoughtText () {
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

    function ancientMemoryText () {
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

    function ancientThoughtText () {
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

    function futureMemoryText () {
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

    function futureThoughtText () {
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

    function paintingDescription () {
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

      let res = ''
      res += weightedChoose(
        [
          'A painting of', 'A portrait of', 'A picture of', 'A photograph of', 'A rendition of', 'A sculpture of',
          'A bas-relief of', 'An installation of', 'A series of pictures representing',
          'A series of photographs showing', 'A model of', 'A dyptic of', 'A tryptic of'
        ],
        3
      ) + ' '
      res += choose([
        '$adj $obj $loc.', '$adj $obj $verbing $loc.', '$adj $obj $loc. The $obj is $verbing.',
        '$adj $obj and $adj2 $obj2 $loc. The $obj is $tverbing the $obj2.',
        '$adj $obj and $adj2 $obj2 $loc. The $obj2 is $verbing, and the $obj is $verbing2.',
        '$adj $obj $tverbing $adj2 $obj2. The $obj2 is $verbing.', '$adj $obj $tverbing $adj2 $obj2 $loc.'
      ])

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

    function noteDescription () {
      let res = ''
      /*
    // Notes found hidden in people's pockets, etc. Can contain recipes, laundry bills, or creepy observations.
    str += Choose([
      Choose(["I'm sorry.", 'I regret everything.', 'I regret nothing!', "Please don't judge me.", 'I wish things went otherwise.', "I didn't know what to say.", 'Thanks for the dinner.' + Choose(['', ' It was great.', ' I enjoyed it.']), 'I have this ' + Choose(['neat', 'cool', 'awesome', 'stupid']) + ' idea for ' + Choose(['a book', 'a joke', 'a story', 'a film']) + '. It involves ' + Choose(['pirates', 'ninjas', 'dinosaurs', 'unicorns', 'robots', 'cyborgs', 'scientists', 'superheroes', 'maths']) + ', ' + Choose(['surgeons', 'penguins', 'dolphins', 'cheese', 'dragons', 'ghosts', 'kittens', 'sarcasm', 'astronomers', 'banana peels']) + ' and ' + Choose(['spaceships', 'vegetarians', 'babies', 'art', 'time travel', 'abortions', 'philosophy', 'computers', 'punctuation', 'magnets', 'geometry', 'language']) + '.', 'Socks and sandals. Because I can.', "I like shorts. They're comfy and easy to wear.", 'Ski masks are in right now.', 'Recipe for happiness :<br>1)?', "How to be happy :<br>-eat well<br>-sleep early<br>-don't ask questions", "Hey.<br>I'll show you something neat :<br>add?seed=*** to the url<br>and replace *** by whatever you want,<br>like person or bookshelf or ocean.", 'You will find the strangest things in the oddest places.', "I'd love to learn a foreign language. But they don't seem to exist...", 'Alright, how comes everybody in the universe has an american name?']),
      Choose(['I know who you are.', 'I see you.', 'Stop looking through my stuff!', 'So, I was right after all? You were sifting through my stuff?', "They don't know where I hid it.", 'Hi!', 'Hello there!', 'Pay attention.', "I'm proud of you.", "Don't look behind you.", "It's on its way to find you now.", "Let's not get too meta.", 'we are all nested<br>we are all viewed<br>we are all viewing<br>nested<br>nesters<br>nestees<br>all is one', 'Well? Did you?', 'OH MY GOD<br>WHAT IF SOMEONE IS LOOKING AT ALL THIS RIGHT NOW', 'I found myself in a website once.', 'But for real though. Nothing is of any significance to anything. There is no overarching story. There is no grand scheme of things. There is only here and now.', 'Tell you what. None of this is randomly generated. All this data is actually being transferred from the real world.', 'Every time you refresh, a new universe is being born just for you. Think about it before you close the page.', 'Did you know? A team of 781 persons worked on this game for 11 years, painstakingly adding in every single thing they could think of.', 'aint no universe like a nested universe', 'this party gettin started or what', 'it aint stopping oh god', 'There is no Nested; only shark.', 'Nothing makes sense, and nothing ever will.', "There's no real point to anything, and that's okay.", 'Hands off, you plebeian!', 'Everything is fine. Everything is fine. Everything is fine. There is nothing to worry about. Nothing at all.', "I have a secret for you. Wait no, I don't.", "Tell me a secret. Wait. I don't care.", '(The note is ' + Choose(['burnt', 'partly-burnt', 'washed-off', 'bleached', 'covered in scribblings', 'covered in strange symbols', 'covered in intricate patterns', 'covered in densely-written instructions']) + ' and indecipherable.)', 'This universe is so. Very. Large.', Choose(['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']) + Rand(0, 9) + '' + Rand(0, 9) + '' + Rand(0, 9) + '' + Rand(0, 9) + '']),
      Choose(['Laundry service : $' + Rand(10, 50) + '.' + Rand(0, 9) + '0']),
      Choose(['Recipe :<br>-' + Choose(['toast', 'bagel', 'breadstick', 'garlic bread', 'pita', 'taco shell']) + '<br>-' + Choose(['eggs', 'ground beef', 'fries', 'ice cream', 'mashed potatoes']) + '<br>-' + Choose(['chocolate syrup', 'whipped cream', 'cheese', 'mayonaise', 'vinegar', 'tabasco', 'cough syrup', 'soy sauce'])])
    ])
       */
      return `"${res}"`
    }

    function bookDescription () {
      // This is probably my favorite name generator.
      let res = choose([
        choose([
          'All about ', 'Of ', 'Everything you need to know about', 'The definitive guide to', "A beginner's guide to",
          'How to deal with', 'Dealing with', 'Hanging out with', 'Making friends with', 'I fell in love with',
          'Falling in love with', 'The shocking truth about', "They're serious :", "Here's a book about",
          'A conversation with', 'Why we need more', 'Nobody understands', 'Who cares about', 'A study on',
          'These are not my', 'Say no to', 'Getting away from', 'Getting along with', 'Avoiding', 'Approaching',
          'Investigating', 'Not worth it :', 'Stay away from', 'Never underestimate', 'Anatomy of', 'I hate', 'I love',
          'Who hates', 'Who loves', 'They were', 'Living with', 'Cooking with', 'Cooking for',
          rand(10, 200) + ' recipes for',
          'A few words on', 'They know where you live :', 'What I think about', "What you didn't know about",
          'The truth on', "What they don't show you about", 'Hey look,', 'Aw crap,', 'Holy crap,', 'Understanding',
          'Getting rid of', 'Delicious', "They're okay :", 'Licking', 'Reasoning with', "You can't explain that :",
          'Drawing', 'Choosing your', 'Night of the', 'Day of the', 'Revenge of the', 'The book of', 'The big book of',
          "Those aren't my", 'Hey everyone,', 'The chorus of'
        ]) +
          ' ' +
          choose([
            'weird', 'mutant', 'normal', 'serious', 'elongated', 'exploding', 'obese', 'skinny', 'whiny', 'stupid',
            'slimy', 'creamy', 'tiny', 'small', 'giant', 'gigantic', 'ancient', 'tasty', 'obnoxious', 'invisible',
            'shiny', 'boring', 'confused', 'lost', 'lonely', 'curly', 'frilly', 'friendly', 'annoying', 'space',
            'green', 'orange', 'purple', 'mauve', 'transparent', 'stilted', 'hairy', 'bald', 'ridiculous', 'demanding',
            'imaginary', 'awkward', 'stubborn', 'pretentious', 'naughty', 'nasty', 'lazy', 'fancy', 'magic', 'clumsy',
            'smelly', 'bearded', 'sleazy', 'rabid', 'translucent', 'edible', 'inedible', 'foreign', 'snotty',
            'mind-reading', 'telepathic', 'silent'
          ]) +
          ' ' +
          choose([
            'shrimps', 'birds', 'people', 'friends', 'relatives', 'chappies', 'whales', 'deities', 'cactii', 'fungi',
            'shellfish', 'alligators', 'jellyfish', 'crabs', 'hoboes', 'machines', 'robots', 'goats', 'cyborgs',
            'ninjas', 'fish', 'mushrooms', 'mammals', 'reptiles', 'amphibians', 'cephalopods', 'spiders', 'fossils',
            'moustaches', 'perverts', 'mermaids', 'squids', 'lampreys', 'seafood', 'turtles', 'unicorns', 'barbarians',
            'vampires', 'werewolves', 'teenagers', 'babies', 'kids', 'ladies', 'superheroes', 'roads', 'hats',
            'insects', 'centaurs'
          ]),
        choose([
          'Tales of', 'Chronicles of', 'A history of', 'The gates of', 'Objective : ', 'Reaching for', 'War for',
          'Battle for',
          choose([
            'Money', 'A savior', 'A wizard', 'A warrior', 'A hero', 'A prince', 'A king', 'A princess', 'A queen',
            'Cake', 'Booze'
          ]) +
            ' for',
          'The ruins of', 'The prophet of', 'Zealots on', 'Mysteries of', 'The temple of', 'The vagrant from',
          'The nights of', 'Conquerors from', 'They came from', 'The spaceships on', 'The soldiers of',
          'The warrior from', 'On the moons of', 'Saving', 'Glory for', 'Rulers of', 'Kings of', 'Lords of',
          'Princes of']) +
            ' ' +
            choose(['G', 'P', 'S', 'St', 'Sh', 'B', 'F', 'K', 'Z', 'Az', 'Oz']) +
            choose(['', '', '', 'r', 'l']) +
            choose(['u', 'o', 'a', 'e']) +
            choose([
              'r', 'sh', 'nd', 'st', 'sd', 'kl', 'kt', 'pl', 'fr', 'ck', 'sh', 'ff', 'gg', 'l', 'lig', 'rag', 'sha',
              'pta', 'lir', 'limd', 'lim', 'shim', 'stel'
            ]) +
            choose(['i', 'u', 'o', 'oo', 'e', 'ee', 'y', 'a']) +
            choose(['ll', 'th', 'h', 'k', 'lm', 'r', 'g', 'gh', 'n', 'm', 'p', 's', 'rg', 'lg']),
        choose([
          choose(['How to', 'Learning how to', 'Teaching yourself how to']) +
          ' ' +
          choose([
            'knit', 'dance', 'swim', 'cook', 'play piano', 'program', 'be cool', 'be popular', 'be friendly',
            'be nice', 'be smarter', 'stay fit', 'be succesful', 'make money', 'be funny', 'find a job', 'write books',
            'make a website', 'play chess', 'do magic tricks', 'do yoga', 'be happy'
          ]),
          choose([
            "A beginner's guide to", 'All about', 'Everything you need to know about', 'The basics of',
            'The secrets of', 'The definitive guide to', 'Advanced techniques for'
          ]) +
          ' ' +
          choose([
            'knitting', 'dancing', 'swimming', 'cooking', 'playing piano', 'programming', 'being cool',
            'being popular', 'being friendly', 'being nice', 'getting smarter', 'staying fit', 'being succesful',
            'making money', 'being funny', 'finding a job', 'writing books', 'making websites', 'playing chess',
            'magic tricks', 'yoga', 'happiness'
          ])
        ]),
        choose([
          '',
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
        ]) +
          choose([
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
          ]) +
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
            ]),
        choose([
          'A shocking', 'An amazing', 'A vibrant', 'A heart-warming', 'A true', 'An astounding', 'A riveting',
          'A twisted', 'A short', 'An elaborate', 'An overly elaborate', 'A ridiculous', 'A hilarious', 'A boring',
          'An illustrated', 'A mind-numbing', 'A'
        ]) +
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
          ]),
        choose([
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
        ]) +
          choose([
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
          ]) +
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
      ])
      if (rand(0, 10) === 0)
        res += ', ' +
          choose(['Part', 'Tome', 'Volume']) +
          ' ' +
          choose(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'])
      /*
      this.name = Title(str)
       */
      return res
    }

    function charDescription () {

      let res = ''
      /*
    str = "aaaabbccddeeeeffgghhhiijkkllmmnnooppqqrrrssstttuuvwwxyz.,;!?:()-'"
    if (Rand(0, 20) == 0) str += '0123456789*$/#&'
    str = str.split('')
    str = Choose(str)
    if (Rand(0, 30) == 0) str = str.toUpperCase()
       */
      return res
    }

    function monumentDescription () {

      let res = ''
      /*
    str += Choose([
      Choose([Choose([WeightedChoose(['old', 'new', 'ancient', 'historic', 'royal', 'imperial', 'sunken', 'painted', 'crooked', 'slanted', 'high', 'rising', 'underground', 'immersed', 'twisted', 'shaky', 'lucky', 'glorious', 'flying'], 2), WeightedChoose(['great', 'big', 'large', 'giant', 'huge', 'grand', 'gigantic', 'colossal', 'tremendous', 'humongous'], 0.5)]) + ' ']) + Choose(['', '', '', Choose(['stone', 'gold', 'silver', 'copper', 'bronze', 'metal', 'white', 'black', 'blue', 'green', 'yellow', 'red', 'grey', 'crimson', 'azure', 'viridian']) + ' ']) + WeightedChoose(['tower', Choose(['', 'smiling ', 'proud ', 'wise ', 'horse ', 'freedom ', 'watching ', 'crying ', 'singing ']) + 'statue', 'bridge', 'park', 'towers', 'palace', 'statues', 'gardens', 'parks', 'cathedral', 'ruins', 'wall', 'church', 'maze', 'castle', 'radio tower', 'arena', 'keep', 'colossus', 'space needle', 'house', 'villa', 'manor', 'dungeon', 'opera', 'pyramid', 'cave', 'ark', 'wheel'], 5)
    ])
    str = 'The ' + str
    this.name = Title(str)
       */
      return res
    }

    const instanceName = this.type.namegen

    if (typeof(instanceName) !== 'string') {
      this.name = ''
      if (typeof(instanceName[0]) === 'string') {
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
