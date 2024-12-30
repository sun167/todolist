import { State } from "../entity/state";
export let states = [];

function createNewState(states, newStateTitle) {
  let state = new State();
  state.title = newStateTitle;
  states.push(state);
}

createNewState(states, "To Do");
createNewState(states, "Doing");
createNewState(states, "Done");
