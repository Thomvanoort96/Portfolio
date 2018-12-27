class PlayerFish extends Fish{
    constructor(size, x, y, speed, color,) {
        super(size,x,y,speed,color,0);
        this.xDirection = 0;
        this.yDirection = 0;
        this.svg.addClass('character');
    }

    setXDirection(xDirection){
        this.xDirection = xDirection;
    }

    setYDirection(yDirection){
        this.yDirection = yDirection;
    }

    collideOrDie() {
        var self = this;
        fishcontroller.fishes.forEach(function(fishy){
            if(self.doesCollideWith(fishy) || fishy.doesCollideWith(self)){
                if (fishy.size > self.size) {
                    document.location.reload(true);
                } else {
                    self.size += fishy.size * 0.1;
                    self.svg.css('width', self.size * 2).css('height', self.size);
                    console.log(self.size);
                    fishy.destroy();
                }
            }
        });
    }

    move() {
        this.collideOrDie();
        if ((this.x + this.speed * this.xDirection) > 0 && (this.x + this.speed * this.xDirection) + this.size * 2 < screen.width) {
            this.x += this.speed * this.xDirection;
        }
        if ((this.y + this.speed * this.yDirection)> 0 && (this.y + this.speed * this.yDirection) + this.size  < screen.height) {
            this.y += this.speed * this.yDirection;
        }
        this.svg.css('left', this.x).css('top', this.y);
        if (this.xDirection > 0){
            this.svg.addClass("rightFish");
        } else if (this.xDirection < 0){
            this.svg.removeClass("rightFish");
        }
    }
}