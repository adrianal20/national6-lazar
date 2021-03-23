document.getElementById("deleteData").addEventListener("click", clearData);

function clearData(){
    fetch('https://simple-json-server-scit.herokuapp.com/todo/alazar', 
    {
        method: "DELETE",
    })
}