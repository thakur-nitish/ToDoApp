const inputBox = document.getElementById("task");
const addBtn = document.getElementById("add");
const message = document.getElementById("message");
const rootDiv = document.getElementById("root");
const liDiv = document.getElementById("liDiv");
const taskArr = [];
function addTaskDiv() {
  const liDiv = document.getElementById("liDiv");
  rootDiv.removeChild(liDiv);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "liDiv");
  taskArr.forEach((ele) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    li.innerText = ele;
    newDiv.append(li);
  });
  rootDiv.append(newDiv);
}
function addTask() {
  const value = inputBox.value;
  if (value === "") {
    message.innerText = "Please enter the name of Task";
    message.setAttribute("class", "error");
  } else {
    message.innerText = "The task has been added ! ";
    message.setAttribute("class", "success");
    inputBox.value = "";
    taskArr.push(value);
    addTaskDiv();
  }
}

addBtn.addEventListener("click", addTask);
