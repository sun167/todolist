import { Todo } from "./todo";
export class Project {

    constructor() {
        this.title = "";
        this.todoList = [];
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get todoList() {
        return this._todoList;
    }

    set todoList(todoList) {
        this._todoList = todoList;
    }

    toString() {
        console.log(this.title);
        this._todoList.forEach(element => {
            console.log(element);
        });
    }
}