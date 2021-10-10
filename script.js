swapping scene through
this.scene.start("SceneTwo");
add a Message
this.scene.start("SceneTwo", {
  'message': 'Game OVer'
});

let btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);

<button type="submit" name="formBtn">
  Submit
</button>

let btn = document.createElement("button");
btn.innerHTML = "Save";
btn.onclick = function () {
  alert("Button is clicked");
};
document.body.appendChild(btn);
<!-- HTML !-->
<button class="button-9" role="button">Button 9</button>

/* CSS */
.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}










    preload: function() {
                  var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });

            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            
            this.load.image('logo', 'logo/logo.png');
            for (var i = 0; i < 0; i++) {
                this.load.image('logo'+i, 'logo/logo.png');
            }
	this.load.atlas("player", "character/spritesheet.png", "character/spritesheet.json");
	this.load.image("platform", "blocks/platform.png");
	this.load.image("spike", "blocks/spike.png");
	this.load.image("coin", "blocks/coin.png");
  this.load.audio('collectcoin', 'audio/collectcoin.wav');
  this.load.audio('finish', 'audio/complete.mp3');
  this.load.image('dirt', 'blocks/dirt.png');
  this.load.image('edgel', 'blocks/edge.png');
  this.load.image('bottom', 'blocks/bottom.png');
  this.load.image('edger', 'blocks/edger.png');
  this.load.audio('jumpsound', 'audio/Jump.wav');
  this.load.audio('hurtsound', 'audio/Hit.wav');
  this.load.audio('music', 'audio/backgroundmusic.mp3');

    },
    create: function() {
      
var music = this.sound.add('music');
music.setLoop(true);
music.play();
      TestLogin()
	this.cameras.main.setBackgroundColor('#ffffff');
	this.spawnPlayer = (x, y)=>{
		this.player = this.physics.add.sprite(x, y, "player", "0");
		this.player.body.setGravityY(800);
		this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.dirt);
    this.physics.add.collider(this.player, this.edgel);
    this.physics.add.collider(this.player, this.bottom);
    this.physics.add.collider(this.player, this.edger);
		this.cameras.main.startFollow(this.player);
    this.player.score = 0;
    this.player.score = parseInt(localStorage.getItem('score')) || 0;
		this.scoreText = this.add.text(0, 0, "Score: "+this.player.score, {
			fill:"#000000",
			fontSize:"15px",
			fontFamily:"Arial Black"
		}).setScrollFactor(0).setDepth(200);
	};
	this.collectCoin = (player, coin)=>{
		player.score+=10;
    this.sound.play('collectcoin');
		coin.destroy();
		this.scoreText.setText("Score: "+ this.player.score);
    if (this.player.score == 1000){
    this.sound.play('finish');
    }
    localStorage.setItem('score',this.player.score);
	};
  this
	this.die = ()=>{
            this.sound.play('hurtsound');
            this.player.score-=100;
            localStorage.setItem('score',this.player.score);
		this.physics.pause();
this.scene.start("SceneTwo", {
  'message': 'Game Over'
});
	};
	this.platforms = this.physics.add.staticGroup();
	this.coins = this.physics.add.group();
	this.spikes = this.physics.add.group();
  this.dirt = this.physics.add.staticGroup();
  this.bottom = this.physics.add.staticGroup();
  this.edgel = this.physics.add.staticGroup();
  this.edger = this.physics.add.staticGroup();
	let mapArr = map.split('.');
	let drawX = 0;
	let drawY = 0;
	mapArr.forEach(row=>{
		drawX = 0;
		for(let i = 0; i<row.length; i++){
			if(row.charAt(i)==='1'){
				this.platforms.create(drawX, drawY, "platform");
			}else if(row.charAt(i)==='2'){
				if(row.charAt(i+1)==='1'){
					this.spawnPlayer(drawX-4, drawY-12);
				}else if(row.charAt(i-1)==='1'){
					this.spawnPlayer(drawX+4, drawY-12);
				}else{
					this.spawnPlayer(drawX, drawY-12);					
				}
			}else if(row.charAt(i)==='c'){
				this.coins.create(drawX, drawY+1, "coin");
			}else if(row.charAt(i)==='s'){
				this.spikes.create(drawX, drawY+1, "spike");
			}else if(row.charAt(i)==='d'){
        this.dirt.create(drawX,drawY, 'dirt');
      }else if(row.charAt(i)==='e'){
        this.edgel.create(drawX,drawY, 'edgel');
      }else if(row.charAt(i)==='b'){
        this.bottom.create(drawX,drawY, 'bottom');
      }else if(row.charAt(i)==='r'){
        this.bottom.create(drawX,drawY, 'edger');
      }
			drawX+=18;
		}
		drawY+=18;
	});
	this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
	this.physics.add.overlap(this.player, this.spikes, this.die, null, this);
	this.anims.create({
		key:"walk",
			frames:[{key:"player", frame:"0"}, {key:"player", frame:"1"}],
			frameRate:10,
			repeat:-1
	});
	this.anims.create({
		key:"stand",
			frames:[{key:"player", frame:"0"}],
			frameRate:1
	});
	this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    },
    update: function() {
      	if(this.key_W.isDown && this.player.body.touching.down){
		this.player.setVelocityY(-350);
    this.sound.play('jumpsound');
	}
	if(this.key_A.isDown){
		this.player.setVelocityX(-200);
		this.player.anims.play("walk", true);
		this.player.flipX = true;
	}else if(this.key_D.isDown){
		this.player.setVelocityX(200);
		this.player.anims.play("walk", true);
		this.player.flipX = false;
	}else{
		this.player.anims.play("stand", true);
		this.player.setVelocityX(0);
	}
    }
});
var reset = 0; 
function resetScore(){
  alert("You can't undo this! Reload now to save your stuff")
  localStorage.setItem('score',reset);
  console.log('Player/User Score Succsessfully Reset');
};