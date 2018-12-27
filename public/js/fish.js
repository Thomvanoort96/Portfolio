class Fish {
    constructor(size, x, y, speed, color, direction,intervalSpeed) {
        this.svg =  $('<img src="/images/img/fish.svg" class="fish">');
        this.svg.css('left', x).css('top', y).css('width', size * 2).css('height', size).css('fill', color);
        this.svg.find('.st0').css('fill',color);
        this.speed = speed;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.size = size;
        $(document.body).append(this.svg);
        this.interval = setInterval(this.move.bind(this), intervalSpeed);
    }
    destroy() {
        this.svg.remove();
        clearInterval(this.interval);
        fishcontroller.removeFish(this);
    }
    move() {
        if (this.x > screen.width || this.x + this.size * 2 <  0) {
            return this.destroy();
        }
        this.x += this.speed * this.direction;
        this.svg.css('left', this.x).css('top', this.y);
        if (this.direction > 0){
           this.svg.addClass("rightFish");
        } else if (this.direction < 0){
            this.svg.removeClass("rightFish");
        }
    }
    doesCollideWith(enemy) {
        return(
            this.isPositionWithin(enemy.x, enemy.y) ||
            this.isPositionWithin(enemy.x + enemy.size * 2, enemy.y) ||
            this.isPositionWithin(enemy.x, enemy.y + enemy.size) ||
            this.isPositionWithin(enemy.x + enemy.size * 2, enemy.y + enemy.size)
        )
    }
    isPositionWithin(x, y) {
        return (x > this.x && x < this.x + this.size * 2 && y > this.y && y < this.y + this.size);
    }
}