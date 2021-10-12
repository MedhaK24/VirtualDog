var dog, dogImage;
var database;
var height;
var position;
var fc

function preload() {
  dogImage = loadImage("dog.jpg");
}

//Function to set initial environment
function setup() {
  database = firebase.database();

  createCanvas(1500, 700);

  dog = createSprite(750, 350, 150, 150);
  dog.addAnimation("Dog", dogImage);
  dog.scale = 0.5;
  var ref = database.ref("Food");
  ref.on('value',function(data){
  fc = data.val()
  })
  textSize(20);
}

// function to display UI
function draw() {
  background("green");
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("Feed the dog! The remianing food is "+ fc, 40, 40);
  if(keyDown(DOWN_ARROW)){
    updatefood()
  }
}

function updatefood(x, y) {
  database.ref("/").update({
    Food: fc - 1
  });
}
