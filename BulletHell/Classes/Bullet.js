class Bullet {
    constructor(spawnX, spawnY) {
        this.position = createVector(spawnX, spawnY);
        this.velocity = createVector();
        this.hitbox = 0;
        this.dead = false;
        this.type;
    }
}