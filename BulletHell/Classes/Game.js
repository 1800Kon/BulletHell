class Game {
    constructor() {
        this.spriteManager = new SpriteManager();
    }
    init() {
        this.bulletsOnScreen = [];
        this.enemiesOnScreen = [];
        this.player = new Player(createVector(200, 600), createVector(0, 0), createVector(50, 50), 100, this.spriteManager.playerSprite, 50, 10);
    }
    loadSprites() {
        this.spriteManager.preload();
    }
    display() {
        this.player.position.x = constrain(mouseX, 25, 375);
        this.player.position.y = constrain(mouseY, 25, 775);
        this.player.display();
        const bullet = this.player.keyPressed(this.spriteManager.playerBulletSprite);
        if (bullet != null) {
            this.bulletsOnScreen.push(bullet);
        }
        this.displayBullets();
        this.enemyLogic();
    }
    displayBullets() {
        this.bulletsOnScreen.forEach(b => {
            b.tickUpdate();
            b.display();
            if (b.position.y > 775 || b.position.y < 0 || b.position.x < 0 || b.position.x > 800) {
                this.bulletsOnScreen.pop(b);
            }
        })
    }
    enemyLogic() {
        this.enemiesOnScreen.forEach(e => {
            e.tickUpdate();
            e.display();
            if (this.bulletsOnScreen.length > 0) {
                this.bulletsOnScreen.forEach(b => {
                    if (b.collisionDetection(e)) {
                        e.hp = e.hp -= this.player.damage;
                        if (e.hp == 0) {
                            this.enemiesOnScreen.pop(e);
                        }
                        this.bulletsOnScreen.pop(b);
                    }
                })
            }
        })
    }
    frameUpdate() {
        this.display();
        if (frameCount % 900 === 0) {
            const en = new Enemy(createVector(200, 100), createVector(0, 1), createVector(50, 50), 100, this.spriteManager.enemy1Sprite, 10, 10)
            this.enemiesOnScreen.push(en);
        }
    }
}