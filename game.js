console.log("OPP GAME - Adriana Lazar");

class GameObject {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.generateRef();
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;

    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  removeRef() {
    this.ref.remove();
  }
}

class Player extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "blue";
    this.move(50, 225);
  }

  moveUp() {
    if(this.y - 25>= 0)
    this.move(this.x, this.y - 25);
    console.log(this.y);
  }

  moveDown() {
    if(this.y + 25 <= 500 - this.height )
    this.move(this.x, this.y + 25);
    console.log(this.y);
  }
}

class Obstacle extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "red";
    this.move(1060, 25);
  }

  moveLeft() {
    this.move(this.x - 5, this.y);
  }
}

class ObstacleFactory {
  constructor() {
    this.obstacles = [];
  }

  createObstacle() {
    const obstacle = new Obstacle();
    obstacle.move(1060, Math.floor(Math.random() * 450));
    this.obstacles.push(obstacle);
  }

  destroyObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < -50) {
        obstacle.removeRef();
        return false;
      }

      return true;
    });
  }

  moveObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.moveLeft();
    }
  }
}

/// --- User  input

let keyUpPress = false;
let keyDownPress = false;
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});

// -- Collision Detection

function collisionDetection(player, obstacles) {
  for (const obstacle of obstacles) {
    if( player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y){

      delete obstacle.width;   
      delete obstacle.height; 
      obstacle.removeRef();  
      return true;
    }  
  }

  return false;
}

const player = new Player();
const obstacleFactory = new ObstacleFactory();

const life1 = document.getElementById("h1");
const life2 = document.getElementById("h2");
const life3 = document.getElementById("h3");

const lives = [life1,life2,life3];

let count = 0;

// Game Loop

let gameLoop = setInterval(() => {

  if (keyUpPress) player.moveUp();
  if (keyDownPress) player.moveDown();

  if (count % 10 === 0) obstacleFactory.createObstacle();

  obstacleFactory.moveObstacles();
  if (collisionDetection(player, obstacleFactory.obstacles)) {
    lives[lives.length-1].style.display = "none";
    lives.pop();
  }

  if(lives.length === 0){
    alert("You lost!");
    clearInterval(gameLoop);
    window.location = "/";
  }

  obstacleFactory.destroyObstacles();
  count++;
}, 50);