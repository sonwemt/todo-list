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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/toDoProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1Byb2plY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Qcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxufVxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUgPSAnRGVmYXVsdCBQcm9qZWN0Jykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IE51bWJlck9mSXRlbXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgXG5cbiAgICBhZGRUb0RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtIChpbmRleCkge1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5zVG9Eb0l0ZW0oKSl7XG4gICAgICAgICAgICB0aGlzLiN0b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb0RvSXRlbSAoaXRlbSkge1xuICAgICAgICBpZihpdGVtIDwgdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCAmJiBpdGVtID4gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb250YWluc1RvRG9JdGVtICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gICAgI2N1cnJlbnRQcm9qZWN0cyA9IFtdO1xuXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aDtcbiAgICB9XG5cblxuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldFByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nUHJvamVjdHMoKSB7XG4gICAgICAgIGlmKHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==