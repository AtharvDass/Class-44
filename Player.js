class Player{
    constructor(){
        this.player=createSprite(200/2,height/2,40,40);

        this.player.maxSpeed = 2;
        this.player.friction = 0.99;
        this.player.addImage('why',vaccine)
        this.player.scale=0.1

    }
    move(){
        if(keyDown('UP_ARROW')){
            this.player.y=this.player.y-10
          }
          if(keyDown('DOWN_ARROW')){
            this.player.y=this.player.y+10
          }
          if(keyDown('RIGHT_ARROW')){
            this.player.x=this.player.x+10
          }
          if(keyDown('LEFT_ARROW')){
            this.player.x=this.player.x-10
          }
          this.x=this.player.x;
          this.y=this.player.y;
          this.player.rotateToDirection = true;
          this.player.attractionPoint(0.5, mouseX, mouseY);
    }
    shoot(){
        if(frameCount%6===0){
            fill('yellow')
            bullets.push(  
              bullet = createSprite(this.player.x,this.player.y,5,5)
            )
              bullet.lifetime=70;
              bullet.shapeColor='yellow'
          }
          if(bullets!==undefined){
            for(var i=0;i<bullets.length;i++){
              bullets[i].attractionPoint(0.5,mouseX,mouseY);
            }
          }
    }
    destroy(){
      this.player.destroy();
    }
}