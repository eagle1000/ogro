var OgroModel = function (game) {
    this.game = game;
};

OgroModel.prototype = {
    create: function () {
        this.scaleGame = screen.assetScale;

        this.ogro = this.game.add.sprite(290 * this.scaleGame, 330 * this.scaleGame, "ogroscratching00", "scratching00");
        this.ogro.anchor.set(0.5);

        this.canPlay = true;
        this.ogroIntro();

        this.isWork = 0;
    },
    ogroIntro: function () {
        var that = this;

        this.ogro.loadTexture("ogroscratching00", "scratching00");
        var animIntro = this.ogro.animations.add('introOgro', null, 5, false);
        animIntro.play("introOgro");

        animIntro.onComplete.add(function () {
            that.ogro.loadTexture("ogroscratching01", "scratching06");
            var animIntro2 = that.ogro.animations.add('introOgro2', null, 7, false);
            animIntro2.play();

            animIntro2.onComplete.add(function () {
                that.animationOgro();
            });
        });
    },
    animationOgro: function () {
        if (this.canPlay) {
            var that = this;
            this.ogro.loadTexture("ogroidle00", "idle00");
            var animIntro3 = this.ogro.animations.add('introThreeIntro', null, 7, false);
            animIntro3.play();

            animIntro3.onComplete.add(function () {
                that.ogro.loadTexture("ogroidle01", "idle06");
                var animIntro4 = that.ogro.animations.add('introFourIntro', null, 7, false);
                animIntro4.play();

                animIntro4.onComplete.add(function () {
                    that.animationOgro();
                });
            });
        }
    },
    setContinueAnim: function (exe) {
        this.canPlay = exe;
    },
    ogroPlayHappy: function () {
        this.canPlay = false;
        this.ogro.loadTexture("ogrodancing02", "ogredancing12");

        var ogroHappy = this.ogro.animations.add('ogroHappy', null, 3, false);
        ogroHappy.play();

        var that = this;
        ogroHappy.onComplete.add(function () {
            that.canPlay = true;
            that.ogroIntro();
        });

    },
    ogroPlayWork: function () {
        this.canPlay = false;
        this.ogro.loadTexture("ogrofixing00", "ogrofixing00");

        var ogroWork1 = this.ogro.animations.add('ogroWork1', null, 6, false);
        ogroWork1.play();

        var that = this;
        ogroWork1.onComplete.add(function () {
            that.ogro.loadTexture("ogrofixing01", "ogrofixing06");
            var ogroWork2 = that.ogro.animations.add('ogroWork2', null, 6, false);
            ogroWork2.play();

            ogroWork2.onComplete.add(function () {
                if (that.isWork >= 0 && that.isWork < 2) {
                    that.ogroPlayWork();
                    that.isWork++;
                } else {
                    that.canPlay = true;
                    that.ogroIntro();
                    that.isWork = 0;
                }
            });
        });
    },
    finishGame: function (callback) {
        this.finishGame = callback;
    }
};