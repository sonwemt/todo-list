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

    set title(title) {
        this.#title = title;
    }

    set description (description) {
        this.#description = description;
    }

    set dueDate (dueDate) {
        this.#dueDate = dueDate;
    }
    
    set priority (priority) {
        this.#priority = priority;
    }

    get toJson () {
        return {title: this.#title, description: this.#description, dueDate: this.#dueDate, priority: this.#priority};
    }

}


class ToDoProject {
    #projectName;
    #toDoItems = [];
    constructor (projectName = 'Default Project') {
        this.#projectName = projectName;
    }

    get name() {
        return this.#projectName;
    }

    get NumberOfItems () {
        return this.#toDoItems.length;
    }

    get toJson () {
        let jsonReadyItems = [];
        for(let item of this.#toDoItems) {
            jsonReadyItems.push(item.toJson);
        }
        return {projectName: this.#projectName, toDoItems: jsonReadyItems};
    }

    addToDoItem (title, description, dueDate, priority) {
        this.#toDoItems.push(new ToDoItem(title, description, dueDate, priority));
    }

    removeToDoItem (index) {
        if(this.containsToDoItem()){
            this.#toDoItems.splice(index, 1);
        }
    }
    
    getToDoItem (item) {
        if(item < this.#toDoItems.length && item > -1){
            return this.#toDoItems[item];
        }
        return false;
    }

    containsToDoItem () {
        return this.#toDoItems.length > 0;
    }
}

class ProjectController {
    #currentProjects = [new ToDoProject()];
    constructor () {
        if(!localStorage.getItem('currentProjects')){
            this.#updateLocalStorage();
        } else{
            this.#getLocalStorage();
        }   
    }
    
    get numberOfProjects () {
        return this.#currentProjects.length;
    }

    #toJson () {
        let stringedArray = [];
        for(let project of this.#currentProjects) {
            stringedArray.push(project.toJson);
        }
        return JSON.stringify(stringedArray);
    }

    #fromJson(json) {
        let data = JSON.parse(json);

        let returnArray = data.map(project => {
            let projectObj = new ToDoProject(project.projectName);
            project.toDoItems.map(item => projectObj.addToDoItem(item.title, item.description, item.dueDate, item.priority))
            return projectObj;
        });
        return returnArray;
    }

    #updateLocalStorage() {
        let jsonArray = this.#toJson();
        localStorage.setItem('currentProjects', jsonArray);
    }

    #getLocalStorage () {
        let storedArray = localStorage.getItem('currentProjects');
        let parsedArray = this.#fromJson(storedArray);
        this.#currentProjects = parsedArray;
        this.#updateLocalStorage();
    }

    newProject (name) {
        let project = new ToDoProject(name);
        this.#currentProjects.push(project);
        this.#updateLocalStorage();
    }

    getProject (projectIndex) {
        return this.#currentProjects[projectIndex];
    }
    
    addToDoItem(project, title, description, dueDate, priority){
        this.#currentProjects[project].addToDoItem(title, description, dueDate, priority);
        this.#updateLocalStorage();
    }

    removeToDoItem(projectIndex, item) {
        this.#currentProjects[projectIndex].removeToDoItem(item);
        this.#updateLocalStorage();
    }

    removeProject(projectIndex) {
        this.#currentProjects.splice(projectIndex, 1);
        this.#updateLocalStorage();
    }
}

export { ProjectController };