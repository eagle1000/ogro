var LevelModel = function (game) { //Al ser una clase que se incluye dentro de otra se debe recibir el juego como parametro para saber en que escena se va a instanciar
    this.game = game;
};

LevelModel.prototype = {
    create: function () {
        this.levelManager = new LevelManager();
        this.localData = new LocalData();
        this.mAudiosModel = new AudiosModel(this.game);
        this.scale = screen.assetScale;
        this.level = this.shuffle(this.levelManager.data);
        //this.level =  this.levelManager.data;
        this.levelCurrent = [];
        this.selectedFigure = false;
        this.carMove = false;

        this.mAudiosModel.create();
        this.audiosGame = this.mAudiosModel.getPrompt();
        this.effectsGame = this.mAudiosModel.getPromptEffect();

        //for(var i= 0; i < this.level.length; i++){
        for (var i = 0; i < 3; i++) {
            this.levelCurrent.push(this.level[i]);
        }

        this.createAsk(0);
    },
    createAsk: function (phase) {
        this.ask = [];

        this.answerTrue = this.levelCurrent[this.localData.getLevel()].options[phase].answerc;
        this.answerFalse = this.shuffle(this.levelCurrent[this.localData.getLevel()].options[phase].answer);

        for (var i = 0; i < 2; i++) {
            this.ask.push(this.answerFalse[i]);
        }

        this.ask.push(this.answerTrue);
        this.ask = this.shuffle(this.ask);

        var posXAnswer = 925 * this.scale;
        var posYAnswer = 20 * this.scale;
        var that = this;

        this.contentAnswer = this.game.add.group();

        for (var i = 0; i < this.ask.length; i++) {
            var answerBox = this.game.add.sprite(posXAnswer, posYAnswer, this.ask[i].atlas, this.ask[i].name);
            answerBox.correct = this.ask[i].iscorrect;
            answerBox.atlas = this.ask[i].atlas;
            answerBox.name = this.ask[i].prefix;

            answerBox.inputEnabled = true;
            answerBox.input.useHandCursor = true;
            answerBox.phase = phase;
            answerBox.audio = this.ask[i].audio;
            answerBox.events.onInputDown.add(this.selectAnswer, this);
            answerBox.scale.set(0.94);

            this.contentAnswer.addChild(answerBox);
            posYAnswer += answerBox.height + 15;
        }

        this.contentAnswer.alpha = 0;
        this.selectedFigure = false;

        var tweenAnswer = this.game.add.tween(this.contentAnswer).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true);

        if (phase == 0) {
            this.carMove = true;
            tweenAnswer.onComplete.add(function () {
                that.createCar(phase);
            });
        }
    },
    createCar: function (phase) {
        var that = this;
        this.carMove = true;
        this.carData = this.levelCurrent[this.localData.getLevel()];
        this.totalCar = this.game.add.group();

        this.car = this.game.add.sprite(-1000, this.carData.position.y * this.scale, this.carData.atlas, this.carData.name);

        this.game.time.events.add(Phaser.Timer.SECOND * 0.6, function () {
            that.effectsGame.play("vehicleEntry");
        }, this);

        var tweenCar = this.game.add.tween(this.car).to({
            x: this.carData.position.x * this.scale
        }, 1400, Phaser.Easing.Linear.None, true);

        this.totalCar.addChild(this.car);

        tweenCar.onComplete.add(function () {
            that.createDots(phase);
        });

    },
    createDots: function (phaser) {
        this.phase = phaser;
        this.dots = this.game.add.sprite(this.carData.dots[this.phase].position.x * this.scale, this.carData.dots[this.phase].position.y * this.scale, this.carData.dots[this.phase].atlas, this.carData.dots[this.phase].name);
        this.dots.anchor.set(0.5);
        var dotsPlay = this.dots.animations.add('dotsplay', [
            this.carData.dots[this.phase].frames[0],
            this.carData.dots[this.phase].frames[1],
            this.carData.dots[this.phase].frames[2]
        ], 4, true);

        this.dots.angle = this.carData.dots[this.phase].angle;
        this.dots.scale.set(this.carData.dots[this.phase].scale.x, this.carData.dots[this.phase].scale.y);
        dotsPlay.play();
        this.totalCar.addChild(this.dots);
        this.carMove = false;

    },
    shuffle: function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    selectAnswer: function (answerBox) {
        if (!this.carMove && !this.selectedFigure) {
            this.effectsGame.play("btnSelection");
            this.answerAsk = answerBox;
            this.selectedFigure = true;
            var that = this;

            this.game.time.events.add(Phaser.Timer.SECOND * 0.3, function () {
                that.audiosGame.play(that.answerAsk.audio);
                that.paolaSayPlay();
            }, this);

            this.figure = this.game.add.sprite(this.dots.x, this.dots.y, this.answerAsk.atlas, this.answerAsk.name);
            this.figure.anchor.set(0.5);
            this.figure.x = this.dots.x;
            this.figure.y = this.dots.y;

            if (this.dots.angle > 0) {
                if (this.carData.id == 2) {
                    if (this.answerAsk.name == "wings01") {
                        //console.info("Ala");
                    } else {
                        this.figure.x -= 20 * this.scale;
                        this.figure.y += 30 * this.scale;
                    }
                }

                if (this.carData.id == 3 && this.phase == 1) {
                    this.figure.x -= 90 * this.scale;
                    this.figure.y += 50 * this.scale;
                }
            }

            if (this.answerAsk.correct) {
                this.answerCorrect();
            } else {

                this.isOgroWorking();

                this.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                    that.effectsGame.play("ogreWorking");
                }, this);
                this.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
                    that.explode = this.game.add.sprite(this.dots.x, this.dots.y, 'dots02', "explosion00");
                    that.explode.anchor.set(0.5);

                    that.effectsGame.play("explosion");
                    var explosion = that.explode.animations.add('playexplode', [
                        'explosion00',
                        'explosion01',
                        'explosion02',
                        'explosion03'
                    ], 6, false);

                    explosion.play();
                    explosion.onComplete.add(function () {
                        that.effectsGame.play("ogreScratch");
                        that.figure.kill();
                        that.explode.kill();
                        that.selectedFigure = false;
                    });
                }, this);

            }
        }
    },
    answerCorrect: function () {
        trackingObj.correctAnswer();
        this.totalCar.addChild(this.figure);
        var congratulations = ["congratulate1", "congratulate2", "congratulate3", "congratulate4"];
        var that = this;

        this.isOgroWorking();
        this.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
            that.effectsGame.play("ogreWorking");
        }, this);

        this.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
            congratulations = that.shuffle(congratulations);
            that.audiosGame.play(congratulations[0]);
            this.paolaSayPlay();

            if (that.contentAnswer != null) {
                that.contentAnswer.destroy();
            }

            that.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                that.ogroHappy();
                that.effectsGame.play("ogreLaughter");
                that.dots.kill();
            }, that);

            that.game.time.events.add(Phaser.Timer.SECOND * 3.2, function () {
                if (that.phase == 0) { //Phase 2
                    that.selectedFigure = false;
                    that.playAudio = false;
                    that.createDots(1);
                    that.createAsk(1);
                } else {
                    //Update Level
                    that.updateLevel();
                }
            }, that);
        }, this);
    },
    ogroHappy: function (ogroHappyPlay) {
        this.ogroHappy = ogroHappyPlay;
    },
    ogroWorking: function (ogroWorkingPlay) {
        this.isOgroWorking = ogroWorkingPlay;
    },
    paolaSay: function (callback) {
        this.paolaSayPlay = callback;
    },
    updateLevel: function () {
        this.game.time.events.add(Phaser.Timer.SECOND * 0.6, function () {
            this.effectsGame.play("vehicleExit");
        }, this);

        var tweenCar = this.game.add.tween(this.totalCar).to({
            x: 1600 * this.scale
        }, 1600, Phaser.Easing.Linear.None, true);

        tweenCar.onComplete.add(function () {
            this.totalCar.destroy();
            if (this.localData.getLevel() < this.levelCurrent.length - 1) {
                this.localData.setLevel((parseInt(this.localData.getLevel()) + 1));
                this.createAsk(0);
                this.tokensUpdate();
            } else {
                this.goToGameFinish();
            }
        }, this);
    },
    updateTokens: function (tokensUpdate) {
        this.tokensUpdate = tokensUpdate;
    },
    gameFinish: function (gameFinish) {
        this.goToGameFinish = gameFinish;
    }

};