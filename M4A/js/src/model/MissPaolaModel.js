var MissPaolaModel = function (game) { //Al ser una clase que se incluye dentro de otra se debe recibir el juego como parametro para saber en que escena se va a instanciar
    this.game = game;
};

MissPaolaModel.prototype = {
    create: function () {
        this.scale = screen.assetScale;

        this.missPaola = this.game.add.sprite(570 * this.scale, 180 * this.scale, 'miss_paola', 'missPaola00');
        this.missPaola.anchor.set(0.5);

        this.paolaSpeak = this.missPaola.animations.add('paolaSpeak',
            [
                'missPaola00',
                'missPaola01',
                'missPaola02',
                'missPaola03',
                'missPaola05',
                'missPaola06',
                'missPaola07',
                'missPaola08',
                'missPaola09',
                'missPaola10'
            ], 6, true
        );

        this.paolaSayGame = this.missPaola.animations.add('paolaSpeak',
            [
                'missPaola00',
                'missPaola01',
                'missPaola02',
                'missPaola03'
            ], 4, false
        );
    },
    playPromptInit: function () {
        this.audioModel = new AudiosModel(this.game);
        this.audioModel.create();
        this.audioPaola = this.audioModel.getPrompt();
        this.audioPaola.play("prompt");
        this.playAnimationPaola();

        this.game.time.events.add(Phaser.Timer.SECOND * 3, function () {
            this.paolaSpeak.paused = true;
            this.missPaola.frameName = 'missPaola01';
            this.finishPromptInit();
        }, this);

    },
    promptInitFinish: function (callback) {
        this.finishPromptInit = callback;
    },
    playAnimationPaola: function () {
        this.paolaSpeak.play();
    },
    sayGame: function () {
        this.paolaSayGame.play();
        this.paolaSayGame.onComplete.add(function () {
            this.missPaola.frameName = 'missPaola01';
        }, this);
    }
};