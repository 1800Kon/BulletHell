class Game {
    constructor() {
        this.spriteManager = new SpriteManager();
    }
    init() {
        this.bulletsOnScreen = [];
        this.enemiesOnScreen = [];
        this.resetGameFlag = true;
        this.enemiesGenerated = 0;
        this.bossFlag = true;
        this.player = new Player(createVector(200, 600), createVector(0, 0), createVector(25, 25), 100, this.spriteManager.playerSprite, 20, 10, this.spriteManager.playerBulletSprite);
        this.boss = new Enemy(createVector(Math.floor(Math.random() * 975) + 25, 10), createVector(0, 0.3), createVector(100, 100), 1000, this.spriteManager.enemy2Sprite, 20, -8, this.spriteManager.enemyBulletSprite3, 100)

    }
    loadSprites() {
        this.spriteManager.preload();
    }
    display() {
        this.player.position.x = constrain(mouseX, 25, 975);
        this.player.position.y = constrain(mouseY, 25, 775);
        this.player.display();
        const bullet = this.player.keyPressed(this.spriteManager.playerBulletSprite);
        if (bullet != null) {
            this.bulletsOnScreen.push(bullet);
            this.spriteManager.laserSound.play();
        }
        this.displayBullets();
        this.enemyLogic();
        if (this.player.hp <= 0) {

            this.spriteManager.lose.play();
            if (this.resetGameFlag) {
                alert("You died! Click OK to restart the game.");
                window.location.reload();
                this.resetGameFlag = false;
            }

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
            if (b.position.y > 800 || b.position.y < 0 || b.position.x < 0 || b.position.x > 1000) {
                b.dead = true;
            }
        }
    }
    enemyLogic() {
        for (let i = 0; i < this.enemiesOnScreen.length; i++) {
            const e = this.enemiesOnScreen[i];
            e.tickUpdate();
            e.display();
            var enemyBullet = e.shoot();
            if (enemyBullet != undefined) {
                this.spriteManager.enemyLaserSound.play();
                for (let k = 0; k < enemyBullet.length; k++) {
                    const bullet = enemyBullet[k];
                    if (bullet != null) {
                        this.bulletsOnScreen.push(bullet);
                    }
                }
            }
            if (e.dead) {
                this.enemiesOnScreen.splice(i, 1);
            }
            if (e.position.y > 775 || e.position.y < 0 || e.position.x < 0 || e.position.x > 1000) {
                e.dead = true;
                this.player.hp = 0;
            }
            for (let j = 0; j < this.bulletsOnScreen.length; j++) {
                const b = this.bulletsOnScreen[j];
                if (b.fromPlayer) {
                    if (b.collisionDetection(e)) {
                        e.hp = e.hp -= this.player.damage;
                        this.spriteManager.enemyHitSound.play();
                        if (e.hp == 0) {
                            this.enemiesOnScreen.splice(i, 1);
                        }
                        this.bulletsOnScreen.splice(j, 1);
                    }
                } else {
                    if (b.collisionDetection(this.player)) {
                        this.player.hp = this.player.hp -= e.damage;
                        this.spriteManager.playerHitSound.play();
                        this.bulletsOnScreen.splice(j, 1);
                    }
                }
            }
        }
    }
    generateEnemy() {
        // Change me for difficulty increase / reduction :^)
        if (frameCount % 75 === 0) {
            if (this.enemiesGenerated < 30) {
                if (this.enemiesGenerated >= 20) {
                    if (this.bossFlag) {
                        this.enemiesOnScreen.push(this.boss);
                        this.bossFlag = false;
                    }
                }
                const en = new Enemy(createVector(Math.floor(Math.random() * 975) + 25, 10), createVector(0, 1), createVector(50, 50), 100, this.spriteManager.enemy1Sprite, 10, -5, this.spriteManager.enemyBulletSprite1, 130)
                this.enemiesOnScreen.push(en);
                this.enemiesGenerated++;
            } else {
                if (this.enemiesOnScreen.length == 0) {
                    if (this.resetGameFlag) {
                        alert("You Won! Click OK to play again.");
                        window.location.reload();
                        this.resetGameFlag = false;
                    }
                }
            }
            if (!this.bossFlag) {
                if (this.boss.hp < 500) {
                    this.boss.fireRate = 25;
                    this.spriteManager.rage1.play();
                    this.spriteManager.rage2.play();
                    this.spriteManager.rage3.play();
                }
            }
        }

    }
    frameUpdate() {
        this.display();
        this.generateEnemy();
    }
}