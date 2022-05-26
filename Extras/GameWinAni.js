function GameWinAni() {
  
  if (typeof this.counter == 'undefined') {
    this.counter = 0
    this.prizeImg = customChar()
  }
  background(255)
  
  //DISPLAY "YOU WIN!"
  textStyle(NORMAL)
  stroke(0)
  strokeWeight(1)
  textSize(60)
  text("YOU WIN!",50,60)
  
  //DRAW ANIMATION:
  translate(200,200)
  
  //Draw money held by the robber
  fill(136, 198, 167)
  rect(0,0, 45, 25)
  fill(0)
  noStroke()
  textSize(20)
  text("$",17,17)
  
  //Animate the robber throwing his money:
  if(this.counter<125) {
    
    //Animate money falling, and accelerating downward into a pile:
    fill(136, 198, 167)
    stroke(0)
    strokeWeight(1)
    rect(this.counter*1.3, 1.05**this.counter, 45, 25)
    fill(0)
    noStroke()
    textSize(20)
    text("$", 17+this.counter*1.3, 17+1.05**this.counter)
  }
  else {
    //reset once animation of money falling is done
    this.counter = 0
  }
  //increment counter
  this.counter++
  
  //animate the robber's arm moving to throw money
  stroke(0)
  strokeWeight(10)
  if(this.counter <= 25) //arm moving out/throwing
    line(-20,-10,10+this.counter*2,0)
  else if(this.counter > 25 && this.counter < 50) //arm returning
    line(-20,-10,110-this.counter*2,0)
  else //arm stationary
    line(-20,-10,10,0)
  
  //Draw money pile on floor
  fill(136, 198, 167)
  strokeWeight(1)
  stroke(0)
  rect(135,175, 45, 25)
  rect(150,180, 45, 25)
  rect(120,185, 45, 25)
  fill(0)
  noStroke()
  textSize(20)
  text("$",167,197)
  text("$",137,203)
    
  translate(-200,-200)
  //reset translation
  
  //draw apile of money bags for the robber to sit on:
  translate(150,300)
  rotate(PI/12)
  image(this.prizeImg, -50, -50, 100, 100)
  rotate(-PI/12)
  
  translate(-40,30)
  rotate(-PI/6)
  image(this.prizeImg, -50, -50, 100, 100)
  rotate(PI/6)
  
  translate(80,0)
  rotate(PI/3)
  image(this.prizeImg, -50, -50, 100, 100)
  rotate(-PI/3)
  
  translate(10,40)
  rotate(-PI/3)
  image(this.prizeImg, -50, -50, 100, 100)
  rotate(PI/3)
  
  translate(-120,0)
  rotate(-PI/12)
  image(this.prizeImg, -50, -50, 100, 100)
  rotate(PI/12)
  
  translate(60,0)
  image(this.prizeImg, -50, -50, 100, 100)
  //end moneybag drawings
  
  //reposition for robber drawing:
  resetMatrix()
  translate(190,130)
  
  //Draw the robber sitting on the money pile:
  scale(-1,1)
  stroke(0)
  strokeWeight(10)
  line(10,50,30,125)
  line(12,60,0,100)
  line(00,100,-30,90)
  line(30,125,0,140)
  line(0,140,10,180)
  
  strokeWeight(1)
  fill(252, 203, 154)
  ellipse(0,0,90,100)
  fill(50)
  arc(0,-10, 95,100,PI,2*PI)
  rect(-50,-30,100,20)
}