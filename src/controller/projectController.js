
import { Project } from "../entity/project";
import { addTodo } from "../service/project";
import { createNewTodo , initiateTodoState, setTodoStateToDoing, setTodoStateToDone, setTodoPriorityToUrgent, setTodoPriorityToNormal, setTodoPriorityToNotUrgent} from '../service/todo'


export function showProject() {
    let project = new Project();

    let buttonAddTodo = document.getElementById("button-add-to-do");
    console.log(buttonAddTodo);
    // buttonAddTodo.addEventListener("onclick",addTodoElement(project));
    buttonAddTodo.addEventListener('click',function () {addTodoElement(project)});

}
function test() {
    alert('ok');
}
function addTodoElement(project) {
    let todo = createNewTodo("test","test","test")
    addTodo(project, todo);
    let todoListDiv = document.getElementById("todoList");
    let titleDiv = document.createElement("div");
    titleDiv.textContent  = todo.title;
    todoListDiv.appendChild(titleDiv);
    console.log(project);
}