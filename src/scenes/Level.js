
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// groundTiles
		const groundTiles = this.add.tilemap("groundTiles");
		groundTiles.addTilesetImage("Blocks", "Blocks");

		// tiles
		const tiles = groundTiles.createLayer("Tile Layer 1", ["Blocks"], 0, 112);

		// guapen_1
		const guapen_1 = this.physics.add.image(64, 48, "guapen");
		guapen_1.scaleX = 0.06267551584446829;
		guapen_1.scaleY = 0.06267551584446829;
		guapen_1.body.bounce.y = 0.5;
		guapen_1.body.collideWorldBounds = true;
		guapen_1.body.setSize(208, 240, false);

		// collider
		this.physics.add.collider(guapen_1, tiles);

		this.tiles = tiles;
		this.guapen_1 = guapen_1;
		this.groundTiles = groundTiles;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	tiles;
	/** @type {Phaser.Physics.Arcade.Image} */
	guapen_1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	groundTiles;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.tiles.setCollision(1, true);	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
