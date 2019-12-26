$(document).ready(function()
{
    var container = $(".container");
    var bird = $(".bird");          // player
    var block = $(".block");
    var city = $(".city");
    var cityPosition = parseInt(city.css('right'));
    var city2 = $(".city2");
    var blockTop = $("#blockTop");
    var blockBottom = $("#blockBottom");
    var blockHeight = parseInt(block.css('height'));
    var blockIntialPosition = $(".block").css('right');
    var score = $(".scoreValue");
    var velocity = $(".velocityValue"); 
    var containerWidth = parseInt(container.width());
    var containerHeight = parseInt(container.height());
    var speed = 10;
    var scoreValue = 0;
    var moveUpFlag = false;
    var gravity = 0;
    var gravityUp = 0;
    var music = document.getElementById("myAudio"); 
    var gameStart;
    $("#gameStart").slideDown();

    $("#startGame").click(function()
    {
        music.play();
        music.loop = true;
        $("#gameStart").slideUp();
       gameStart = setInterval(isoButaneGameStart,40);

    });


    function isoButaneGameStart()
    {
        if(collision(bird,blockTop) || collision(bird,blockBottom) || parseInt(bird.css('top'))<=0 || parseInt(bird.css('top')) > containerHeight )
        {
            gameOver();
        }
        // moving blocks R - L
        var blockCurrentPosition = parseInt(block.css('right'));
        blockCurrentPosition = blockCurrentPosition+speed;
        //console.log(blockTop.css('left'));
        if(parseInt(blockTop.css('left'))<400)
        {
            console.log("back");
            blockTop.css('box-shadow', '0px 25px 30px yellow');
        }

        city.css('right',parseInt(city.css('right'))+1);

        if(cityPosition<0);
        //city.css('right','0px');

        if(blockCurrentPosition > containerWidth)
        {
            var changeInHeight = parseInt(Math.random() * 100);
            blockTop.css('height',(blockHeight+changeInHeight)*1.5);
            blockBottom.css('height', (blockIntialPosition-changeInHeight)*1.2);
            blockCurrentPosition = blockIntialPosition;
            blockTop.css('box-shadow', '0px 0px 0px yellow');
            // updating scoreboard
            speed = speed+0.5;
            velocity.html(speed);
            scoreValue++;
            score.html(scoreValue);   
        }
        block.css('right',blockCurrentPosition);
        //console.log(blockCurrentPosition);
        if(moveUpFlag == false)
        moveDown();
    }

    $(document).on('keydown',function(e)
    {
        //alert(e.keyCode);
        if(e.keyCode==32 && moveUpFlag==false)
        {
            moveUpFlag = setInterval(moveUp,50);
        }
    });

    $(document).on('keyup',function(e)
    {
        //alert(e.keyCode);
        if(e.keyCode==32)
        {
            clearInterval(moveUpFlag);
            moveUpFlag=false;
        }
    });


    function moveDown()
    {
        gravityUp=0;
        bird.css('top',parseInt(bird.css('top'))+gravity);
        gravity=gravity+3;
    } 

    function moveUp()
    {
        gravity=0;
        bird.css('top', parseInt(bird.css('top'))-gravityUp);
        gravityUp=gravityUp+3;
        //console.log('pressed up');
    }

    var x=0;
    function gameOver()
    {   
        x=0;
        music.pause();
        $("#gameOver").slideDown();
        $(".scoreDisplay").html(scoreValue);
        clearInterval(gameStart);
        
    }

    
$(".restart").click(function()
{
    music.play();
    console.log('clicked');
    scoreValue = 0;
    score.html(0);
    velocity.html(1);
    speed=10;
    bird.css('top','300'); bird.css('left','400');
    gravity=0;
    block.css('right','-50px');
    $("#gameOver").slideUp();
    gameStart = setInterval(isoButaneGameStart,40);
});

    function collision($div1, $div2)
    {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1+h1;
        var r1 = x1+w1;
        
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2+h2;
        var r2 = x2+w2;

        return (b1<y2 || y1>b2 || r1<r2 || x1>r2)?false:true;
    }



});
