    var AudiosModel = function (game) { //Al ser una clase que se incluye dentro de otra se debe recibir el juego como parametro para saber en que escena se va a instanciar
        this.game = game;
    };

    AudiosModel.prototype = {
        create: function () {
            this.mAssets = new AssetsManager();

            this.promptAtlas = this.game.add.audio('prompt_atlas',1, false);
            this.promptAtlas.allowMultiple = true;

            this.promptEffects = this.game.add.audio('effect_atlas',1, false);
            this.promptEffects.allowMultiple = true;
            
        },
        getPrompt: function(){
            this.mAudios = this.mAssets.audios[0].frames;
            
            for(var i = 0; i <  this.mAudios.length; i++){
                this.promptAtlas.addMarker(this.mAudios[i].name, this.mAudios[i].from, this.mAudios[i].to, 1, false);
            }
            return this.promptAtlas;
        },
        getPromptEffect: function(){
            this.mEffects = this.mAssets.audios[1].frames;
            
            for(var i = 0; i <  this.mEffects.length; i++){
                this.promptEffects.addMarker(this.mEffects[i].name, this.mEffects[i].from, this.mEffects[i].to, 1, false);
            }
            return this.promptEffects;
        },
        playFx: function(){
            this.promptEffects.play(name);
        }
    };