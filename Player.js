//Class object for the player character
class Player {
  //initialize player location, speed, health, size, direction, and give them an array to manage bullets fired
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    
    this.speed = 1
    
    this.health = 3;
    this.size = size;
    this.dir = 'U';
    this.collision = false;
    this.bullets = [];
    this.lastShot = 0;
  }
  
  //drawing the basic player model (a circle with an "eye" to convey direction)
  baseDraw() {
    fill(80)
    circle(0, 0, this.size)
    fill(255)
    noStroke()
    circle(0, -3, this.size/3)
  }
  
  //draw the player based on their direction
  draw() {
    for (var bullCount = 0; bullCount < this.bullets.length; bullCount++) {
      this.bullets[bullCount].draw();
    }
     stroke(0);
    
    if (this.dir == 'L') { //rotate player to draw facing left
      translate(this.x,this.y)
      rotate(-PI/2)
      this.baseDraw();
      rotate(PI/2)
      translate(-this.x,-this.y)
      
    }
    else if (this.dir == 'R') { //rotate player to draw facing right
      translate(this.x,this.y)
      rotate(PI/2)
      this.baseDraw();
      rotate(-PI/2)
      translate(-this.x,-this.y)
    }
    else if (this.dir == 'U') { //default player ot face up
      translate(this.x,this.y)
      this.baseDraw();
      translate(-this.x,-this.y)
    }
    else if (this.dir == 'D') { //rotate player to draw facing down
      translate(this.x,this.y)
      rotate(PI)
      this.baseDraw();
      rotate(-PI)
      translate(-this.x,-this.y)
    }
  }
  
  //move the player based on arrow key pressed, and rotate them in the direction moving
  move() {
    var collision = false
    
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
      this.dir = 'L'
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
      this.dir = 'R'
    }
    else if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
      this.dir = 'U'
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
      this.dir = 'D'
    }
    
  }
  
  //check various collisions
  collisionCheck() {
    //Check collision with enemies
    for (var z0 = 0; z0 < enemies.length; z0++) {
      if (this.size/2+enemies[z0].size/2 > dist(this.x,this.y,enemies[z0].x, enemies[z0].y)) {
        this.health = 0; //kill player if they touch enemy
      }
    }
    
    //Check collision with walls
    for (var w0 = 0; w0 < wall.length; w0++) {
      if (this.x - this.size/2 < wall[w0].x + wall[w0].size/2 && this.x + this.size/2 > wall[w0].x - wall[w0].size/2 && this.y - this.size/2 < wall[w0].y + wall[w0].size/2 && this.y + this.size/2 > wall[w0].y - wall[w0].size/2) {
        
        //undo the movement from move() if you move into the wall, depending on direction moved
          if (this.dir == "L") {
            this.x += this.speed;
          }
          else if (this.dir == "R") {
            this.x -= this.speed;
          }
          else if (this.dir == "U") {
            this.y += this.speed;
          }
          else if (this.dir == "D") {
            this.y -= this.speed;
          }
        }
      }
    
    //check for collision with prizes
    for (var p0 = 0; p0 < prizes.length; p0++) {
      if (this.size/2+prizes[p0].size/2 > dist(this.x,this.y,prizes[p0].x, prizes[p0].y)) {
            prizes.splice(p0,1); //remove prize, if collided
          }
      }
  }
  
  shoot() {
    //place to shoot, limit to 3 per second
    if (keyIsDown(32) && frameCount - 20 > this.lastShot) {
      //"fire" bullet
      this.bullets.push(new Bullet(this.x,this.y,this.dir))
      this.lastShot = frameCount //frame count of last shot bullet
    }
    
    //if the bullet collides with something
    for (var bullCount = 0; bullCount < this.bullets.length; bullCount++) {
      var didHit = this.bullets[bullCount].move();
      if (didHit != 'X') {
        this.bullets.splice(bullCount,1)
      }
    }
  }
  
}