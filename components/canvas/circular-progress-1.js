function init() {

    c1 = document.getElementById("mycanvas");
    ctx1 = initCanvas(c1, "green");

    gradient1 = ctx1.createLinearGradient(0, 0, 170, 0);
gradient1.addColorStop("0.14", "violet");
gradient1.addColorStop("0.28", "indigo");
gradient1.addColorStop("0.42", "blue");
gradient1.addColorStop("0.56", "green");
gradient1.addColorStop("0.70", "yellow");
gradient1.addColorStop("0.84", "orange");
gradient1.addColorStop("0.98", "crimson");
ctx1.shadowColor = gradient1;
    ctx1.stroke();
    c2 = document.getElementById("mycanvas2");
    ctx2 = initCanvas(c2, "red");
    ctx2.stroke();
    c3 = document.getElementById("mycanvas3");
    ctx3 = initCanvas(c3, "blue");
    ctx3.stroke();
    t1 = -1;

    interval1 = setInterval(animate1, 20);
}

function initCanvas(canvasOb, color) {
    var ctx = canvasOb.getContext("2d");
    ctx.lineWidth = 15;
    ctx.strokeStyle= color;
    ctx.font = "20px Apple";
    ctx.beginPath();
    ctx.fillText("0", 150, 100);
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.shadowBlur = 10;
    //ctx.shadowColor = gradient1;
    ctx.arc(150, 100, 90, 0, 2 * Math.PI);
    return ctx;

}

function animate1() {
    ++t1;
    if(t1>87) { clearInterval(interval1); return;}
    ctx1.clearRect(0, 0, 300, 300);
    ctx1.beginPath();
    ctx1.fillText(t1+"%", 150, 100);
    ctx1.strokeStyle = gradient1;
    ctx1.arc(150, 100, 90, 0, 2 * Math.PI*t1/100);
    ctx1.stroke();
}