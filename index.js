console.log("To-Do App - Adriana Lazar");


const toDoListDiv = document.querySelector(".toDoList"); 


fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            id:"alazar",
            todo:[]
        })
    }).then(getData);


function handleFetchResponse(response) { 
    return response.json();
}

function getData(){
    
    fetch("https://simple-json-server-scit.herokuapp.com/todo/alazar")
    .then(handleFetchResponse)
    .then(renderList)
    .catch(()=>{});
}


document.getElementById("addButton").addEventListener("click",addNewTodo);


function addNewTodo(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/alazar")
    .then(handleFetchResponse)
    .then(updateList)
    .then(updateServer)
}


function updateList(response){
    let payload = response;
   
    const input = document.getElementById("addInput");
    if(input.value){
        let newToDo = {
            checked:false,
            item: input.value
            }
        payload.todo.push(newToDo);
        input.value="";
    } 
    
    return payload; 
}


function updateServer(newPayload) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/alazar', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newPayload)
    }).then(getData);
}


function renderList(response){
    toDoListDiv.innerHTML="";
    for (element of response.todo) {
        displayTask(element,response.todo.indexOf(element));
    } 
}


function displayTask(element,index){

    const createDiv = document.createElement("div");
    createDiv.classList.add("toDoDiv");
    createDiv.setAttribute("id",index);
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.classList.add("toDoCheckbox");
    checkBox.addEventListener("change", status);
    const taskName = document.createElement("h3");
    taskName.classList.add("taskName");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteButton");
    deleteBtn.addEventListener("click", removeTask); 
    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src","delete.png");
    deleteBtn.appendChild(deleteImg);
    taskName.innerText = element.item;
    checkBox.checked = element.checked;
    checkBox.name = element.item;
    createDiv.appendChild(checkBox);
    createDiv.appendChild(taskName);
    createDiv.appendChild(deleteBtn);
    toDoListDiv.prepend(createDiv);
}


function status(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/alazar")
    .then(handleFetchResponse)
    .then(updateTask)
}


function updateTask(response){
    let payload = response;
  
    let box = document.querySelectorAll(":checked");
    
    for (const element of payload.todo) {
        element.checked = false;
    }
    for (const element of box) {
       
        payload.todo[element.parentNode.id].checked = true;
    }
   
    updateServer(payload);
}


function removeTask(){
    this.parentNode.remove(); 
    fetch("https://simple-json-server-scit.herokuapp.com/todo/alazar")
    .then(handleFetchResponse)
    .then(cleanResponse)
}


function cleanResponse (response){
    let payload = response;
    let newPayloadArray =[];
    
    let remainingTasksList = document.querySelectorAll(".toDoDiv");
   
    for (const element of remainingTasksList) {
        newPayloadArray.push(payload.todo[element.id]);
        }
    payload.todo = newPayloadArray.reverse();
    updateServer(payload);
}