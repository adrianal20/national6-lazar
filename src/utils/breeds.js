
import { getBreedImages } from "./utils/api";
let currentBreedImage = [];


export function createList(breedList) {
    for (const breed of Object.keys(breedList.message)) {
        renderBreed(breed);
    }
    if (localStorage.breed && localStorage.index) {
        document.getElementById(localStorage.breed).classList.add("breedSelected");
        document.getElementById("page-number").innerText = "";
        document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
        getBreedImages(renderImage);
    }
}

export function renderBreed(dogBreed) {
    const breedName = document.createElement("p");
    breedName.innerText = dogBreed;
    breedName.setAttribute("id", dogBreed);
    document.getElementById("breeds").appendChild(breedName);
    breedName.addEventListener("click", selectedBreed);
}


export function selectedBreed() {
    if (document.querySelector(".breedSelected")) {
        document.querySelector(".breedSelected").classList.remove("breedSelected");
    }
    localStorage.setItem("index", 0);
    modifyPageNumber();
    localStorage.setItem("breed", this.id);
    this.classList.add("breedSelected");
    getBreedImages(renderImage);
}


export function renderImage(imageResponseMessage) {
    currentBreedImage = imageResponseMessage.message;
    if (localStorage.index) {
        document.getElementById("breed-image").setAttribute("src", currentBreedImage[localStorage.index]);
    }
    else {
        document.getElementById("breed-image").setAttribute("src", currentBreedImage[0]);
    }
}


export function previousImage() {
    if (document.querySelector(".breedSelected")) {
        if (localStorage.index >= 1) {
            localStorage.index--;
        }
        modifyPageNumber();
    }
}

export function followingImage() {
    if (document.querySelector(".breedSelected")) {
        if (localStorage.index < currentBreedImage.length - 1) {
            localStorage.index++;
        }
        modifyPageNumber();
    }
}


function modifyPageNumber() {
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText = parseInt(localStorage.index) + 1;
    document.getElementById("breed-image").setAttribute("src", currentBreedImage[localStorage.index]);
}