//Crate tile block based on block class
class Crate extends Block {
  setType() {
    return('c'); //set type of block
  }
  
  //draw the crate (brown box, with basic design)
  draw() {
    stroke(65, 30, 20);
    fill(185, 140, 75);
    rect(this.x-10,this.y-10,20);
    //horiz lines
    fill(204, 159, 92);
    rect(this.x-10,this.y-10, 20, 4);
    rect(this.x-10, this.y+6, 20, 4);
    fill(170, 120, 60);
    rect(this.x-6, this.y-6, 12);
    //diag lines
    line(this.x+6, this.y-6, this.x-6, this.y+6);
    line(this.x, this.y-6, this.x-6, this.y);
    line(this.x, this.y+6, this.x+6, this.y);
  }
}