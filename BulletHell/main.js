function setup() {
    createCanvas(400, 700);
    bg = loadImage('Assets/Backgrounds/darkPurple.png');
    player = new Player(500);
}

function draw() {
    background(bg);
    player.draw();
}