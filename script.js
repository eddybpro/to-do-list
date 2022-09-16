const item = document.getElementById('item');
const list = document.querySelector('.list');

const tasks = JSON.parse(localStorage.getItem('tasks'));

if (tasks) {
    tasks.forEach(task=>{
        addItem(task);
    })
}
function addItem(task){
    if(task){
        item.value = task.taskVal;
    }

    if(item.value){
        const li = document.createElement('li');
        li.className='list-item'

        const p = document.createElement('p');
        p.className='to-do-item';
        p.innerText = item.value;

        const div = document.createElement('div');
        div.className='cross';
        div.innerHTML=`<span class="span1">
        <span class="span2"></span>
        </span>`;

        if(task && task.completed){
            p.classList.add('completed');
        }

        p.addEventListener('click',()=>{
            p.classList.toggle('completed')
            localItems();
        })

        div.addEventListener('click', function(){
            this.parentElement.remove(this)
            localItems();
        })
        
        li.appendChild(p);
        li.appendChild(div);
        list.append(li);

        
        item.value ='';

        localItems();
    }else{
        alert('Please enter an item')
    }
}


function localItems(){
    const tasks = document.querySelectorAll('p');
    let arrayTasks = [];
    tasks.forEach(task=>{
        arrayTasks.push({
            taskVal: task.innerText,
            completed: task.classList.contains('completed'),
        });
    })
    localStorage.setItem('tasks',JSON.stringify(arrayTasks));
}

