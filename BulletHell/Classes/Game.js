class Game {
    constructor() {
        this.spriteManager = new SpriteManager();
    }
    init() {
        this.bulletsOnScreen = [];
        this.player = new Player(createVector(200, 600), createVector(0, 0), createVector(50, 50), 100, this.spriteManager.playerSprite, 10, 10);
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
        if (this.bulletsOnScreen.length > 0) {
            this.bulletsOnScreen.forEach(b => {
                b.display();
                b.tickUpdate();
            });
        }
    }
    frameUpdate() {
        this.display();
    }
}