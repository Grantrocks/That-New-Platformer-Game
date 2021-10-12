var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
    this.add.text(300, 60, 'That New Platformer Game', {fill: '#0f0'})
    this.clickButton = this.add.text(330, 150, 'Default Map', { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.start("Original Map") )
    this.clickMap2 = this.add.text(310, 200, "GrantM's Map", { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.start("SecMap") )
    },
    update: function() {
    
    }
});
var reset = 0; 
function resetScore(){
localStorage.setItem('score',reset);
localStorage.setItem('level',reset);
localStorage.setItem('progress',reset);
localStorage.setItem('progressl',reset);
localStorage.setItem('increase',reset);
console.log('Player/User Score Succsessfully Reset');
alert("Successfully reset score!");
};
