const addButton = document.getElementById   ('addButton');
const taskInput = document.getElementById ('taskInput');
const taskList  = document.getElementById ('taskList');

addButton.addEventListener ('click', (eo) => {
    eo.preventDefault();
const taskText = taskInput.value;
if (taskText.trim() !== '') {

    const taskListItem = `  <br>  <div class="custom-input">
<span class="task-label"> ${taskInput.value} </span>
<button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>   ` ;

taskList.innerHTML += taskListItem;
taskInput.value = '';


    
}


});

taskList.addEventListener ('click', (eo) => {
    if (eo.target.className== 'fa-solid fa-trash') {
        eo.target.parentElement.parentElement.remove ()
    }
} );


function angel() {
     //value de recherche  

const input_content = document.querySelector('#searchInput').value;
console.log('input_content>>' , input_content )
const taskList_container = document.querySelector ('#taskList');
console.log ('taskList_container=', taskList_container) ;
const taskListItem = taskList_container.children ;
console.log('taskListItem=', taskListItem);
for (let i=0 ; i<taskListItem.length; i++) {
    const   taskList_content = taskListItem[i].textContent;
    console.log('taskList_content',taskList_content);
    if (taskList_content.includes(input_content)) {
        taskListItem[i].style.display = '   block' ;
    }else{ taskListItem[i].style.display = '  none' }

    console.log ('input_content==' , input_content)
}

}