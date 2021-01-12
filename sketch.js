var canvas;
var edgeSprite;
var music;
var ball;
var green,blue,yellow,red;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    green=createSprite(690,560,175,20);
    green.shapeColor="green";

    blue=createSprite(500,560,175,20);
    blue.shapeColor="blue";

    yellow=createSprite(300,560,175,20);
    yellow.shapeColor="yellow";

    red=createSprite(100,560,175,20);
    red.shapeColor="red";





    //create box sprite and give velocity
 
    ball=createSprite(random(200,800),random(100,500),50,50);
    ball.velocityX=-5;
    ball.velocityY=-5;
    ball.shapeColor="white";
    


}

function draw() {
    background("black");
    //create edgeSprite

    edgeSprite=createEdgeSprites();
    ball.bounceOff(edgeSprite);

    
   


    if (ball.isTouching(green)|| ball.bounceOff(green)){
        music.play();
        ball.shapeColor="green";
        ball.bounceOff(green);
        
        
    }

    if (ball.isTouching(blue)|| ball.bounceOff(blue)){
        music.play();
        ball.shapeColor="blue";
        ball.bounceOff(blue);

    }
       

    if (ball.isTouching(yellow)|| ball.bounceOff(yellow)){
        music.play();
        ball.shapeColor="yellow";
        ball.bounceOff(yellow);
              
    }

    if (ball.isTouching(red)|| ball.bounceOff(red)){
       
        ball.shapeColor="red";
        ball.bounceOff(red);
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
       
        
    }


    

    drawSprites();



    //add condition to check if box touching surface and make it box
}
