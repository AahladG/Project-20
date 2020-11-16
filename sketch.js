var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  car = createSprite(200, 200, 50, 50);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  car.shapeColor = "white";
  car.velocityX = speed;
  wall = createSprite(700, 200, 50, height/2);

}

function draw() {
  background("black");

  var deformation = (0.5 * weight * speed * speed)/22500;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;

    if(deformation < 100){
      car.shapeColor = "green";
    }
    if(deformation >= 100 && deformation <= 180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}