import { ProjectController } from "./toDoProject";
import DisplayController from "./display";

class PageController {
    #projects;
    #DisplayController;
    constructor () {
        this.#projects = new ProjectController();
        this.#DisplayController = new DisplayController();
    }

    addProject(name) {
        this.#projects.newProject(name);
    }

    updateProjects () {
        this.#DisplayController.updateProjects(this.#projects);
    }

    get projectList () {
        return this.#projects;
    }

}

const page = new PageController();
let pageList = page.projectList;
console.log(pageList.consoleLogProjects());
let curPro = pageList.getProject(0);

curPro.addToDoItem("todo1", "loremi psu msd", 1995, "top");
curPro.addToDoItem("todolist2", "holesgs", 1995, "medium");
curPro.addToDoItem("todo3", "hofafsdgdf", 1995, "low");


let firstItemUpd = curPro.getToDoItem(0);
console.log(firstItemUpd.consoleLogItems());

page.addProject('test1');
page.addProject('test5');
page.addProject('test2');


page.updateProjects();


