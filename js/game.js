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
            speed: 3, 
            type: 'airplane', 
            width: 150, 
            height: 75},
            {image: loadImage('images/obstacle/helicopter.png'), 
            speed: 1.5, 
            type: 'helicopter', 
            width: 100, 
            height: 50}
        ]
    }
    draw(){
        clear();
        this.background.draw();
        this.character.draw();
        let random = Math.floor(100 * Math.random())
        let result = random % 2;
        if (frameCount % 45 === 0) {            
                this.obstacles.push(new Obstacle(
                    this.obstacleImages[result].image,
                    this.obstacleImages[result].speed,
                    this.obstacleImages[result].type,
                    this.obstacleImages[result].width,
                    this.obstacleImages[result].height
                    )) 
                    // console.log(this.obstacleImages[result].type,
                    //             this.obstacleImages[result].x,
                    //             this.obstacleImages[result].y)           
        }
        
    }
}