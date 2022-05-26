//Object class for game adversaries (aka Cops), derived from NPC class
class Pig extends NPC{
  //Give the Cop a speed, and size to start as, and set a random variable used to rotate their lights
  init() {
    this.size = 10
    this.speed = 1.5
    this.rotate = random(0,2)
  }
  
  //set the direction the adversaries must face at the start
  setDir(dir) {
    this.dir = dir
  }
  
  //Draw a "Cop" adversary
  baseDraw() {
    
    //Allow the cop to change color upon taking damage
    stroke(0)
    if (this.health == 3) { //Full health = blue
      fill(0,0,255)
    }
    else if (this.health == 2) { //2 health = white
      fill(255);
    }
    else {  //1 health = red
      fill(255,0,0)
    }
    circle(0,0,this.size) //draw the cop as a circle
    
    //add an "eye" to convey direction
    noStroke()
    fill(255, 215, 0) //Gold color
    ellipse(0, -4, this.size/2,2)
  }
  
  //function to draw police lights that spin around the cops
  drawLights() {
    noStroke()
    //to make a gradient, draw increasingly bigger arcs, with transparency, that overlap
    for(var r = 10; r <= 40; r++) {
      fill(255,0,0,6) //red light
      arc(this.x, this.y, r, r, this.rotate*PI, (this.rotate+PI/8)*PI)
      fill(0,0,255,6) //blue light
      arc(this.x, this.y, r, r, this.rotate*PI-PI, (this.rotate+PI/8)*PI-PI)
    }
    this.rotate += .03 //speed at which to spin lights
  }
  
  //draw the Cop and Lights in the direction they travel
  draw() {
    if (this.dir == 'L') { //rotate the cop to face left
      this.drawLights()
      translate(this.x,this.y)
      rotate(-PI/2)
      this.baseDraw();
      rotate(PI/2)
      translate(-this.x,-this.y)
    }
    else if (this.dir == 'R') { //rotate the cop to face right
      this.drawLights()
      translate(this.x,this.y)
      rotate(PI/2)
      this.baseDraw();
      rotate(-PI/2)
      translate(-this.x,-this.y)
    }
    else if (this.dir == 'U') { //default drawing is facing up
      this.drawLights()
      translate(this.x,this.y)
      this.baseDraw();
      translate(-this.x,-this.y)
    }
    else if (this.dir == 'D') { //rotate the cops to face down
      this.drawLights()
      translate(this.x,this.y)
      rotate(PI)
      this.baseDraw();
      rotate(-PI)
      translate(-this.x,-this.y)
    }
  }
  
  //handle cop movement, depending on their direction
  move() {
    if (this.dir == "L") {
      this.x -=this.speed
    }
    else if (this.dir == "R") {
      this.x +=this.speed
    }
    else if (this.dir == "U") {
      this.y -=this.speed
    }
    else if (this.dir == "D") {
      this.y +=this.speed
    }
  }
  
  //check for and handle collision
  checkCollision() {
    //Check collision with walls
    for (var w0 = 0; w0 < wall.length; w0++) {
      if (this.x - this.size/2 < wall[w0].x + wall[w0].size/2 && this.x + this.size/2 > wall[w0].x - wall[w0].size/2 && this.y - this.size/2 < wall[w0].y + wall[w0].size/2 && this.y + this.size/2 > wall[w0].y - wall[w0].size/2) {
        
        //undo the movement from move() if you move into the wall, depending on direction traveling (I.e. step backwards)
          if (this.dir == "L") {
            this.x += this.speed;
            this.dir = "R"
          }
          else if (this.dir == "R") {
            this.x -= this.speed;
            this.dir = "L"
          }
          else if (this.dir == "U") {
            this.y += this.speed;
            this.dir = "D"
          }
          else if (this.dir == "D") {
            this.y -= this.speed;
            this.dir = "U"
          }
        }
    }
  }
}