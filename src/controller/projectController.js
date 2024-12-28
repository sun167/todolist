
import { Project } from "../entity/project";
import { addTodo } from "../service/project";
import { createNewTodo , initiateTodoState, setTodoStateToDoing, setTodoStateToDone, setTodoPriorityToUrgent, setTodoPriorityToNormal, setTodoPriorityToNotUrgent} from '../service/todo'


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
    buttonAddTodo.addEventListener('click', function () {
        addTodoElement(project);
    });
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
    let todo = createNewTodo("test","test","test")
    addTodo(project, todo);
    let todoListHeader = document.getElementById("todoList-header");
    let titleDiv = document.createElement("div");
    titleDiv.textContent  = todo.title;
    titleDiv.draggable = "true";
    todoListHeader.after(titleDiv);
}