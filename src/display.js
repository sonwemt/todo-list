export default class DisplayController {
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