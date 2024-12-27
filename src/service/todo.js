import { states } from "./state";
import { priorities } from "./priority";
import { Todo } from "../entity/todo";

export function createNewTodo(title, description, dueDate){
    let todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    initiateTodoState(todo);
    setTodoPriorityToNormal(todo);
    return todo;
}

export function initiateTodoState(todo) {
    todo.state = states[0];
}

export function setTodoStateToDoing(todo) {
    todo.state = states[1];
}

export function setTodoStateToDone(todo) {
    todo.state = states[2];
}

export function setTodoPriorityToUrgent(todo) {
    todo.priority = priorities[0];
}

export function setTodoPriorityToNormal(todo) {
    todo.priority = priorities[1];
}

export function setTodoPriorityToNotUrgent(todo) {
    todo.priority = priorities[2];
}