
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(5, 230, 256, 20);
		progressBar.scaleX = 0.7972100444261355;
		progressBar.scaleY = 0.7972100444261355;
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 501525;
		progressBar.strokeColor = 501525;

		// progressBarBg
		const progressBarBg = this.add.rectangle(5, 230, 256, 20);
		progressBarBg.scaleX = 0.7972100444261355;
		progressBarBg.scaleY = 0.7972100444261355;
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 10766328;
		progressBarBg.isStroked = true;
		progressBarBg.strokeColor = 10766328;

		// loadingText
		const loadingText = this.add.text(5, 212, "", {});
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#c1c1c1", "fontFamily": "monospace", "fontSize": "12px", "stroke": "#c1c1c1", "resolution": 24 });

		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		const width =  this.progressBar.width;

		this.load.on("progress", (progress) => {

			this.progressBar.width = progress * width;
		});
	}

	create() {

		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
