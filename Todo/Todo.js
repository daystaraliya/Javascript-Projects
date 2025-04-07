let todoList = [
  {
    items: "Buy Milk",
    dueDate: "22/03/2025",
  },
  {
    items: "college",
    dueDate: "22/03/2025",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ items: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { items, dueDate } = todoList[i];

    newHtml += `
            
            <span>${items}</span>
            <span>${dueDate}</span>
            <button class="delete-btn" onClick="todoList.splice(${i} , 1);
                    displayItems();
            ">Delete</button>
            
        `;
  }
  containerElement.innerHTML = newHtml;
}
