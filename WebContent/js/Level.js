/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level.prototype = proto;
Level.prototype.constructor = Level;

Level.prototype = {
	create: function(){

		var background = this.game.add.tileSprite(0, 0, 1024, 768, 'testfoto1');
		//background.tint = 0x777777;
		
		//TODO: Utfällbar kontrollpanel
		this.controlPanel = new ControlPanel(this.game, this.game.camera.x, this.game.camera.y+(768-160));
	    
		this.controlPanel.fixedToCamera = true;
		
		emitter1 = this.game.add.emitter(this.game.world.centerX, 500, 100);
		emitter1.setSize(700, 100);
		
		emitter1.makeParticles('coronaAlfa');
		

	    emitter1.setRotation(0, 0);
	    emitter1.setAlpha(0.8, 0.8);
	    emitter1.setScale(1, 1);
	    emitter1.gravity = -200;
	    
	    emitter1.start(false, 5000, 500);
	    
	    mist = this.game.add.image(-200, 200, 'mist');
	    mist.scale.setTo(3, 1);
	    mist.alpha = 0.5;
	    mist.tint = 0x334477;
	    
	    mist2 = this.game.add.image(400, 300, 'mist');
	    mist2.scale.setTo(3, 1);
	    mist2.alpha = 0.5;
	    mist2.tint = 0xaa4444;
	    
	    light = new Phaser.Polygon([ new Phaser.Point(100, 100), new Phaser.Point(350, 100), new Phaser.Point(0, 0), new Phaser.Point(150, 200) ]);
	  
	    light.alpha = 0.8;
	    light.tint = 0xffffff;
	    
	    graphics = this.game.add.graphics(500, 500);

	    graphics.beginFill(0xFFffff);
	    //var poly = graphics.drawCircle(50, 50, 100);
	    graphics.endFill();
	    //poly.alpha = 0.5;
	    //poly.tint = 0xffffff;
	    
	    var pentaJson = '[{"fill":"none","stroke":"#000000","path":"M85,177.0833282470703L85,176.0833282470703L86,175.0833282470703L86,174.0833282470703L88,171.0833282470703L93,163.0833282470703L96,157.0833282470703L98,153.0833282470703L101,148.0833282470703L103,145.0833282470703L105,141.0833282470703L105,140.0833282470703L107,137.0833282470703L110,134.0833282470703L111,131.0833282470703L114,128.0833282470703L115,125.08332824707031L116,122.08332824707031L118,121.08332824707031L119,119.08332824707031L119,117.08332824707031L120,116.08332824707031L121,114.08332824707031L121,113.08332824707031L122,112.08332824707031L123,111.08332824707031L123,110.08332824707031L124,108.08332824707031L126,106.08332824707031L127,105.08332824707031L129,101.08332824707031L132,98.08332824707031L134,94.08332824707031L136,92.08332824707031L137,89.08332824707031L139,86.08332824707031L140,85.08332824707031L141,83.08332824707031L141,81.08332824707031L141,80.08332824707031L142,80.08332824707031L143,84.08332824707031L146,89.08332824707031L148,92.08332824707031L149,96.08332824707031L151,99.08332824707031L154,104.08332824707031L156,108.08332824707031L157,111.08332824707031L160,115.08332824707031L161,116.08332824707031L162,118.08332824707031L164,121.08332824707031L165,125.08332824707031L166,127.08332824707031L167,130.0833282470703L168,132.0833282470703L169,133.0833282470703L170,136.0833282470703L172,139.0833282470703L173,142.0833282470703L173,145.0833282470703L174,148.0833282470703L176,151.0833282470703L177,155.0833282470703L177,156.0833282470703L179,158.0833282470703L180,161.0833282470703L181,164.0833282470703L182,166.0833282470703L183,170.0833282470703L184,172.0833282470703L184,173.0833282470703L184,174.0833282470703L185,175.0833282470703L185,176.0833282470703L185,177.0833282470703L186,178.0833282470703L186,179.0833282470703L187,180.0833282470703L187,181.0833282470703L186,181.0833282470703L185,181.0833282470703L184,181.0833282470703L183,180.0833282470703L180,179.0833282470703L178,176.0833282470703L174,174.0833282470703L172,171.0833282470703L168,169.0833282470703L165,166.0833282470703L162,163.0833282470703L159,161.0833282470703L155,158.0833282470703L154,156.0833282470703L151,156.0833282470703L148,154.0833282470703L143,151.0833282470703L141,149.0833282470703L137,147.0833282470703L134,145.0833282470703L131,143.0833282470703L128,142.0833282470703L125,141.0833282470703L122,139.0833282470703L119,138.0833282470703L117,137.0833282470703L113,135.0833282470703L108,133.0833282470703L106,132.0833282470703L102,130.0833282470703L94,126.08332824707031L88,123.08332824707031L85,121.08332824707031L81,120.08332824707031L80,119.08332824707031L79,119.08332824707031L79,118.08332824707031L77,118.08332824707031L76,117.08332824707031L75,117.08332824707031L73,117.08332824707031L73,116.08332824707031L72,116.08332824707031L72,115.08332824707031L74,115.08332824707031L77,115.08332824707031L80,115.08332824707031L85,114.08332824707031L88,114.08332824707031L91,114.08332824707031L95,114.08332824707031L102,114.08332824707031L108,114.08332824707031L117,114.08332824707031L128,114.08332824707031L138,114.08332824707031L148,116.08332824707031L155,116.08332824707031L162,116.08332824707031L166,116.08332824707031L170,116.08332824707031L172,116.08332824707031L174,116.08332824707031L178,116.08332824707031L181,116.08332824707031L185,116.08332824707031L194,116.08332824707031L199,116.08332824707031L204,116.08332824707031L208,116.08332824707031L210,116.08332824707031L212,116.08332824707031L213,116.08332824707031L215,116.08332824707031L216,116.08332824707031L217,116.08332824707031L219,116.08332824707031L220,116.08332824707031L222,116.08332824707031L223,116.08332824707031L221,116.08332824707031L220,116.08332824707031L218,116.08332824707031L214,118.08332824707031L211,120.08332824707031L208,122.08332824707031L203,124.08332824707031L198,127.08332824707031L193,130.0833282470703L188,133.0833282470703L182,134.0833282470703L178,138.0833282470703L173,140.0833282470703L169,143.0833282470703L166,144.0833282470703L161,146.0833282470703L159,148.0833282470703L155,150.0833282470703L149,153.0833282470703L145,155.0833282470703L142,156.0833282470703L139,157.0833282470703L135,158.0833282470703L132,160.0833282470703L130,161.0833282470703L127,161.0833282470703L126,162.0833282470703L125,163.0833282470703L124,164.0833282470703L121,165.0833282470703L118,167.0833282470703L117,167.0833282470703L116,167.0833282470703L115,168.0833282470703L115,169.0833282470703L113,170.0833282470703L112,170.0833282470703L109,170.0833282470703L108,171.0833282470703L106,172.0833282470703L105,172.0833282470703L103,173.0833282470703L100,174.0833282470703L97,175.0833282470703L96,175.0833282470703L95,176.0833282470703L93,176.0833282470703L92,177.0833282470703L90,177.0833282470703L89,178.0833282470703L87,178.0833282470703L86,178.0833282470703L84,179.0833282470703L82,180.0833282470703L81,180.0833282470703","stroke-opacity":1,"stroke-width":5,"stroke-linecap":"round","stroke-linejoin":"round","transform":[],"type":"path"}]';
	   
		var demo_4_sketchpad_editor_obj_1 = Raphael.sketchpad("demo_4_sketchpad_1", {
		    width: 1024,
		    height: 768,
	      	editing: true // default
	    });
		
		var demo_4_json_1 = "bara testa";
		
	    demo_4_sketchpad_editor_obj_1.change(function() {
	        //generate a random percent based on the json data
	        demo_4_json_1 = demo_4_sketchpad_editor_obj_1.json();
	        //updateSimilarity();

	    });
	    
	    
	    this.game.input.keyboard.onUpCallback = function (e) {
	        // These can be checked against Phaser.Keyboard.UP, for example.
	        if(e.keyCode === Phaser.Keyboard.ENTER){
			    if(e.which == 13) {
			    	var percent = 0;
			    	console.log(demo_4_json_1);
			    	percent = Sketchy.shapeContextMatch(demo_4_json_1, pentaJson);
			    	percent = (Math.floor(percent * 10000)/100);
			    	percent = percent.toString().substring(0,5)
			    	console.log(percent);
			    	demo_4_sketchpad_editor_obj_1.clear();
			    	console.log(this.game);
			    	if(percent > 60){
			    		var pentagram = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'pentagram');
			    		
			    	    pentagram.anchor.setTo(0.5, 0.5);
			    	    pentagram.alpha = 0;

			    	    var pentagramTween = this.game.add.tween(pentagram).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
			    	    
			    	    pentagramTween.onComplete.add(function(){
			    	    	pentagram.destroy();
			    	    });
			    	}
			    }
	        }
	    }; 
	    
	    //this.game.world.setBounds(-20, -20, game.width+20, game.height+2);
	},

	update: function(){
		//this.shakeCanvas();

	},
	
	
	shakeCanvas: function() {
        var min = -20;
        var max = 20;
		$('#demo_4_sketchpad_1').css('left',  Math.floor(Math.random() * (max - min + 1)) + min + 'px');
		$('#demo_4_sketchpad_1').css('top', Math.floor(Math.random() * (max - min + 1)) + min + 'px');
    },

};


