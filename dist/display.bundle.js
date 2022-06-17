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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw4QkFBOEI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0EsNkNBQTZDLGlDQUFpQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVBhZ2VCb2R5KCk7XG4gICAgfVxuICAgICNjcmVhdGVQYWdlQm9keSAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUbyBEbyBMaXN0Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm9keS5pZCA9ICdwcm9qZWN0Qm9keSc7XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gKCdBZGQgUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Qm9keScpO1xuXG4gICAgICAgIHRoaXMuI2NsZWFyV3JhcHBlcih3cmFwcGVyKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0cztpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snOyBcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0cy5nZXRQcm9qZWN0KGkpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdEluZm8ubmFtZTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcHJvamVjdEluZm8uZ2V0TnVtYmVyT2ZJdGVtcygpOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtwcm9qZWN0SW5mby5nZXRUb0RvSXRlbSh4KS50aXRsZX1gO1xuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgICNjbGVhcldyYXBwZXIgKHdyYXBwZXIpIHtcbiAgICAgICAgd2hpbGUod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==