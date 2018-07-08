var Menu = function () {
    Phaser.State.call(this);
};

Menu.prototype = {
    preload: function () {
    },

    create: function () {
    
        if(!trackingObj.trackingAlreadyStarted){
            trackingObj.startTracking();
        }
    
        this.stage.backgroundColor = '#000000';
        this.scaleGame = screen.assetScale;

        this.mAudiosModel = new AudiosModel(this);
        this.localData = new LocalData();

        this.windowBackground = this.game.add.image(470 * this.scaleGame, 130 * this.scaleGame, 'backgrounds', 'background02');
        this.windowBackground.anchor.set(0.5);

        this.background = this.game.add.sprite(0, 0, 'backgrounds', 'background01');
        this.background.width = this.game.world.width;
        this.background.height = this.game.world.height;

        this.mAudiosModel.create();
        this.audioTitle = this.mAudiosModel.getPrompt();
        this.effectsGame = this.mAudiosModel.getPromptEffect();

        this.table = this.game.add.sprite(850 * this.scaleGame, 265 * this.scaleGame, 'backgrounds', 'woodtitle');
        this.table.anchor.set(0.5);
        this.table.alpha = 0;

        this.titleGame = this.game.add.sprite(this.table.x, -300, 'backgrounds', 'title');
        this.titleGame.anchor.set(0.5);

        var wallTween = this.game.add.tween(this.table).to({
            alpha: 1
        }, 2000, Phaser.Easing.Linear.Out, true);

        this.game.add.tween(this.titleGame).to({
            y: this.table.y
        }, 2400, Phaser.Easing.Bounce.Out, true);

        this.ogro = new OgroModel(this.game);
        this.ogro.create();

        wallTween.onComplete.add(function () {
            this.audioTitle.play("title");
            this.btnStart = this.game.add.button(1090 * this.scaleGame, 400 * this.scaleGame, 'backgrounds', this.btnStartClick, this, 'playbutton01', 'playbutton00', 'playbutton00');
            this.btnStart.input.useHandCursor = true;
            this.btnStart.anchor.set(0.5);
            this.btnStart.scale.set(0.8);
        }, this);
    },
    btnStartClick: function () {
        this.effectsGame.play("btnNavigation");
        this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
            this.audioTitle.stop("title");
            this.game.state.start('GamePlay');
        }, this);
    }
};