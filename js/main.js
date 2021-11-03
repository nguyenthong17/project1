const game = new Game();
let str = 'Press ENTER to start';
let instruction = 'Use ARROW keys to move'
let running = false;
let hitStr = 'You were hit. Press ENTER to restart!';
let instruc
let para;
let parent = document.getElementById('score')

function preload() {
    game.preload()
}

function setup() {    
    createCanvas (800,600);
    frameRate(30);    
    game.setup();    
}

function draw() {    
    if(running) {        
        game.draw();    
    } else {        
        textFont('Rampart One');
        textSize(40);
        fill(255, 255, 255);
        text(str, 250, 300);
        text(instruction,200,350)       
    }
    
    if (game.hit === true) {
        instruct = createP(hitStr);        
        instruct.addClass('hit')
    } 
    
    parent.innerText = game.score
     
}

function keyPressed() {
    if (!running && keyCode === 13) {
        running = true;
        loop();            
    }

    if (game.hit === true && keyCode === 13) {
        window.location.reload();
        game.hit = false;        
    }
}