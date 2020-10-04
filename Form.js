class Form{
    constructor(){
        this.play = createButton('Play');
        this.shop=createButton('Shop')
    }
    display(){
        this.play.position(width/2,height/2);
        this.shop.position(width/2,height/2+50);
        this.play.mousePressed(()=>{
            playerHealth=20;
            gameState='Play';
        });
        this.shop.mousePressed(()=>{
            gameState='Shop';
        })
    }
    hide(){
        this.play.hide();
        this.shop.hide();
    }
}