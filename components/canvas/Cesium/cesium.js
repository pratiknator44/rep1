
function ClockCanvas(id, width, lineWidth)
{
    this.clockCanvas = document.getElementById("clockCanvas");

    //************* centering the canvas
    this.clockCanvas.style.marginTop = -width/2+"px";
    this.clockCanvas.style.marginLeft = -width/2+"px";
    //********************************************

    let c = this.clockCanvas.getContext('2d');
    let hRad = width/2-8, mRad = width/2-22, sRad=width/2-37;
    let startAngle = -Math.PI*0.5;
    let setAngleConst1 = Math.PI/30;       //Math.PI*2/60
    let setAngleConst2 = Math.PI/2;
    this.clockCanvas.width = width;
    this.clockCanvas.height = width;

    c.font = "15px arial";
    c.fillStyle = "black"; //default
    c.lineWidth = lineWidth;
    c.textAlign = "center";
    c.textBaseline="middle"; 

    this.updateClock = function()
    {
    
    this.date = new Date();
    c.clearRect(0, 0, width,width);    
    c.fillText((this.date.getHours()<10?"0"+this.date.getHours():this.date.getHours())+":"+((this.date.getMinutes()<10)?"0"+this.date.getMinutes():this.date.getMinutes())+":"+((this.date.getSeconds()<10)?"0"+this.date.getSeconds():this.date.getSeconds()), width/2,width/2);  


    // hours
    // set different color if hours > 12
    if(this.date.getHours()>12) {
        c.beginPath(); 
        c.strokeStyle = "yellow";
        c.arc(width/2, width/2, hRad, startAngle, Math.PI*2 ,false );
        c.stroke();
    }
    c.beginPath();
    c.strokeStyle = "crimson";
    c.arc(width/2, width/2, hRad, startAngle, (Math.PI/6)*(this.date.getHours() < 12 ? this.date.getHours() : this.date.getHours()-12)-setAngleConst2,false );
    c.stroke();

    c.beginPath();
    c.strokeStyle = "#06F";
    c.arc(width/2, width/2, mRad, startAngle, setAngleConst1*this.date.getMinutes()-setAngleConst2,false);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "green";
    c.arc(width/2, width/2, sRad, startAngle, setAngleConst1*this.date.getSeconds()-setAngleConst2,false);
    c.stroke();

    //console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    }

    this.updateClock();

    
}