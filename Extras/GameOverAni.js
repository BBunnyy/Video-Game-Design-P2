function GameOverAni() {
  
  //initialize static variables
  if (typeof this.counter == 'undefined') {
    this.counter = 0;
    this.counter2 = 0;
  }
  
  //draw the robber:
  translate(230,200)
  stroke(0)
  strokeWeight(10)
  line(0,50,0,125)
  line(0,60,-10,80)
  line(-10,80,-30,90)
  line(0,60,10,80)
  line(10,80,30,90)
  
  line(0,125,10,180)
  line(0,125,-10,180)
  
  strokeWeight(1)
  fill(252, 203, 154)
  ellipse(0,0,90,100)
  fill(50)
  arc(0,-10, 95,100,PI,2*PI)
  rect(-50,-30,100,20)
  translate(-230,-200)
  //end robber
  
  //Draw jail cell bars, animate them falling in front of robber
  for (var bar = 0; bar <5; bar++) {
    fill(100,100,120)
    noStroke()
    rect(60*bar+70, -410+this.counter, 20,410)
  }
  rect(20,-20+this.counter,360,20)
  
  //animate "GAME OVER" flashing red and blue:
  var intensity = this.counter2%100
  textSize(40)
  if (intensity < 25)
    fill(255-255*intensity/25, 255-255*intensity/25, 255)
  else if (this.counter2%100 < 50)
    fill(255*(intensity-25)/25, 255*(intensity-25)/25, 255)
  else if (this.counter2%100 < 75)
    fill(255, 255-255*(intensity-50)/25, 255-255*(intensity-50)/25)
  else if (this.counter2%100 < 100)
    fill(255, 255*(intensity-75)/25, 255*(intensity-75)/25)
  
  stroke(0)
  strokeWeight(10)
  text('Game Over',92,50)
  
  //increment counters: stop incrementing counter 1 at 400
  if (this.counter < 400) {    
    this.counter += 10
  }
  this.counter2 += .5;
  
  //draw outline bricks:
  stroke(30)
  fill(150,150,160)
  for (var brick = 0; brick <5; brick ++) {
    rect(-40,80*brick,80,80)
    rect(360,80*brick,80,80)
  }
}

