var DefaultMap = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "DefaultMap" });
    },
    init: function() {},
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
            
            this.load.image('logo', 'logo.png');
            for (var i = 0; i < 0; i++) {
                this.load.image('logo'+i, 'logo.png');
            }
this.load.atlas('player', 'character/spritesheet.png', 'character/spritesheet.json');
this.load.image('coin','blocks/coin.png');
this.load.image('spike','blocks/spike.png');
this.load.image('dirt','blocks/dirt.png');
this.load.image('idirt','blocks/dirt.png');
this.load.image('bottom','blocks/bottom.png');
this.load.image('edgel','blocks/edge.png');
this.load.image('edger', 'blocks/edger.png');
this.load.image('platform','blocks/platform.png');
this.load.audio('music','audio/DefaultMap.wav');
this.load.audio('collectcoin', 'audio/collectcoin.wav');
this.load.audio('complete','audio/complete.mp3');
this.load.audio('hurt', 'audio/Hit.wav');
this.load.audio('jump', 'audio/Jump.wav');
    },
    create: function() {
	        window.addEventListener('resize', resize);
    resize();
    // Place the remaining create function code below
        var music = this.sound.add('music');
music.setLoop(true);
music.play();
	this.cameras.main.setBackgroundColor('#ffffff');
	this.spawnPlayer = (x, y)=>{
		this.player = this.physics.add.sprite(x, y, "player", "1");
		this.player.body.setGravityY(800);
		this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.bottom);
    this.physics.add.collider(this.player, this.edgel);
    this.physics.add.collider(this.player, this.edger);
    this.physics.add.collider(this.player, this.dirt);
		this.cameras.main.startFollow(this.player);
		this.player.score = 0;
		this.player.level = 0;
		this.player.progress = 0;
		this.player.progressl = 500;
    		this.player.score = parseInt(localStorage.getItem('score')) || 0;
    		this.player.level = parseInt(localStorage.getItem('level')) || 0;
    		this.player.progress = parseInt(localStorage.getItem('progress')) ||0;
		this.player.progressl = parseInt(localStorage.getItem('progressl')) ||500;
		this.scoreText = this.add.text(0, 0, "Score: "+this.player.score, {
			fill:"#000000",
			fontSize:"15px",
			fontFamily:"Arial Black"
		}).setScrollFactor(0).setDepth(200);
	        this.levelText = this.add.text(100,0, "Level: "+this.player.level, {
		   	fill:"#000000",
		    	fontSize:"15px",
		    	fontFaimly:"Arial Black"
	    	}).setScrollFactor(0).setDepth(200);
		this.progresslText = this.add.text(200,0, "Level Up In: "+this.player.progressl, {
		   	fill:"#000000",
		    	fontSize:"15px",
		    	fontFaimly:"Arial Black"
	    	}).setScrollFactor(0).setDepth(200);
	};
	this.collectCoin = (player, coin)=>{
		player.score+=(Math.floor(Math.random() * 10) + 1);
		player.progress+=5;
		player.progressl-=5;
    this.sound.play('collectcoin');
		coin.destroy();
		this.scoreText.setText("Score: "+ this.player.score);
		this.progresslText.setText("Level Up In: "+this.player.progressl);
    localStorage.setItem('score',this.player.score);
    localStorage.setItem('progress',this.player.progress);
    localStorage.setItem('progressl',this.player.progressl);
    if (this.player.progress == 500){
      this.sound.play('complete');
      this.player.level += 1;
      this.levelText.setText("Level: "+this.player.level);
      localStorage.setItem('level',this.player.level);
      this.player.progress = 0;
      this.player.progressl = 500;
      localStorage.setItem('progress',this.player.progress);
      localStorage.setItem('progressl',this.player.progressl);
    }
	};
	this.die = ()=>{
		this.physics.pause();
    this.player.score-=100;
    localStorage.setItem('score',this.player.score);
    this.sound.play('hurt');
		let deathText = this.add.text(0, 0, "YOU DIED", {
			color:"#d53636",
			fontFamily:"Arial Black",
			fontSize:"50px"
		}).setScrollFactor(0);
		Phaser.Display.Align.In.Center(deathText, this.add.zone(400, 250, 800, 500));
	};
	this.platforms = this.physics.add.staticGroup();
  this.bottom = this.physics.add.staticGroup();
  this.edger = this.physics.add.staticGroup();
  this.dirt = this.physics.add.staticGroup();
  this.edgel = this.physics.add.staticGroup();
	this.coins = this.physics.add.group();
	this.spikes = this.physics.add.group();
	this.idirt = this.physics.add.group();
	let mapArr = dmap.split('.');
	let drawX = 0;
	let drawY = 0;
		mapArr.forEach(row=>{
		drawX = 0;
		for(let i = 0; i<row.length; i++){
			if(row.charAt(i)==='p'){
				this.platforms.create(drawX, drawY, "platform");
			}else if(row.charAt(i)==='2'){
				if(row.charAt(i+1)==='p'){
					this.spawnPlayer(drawX-4, drawY-12);
				}else if(row.charAt(i-1)==='p'){
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
      }else if(row.charAt(i)==='l'){
        this.edgel.create(drawX,drawY, 'edgel');
      }else if(row.charAt(i)==='b'){
        this.bottom.create(drawX,drawY, 'bottom');
      }else if(row.charAt(i)==='r'){
        this.bottom.create(drawX,drawY, 'edger');
      }else if(row.charAt(i)==='g'){
        this.idirt.create(drawX,drawY, 'idirt');
      }
			drawX+=18;
		}
		drawY+=18;
	});
	this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
	this.physics.add.overlap(this.player, this.spikes, this.die, null, this);
	this.anims.create({
		key:"walk",
			frames:[{key:"player", frame:"1"}, {key:"player", frame:"0"}],
			frameRate:10,
			repeat:-1
	});
	this.anims.create({
		key:"stand",
			frames:[{key:"player", frame:"1"}],
			frameRate:1
	});
	this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	this.key_LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
	this.key_RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
   	this.key_R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
   	this.key_M = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    },
    update: function() {
	 if(this.key_R.isDown){
            location.reload();
	 }
	 if(this.key_M.isDown){
	 this.scene.start('Menu');
	 }
    	if(this.key_UP.isDown && this.player.body.touching.down){
		this.player.setVelocityY(-350);
    this.sound.play('jump');
	}
	if(this.key_LEFT.isDown){
		this.player.setVelocityX(-200);
		this.player.anims.play("walk", true);
		this.player.flipX = true;
	}else if(this.key_RIGHT.isDown){
		this.player.setVelocityX(200);
		this.player.anims.play("walk", true);
		this.player.flipX = false;
	}else{
		this.player.anims.play("stand", true);
		this.player.setVelocityX(0);
	}
    }
});
function resize() {
        var canvas = game.canvas, width = document.getElementsByClassName("parent-container")[0].offsetWidth, height = window.innerHeight;
    var wratio = width / height, ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + 'px';
        canvas.style.height = (width / ratio) + 'px';
    } else {
        canvas.style.width = (height * ratio) + 'px';
        canvas.style.height = height + 'px';
    }
}
