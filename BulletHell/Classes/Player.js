let lastKey = 90;
class Player extends Spaceship {
    constructor(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed) {
        super(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed);
    }

    keyPressed(sprite) {
        if (keyCode === 90) {
            if (lastKey != 90) {
                lastKey = 90;
                return new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed), createVector(1, 1), sprite);
            }
        } else if (keyCode === 88) {
            if (lastKey != 88) {
                lastKey = 88;
                return new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed), createVector(1, 1), sprite);
            } else {
                return null;
            }
        }
    }
}