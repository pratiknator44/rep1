var noOfCircles = 10;
var menuToggle = false;
$(document).ready(function()
{
    menuToggle = false;
    animateInnerLoaderBar();
});

$("html").click(function(e) 
{
   // $("#optionsTable").hide();
});
function toggleMenu()
{
    if(menuToggle==true)
    {
        $("#optionsTable").hide();
        menuToggle = false;
        //$(".stdButtonMob").css("background-color","black");
        return;
    }
    $("#optionsTable").slideDown();
        menuToggle = true;
        //$(".stdButtonMob").css("background-color","white");
}

function animateInnerLoaderBar()
{
    $(".innerLoaderBar").animate({width:"75%"},3000);
}


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
    var side = Math.floor(Math.random()*100+50);
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



function dimInfoDiv()
{
    $(".infoDiv").css("opacity","0.5");
}

function unDimLight()
{
    $(".infoDiv").css("opacity","1");
}


function undimAboutDetails()
{
    $("#aboutDetails").css("opacity","1");
    $("#skills, #workEx").css("opacity","0.5");
}

function undimSkills()
{
    $("#skills").css("opacity","1");
    $("#aboutDetails, #workEx").css("opacity","0.5");

}

function undimWorkEx()
{
    $("#workEx").css("opacity","1");
    $("#aboutDetails, #skills").css("opacity","0.5");
}


/*  function setProfilePicPosition()
{
    var tdWidth = 0.3333* 0.8* $(window).width()-80;
    var position = $("#profilePic").css("margin-left", (tdWidth/2)+"px");
    console.log((tdWidth/2)+"px");
}

function setNameLabelPosition()
{
    var tdWidth = 0.3333* 0.8* $(window).width()-$("#nameLabel").width();
    var position = $("#nameLabel").css("margin-left", (tdWidth/2)+"px");
}


function setsubtitleLabelPosition()
{
    var tdWidth = 0.3333* 0.8* $(window).width()-$("#subtitleLabel").width();
    var position = $("#subtitleLabel").css("margin-left", (tdWidth/2)+"px");
}

function setSocialMediaIconPosition()
{
    var tdWidth = 0.3333* 0.8* $(window).width()-$(".socailMediaIconContainer").width();
    var position = $(".socailMediaIconContainer").css("margin-left", (tdWidth/2)+"px");
}*/