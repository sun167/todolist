import { Project } from "../entity/project";
import { addTodo } from "../service/project";
import {
  createNewTodo,
  initiateTodoState,
  setTodoStateToDoing,
  setTodoStateToDone,
  setTodoPriorityToUrgent,
  setTodoPriorityToNormal,
  setTodoPriorityToNotUrgent,
} from "../service/todo";

export function showProject() {
  let project = new Project();
  project.title = "Test Project";
  let projectName = document.getElementById("project-name");
  const projectNameHeader = document.createElement("h1");
  projectNameHeader.textContent = project.title;
  projectName.appendChild(projectNameHeader);
  initiateTodoList(project);
  initiateDoinglist();
  initiateDonelist();
}

function initiateTodoList(project) {
  let todoListDiv = document.getElementById("todoList");
  addDropListeners(todoListDiv);

  const todoListHeader = document.createElement("h2");
  todoListHeader.id = "todoList-header";
  todoListHeader.textContent = "To Do";
  todoListDiv.addEventListener("drop", drop);

  todoListDiv.prepend(todoListHeader);

  let buttonAddTodo = document.getElementById("button-add-to-do");
  buttonAddTodo.addEventListener("click", function () {
    addTodoElement(project);
  });

  let inputTitle = document.createElement("input");
  inputTitle.id = "input-title";
  inputTitle.placeholder = "e.g: Date night at McDonald's"
  buttonAddTodo.before(inputTitle);


  let inputDate = document.createElement("input");
  inputDate.id = "input-date";
  inputDate.type = "datetime-local";
  buttonAddTodo.before(inputDate);
}

function initiateDoinglist() {
  let doingListDiv = document.getElementById("doingList");
  addDropListeners(doingListDiv);
  const doingListHeader = document.createElement("h2");
  doingListHeader.textContent = "Doing";

  doingListDiv.appendChild(doingListHeader);
}

function initiateDonelist() {
  let doneListDiv = document.getElementById("doneList");
  addDropListeners(doneListDiv);
  const doneListHeader = document.createElement("h2");
  doneListHeader.textContent = "Done";

  doneListDiv.appendChild(doneListHeader);
}

function addTodoElement(project) {
  let inputTitle = document.getElementById("input-title");
  let inputDate = document.getElementById("input-date");
  console.log(inputTitle.value);
  console.log(inputDate.value);

  let todo = createNewTodo(inputTitle.value, "test", inputDate.value);
  addTodo(project, todo);
  let todoListHeader = document.getElementById("todoList-header");
  let todoDiv = document.createElement("div");
  todoDiv.draggable = "true";
  todoDiv.addEventListener('dragstart', dragStart);

    todoDiv.id = "todo-div";

  let titleDiv = document.createElement("div");
  titleDiv.id = "title-div";
  titleDiv.textContent = todo.title;
  todoDiv.appendChild(titleDiv);

  let dateDiv = document.createElement("div");
  dateDiv.id = "date-div";
  dateDiv.textContent = todo.dueDate;
  todoDiv.appendChild(dateDiv);

  todoListHeader.after(todoDiv);

  console.log(project);
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function drop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function addDropListeners(div){
    div.addEventListener('dragenter', dragEnter)
    div.addEventListener('dragover', dragOver);
    div.addEventListener('drop', drop);
}