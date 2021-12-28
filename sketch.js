var bg;
var ast, astImg;
var play, playImg;
var next, nextImg, yes, yesImg;
var dia1, dia2, dia3, dia4, dia5, dia1Img, dia2Img, dia3Img, dia4Img, dia5Img;
var board, boardImg;
var task, taskImg;
var ground, groundImg;
var launch, launchImg;
var man, manImg;
var spaceImg, space,skyImg;
var takeoff, takeoffImg;
var gameState = WAIT;
var WAIT = 0;
var PLAY = 1;
var END = 2;



function preload(){
  spaceImg = loadImage("pics/Background.png");
  astImg = loadImage("pics/Astronaut.png");
  skyImg = loadImage("pics/Sky.png");
  groundImg = loadImage("pics/Ground.png");
  manImg = loadImage("pics/Man.png");
  takeoffImg = loadImage("pics/Takeoff.png");
  playImg = loadImage("pics/Button.png");
  nextImg = loadImage("pics/Next.png");
  yesImg = loadImage("pics/Next2.png");
  dia1Img = loadImage("pics/Dia1.png");
  dia2Img = loadImage("pics/Dia2.png");
  dia3Img = loadImage("pics/Dia3.png");
  dia4Img = loadImage("pics/Dia4.png");
  dia5Img = loadImage("pics/Dia5.png");
  boardImg = loadImage("pics/Board.png");
  launchImg = loadImage("pics/Launch.png")
  taskImg = loadImage("pics/Tasks.png");
}



function setup(){
    createCanvas(1284,664);
    bg = createSprite(700,500);
    bg.addImage(skyImg);
    //bg = bg.width/2;


    //space = createSprite(700,500);
    //space.addImage(spaceImg);
    //space.velocityY = -3;
    //bg.addImage(skyImg)

    ast = createSprite(650,440);
    ast.addImage(astImg);
    ast.scale = 0.65;

    ground = createSprite(600,500);
    ground.addImage(groundImg);
    ground.scale = 1.5;

    man = createSprite(500,450);
    man.addImage(manImg);
    man.scale = 0.5;

    launch = createSprite(600,550);
    launch.addImage(launchImg);
    launch.scale = 0.5;
    launch.setCollider("rectangle",0,0,60,60);
 
  

    play = createSprite(650,300);
    play.addImage(playImg);
    play.setCollider("rectangle",0,0,30,30);
 

    task = createSprite(200,300);
    task.addImage(taskImg);

    next = createSprite(1200,620);
    next.addImage(nextImg);
    next.scale = 0.3;
    next.setCollider("rectangle",0,0,100,100);
    
    yes = createSprite(1000,620);
    yes.addImage(yesImg);
    yes.scale = 0.3;
    yes.setCollider("rectangle",0,0,100,100);
   


    dia1 = createSprite(590,265);
    dia1.addImage(dia1Img);
    dia1.scale = 0.5;
    dia1.setCollider("rectangle",0,0,100,100);
  

    board = createSprite(300,300);
    board.addImage(boardImg);
    board.scale = 0.4;
    board.setCollider("rectangle",0,0,70,70);


    dia2 = createSprite(750,265);
    dia2.addImage(dia2Img);
    dia2.scale = 0.5;
    dia2.setCollider("rectangle",0,0,100,100);
  

    dia3 = createSprite(850,200);
    dia3.addImage(dia3Img);
    dia3.scale = 0.5;

    dia4 = createSprite(850,400);
    dia4.addImage(dia4Img);
    dia4.scale = 0.5;

    dia5 = createSprite(850,400);
    dia5.addImage(dia5Img);
    dia5.scale = 0.5;
    
    pla();
    nxt();
    brd();
    lnc();
   

    

    
    takeoff = createSprite(1045,300);
    takeoff.addImage(takeoffImg);
}

function draw(){
    background(skyImg);


    if(gameState === WAIT){
        bg.changeImage(0);
    }

    if(gameState === PLAY){
        fine();
      bg.velocityY = -3;
        
        bg.changeImage(spaceImg);
        
    }

   /* if(mousePressedOver(play)){
        play.destroy();
        dia1.visible = true;
        next.visible = true;
        task.visible = false;
        ast.visible = true;
        man.visible = true;

        
    }*/
 
    //bg.velocityY = -3
   

    /*if (ground.x<0){
        ground.x = ground.width/2;
      }*/
      
    if(mousePressedOver(play)){

        play.destroy();
        dia1.visible = true;
        next.visible = true;
        ast.visible = true;
        man.visible = true;
        task.visible = false;
        board.visible = false;
        ground.visible = true;
        dia5.visible = false;
        yes.visible = false;
    }

   /* if(mousePressedOver(next)){
        dia1.visible = false;
        dia2.visible = true;
        next.destroy(0);
        board.visible = true;
    }*/

    if(mousePressedOver(next)){
    
        next.destroy();
        dia1.visible = false;
        dia2.visible = true;
        board.visible = true;
        dia5.visible = false;
        yes.visible = false;

    }

   /* if(mousePressedOver(board)){
        board.destroy();
        man.visible = false;
        ast.visible = false; 
        dia2.visible = false;
       // board.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        launch.visible = true; 
    }*/

    if(mousePressedOver(board)){
        
        board.destroy();
        man.visible = false;
        ast.visible = false;
        dia2.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        dia5.visible = false;
        launch.visible = true;
        yes.visible = false;
    }

    if(mousePressedOver(launch)){
        launch.destroy();
        dia3.visible = false;
        dia4.visible = false;
        dia5.visible = true;
        ground.visible = false;
        takeoff.position.x = 600;
        yes.visible = true;
        //dia5.visible = true;
        //launch.visible = false;

    }

    if(mousePressedOver(yes)){
        yes.destroy();
        dia5.visible = false;
        yes.visible = true;
        bg.velocityY = -3;
        //space.velocityY = -3;

    }

   

    drawSprites();
}

function pla(){
 
    dia1.visible = false;
    next.visible = false;
    dia2.visible = false;
    dia3.visible = false;
    dia4.visible = false;
    dia5.visible = false;
    board.visible = false;
    launch.visible = false;
    ast.visible = false;
    man.visible = false;
    dia1.visible = true;
    yes.visible = false;
    //ground.visible = true;
  

        
}

function nxt(){
    dia1.visible = false;
    dia2.visible = true;
    board.visible = true;
    //dia1.visible = false;
    //next.visible = false;
    //dia2.visible = false;
    yes.visible = false;
    dia3.visible = false;
    dia4.visible = false;
    dia5.visible = false;
    board.visible = false;
    launch.visible = false;
    ast.visible = true;
    man.visible = true;
    //dia1.visible = true;
}

function brd(){
   man.visible = false;
        ast.visible = false;
    
        yes.visible = false;
      dia2.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        dia5.visible = false;
       // launch.visible = true;
        
}


function lnc(){
    dia3.visible = false;
    dia4.visible = false;
    dia5.visible = false;
    ground.visible = false;
    launch.visible = false;
   // yes.visible = true;
}

function fine(){
  dia5.visible = false; 
  bg.velocityY = -3;
  
  if(bg<0){
    bg = bg.width/2;
}
}