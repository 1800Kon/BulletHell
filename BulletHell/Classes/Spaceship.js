class Spaceship {
    constructor() {
        if (this.constructor === Spaceship) {
            throw new TypeError("Can't instantiate abstract classes");
        }
        var hp;
        var sprite;
        var alive;
        var particleSystem;
        var bullerSpawner;
    }
    shoot() {}
    explode() {}
    move() {}
    die() {}
    checkCollision() {}
}