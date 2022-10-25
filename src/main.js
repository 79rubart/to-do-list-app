const addInput = document.querySelector('#add-task');
const addBtn = document.querySelector('#submit');
const divList = document.querySelector('.task-list');

function addLists(){
    if (addInput.value === ''){
        alert('Please add a task!');
    } else {
        const ul = divList.querySelector('.list-of-tasks');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const close = document.createElement('input');

        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        label.id = "task-name";
        close.type = "button";
        close.id = "close";

        label.innerHTML = addInput.value;
        addInput.value = '';
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(close);

        checkbox.addEventListener('change', function(event) {
            if (event.currentTarget.checked){
                label.style.textDecoration="line-through";
            } else {
                label.style.textDecoration="none";
            }
        });

        close.addEventListener('click', function(){
            li.remove();
        });
    }
}

addBtn.addEventListener('click', function() {
    addLists();
});

addInput.addEventListener('keyup', function(event) {
    if(event.which === 13) {
        addLists();
    }
});