let game;
let bgSong;

function preload() {
    game = new Game();
    game.loadSprites();
    bgSong = loadSound("Assets/Sounds/bgmusic.mp3");
}

function setup() {
    createCanvas(1000, 800);
    noCursor();
    bg = loadImage('Assets/Backgrounds/darkPurple.png');
    for (let element of document.getElementsByClassName("p5Canvas")) {
        element.addEventListener("contextmenu", (e) => e.preventDefault());
    }
    game.init();
    bgSong.play();
    bgSong.setVolume(0.7);
}

function draw() {
    background(bg);
    game.frameUpdate();
}