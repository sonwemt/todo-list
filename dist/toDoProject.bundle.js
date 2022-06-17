"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["toDoProject"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/toDoProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1Byb2plY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb0RvSXRlbSB7XG4gICAgI3RpdGxlO1xuICAgICNkZXNjcmlwdGlvbjtcbiAgICAjZHVlRGF0ZTtcbiAgICAjcHJpb3JpdHk7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG4gICAgZ2V0IHByaW9yaXR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkdWVEYXRlIChkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc29sZUxvZ0l0ZW1zICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4jdGl0bGUgKyAnICcgKyB0aGlzLiNkZXNjcmlwdGlvbiArICcgJyArIHRoaXMuI2R1ZURhdGUgKyAnICcgKyB0aGlzLiNwcmlvcml0eSlcbiAgICB9XG5cbn1cblxuY2xhc3MgVG9Eb1Byb2plY3Qge1xuICAgICNwcm9qZWN0TmFtZTtcbiAgICAjdG9Eb0l0ZW1zID0gW107XG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lID0gJ0RlZmF1bHQgUHJvamVjdCcpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3ROYW1lO1xuICAgIH1cbiAgICBcblxuICAgIGFkZFRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RvRG9JdGVtcy5wdXNoKG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRvRG9JdGVtIChpdGVtKSB7XG4gICAgICAgIGlmKGl0ZW0gPCB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoICYmIGl0ZW0gPiAtMSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXROdW1iZXJPZkl0ZW1zICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29udGFpbnNUb0RvSXRlbSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdENvbnRyb2xsZXIge1xuICAgICNjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICBuZXdQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldFByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nUHJvamVjdHMoKSB7XG4gICAgICAgIGlmKHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==