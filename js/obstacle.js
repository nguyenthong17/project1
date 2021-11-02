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
            this.x -= (this.speed * 3);
            this.y -= this.speed;
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }
    
}