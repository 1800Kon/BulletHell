class Bullet {
    constructor(position, velocity, hitboxSize, sprite) {
        this.position = position;
        this.velocity = velocity;
        this.hitboxSize = hitboxSize;
        this.sprite = loadImage("./Assets/PNG/Lasers/laserBlue01.png");
        this.bulletSpeed = 1;
    }

    display() {
        push();
        imageMode(CENTER)
        translate(this.position.x, this.position.y);
        image(this.sprite, 0, 0, this.hitboxSize.x, this.hitboxSize.y);
        pop();
    }

    collisionDetection(collidedWith) {
        return ((this.pos.dist(collidedWith) < collidedWith.hitboxSize / 2));
    }

    collisionDetection(collidedWith) {
        return ((this.pos.dist(collidedWith) < collidedWith.hitboxSize / 2));
    }

    tickUpdate() {
        this.position.add(this.velocity);
    }
}