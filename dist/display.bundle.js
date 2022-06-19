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
            card.classList.add(`project`);
            card.id = i;
            const addButton = document.createElement('button');
            addButton.textContent = 'Add Task'; 
            addButton.id = i;
            addButton.classList.add('addTask');
            const cardContent = document.createElement('div');
            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            card.appendChild(projectName);
            
            cardContent.id = i;
            cardContent.classList.add('items');
    
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw4QkFBOEI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBLDZDQUE2QyxpQ0FBaUM7QUFDOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVBhZ2VCb2R5KCk7XG4gICAgfVxuICAgICNjcmVhdGVQYWdlQm9keSAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUbyBEbyBMaXN0Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm9keS5pZCA9ICdwcm9qZWN0Qm9keSc7XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gKCdBZGQgUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Qm9keScpO1xuXG4gICAgICAgIHRoaXMuI2NsZWFyV3JhcHBlcih3cmFwcGVyKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0cztpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0YCk7XG4gICAgICAgICAgICBjYXJkLmlkID0gaTtcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJzsgXG4gICAgICAgICAgICBhZGRCdXR0b24uaWQgPSBpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmlkID0gaTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcHJvamVjdEluZm8uTnVtYmVyT2ZJdGVtczsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdEluZm8uZ2V0VG9Eb0l0ZW0oeCkudGl0bGV9YDtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5jbGFzc0xpc3QuYWRkKGByZW1vdmVJdGVtYCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5pZCA9IHg7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY2xlYXJXcmFwcGVyICh3cmFwcGVyKSB7XG4gICAgICAgIHdoaWxlKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=