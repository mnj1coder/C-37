class Game {
    constructor(){}

    
    readState(){
        database.ref('gameState').on("value",function(data){
          gameState = data.val()
        }); 
        
    }
    updatestate(state){
     database.ref('/').update({gameState:state})    
    } 
    start(){
        if(gameState == 0){
            player = new Player();
            player.readcount();
            form = new Form();
            form.display();
        }
       car1 = createSprite(100,200);
       car2 = createSprite(200,200);
       car3 = createSprite(300,200);
       car4 = createSprite(400,200);
       carArray= [car1,car2,car3,car4]
    }
    play(){
        form.hide();
       text('The championship begins!!',250,50);
       Player.readInfo();
       
       if(allplayer!= undefined){
        var xpos = 200;
        var ypos = 0;
        var index = 0;
         for(var i in allplayer){
             //text(allplayer[i].Playername,xpos,100);
             
             index = index+1;
             ypos = displayHeight-allplayer[i].distance
             carArray[index-1].x = xpos
             xpos = xpos+200;
             carArray[index-1].y = ypos
             if(index == player.index){
                 camera.position.x = displayWidth/2
                 camera.position.y = carArray[index-1].y
             }
         }
       }
       if(keyDown(UP_ARROW)&& player.index!= null){
           player.distance = player.distance+25;
           player.updateName();

       }
      drawSprites();
    }
}


