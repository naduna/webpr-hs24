
const radius = 10;
const ball = {x:10, y:1, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        if (Math.abs(ball.dx) < 0.1 && Math.abs(ball.dy) < 0.1) return;
        if (Math.abs(ball.dx) > 50 && Math.abs(ball.dy) > 50) return;
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old = ball;

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if (old.x === 400 || old.y === 400){
        ball.dx = -old.dx;
        ball.dy = -old.dy;
    }
    // if (old.x === 400){
    //     ball.dx = -old.dx;
    // }
    // if (old.y === 400){
    //     ball.dy = -old.dy;
    // }

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    ball.x = old.x + old.dx;
    ball.y = old.y + old.dy;

    ball.dx = old.dx + 1;
    ball.dy = old.dy + 1;
    
    console.log("is moving")
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


