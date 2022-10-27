const addInput = document.querySelector('#add-task');
const addBtn = document.querySelector('#submit');
const divList = document.querySelector('.task-list');
const allBtn = document.querySelector('.all');
const activeBtn = document.querySelector('.active');
const completedBtn = document.querySelector('.completed');
const clearBtn = document.querySelector('.clear');

function addListItem(){
    if (addInput.value === ''){
        alert('Please add a task!');
    } else {
        const ul = divList.querySelector('.list-of-tasks');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const close = document.createElement('input');

        li.className = "task-item"
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


        
        checkbox.addEventListener('change', function chkBox(event){
            if (event.currentTarget.checked) {
                li.style.textDecoration = "line-through";
            } else {
                function unchecked(){
                    event.preventDefault();
                }
                li.style.textDecoration = "none";
            }

            activeBtn.addEventListener('click', function(){
                if (unchecked){
                    li.style.display = "flex";
                } else {
                    li.style.display = "none";
                }
            });

            allBtn.addEventListener('click', function(){
                if (unchecked){
                    li.style.display = "flex"
                } else {
                    li.style.display = "flex";
                }
            });
            
            completedBtn.addEventListener('click', function(){
                if (unchecked){
                    li.style.display = "none";
                } else {
                    li.style.display = "flex";
                }
            });

            clearBtn.addEventListener('click', function(){
                if (event.currentTarget.checked){
                    li.remove();
                }
            });
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