export function addTodo(project, todo) {
    let todoList = project.todoList;
  if (todoList.length > 0) {
    todo.id = todoList.length + 1;
  } else {
    todo.id = 1;
}
  todoList.push(todo);
}
