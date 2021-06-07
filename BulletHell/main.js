let player;


function setup() {
    createCanvas(400, 700);
    bg = loadImage('Assets/Backgrounds/darkPurple.png');
    var playerSprite = "Assets/PNG/playerShip1_blue.png";
    var enemySprite = "Assets/PNG/Enemies/enemyBlack1.png";
    player = new Spaceship(100, playerSprite, "f", "f");
}

function draw() {
    background(bg);
    player.spawn()
}

class Spaceship {
    constructor(health, spriteLocation, particleSystem, bulletSpawner) {
        this.health = health;
        this.sprite = loadImage(spriteLocation);
        let alive = true;
        this.particleSystem = particleSystem;
        this.bulletSpawner = bulletSpawner;
        this.player = false;
        this.positionX = 200;
        this.positionY = 200;
    }
    spawn() {
        image(this.sprite, this.positionX, this.positionY);
        this.move();
    }
    move() {
        if (keyIsPressed) {
            if (keyCode == RIGHT_ARROW) {
                this.positionX += 1;
            } else if (keyCode == LEFT_ARROW) {
                this.positionX -= 1;
            } else if (keyCode == UP_ARROW) {
                this.positionY -= 1;
            } else if (keyCode == DOWN_ARROW) {
                this.positionY += 1;
            }
        }
    }
}

class Player extends Spaceship {
    constructor(health, spriteLocation, particleSystem, bulletSpawner) {
        super(health, spriteLocation, particleSystem, bulletSpawner);
        this.player = true;
    }
}