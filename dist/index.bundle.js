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
        header.classList.add('header');
        header.textContent = 'To Do List';
        
        

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
            addButton.classList.add('addTask');
            addButton.id = i;
            
            const cardContent = document.createElement('div');
            cardContent.classList.add('items');
            cardContent.id = i;

            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            projectName.classList.add('projectTitle');
            card.appendChild(projectName);
            
            
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDhCQUE4Qjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0EsNkNBQTZDLGlDQUFpQztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoRjhDO0FBQ0o7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0RBQWlCO0FBQ3ZELHNDQUFzQyxnREFBaUI7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Qcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY3JlYXRlUGFnZUJvZHkoKTtcbiAgICB9XG4gICAgI2NyZWF0ZVBhZ2VCb2R5ICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvIERvIExpc3QnO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEJvZHkuaWQgPSAncHJvamVjdEJvZHknO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24uaWQgPSAnYWRkUHJvamVjdCc7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICgnQWRkIFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJvZHknKTtcblxuICAgICAgICB0aGlzLiNjbGVhcldyYXBwZXIod3JhcHBlcik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm51bWJlck9mUHJvamVjdHM7aSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChgcHJvamVjdGApO1xuICAgICAgICAgICAgY2FyZC5pZCA9IGk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJzsgXG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmlkID0gaTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5pZCA9IGk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdHMuZ2V0UHJvamVjdChpKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RJbmZvLm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBwcm9qZWN0SW5mby5OdW1iZXJPZkl0ZW1zOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtwcm9qZWN0SW5mby5nZXRUb0RvSXRlbSh4KS50aXRsZX1gO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLmNsYXNzTGlzdC5hZGQoYHJlbW92ZUl0ZW1gKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLmlkID0geDtcblxuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJlbW92ZUl0ZW0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2NsZWFyV3JhcHBlciAod3JhcHBlcikge1xuICAgICAgICB3aGlsZSh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG59IiwiaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3RvRG9Qcm9qZWN0XCI7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jbGFzcyBQYWdlQ29udHJvbGxlciB7XG4gICAgI3Byb2plY3RDb250cm9sbGVyO1xuICAgICNkaXNwbGF5Q29udHJvbGxlcjtcbiAgICAjZmlyc3RSdW4gPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyID0gbmV3IERpc3BsYXlDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuI2FkZFByb2plY3QobmFtZSk7XG4gICAgfVxuXG4gICAgI3VwZGF0ZVByb2plY3RMaXN0ICgpIHtcbiAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdHModGhpcy4jcHJvamVjdENvbnRyb2xsZXIpO1xuICAgICAgICB0aGlzLiNjb25maWd1cmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgaWYobmFtZSA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtKHByb2plY3QsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdChwcm9qZWN0KS5yZW1vdmVUb0RvSXRlbShpdGVtKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cblxuICAgICNjb25maWd1cmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgaWYodGhpcy4jZmlyc3RSdW4pe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jYWRkUHJvamVjdChwcm9tcHQoJ0VudGVyIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0JykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiNmaXJzdFJ1biA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkVGFzaycpO1xuICAgICAgICBhZGRJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSEVPTE9MJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0KGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvRG9JdGVtKGB0ZXN0JHtwcm9qZWN0Lk51bWJlck9mSXRlbXN9YCwgJ0Rlc2NyaXB0JywgJ2RhdGUnLCAnbG93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUl0ZW1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZUl0ZW0nKTtcbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9Eb0l0ZW0oZS50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9ICAgIFxuXG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgUGFnZUNvbnRyb2xsZXIoKTtcblxuXG5cblxuXG5cbiIsImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxufVxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUgPSAnRGVmYXVsdCBQcm9qZWN0Jykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IE51bWJlck9mSXRlbXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgXG5cbiAgICBhZGRUb0RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtIChpbmRleCkge1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5zVG9Eb0l0ZW0oKSl7XG4gICAgICAgICAgICB0aGlzLiN0b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb0RvSXRlbSAoaXRlbSkge1xuICAgICAgICBpZihpdGVtIDwgdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCAmJiBpdGVtID4gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb250YWluc1RvRG9JdGVtICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gICAgI2N1cnJlbnRQcm9qZWN0cyA9IFtdO1xuXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aDtcbiAgICB9XG5cblxuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldFByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nUHJvamVjdHMoKSB7XG4gICAgICAgIGlmKHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==