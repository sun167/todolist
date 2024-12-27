import { Priority } from "./priority";
import { State } from "./state";
export class Todo {
    constructor() {
        this.title = "";
        this.description = "";
        this.dueDate = "";
        this.priority = new Priority();
        this.state = new State();
    };

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(priority) {
        this._priority = priority;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    toString() {
        console.log(this.title + this.description + this.dueDate + this.priority + this.state);
    }

    equals(todo) {
        return todo.title == this.title && todo.description == this.description && todo.dueDate == this.dueDate && todo.priority.equals(this.priority) && todo.state.equals(this.state); 
    }
}
