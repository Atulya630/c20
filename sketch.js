
var canvas, bg;
var together;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    //load the images here

    bg = loadImage("images/garden.png");
    tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg1 = loadImage("images/tomOne.png");
    tomImg3 = loadImage("images/tomFour.png");

    jerryImg1 = loadAnimation("images/jerryThree.png","images/jerryTwo.png");
    jerryImg2 = loadImage("images/jerryOne.png");
    jerryImg3 = loadImage("images/jerryOne.png");



function setup(){
  canvas =  createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tomSleeping",tomImg1);
jerry=createSprite(200,600);
jerry.addAnimation("jerryImg1");
jerry.scale=0.15;
tom.scale=0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x< (tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastImage",tomImg3);
    tom.x=300;
    tom.scale=0.2;
    jerry.addAnimation("jerrylastImage",jerryImg3);
    jerry.scale=0.15;
    jerry.changeAnimation("jerrylastImage");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
    tom.velocityX= -5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
