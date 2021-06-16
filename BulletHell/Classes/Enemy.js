class Enemy extends Spaceship {
    constructor(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed, bulletSprite) {
        super(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed);
        this.bulletSprite = bulletSprite;
    }

    shoot() {
        if (frameCount % 200 === 0) {
            return new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed).setHeading(1.56), createVector(10, 10), this.bulletSprite);
        }
    }

    tickUpdate() {
        this.position.add(this.velocity);

    }
}