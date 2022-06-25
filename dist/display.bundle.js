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
        header.classList.add('header');
        header.textContent = 'To Do List';
        
        

        const projectBody = document.createElement('div');
        projectBody.id = 'projectBody';

        const buttonWrapper = document.createElement('div');
        
        const addButton = document.createElement('button');
        buttonWrapper.id = 'addProject';
        addButton.textContent = ('New Project');
        addButton.id = 'addProjectButton';
        buttonWrapper.appendChild(addButton);
        
        
        wrapper.appendChild(header);
        wrapper.appendChild(buttonWrapper);
        wrapper.appendChild(projectBody);
        
    }

    updateProjects(projects) {
        const wrapper = document.getElementById('projectBody');

        this.#clearWrapper(wrapper);

        for(let i = 0; i < projects.numberOfProjects;i++) {

            const card = document.createElement('div');
            card.classList.add('project');
            card.setAttribute('data-id', i);
            
            const addButton = document.createElement('button');
            addButton.textContent = 'Add Task'; 
            addButton.classList.add('addTask');
            addButton.setAttribute('data-id', i);
            
            const cardContent = document.createElement('div');
            cardContent.classList.add('items');

            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            projectName.classList.add('projectTitle');

            const removeButton = document.createElement('button');
            removeButton.textContent = ('Remove Project');
            removeButton.classList.add('removeProject');
            removeButton.setAttribute('data-id', i);

            card.appendChild(projectName);
            card.appendChild(removeButton);
            
            
    
            for(let x = 0; x < projectInfo.NumberOfItems; x++) {
                const item = document.createElement('div');
                const toDoItem = projectInfo.getToDoItem(x);
                item.textContent = `Title: ${toDoItem.title} Description: ${toDoItem.description} Date: ${toDoItem.dueDate} Priority: ${toDoItem.priority}`;
                cardContent.appendChild(item);

                const removeItem = document.createElement('button');
                removeItem.textContent = 'Remove';
                removeItem.classList.add(`removeItem`);
                removeItem.setAttribute('data-id', x);

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

    createProjectForm() {
        const addButton = document.getElementById('addProject');
        
        const form = document.createElement('form');
        form.setAttribute('id', 'projectForm');

        const projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');
        projectName.setAttribute('name', 'projectName');
        projectName.setAttribute('id', 'projectInput');
        projectName.setAttribute('placeholder', 'Name');
        projectName.setAttribute('minlength', '1');
        projectName.setAttribute('maxlength', '30');


        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submitProject');
        submit.textContent = 'Add Project';

        form.appendChild(projectName);
        form.appendChild(submit);
        addButton.appendChild(form);
    }

    removeProjectForm() {
        let wrapper = document.getElementById('addProject');
        wrapper.removeChild(wrapper.lastChild)
    }

    createToDoItemForm () {
        const overlay = document.createElement(`div`);
        overlay.id = 'addItemOverlay';
        const wrapper = document.getElementById('content');
        const addButton = document.getElementById('addProject');
        
        const form = document.createElement('form');
        form.classList.add('toDoItemForm');

        const itemTitle = document.createElement('input');
        itemTitle.setAttribute('type', 'text');
        itemTitle.setAttribute('name', 'Title');
        itemTitle.setAttribute('id', 'itemTitle');
        itemTitle.setAttribute('placeholder', 'Title');
        itemTitle.setAttribute('minlength', '1');

        const itemDescription = document.createElement('input');
        itemDescription.setAttribute('type', 'text');
        itemDescription.setAttribute('name', 'Description');
        itemDescription.setAttribute('id', 'itemDescription');
        itemDescription.setAttribute('placeholder', 'Description');
        itemDescription.setAttribute('minlength', '1');
        itemDescription.setAttribute('maxlength', '400');

        
        const itemDate = document.createElement('input');
        itemDate.setAttribute('type', 'date');
        itemDate.setAttribute('name', 'Date');
        itemDate.setAttribute('id', 'itemDate');
        itemDate.setAttribute('placeholder', 'Date');


        const itemPriority = document.createElement('select');
        itemPriority.setAttribute('name', 'Priority');
        itemPriority.setAttribute('id', 'itemPriority');
        const highPriority = document.createElement('option');
        const mediumPriority = document.createElement('option');
        const lowPriority = document.createElement('option');
        
        highPriority.setAttribute('value', 'high');
        mediumPriority.setAttribute('value', 'medium');
        lowPriority.setAttribute('value', 'low');

        highPriority.textContent = 'High';
        mediumPriority.textContent = 'Medium';
        lowPriority.textContent = 'Low';

        itemPriority.appendChild(highPriority);
        itemPriority.appendChild(mediumPriority);
        itemPriority.appendChild(lowPriority);

        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submitToDoItem');
        submit.textContent = 'Add Item';

        form.appendChild(itemTitle);
        form.appendChild(itemDescription);
        form.appendChild(itemDate);
        form.appendChild(itemPriority);
        form.appendChild(submit);
        overlay.appendChild(form);
        wrapper.appendChild(overlay);

    }
    

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw4QkFBOEI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0IsZUFBZSxzQkFBc0IsUUFBUSxrQkFBa0IsWUFBWSxrQkFBa0I7QUFDMUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY3JlYXRlUGFnZUJvZHkoKTtcbiAgICB9XG4gICAgI2NyZWF0ZVBhZ2VCb2R5ICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvIERvIExpc3QnO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEJvZHkuaWQgPSAncHJvamVjdEJvZHknO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25XcmFwcGVyLmlkID0gJ2FkZFByb2plY3QnO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAoJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRQcm9qZWN0QnV0dG9uJztcbiAgICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJvZHknKTtcblxuICAgICAgICB0aGlzLiNjbGVhcldyYXBwZXIod3JhcHBlcik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm51bWJlck9mUHJvamVjdHM7aSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snOyBcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gKCdSZW1vdmUgUHJvamVjdCcpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3QnKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcblxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHByb2plY3RJbmZvLk51bWJlck9mSXRlbXM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IHByb2plY3RJbmZvLmdldFRvRG9JdGVtKHgpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dG9Eb0l0ZW0udGl0bGV9IERlc2NyaXB0aW9uOiAke3RvRG9JdGVtLmRlc2NyaXB0aW9ufSBEYXRlOiAke3RvRG9JdGVtLmR1ZURhdGV9IFByaW9yaXR5OiAke3RvRG9JdGVtLnByaW9yaXR5fWA7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0uY2xhc3NMaXN0LmFkZChgcmVtb3ZlSXRlbWApO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgeCk7XG5cbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmVJdGVtKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgICNjbGVhcldyYXBwZXIgKHdyYXBwZXIpIHtcbiAgICAgICAgd2hpbGUod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RGb3JtJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdE5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMzAnKTtcblxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3RGb3JtKCkge1xuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY3JlYXRlVG9Eb0l0ZW1Gb3JtICgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgICAgICBvdmVybGF5LmlkID0gJ2FkZEl0ZW1PdmVybGF5JztcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvRG9JdGVtRm9ybScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1RpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1UaXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1EZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNDAwJyk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ0RhdGUnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtRGF0ZScpO1xuICAgICAgICBpdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RhdGUnKTtcblxuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ1ByaW9yaXR5Jyk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1Qcmlvcml0eScpO1xuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgXG4gICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxuICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgaXRlbVByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFRvRG9JdGVtJyk7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgSXRlbSc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIH1cbiAgICBcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==