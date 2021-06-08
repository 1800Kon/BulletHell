class Player extends Spaceship {
    constructor(posX, posY) {
        super(posX, posY);
        this.hitbox = 5;
        this.type = "player";
        this.lastShotKeyPressed = 65;
    }
    actionOnTick() {
        this.control();
        super.actionOnTick();
    }
    control() {
        // Make the shooting alternate
        if (keyIsDown(65) && this.lastShotKeyPressed != 65) {
            this.shoot();
            this.lastShotKeyPressed = 65;
        }
        if (keyIsDown(83) && this.lastShotKeyPressed != 83) {
            this.shoot();
            this.lastShotKeyPressed = 83;
        }
        //Movement left right up down
        if (keyIsDown(LEFT_ARROW)) {
            this.velocity = createVector(-this.speed, 0);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.velocity = createVector(this.velocity, 0);
        }
        if (keyIsDown(UP_ARROW)) {
            this.velocity = createVector(0, -this.velocity);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.velocity = createVector(0, this.velocity);
        }
    }
}