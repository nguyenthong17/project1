class Obstacle {
    constructor(image, speed, type, obswidth, obsheight) {
        this.image = image;
        this.speed = speed;
        this.type = type;
        this.width = obswidth;
        this.height = obsheight;
        if (this.type === 'helicopter') {
            this.x = Math.floor((width -this.width) * Math.random());
            this.y = height;
        }
        if (this.type === 'airplane') {
            this.x = width;
            this.y = Math.floor((height - this.height) * Math.random());
        }
    }

    draw() {
        if (this.type === 'airplane') {
            this.x -= this.speed;
        }
        if (this.type === 'helicopter') {
            this.x -= (this.speed * 2.5);
            this.y -= (this.speed * 1.5);
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(characterInfo) {
        let charCenterX = characterInfo.charx  + characterInfo.width/2;
        let charCenterY = characterInfo.chary + characterInfo.height/2;

        let obsCenterX = this.x + this.width/2;
        let obsCenterY = this.y + this.height/2;
        //console.log(obsCenterY)
        if ((dist(obsCenterX,obsCenterY, charCenterX, charCenterY) > 40 && this.type === 'helicopter') || 
        (dist(obsCenterX,obsCenterY, charCenterX, charCenterY)) > 60 && this.type === 'airplane') {
            return false;
        } else {            
            return true;
        }

    }
    
}