import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		height: 256,
		width: 6720,
		type: Phaser.AUTO,
        backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 500 },
				debug: false
			}
		},
		pixelArt: true
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}