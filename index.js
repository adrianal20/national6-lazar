class Spaceship {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.generateRef();
        this.move();
        this.moveWhenClicked();
    }

    generateRef() {
        this.ref = document.createElement("img");
        let ship = ["blue-spaceship.png","green-spaceship.png","red-spaceship.png"];
        this.ref.src = ship[Math.floor(Math.random()*3)];
        this.ref.classList.add("spaceship");
        document.body.appendChild(this.ref);
        if(this.ref.classList.contains("spaceshipMovement")) {
            this.ref.classList.remove("spaceshipMovement")
        } else {
            if(document.querySelector(".spaceshipMovement")){
                document.querySelector(".spaceshipMovement").classList.remove("spaceshipMovement");
            }
            this.ref.classList.add("spaceshipMovement");
        }
      }

    move(){
        document.addEventListener("keydown",(event)=>{
            if(this.ref.classList.contains("spaceshipMovement")){
                this.moveSpaceship(event.key);
            }
        });
    }

    moveSpaceship(direction){
        switch (direction) {
            case "ArrowUp": {
                this.y = this.y - 20;
                this.ref.style.transform = `translate(${this.x}px,${this.y}px)`;
            } break;
            case "ArrowDown": {
                this.y = this.y + 20;
                this.ref.style.transform = `translate(${this.x}px,${this.y}px)`;
                } break;
            case "ArrowLeft": {
                this.x = this.x - 20;
                this.ref.style.transform = `translate(${this.x}px,${this.y}px)`;
                } break;
            case "ArrowRight": {
                this.x = this.x + 20;
                this.ref.style.transform = `translate(${this.x}px,${this.y}px)`;
                } break;
            default:
                break;
        } 
    }
    moveWhenClicked(){
        this.ref.addEventListener("click",()=>{
            if(this.ref.classList.contains("spaceshipMovement")) {
                this.ref.classList.remove("spaceshipMovement")
            } else {
                if(document.querySelector(".spaceshipMovement")){
                    document.querySelector(".spaceshipMovement").classList.remove("spaceshipMovement");
                }
                this.ref.classList.add("spaceshipMovement");
            }
        });
    }
}