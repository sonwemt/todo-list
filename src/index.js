import ProjectController from "./toDoProject";
import DisplayController from "./display";
import "./style.css";

class PageController {
    #projectController;
    #displayController; 
    #projectFormActive = false;
    constructor () {
        this.#projectController = new ProjectController();
        this.#displayController = new DisplayController();
        this.addProjectAddListener();
        this.#updateProjectList();
    }



    #updateProjectList () {
        this.#displayController.updateProjects(this.#projectController);
        this.addProjectRemovalListener();
        this.addItemAddListeners();
        this.addItemRemovalListener();
    }

    #addProject(name) {
        this.#projectController.newProject(name);
        this.#updateProjectList();
    }

    #removeProject (projectIndex) {
        this.#projectController.removeProject(projectIndex);
        this.#updateProjectList();
    }

    #addToDoItem(project, title, description, dueDate, priority) {
        this.#projectController.addToDoItem(project, title, description, dueDate, priority);
    }

    #removeToDoItem(projectIndex, item) {
        this.#projectController.removeToDoItem(projectIndex, item);
        this.#updateProjectList();
    }

    addProjectAddListener () {
        const addProjectButton = document.getElementById('addProjectButton');
            
        addProjectButton.addEventListener('click', () => {
            if(!this.#projectFormActive){
                console.log('addprojectif');
                this.#displayController.createProjectForm();
                this.#projectFormActive = true;
                this.addProjectSubmitListener();
            }
            else {
                console.log('addprojectelse');
                this.#displayController.removeProjectForm();
                this.#projectFormActive = false;
            }
        });
    }

    addProjectSubmitListener() {
        const submitButton = document.querySelector('#submitProject');
        const projectInput = document.querySelector('#projectInput');
        const addProjectButton = document.getElementById('addProjectButton');
        submitButton.addEventListener('click', () => {
            this.#addProject(projectInput.value);
            this.#displayController.removeProjectForm();
            this.#projectFormActive = false;
            this.#updateProjectList();
        });
    }
            
    addProjectRemovalListener() {
        const removeProjectButtons = document.querySelectorAll('.removeProject');
        removeProjectButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log(`removeButtonClicked${e.target.getAttribute('data-id')}`);
                this.#removeProject(e.target.getAttribute('data-id'));
                this.#updateProjectList();
            });
        });
    }

    addItemAddListeners () {
        const addItemButtons = document.querySelectorAll('.addTask');
        addItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                if(document.getElementById('addItemOverlay') === null){
                    let projectIndex = e.target.getAttribute('data-id');
                    this.#displayController.createToDoItemForm(projectIndex);
                    
                    const overlay = document.getElementById('addItemOverlay');

                    let submitButton = document.getElementById('submitToDoItem');
                    submitButton.addEventListener('click', () => {
                        this.#addToDoItem(projectIndex, itemTitle.value, itemDescription.value, itemDate.value, itemPriority.value);
                        this.#updateProjectList();
                        overlay.remove();
                    });
                    
                    window.addEventListener('keydown', function escapeHit(e) {
                        if(e.key === 'Escape'){
                            overlay.remove();
                            window.removeEventListener('keydown', escapeHit);
                        }
                    });
                    

                    let closeOverlay = document.createElement('div');
                    closeOverlay.id = 'closeOverlay';
                    closeOverlay.textContent = 'X';
                    closeOverlay.addEventListener('click', () => {overlay.remove();});
                    overlay.appendChild(closeOverlay);

                }
            });
        });
    }
    
    addItemRemovalListener() {
        const removeItemButtons = document.querySelectorAll('.removeItem');
        removeItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                let project = e.target.closest('.project').getAttribute('data-id');
                let item = e.target.getAttribute('data-id');
                this.#removeToDoItem(project, item);
                this.#updateProjectList();
            })
        });
    }
}

const page = new PageController();






