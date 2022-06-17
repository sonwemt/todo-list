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
            const button = document.createElement('button');
            button.textContent = 'Add Task'; 
            button.id = i;
            button.classList.add('addTask');
            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            card.appendChild(projectName);
            
    
            for(let x = 0; x < projectInfo.getNumberOfItems(); x++) {
                const item = document.createElement('div');
                item.textContent = `Title: ${projectInfo.getToDoItem(x).title}`;
                card.appendChild(item);
            }
            card.appendChild(button);
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
    #projects;
    #displayController;
    #firstRun = true;
    constructor (name) {
        this.#projects = new _toDoProject__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.#displayController = new _display__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
    

    addToDoItem (title, description, dueDate, priority) {
        this.#toDoItems.push(new ToDoItem(title, description, dueDate, priority));
    }
    
    getToDoItem (item) {
        if(item < this.#toDoItems.length && item > -1){
            return this.#toDoItems[item];
        }
        return false;
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsOEJBQThCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBLDZDQUE2QyxpQ0FBaUM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDNUQ4QztBQUNKOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFpQjtBQUM5QyxzQ0FBc0MsZ0RBQWlCO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Qcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY3JlYXRlUGFnZUJvZHkoKTtcbiAgICB9XG4gICAgI2NyZWF0ZVBhZ2VCb2R5ICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RvIERvIExpc3QnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHByb2plY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb2R5LmlkID0gJ3Byb2plY3RCb2R5JztcblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ2FkZFByb2plY3QnO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAoJ0FkZCBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJvZHkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCb2R5Jyk7XG5cbiAgICAgICAgdGhpcy4jY2xlYXJXcmFwcGVyKHdyYXBwZXIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5udW1iZXJPZlByb2plY3RzO2krKykge1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7IFxuICAgICAgICAgICAgYnV0dG9uLmlkID0gaTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBwcm9qZWN0SW5mby5nZXROdW1iZXJPZkl0ZW1zKCk7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3Byb2plY3RJbmZvLmdldFRvRG9JdGVtKHgpLnRpdGxlfWA7XG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2NsZWFyV3JhcHBlciAod3JhcHBlcikge1xuICAgICAgICB3aGlsZSh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG59IiwiaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3RvRG9Qcm9qZWN0XCI7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jbGFzcyBQYWdlQ29udHJvbGxlciB7XG4gICAgI3Byb2plY3RzO1xuICAgICNkaXNwbGF5Q29udHJvbGxlcjtcbiAgICAjZmlyc3RSdW4gPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyID0gbmV3IERpc3BsYXlDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuI2FkZFByb2plY3QobmFtZSk7XG4gICAgfVxuXG4gICAgI3VwZGF0ZVByb2plY3RMaXN0ICgpIHtcbiAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdHModGhpcy4jcHJvamVjdHMpO1xuICAgICAgICB0aGlzLiNjb25maWd1cmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgaWYobmFtZSA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgdGhpcy4jcHJvamVjdHMubmV3UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jcHJvamVjdHMubmV3UHJvamVjdChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuICAgICNjb25maWd1cmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgaWYodGhpcy4jZmlyc3RSdW4pe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jYWRkUHJvamVjdChwcm9tcHQoJ0VudGVyIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0JykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiNmaXJzdFJ1biA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkVGFzaycpO1xuICAgICAgICBhZGRJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSEVPTE9MJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdHMuZ2V0UHJvamVjdChlLnRhcmdldC5pZCkuYWRkVG9Eb0l0ZW0oJ3Rlc3QnLCAnRGVzY3JpcHQnLCAnZGF0ZScsICdsb3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9ICAgIFxuXG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgUGFnZUNvbnRyb2xsZXIoKTtcblxuXG5cblxuXG5cbiIsImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxufVxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUgPSAnRGVmYXVsdCBQcm9qZWN0Jykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuICAgIFxuXG4gICAgYWRkVG9Eb0l0ZW0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jdG9Eb0l0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VG9Eb0l0ZW0gKGl0ZW0pIHtcbiAgICAgICAgaWYoaXRlbSA8IHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggJiYgaXRlbSA+IC0xKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXNbaXRlbV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE51bWJlck9mSXRlbXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb250YWluc1RvRG9JdGVtICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gICAgI2N1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldCBudW1iZXJPZlByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RdO1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dQcm9qZWN0cygpIHtcbiAgICAgICAgaWYodGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9