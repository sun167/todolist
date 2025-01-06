export function addTodo(project, todo) {
    let todoList = project.todoList;
  if (todoList.length > 0) {
    todo.id = todoList.length + 1;
  } else {
    todo.id = 1;
}
  todoList.push(todo);
}

export function addProjectToProjects(project) {
  let projects =JSON.parse(localStorage.getItem("projects"));
  if (projects.length > 0) {
    project.id = projects.length + 1;
  } else {
    project.id = 1;
}
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log(projects);
}