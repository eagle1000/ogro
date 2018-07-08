var app = {};

$( document ).ready(function() { 
    if (navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'iPad')
    {
        $("#game").removeClass("contentGame").addClass("contentGameSf");
    }
});
// First check to see if the platform is an iPhone or iPod

app.screen = {
    size: "XL",      // Folder name assets
    calcScreen: function (t)//Comparar el maximo entre ancho y alto para definir el mayor como ancho y el menor como alto
    {
        this.width = Math.max(window.innerWidth, window.innerHeight);
        this.height = Math.min(window.innerWidth, window.innerHeight);

        // additional ratios
        if (this.width <= 580) {
            this.size = 'S';
            this.gameWidth = 580;
            this.gameHeight = 356;
        }
        if (this.width > 580 && this.width <= 820) {
            this.size = 'M';
            this.gameWidth = 820;
            this.gameHeight = 504;
        }
        if (this.width > 820 && this.width <= 1060) {
            this.size = 'L';
            this.gameWidth = 1060;
            this.gameHeight = 652;
        }
        if (this.width > 1060) {
            this.gameWidth = 1290;
            this.gameHeight = 800;
            this.size = 'XL';
        }

        this.typeScreen = t;
        if(this.typeScreen == "width"){
            return this.gameWidth;
        }

        if(this.typeScreen == "height"){
            return this.gameHeight;
        }

        if(this.typeScreen == "scale"){
            var scale = this.gameWidth / 1300;
            this.assetScale = Number(scale.toFixed(4));

            return (this.assetScale);
        }
    }
};

var config = {
    prod: {
        name: "myGame",
        version: "1.0",
        description: "",

        authors: [
            "Author <email@email.com>"
        ],

        license: "MIT",
        baseUrl: 'js/min',
        paths: { //En las url no se coloca la extensión del archivo
            "Phaser": "../config/phaser",
            "BootManager": "utils/BootManager",
            "LevelManager": "utils/LevelManager",
            "LocalData": "utils/LocalData",
            "AssetsManager": "utils/AssetsManager",
            "CloseModel":"model/CloseModel",
            "AudiosModel":"model/AudiosModel",
            "OgroModel": "model/OgroModel",
            "MissPaolaModel": "model/MissPaolaModel",
            "LevelModel": "model/LevelModel",
            "Preload": "scenes/Preload",
            "Main": "scenes/Main",
            "GamePlay": "scenes/GamePlay",
            "GameFinish": "scenes/GameFinish"
        }
    },

    dev: {
        name: "myGame",
        version: "1.0",
        description: "",

        authors: [
            "Author <email@email.com>"
        ],

        license: "MIT",
        baseUrl: 'js/src',
        paths: {
            "Phaser": "../config/phaser",
            "BootManager": "utils/BootManager",
            "LevelManager": "utils/LevelManager",
            "LocalData": "utils/LocalData",
            "AssetsManager": "utils/AssetsManager",
            "CloseModel":"model/CloseModel",
            "AudiosModel":"model/AudiosModel",
            "OgroModel": "model/OgroModel",
            "MissPaolaModel": "model/MissPaolaModel",
            "LevelModel": "model/LevelModel",
            "Preload": "scenes/Preload",
            "Main": "scenes/Main",
            "GamePlay": "scenes/GamePlay",
            "GameFinish": "scenes/GameFinish"
        }
    }
};

// Configure environment
requirejs.config(config.dev);

//Se importa las clases a usar, Phaser para inicializar el juego y La escena inicial en este caso Preload
require(['Phaser', 'BootManager'], function (Phaser, BootManager) {
    app.game = new Phaser.Game(app.screen.calcScreen("width"), app.screen.calcScreen("height"), Phaser.CANVAS, 'game', BootManager);
});
