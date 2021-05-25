function getDataFromServer(url, callback) {
    fetch(url)
        .then((r) => r.json())
        .then(callback)
}

export function getBreedList(callback) {
    getDataFromServer("https://dog.ceo/api/breeds/list/all", callback)
}

export function getBreedImages(callback) {
    getDataFromServer(`https://dog.ceo/api/breed/${localStorage.breed}/images`, callback)
}