class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    readcount(){
        database.ref('playerCount').on("value",function(data){
          playerCount = data.val()
        }); 
        
    }
    updatecount(playerCount){
     database.ref('/').update({playerCount:playerCount})    
    } 
    
    updateName(){
       database.ref('players/player'+this.index).set({
           Playername:this.name, distance:this.distance
       })
      
       
    }
static readInfo(){
    database.ref('players').on("value",(data)=>{allplayer = data.val()})
}

}