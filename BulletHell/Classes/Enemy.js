class Enemy extends Spaceship {
    constructor(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed, bulletSprite) {
        super(position, velocity, hitboxSize, hp, sprite, damage, bulletSpeed);
        this.bulletSprite = bulletSprite;
    }

    shoot() {
        if (frameCount % 100 === 0) {
            const pattern = [];
            switch (Math.floor(Math.random() * 3) + 1) {
                case 1:
                    // Full circle
                    for (let i = 0; i < 63; i++) {
                        pattern.push(new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed).setHeading(0.4 + (i / 10)), createVector(10, 10), this.bulletSprite));
                    }
                    break;

                case 2:
                    // Single shot
                    pattern.push(new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed), createVector(10, 10), this.bulletSprite));
                    break;
                case 3:
                    // Penta shot
                    for (let i = 0; i < 5; i++) {
                        pattern.push(new Bullet(createVector(this.position.x, this.position.y), createVector(0, -this.bulletSpeed).setHeading(1.37 + (i / 10)), createVector(10, 10), this.bulletSprite));
                    }
                    break;
            }
            return pattern;
        }
    }

    tickUpdate() {
        this.position.add(this.velocity);

    }
}