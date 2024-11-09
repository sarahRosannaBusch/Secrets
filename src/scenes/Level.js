
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

		// ground_tilemap
		this.cache.tilemap.add("ground_tilemap_fc081465-64db-49e0-91a2-a6f75382dc44", {
			format: 1,
			data: {
				width: 420,
				height: 16,
				orientation: "orthogonal",
				tilewidth: 16,
				tileheight: 16,
				tilesets: [
					{
						columns: 5,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 10,
						firstgid: 1,
						image: "Blocks2",
						name: "Blocks2",
						imagewidth: 80,
						imageheight: 32,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "collision_layer",
						width: 32,
						height: 15,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 0, 0, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 0, 0, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 0, 0, 0, 0, 0, 0, 0, 8, 4, 4, 4, 4, 4, 4, 4, 8, 9, 0, 0, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 3, 4, 3, 4, 0, 0, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 0, 0, 0, 0, 0, 0, 0, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const ground_tilemap = this.add.tilemap("ground_tilemap_fc081465-64db-49e0-91a2-a6f75382dc44");
		ground_tilemap.addTilesetImage("Blocks2");

		// collision_layer
		const collision_layer = ground_tilemap.createLayer("collision_layer", ["Blocks2"], 0, 0);

		// player
		const player = this.physics.add.sprite(16, 48, "Player", 0);
		player.body.bounce.y = 0.25;
		player.body.collideWorldBounds = true;
		player.body.setOffset(2, 3);
		player.body.setSize(12, 16, false);

		// player_ground
		this.physics.add.collider(player, collision_layer);

		this.collision_layer = collision_layer;
		this.player = player;
		this.ground_tilemap = ground_tilemap;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	collision_layer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Tilemaps.Tilemap} */
	ground_tilemap;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.collision_layer.setCollisionBetween(0, 9, true);
		this.player.setInteractive();
		this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,S,A,D,SPACE');
	}

	update(t, d) {
		this.movePlayer();
	}

	movePlayer() {
		let dir, jump, stomp;
		if(this.cursors.left.isDown || this.wasd.A.isDown) {
            dir = 'left';
        } else if(this.cursors.right.isDown || this.wasd.D.isDown) {
            dir = 'right';
        }

        if(this.cursors.up.isDown || this.wasd.W.isDown || this.wasd.SPACE.isDown) {
            jump = true;
        } else if(this.cursors.down.isDown || this.wasd.S.isDown) {
            stomp = true;
        }

		if(dir === 'left') {
            this.player.setVelocityX(-150);
            if(jump) {
                this.player.anims.play('stand', true);
            } else {
                this.player.anims.play('run', true);
            }
        } else if(dir === 'right') {
            this.player.setVelocityX(150);
            if(jump) {
                this.player.anims.play('stand', true);
            } else {
                this.player.anims.play('run', true);
            }
        } else {
            this.player.setVelocityX(0);
            if(jump) {                
                this.player.anims.play('stand');
            } else if(stomp) {
                this.player.anims.play('stand');
                this.player.setVelocityY(200);
            } else {
                this.player.anims.play('stand');
            }
        } 

		if(jump && this.player.body.blocked.down){
            if(Phaser.Input.Keyboard.JustDown(this.cursors.up) 
                || Phaser.Input.Keyboard.JustDown(this.wasd.W)
                || Phaser.Input.Keyboard.JustDown(this.wasd.SPACE)) {
                this.player.setVelocityY(-200);
            }
        }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
