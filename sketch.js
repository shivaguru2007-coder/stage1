 // start Game
var engine, world;
var back,backImg;
var player,player_Img;
var gameState = 1;
var enemy1, enemy_img;
var enemy2, enemy3, enemy4 ,enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11;
var fixRect; 
var movingRect1, movingRect2, movingRect3, movingRect4, movingRect5, movingRect6, movingRect7, movingRect8, movingRect9, movingRect10, movingRect;
var sRect1, sRect3;
var bullet, bulletImg,bulletv;
var stone1,stone2,stone3;
var stone1v,stone2v,stone3v;
var score =0; 
var gameState = 0;
var form;
var bgImg;

function preload(){
    stone1 =loadImage("images/stone1.png");

    stone3 =loadImage("images/stone3.png");
    bgImg =loadImage("images/background.png")
    bulletImg=loadImage("images/bullet.png");
    backImg=loadImage("images/desert_map.png");

    player_Img=loadAnimation("images/player1.png","images/player1.png","images/player2.png","images/player2.png");
    enemy_img=loadAnimation("images/enemy1.png","images/enemy1.png","images/enemy2.png","images/enemy2.png") ;
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    form  = new Form();
    //Form=new form();
    back=createSprite(displayWidth/2,displayHeight/2);
    back.addImage("back",backImg);


    player=createSprite(400,displayHeight-300,50,50);
    player.addAnimation("Img",player_Img);
    player.scale = 0.4;


    fixRect = createSprite(0,0,80,50); 
 
    movingRect2 = createSprite(0,0,50,120);
    movingRect3 = createSprite(0,0,50,120);
    movingRect4 = createSprite(0,0,50,120); 
    movingRect5 = createSprite(0,0,50,120);
    movingRect6 = createSprite(0,0,50,120);
 
    movingRect2.visible =false;
    movingRect3.visible =false;
    movingRect4.visible =false;
    movingRect5.visible =false;
    movingRect6.visible =false;
 
    fixRect.visible =false;
    sRect1 = createSprite(-100,-100,40,40);

    sRect3 = createSprite(-100,-100,40,40);

}
function draw(){

    console.log(gameState);
   if(gameState === 0){

     form.display(); 


  }
  else if (gameState === 1){

    spawnEnemies2();
    spawnEnemies3();
    spawnEnemies4();
    spawnEnemies5();
    spawnEnemies6();
;

    back.velocityY=4;
    if(back.y>displayHeight/(1/2)){
    back.y=displayHeight/2;
    }


    player.x=mouseX;


    fixRect.x = player.x;
    fixRect.y = player.y;

  if( movingRect2.x - fixRect.x < movingRect2.width/2 + fixRect.width/2 && 
        fixRect.x - movingRect2.x < fixRect.width/2 + movingRect2.width/2 && 
        movingRect2.y - fixRect.y < fixRect.height/2 +movingRect2.height/2 &&   
        fixRect.y - movingRect2.y < fixRect.height/2 +movingRect2.height/2  ){
        
        fixRect.shapeColor= "red";
       
        enemy2.destroy();
        score = score + 1;

    }    if( movingRect3.x - fixRect.x < movingRect3.width/2 + fixRect.width/2 && 
        fixRect.x - movingRect3.x < fixRect.width/2 + movingRect3.width/2 && 
        movingRect3.y - fixRect.y < fixRect.height/2 +movingRect3.height/2 &&   
        fixRect.y - movingRect3.y < fixRect.height/2 +movingRect3.height/2  ){
        
        fixRect.shapeColor= "red";
       
        enemy3.destroy();
        score = score + 1;

    }    if( movingRect4.x - fixRect.x < movingRect4.width/2 + fixRect.width/2 && 
        fixRect.x - movingRect4.x < fixRect.width/2 + movingRect4.width/2 && 
        movingRect4.y - fixRect.y < fixRect.height/2 +movingRect4.height/2 &&   
        fixRect.y - movingRect4.y < fixRect.height/2 +movingRect4.height/2  ){
        
        fixRect.shapeColor= "red";
       
        enemy4.destroy();
        score = score + 1;

    }
    if( movingRect5.x - fixRect.x < movingRect5.width/2 + fixRect.width/2 && 
        fixRect.x - movingRect5.x < fixRect.width/2 + movingRect5.width/2 && 
        movingRect5.y - fixRect.y < fixRect.height/2 +movingRect5.height/2 &&   
        fixRect.y - movingRect5.y < fixRect.height/2 +movingRect5.height/2  ){
        
        fixRect.shapeColor= "red";
       
        enemy5.destroy();
        score = score + 1;

    }
    if( movingRect6.x - fixRect.x < movingRect6.width/2 + fixRect.width/2 && 
        fixRect.x - movingRect6.x < fixRect.width/2 + movingRect6.width/2 && 
        movingRect6.y - fixRect.y < fixRect.height/2 +movingRect6.height/2 &&   
        fixRect.y - movingRect6.y < fixRect.height/2 +movingRect6.height/2  ){
        
        fixRect.shapeColor= "red";
       
        enemy6.destroy();
        score = score + 1;

    }


    if(sRect1.x - fixRect.x < sRect1.width/2 + fixRect.width/2 && 
        fixRect.x - sRect1.x < fixRect.width/2 + sRect1.width/2 && 
        sRect1.y - fixRect.y < fixRect.height/2 +sRect1.height/2 &&   
        fixRect.y - sRect1.y < fixRect.height/2 +sRect1.height/2){
        score  =score -2;

        sRect1.x = -200;

        }

            if(sRect3.x - fixRect.x < sRect3.width/2 + fixRect.width/2 && 
                fixRect.x - sRect3.x < fixRect.width/2 + sRect3.width/2 && 
                sRect3.y - fixRect.y < fixRect.height/2 +sRect3.height/2 &&   
                fixRect.y - sRect3.y < fixRect.height/2 +sRect3.height/2){
                score  =score -2;

                sRect3.x = -200;


        
                }
   Stone()
   drawSprites();
   textSize(20);
   fill("black");
   stroke("black")
   text("Score = " + score,50,50); 

    }else if(gameState ===2){
        fill("red");
        textSize(40);
        textFont("Plantin");
        text("Oh no, Game Over",displayWidth/2- 200, displayHeight/2 - 200);
    }
    if(score <= -1){
        gameState=2;
    }

  }
   function Stone(){
        if(frameCount%350 == 0){
         var i =round(random(0,3));
         console.log(i)
         if (i ===1){
             stone1v= createSprite(random(0,displayWidth),0,10,10);
             stone1v.addImage(stone1)
             stone1v.lifetime= 300;
             stone1v.scale = 0.4;
             stone1v.velocityY =4;
             sRect1.x = stone1v.x; 
             sRect1.y = stone1v.y;
             sRect1.velocityY=4;
         }else {
             stone3v= createSprite(random(0,displayWidth),0,30,30);
             stone3v.addImage(stone3)
             stone3v.lifetime= 300;
             stone3v.scale = 0.3;
             stone3v.velocityY =4;
             sRect3.x = stone3v.x; 
             sRect3.y = stone3v.y;
             sRect3.velocityY=4;
         }
     }
     }

    function spawnEnemies2(){
        if(frameCount %200 === 0){
        var i =round(random(0,displayWidth));
    
        enemy2 = createSprite(i,0,100,100);
        enemy2.addAnimation("img", enemy_img);
        enemy2.scale=0.2;
        enemy2.velocityY=5;
        enemy2.lifetime=200;

        //Creating moving rectangle to destroy enemy2.
    
        movingRect2.x=enemy2.x;
        movingRect2.y=enemy2.y;
        movingRect2.velocityY=5;
 
        }
    }
    function spawnEnemies3(){
        if(frameCount %230 === 0){
        var i =round(random(0,displayWidth));
    
        enemy3 = createSprite(i,0,100,100);
        enemy3.addAnimation("img", enemy_img);
        enemy3.scale=0.2;
        enemy3.velocityY=5;
        enemy3.lifetime=200;

        //Creating moving rectangle to destroy enemy3.
    
        movingRect3.x=enemy3.x;
        movingRect3.y=enemy3.y;
        movingRect3.velocityY=5;
 
        }
    }
    function spawnEnemies4(){
        if(frameCount %260 === 0){
        var i =round(random(0,displayWidth));
    
        enemy4 = createSprite(i,0,100,100);
        enemy4.addAnimation("img", enemy_img);
        enemy4.scale=0.2;
        enemy4.velocityY=5;
        enemy4.lifetime=200;

        //Creating moving rectangle to destroy enemy4.
    
        movingRect4.x=enemy4.x;
        movingRect4.y=enemy4.y;
        movingRect4.velocityY=5;
 
        }
    }
    function spawnEnemies5(){
        if(frameCount %290 === 0){
        var i =round(random(0,displayWidth));
    
        enemy5 = createSprite(i,0,100,100);
        enemy5.addAnimation("img", enemy_img);
        enemy5.scale=0.2;
        enemy5.velocityY=5;
        enemy5.lifetime=200;

        //Creating moving rectangle to destroy enemy5.
    
        movingRect5.x=enemy5.x;
        movingRect5.y=enemy5.y;
        movingRect5.velocityY=5;
 
        }
    }     
    function spawnEnemies6(){
        if(frameCount %3200 === 0){
        var i =round(random(0,displayWidth));
    
        enemy6 = createSprite(i,0,100,100);
        enemy6.addAnimation("img", enemy_img);
        enemy6.scale=0.2;
        enemy6.velocityY=5;
        enemy6.lifetime=200;

        //Creating moving rectangle to destroy enemy6.
    
        movingRect6.x=enemy6.x;
        movingRect6.y=enemy6.y;
        movingRect6.velocityY=5;
 
        }
    }
