//function to draw the custom character: (A money bag)
function customChar() {
  //set the background of the custom char to be transparent
  clear();
  background(0, 0, 0, 0);

  //move center to canvas center:
  translate(200, 200);

  //draw bag outlines
  noFill();
  strokeWeight(6);
  stroke(0);
  quad(10, -30, -10, -35, -20, -50, 25, -40);
  quad(10, -30, -10, -35, -40, 20, 45, 20);
  quad(-40, 20, 45, 20, 40, 60, -34, 60);
  arc(3, 60, 74, 10, 0, PI);

  //draw bag fill
  noStroke();
  fill(163, 117, 67);
  quad(10, -30, -10, -35, -20, -50, 25, -40);
  quad(10, -30, -10, -35, -40, 20, 45, 20);
  quad(-40, 20, 45, 20, 40, 60, -34, 60);
  arc(3, 60, 74, 10, 0, PI);

  //draw bag ties
  strokeWeight(4);
  stroke(0);
  line(12, -30, -12, -35);
  line(12, -30, -16, -26);

  //draw money symbol on bag
  noStroke();
  fill(0);
  textSize(70);
  textStyle(BOLD);
  text("$", -17, 45);
  translate(-200, -200);

  //capture image and output
  temp = get(133, 140, 140, 140);
  return temp;
}
