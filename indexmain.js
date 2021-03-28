console.log("Spaceship Homework Adriana" );

document.getElementById("generate-starship").addEventListener("click",generateStarship);
let ship;

function generateStarship(){
    ship = new Spaceship();
}