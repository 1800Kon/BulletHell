class Enemy extends Spaceship {
    constructor(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed) {
        super(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed);
    }
    shoot(sprite) {
        return new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed), createVector(10, 10), sprite);
    }
}