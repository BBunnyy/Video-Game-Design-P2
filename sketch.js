//SET THE TILEMAP
var tilemap = [
  "ssssssssssssssssssss",
  "s   cc cc!cccc    !s",
  "s p!  ccccc    <  cs",
  "s   c c cc!c      !s",
  "ssssssssssss   sssss",
  "sscccs!sc      sc!cs",
  "scc!   c<   !  sccss",
  "scc s   s!s    s   s",
  "ssssssssssss   ss  s",
  "ssccccc         cv s",
  "sccc   !         ccs",
  "sc           !  cccs",
  "s v ssssssssssssssss",
  "s    ccc  !scc     s",
  "ss    c c  s!ccs ! s",
  "s!  ssssssssssss  cs",
  "ss     sccc     c  s",
  "sc!   <  c!     !  s",
  "sccs   sscc  s!s  cs",
  "ssssssssssssssssssss",
];

//INITIALIZE GLOBAL VARIABLES
var player;
var origEn = [];
var enemies = [];
var origPrizes = [];
var prizes = [];
var origWall = [];
var wall = [];
var gameStart;
var gameOver;
var lost;
var won;
var prizeImg;

//PARSE THE TILE MAP TO SET GAME OBJECTS:
function setTiles() {
  for (var row = 0; row < tilemap.length; row++) {
    for (var col = 0; col < tilemap[row].length; col++) {
      switch (tilemap[row][col]) {
        case "s": //Steel Block tile found! Add to walls!
          wall.push(new Steel(col * 20 + 10, row * 20 + 10));
          break;
        case "c": //Crate Block tile found! Add to walls!
          wall.push(new Crate(col * 20 + 10, row * 20 + 10));
          break;
        case "p": //Player tile found! Spawn player!
          player = new Player(col * 20 + 10, row * 20 + 10, 10);
          break;
        case "<": //Horizontal moving enemy found! Spawn Enemy!
          enemies.push(new Pig(col * 20 + 10, row * 20 + 10));
          enemies[enemies.length - 1].setDir("R");
          break;
        case "v": //Vertical moving enemy found! Spawn Enemy!
          enemies.push(new Pig(col * 20 + 10, row * 20 + 10));
          enemies[enemies.length - 1].setDir("D");
          break;
        case "!": //Price found! Spawn Prize!
          prizes.push(new Prize(col * 20 + 10, row * 20 + 10));
          break;
        default:
          break;
      }
    }
  }
}

//Function to manage drawing and movement of enemies (see Pig.js for more)
function drawEnemies() {
  for (var eCount = 0; eCount < enemies.length; eCount++) {
    enemies[eCount].draw();
    enemies[eCount].move();
    enemies[eCount].checkCollision();
  }
}

//Function to manage drawing of prizes (see Prize.js for more)
function drawPrizes() {
  for (var pCount = 0; pCount < prizes.length; pCount++) {
    prizes[pCount].draw();
  }
}

//Function to manage drawing of wall objects (Steel or Crates) (see Steel.js, Crate.js for more)
function drawWall() {
  for (var wallCount = 0; wallCount < wall.length; wallCount++) {
    wall[wallCount].draw();
  }
}

//On Key release, start the game if on home screen
function keyReleased() {
  if (gameStart == false) {
    gameStart = true;
    lost = false;
    won = false;
  }
}

//on mouse click, start the game if on home screen, or reset to home screen from end screen
function mouseClicked() {
  if (gameStart == false) {
    gameStart = true;
    lost = false;
    won = false;
  }
  if (won == true || lost == true) {
    //reset to home screen
    gameStart = false;
  }
}

//Set up the custom character, load the tiles, and set game states
function setup() {
  createCanvas(400, 400);

  prizeImg = customChar();

  setTiles();
  gameStart = false;
  gameOver = false;
}

//Main loop
function draw() {
  background(200);
  //If not started, draw the instruction/home screen (See Extras/TitleScreen.js for more)
  if (gameStart == false) {
    drawTitle();
  }
  //If Game has started, and the player has not lost or won
  else if (lost == false && won == false) {
    player.draw(); //draw the player
    player.move(); //move the player
    player.collisionCheck(); //if the player's movement causes a collision, handle collision
    player.shoot(); //allow the player to shoot if SPACE is pressed

    //Drawing prizes, adversaries, and walls
    drawPrizes();
    drawWall();
    drawEnemies();

    //If player is touched, they lose
    if (player.health == 0) {
      gameOver = true;
      lost = true;
    }
    //if player collects all the prizes, they win
    else if (prizes.length == 0) {
      gameOver = true;
      won = true;
    }
  }
  //if the player loses, reset parameters, and play the losing screen animation
  else if (lost == true) {
    enemies = [];
    prizes = [];
    wall = [];
    setTiles();
    GameOverAni();
  }
  //if the player wins, reset parameters, and play the winning screen animation
  else if (won == true) {
    enemies = [];
    prizes = [];
    wall = [];
    setTiles();
    GameWinAni();
  }
}
