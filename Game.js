class Game{
    constructor(){

    }

    start(){
        player=new Player();
        form=new Form();
        form.display();
    }
    play(){
        player.move();
        player.shoot();

        if(frameCount%500===0){
            enemyGroup.push(new Enemy(random(0,800),random(0,600)))
        }

        if(enemyGroup!==undefined){
            for(var i=0;i<enemyGroup.length;i++){
                enemyGroup[i].shoot();
            }
        }

        if(bullets!==undefined&&enemyGroup!==undefined){
            for(var i=0;i<bullets.length;i++){
              for(var j=0;j<enemyGroup.length;j++){
                if(checkTouch(bullets[i],enemyGroup[j])){
                  enemyGroup[j].health=enemyGroup[j].health-1;
                  console.log(enemyGroup[j].health);
                  console.log('hit');
                  bullets[i].position.x=100000
                }else{
                  enemyGroup[j].health=enemyGroup[j].health
                }
                if(enemyGroup[j].health<=0){
                  enemyGroup[j].lifetime=1;
                  enemyGroup[j].destroy();
                  enemyGroup.splice(j,1);
                  playerHealth=playerHealth+1
                }
              }
            }
          }

          if(Ebullets!==undefined){
            for(var i=0;i<Ebullets.length;i++){
              if(checkTouch(player,Ebullets[i])){
                Ebullets[i].lifetime=1;
                Ebullets[i].destroy();
                Ebullets[i].remove();
                Ebullets[i].position=(1000000,20)
                Ebullets.splice(i,1);
                playerHealth=playerHealth-1;
                
              }else{
                playerHealth=playerHealth
              }
              if(playerHealth<=0){
                console.log('You lose')
                gameState='Lose'
              }
            }
          }

    }
}