function Boot() {
    Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Boot.prototype = proto;

Boot.prototype.init = function () {
    // Setup random background
    var fontSize = 62 * screen.assetScale;
    var style = {font: fontSize + 'px ' + 'chelseamarket', fill: 'black', align: 'left'};
    this.textLoading = this.game.add.text(-300, -300, "rainbow", style);

    var backgColor = ['#f1c40f', '#2c3e50', '#16a085', '#8e44ad', '#7f8c8d'];
    var rand = this.game.rnd.integerInRange(0, backgColor.length - 1);
    this.game.stage.backgroundColor = backgColor[rand];

    // Unless you specifically know your game needs to support multi-touch I
    // would recommend setting this to 1
    this.input.maxPointers = 1;

    // Setup the scale strategy
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.stage.disableVisibilityChange = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
};

Boot.prototype.preload = function () {
    // Load the assets to be used in the Preload state (progress bar,
    // etc...). Note we use the "preload" key of the asset pack. The rest of
    // the assets should be loaded in the Preload state.
    var path = serverPath + "assets/images/" + screen.size + "/";
    this.game.load.atlas('loading', path + 'lulu_loading.png', path + 'lulu_loading.json',
        Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);

    //this.game.load.audio("fx_atlas", ["assets/sounds/fx_atlas.mp3"], ['assets/sounds/fx_atlas.ogg']);
    //this.game.load.audio("voiceAudio", ["assets/sounds/voiceAudio.mp3"], ['assets/sounds/voiceAudio.ogg']);

};

Boot.prototype.create = function () {
    // By this point the preloader assets have loaded to the cache, we've
    // set the game settings, so now let's start the real preloader going
    this.game.state.start("Preload");
};

// Methods to validate screen orientation in mobile
Boot.prototype.enterIncorrectOrientation = function () {
    console.log("enterIncorrectOrientation");
    this.game.paused = true;
    document.getElementById('rotate').style.display = 'block';
    document.getElementById('game').style.display = 'none';
};

Boot.prototype.leaveIncorrectOrientation = function () {
    if (!this.startedLandscape) {
        console.log("resizing");
        this.game.width = screen.calcScreen("width");
        this.game.height = screen.calcScreen("height");
        screen.assetScale = screen.calcScreen("scale");

        this.game.renderer.resize(this.game.width, this.game.height);
        this.game.world.resize(this.game.width, this.game.height);
    }

    console.log("leaveIncorrectOrientation");
    this.game.paused = false;
    document.getElementById('game').style.display = 'block';
    document.getElementById('rotate').style.display = 'none';
};

Boot.prototype.gameResized = function () {
    this.game.scale.updateLayout();
};

