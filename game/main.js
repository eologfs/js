var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var player = {
    x: 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



class Cactus {
    constructor(){
        this.x=500;
        this.y=200;
        this.width=50;
        this.height=50;
    }
    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var timer=0;
var cactuses=[];
var jumptimper = 0;
var animation;

function gameLoop() {
    //requestAnimationFrame(gameLoop);
    animation = requestAnimationFrame(gameLoop);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(timer % 144 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
    }

    cactuses.forEach((a, i, o)=>{
        if (a.x < 0) {
            o.splice(i, 1);
        }
        a.x--;
        Collision(player, a);
        a.draw();
    })
    if (jump==true){
        player.y -=3;
        jumptimper++;
    }
    if(jump==false ) {
        if(player.y<200){
        player.y++;
        }
    }
    if(jumptimper > 50) {
        jump = false;
        jumptimper=0;
    }
    player.draw();
}

gameLoop();

function Collision(player, cactus) {
    var xdiff=cactus.x - (player.x + player.width);
    var ydiff=cactus.y - (player.y + player.height);
    if (xdiff < 0 && ydiff < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}



var jump = false;
document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
        jump=true;
    }
});