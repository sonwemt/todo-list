"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayController)
/* harmony export */ });
class DisplayController {
    constructor() {
        this.#createPageBody();
    }
    #createPageBody () {
        const wrapper = document.getElementById('content');
        const header = document.createElement('div');
        const headerText = document.createTextNode('To Do List');
        header.classList.add('header');
        header.appendChild(headerText);
        

        const projectBody = document.createElement('div');
        projectBody.id = 'projectBody';

        const addButton = document.createElement('button');
        addButton.id = 'addProject';
        addButton.textContent = ('Add Project');
        
        
        wrapper.appendChild(header);
        wrapper.appendChild(addButton);
        wrapper.appendChild(projectBody);
        
    }

    updateProjects(projects) {
        const wrapper = document.getElementById('projectBody');

        this.#clearWrapper(wrapper);

        for(let i = 0; i < projects.numberOfProjects;i++) {

            const card = document.createElement('div');
            card.classList.add(`project`);
            card.id = i;
            const addButton = document.createElement('button');
            addButton.textContent = 'Add Task'; 
            addButton.id = i;
            addButton.classList.add('addTask');
            const cardContent = document.createElement('div');
            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            card.appendChild(projectName);
            
            cardContent.id = i;
            cardContent.classList.add('items');
    
            for(let x = 0; x < projectInfo.NumberOfItems; x++) {
                const item = document.createElement('div');
                item.textContent = `Title: ${projectInfo.getToDoItem(x).title}`;
                cardContent.appendChild(item);

                const removeItem = document.createElement('button');
                removeItem.textContent = 'Remove';
                removeItem.classList.add(`removeItem`);
                removeItem.id = x;
                cardContent.appendChild(removeItem);

            }
            card.appendChild(addButton);
            card.appendChild(cardContent);
            wrapper.appendChild(card);
        }
    }
    #clearWrapper (wrapper) {
        while(wrapper.firstChild) {
            wrapper.removeChild(wrapper.lastChild);
        }
    }
    

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoProject */ "./src/toDoProject.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



class PageController {
    #projectController;
    #displayController;
    #firstRun = true;
    constructor (name) {
        this.#projectController = new _toDoProject__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.#displayController = new _display__WEBPACK_IMPORTED_MODULE_1__["default"]();
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








/***/ }),

