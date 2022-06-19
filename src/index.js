import ProjectController from "./toDoProject";
import DisplayController from "./display";

class PageController {
    #projectController;
    #displayController;
    #firstRun = true;
    constructor (name) {
        this.#projectController = new ProjectController();
        this.#displayController = new DisplayController();
        this.#addProject(name);
    }

    #updateProjectList () {
        this.#displayController.updateProjects(this.#projectController);
        this.#configureEventListeners();
    }

    #addProject(name) {
        if(name === 'undefined'){
            this.#projectController.newProject();
        }
        else {
            this.#projectController.newProject(name);
        }
        this.#updateProjectList();
    }

    removeToDoItem(project, item) {
        this.#projectController.getProject(project).removeToDoItem(item);
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
                let project = this.#projectController.getProject(e.target.id);
                project.addToDoItem(`test${project.NumberOfItems}`, 'Descript', 'date', 'low');
                this.#updateProjectList();
            });
        })

        const removeItemButtons = document.querySelectorAll('.removeItem');
        removeItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                let project = this.#projectController.getProject(e.target.parentElement.id);
                project.removeToDoItem(e.target.id);
                this.#updateProjectList();
            })
        });
    }    

}

const page = new PageController();






