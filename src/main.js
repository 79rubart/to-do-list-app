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

        li.className = "task-item";
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        label.id = "task-name";
        close.type = "button";
        close.id = "close";
        close.value = "X";

        label.innerHTML = addInput.value;
        addInput.value = '';
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(close);

        var unchecked = true;

        function check(event){
            if (event.currentTarget.checked) {
                label.style.textDecoration = "line-through";
                unchecked = false;
            } else {
                label.style.textDecoration = "none";
                unchecked = true;
            }
        }

        checkbox.addEventListener('change', function (event){
            check(event);
        });
        
        activeBtn.addEventListener('click', function(){
            console.log(unchecked)
            if (unchecked){
                li.style.display = "flex";
            } else {
                li.style.display = "none";
            }
            allBtn.setAttribute('style','color:#b1b1b1');
            activeBtn.setAttribute('style','color:blue');
            completedBtn.setAttribute('style','color:#b1b1b1');
        });

        allBtn.addEventListener('click', function(){
            console.log(unchecked)
            if (unchecked){
                li.style.display = "flex"
            } else {
                li.style.display = "flex";
            }
            allBtn.setAttribute('style','color:blue');
            activeBtn.setAttribute('style','color:#b1b1b1');
            completedBtn.setAttribute('style','color:#b1b1b1');
        });

        completedBtn.addEventListener('click', function(){
            console.log(unchecked)
            if (unchecked){
                li.style.display = "none";
            } else {
                li.style.display = "flex";
            }
            allBtn.setAttribute('style','color:#b1b1b1');
            activeBtn.setAttribute('style','color:#b1b1b1');
            completedBtn.setAttribute('style','color:blue');
        });

        clearBtn.addEventListener('click', function(){
            if (unchecked){
                li.style.display = "flex";
            } else {
                $(close).click();
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
    $(activeBtn).click();
});

addInput.addEventListener('keyup', function(event) {
    if(event.which === 13) {
        addListItem();
        $(activeBtn).click();
    }
});