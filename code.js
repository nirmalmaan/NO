var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c4653ec9-6df2-4a61-81c1-4433a986c32b","38d876ba-393c-48d0-9108-2bce7e7443a1","63cd25e8-0b95-4ed8-bf8d-80ffe7c7c07a","6530b4a9-c65a-4eab-9947-008fc59997b8"],"propsByKey":{"c4653ec9-6df2-4a61-81c1-4433a986c32b":{"name":"kid_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1GZ1sxkYfpf.8QFbjeDaSj2dJs0X_r0./category_characters/kid_16.png","frameSize":{"x":169,"y":300},"frameCount":1,"looping":true,"frameDelay":1,"version":"1GZ1sxkYfpf.8QFbjeDaSj2dJs0X_r0.","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":169,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1GZ1sxkYfpf.8QFbjeDaSj2dJs0X_r0./category_characters/kid_16.png"},"38d876ba-393c-48d0-9108-2bce7e7443a1":{"name":"kid_16_walking_1","sourceUrl":null,"frameSize":{"x":30,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"ja.vy6an7cdKeD2CkRYnzjsJjVVK_Cwj","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":50},"rootRelativePath":"assets/38d876ba-393c-48d0-9108-2bce7e7443a1.png"},"63cd25e8-0b95-4ed8-bf8d-80ffe7c7c07a":{"name":"book_1","sourceUrl":null,"frameSize":{"x":44,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Qo5HvPvpBxWgam5gir7nSHIGPrlP80qB","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":50},"rootRelativePath":"assets/63cd25e8-0b95-4ed8-bf8d-80ffe7c7c07a.png"},"6530b4a9-c65a-4eab-9947-008fc59997b8":{"name":"court_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"rCdHOPSS3DDQ19Ft.uSf2qGmQVrfoUkb","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6530b4a9-c65a-4eab-9947-008fc59997b8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var player=createSprite(32,21,25,25);
player.setAnimation("kid_16_walking_1");
player.setVelocity(0,0);

var wall1=createSprite(47,60,200,15);
wall1.shapeColor="black";

var wall2=createSprite(339,60,200,15);
wall2.shapeColor="black";

var wall3=createSprite(139,100,15,100);
wall3.shapeColor="black";

var wall4=createSprite(238,100,15,100);
wall4.shapeColor="black";

var wall5=createSprite(99,141,70,15);
wall5.shapeColor="black";

var wall6=createSprite(274,141,80,15);
wall6.shapeColor="black";

var wall7=createSprite(72,173,15,70);
wall7.shapeColor="black";

var wall8=createSprite(306,173,15,70);
wall8.shapeColor="black";

var wall9=createSprite(99,200,70,15);
wall9.shapeColor="black";

var wall10=createSprite(273,200,70,14);
wall10.shapeColor="black";

var wall11=createSprite(75,237,135,15);
wall11.shapeColor="red";


var wall12=createSprite(320,257,135,15);
wall12.shapeColor="red";


var wall13=createSprite(345,305,15,70);
wall13.shapeColor="black";

var wall14=createSprite(45,305,15,70);
wall14.shapeColor="black";

var ball1=createSprite(276,160,15,15);
ball1.shapeColor="green";


var ball2=createSprite(99,178,15,15);
ball2.shapeColor="lightgreen";


var ball3=createSprite(318,285,15,15);
ball3.shapeColor="blue";


var ball4=createSprite(65,320,15,15);
ball4.shapeColor="lightblue";


var book=createSprite(300,380,25,25);
book.setAnimation("book_1");

var gamestate="serve";


function draw() {
  background("yellow");
  
  if (gamestate==="serve"){
    textSize(25);
    text("prees enter to serve",91,17);
    
  }
  

 
  
 createEdgeSprites();
 ball1.bounceOff(wall8);
 ball1.bounceOff(wall7);
 
 ball2.bounceOff(wall8);
 ball2.bounceOff(wall7);
 
 wall11.bounceOff(edges);
 wall12.bounceOff(edges);

 ball3.bounceOff(wall13);
 ball3.bounceOff(wall14);
 
 ball4.bounceOff(wall13);
 ball4.bounceOff(wall14);

 player.bounceOff(edges);
 player.bounceOff(wall1);
 player.bounceOff(wall2);
 player.bounceOff(wall3);
 player.bounceOff(wall4);
 player.bounceOff(wall5);
 player.bounceOff(wall6);
 player.bounceOff(wall7);
 

if(keyDown("space")&&gamestate==="serve"){
  wall11.setVelocity(-3,0);
wall12.setVelocity(3,0);
  ball1.setVelocity(3,0);
  ball2.setVelocity(-3,0);
ball3.setVelocity(4,0);
ball4.setVelocity(-4,0);
  gamestate="play";
  playSound("assets/category_music/8bit_game_over_1.mp3", false);
}

 if (player.isTouching(ball1)||player.isTouching(ball2)||player.isTouching(ball4)||player.isTouching(wall11)||player.isTouching(wall12)){
   gamestate="over";
  player.x=0;
  player.y=0;
   playSound("assets/category_alerts/retro_game_alert_2.mp3", false);
  
}
 
 if(player.isTouching(book)){
  
  gamestate="over";
   stroke("white");
   textSize(30);
   fill("Brown");
   text("You Win Keep It  ",69,174);
   text("Keep It Up ",134,210);
   ball1.velocityX=0;
   ball2.velocityX=0;
   ball3.velocityX=0;
   ball4.velocityX=0;
   wall11.velocityX=0;
   wall12.velocityX=0;
  playSound("assets/category_achievements/peaceful_win_6.mp3", false);
   
 }
 
 if(keyDown("r")&&gamestate==="over"){
   gamestate="serve";
   
   player.x=0;
   player.y=0;
 }
 
if(keyDown("right")){
  player.x=player.x+7;
}

if(keyDown("left")){
  player.x=player.x-7;
}

if(keyDown("up")){
  player.y=player.y-7;
}

if(keyDown("down")){
  player.y=player.y+7;
} 

  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
