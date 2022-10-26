const addInput = document.querySelector('#add-task');
const addBtn = document.querySelector('#submit');
const divList = document.querySelector('.task-list');

function addListItem(){
    if (addInput.value === ''){
        alert('Please add a task!');
    } else {
        const ul = divList.querySelector('.list-of-tasks');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const close = document.createElement('input');

        li.id = "task-item"
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        label.id = "task-name";
        close.type = "button";
        close.id = "close";

        li.draggable = "true";
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
        
        const dragArea = ul;
        new Sortable(dragArea, {
          animation: 350
        });
    }
}

addBtn.addEventListener('click', function() {
    addListItem();
});

addInput.addEventListener('keyup', function(event) {
    if(event.which === 13) {
        addListItem();
    }
});