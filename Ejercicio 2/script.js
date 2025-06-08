
var xCircle = 22;
var yCircle = 22;
var initialTime = null;
let id = null;
var finishGame = false;

function paintRect() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 400);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 600, 400);
}

function paintCircle(x, y) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000ff";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function paintRombo() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#212121";
    ctx.fillStyle = "#C2185B";

    const centroX = 300;
    const centroY = 200;
    const d = 30;

    ctx.beginPath();
    ctx.moveTo(centroX, centroY - d);
    ctx.lineTo(centroX + d, centroY);
    ctx.lineTo(centroX, centroY + d);
    ctx.lineTo(centroX - d, centroY);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function updateTable() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    paintRect();
    paintRombo();
    paintCircle(xCircle, yCircle);
}

updateTable();

//Mover ficha 
document.addEventListener('keydown', function (event) {
    if (finishGame) {
        return;
    }

    let newX = xCircle;
    let newY = yCircle;

    if (initialTime === null) {
        initialTime = new Date()
        id = setInterval(paintCount, 100);
    }

    if (event.key === "ArrowUp" && yCircle >= 30) {
        newY -= 10;
    } else if (event.key === "ArrowDown" && yCircle <= 380) {
        newY += 10;
    } else if (event.key === "ArrowRight" && xCircle <= 580) {
        newX += 10;
    } else if (event.key === "ArrowLeft" && xCircle >= 30) {
        newX -= 10;
    }

    const dentroRombo =
        ((newX + 10) >= 265 && (newX - 10) <= 340) &&
        ((newY + 10) >= 170 && (newY - 10) < 240);

    if (!dentroRombo) {
        xCircle = newX;
        yCircle = newY;
    }

    if (xCircle > 570 && yCircle > 380) {
        clearInterval(id);
        paintCount();
        finishGame = true;
        return;
    }

    updateTable();
});

function paintCount() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "15px Arial";

    var endTime = new Date();
    var finalTime = endTime - initialTime;

    updateTable();
    ctx.fillText("Tiempo: " + (finalTime / 1000).toFixed(2) + "s", 450, 450);
}
