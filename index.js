console.log("JavaScript - Dogs App - Adriana");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("breed");
  localStorage.removeItem("index");
  window.location = "/";
});

let imageArray = [];

document.getElementById("backward").addEventListener("click", previousImage);
document.getElementById("forward").addEventListener("click", followingImage);

fetch("https://dog.ceo/api/breeds/list/all")
  .then(handleFetchResponse)
  .then(createList);

function handleFetchResponse(response) {
  return response.json();
}

function createList(breedsList) {
  for (const breed of Object.keys(breedsList.message)) {
    renderBreed(breed);
  }
  if (localStorage.breed && localStorage.index) {
    document.getElementById(localStorage.breed).classList.add("breedSelected");
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText =
      parseInt(localStorage.index) + 1;

    fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
      .then(handleFetchResponse)
      .then(renderImage);
  }
}

function renderBreed(dogBreed) {
  const breedName = document.createElement("p");
  breedName.innerText = dogBreed;
  breedName.setAttribute("id", dogBreed);
  breedName.addEventListener("click", selectedBreed);
  document.getElementById("breeds").appendChild(breedName);
}

function selectedBreed() {
  if (document.querySelector(".breedSelected"))
    document.querySelector(".breedSelected").classList.remove("breedSelected");
  localStorage.setItem("index", 0);

  document.getElementById("page-number").innerText = "";
  document.getElementById("page-number").innerText =
    parseInt(localStorage.index) + 1;

  localStorage.setItem("breed", this.id);

  this.classList.add("breedSelected");
  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then(handleFetchResponse)
    .then(renderImage);
}

function renderImage(image) {
  imageArray = image.message;
  if (localStorage.index) {
    document
      .getElementById("breed-image")
      .setAttribute("src", imageArray[localStorage.index]);
  } else
    document.getElementById("breed-image").setAttribute("src", imageArray[0]);
}

function previousImage() {
  if (document.querySelector(".breedSelected")) {
    if (localStorage.index >= 1) {
      localStorage.index--;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText =
      parseInt(localStorage.index) + 1;
    document
      .getElementById("breed-image")
      .setAttribute("src", imageArray[localStorage.index]);
  }
}

function followingImage() {
  if (document.querySelector(".breedSelected")) {
    if (localStorage.index < imageArray.length - 1) {
      localStorage.index++;
    }
    document.getElementById("page-number").innerText = "";
    document.getElementById("page-number").innerText =
      parseInt(localStorage.index) + 1;
    document
      .getElementById("breed-image")
      .setAttribute("src", imageArray[localStorage.index]);
  }
}
