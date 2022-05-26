//Class for prizes, using a custom character
class Prize {
  constructor(x,y) { //set defaults, and set img
    this.x = x
    this.y = y
    this.size = 10
    this.prizeImg = customChar()
  }
  
  draw() {
    //draw the prize at the desired location
    image(this.prizeImg, this.x-10,this.y-10,20,20)
  }
}