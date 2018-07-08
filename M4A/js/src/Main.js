var serverPath = "";
var apiURL = "index.php?option=com_arbolabc&task=profiles_track.";
var trackingObj = 0;

var screen = {
    size: "XL",
    scale: Number((this.gameWidth / 1300).toFixed(4)),
    calcScreen: function (t) {
        this.width = Math.max(window.innerWidth, window.innerHeight);
        this.height = Math.min(window.innerWidth, window.innerHeight);

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
        if(this.typeScreen == "width") {
            return this.gameWidth;
        }

        if(this.typeScreen == "height") {
            return this.gameHeight;
        }

        if(this.typeScreen == "scale") {
            var scale = this.gameWidth / 1300;
            this.assetScale = Number(scale.toFixed(4));
            this.scale = this.assetScale;
            return (this.assetScale);
        }
    },
    assetScale: 0
};

window.onload = function() {
    trackingObj = new Tracking();
    if (navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'iPad') {
        $("#game").removeClass("contentGame").addClass("contentGameSf");
    }

	var game = new Phaser.Game(screen.calcScreen("width"), screen.calcScreen("height"), Phaser.CANVAS, "game");
    screen.assetScale = screen.calcScreen("scale");

	// Add the States your game has.
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Preload", Preload);
    game.state.add("GamePlay", GamePlay);
    game.state.add("GameFinish", GameFinish);

	// Now start the Boot state.
	game.state.start("Boot");
};

$(window).on('beforeunload', function () {
    trackingObj.postData('storeTrackingData');
});


//Rainbow Tree Carolina Ospina 15/01/16