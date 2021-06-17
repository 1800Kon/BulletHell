let game;

function preload() {
    game = new Game();
    game.loadSprites();
}

function setup() {
    createCanvas(1000, 800);
    noCursor();
    bg = loadImage('Assets/Backgrounds/darkPurple.png');
    for (let element of document.getElementsByClassName("p5Canvas")) {
        element.addEventListener("contextmenu", (e) => e.preventDefault());
    }
    game.init();
}

function draw() {
    background(bg);
    game.frameUpdate();
}