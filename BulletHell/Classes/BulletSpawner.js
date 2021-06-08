class BulletSpawner {
    constructor(xPos, yPos, attachedTo) {
        this.position = createVector(xPos, yPos);
        this.velocity = createVector();
        this.hitbox = 5;
    }

    shootBullet(xPos, yPos, anglesToShoot, speed, hurtsEnemies, bulletConfiguration) {
        for (let i = 0; i < anglesToShoot.length; i++) {
            bullet = new Bullet
        }
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