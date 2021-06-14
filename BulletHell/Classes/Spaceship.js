class Spaceship {
    constructor(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed) {
        this.position = position;
        this.velocity = velocity;
        this.hitboxSize = hitboxSize;
        this.hp = hp;
        this.sprite = sprite;
        this.damage = damage;
        this.bulletSpeed = bulletSpeed;
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

    tickUpdate() {
        this.position.add(this.velocity);
    }
}