class SpriteManager {
    preload() {
        this.playerSprite = loadImage("./Assets/PNG/playerShip1_blue.png");
        this.enemy1Sprite = loadImage("./Assets/PNG/Enemies/enemyRed1.png");
        this.enemy2Sprite = loadImage("./Assets/PNG/Enemies/enemyGreen2.png");
        this.enemy3Sprite = loadImage("./Assets/PNG/Enemies/enemyBlack3.png");
        this.playerBulletSprite = loadImage("./Assets/PNG/Lasers/laserBlue01.png");
        this.enemyBulletSprite = loadImage("./Assets/PNG/Effects/star1.png");
    }
}