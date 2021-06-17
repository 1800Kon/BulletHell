class SpriteManager {
    preload() {
        this.playerSprite = loadImage("./Assets/PNG/playerShip1_blue.png");
        this.enemy1Sprite = loadImage("./Assets/PNG/Enemies/enemyRed1.png");
        this.enemy2Sprite = loadImage("./Assets/PNG/Enemies/enemyGreen2.png");
        this.enemy3Sprite = loadImage("./Assets/PNG/Enemies/enemyBlack3.png");
        this.playerBulletSprite = loadImage("./Assets/PNG/Lasers/laserBlue01.png");
        this.enemyBulletSprite1 = loadImage("./Assets/PNG/Effects/star1.png");
        this.enemyBulletSprite2 = loadImage("./Assets/PNG/Effects/star2.png");
        this.enemyBulletSprite3 = loadImage("./Assets/PNG/Effects/star3.png");
        this.laserSound = loadSound("./Assets/Sounds/minimize_001.ogg");
        this.enemyLaserSound = loadSound("./Assets/Sounds/scratch_005.ogg");
        this.playerHitSound = loadSound("./Assets/Bonus/sfx_shieldDown.ogg");
        this.enemyHitSound = loadSound("./Assets/Sounds/glitch_004.ogg");
        this.lose = loadSound("./Assets/Bonus/sfx_lose.ogg");
        this.rage1 = loadSound("./Assets/Sounds/back_001.ogg");
        this.rage2 = loadSound("./Assets/Sounds/back_002.ogg");
        this.rage3 = loadSound("./Assets/Sounds/back_003.ogg");

    }
}