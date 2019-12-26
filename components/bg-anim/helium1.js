var noOfCircles = 150;
var menuToggle = false;

var colors = ["violet","indigo","blue","green","yellow","orange","red"];//["red", "blue", "green", "yellow", "cyan", "crimson", "pink", "rose","limegreen"];

function backCircle(x, y, xspeed, yspeed, side,color)
{
    var div;
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.side = side;
    this.color = color;
    this.make = function()
                  {
                      div = document.createElement('div');
                      div.style.height = side;
                      div.style.width = side;
                      div.style.borderRadius = "50%";
                      div.style.backgroundColor = this.color;
                      div.style.position = "absolute";
                      div.style.opacity=0.8;
                      div.style.zIndex = 1;
                      div.style.left = this.x;
                      div.style.top = this.y;
                      document.body.appendChild(div);
                  }
    
    this.updatePosition = function()
                  {
                       div.style.left = div.offsetLeft+xspeed;
                       if(div.offsetLeft+side+1 >= window.innerWidth || div.offsetLeft-5 <=0)
                         xspeed = -xspeed;

                        div.style.top = div.offsetTop+yspeed;
                        if(div.offsetTop+side+5 >= window.innerHeight || div.offsetTop-5 <=0)     //+3 because scroll bar appears when ball touches the ground
                         yspeed = -yspeed;
                    
                    //console.log(div.offsetLeft+" "+xspeed+" "+window.innerWidth);
                      
                  }
    
    this.update = function()
                  {
                      setInterval(this.updatePosition,20);
                  }


}


function createCircle()
{
    var xspeed = Math.floor(Math.random()*3+2);
    var yspeed = Math.floor(Math.random()*3+2);
    var side = Math.floor(Math.random()*15);
    var x = Math.floor(Math.random()*innerWidth-side);
    if(x<0){x=side*2;} if(x>innerWidth){x=x-side*2;}
    var y = Math.floor(Math.random()*innerHeight-side);
    if(y<0){y=side*2;} if(y>innerHeight){y=y-side*2;}
    var colorIndex = Math.floor(Math.random()*7);       // 0-6 colors elements
console.log(xspeed+" "+yspeed);

var circle1 = new backCircle(x,y,xspeed,yspeed,side,colors[colorIndex]);
circle1.make();
circle1.update();

}

for(var x=0;x<noOfCircles;x++)
{
    createCircle();
}
