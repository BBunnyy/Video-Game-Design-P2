//block base class, for setting position, size, etc.
class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;

    this.type = this.setType();
  }

  draw() {}
}
