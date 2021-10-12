var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
    this.clickButton = this.add.text(330, 150, 'Default Map', { fill: '#0f0' })
     .setInteractive()
     .on('pointerdown', () => this.scene.start("DefaultMap") )
    },
    update: function() {
    
    }
});
