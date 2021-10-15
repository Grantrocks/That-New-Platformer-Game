// The game config that is used by Phaser
const phaserConfig = {
    type: Phaser.AUTO,
    parent: "game",
    width: 800,
    height: 400,
    backgroundColor: "#000000",
        physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [ Menu, DefaultMap, SecMap, DevilMap, DFMap ]
};
            const game = new Phaser.Game(phaserConfig);
var reset = 0; 
function resetScore(){
  localStorage.setItem('score',reset);
  localStorage.setItem('level',reset);
  localStorage.setItem('progress',reset);
  localStorage.setItem('progressl',reset);
  console.log('Player/User Stats Succsessfully Reset');
  alert('Player/User Stats Succsessfully Reset');
}
