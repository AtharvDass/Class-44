var game,form,player,bullet,Ebullet,vaccine,corona;
var gameState='Start';
var playerHealth=20
var bullets=[];
var Ebullets=[];
var enemyGroup=[];

function preload(){
  vaccine=loadImage('Vaccine.jpg');
  corona=loadImage('Corona.jpg');
}
function setup() {
  createCanvas(800,600);
  game=new Game();
  game.start();
}

function draw() {
  background('black');  

  if(gameState==='Play'){
    form.hide();
    game.play();
  }
  if(gameState==='Lose'){
    for(var i=0;i<enemyGroup.length;i++){
      enemyGroup[i].destroy();
    }
    enemyGroup=[];
    Ebullets=[];
    player.destroy();
    gameState='Start';
    game.start();
  }
  
  textSize(20);
  fill('blue')
  text('Your Health: '+playerHealth,width/2-30,20)
  drawSprites();
}
function checkTouch(obj1,obj2){
  var d=dist(obj1.x,obj1.y,obj2.x,obj2.y);
  if(d<45){
    return true;
  }else{
    return false;
  }
}
