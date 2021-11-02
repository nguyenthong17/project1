const game = new Game();

function preload() {
   game.preload()
}

function setup() {
    createCanvas (800,600)
    frameRate(30)
    game.setup()
}

function draw() {
    game.draw()    
}

function keypressed() {
    
}