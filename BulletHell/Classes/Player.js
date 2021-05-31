class Player extends Spaceship {
    constructor(hp) {
        this.sprite = loadImage('./Assets/PNG/playerShip1_green.png');
    }
    draw() {
        image(sprite);
    }
    shoot() {}
    explode() {}
    move() {}
    die() {}
    checkCollision() {}
}