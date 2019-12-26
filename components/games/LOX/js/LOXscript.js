healthId = undefined;
fuelIncrease = 0;
healthIncrease = 0;
missileIncrease = 0;
$(document).ready(function()
{
    player = $(".player");
    var playerWidth = parseInt(player.width());
    playerX = 0;
    enemy =  $(".enemy");
    var moveLeftFlag = false;
    var moveRightFlag = false;
    var container = $(".container");
    var containerWidth = parseInt(container.width());
    var containerHeight = container.height();
    var crossheir = $(".crossheir");
    var playerPositionX = parseInt(player.css("left"));
    var crossheirX = $(".crossheir").css('left');
    var crossheirY = $(".crossheir").css('top');
    var rightLimit = containerWidth-playerWidth;
    missiles = $(".noOfMissiles");
    var bullet = $(".bullet");
    var bulletCounter = 0;
    var missileCounter = 0;
    var enemyCounter = 0;
    fuel = $(".fuel");
    health = $(".health");
    var enemyArray = new Array("brute","knight","guard","ambulance","guard","knight","guard");
    score = $(".score");
    // crossheir movement

    $("#gameStart").slideDown();

    $(document).mousemove(function(e)
    {
        crossheir.css("left",e.pageX);
        crossheir.css("top",e.pageY);    
    });

    $(document).on('keydown',function(e)
    {
        if(e.keyCode==65)
        {
            player.css("animation","bendLeft 0.5s forwards");
            if(playerPositionX>0)
              {
                moveLeft();
                player.css("animation","bendFromLeft 0.5s forwards, regularMovement 1s infinite alternate-reverse");
                moveLeftFlag = true;
              }
            

        }
        if(e.keyCode==68)
        {
            if(playerPositionX < rightLimit)
            {
                //console.log(playerPositionX+" "+rightLimit);
                player.css("animation","bendRight 0.5s forwards, regularMovement 1s infinite alternate-reverse");
                moveRight();
                moveRightFlag = true;
            }
        }
        playerPositionX = parseInt(player.css("left"));
       
    });

    function moveLeft()
    {
        player.css("left", parseInt(player.css("left"))-10 );
        moveLeftFlag = false
        player.css("animation","bendFromLeft 0.5s forwards, regularMovement 1s infinite alternate-reverse");
    }

    function moveRight()
    {
        player.css("left", parseInt(player.css("left"))+10 );
        moveRightFlag = false;
        player.css("animation","bendFromRight 0.5s forwards, regularMovement 1s infinite alternate-reverse");
    }

    container.on("contextmenu",function()
    {
        if(parseInt(missiles.html())>0)
        {
            missiles.html(parseInt(missiles.html()-1));
            fireMissile();
        }
        else
        missileCounter = 0;
        return false;
    }); 

    container.click(function()
    {
        fireBullet();
    });

    function fireBullet()
    {
        updateCrossheirPosition();
        playerX = parseInt(player.css('left'));
        var newId = "bullet"+bulletCounter;
        container.append("<div class='bullet' id='"+newId+"'></div>");
        $(".bullet").css("left",playerX+172);
        $("#"+newId).animate({top:crossheirY, left: crossheirX},1000,function()
        {   
            $("#"+newId).remove();
        });
        if(bulletCounter>15)
            bulletCounter=0;
        else
            bulletCounter++;
    }

    function fireMissile()
    {
        updateCrossheirPosition();
        playerX = parseInt(player.css('left'));
       // alert("added missile"+playerX);
        var newId = "missile"+missileCounter;
        container.append("<div class='missile' id='"+newId+"'></div>");
        $(".missile").css("left",playerX+172);
        $("#"+newId).animate({top:crossheirY, left: crossheirX},500,function()
        {   
            $("#"+newId).remove();
        });
        missileCounter++;
    }



    function updateCrossheirPosition()
    {
        crossheirX = $(".crossheir").css('left');
        crossheirY = $(".crossheir").css('top');
    }

    reduceFuel = function ()
    {
        if(parseFloat(fuel.html())>0)
        {
            var num = parseFloat(fuel.html())-0.7;           // change to 2.5
        fuel.html(parseFloat(num.toFixed(3)));
        fuel.css("width",fuel.html()+"%");
        }
        else
        gameOver();
    }


    enemySpawn = function ()
    {
       var enemyId = Math.floor(Math.random()*6);     //Math.random() * (max - min) + min;      array elements of enemy
       var screenX = Math.random()*(screen.width-400)+200;      // -200-200 for right edge inbounding the spawned enemies
       var newId = "enemy"+enemyCounter;
       container.append("<div class='enemy"+" "+enemyArray[enemyId]+"' id='"+newId+"' oncontextmenu=reduceHealth('"+newId+"',1,'"+enemyArray[enemyId]+"'); onClick=reduceHealth('"+newId+"',0,'"+enemyArray[enemyId]+"')><div class='enemyHealth' id='health"+newId+"'></div></div>");
        $("#"+newId).css("left",screenX);
        $("#"+newId).animate({top:"150%", height:"200px", width:"706px"},10000,function()
        {   
            $("#"+newId).remove();
        });
        if(enemyCounter>5)
            enemyCounter=0;
        else
            enemyCounter++;
    }
    enemySpawn();
 
    function gameOver()
    {
        console.log("game over");
        clearInterval(startGame);
        clearInterval(fuelReduce);
        clearInterval(generateEnemy);
        $(".scoreDisplay").html(score.html());   
        $("#gameOver").slideDown();
    }
});


    function enemyContact()
    {
        if(parseInt(enemy.css("bottom"))<=100 && parseInt(enemy.css("left"))>=parseInt(player.css("left"))) // && parseInt(enemy.css("left"))<=parseInt(player.css("left"))+353)
        {
            var currentHealth = parseInt(health.html());
            health.html(currentHealth-15);
            health.css("width",parseInt(health.html())+"%");
        }
    }



