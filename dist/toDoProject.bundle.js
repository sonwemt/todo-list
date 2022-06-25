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
    #currentProjects = [];
    constructor () {
        this.#updateLocalStorage(true);
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

    #updateLocalStorage(firstRun = false) {
        if(firstRun){
            if(localStorage.getItem('currentProjects') === null) {
                console.log('if');
                let jsonArray = JSON.stringify(this.#currentProjects);
                localStorage.setItem('currentProjects', jsonArray);
            }
            else{
                console.log('else');
                let storedArray = localStorage.getItem('currentProjects');
                let parseIt = this.fromJson(storedArray);
                this.#currentProjects = parseIt;
            }
        }
        else {
            console.log('elseif')
            let jsonArray = this.toJson;
            localStorage.setItem('currentProjects', jsonArray);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1Byb2plY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9Eb0l0ZW0ge1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI2R1ZURhdGU7XG4gICAgI3ByaW9yaXR5O1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uIChkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZSAoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5IChwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dJdGVtcyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuI3RpdGxlICsgJyAnICsgdGhpcy4jZGVzY3JpcHRpb24gKyAnICcgKyB0aGlzLiNkdWVEYXRlICsgJyAnICsgdGhpcy4jcHJpb3JpdHkpXG4gICAgfVxuXG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIHJldHVybiB7dGl0bGU6IHRoaXMuI3RpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy4jZGVzY3JpcHRpb24sIGR1ZURhdGU6IHRoaXMuI2R1ZURhdGUsIHByaW9yaXR5OiB0aGlzLiNwcmlvcml0eX07XG4gICAgfVxuXG59XG5cblxuY2xhc3MgVG9Eb1Byb2plY3Qge1xuICAgICNwcm9qZWN0TmFtZTtcbiAgICAjdG9Eb0l0ZW1zID0gW107XG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lID0gJ0RlZmF1bHQgUHJvamVjdCcpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBOdW1iZXJPZkl0ZW1zICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIGxldCBzdHJpbmdlZEl0ZW1zID0gW107XG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLiN0b0RvSXRlbXMpIHtcbiAgICAgICAgICAgIHN0cmluZ2VkSXRlbXMucHVzaChpdGVtLnRvSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0TmFtZTogdGhpcy4jcHJvamVjdE5hbWUsIHRvRG9JdGVtczogc3RyaW5nZWRJdGVtc307XG4gICAgfVxuXG5cbiAgICBcblxuICAgIGFkZFRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RvRG9JdGVtcy5wdXNoKG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0gKGluZGV4KSB7XG4gICAgICAgIGlmKHRoaXMuY29udGFpbnNUb0RvSXRlbSgpKXtcbiAgICAgICAgICAgIHRoaXMuI3RvRG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFRvRG9JdGVtIChpdGVtKSB7XG4gICAgICAgIGlmKGl0ZW0gPCB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoICYmIGl0ZW0gPiAtMSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnRhaW5zVG9Eb0l0ZW0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcbiAgICAjY3VycmVudFByb2plY3RzID0gW107XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UodHJ1ZSk7XG4gICAgfVxuICAgIGdldCBudW1iZXJPZlByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XG4gICAgfVxuICAgIGdldCB0b0pzb24gKCkge1xuICAgICAgICBsZXQgc3RyaW5nZWRBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgdGhpcy4jY3VycmVudFByb2plY3RzKSB7XG4gICAgICAgICAgICBzdHJpbmdlZEFycmF5LnB1c2gocHJvamVjdC50b0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdHJpbmdlZEFycmF5KTtcbiAgICB9XG5cbiAgICBmcm9tSnNvbihqc29uKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgbGV0IHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBUb0RvUHJvamVjdChwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiBwcm9qZWN0LnRvRG9JdGVtcykge1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYWRkVG9Eb0l0ZW0oaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgICN1cGRhdGVMb2NhbFN0b3JhZ2UoZmlyc3RSdW4gPSBmYWxzZSkge1xuICAgICAgICBpZihmaXJzdFJ1bil7XG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RzJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWYnKTtcbiAgICAgICAgICAgICAgICBsZXQganNvbkFycmF5ID0gSlNPTi5zdHJpbmdpZnkodGhpcy4jY3VycmVudFByb2plY3RzKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFByb2plY3RzJywganNvbkFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UnKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVkQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlSXQgPSB0aGlzLmZyb21Kc29uKHN0b3JlZEFycmF5KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMgPSBwYXJzZUl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2VpZicpXG4gICAgICAgICAgICBsZXQganNvbkFycmF5ID0gdGhpcy50b0pzb247XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFByb2plY3RzJywganNvbkFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgbmV3UHJvamVjdCAobmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBUb0RvUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGdldFByb2plY3QgKHByb2plY3RJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgfVxuICAgIFxuICAgIGFkZFRvRG9JdGVtKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHNbcHJvamVjdF0uYWRkVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbSkge1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHNbcHJvamVjdEluZGV4XS5yZW1vdmVUb0RvSXRlbShpdGVtKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nUHJvamVjdHMoKSB7XG4gICAgICAgIGlmKHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==