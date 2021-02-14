var garden,gardenImage
var tomOne,tomOneImage,tomTwoImage,tomThreeImage,tomFourImage;
var jerryOne,jerryOneImage,jerryTwoImage,jerryThreeImage,jerryFourImage;

function preload() {
    
    gardenImage = loadImage("images/garden.png");
    tomOneImage = loadAnimation("images/tomOne.png");
    tomTwoImage = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomThreeImage=loadAnimation("images/tomFour.png");
    jerryOneImage = loadAnimation("images/jerryOne.png");
    jerryTwoImage=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryThreeImage = loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    
    tomOne=createSprite(850,650);
    tomOne.addAnimation(tomOneImage);
    tomOne.scale=0.2;
  
    jerryOne=createSprite(100,620);
    jerryOne.addImage(jerryOneImage);
    jerryOne.scale=0.2;
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

if(tomOne.x - jerryOne.x < (tomOne.width - jerryOne.width)/2){

    tomOne.velocityX=0;
    tomOne.addAnimation("tomFourImage",tomThreeImage);
    tomOne.x=250;
    tom.scale=0.2;
    tomOne.changeAnimation("tomFourImage");
    jerryOne.addAnimation("jerryFourImage",jerryThreeImage);
    jerryOne.scale=0.2;
    jerryOne.changeAnimation("jerryFourImage");
   }

    drawSprites();
}
function keyPressed(){


  if(keyCode ===LEFT_ARROW){
    tomOne.velocityX=-5;
    tomOne.addAnimation("tomTwoRunning",tomTwoImage);
    tomOne.changeAnimation("tomTwoRunning")

    jerryOne.frameDelay
    jerryOne.addAnimation("jerryTwoImage", jerryTwoImage);
    jerryOne.changeAnimation("jerryTwoImage");
    
    }
}
