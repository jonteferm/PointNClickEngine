ControlPanel = function(game, x, y){
	Phaser.Sprite.call(this, game, x, y, 'panel');
	
	this.game = game;

	this.gameLogTextHeight = 0;
	this.gameLog = [];
	this.gameLogHistory = [];

	const TIMEBAR_ROW_Y = 540;

    this.game.add.existing(this);


	this.addText("Welcome brave adventurer!");
};

ControlPanel.prototype = Object.create(Phaser.Sprite.prototype);

ControlPanel.prototype.constructor = ControlPanel;

ControlPanel.prototype.addText = function(text){
	var bitmapText = this.game.add.bitmapText(10, 630, 'font',text, 16);
	bitmapText.smoothed = true;
	this.gameLog.push(bitmapText);
	this.gameLog[this.gameLog.length-1].fixedToCamera = true;
	this.gameLogTextHeight += this.gameLog[this.gameLog.length-1].height;

	if(this.gameLogTextHeight >= 93){
		var firstItem = this.gameLog.shift();
		firstItem.visible = false;
		this.gameLogHistory.push(firstItem);
		this.gameLogTextHeight -= firstItem.height;
	}

	if(this.gameLog.length > 0){
		for(var i = this.gameLog.length-1; i > 0; i--){
			if(i > 0){
				var prevText = "";
				var height = 0;
				prevText = this.gameLog[i-1].text;
				height = this.gameLog[i].height;
				this.gameLog[i-1].destroy();
				this.gameLog[i-1] = this.game.add.bitmapText(10, (this.gameLog[i].y + (16*(height/15.5))), 'font', prevText, 16);
				
				this.gameLog[i-1].fixedToCamera = true;
			}
		}
	}
	
};


ControlPanel.prototype.updateAttackBar = function(){
	
};

ControlPanel.prototype.updateBlockBar = function(){
	
};

