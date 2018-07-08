/**
 * Reload Game
 */
function ReloadGame(game, mAudioManager) {
	this.game = game;

	this.reloadScene = this.game.add.group();

	this.mAudioManager = mAudioManager;

	this.mBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "tr");
	this.mBackground.tint = 0x000000;
	this.mBackground.alpha = 0.5;

	var cartel = this.game.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "replayEnd","screen2");
	cartel.anchor.set(0.5);

	this.btnReplay = this.game.add.button(this.game.world.centerX, this.game.height * 0.68, 'replayEnd', this.goToMenu, this, "btn2_replay1", "btn2_replay0", "btn2_replay0");
	this.btnReplay.anchor.set(0.5);	
	
	this.reloadScene.add(this.mBackground);
	this.reloadScene.add(cartel);
}

ReloadGame.prototype.goToMenu = function() {
	this.mAudioManager.playFx("btnNavigation");
	this.game.state.start("GamePlay");
};