//class for bullets being shot
class Bullet {
  constructor(x, y, dir) { //initialize position and direction
    this.x = x;
    this.y = y;
    this.dir = dir
    this.size = 5
  }
  
  //draw the bullet (red rectangle, parallel to direction of travel)
  draw() {
    noStroke()
    fill(255,0,0)
    if (this.dir == "L" || this.dir == "R")
      rect(this.x-2, this.y-1, 4, 2)
    if (this.dir == "U" || this.dir == "D")
      rect(this.x-1, this.y-2, 2, 4)
  }
  
  //move the bullet continuously
  move() {
    //check if it hits anything
    var checkHit = this.hit();
    if(checkHit == 'X') //if it hits nothing, move normally
      {
        if (this.dir == "L") {
          this.x -= 2      
        }
        else if (this.dir == "R") {
          this.x += 2      
        }
        else if (this.dir == "U") {
          this.y -= 2      
        }
        else if (this.dir == "D") {
          this.y += 2     
        }
      }
    
    return checkHit //return what is hit (debugging purposes)
  }
  
  //check for hits (collision)
  hit() {
    var hit = 'X' //default is hit nothing
    
    //check if bullet hits walls:
      for (var i0 = 0; i0 < wall.length; i0++) {
        if (this.size/2+wall[i0].size/2 > dist(this.x,this.y,wall[i0].x, wall[i0].y)) {
          
          hit = wall[i0].type //what kind of wall was hit?
          
          if (hit == 'c') { //if the wall was a crate, destroy it
            wall.splice(i0,1)
          }
        }
      }
    
    //check if it hits any enemies
    for (var i1 = 0; i1 < enemies.length; i1++) {
      if (this.y > enemies[i1].y-7 && this.y < enemies[i1].y+7 && this.x <= enemies[i1].x+7 && this.x >= enemies[i1].x-7) {
        if (enemies[i1].hurt(1) <= 0) { //if enemy is hit, damage them, if the enemy is killed, remove them from game
          enemies.splice(i1,1)
        }
        
        hit = 'e' //enemy was hit
      }
    }
    
    return hit;
  }
}