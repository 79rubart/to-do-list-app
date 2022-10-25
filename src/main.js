const addInput = document.querySelector('#add-task');
const addBtn = document.querySelector('#submit');
const divList = document.querySelector('.task-list');

function addLists(){
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
}

addBtn.addEventListener('click', () => {
    addLists();
});

addInput.addEventListener('keyup', (event) => {
    if(event.which === 13) {
        addLists();
    }
});