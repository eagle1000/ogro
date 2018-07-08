var GameFinish = function () {
    Phaser.State.call(this);
};

GameFinish.prototype = {
    preload: function () {
    },

    create: function () {
        this.stage.backgroundColor = '#000000';
        this.scale = screen.assetScale;
        this.mAudiosModel = new AudiosModel(this.game);
        this.mAudiosModel.create();
        this.effectsGame = this.mAudiosModel.getPromptEffect();

        this.background = this.game.add.tileSprite(0, 0,this.game.world.width, this.game.world.height, 'background_final');

        this.btnReload = this.game.add.sprite(1070 * this.scale, 100 * this.scale, 'backgrounds', 'replaybutton00');
        this.btnReload.anchor.set(0.5);
        this.btnReload.inputEnabled = true;
        this.btnReload.input.useHandCursor = true;
        this.btnReload.frameHover = 'replaybutton01';
        this.btnReload.frameZero = 'replaybutton00';
        this.btnReload.events.onInputOver.add(this.onHoverOption, this);
        this.btnReload.events.onInputOut.add(this.onInputOut, this);

        this.btnReload.events.onInputDown.add(function () {
            this.effectsGame.play("btnNavigation");
            this.goToGame();
        }, this);
    },

    update: function () {

    },
    onHoverOption: function (hoverOption) {
        //this.currentHover = hoverOption;
        hoverOption.frameName = hoverOption.frameHover;
    },
    onInputOut: function (onHoverOut) {
        //this.currentOut = hoverOption;
        onHoverOut.frameName = onHoverOut.frameZero;
    },

    goToGame: function(){
        //Change state to Game
        this.game.state.start('GamePlay');
    }
};