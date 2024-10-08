
const radius = 10;
const ball = {x: 10, y:1, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

const outOfBoundsMax = 400 - radius;
const outOfBoundsMin = radius;

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        if (Math.abs(ball.dx) < 0.1 && Math.abs(ball.dy) < 0.1) return;
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old = {...ball};

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    const hitBottom = old.y >= outOfBoundsMax && ball.dy > 0;
    const hitTop = old.y <= outOfBoundsMin && ball.dy < 0;
    const hitRight = old.x >= outOfBoundsMax && ball.dx > 0;
    const hitLeft = old.x <= outOfBoundsMin && ball.dx < 0;
    
    if (hitBottom || hitTop){
        ball.dy -= 5;
        ball.dy = -ball.dy;
    }
    
    if (hitRight || hitLeft){
        ball.dx = -ball.dx;
        ball.dx *= 0.8;
    }

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    ball.x += ball.dx;
    ball.y += ball.dy;

    ball.dy += 1.5 ;      // constant acceleration

    ball.y = Math.min(outOfBoundsMax, ball.y);
    ball.x = Math.min(outOfBoundsMax, ball.x);
    ball.y = Math.max(outOfBoundsMin, ball.y);
    ball.x = Math.max(outOfBoundsMin, ball.x);
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


const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);
const id = x => x;
const x_ = Math.random();
const safeDiv = num => divisor =>
    divisor === 0
        ? Left  ("Cannot divide by 0")
        : Right (num / divisor);

const eShow = fn => either(fn)
    (id) // goes as param of Left/Right to f; error message
    (x => "Result is: " + x); // goes as param of Left/Right to g; success

console.log(eShow( safeDiv(1)(0)));
console.log(eShow( safeDiv(x_)(1)));
console.log(eShow( safeDiv(1)(0))  === "Cannot divide by 0" && eShow( safeDiv(x_)(1)) === "Result is: "+x_);