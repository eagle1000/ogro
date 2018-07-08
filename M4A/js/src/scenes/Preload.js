var Preload = function () {
   Phaser.State.call(this);
};

Preload.prototype = {
    preload: function () {
    },

    create: function () {
        this.assets = new AssetsManager();
        this.scale = screen.assetScale;

        this.luluLoad = this.game.add.sprite(this.game.world.width/2,this.game.world.height/ 2, 'loading');
        this.luluLoad.animations.add('loading', null, 8, true);
        this.luluLoad.play('loading');
        this.luluLoad.anchor.set(0.5);
        this.luluLoad.scale.set(0.6);

        var fontSize = 62 * this.scale;
        var style = { font: fontSize + 'px ' + 'chelseamarket', fill: '#FFFFFF', align: 'left' };
        this.textLoading = this.game.add.text(0, this.luluLoad.height / 2 + (150 * this.scale), "CARGANDO.. ", style);
        this.textLoading.anchor.set(0.5); 

        this.luluLoad.addChild(this.textLoading);
        //En el preload se definen los estados de carga
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);

        this.start();
    },
    start: function () {
        //Preload Atlas
        this.folderSize = serverPath + "assets/images/" + screen.size + "/";

        for(var i=0 in this.assets.atlas){
            this.game.load.atlas(this.assets.atlas[i].name, this.folderSize + this.assets.atlas[i].img,
                this.folderSize + this.assets.atlas[i].json, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
        }

        for(var i = 0 in this.assets.imagesGeneral){
            this.game.load.image(this.assets.imagesGeneral[i].name, this.assets.imagesGeneral[i].resource);
        }

            //Audios- Narraciones
        this.audios = this.assets.audios;
        for(var i = 0; i< this.audios.length; i++){
            this.game.load.audio(this.audios[i].name, [this.audios[i].src + ".mp3"], [this.audios[i].src + '.ogg']);
        }

        this.game.load.atlas('replayEnd', serverPath + 'assets/images/' + screen.size + '/replay_end.png',
            serverPath + 'assets/images/' + screen.size + '/replay_end.json',
            Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
        this.game.load.image("tr", serverPath + "assets/images/tr.jpg");
    

        this.game.load.spritesheet('token', this.folderSize + '/tokens.png', 65 * this.scale, 62 * this.scale);
        this.game.load.image('background_final', this.folderSize + '/background_final.png', 65 * this.scale, 62 * this.scale);
            
        this.load.start();
        },

        fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
            //Este se usa para tener en cuenta cada archivo cargado
            this.textLoading.setText("CARGANDO.. " + parseInt(progress) + '%');
            //this.loaderBar.width = (this.barLoad.width * totalLoaded) / totalFiles -20;
        },

        loadComplete: function () {
            //Al finalizar la carga de todos los archivos se llama la funcion que nos carga el estado o clase a mostrar
            this.game.time.events.add(Phaser.Timer.SECOND * 2,  function(){
                this.goToMain();
            },this);
        },
        goToMain: function () {
            //Cambio de estado
            this.game.state.start('Menu');
        }
    };