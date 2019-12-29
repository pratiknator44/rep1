function init() {
    c = document.getElementById("mycanvas");
    ctx = c.getContext("2d");
    ctx.lineWidth = 10;
    ctx.strokeStyle= "yellow";
    ctx.font = "20px Arial";
    ctx.beginPath();
    ctx.fillText("0", 95, 100);
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);
    ctx.stroke();
}

function startWithTime() {
    time = document.getElementsByClassName("form-input")[0].value;
    originalTime = time;
    interval = setInterval( repaint, 1000);
}

function repaint() {

    --time;
    if(time<=-1) {
        clearInterval(interval);
        return;
    }

    ctx.clearRect(0, 0, 200, 200);
    ctx.beginPath();
    ctx.fillText(time, 95, 100);
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "yellow";
    ctx.arc(100, 100, 90, 0, 2 * Math.PI*time/originalTime);
    ctx.stroke();
}