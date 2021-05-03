var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,800);

    // create blocks

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(520,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "green";

    // create ball
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //give  velocityX and velocityY to ball
    ball.velocityY = -10;
    ball.velocityX = 10;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
    else {
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }
    else {
        if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor  = "red";
        music.play(); 
        } 
    }
    else {
        if(block4.isTouching(ball) && ball.bounceoff(block4)){
            ball.shapeColor = "green";
            music.play();
        }
    


    

    
    




        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

   
     drawSprites();
}
