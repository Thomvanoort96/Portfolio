class Fishcontroller {
    constructor() {
        setInterval(this.spawnFish.bind(this), 500);
        this.fishes = [];
    }
    spawnFish() {
        var size = Math.random() * 200 + 10;
        var x = Math.floor(Math.random() + 0.5) * screen.width;
        var y = Math.random() * (screen.height - size);
        var speed = Math.random() * 80 + 20;
        var direction = -1;
        if (x < 1) {
            direction = 1;
            x = - size * 2;
        }
        this.fishes[this.fishes.length] = new Fish(size, x, y, speed, '#000', direction,200);
    }

    removeFish(targetFish){
        var self = this;
        this.fishes.forEach(function(fish,key){
            if (targetFish == fish){
                self.fishes.splice(key,1);
                return;
            }
        })
    }
}