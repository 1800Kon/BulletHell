class Game {
    constructor() {
        this.spriteManager = new SpriteManager();
    }
    init() {
        this.bulletsOnScreen = [];
        this.enemiesOnScreen = [];
        this.enemyBulletsOnScreen = [];
        this.player = new Player(createVector(200, 600), createVector(0, 0), createVector(50, 50), 100, this.spriteManager.playerSprite, 50, 10, this.spriteManager.playerBulletSprite);
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
        if (this.player.hp == 0) {

        }
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
            const enemyBullet = e.shoot();
            if (enemyBullet != null) {
                this.bulletsOnScreen.push(enemyBullet);
            }
            if (e.dead) {
                this.enemiesOnScreen.splice(i, 1);
            }
            if (e.position.y > 775 || e.position.y < 0 || e.position.x < 0 || e.position.x > 800) {
                e.dead = true;
            }
            for (let j = 0; j < this.bulletsOnScreen.length; j++) {
                const b = this.bulletsOnScreen[j];
                if (b.fromPlayer) {
                    if (b.collisionDetection(e)) {
                        e.hp = e.hp -= this.player.damage;
                        if (e.hp == 0) {
                            this.enemiesOnScreen.splice(i, 1);
                        }
                        this.bulletsOnScreen.splice(j, 1);
                    }
                } else {
                    if (b.collisionDetection(this.player)) {
                        this.player.hp = this.player.hp -= e.damage;
                        this.bulletsOnScreen.splice(j, 1);
                    }
                }
            }
        }
    }
    generateEnemy() {
        if (frameCount % 200 === 0) {
            const en = new Enemy(createVector(200, 100), createVector(0, 1), createVector(50, 50), 100, this.spriteManager.enemy1Sprite, 10, -5, this.spriteManager.enemyBulletSprite)
            this.enemiesOnScreen.push(en);
        }
    }
    frameUpdate() {
        this.display();
        this.generateEnemy();
    }
}