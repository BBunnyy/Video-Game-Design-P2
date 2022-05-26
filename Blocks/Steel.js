//Steel block tile: based on block default class
class Steel extends Block {
  setType() {
    return "s"; //set type of block
  }

  //draw the steel block (gray square, with basic design)
  draw() {
    stroke(80);
    fill(140, 140, 160);
    rect(this.x - 10, this.y - 10, 20);

    fill(220, 220, 240);
    triangle(
      this.x - 10,
      this.y - 10,
      this.x + 10,
      this.y - 10,
      this.x - 10,
      this.y + 10
    );
    line(this.x + 10, this.y + 10, this.x - 10, this.y - 10);
    rect(this.x - 6, this.y - 6, 12);
  }
}
