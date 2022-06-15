"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["display"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsOEJBQThCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0NBQW9DO0FBQ25FO0FBQ0EsdUVBQXVFLGlDQUFpQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY3JlYXRlUGFnZUJvZHkoKTtcbiAgICB9XG4gICAgI2NyZWF0ZVBhZ2VCb2R5ICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RvIERvIExpc3QnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm9keS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Qm9keScpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RCb2R5Jyk7XG5cbiAgICAgICAgdGhpcy4jY2xlYXJXcmFwcGVyKHdyYXBwZXIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5udW1iZXJPZlByb2plY3RzO2krKykge1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3RJbmZvLm5hbWUpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdEluZm8uY29udGFpbnNUb0RvSXRlbSgpKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHByb2plY3RJbmZvLmdldE51bWJlck9mSXRlbXMoKTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGl0bGU6ICR7cHJvamVjdEluZm8uZ2V0VG9Eb0l0ZW0oeCkudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2NsZWFyV3JhcHBlciAod3JhcHBlcikge1xuICAgICAgICB3aGlsZSh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==