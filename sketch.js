var maskman , maskmanjumping , maskmanidle,maskmandying ,maskmanrunnning;
var ground, groundImg , score , scoreImg, invisibleGround;
var bigCorona,bigCoronaImg,smallCorona,smallCoronaImg;
var count=0;
var coronaGroup,soapGroup,sanitizeGroup,BigGroup,SmallGroup;
var handSanitizer,handSanitizerImg;
var gameOver,gameOverImg, rect1 , soapIconImg,soapIcon;
var sanitizeBullet,santizebulletImg, sanitize,soap,soapImg;
var soapNo=5;


function preload(){

  maskmanidle=loadAnimation("../Animations/Idle (1).png","../Animations/Idle (2).png",
  "../Animations/Idle (3).png","../Animations/Idle (4).png",
  "../Animations/Idle (5).png","../Animations/Idle (6).png",
  "../Animations/Idle (7).png","../Animations/Idle (8).png",
  "../Animations/Idle (9).png","../Animations/Idle (10).png",
  "../Animations/Idle (11).png","../Animations/Idle (12).png",
  "../Animations/Idle (13).png","../Animations/Idle (14).png",
  "../Animations/Idle (15).png");

  maskmanjumping=loadAnimation("../Animations/Jump (1).png","../Animations/Jump (2).png",
  "../Animations/Jump (3).png","../Animations/Jump (4).png",
  "../Animations/Jump (5).png","../Animations/Jump (6).png",
  "../Animations/Jump (7).png","../Animations/Jump (8).png",
  "../Animations/Jump (9).png","../Animations/Jump (10).png",
  "../Animations/Jump (11).png","../Animations/Jump (12).png",
  "../Animations/Jump (13).png","../Animations/Jump (14).png",
  "../Animations/Jump (15).png");

  maskmandying=loadAnimation("../Animations/Dead (1).png","../Animations/Dead (2).png",
  "../Animations/Dead (3).png","../Animations/Dead (4).png",
  "../Animations/Dead (5).png","../Animations/Dead (6).png",
  "../Animations/Dead (7).png","../Animations/Dead (8).png",
  "../Animations/Dead (9).png","../Animations/Dead (10).png",
  "../Animations/Dead (11).png","../Animations/Dead (12).png",
  "../Animations/Dead (13).png","../Animations/Dead (14).png",
  "../Animations/Dead (15).png");

  maskmanrunning=loadAnimation("../Animations/Run (1).png","../Animations/Run (2).png",
  "../Animations/Run (3).png","../Animations/Run (4).png",
  "../Animations/Run (5).png","../Animations/Run (6).png",
  "../Animations/Run (7).png","../Animations/Run (8).png",
  "../Animations/Run (9).png","../Animations/Run (10).png",
  "../Animations/Run (11).png","../Animations/Run (12).png",
  "../Animations/Run (13).png","../Animations/Run (14).png",
  "../Animations/Run (15).png");

  groundImg=loadImage("../Animations/background.jpg");

  bigCoronaImg=loadAnimation("../Animations/sprite_0.png",
  "../Animations/sprite_1.png");
  smallCoronaImg=loadAnimation("../Animations/SmallCorona (1).png",
  "../Animations/SmallCorona (2).png","../Animations/SmallCorona (3).png",)

  scoreImg=loadImage("../Animations/score.png");

  handSanitizerIconImg=loadImage("../Animations/hand sanitizer (1).png");

  handSanitizerImg=loadAnimation("Animations/hs0.png","Animations/hs1.png")

  soapIconImg=loadImage("../Animations/soap.png");

  soapImg=loadAnimation("Animations/1 (1).png","Animations/1 (2).png",
  "Animations/1 (3).png");

  gameOverImg=loadImage("../Animations/game over.jpg");

  santizebulletImg=loadImage("../Animations/sanitizebullet.png");
}


function setup() {
  createCanvas(800,400);
  maskman=createSprite(100, 300, 20, 50);
  maskman.addAnimation("idle",maskmanidle);
  maskman.scale=0.3;

  maskman.addAnimation("jumping",maskmanjumping);
  maskman.addAnimation("running",maskmanrunning);
  maskman.addAnimation("dying",maskmandying);
 
invisibleGround=createSprite(400,380,800,10);
invisibleGround.visible= false;

  ground=createSprite(400,50,800,300);
  ground.addImage("bacground",groundImg);
  ground.scale=3.4;
  ground.depth=0;
  
  score=createSprite(650,50,20,20);
  score.addImage("score",scoreImg);
  score.scale=0.5;

  handSanitizer=createSprite(40,50,20,20);
  handSanitizer.addImage("hs",handSanitizerIconImg);
  handSanitizer.scale=0.5;
  handSanitizer.rotation=40;
  handSanitizer.depth=5;

  soapIcon=createSprite(40,150,20,20);
  soapIcon.addImage("soapIcon",soapIconImg);
  soapIcon.scale=0.3;

  gameOver=createSprite(400,200,20,20);
  gameOver.addImage("go",gameOverImg);
  gameOver.visible=false;
  gameOver.depth=0;
  gameOver.scale=3;

  sanitize= createSprite(800,325,10,40);

  bigCorona= createSprite(800,325,10,40);
  
smallCorona= createSprite(800,325,10,40);

soap= createSprite(800,325,10,40);


  rect1=createSprite(60,70,300,20);
  rect1.shapeColor="red";
  rect1.depth=1;

  
  sanitizeBullet=createSprite(maskman.x,maskman.y+20,15,25);
  soap=createSprite(maskman.x,maskman.y+20,15,25);
  soap.addAnimation("soap",soapImg);
  soap.velocityX=5;
  soap.scale=0.2;
  
  sanitizeBullet.velocityX=5;
  sanitizeBullet.rotation=180;

  BigGroup=new Group();
  
  SmallGroup=new Group();
  soapGroup= new Group();
  sanitizeGroup=new Group();
}