function reduceHealth(newEnemyId, weapon, enemy)
{
    var decrease = 0;
    console.log(newEnemyId);
    switch(enemy)
    {
        case "brute":  (weapon==0)?decrease=10:decrease=50;
                        fuelIncrease = 10; healthIncrease = 5; missileIncrease = 1; 
        break;
        case "guard": (weapon==0)?decrease=20:decrease=100;
                        fuelIncrease = 7; healthIncrease = 0; missileIncrease = 1;
        break;
        case "knight": (weapon==0)?decrease=15:decrease=70;
                        fuelIncrease = 5; healthIncrease = 0; missileIncrease = 0;
        break;
        case "ambulance": (weapon==0)?decrease=20:decrease=100;
                        fuelIncrease = 0; healthIncrease = 10;
        break;
    }
    $("#health"+newEnemyId).css("width",parseInt($("#health"+newEnemyId).width())-decrease);
    (parseInt($("#health"+newEnemyId).width())<10)?destroyEnemy(newEnemyId):"";
}

function destroyEnemy(enemyId)
{
    $("#"+enemyId).css("background-image","url('img/boom.png')");
    $("#"+enemyId).css('animation','');
    console.log(fuelIncrease+" "+healthIncrease);
    increaseFuel(fuelIncrease); fuelIncrease=0;
    increaseHealth(healthIncrease); healthIncrease=0;
    increaseMissile(missileIncrease);
    score.html(parseInt(score.html())+1);
}

function increaseFuel(fuelPlus)
{
    var currentFuel = parseInt(fuel.html());
    (currentFuel+fuelPlus>100)?fuel.html(100):fuel.html(currentFuel+fuelPlus);;
    fuel.css("width",parseInt(fuel.html())+"%");
}

function increaseHealth(healthPlus)
{
    var currentHealth = parseInt(health.html());
    health.html(currentHealth+healthPlus);
    (currentHealth+healthPlus>100)?health.html(100):health.html(currentHealth+healthPlus);
    health.css("width",parseInt(health.html())+"%");
    
}

function increaseMissile(missilePlus)
{
    var currentMissile = parseInt(missiles.html());
    missiles.html(currentMissile+missilePlus);
    
}

function startGameLOX()
{
    $("#gameStart, #gameOver").hide();
    fuelReduce = setInterval(reduceFuel,750);
    generateEnemy = setInterval(enemySpawn,3000);
    checkEnemyContact = setInterval(enemyContact,40);
    fuel.html(100);
    health.html(100);
    missiles.html(5);
}
