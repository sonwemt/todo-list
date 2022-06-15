class ToDoItem {
    #title;
    #description;
    #dueDate;
    #priority;
    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }
    get title() {
        return this.#title;
    }
    get description () {
        return this.#description;
    }
    get dueDate () {
        return this.#dueDate;
    }
    get priority () {
        return this.#priority;
    }
    consoleLogItems () {
        console.log(this.#title + ' ' + this.#description + ' ' + this.#dueDate + ' ' + this.#priority)
    }

}

class ToDoProject {
    #projectName;
    #toDoItems = [];
    constructor (projectName) {
        this.#projectName = projectName;
    }

    get name() {
        return this.#projectName;
    }
    

    addToDoItem (title, description, dueDate, priority) {
        this.#toDoItems.push(new ToDoItem(title, description, dueDate, priority));
    }
    
    getToDoItem (item) {
        return this.#toDoItems[item];
    }

    getNumberOfItems () {
        return this.#toDoItems.length;
    }

    containsToDoItem () {
        return this.#toDoItems.length > 0;
    }

}

class ProjectController {
    #currentProjects = [];
    constructor () {
        this.newProject("default");  
    }
    newProject (name) {
        let project = new ToDoProject(name);
        this.#currentProjects.push(project);
    }

    get numberOfProjects () {
        return this.#currentProjects.length;
    }

    getProject (project) {
        return this.#currentProjects[project];
    }

    consoleLogProjects() {
        if(this.#currentProjects.length) {
            for(let project of this.#currentProjects) {
                console.log(project);
            }
        }
    }
}

export {ToDoItem, ToDoProject, ProjectController};