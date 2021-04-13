import { updateUserData, getToDoData } from "../utils/api";

const TRASH_CAN_URL =
  "https://www.flaticon.com/svg/vstatic/svg/4312/4312055.svg?token=exp=1618335380~hmac=a2e7222d995719d26a88a683330a4b36";

const itemListContainer = document.getElementById("item-list");

function createToDoItem(name, checked, todoList) {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checked;
  const text = document.createElement("p");
  text.innerText = name;
  const remove = document.createElement("img");
  remove.src = TRASH_CAN_URL;
  remove.classList.add("remove-button");

  checkbox.addEventListener("click", () => {
    const newList = todoList.map((element) => {
      if (element.item === name) {
        element.checked = checkbox.checked;
      }

      return element;
    });

    updateUserData(newList, () => {
      getToDoData((json) => createToDoItemList(json.todo));
    });
  });

  remove.addEventListener("click", () => {
    const filteredList = todoList.filter((element) => {
      return element.item !== name;
    });

    updateUserData(filteredList, () => {
      getToDoData((json) => createToDoItemList(json.todo));
    });
  });

  container.appendChild(checkbox);
  container.appendChild(text);
  container.appendChild(remove);

  return container;
}

export function createToDoItemList(todoList) {
  itemListContainer.innerHTML = "";

  for (const itemData of todoList) {
    const itemHtmlRef = createToDoItem(
      itemData.item,
      itemData.checked,
      todoList
    );
    itemListContainer.appendChild(itemHtmlRef);
  }
}
