var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
let finishGame = false;

window.addEventListener('resize', function () {
    canvas.width = 600;
    canvas.height = 400;
});

class Counter {
    constructor() {
        this.timer = null;
        this.time = 0;
    }

    paintCounter() {
        var divTimer = document.getElementById("counter");
        divTimer.innerHTML = "Tiempo: " + (this.time / 1000).toFixed(2) + "s";

    }

    initCounter() {
        let initialTime = new Date()
        this.timer = setInterval(() => {
            var endTime = new Date();
            this.time = endTime - initialTime;
            this.paintCounter();

        }, 100);
    }

    endCounter() {
        clearInterval(this.timer);
    }
}

let counter = new Counter();

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    paint() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }

    update(code) {
        let newX = this.x;
        let newY = this.y;

        if (code === 38 && this.y >= 30) {
            newY -= 20;
        } else if (code === 40 && this.y <= 370) {
            newY += 20;
        } else if (code === 39 && this.x <= 570) {
            newX += 20;
        } else if (code === 37 && this.x >= 30) {
            newX -= 20;
        }

        const dentroRombo =
            ((newX + 20) >= 265 && (newX - 20) <= 340) &&
            ((newY + 20) >= 170 && (newY - 20) < 240);

        if (!dentroRombo) {
            this.x = newX;
            this.y = newY;
        }

        if (this.x >= 570 && this.y >= 370) {

            finishGame = true;
            return;
        }

    }
}

class Table {
    constructor() {
    }

    paint() {
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, 600, 400);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, 600, 400);


        //Rombo
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

}
let circle = new Circle(20, 20);

function anima() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    requestAnimationFrame(anima);

    var table = new Table();
    table.paint();
    circle.paint();
}

window.addEventListener("keyup", (e) => {
    if (counter.timer == null) {
        counter.initCounter();
    }
    if (!finishGame) {
        circle.update(e.keyCode)
    } 
    if (finishGame) {
        counter.endCounter();
    }

});

anima();


