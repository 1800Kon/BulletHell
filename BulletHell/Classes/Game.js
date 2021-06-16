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
        for (let i = 0; i < this.bulletsOnScreen.length; i++) {
            const b = this.bulletsOnScreen[i];
            if (b.dead) {
                this.bulletsOnScreen.splice(i, 1)
            }
            b.tickUpdate();
            b.display();
            if (b.position.y > 775 || b.position.y < 0 || b.position.x < 0 || b.position.x > 800) {
                b.dead = true;
            }
        }
    }
    enemyLogic() {
        for (let i = 0; i < this.enemiesOnScreen.length; i++) {
            const e = this.enemiesOnScreen[i];
            e.tickUpdate();
            e.display();
            if (e.dead) {
                e.splice(i, 1);
            }
            for (let j = 0; j < this.bulletsOnScreen.length; j++) {
                const b = this.bulletsOnScreen[j];
                if (b.collisionDetection(e)) {
                    e.hp = e.hp -= this.player.damage;
                    if (e.hp == 0) {
                        this.enemiesOnScreen.splice(i, 1);
                    }
                    this.bulletsOnScreen.splice(j, 1);
                }
            }

        }
    }
    frameUpdate() {
        this.display();
        if (frameCount % 200 === 0) {
            const en = new Enemy(createVector(200, 100), createVector(0, 1), createVector(50, 50), 100, this.spriteManager.enemy1Sprite, 10, 10)
            this.enemiesOnScreen.push(en);
        }
    }
}