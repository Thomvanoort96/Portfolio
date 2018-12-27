class Playerfishcontroller {
    constructor() {
        this.keys = {};
        this.keys.UP = 38;
        this.keys.LEFT = 37;
        this.keys.RIGHT = 39;
        this.keys.DOWN = 40;

        this.fish = new PlayerFish(25,screen.width * 0.5, screen.height * 0.5, 1, '#ff0000',50);

        document.body.onkeyup =
            document.body.onkeydown = this.handleKeyInput.bind(this);
        setInterval(this.detectCharacterMovement.bind(this),10)
    }

    handleKeyInput(e){
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        var kc = e.keyCode || e.which;
        this.keys[kc] = e.type == 'keydown';
    }

     detectCharacterMovement() {
        if ( this.keys[this.keys.LEFT] ) {
            this.fish.setXDirection(-1);
        } else if ( this.keys[this.keys.RIGHT] ) {
            this.fish.setXDirection(1);
        } else {
            this.fish.setXDirection(0);
        }
        if ( this.keys[this.keys.UP] ) {
            this.fish.setYDirection(-1);
        } else if ( this.keys[this.keys.DOWN]) {
            this.fish.setYDirection(1);
         } else {
            this.fish.setYDirection(0);
        }
    };

}