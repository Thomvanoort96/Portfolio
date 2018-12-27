var fishcontroller;
var playerfishcontroller;
function startGame() {
    fishcontroller = new Fishcontroller();
    playerfishcontroller = new Playerfishcontroller();
    $('.start-screen').remove();
}