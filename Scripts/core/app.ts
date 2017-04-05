// IIFE - Immediately Invoked Function Expression
(function(){

//Function level variables
let canvas:HTMLElement = document.getElementById("canvas");
let stage:createjs.Stage;
let helloLabel:objects.Label;
let goodbyeLabel:objects.Label;
let clickMeButton:createjs.Bitmap;

/**
 * This method initializes the createjs Stage object and 
 * starts the app or game loop
 * 
 *  @method Start
 *  @returns void
 */
function Start():void {
  //create a new stage container (parent container for our app)
  stage = new createjs.Stage(canvas);

  createjs.Ticker.framerate = 60; //set the framerate to 60 FPS

  //Look for a tick event (every frame), refer to update
  createjs.Ticker.on("tick", Update)

  Main(); //call the main function
}


/**
 * the main app loop (or Game loop)
 * 
 * @method Update
 * @returns void
 */
function Update(event:createjs.Event):void {

  // spin a hello world text object (rotate my hello label by 5 pixels every frame)
  helloLabel.rotation += -5; //rotate counter clockwise every frame

  stage.update(); //redraw the stage (we are redrawing the stage every 16ms). update will call the "tick" event
}

/**
 * This method is where all the fun happens, we add child objects to the stage
 * 
 * This function will only trigger one time.
 * 
 * @method Main
 * @returns void
 */
function Main():void {
  console.log("App Started!!");

  /*
  //create our helloLabel 
  helloLabel = new createjs.Text("Hello, World", "20px Consolas", "#000000");

  //set vertical alignment point on the font
  // helloLabel.textBaseline = "center";

  //measure the width/height of our label, set our anchor to the middle of the label
  helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
  helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;

  //set our coordinates
  helloLabel.x = 125;
  helloLabel.y = 125;
  */

  //We use our custom Label object which extends the Text /**
  helloLabel = new objects.Label("Hello, World", "20px", "Consolas", "#000000", 125, 125, true);
  goodbyeLabel = new objects.Label("Good Bye!","24px","Arial","#FF0000", 125, 125, true);
  
  //add click me clickMeButton
  clickMeButton = new createjs.Bitmap("../../Assets/images/clickMeButton.png");
  clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
  clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
  clickMeButton.x = 125;
  clickMeButton.y = 200;
  

  //add our helloLabel to the stage
  //all objects added to the stage appear in the order they are added
  stage.addChild(helloLabel);
  stage.addChild(goodbyeLabel);
  stage.addChild(clickMeButton);

  clickMeButton.on("click", function(){
    helloLabel.text = "Hi Ya!";
    goodbyeLabel.text = "See ya!";
  });

}

window.onload = Start;

})();
