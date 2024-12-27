import { Priority } from "../entity/priority";

export let priorities = [];

function createNewPriority(priorities, newPriorityTitle){
    let priority = new Priority();
    priority.title = newPriorityTitle;
    priorities.push(priority);
}

createNewPriority(priorities, "Urgent");
createNewPriority(priorities, "Normal");
createNewPriority(priorities, "Not urgent");