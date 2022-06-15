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
        wrapper.appendChild(header);

        const projectBody = document.createElement('div');
        projectBody.classList.add('projectBody');
        wrapper.appendChild(projectBody);
    }

    updateProjects(projects) {
        const wrapper = document.querySelector('.projectBody');

        this.#clearWrapper(wrapper);

        for(let i = 0; i < projects.numberOfProjects;i++) {

            const card = document.createElement('div');
            const projectInfo = projects.getProject(i);
            const projectName = document.createTextNode(projectInfo.name);
            card.appendChild(projectName);
           
            if(projectInfo.containsToDoItem()) {
                for(let x = 0; x < projectInfo.getNumberOfItems(); x++) {
                    const item = document.createElement('div');
                    const itemText = document.createTextNode(`Title: ${projectInfo.getToDoItem(x).title}`);
                    item.appendChild(itemText);
                    card.appendChild(item);
                }
            }
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
    #DisplayController;
    constructor () {
        this.#projects = new _toDoProject__WEBPACK_IMPORTED_MODULE_0__.ProjectController();
        this.#DisplayController = new _display__WEBPACK_IMPORTED_MODULE_1__["default"]();
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




/***/ }),

/***/ "./src/toDoProject.js":
/*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectController": () => (/* binding */ ProjectController),
/* harmony export */   "ToDoItem": () => (/* binding */ ToDoItem),
/* harmony export */   "ToDoProject": () => (/* binding */ ToDoProject)
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDhCQUE4Qjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9DQUFvQztBQUNuRTtBQUNBLHVFQUF1RSxpQ0FBaUM7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Q2tEO0FBQ1I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJEQUFpQjtBQUM5QyxzQ0FBc0MsZ0RBQWlCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNjcmVhdGVQYWdlQm9keSgpO1xuICAgIH1cbiAgICAjY3JlYXRlUGFnZUJvZHkgKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVG8gRG8gTGlzdCcpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb2R5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RCb2R5Jyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJvZHkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEJvZHknKTtcblxuICAgICAgICB0aGlzLiNjbGVhcldyYXBwZXIod3JhcHBlcik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm51bWJlck9mUHJvamVjdHM7aSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdHMuZ2V0UHJvamVjdChpKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvamVjdEluZm8ubmFtZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZihwcm9qZWN0SW5mby5jb250YWluc1RvRG9JdGVtKCkpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcHJvamVjdEluZm8uZ2V0TnVtYmVyT2ZJdGVtcygpOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaXRsZTogJHtwcm9qZWN0SW5mby5nZXRUb0RvSXRlbSh4KS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY2xlYXJXcmFwcGVyICh3cmFwcGVyKSB7XG4gICAgICAgIHdoaWxlKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi90b0RvUHJvamVjdFwiO1xuaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY2xhc3MgUGFnZUNvbnRyb2xsZXIge1xuICAgICNwcm9qZWN0cztcbiAgICAjRGlzcGxheUNvbnRyb2xsZXI7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLiNEaXNwbGF5Q29udHJvbGxlciA9IG5ldyBEaXNwbGF5Q29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0cy5uZXdQcm9qZWN0KG5hbWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RzICgpIHtcbiAgICAgICAgdGhpcy4jRGlzcGxheUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdHModGhpcy4jcHJvamVjdHMpO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TGlzdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0cztcbiAgICB9XG5cbn1cblxuY29uc3QgcGFnZSA9IG5ldyBQYWdlQ29udHJvbGxlcigpO1xubGV0IHBhZ2VMaXN0ID0gcGFnZS5wcm9qZWN0TGlzdDtcbmNvbnNvbGUubG9nKHBhZ2VMaXN0LmNvbnNvbGVMb2dQcm9qZWN0cygpKTtcbmxldCBjdXJQcm8gPSBwYWdlTGlzdC5nZXRQcm9qZWN0KDApO1xuXG5jdXJQcm8uYWRkVG9Eb0l0ZW0oXCJ0b2RvMVwiLCBcImxvcmVtaSBwc3UgbXNkXCIsIDE5OTUsIFwidG9wXCIpO1xuY3VyUHJvLmFkZFRvRG9JdGVtKFwidG9kb2xpc3QyXCIsIFwiaG9sZXNnc1wiLCAxOTk1LCBcIm1lZGl1bVwiKTtcbmN1clByby5hZGRUb0RvSXRlbShcInRvZG8zXCIsIFwiaG9mYWZzZGdkZlwiLCAxOTk1LCBcImxvd1wiKTtcblxuXG5sZXQgZmlyc3RJdGVtVXBkID0gY3VyUHJvLmdldFRvRG9JdGVtKDApO1xuY29uc29sZS5sb2coZmlyc3RJdGVtVXBkLmNvbnNvbGVMb2dJdGVtcygpKTtcblxucGFnZS5hZGRQcm9qZWN0KCd0ZXN0MScpO1xucGFnZS5hZGRQcm9qZWN0KCd0ZXN0NScpO1xucGFnZS5hZGRQcm9qZWN0KCd0ZXN0MicpO1xuXG5cbnBhZ2UudXBkYXRlUHJvamVjdHMoKTtcblxuXG4iLCJjbGFzcyBUb0RvSXRlbSB7XG4gICAgI3RpdGxlO1xuICAgICNkZXNjcmlwdGlvbjtcbiAgICAjZHVlRGF0ZTtcbiAgICAjcHJpb3JpdHk7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG4gICAgZ2V0IHByaW9yaXR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaW9yaXR5O1xuICAgIH1cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxufVxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3ROYW1lO1xuICAgIH1cbiAgICBcblxuICAgIGFkZFRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RvRG9JdGVtcy5wdXNoKG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRvRG9JdGVtIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXNbaXRlbV07XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyT2ZJdGVtcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnRhaW5zVG9Eb0l0ZW0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG59XG5cbmNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgICAjY3VycmVudFByb2plY3RzID0gW107XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QoXCJkZWZhdWx0XCIpOyAgXG4gICAgfVxuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldCBudW1iZXJPZlByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RdO1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dQcm9qZWN0cygpIHtcbiAgICAgICAgaWYodGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1RvRG9JdGVtLCBUb0RvUHJvamVjdCwgUHJvamVjdENvbnRyb2xsZXJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==