class Spaceship {
    constructor(spawnX, spawnY) {
        this.position = createVector(spawnX, spawnY);
        this.velocity = createVector();
        this.hitbox = 0;
        this.dead = false;
        this.type;
    }
    showOnScreen() {}

    actionOnTick() {
        this.showOnScreen();
    }

    outsideMap() {
        let mapWidth = 400;
        let mapHeight = 700;
        let hitbox = hitbox;
        let xPos = this.position.x;
        let yPos = this.position.y;
        if ((xPos - r) < 0) {
            this.die();
        }
        if ((xPos + r) > mapWidth) {
            this.die();
        }
        if ((yPos - r) < 0) {
            this.die();
        }
        if ((yPos + r) > mapHeight) {
            this.die();
        }
    }

    die() {
        this.dead = true;
    }
}