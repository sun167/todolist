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

  const todoListHeader = document.createElement("h2");
  todoListHeader.id = "todoList-header";
  todoListHeader.textContent = "To Do";

  todoListDiv.prepend(todoListHeader);

  let buttonAddTodo = document.getElementById("button-add-to-do");
  buttonAddTodo.addEventListener("click", function () {
    addTodoElement(project);
  });

  let inputTitle = document.createElement("input");
  inputTitle.id = "input-title";
  buttonAddTodo.before(inputTitle);

  let inputDate = document.createElement("input");
  inputDate.id = "input-date";
  inputDate.type = "datetime-local";
  buttonAddTodo.before(inputDate);
}

function initiateDoinglist() {
  let doingListDiv = document.getElementById("doingList");

  const doingListHeader = document.createElement("h2");
  doingListHeader.textContent = "Doing";

  doingListDiv.appendChild(doingListHeader);
}

function initiateDonelist() {
  let doneListDiv = document.getElementById("doneList");

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

  let titleDiv = document.createElement("div");
  titleDiv.textContent = todo.title;
  todoDiv.appendChild(titleDiv);

  let dateDiv = document.createElement("div");
  dateDiv.textContent = todo.dueDate;
  todoDiv.appendChild(dateDiv);

  todoListHeader.after(todoDiv);
}
