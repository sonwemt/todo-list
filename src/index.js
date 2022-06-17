import ProjectController from "./toDoProject";
import DisplayController from "./display";

class PageController {
    #projects;
    #displayController;
    #firstRun = true;
    constructor (name) {
        this.#projects = new ProjectController();
        this.#displayController = new DisplayController();
        this.#addProject(name);
    }

    #updateProjectList () {
        this.#displayController.updateProjects(this.#projects);
        this.#configureEventListeners();
    }

    #addProject(name) {
        if(name === 'undefined'){
            this.#projects.newProject();
        }
        else {
            this.#projects.newProject(name);
        }
        this.#updateProjectList();
    }

    #configureEventListeners() {
        const addButton = document.getElementById('addProject');
        if(this.#firstRun){
            
            addButton.addEventListener('click', () => {
                this.#addProject(prompt('Enter a name for your project'));
            });
            this.#firstRun = false;
        }

        const addItemButtons = document.querySelectorAll('.addTask');
        addItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log('HEOLOL');
                this.#projects.getProject(e.target.id).addToDoItem('test', 'Descript', 'date', 'low');
                this.#updateProjectList();
            });
        })

    }    

}

const page = new PageController();






