var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image("coin", "coin.png");
    },
    create: function() {
        this.plane = this.add.image(400, 300, "coin");
    },
    update: function() {}
});
