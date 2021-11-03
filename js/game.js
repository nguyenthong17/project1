class Game {
    setup () {
        this.background = new Background()
        this.character = new Character()
        this.obstacles = [];
    }
    constructor () {
        this.backgroundImages;
        this.characterImage;
        this.obstacleImages;
        this.hit = false; 
        this.score = 0;
    }
    preload() {
        this.backgroundImages =[
            {src: loadImage('images/background/background3.png'), x: 0, speed: 0},
            {src: loadImage('images/background/background2.png'), x: 0, speed: 2},
            {src: loadImage('images/background/background1.png'), x: 0, speed: 4}
        ]
        this.characterImage = loadImage('images/character/character.gif')
        this.obstacleImages =[
            {image: loadImage('images/obstacle/airplane.png'), 
            speed: 6, 
            type: 'airplane', 
            width: 150, 
            height: 75},
            {image: loadImage('images/obstacle/helicopter.png'), 
            speed: 3, 
            type: 'helicopter', 
            width: 100, 
            height: 50},
            {image: loadImage('images/obstacle/meteor.gif'),
            speed: 12,
            type: 'meteor',
            width:50,
            height: 50,
            }
        ]
    }
    draw(){
        clear();
        this.background.draw();
        this.character.draw();
        
         
        let random = Math.floor(100 * Math.random())
        let result = random % 3;
        if (frameCount % 8 === 0) {            
                this.obstacles.push(new Obstacle(
                    this.obstacleImages[result].image,
                    this.obstacleImages[result].speed,
                    this.obstacleImages[result].type,
                    this.obstacleImages[result].width,
                    this.obstacleImages[result].height
                    ))      
        }
        
        this.obstacles.forEach( obstacle => {
            obstacle.draw()            
        })
        
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.x < 0 - obstacle.width || 
                obstacle.y < 0 - obstacle.height){
                return false;
            } else {
                return true;
            }
        })

        this.obstacles.forEach(obstacle => {
            if (obstacle.collision(this.character)) {
                noLoop();
                this.hit = true;                       
            }
        })
        
        if (frameCount % 30 === 0) {
            this.score ++            
        }
        
    }

    
}