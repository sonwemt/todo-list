"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["toDoProject"],{

/***/ "./src/toDoProject.js":
/*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectController": () => (/* binding */ ProjectController)
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
        let jsonReadyItems = [];
        for(let item of this.#toDoItems) {
            jsonReadyItems.push(item.toJson);
        }
        return {projectName: this.#projectName, toDoItems: jsonReadyItems};
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
        } else{
            this.#getLocalStorage();
        }   
    }
    
    get numberOfProjects () {
        return this.#currentProjects.length;
    }

    #toJson () {
        let stringedArray = [];
        for(let project of this.#currentProjects) {
            stringedArray.push(project.toJson);
        }
        return JSON.stringify(stringedArray);
    }

    #fromJson(json) {
        let data = JSON.parse(json);

        let returnArray = data.map(project => {
            let projectObj = new ToDoProject(project.projectName);
            project.toDoItems.map(item => projectObj.addToDoItem(item.title, item.description, item.dueDate, item.priority))
            return projectObj;
        });
        return returnArray;
    }

    #updateLocalStorage() {
        let jsonArray = this.#toJson();
        localStorage.setItem('currentProjects', jsonArray);
    }

    #getLocalStorage () {
        let storedArray = localStorage.getItem('currentProjects');
        let parsedArray = this.#fromJson(storedArray);
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
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/toDoProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1Byb2plY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Qcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIFxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZTogdGhpcy4jdGl0bGUsIGRlc2NyaXB0aW9uOiB0aGlzLiNkZXNjcmlwdGlvbiwgZHVlRGF0ZTogdGhpcy4jZHVlRGF0ZSwgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5fTtcbiAgICB9XG5cbn1cblxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUgPSAnRGVmYXVsdCBQcm9qZWN0Jykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IE51bWJlck9mSXRlbXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgbGV0IGpzb25SZWFkeUl0ZW1zID0gW107XG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLiN0b0RvSXRlbXMpIHtcbiAgICAgICAgICAgIGpzb25SZWFkeUl0ZW1zLnB1c2goaXRlbS50b0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cHJvamVjdE5hbWU6IHRoaXMuI3Byb2plY3ROYW1lLCB0b0RvSXRlbXM6IGpzb25SZWFkeUl0ZW1zfTtcbiAgICB9XG5cbiAgICBhZGRUb0RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtIChpbmRleCkge1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5zVG9Eb0l0ZW0oKSl7XG4gICAgICAgICAgICB0aGlzLiN0b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb0RvSXRlbSAoaXRlbSkge1xuICAgICAgICBpZihpdGVtIDwgdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCAmJiBpdGVtID4gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udGFpbnNUb0RvSXRlbSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgICAjY3VycmVudFByb2plY3RzID0gW25ldyBUb0RvUHJvamVjdCgpXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RzJykpe1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMuI2dldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIFxuICAgIGdldCBudW1iZXJPZlByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgI3RvSnNvbiAoKSB7XG4gICAgICAgIGxldCBzdHJpbmdlZEFycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgIHN0cmluZ2VkQXJyYXkucHVzaChwcm9qZWN0LnRvSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cmluZ2VkQXJyYXkpO1xuICAgIH1cblxuICAgICNmcm9tSnNvbihqc29uKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShqc29uKTtcblxuICAgICAgICBsZXQgcmV0dXJuQXJyYXkgPSBkYXRhLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T2JqID0gbmV3IFRvRG9Qcm9qZWN0KHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdC50b0RvSXRlbXMubWFwKGl0ZW0gPT4gcHJvamVjdE9iai5hZGRUb0RvSXRlbShpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpKVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RPYmo7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgI3VwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IGpzb25BcnJheSA9IHRoaXMuI3RvSnNvbigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFByb2plY3RzJywganNvbkFycmF5KTtcbiAgICB9XG5cbiAgICAjZ2V0TG9jYWxTdG9yYWdlICgpIHtcbiAgICAgICAgbGV0IHN0b3JlZEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycpO1xuICAgICAgICBsZXQgcGFyc2VkQXJyYXkgPSB0aGlzLiNmcm9tSnNvbihzdG9yZWRBcnJheSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cyA9IHBhcnNlZEFycmF5O1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBuZXdQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB9XG4gICAgXG4gICAgYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XS5hZGRUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdEluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnJlbW92ZVRvRG9JdGVtKGl0ZW0pO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=