<template>
  <div id="wrapper">
    <div id="topBar">
      <a target="_blank">Generators</a>
      <div class="hoverable">
        <a href="?gen=names.txt">Name generator</a>
        <a href="?gen=color.txt">Color generator</a>
        <a href="?gen=animal.txt">Animal generator</a>
        <a href="?gen=creature.txt">Creature generator</a>
        <a href="?gen=corvophraser.txt">Corvophraser</a>
        <a href="?gen=cookie.txt">Cookie generator</a>
        <a href="?gen=loot.txt">Dungeon loot generator</a>
        <a href="?gen=insult.txt">Insult generator</a>
        <a href="?gen=twitchplayspokemon.txt">Twitch Plays Pokémon chat generator</a>
        <a href="?gen=tumblr.txt">Tumblr generator</a>
			</div>
      <div>
        <a href="?do=create">Make your own</a>
      </div>
      also :
      <div>
        <a href="http://orteil.dashnet.org/cookieclicker" target="_blank">Cookie Clicker</a>,
        <a href="http://orteil.dashnet.org/nested" target="_blank">Nested</a>
      </div>
	  </div>
    <div id="gameWrapper">
		    <div id="game" :class="gameClass">
			    <div id="supportContainer" style="padding:0px;" class="middle"></div>
	    		<div id="starter" class="middle"></div>
		    	<div id="edit" class="middle">
            <v-textarea
              name="quickGameData"
              label="Quick game data"
              :value="quickGameData"
            />
            <v-textarea
              name="quickCSS"
              label="Quick CSS"
              :value="quickCSS"
            />
          </div>
          <div id="loading" class="middle">{{loading}}</div>
          <div id="home" class="middle">
            <div style="width:50%;margin:auto;">
              <br/>
              <div style="width:128px;height:128px;background:url(random2.png);margin:16px auto;"></div>
              <p>
                Welcome to <b>RandomGen</b> : a simple tool to create random text generators, and a directory of such
                generators.
              </p>
              <br/>
              You may check out the existing generators above, or <a href="?do=create">try making one yourself</a>.<br/>
              <br/>
              You might also like <a href="http://orteil.dashnet.org/nested" target="_blank">Nested</a>, a universe
              generator I made a while ago.<br/>
              <br/>
              RandomGen was created by <a href="http://orteil.dashnet.org/">Orteil</a>, some guy who really likes
              random generators.
            </div>
          </div>
          <div id="create" class="middle">
            <div>
              <br />
              <p>Alright, let's make some stuff!</p>
              <br />
              <h1>First : a few things</h1>
              <h2>What's a random generator?</h2>
              <p>
                A random generator is a simple application that produces random text at the click of a button. There are
                generators that output random names, others that write descriptions of strange imaginary monsters, but you
                could imagine a generator for just about anything - such as a generator that returns a random story, or a
                random cooking recipe!
              </p>
              <br />
              <h2>So how do I make a generator?</h2>
              <p>
                Well, it's fairly easy. All generators in RandomGen are simply text files that our website converts into
                generators.<br />
                To make your own generator, you will have to write that text file using the syntax described below (you'll
                see, you can do all kinds of neat stuff). Here's what a finished generator source file looks like :
                <a href="http://pastebin.com/raw.php?i=cKeB4v4J" target="_blank">http://pastebin.com/raw.php?i=cKeB4v4J</a>.
                Pretty readable, huh?
              </p>
              <p>
                You will then have to find a place online to store your text file
                (<a href="http://pastebin.com/" target="_blank">pastebin.com</a> is a good one; your text files are hosted
                for free and, if you register, you can edit them as much as you want.
                <a href="http://www.topsite.com/best/paste" target="_blank">Here are some other text-hosting sites</a>).
              </p>
              <p>Once you're happy with your new generator, all that remains to do is to share it with the world!</p>
              <br />
              <h2>How do I use my generator once it's written?</h2>
              <p>
                To use a generator, take its source file's URL and append it to
                <b>http://orteil.dashnet.org/randomgen/?gen=</b>.<br />
                A generator stored at <b>www.example.com/mygenerator.txt</b> would be usable at
                <b>http://orteil.dashnet.org/randomgen/?gen=www.example.com/mygenerator.txt</b>.
              </p>
              <ul>
                <li>
                  <b>Note : we seem to be having problems with pastebin.com right now.</b> Probably a bandwidth limit being
                  reached. Sorry!
                </li>
                <li>
                  If your generator is hosted on pastebin.com, you only have to refer to its identifier (the letters at the
                  end of its url). For example,
                  <a href="http://pastebin.com/cKeB4v4J" target="_blank">http://pastebin.com/cKeB4v4J</a> becomes
                  <a href="http://orteil.dashnet.org/randomgen/?gen=cKeB4v4J" target="_blank">
                    http://orteil.dashnet.org/randomgen/?gen=cKeB4v4J
                  </a>.
                </li>
                <li>
                  <b>Note :</b> when hosting your file on pastebin.com, make sure you're registered - or you won't be able
                  to edit your generator later! Also make sure to set the file to never expire, and to make it either
                  public or unlisted.
                </li>
                <li>
                  If you're not hosted on pastebin.com, make sure your file is a .txt file! Your generator won't work with
                  any other file type.
                </li>
              </ul>
              <p></p>
              <br />
              <h2>General tips about writing generators</h2>
              <p></p>
              <ul>
                <li>You can make a generator for practically <i>anything</i>.</li>
                <li>Spend some time examining the sources of other generators, you'll probably learn a lot.</li>
                <li>Test your generator. <i>A lot.</i></li>
                <li>Keep backups of your generator's source - you never know!</li>
                <li>Adding a description, picture, and some nice formatting can really help your generator stick out.</li>
                <li>
                  Beware of spelling mistakes, they can quickly make a generator appear very unprofessional. Use
                  spell-check!
                </li>
                <li>
                  This page doesn't include all the tricks and subtleties of RandomGen - again, check out the source of
                  existing generators, and see what's happening on the
                  <a href="http://forum.dashnet.org/categories/rg-general-discussion" target="_blank">RandomGen forums</a>!
                </li>
              </ul>
              <p></p>
              <br>
              <h1>Writing source files</h1>
              <h2>Quick overview</h2>
              <p>
                To create a random generator, you simply have to define lists of things that reference each other. For
                example :<br/>
              </p>
              <pre>
      $animal
      cat
      dog
      fish

      $phrase
      My pet is a [animal].
      I am feeding my [animal].
              </pre>
              <br />
              This will generate sentences such as "My pet is a cat", or "I am feeding my fish".<br />
              The last list declared will be used as the base generator (in this case : $phrase).<br />
              You can change how many items are generated by adding "<pre>&amp;amount=10</pre>" to the url; you can also
              change the base generator by adding "<pre>&amp;seed=element</pre>".<br />
              <p></p>
              <br />
              <h2>Global settings</h2>
              <pre>$name : My Generator</pre><br>
              <pre>$author : Author</pre><br>
              <pre>$description : Description of my generator</pre><br>
              <pre>$picture : http://.../pic.png</pre><br>
              (should be 128x128px)<br>
              <pre>$amount : 3</pre><br>
              sets the default amount of results the generator should yield<br>
              <pre>$button : Another!</pre><br>
              sets the text for the "Generate" button<br>
              <br>
              <h2>Inclusions</h2>
              <pre>$include http://url.com</pre><br>
              This adds to your generator everything defined in the generator at the specified URL.<br>
              Inclusions should always be declared at the top of the file, before any other data.<br>
              Try to use as few inclusions as possible, as they make the loading time for your generator much longer.<br>
              You are encouraged to create "utility generators" full of lists (such as names or colors) that other people
              can include in their own generators to expand them easily.<br>
              <br>
              <h2>Creating lists of elements</h2>
              <pre>$animal</pre><br>
              Starts a new list with the identifier "animal".<br>
              <pre>$+animal</pre><br>
              Starts adding elements to the list with this identifier. This is good for expanding on included lists.<br>
              <pre>fish</pre><br>
              Adds a new element named "fish" to the current list.<br>
              <pre>fish {20%}</pre><br>
              Adds a new element to the current list, but this element will only have a 20% chance of being added to the
              random selection table.<br>
              <br>
              <h2>Nesting elements</h2>
              <pre>I own a [animal].</pre><br>
              [animal] will be replaced by a random element from the $animal list.<br>
              <pre>I need a quick random [word|term|thing to say].</pre><br>
              This returns one of the elements between brackets at random, without needing to create a separate list.<br>
              Can even be nested with regular lists, as such :<br>
              <pre>I am eating a [[fruit]|[vegetable]|[candy]].</pre><br>
              This can quickly get complicated - make sure to keep track of your brackets!<br>
              <br>
              <h2>Identifiers</h2>
              <pre>My pet is a [animal,#pet]. I've always wanted a [#pet].</pre><br>
              Remembers the animal by its identifier (#pet) and returns the same animal in both instances.<br>
              <pre>My [#pet]'s name is [name,#name,written]. Would you like to see [#name]?</pre><br>
              Adding "written" will record the element as its literal representation, instead of its generator. This is
              necessary in some cases.<br>
              <br>
              <h2>Attributes</h2>
              Check this out :<br>
              <pre>
      $animal
      cat {action:meows}
      dog {action:barks}
      fish {action:swims}

      $phrase
      I have a [animal,#pet]. My [#pet] is [#pet,as action].
              </pre>
              <br>
              This is a bit trickier. The syntax {attribute:value} will add custom properties to elements which can be
              referred to later. You could use this for things such as gender, verb tenses, alternate descriptions, and so
              on.<br>
              <pre>My [#pet] is [#pet,as action,or sleeping]</pre><br>
              This defines what to fall back to ("sleeping") if the specified attribute doesn't exist for an element.<br>
              <br>
              <h2>Utilities and other fun things</h2>
              <pre>There are [100-10000] leaves here.</pre><br>
              Returns a random number between two bounds.<br>
              <pre>My name is [random syllable,x2-6].</pre><br>
              The "x2-6" will return between two and 6 of the specified element.<br>
              <pre>There is [an] [word].</pre><br>
              [an] will be replaced by "a" or "an", depending on the next letter.<br>
              <pre>Look at all the [animal][s]!</pre><br>
              [s] will replace the previous word to its proper plural (this is not fool-proof and can sometimes return
              silly results).<br>
              <pre>The book's cover reads "[book name,title]".</pre><br>
              The "book name" will have title-like capitalization ("my cat has asthma" will be converted to "My Cat Has
              Asthma").<br>
              <pre>Look at my [animal]. Look At My [Animal]. LOOK AT MY [ANIMAL].</pre><br>
              The engine will detect the proper letter case and will respectively return : "Look at my cat. Look At My Cat.
              LOOK AT MY CAT."<br>
              This might not always work; if you need to capitalize something like [#pet], you can write [#1,Abc].<br>
              <br>
              <h2>Formatting with html</h2>
              Finally, you can use some
              <a href="http://www.w3schools.com/html/html_intro.asp" target="_blank">html tags</a> to add a bit of
              formatting.<br>
              Tags allowed are &lt;b&gt;, &lt;i&gt;, &lt;u&gt;, &lt;q&gt;, &lt;p&gt;, &lt;small&gt;, &lt;big&gt;,
              &lt;h1&gt; / &lt;h2&gt; / &lt;h3&gt; and &lt;br&gt;.<br>
              <br>
              <h1>Conclusion</h1>
              <h2>Closing words</h2>
              <p>
                Ready to show off your new generator? Take its URL and share it with anyone you want. Send it to your
                family, your friends, your dog!<br>
                People on our <a href="http://forum.dashnet.org/categories/rg-general-discussion" target="_blank">RandomGen
                forums</a> will be more than happy to try and comment on your generator. And who knows, if your generator
                makes enough noise, we might even end up adding it to the list!
              </p>
              <h2>Credits</h2>
              <p>
                RandomGen is an app by Orteil and Opti, 2014. All rights reserved.<br>
                We hope you have as much fun using it as we had making it!<br>
                Need to contact us? Please do so through our <a href="http://forum.dashnet.org/" target="_blank">forums</a>.
              </p>
            </div>
          </div>
          <div id="content" class="middle">
            <div id="header">
              <div id="info">
                <div id="gameNameAndAuthor">
                  <span id="gameName">Name generator</span><span id="gameAuthor"> by Orteil</span>
                </div>
                <div id="gameDesc">
                  Used for inclusion if you ever need a random name. Can be a bit slow. Read source for more info.
                </div>
                <div id="settings">
                  <label>
                    <a id="gameSource" target="_blank" href="http://orteil.dashnet.org/randomgen/gens/names.txt">
                      View source
                    </a>
                  </label>
                  <label>Amount : <input type="text" maxlength="2" size="2" id="amountInput"></label>
                  <div id="generateButton" class="button" onclick="Game.Generate();">Generate</div>
                </div>
              </div>
            </div>
            <div id="pic" style="display: block; background-image: url(&quot;http://s21.postimg.org/52hr2w4o3/people.png&quot;);"></div>
            <div id="text">
              <div v-for="(name, id) in names" :key="id" class="generation" v-text="name" />
            </div>
          </div>
		    </div>
	  </div>
  </div>
</template>

<script>
  export default {
    name: 'NameGen',
    data: () => ({
      ready: false,
      loading: '',
      gameClass: '',

      quickGameData: '',
      quickCSS: '',
      inList: 0,
      listNames: [],
      lists: {},

      name: 'Untitled',
      author: 'anonymous',
      picture: '',
      desc: '',
      again: 'Generate',
      allUnique: 1,

      urlVars: {},
      src: '',
      seed: '',
      amount: 0,
      urlData: '',

      names: [
        'Arthur Fernandez',
        'Paul Taylor',
        'Sandra Turner',
        'Albert Green',
        'Amanda Holmes',
        'Donna Parker',
        'Elizabeth Adams',
        'Anthony Cox',
        'William Butler',
        'Evelyn Olson',
        'Nicole Howard',
        'Todd Russell',
        'Matthew Lewis',
        'Charles Gonzales',
        'Nicholas King',
        'Ernest Young',
        'Beverly Allen',
        'Carol Simmons',
        'Ashley Dixon',
        'Patricia Hayes'
      ]
    }),
    methods: {
      ajax (url) {
        const baseUrl = 'http://orteil.dashnet.org/randomgen/'
        const nocache = new Date().getTime()
        return fetch(`${baseUrl}${url}&nocache=${nocache}`)
      },

      fetchGame () {
        this.ajax(`server.php?q=gettxt|${this.src}`)
          .then(this.fetchGameResponse)
      },
      fetchGameResponse (response) {
        console.log(response)
        if (this.src) this.parseData(response)
      },
      reset () {
        /*
		Game.debugging=0;
		Game.nesting=0;
		Game.identified=[];
		Game.uniques=[];
		Game.commenting=0;
         */
      },
      list (name, data) {
        /*
		this.name=name.toLowerCase();
		this.data=data||[];

		this.toStr=function()
		{
			var str=[];
			for (var i in this.data)
			{str.push(this.data[i].text);}
			return str.join(' / ');
		}
		this.Generate=function(as,toObj)
		{
			var as=as||'';
			if (Game.nesting>30) {console.log('Too much nesting is going on. Things are invoking themselves in a loop! Please try again.');throw {name:'FatalError',message:'Too much nesting; possible recursion.'};}
			//var out=choose(this.data);

			var pickedData=[];
			for (var i in this.data)
			{
				if (Math.random()<this.data[i].tags.chance) pickedData.push(this.data[i]);
			}
			var out='';
			var picked={'text':'','tags':[],'type':''};
			if (pickedData.length>0)
			{
				picked=chooseWithLimits(pickedData,Game.uniques);
			}

			var list=[];
			for (var i in pickedData) {list.push(pickedData[i].text);}
			log('Picking between '+list.join(',')+'. Picked "'+picked.text+'"!');

			if (toObj)
			{
				//return Game.ParseToObj(picked.text);
				return picked;
			}
			else
			{
				return Game.ToText(picked,as);
			}
		}

		Game.Lists[this.name]=this;
		Game.ListNames.push(this.name);
         */
      },

      parseData (data) {
        const originalData = data
    		//clean up

        console.log(originalData)
        /*
		//collapse tabs etc into single spaces
		data=replaceAll(String.fromCharCode(10),String.fromCharCode(13),data);
		data=replaceAll(String.fromCharCode(13),'[linebreak]',data);
		data=data.replace(/\s+/g,' ');
		data=replaceAll('[linebreak]',String.fromCharCode(13),data);
		//data=replaceAll(String.fromCharCode(13)+String.fromCharCode(32),String.fromCharCode(13),data);
		//data=replaceAll(String.fromCharCode(13)+String.fromCharCode(45),String.fromCharCode(13),data);

		//for (var i=0;i<40;i++){str+=data.charCodeAt(i)+' : '+data.charAt(i)+'<br>';}

		//split into lines
		data=data.split(String.fromCharCode(13));

		//create lists
		for (var i in data)
		{
			Game.ParseLine(data[i]);
		}

		document.title=sanitize(Game.name)+' by '+sanitize(Game.author)+' | made with RandomGen by Orteil';
		l('gameNameAndAuthor').innerHTML='<span id="gameName">'+sanitize(Game.name)+'</span><span id="gameAuthor"> by '+sanitize(Game.author)+'</span>';
		l('gameDesc').innerHTML=sanitize(Game.desc);
		if (Game.picture!='') {l('pic').style.display='block';l('pic').style.backgroundImage='url('+Game.picture+')';}
		l('generateButton').innerHTML=sanitize(Game.again);
		l('game').className='generatorLoaded';
		l('amountInput').value=Game.amount||'1';
		var src=Game.src;
		if (src.indexOf('www.')==-1 && src.indexOf('http://')==-1 && src.indexOf('https://')==-1)
		{
			if (src.indexOf('.txt')==-1) src='http://pastebin.com/raw.php?i='+src;
			else src='http://orteil.dashnet.org/randomgen/gens/'+src;
		}
		l('gameSource').href=sanitize(src);

		Game.Generate();
         */
      },

      useUrlData () {
        this.parseData(decodeURIComponent(this.urlData))
      },
      fetchData () {
        this.name = 'Untitled'
        this.author = 'anonymous'
        this.picture = ''
        this.desc = ''
        this.again = 'Generate'
        this.allUnique = 1

        // this.urlVars = getUrlVars()
        this.urlVars = {
          gen: 'names.txt',
          seed: '',
          amount: 0,
          data: ''
        }
        console.log(this.urlVars)
        this.src = this.urlVars.gen || ''
        // this.seed = replaceAll('+', ' ', this.urlVars.seed || '')
        this.seed = this.urlVars.seed
        if (this.urlVars.amount) this.amount = Math.max(1, Math.min(50, parseInt(this.urlVars.amount))) || 1
        if (
          this.src !== '' &&
          this.src.indexOf('www.') === -1 &&
          this.src.indexOf('http://') === -1 &&
          this.src.indexOf('https://') === -1
        ) {
          if (this.src.indexOf('.txt') === -1) this.src = `http://pastebin.com/raw.php?i=${this.src}`
          else this.src = `http://orteil.dashnet.org/randomgen/gens/${this.src}`
        }
        this.urlData = this.urlVars.data || ''

        console.log(this.urlData, this.src)
        if (this.src !== '') {
          this.reset()
          this.quickGameData = decodeURIComponent(this.urlData)
          this.inList = 0
          this.listNames = []
          this.lists = {}
          if (this.urlData !== '') this.useUrlData()
          else this.fetchGame()
        } else {
          this.gameClass = 'homeLoaded'
          if (this.urlVars['do'] === 'create') this.gameClass = 'createLoaded'
        }
      },
      init () {
        this.ready = true
        this.loading = 'Loading generator...'
        this.gameClass = 'generatorLoading'

        this.inList = 0
        this.listNames = []
        this.lists = {}

        /*
	Game.ToText=function(obj,as)
	{
		var as=as||'';
		var out='';
		if (as!='' && obj.tags && obj.tags.custom[as]) out=obj.tags.custom[as];
		//else if (as!='') out='';
		else out=obj.text;
		log('Turning '+obj.text+' to text.');
		out=Game.Parse(out);
		log('Turned '+obj.text+' into '+out+'.');
		//out=Game.Reparse(out);
		return out;
	}
        */
        /*
	Game.GetCase=function(str)
	{
		if (str==str.toLowerCase()) return 'abc';
		else if (str==str.toUpperCase()) return 'ABC';
		else if (str.charAt(0)==str.charAt(0).toUpperCase()) return 'Abc';
		else return 'abc';
	}
        */
        /*
	Game.SetCase=function(str,format)
	{
		if (format=='abc') return str;//str.toLowerCase();
		else if (format=='ABC') return str.toUpperCase();
		else return str.charAt(0).toUpperCase()+str.slice(1);
	}
        */
        /*
	Game.ParseData=function(data)
	{
	}
        */
        /*
	Game.ParseLine=function(data)
	{
		if (beginsWith(data,'//'))//comment
		{
			//~absolutely nothing~
		}
		else if (beginsWith(data,'/ *'))//comment block
		{
			Game.commenting=1;
		}
		else if (beginsWith(data,'* /'))//end comment block
		{
			Game.commenting=0
		}
		else if (Game.commenting) {}
		else if (data.length<=0) {}
		else if (beginsWith(data.toLowerCase(),'$[note] '))
		{
			data=data.replace(/\$\[note\] /i,'');
			//console.log('Note : '+data);
		}
		else if (beginsWith(data.toLowerCase(),'$include '))
		{
			data=data.replace(/\$include /i,'');
		}
		else if (beginsWith(data.toLowerCase(),'$name : '))
		{
			data=data.replace(/\$name : /i,'');
			Game.name=data;
		}
		else if (beginsWith(data.toLowerCase(),'$author : '))
		{
			data=data.replace(/\$author : /i,'');
			Game.author=data;
		}
		else if (beginsWith(data.toLowerCase(),'$picture : '))
		{
			data=data.replace(/\$picture : /i,'');
			Game.picture=data;
		}
		else if (beginsWith(data.toLowerCase(),'$description : '))
		{
			data=data.replace(/\$description : /i,'');
			Game.desc=data;
		}
		else if (beginsWith(data.toLowerCase(),'$button : '))
		{
			data=data.replace(/\$button : /i,'');
			Game.again=data;
		}
		else if (beginsWith(data.toLowerCase(),'$amount : '))
		{
			data=data.replace(/\$amount : /i,'');
			if (!Game.amount) Game.amount=Math.max(1,Math.min(50,parseInt(data)))||1;
		}
		else if (data.toLowerCase()=='$force unique')
		{
			Game.allUnique=1;
		}
		else if (data.toLowerCase()=='$allow duplicates')
		{
			Game.allUnique=0;
		}
		else if (data[0]=='$')
		{
			data=data.substring(1);
			if (data[0]=='+')
			{
				data=data.substring(1);
				if (Game.ListNames.indexOf(data.toLowerCase())!=-1) Game.inList=Game.Lists[data];
				else Game.inList=new Game.List(data);
			}
			else
			{
				if (Game.ListNames.indexOf(data.toLowerCase())!=-1) {Game.Lists[data].data=[];Game.inList=Game.Lists[data];}
				else Game.inList=new Game.List(data);
			}
		}
		else
		{
			if (Game.inList)
			{
				var tags={chance:1,custom:{}};
				//modifier tags
				if (data.charAt(data.length-1)=='}' && data.indexOf(' {')!=-1)
				{
					var tagstr=data.substring(data.indexOf('{')+1,data.lastIndexOf('}'));
					tagstr=tagstr.split('}{');
					for (var i in tagstr)
					{
						if (tagstr[i].charAt(tagstr[i].length-1)=='%') tags.chance=parseFloat(tagstr[i].substring(0,tagstr[i].length-1))*0.01;
						else if (tagstr[i].indexOf(':')!=-1)
						{
							tagstr[i]=tagstr[i].split(':');
							tags.custom[tagstr[i][0].toLowerCase()]=tagstr[i][1];
						}
					}
					data=data.substring(0,data.indexOf(' {'));
				}

				Game.inList.data.push({'text':data,'tags':tags,'type':Game.inList.name});
				//console.log('Pushed '+data+' (chance : '+tags.chance+') to list '+Game.inList.name);
			}
		}
	}
        */
        /*
	Game.ParseTag=function(tag,toObj,unique)
	{
		log('Now parsing '+tag+'.');
		Game.nesting++;
		var out='';
		var obj=0;
		var meta=[];
		var times=1;
		var identifier=0;
		var as='';
		var hidden=0;
		var unique=Game.allUnique||unique||0;
		var title=0;
		var lower=0;
		var written=0;
		var part=0;
		var compress=0;
		var casing=Game.GetCase(tag);
		var defaults='';
		if (tag.indexOf('|')!=-1)
		{
			var str=tag.split('');
			var arr=[];
			var bit='';
			var ignore=0;
			for (var i in str)
			{
				if (str[i]=='[') {bit+=str[i];ignore++;}
				else if (str[i]==']') {bit+=str[i];ignore--;}
				else if (str[i]=='|' && ignore<=0) {arr.push(bit);bit='';}
				else {bit+=str[i];}
			}
			arr.push(bit);
			if (toObj && 1==2)//don't
			{
				if (unique) {obj=Game.ParseToObj(chooseWithLimits(arr,Game.uniques));out=obj.text;}
				else {obj=Game.ParseToObj(choose(arr));out=obj.text;}
			}
			else
			{
				if (unique) {out+=Game.Parse(chooseWithLimits(arr,Game.uniques));}
				else out+=Game.Parse(choose(arr));
			}
			if (unique) {Game.uniques.push(out);}
		}
		else
		{
			if (tag.indexOf(',')!=-1)
			{
				meta=tag.split(',');
				tag=meta.shift();
				for (var i in meta)
				{
					if (meta[i].charAt(0)=='x')//several
					{
						times=meta[i].substring(1);
						times=times.split('-');times[0]=parseInt(times[0]);times[1]=parseInt(times[1]||times[0]);
						times=Math.min(Math.floor(Math.random()*((times[1]+1)-times[0])+times[0]),50);
					}
					else if (meta[i].charAt(0)=='#')//keep the same
					{
						identifier=meta[i].substring(1);//parseInt(meta[i].substring(1));
					}
					else if (beginsWith(meta[i],'as '))//use another version of the word
					{
						as=(meta[i].substring(3)).toLowerCase();
					}
					else if (beginsWith(meta[i],'or '))//default to something else if the "as" isn't available
					{
						defaults=(meta[i].substring(3));
					}
					else if (meta[i]=='hidden')//don't display it
					{
						hidden=1;
					}
					else if (meta[i]=='unique')//add it to the list of non-repeatables
					{
						unique=1;
					}
					else if (meta[i]=='title')//cap every first letter
					{
						title=1;
					}
					else if (meta[i]=='lower')//everything to lower case
					{
						lower=1;
					}
					else if (meta[i]=='compress')//remove all spaces
					{
						compress=1;
					}
					else if (meta[i]=='written')//record the same text
					{
						written=1;
					}
					else if (meta[i]=='first part') part=1;
					else if (meta[i]=='middle part') part=2;
					else if (meta[i]=='last part') part=3;
					else//set the letter case
					{
						casing=Game.GetCase(meta[i]);
						tag=Game.SetCase(tag,casing);
					}
				}
			}
			if (tag.charAt(0)=='#')
			{
				var id=tag.substring(1);//parseInt(tag.substring(1));
				if (!Game.identified[id]) {}//console.log('Can\'t find an identifier for '+id+'.');
				else
				{
					for (var i=0;i<times;i++)
					{
						obj=Game.identified[id];
						if (as!='' && typeof obj!='string')
						{
							if (as.charAt(0)=='#')
							{
								var asId=as.substring(1);
								if (!Game.identified[asId] || typeof Game.identified[asId]!='string') {}
								else {as=Game.identified[asId];}
							}
							if (obj.tags.custom[as])
							{
								obj=Game.ParseToObj(obj.tags.custom[as],0,unique);
							}
							else if (defaults!='')
							{
								if (typeof defaults=='string') obj=defaults;
								else obj=Game.ParseToObj(defaults,0,unique);
							}
						}
						out+=(typeof obj=='string'?obj:Game.ToText(obj,as));
					}
				}
			}
			else if (Game.ListNames.indexOf(tag.toLowerCase())!=-1)
			{
				for (var i=0;i<times;i++)
				{
					log('Generating "'+tag+'"...');
					if (as!='' && as.charAt(0)=='#')
					{
						var asId=as.substring(1);
						if (!Game.identified[asId] || typeof Game.identified[asId]!='string') {}
						else {as=Game.identified[asId];}
					}
					obj=Game.Lists[tag.toLowerCase()].Generate(as,1);
					log('We got "'+obj.text+'".');
					if (identifier && typeof obj!='string' && (obj.text.split('[').length-1)==1)
					{
						var oldObj=obj;
						obj=Game.ParseToObj(obj.text);
						if (typeof obj=='string') obj=oldObj;
						log('Refined into "'+obj.text+'".');
					}
					var text='';
					if (typeof obj=='string') text=obj;
					else text=Game.ToText(obj,as);
					out+=text;
					if (unique) {Game.uniques.push(obj.text);}
					log('Generated "'+obj.text+'" into "'+text+'".');
				}
			}
			else if (tag.indexOf('-')!=-1 && tag.replace('-','')==parseInt(tag.replace('-','')))
			{
				var number=tag.split('-');number[0]=parseInt(number[0]);number[1]=parseInt(number[1]);
				out+=Math.floor(Math.random()*((number[1]+1)-number[0])+number[0]);
			}
			else if (tag=='') out+='';
			else if (tag=='/') out+='<br>';
			else if (tag.toLowerCase()=='author\'s name') out+=Game.author;
			else if (tag.toLowerCase()=='game\'s name') out+=Game.name;
			else if (tag=='*CLEAR*') {out+='';Game.identified=[];}
			else if (tag=='===') {log('=========================');out+='';}
			else if (tag=='*DEBUG ON*') {Game.debugging=1;out+='';}
			else if (tag=='*DEBUG OFF*') {Game.debugging=0;out+='';}
			else out+='['+tag+']';
			if (identifier)
			{
				if (written)
				{
					var text=Game.ToText(obj,as);
					Game.identified[identifier]=Game.SetCase(out,casing);//Game.SetCase(text,Game.GetCase(tag));
					out=Game.identified[identifier];
				}
				else Game.identified[identifier]=obj;
				log('Stored "'+obj.text+'" into '+identifier+'.');
			}
			if (part==1) out=out.substring(0,Math.ceil(out.length/3));
			else if (part==2) out=out.substring(Math.floor(out.length/3),Math.ceil(out.length/3*2));
			else if (part==3) out=out.substring(Math.floor(out.length/3*2));
			if (lower) out=out.toLowerCase();
			if (title) out=Title(out);
			if (compress) out=replaceAll(' ','',out);
			if (hidden) out='';
		}
		out=Game.SetCase(out,casing);
		Game.nesting--;
		log('Done parsing '+tag+' : "'+((obj && typeof obj!='string')?(obj.text+' (object)'):(out+' (raw)'))+'".');
		return toObj?(obj||out):out;
	}
        */
        /*
	Game.Parse=function(data)
	{
		data=data||'';
		var me=data.split('');
		var out='';
		var tag='';
		var intag=0;
		var ignore=0;
		for (var i in me)
		{
			if (me[i]=='[' && !intag) {intag=1;tag='';}
			else if (me[i]=='[' && intag) {ignore++;tag+=me[i];}
			else if (me[i]==']' && intag && ignore) {ignore--;tag+=me[i];}
			else if (me[i]==']' && intag)
			{
				var tagCase=tag.split(' ');tagCase=tagCase[tagCase.length-1];
				var text=Game.ParseTag(tag);
				out+=Game.SetCase(text,Game.GetCase(tagCase));
				log('Parsed : '+(text)+'.');
				intag=0;
				tag='';
			}
			else if (intag)
			{
				tag+=me[i];
			}
			else
			{
				out+=me[i];
			}
		}
		return out;
	}
        */
        /*
	Game.ParseToObj=function(data,toObj,unique)
	{
		data=data||'';
		var me=data.split('');
		var out='';
		var tag='';
		var intag=0;
		var ignore=0;
		for (var i in me)
		{
			if (me[i]=='[' && !intag) {intag=1;tag='';}
			else if (me[i]=='[' && intag) {ignore++;tag+=me[i];}
			else if (me[i]==']' && intag && ignore) {ignore--;tag+=me[i];}
			else if (me[i]==']' && intag)
			{
				var tagCase=tag.split(' ');tagCase=tagCase[tagCase.length-1];
				out=Game.ParseTag(tag,1,unique);
				log('Parsed "'+tag+'" to obj : '+(typeof out=='string'?(out+' (raw)'):(out.text))+'.');
				intag=0;
				tag='';
				return out;
			}
			else if (intag)
			{
				tag+=me[i];
			}
			else
			{
				out+=me[i];
			}
		}
		log('Parsed to failed obj : '+out+'.');
		return out;
	}
        */
        /*
	//second pass, for stuff like [an] etc
	Game.Reparse=function(data)
	{
		//data=data.replace(/\s+/g,' ');
		var me=data.split('');
		var out='';
		var tag='';
		var intag=0;
		for (var i in me)
		{
			if (me[i]=='[') {intag=1;tag='';}
			else if (me[i]==']' && intag)
			{
				if (tag.toLowerCase()=='a' || tag.toLowerCase()=='an')
				{
					var letter='';
					var ii=1;
					var inTag=false;
					while (me[parseInt(i)+ii] && letter=='')
					{
						if (me[parseInt(i)+ii]=='<') inTag=true;
						else if (me[parseInt(i)+ii]=='>') inTag=false;
						else if (me[parseInt(i)+ii]!=' ' && !inTag) letter=me[parseInt(i)+ii].toLowerCase();
						ii++;
					}
					//if (me[parseInt(i)+2]) letter=me[parseInt(i)+2].toLowerCase();
					var word='a';
					if (letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u' || letter=='y') word='an';
					out+=Game.SetCase(word,Game.GetCase(tag));
				}
				else if (tag.toLowerCase()=='s')
				{
					var lastWord=' '+out;
					var start=lastWord.lastIndexOf(' ')+1;
					var lastWord=lastWord.substring(start);
					out=out.substring(0,start-1)+Game.SetCase(owl.pluralize(lastWord),Game.GetCase(lastWord));
				}
				else if (tag==' ')
				{
					out+=' ';
				}
				else out+='['+tag+']';
				intag=0;
				tag='';
			}
			else if (intag)
			{
				tag+=me[i];
			}
			else
			{
				out+=me[i];
			}
		}
		return out;
	}
        */
        /*
	Game.Generate=function()
	{
		if (!Game.amount) Game.amount=1;
		var seed=Game.seed;
		if (seed!='' && Game.ListNames.indexOf(seed.toLowerCase())!=-1) seed=Game.Lists[seed];
		else seed=Game.inList;
		var str='';
		for (var i=0;i<Game.amount;i++)
		{
			Game.Reset();
			str+='<div class="generation">'+tidy(sanitize(Game.Reparse(seed.Generate())))+'</div>';
		}
		l('amountInput').value=Game.amount||'1';
		l('text').innerHTML=str;
	}
        */
        /*
	l('quickGameData').onkeyup=function(e)
	{
		if (this.value.length>0) document.location.hash='&data='+encodeURIComponent(this.value);
		else document.location.hash='';
		Game.FetchData();
    }
        */
        /*
	l('amountInput').onkeyup=function(e)
	{
		Game.amount=Math.max(1,Math.min(50,parseInt(this.value)))||1;
    }
        */
        /*
         * Game.css=document.createElement('style');
         * Game.type='text/css';
         * document.getElementsByTagName('head')[0].appendChild(Game.css);
         */
        this.fetchData()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style scoped>
/* reset CSS */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


html,body
{
	width:100%;
	height:100%;
	box-sizing:content-box;
	-moz-box-sizing:content-box;
}

body
{
	color:#222;
	background:#fff;
	font-family:'Oswald',Tahoma,sans-serif;
	font-size:13px;
	line-height:130%;
}

.button
{
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: -moz-none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

small{font-size:80%;}
big{font-size:120%;}
b{font-weight:bold;}
i{font-style:italic;}
center{display:block;width:100%;text-align:center;}
q{font-style:italic;opacity:0.75;position:relative;display:inline-block;margin:0px 12px 0px 8px;}
q:before,q:after{content:'"';font-size:200%;opacity:0.5;position:absolute;top:6px;width:8px;height:8px;}
q:before{left:-16px;}
q:after{right:-6px;}

h1,h2,h3{font-weight:bold;font-variant:small-caps;margin:6px 0px;}
/*h1:first-letter,h2:first-letter,h3:first-letter{font-size:125%;}*/
h1{font-size:200%;background:#222;color:#fff;padding:11px 6px 11px 6px;}
h2{font-size:150%;border-top:2px solid #222;border-bottom:2px solid #222;padding:7px 0px 7px 0px;}
h3{font-size:125%;}
p{text-indent:16px;margin:6px 0px;}

a,a:visited
{
	text-decoration:underline;
	cursor:pointer;
	color:#222;
	text-shadow:0px 0px 3px rgba(0,0,0,0.2);
}
a:hover
{
	text-shadow:0px 0px 3px rgba(0,0,0,0.5);
	color:#000;
}
a:active
{
	opacity:0.8;
	background:transparent;
}

ul
{
	list-style-type:disc;
	margin:4px;
	margin-left:16px;
}

pre
{
	display:inline-block;
	font-family:Courier,monospace;
}

#wrapper
{
	overflow:hidden;
	height:100%;
}

#topBar
{
	background:#222;
	color:#ccc;
	font-size:12px;
	text-shadow:0px 1px 1px #000;
	height:32px;
	text-align:center;
}
#topBar>div
{
	display:inline-block;
	position:relative;
	/*box-shadow:0px 0px 1px rgba(255,255,255,0.4) inset,0px -2px 4px rgba(255,255,255,0.1) inset;*/
	border-left:2px dotted #fff;
	padding:7px 12px;
	z-index:1000;
	padding-bottom:16px;
}
#topBar>div:first-child {border-left:none;}
#topBar a.neat{color:#99f;}
#topBar a{color:#fff;text-shadow:0px 0px 3px rgba(255,255,255,0.5);}
#topBar a,#topBar .hoverer {cursor:pointer;}
#topBar a:hover,#topBar .hoverer:hover>a{color:#fff;text-shadow:0px 0px 3px rgba(255,255,255,1);}
#topBar a:active>a{color:#fff;text-shadow:none;}

.hoverable
{
	text-align:left;
	opacity:0;
	transition:max-height 0.25s ease-out,opacity 0.25s ease-out;
	position:absolute;
	left:-8px;
	top:40px;
	max-height:0px;
	min-width:200px;
	background:#222;
	overflow:hidden;
	color:#fff;
	border:2px solid #fff;
	box-shadow:0px 2px 4px rgba(0,0,0,0.5);
}
div:hover>.hoverable
{
	opacity:1;
	max-height:400px;
}
.hoverable>div
{
	padding:8px 12px;
}
.hoverable a
{
	text-shadow:none;
	display:block;
	text-decoration:none;
	padding:2px 8px;
}
.hoverable a:nth-child(odd)
{
	background:rgba(255,255,255,0.05);
}
.hoverable a:hover
{
	text-shadow:none;
	background:rgba(255,255,255,0.2);
}


.button
{
	display:inline-block;
	cursor:pointer;
	margin:4px;
	border:2px solid #222;
	box-shadow:0px 1px 0px #fff inset,0px -1px 0px rgba(0,0,0,0.25) inset,0px 0px 6px rgba(255,255,255,0.2) inset,0px 0px 6px rgba(0,0,0,0.2);
	padding:6px 10px;
	font-variant:small-caps;
	background:#eee;
}
.button:hover
{
	background:#fff;
}
.button:active
{
	background:#ddd;
	box-shadow:0px 0px 6px rgba(0,0,0,0.2) inset,0px 0px 0px 1px rgba(255,255,255,0.5),0px 0px 6px rgba(0,0,0,0.2);
}

#gameWrapper
{
	/*height:100%;
	width:100%;
	position:relative;*/
	position:absolute;
	left:0px;
	right:0px;
	bottom:0px;
	top:32px;
}
#game
{
	position:absolute;
	left:0px;
	top:0px;
	right:0px;
	bottom:0px;
	text-shadow:0px 1px 0px rgba(255,255,255,0.2),0px 0px 2px rgba(0,0,0,0.2);
	font-size:16px;
}

.middle
{
	width:auto;
	max-width:650px;
	margin:auto;
	position:relative;
	padding:16px;
}

#home,#create
{
	line-height:125%;
}
#home {display:none;}
.homeLoaded #home {display:block;}
#create {display:none;}
.createLoaded #create {display:block;}
#starter {background:#222;height:8px;padding:0px;}
#loading {text-align:center;display:none;}
#edit {display:none;}
#content {display:none;padding-top:8px;}
.generatorLoading #loading {display:block;}
.generatorLoaded #content {display:block;}
#header
{
	/*background:rgba(0,0,0,0.1);*/
	margin-bottom:32px;
	/*border-bottom:1px solid rgba(0,0,0,0.25);*/
}
#info
{
	overflow:hidden;
	padding-top:8px;
}
#gameNameAndAuthor
{
	/*border-bottom:1px solid rgba(0,0,0,0.25);*/
	background:#222;color:#fff;
	padding:6px 4px 4px 4px;
}
#gameName
{
	font-size:120%;
	font-weight:bold;
}
#gameAuthor
{
	opacity:0.5;
	font-size:80%;
}
#gameDesc
{
	float:left;
	width:70%;
	font-size:90%;
	opacity:0.75;
	line-height:110%;
	padding:6px 0px;
	/*margin-left:4px;
	padding:8px;
	border-left:1px solid rgba(0,0,0,0.25);*/
}
#settings
{
	float:right;
	width:30%;
	text-align:center;
	border-right:8px solid #222;
	border-bottom:4px solid #222;
	margin-left:-24px;
	padding:8px;
}
#generateButton
{
	display:inline-block;
	font-size:20px;
	margin:2px;
}
#settings label
{
	display:block;
	text-align:right;
	margin:4px 0px;
}
#settings label input
{
	border:1px solid #222;
}

#text
{
}
#pic
{
	width:128px;
	height:128px;
	background:#fff no-repeat center center;
	display:none;
	position:absolute;
	left:-128px;
}

.generation
{
	margin:4px 0px;
}



#host
{
	position:fixed;
	right:0px;
	bottom:0px;
	padding:3px 6px;
	font-size:12px;
	z-index:1000;
}

#support
{
	width:160px;
	height:600px;
	position:absolute;
	right:-160px;
	top:24px;
}

/* speed things up by stripping off fancy stuff */
#body.nofancy
{
	text-shadow:none !important;
	box-shadow:none !important;
	border-radius:0;
	animation:none;
}
</style>
