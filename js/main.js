const game = new Game();
let str = 'Press ENTER to start.'
let running = false;

function preload() {
   game.preload()
}

function setup() {
    noLoop();
    createCanvas (800,600);
    frameRate(30);
    textSize(50);
    textAlign(CENTER);
    game.setup();
}

function draw() {
    // if (!running) {
    //     text(str, 100, 250)
    // } else {
    // game.draw();
    // }    
    fill(50);
    text(str, 100, 250, 300, 400)
    game.draw();
}

function keyPressed() {
    if (keyCode === 13) {
        loop();
    }

    if (game.hit === true && keyCode === 13) {
        console.log('hit is true');
        window.location.reload();
        game.hit = false;        
    }
}