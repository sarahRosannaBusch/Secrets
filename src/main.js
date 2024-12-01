import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.onerror = (msg, src, line, col, e) => {
	console.log("couldn't load game :(");
	const errorContainer = document.getElementById('error-container'); 
	errorContainer.innerHTML = `<div class="error-message">
	<p>Oops, something went wrong :(</p>
	<p>${msg}</p>
	</div>`;
}

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		height: 256,
		width: 6724,
		type: Phaser.AUTO,
		backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 },
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
		
		//this.load.pack("pack", "assets/preload-asset-pack.json");
		console.log("You came here looking for cheat codes, didn't you? Good thinking. I'm sure I saw them around here somewhere ;)")
	}

	create() {

		this.scene.start("Preload");
	}
}