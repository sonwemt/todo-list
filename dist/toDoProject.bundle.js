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

    get toJson () {
        return {title: this.#title, description: this.#description, dueDate: this.#dueDate, priority: this.#priority};
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

    get toJson () {
        let stringedItems = [];
        for(let item of this.#toDoItems) {
            stringedItems.push(item.toJson);
        }
        return {projectName: this.#projectName, toDoItems: stringedItems};
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
    #currentProjects = [new ToDoProject()];
    constructor () {
        if(!localStorage.getItem('currentProjects')){
            this.#updateLocalStorage();
        }
        else{
            this.#setLocalStorage();
        }
        
    }
    get numberOfProjects () {
        return this.#currentProjects.length;
    }
    get toJson () {
        let stringedArray = [];
        for(let project of this.#currentProjects) {
            stringedArray.push(project.toJson);
        }
        return JSON.stringify(stringedArray);
    }

    fromJson(json) {
        let data = JSON.parse(json);
        let returnArray = [];
        for(let project of data) {
            let newProject = new ToDoProject(project.projectName);
            for(let item of project.toDoItems) {
                newProject.addToDoItem(item.title, item.description, item.dueDate, item.priority);
            }
            returnArray.push(newProject);
        }
        return returnArray;
    }



    #updateLocalStorage() {
        console.log('if');
        let jsonArray = this.toJson;
        localStorage.setItem('currentProjects', jsonArray);
    }

    #setLocalStorage () {
        let storedArray = localStorage.getItem('currentProjects');
        let parsedArray = this.fromJson(storedArray);
        this.#currentProjects = parsedArray;
        this.#updateLocalStorage();
    }

    

    newProject (name) {
        let project = new ToDoProject(name);
        this.#currentProjects.push(project);
        this.#updateLocalStorage();
    }

    getProject (projectIndex) {
        return this.#currentProjects[projectIndex];
    }
    
    addToDoItem(project, title, description, dueDate, priority){
        this.#currentProjects[project].addToDoItem(title, description, dueDate, priority);
        this.#updateLocalStorage();
    }

    removeToDoItem(projectIndex, item) {
        this.#currentProjects[projectIndex].removeToDoItem(item);
        this.#updateLocalStorage();
    }

    removeProject(projectIndex) {
        this.#currentProjects.splice(projectIndex, 1);
        this.#updateLocalStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1Byb2plY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9Eb0l0ZW0ge1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI2R1ZURhdGU7XG4gICAgI3ByaW9yaXR5O1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uIChkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZSAoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5IChwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dJdGVtcyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuI3RpdGxlICsgJyAnICsgdGhpcy4jZGVzY3JpcHRpb24gKyAnICcgKyB0aGlzLiNkdWVEYXRlICsgJyAnICsgdGhpcy4jcHJpb3JpdHkpXG4gICAgfVxuXG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIHJldHVybiB7dGl0bGU6IHRoaXMuI3RpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy4jZGVzY3JpcHRpb24sIGR1ZURhdGU6IHRoaXMuI2R1ZURhdGUsIHByaW9yaXR5OiB0aGlzLiNwcmlvcml0eX07XG4gICAgfVxuXG59XG5cblxuY2xhc3MgVG9Eb1Byb2plY3Qge1xuICAgICNwcm9qZWN0TmFtZTtcbiAgICAjdG9Eb0l0ZW1zID0gW107XG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lID0gJ0RlZmF1bHQgUHJvamVjdCcpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBOdW1iZXJPZkl0ZW1zICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIGxldCBzdHJpbmdlZEl0ZW1zID0gW107XG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLiN0b0RvSXRlbXMpIHtcbiAgICAgICAgICAgIHN0cmluZ2VkSXRlbXMucHVzaChpdGVtLnRvSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0TmFtZTogdGhpcy4jcHJvamVjdE5hbWUsIHRvRG9JdGVtczogc3RyaW5nZWRJdGVtc307XG4gICAgfVxuXG5cbiAgICBcblxuICAgIGFkZFRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RvRG9JdGVtcy5wdXNoKG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0gKGluZGV4KSB7XG4gICAgICAgIGlmKHRoaXMuY29udGFpbnNUb0RvSXRlbSgpKXtcbiAgICAgICAgICAgIHRoaXMuI3RvRG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFRvRG9JdGVtIChpdGVtKSB7XG4gICAgICAgIGlmKGl0ZW0gPCB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoICYmIGl0ZW0gPiAtMSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnRhaW5zVG9Eb0l0ZW0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgICAjY3VycmVudFByb2plY3RzID0gW25ldyBUb0RvUHJvamVjdCgpXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RzJykpe1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoO1xuICAgIH1cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgbGV0IHN0cmluZ2VkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgc3RyaW5nZWRBcnJheS5wdXNoKHByb2plY3QudG9Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyaW5nZWRBcnJheSk7XG4gICAgfVxuXG4gICAgZnJvbUpzb24oanNvbikge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QocHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgcHJvamVjdC50b0RvSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRvRG9JdGVtKGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cblxuXG4gICAgI3VwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lmJyk7XG4gICAgICAgIGxldCBqc29uQXJyYXkgPSB0aGlzLnRvSnNvbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycsIGpzb25BcnJheSk7XG4gICAgfVxuXG4gICAgI3NldExvY2FsU3RvcmFnZSAoKSB7XG4gICAgICAgIGxldCBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnKTtcbiAgICAgICAgbGV0IHBhcnNlZEFycmF5ID0gdGhpcy5mcm9tSnNvbihzdG9yZWRBcnJheSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cyA9IHBhcnNlZEFycmF5O1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBcblxuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0IChwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIH1cbiAgICBcbiAgICBhZGRUb0RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RdLmFkZFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvSXRlbShwcm9qZWN0SW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RJbmRleF0ucmVtb3ZlVG9Eb0l0ZW0oaXRlbSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZUxvZ1Byb2plY3RzKCkge1xuICAgICAgICBpZih0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgdGhpcy4jY3VycmVudFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=