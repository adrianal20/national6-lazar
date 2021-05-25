import { renderBreeds, followingImage, previousImage } from "./breeds";
import { getBreedList } from "./utils/api";
import { logOut } from "./utils/storage";


if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}
document.getElementById("logout").addEventListener("click", logOut);
document.getElementById("backward").addEventListener("click", previousImage);
document.getElementById("forward").addEventListener("click", followingImage);
getBreedList(renderBreeds);
