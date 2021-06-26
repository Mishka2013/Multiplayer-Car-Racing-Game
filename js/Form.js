class Form {

  constructor() {
    //creating the buttons
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  //hiding the greetings
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    //giving the title and aligning it
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    //assigning positions to other buttons
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    //if play button is pressed then greetings will hide and player count gets updated, waiting room appears
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    //if reset is pressed then CarsAtEnd,gameState,PlayerCount updates to 0;
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
     Player.updateCarsAtEnd(0);
    });

  }
}
