export default class Menu extends Phaser.Scene {
  constructor() {
    super('welcome')
  }

  create() {
    this.add.text(330, 200, 'Loading..')

    setTimeout(() => {
      this.scene.start('game')
    }, 5000)
  }
}
