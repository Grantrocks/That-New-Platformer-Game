var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
    this.add.text(330, 100, 'That New Platformer Game', {fill: '#0f0'})
    this.clickButton = this.add.text(330, 150, 'Default Map', { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.start("DefaultMap") )
    this.clickMap2 = this.add.text(330, 200, "GrantM's Map", { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.start("SecMap") )
    },
    update: function() {
    
    }
});
