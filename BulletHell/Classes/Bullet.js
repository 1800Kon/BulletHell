class Bullet {
    constructor(position, velocity, hitboxSize, sprite) {
        this.position = position;
        this.velocity = velocity;
        this.hitboxSize = hitboxSize;
        this.sprite = loadImage("./Assets/PNG/Lasers/laserBlue01.png");
        this.bulletSpeed = 1;
        this.dead = false;
    }

    display() {
        push();
        imageMode(CENTER)
        translate(this.position.x, this.position.y);
        image(this.sprite, 0, 0, this.hitboxSize.x, this.hitboxSize.y);
        pop();
    }

    collisionDetection(collidedWith) {
        this.distance = this.position.dist(collidedWith.position);
        return ((this.position.dist(collidedWith.position) < collidedWith.hitboxSize.x / 2));
    }

    tickUpdate() {
        this.position.add(this.velocity);
    }
}