class Character {
    constructor() {
        this.width =  50;
        this.height = 50;
        this.charx = 200;
        this.chary = 300;
        this.charVer = 0;
        this.charHor = 0;
        this.val = 10;
    }

    draw() {   
        

        if (this.chary >= height - this.height) {
            this.chary = height - this.height;
        }
        if (this.chary < 0) {
            this.chary = 0
        }
        if (this.charx >= width - this.width) {
            this.charx = width - this.width;
        }
        if (this.charx < 0) {
            this.charx = 0;
        }
        image(game.characterImage, this.charx, this.chary, this.width, this.height);
        //down
        if (keyIsDown(40)){
            this.down();
        }

        //up
        if (keyIsDown(38)) {
            this.up();
        }

        //left
        if (keyIsDown(37)) {
            this.left();
        }

        //right
        if (keyIsDown(39)){
            this.right();
        }

        
    }

    up() {
        this.charVer = -this.val;
        this.chary += this.charVer;
    }

    down() {
        this.charVer = this.val;
        this.chary += this.charVer;
    }

    left() {
        this.charHor = -this.val;
        this.charx += this.charHor
    }

    right() {
        this.charHor = this.val;
        this.charx += this.charHor;
    }
}