var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {
    this.load.audio('music', 'audio/Menu.mp3');
    },
    create: function() {
                var music = this.sound.add('music');
music.setLoop(true);
music.play();
    var button = this.add.text(0, 0, 'Repository', {fill: '#0f0'}).setInteractive();

    button.on('pointerup', openExternalLink, this);

    this.add.text(300, 60, 'That New Platformer Game', {fill: '#0f0'})
    this.add.text(300, 90, 'A Game Made By Grant M', {fill: '#0f0'})

    this.clickButton = this.add.text(260, 150, 'Original Map', { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("DefaultMap"), music.stop()} )
    this.clickMap2 = this.add.text(310, 200, "GrantM's Map", { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("SecMap"), music.stop()} )
    this.clickDevil = this.add.text(270, 250, "Devil", { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => {this.scene.start("DevilMap"), music.stop()} )
    },
    update: function() {
    
    }
});
function openExternalLink ()
{
    var url = 'https://github.com/Grantrocks/That-New-Platformer-Game';

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}
