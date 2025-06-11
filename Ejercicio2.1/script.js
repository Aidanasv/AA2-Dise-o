var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

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


document.addEventListener("DOMContentLoaded", function () {
    var circle = new Circle(20, 20);
    var table = new Table();
    table.paint();
    circle.paint();
})