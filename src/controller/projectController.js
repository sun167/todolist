import { Project } from "../entity/project";
import { addTodo, addProjectToProjects } from "../service/project";
import {
  createNewTodo, 
  initiateTodoState,
  setTodoStateToDoing,
  setTodoStateToDone,
  setTodoPriorityToUrgent,
  setTodoPriorityToNormal,
  setTodoPriorityToNotUrgent,
} from "../service/todo";

export function main() {
  initiateProject();
  showProjects();
}

function showProject(id) {
  let projects =JSON.parse(localStorage.getItem("projects"));
  let project = projects[id - 1];
  let projectName = document.getElementById("project-name");
  const projectNameHeader = document.createElement("h1");
  projectNameHeader.textContent = project.title;
  projectName.appendChild(projectNameHeader);

  
  initiateTodoList(project);
  initiateDoinglist();
  initiateDonelist();
}

function initiateProject() {
  let projects = [];

  let project = new Project();
  project.title = "Test Project";

  projects.push[project];

  localStorage.setItem("projects", JSON.stringify(projects));
  let projectName = document.getElementById("project-name");
  const projectNameHeader = document.createElement("h1");
  projectNameHeader.textContent = project.title;
  projectName.appendChild(projectNameHeader);

  addProjectToProjects(project);

  initiateTodoList(project);
  initiateDoinglist();
  initiateDonelist();
}

function clearProjectContent() {
  let content = document.getElementById("content-body");
  content.innerHTML = "";
}
function showProjects() {
  
  let buttonAddProject = document.getElementById("button-add-project");

  buttonAddProject.addEventListener("click", function() {
    addProject();
  });
  let inputProjectTitle = document.createElement("input");
  inputProjectTitle.id = "input-project-title";
  inputProjectTitle.placeholder = "e.g: Date night at McDonald's"
  buttonAddProject.before(inputProjectTitle);
  let projects =JSON.parse(localStorage.getItem("projects"));
  projects.forEach(project => {
    console.log(project);
    console.log(project._title);
    showProjectOnTheLeft(project);
  });
}

function showProjectOnTheLeft(project) {
  let projectHeader = document.getElementById("project-header");
  let projectDiv = document.createElement("div");

  projectDiv.id = "project-div";

  projectDiv.addEventListener("click", function() {
    clearProjectContent();
    showProject(project.id);
  });
  let projectTitleDiv = document.createElement("div");
  projectTitleDiv.id = "project-title-div";
  // TODO not clean find another way
  projectTitleDiv.textContent = project.title;
  projectTitleDiv.textContent = project._title;

  projectDiv.appendChild(projectTitleDiv);

  projectHeader.after(projectDiv);

  console.log(projectDiv);
  console.log(projectHeader);
}
function addProject() {
  let inputTitle = document.getElementById("input-project-title");

  let project = new Project();
  project.title = inputTitle.value;

  addProjectToProjects(project);

  showProjectOnTheLeft(project); 
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