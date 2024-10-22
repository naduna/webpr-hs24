
const minX =  0;
const maxX =  6;
const minY = -1;
const maxY =  1;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas       = document.getElementById('canvas');

    // how to display? = very inefficiently, as it gets evaluated 100 times each time
    // display(canvas, x=> eval(userFunction.value));
    // userFunction.onchange = (y => display(canvas, x=> eval(userFunction.value)));
    
    const f = _ => Function("x", "return " + userFunction.value);
    display(canvas, f());

    // onchange: on enter or on blur/leave
    userFunction.onchange =  _ => display(canvas, f()); // erzeuge eine neue funktion, die den wert neu ausliest
    
    // TODO: how to manage console.log(1) as input but it doesn't appear 100 times
}

function display(canvas, f) {
    // clear
    const context     = canvas.getContext("2d");
    context.fillStyle = "papayawhip";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the function plot
    const normx = normalizeX(canvas.width);
    const normy = normalizeY(canvas.height);

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(normx(minX), normy(f(minX)));

    const stride = (maxX - minX) / 100; // 100 Stützstellen
    for (let x = minX; x <= maxX; x += stride) {
        context.lineTo(normx(x), normy(f(x)));
        context.stroke();
    }
}

const normalizeY = height => y => {
    const scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
    const scaleFactor = width / (maxX - minX);
    return ( x - minX) * scaleFactor;
};
