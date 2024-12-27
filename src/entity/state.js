export class State {

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

    equals(state) {
        return state.title == this.title;
    }
}