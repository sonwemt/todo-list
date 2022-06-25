export default class DisplayController {
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