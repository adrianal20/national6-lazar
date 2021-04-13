import { getToDoData, updateUserData, createUserData } from "./utils/api";
import { createToDoItemList } from "./components/items";

console.log("To Do App");

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

getToDoData((json) => {
  console.log(json);

  if (json.id === "sradusi") {
    todo = json.todo;
    userExist = true;
    createToDoItemList(json.todo);
  }
});

document.getElementById("add-task-button").addEventListener("click", () => {
  if (userExist) {
    // update user data
    console.log("add task to todo list");
    const itemValue = inputTask.value;
    if (itemValue) {
      console.log(todo);
      todo.push({
        checked: false,
        item: itemValue,
      });
      updateUserData(todo, () => {
        getToDoData((json) => {
          console.log(json);
          todo = json.todo;
          createToDoItemList(todo);
        });
      });
    }
  } else {
    // add user to server
    const itemValue = inputTask.value;
    if (itemValue) {
      createUserData(itemValue, () => {
        getToDoData((json) => {
          console.log(json);
          todo = json.todo;
          createToDoItemList(todo);
        });
      });
    }
  }

  inputTask.value = "";
});