function draw() {
  background(0,0,0);  
  textSize(25);
  textFont("Arial");
  textStyle(BOLD);

  maskman.velocityY = maskman.velocityY + 1.8;
  maskman.collide(invisibleGround);

  
if(keyDown("space")&& maskman.y>270){
  maskman.changeAnimation("jumping",maskmanjumping);
  maskman.velocityY=-25;
}



if (keyWentDown("s")&&rect1.width>-5) {
  rect1.width=rect1.width-10;
  sanitizeGroup.add(sanitizeBullet);
}

if (keyWentDown("a")&&soapNo>0) {
  soapNo=soapNo-1;
  soapGroup.add(soap);

}

if(keyWentDown("RIGHT_ARROW")){
  maskman.changeAnimation("running",maskmanrunnning);
}


if(keyWentUp("RIGHT_ARROW")){
  maskman.changeAnimation("idle",maskmanidle);
}

if(keyWentDown("RIGHT_ARROW")){
  ground.velocityX=-2;
  count = Math.round(World.frameCount/4);
ground.velocityX = -(6+count/100*3);
}


if(keyWentUp("RIGHT_ARROW")){
ground.velocityX=0;
}


if(ground.x<0){
  ground.x = ground.width/2;
}

if (sanitizeGroup.collide(maskman)) {
 sanitize.visible=false;
 rect1.width=rect1.width+30;
}

if (BigGroup.isTouching(soap)) {
bigCorona.destroy();
sanitizeBullet.destroy();
}

if ( SmallGroup.isTouching(soap)) {
  smallCorona.destroy();
  sanitizeBullet.destroy();
 
  }

  if(BigGroup.isTouching(handSanitizer)){
    handSanitizer.destroy();
  }

  if(SmallGroup.isTouching(soap)){
    soap.destroy();
  }

  if(SmallGroup.isTouching(handSanitizer)){
    handSanitizer.destroy();
  }

  if(BigGroup.isTouching(soap)){
    soap.destroy();
  }

if(soapGroup.collide(maskman)){
soap.visible=false;
soapNo=soapNo+1;
}

spawnsmallCorona();
spawnpowerUps();
if (BigGroup.isTouching(maskman)) {
  gameOver.visible=true;
}

if (SmallGroup.isTouching(maskman)) {
  gameOver.visible=true;
}
  drawSprites();
fill("red");
textFont("Georgia");
  text(soapNo,100,150);

  text( ""+count, 710, 60);
  


function spawnsmallCorona(){
  var rand2 = Math.round(random(100,200));
  if(frameCount % rand2 === 0) {
 var rand=Math.round(random(1,2));
if (rand===1) {
  smallCorona.velocityX = -(6);
  smallCorona.addAnimation("smallcorona",smallCoronaImg);
  smallCorona.scale = 0.5;
smallCorona.lifetime = 120;
SmallGroup.add(smallCorona);
} else if (rand===2) {
  bigCorona.velocityX = -(6);
  bigCorona.addAnimation("bigcorona",bigCoronaImg);
  bigCorona.scale=0.8;
bigCorona.lifetime = 120;
  
BigGroup.add(bigCorona);
}}
}
  
}


function spawnpowerUps(){
  var rand3 = Math.round(random(300,400));
  if(frameCount % rand3 === 0) {
 var rand4=Math.round(random(3,4));
if (rand4===3) {
 
  sanitize.velocityX = -(6);
  sanitize.addAnimation("hs",handSanitizerImg);
  sanitize.scale = 0.3;
  sanitize.rotation=40;
sanitize.lifetime = 150;
sanitizeGroup.add(sanitize);
} else if (rand4===4) {
 
  soap.velocityX = -(6);
  soap.addAnimation("soap",soapImg);
  soap.scale=0.3;
soap.lifetime = 150;
soapGroup.add(soap);
}}
}
  





  
