class Obstacle {
    constructor(image, speed, type, obswidth, obsheight) {
        this.image = image;
        this.speed = speed;
        this.type = type;
        this.width = obswidth;
        this.height = obsheight;
        if (this.type === 'helicopter') {
            this.x =width/2 + Math.floor((width/2 -this.width) * Math.random());
            this.y = height;
        }
        if (this.type === 'airplane') {
            this.x = width;
            this.y = Math.floor((height - this.height) * Math.random());
        }
        if (this.type === 'meteor') {
            this.x =width/3 + Math.floor((width/2 -this.width) * Math.random());
            this.y = 0;
        }
    }

    draw() {
        if (this.type === 'airplane') {
            this.x -= this.speed;
        }
        if (this.type === 'helicopter') {
            this.x -= (this.speed * 3);
            this.y -= (this.speed * 1);
        }
        if (this.type === 'meteor'){
            this.x -= (this.speed);
            this.y += (this.speed * 0.5)
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(characterInfo) {
        let charCenterX = characterInfo.charx  + characterInfo.width/2;
        let charCenterY = characterInfo.chary + characterInfo.height/2;

        let obsCenterX = this.x + this.width/2;
        let obsCenterY = this.y + this.height/2;        
        
        if ((dist(obsCenterX,obsCenterY, charCenterX, charCenterY) > 40 && this.type === 'helicopter') || 
        (dist(obsCenterX,obsCenterY, charCenterX, charCenterY)) > 50 && this.type === 'airplane' ||
        (dist(obsCenterX,obsCenterY, charCenterX, charCenterY)) > 40 && this.type === 'meteor') {
            return false;
        } else {            
            return true;
        }        
    }
    
}