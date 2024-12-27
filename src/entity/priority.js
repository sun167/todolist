
export class Priority {

    constructor() {
        this.title = "";
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    toString() {
        console.log(this.title);
    }
    
    equals(priority) {
        return state.priority == this.priority;
    }
}