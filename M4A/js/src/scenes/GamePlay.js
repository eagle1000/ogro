var GamePlay = function () {
    Phaser.State.call(this);
};

GamePlay.prototype = {
    create: function () {
        this.stage.backgroundColor = '#000000';
        this.scale = screen.assetScale;

        this.localData = new LocalData();
        this.paola = new MissPaolaModel(this);
        this.levelManager = new LevelManager();
        this.levelModel = new LevelModel(this);
        this.mAudiosModel = new AudiosModel(this.game);
        this.mAudiosModel.create();
        this.effectsGame = this.mAudiosModel.getPromptEffect();
        this.localData.setLevel(0);
        this.isTokens = false;
        this.windowBackground = this.game.add.image(470 * this.scale, 130 * this.scale, 'backgrounds', 'background02');
        this.windowBackground.anchor.set(0.5);

        this.paola.create();

        this.background = this.game.add.sprite(0, 0, 'backgrounds', 'background01');
        this.background.width = this.game.world.width;
        this.background.height = this.game.world.height;

        var that = this;
        this.createTokens();

        this.game.time.events.add(Phaser.Timer.SECOND * 0.6, function () {
            this.paola.playPromptInit();
        }, this);

        this.paola.promptInitFinish(function () {
            that.levelModel.create();
        });

        this.ogro = new OgroModel(this);
        this.ogro.create();

        this.levelModel.paolaSay(function () {
            that.paola.sayGame();
        });

        this.levelModel.updateTokens(function () {
            that.updateTokens(that.localData.getLevel());
        });

        this.levelModel.ogroHappy(function () {
            that.ogro.ogroPlayHappy();
        });

        this.levelModel.ogroWorking(function () {
            that.ogro.ogroPlayWork();
        });

        this.levelModel.gameFinish(function () {
            that.gameFinish();
        });
    },
    shuffle: function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    createTokens: function () {
        this.game.add.sprite(1150 * this.scale, 16 * this.scale, "backgrounds", "tokensgray");
        this.appleGroup = this.game.add.group();

        if (!this.isTokens) {
            this.isTokens = true;

            this.appleA = this.appleGroup.create(1150 * this.scale, 55 * this.scale, 'token', 0);
            this.appleB = this.appleGroup.create(1193 * this.scale, 17 * this.scale, 'token', 1);
            this.appleC = this.appleGroup.create(1227 * this.scale, 59 * this.scale, 'token', 2);

            this.appleA.alpha = 0;
            this.appleB.alpha = 0;
            this.appleC.alpha = 0;
        }
    },
    updateTokens: function (level) {
        this.effectsGame.play("effectTokens");
        this.currentApple = this.appleGroup.getAt(level - 1);
        this.currentApple.alpha = 1;
        this.currentApple.angle = -8;

        this.tweenEfectToken = this.game.add.tween(this.currentApple).delay(30).to({
            angle: 8
        }, 30, "Linear", true, 0, 6, false);

        this.tweenEfectToken.onComplete.add(function () {
            this.currentApple.angle = 0;
        }, this);
    },
    gameFinish: function () {
        this.appleGroup.getAt(2).alpha = 1;
        this.appleGroup.getAt(2).angle = -8;

        this.tweenEfectToken = this.game.add.tween(this.appleGroup.getAt(2)).delay(30).to({
            angle: 8
        }, 30, "Linear", true, 0, 6, 1);

        this.tweenEfectToken.onComplete.add(function () {
            this.appleGroup.getAt(2).angle = 0;
            new ReloadGame(this.game, this.mAudiosModel);
            //this.game.state.start('GameFinish');
        }, this);
    }
};