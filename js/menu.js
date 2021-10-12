export default class Menu extends Phaser.Scene {
  constructor() {
    super('welcome')
  }

  create() {
    this.add.text(20, 20, 'Loading..')

    setTimeout(() => {
      this.scene.start('game')
    }, 2000)
  }
}
