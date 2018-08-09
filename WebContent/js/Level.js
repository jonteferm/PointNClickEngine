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
		background.tint = 0xaaaaaa;
		
		//TODO: Utfällbar kontrollpanel
		this.controlPanel = new ControlPanel(this.game, this.game.camera.x, this.game.camera.y+(768-160));
	    
		this.controlPanel.fixedToCamera = true;
		
		emitter = this.game.add.emitter(this.game.world.centerX, 500, 100);
		emitter.setSize(500, 100);
		
		emitter.makeParticles('coronaAlfa');
		

	    emitter.setRotation(0, 0);
	    emitter.setAlpha(0.5, 0.8);
	    emitter.setScale(1, 1);
	    emitter.gravity = -200;
	    
	    emitter.start(false, 5000, 500);

	},
	update: function(){
	
	},

};


