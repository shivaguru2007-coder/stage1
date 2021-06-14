class Form {

  constructor() {
    background(bgImg);
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("The Shooter Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.title.style('color', rgb(47,47,42));

    this.button.position(displayWidth/2 -200, displayHeight/2 -100);
    this.button.size(500,100)
    this.button.style('font-size', '33px');
    this.button.style( 'color',rgb(255, 136, 89) );
    this.button.style('background-color', rgb(73, 255, 137));
    this.button.mousePressed(()=>{
      this.button.hide();
      gameState = 1;
    });
    text("Hey Player, The Soldier Running Out Of Bullet Help him Out To hit The Enemies",displayWidth/2 -200,displayHeight/2 +100);
  

  }
}
