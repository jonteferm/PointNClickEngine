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

	},
	update: function(){
	
	},

};


