//Create variables here
var dog;
var happyDog;
var db;
var foodS;
var foodStock;

function preload()
{
  //load images here
  this.Image = loadImage("Dog.png");
  this.Image = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite(250,250);
  dog.addImage = loadImage("Dog.png")
  db = firebase.database()
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
backGround(46,139,87);

text("foodstock:" + foodStock,150,100);
textSize(50);
fill(red);
stroke();

text("NOTE: Press UP_ARROW KEY to feed Drago Milk!",150,150);
textSize(50);
fill(blue);
stroke();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("happydog.png");
}

  drawSprites();
  //add styles here
}

function redStock(data){
   foodS = data.val();
}

function writeStock(x){
   
  if(x<=0){
    x=0;
  }
 else{
   x=x-1;
 }
  database.ref('/').update({
    Food:x
  })
}