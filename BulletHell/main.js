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