/***/ "./src/toDoProject.js":
/*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectController)
/* harmony export */ });
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

    consoleLogItems () {
        console.log(this.#title + ' ' + this.#description + ' ' + this.#dueDate + ' ' + this.#priority)
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
    #currentProjects = [];

    get numberOfProjects () {
        return this.#currentProjects.length;
    }


    newProject (name) {
        let project = new ToDoProject(name);
        this.#currentProjects.push(project);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsOEJBQThCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQSw2Q0FBNkMsaUNBQWlDO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDekU4QztBQUNKOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9EQUFpQjtBQUN2RCxzQ0FBc0MsZ0RBQWlCO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVBhZ2VCb2R5KCk7XG4gICAgfVxuICAgICNjcmVhdGVQYWdlQm9keSAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUbyBEbyBMaXN0Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm9keS5pZCA9ICdwcm9qZWN0Qm9keSc7XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gKCdBZGQgUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Qm9keScpO1xuXG4gICAgICAgIHRoaXMuI2NsZWFyV3JhcHBlcih3cmFwcGVyKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0cztpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0YCk7XG4gICAgICAgICAgICBjYXJkLmlkID0gaTtcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJzsgXG4gICAgICAgICAgICBhZGRCdXR0b24uaWQgPSBpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmlkID0gaTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcHJvamVjdEluZm8uTnVtYmVyT2ZJdGVtczsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdEluZm8uZ2V0VG9Eb0l0ZW0oeCkudGl0bGV9YDtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5jbGFzc0xpc3QuYWRkKGByZW1vdmVJdGVtYCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5pZCA9IHg7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY2xlYXJXcmFwcGVyICh3cmFwcGVyKSB7XG4gICAgICAgIHdoaWxlKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbn0iLCJpbXBvcnQgUHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vdG9Eb1Byb2plY3RcIjtcbmltcG9ydCBEaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNsYXNzIFBhZ2VDb250cm9sbGVyIHtcbiAgICAjcHJvamVjdENvbnRyb2xsZXI7XG4gICAgI2Rpc3BsYXlDb250cm9sbGVyO1xuICAgICNmaXJzdFJ1biA9IHRydWU7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIgPSBuZXcgRGlzcGxheUNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy4jYWRkUHJvamVjdChuYW1lKTtcbiAgICB9XG5cbiAgICAjdXBkYXRlUHJvamVjdExpc3QgKCkge1xuICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci51cGRhdGVQcm9qZWN0cyh0aGlzLiNwcm9qZWN0Q29udHJvbGxlcik7XG4gICAgICAgIHRoaXMuI2NvbmZpZ3VyZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI2FkZFByb2plY3QobmFtZSkge1xuICAgICAgICBpZihuYW1lID09PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdCwgaXRlbSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0KHByb2plY3QpLnJlbW92ZVRvRG9JdGVtKGl0ZW0pO1xuICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuXG4gICAgI2NvbmZpZ3VyZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICBpZih0aGlzLiNmaXJzdFJ1bil7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNhZGRQcm9qZWN0KHByb21wdCgnRW50ZXIgYSBuYW1lIGZvciB5b3VyIHByb2plY3QnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuI2ZpcnN0UnVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRJdGVtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRUYXNrJyk7XG4gICAgICAgIGFkZEl0ZW1CdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIRU9MT0wnKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRoaXMuI3Byb2plY3RDb250cm9sbGVyLmdldFByb2plY3QoZS50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Eb0l0ZW0oYHRlc3Qke3Byb2plY3QuTnVtYmVyT2ZJdGVtc31gLCAnRGVzY3JpcHQnLCAnZGF0ZScsICdsb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlSXRlbScpO1xuICAgICAgICByZW1vdmVJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRoaXMuI3Byb2plY3RDb250cm9sbGVyLmdldFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUb0RvSXRlbShlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0gICAgXG5cbn1cblxuY29uc3QgcGFnZSA9IG5ldyBQYWdlQ29udHJvbGxlcigpO1xuXG5cblxuXG5cblxuIiwiY2xhc3MgVG9Eb0l0ZW0ge1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI2R1ZURhdGU7XG4gICAgI3ByaW9yaXR5O1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uIChkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZSAoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5IChwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dJdGVtcyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuI3RpdGxlICsgJyAnICsgdGhpcy4jZGVzY3JpcHRpb24gKyAnICcgKyB0aGlzLiNkdWVEYXRlICsgJyAnICsgdGhpcy4jcHJpb3JpdHkpXG4gICAgfVxuXG59XG5cbmNsYXNzIFRvRG9Qcm9qZWN0IHtcbiAgICAjcHJvamVjdE5hbWU7XG4gICAgI3RvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0TmFtZSA9ICdEZWZhdWx0IFByb2plY3QnKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJdGVtcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBcblxuICAgIGFkZFRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RvRG9JdGVtcy5wdXNoKG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0gKGluZGV4KSB7XG4gICAgICAgIGlmKHRoaXMuY29udGFpbnNUb0RvSXRlbSgpKXtcbiAgICAgICAgICAgIHRoaXMuI3RvRG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFRvRG9JdGVtIChpdGVtKSB7XG4gICAgICAgIGlmKGl0ZW0gPCB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoICYmIGl0ZW0gPiAtMSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnRhaW5zVG9Eb0l0ZW0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgICAjY3VycmVudFByb2plY3RzID0gW107XG5cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoO1xuICAgIH1cblxuXG4gICAgbmV3UHJvamVjdCAobmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBUb0RvUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RdO1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dQcm9qZWN0cygpIHtcbiAgICAgICAgaWYodGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9