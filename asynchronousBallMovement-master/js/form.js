class Form {
    constructor(){
        this.Button = createButton('CLICK HERE')
        this.info = createInput('Full name here');
         this.title = createElement('h1')
    }
    
    display(){
       
        this.title.position(displayWidth/2-40,displayHeight/2-280);
        this.title.html("Car racing championship");
        this.Button.position(displayWidth/2,displayHeight/2-160);
        this.info.position(displayWidth/2,displayHeight/2-210);

        this.Button.mousePressed(()=>{
            this.Button.hide();
            this.info.hide();
            playerCount++ 
            player.index = playerCount
            player.name = this.info.value();
            player.updateName();
            player.updatecount(playerCount);
        })
    }
hide(){
    this.title.hide();
    this.Button.hide();
    this.info.hide();
}

}