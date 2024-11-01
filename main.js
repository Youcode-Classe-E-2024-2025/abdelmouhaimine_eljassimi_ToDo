let titre = document.getElementById('titre');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let date = document.getElementById('date');
let submit = document.getElementById('submit');
let status = document.getElementById('status');
let tacheDetails = document.getElementById('tacheDetails');
let exiteDetails = document.getElementById('exiteDetails');
const editTitreInput = document.getElementById('titreEdit');
const descriptionEdit = document.getElementById('descriptionEdit');
const priorityEdit = document.getElementById('priorityEdit');
const dateEdit = document.getElementById('dateEdit');
const statusEdit = document.getElementById('statusEdit');
const editTachBtn = document.getElementById('editTach');

let todo_stats = document .getElementById('todo_stats');
let doing_stats = document .getElementById('doing_stats');
let done_stats = document .getElementById('done_stats');


// Open task form
let task = document.getElementById('task');
let taskForm = document.getElementById('taskForm');
let exiteForm = document.getElementById('exiteForm');
let exiteEditForm = document.getElementById('exiteEditForm');


// delete task
let deletee = document.getElementById('deletee');

// edit task 
let editButton = document.getElementById('editButton');
let editForm = document.getElementById('editForm');


task.addEventListener('click', function(){       
    taskForm.classList.remove("hidden");
});
exiteForm.addEventListener('click', function(){       
    taskForm.classList.add("hidden");
});

exiteEditForm.addEventListener('click', function(){     
    editForm.classList.add("hidden");
});



function taskStats(){

    const todoContainer = document.querySelector('#todo');
    const todoCount = todoContainer.querySelectorAll("#tache").length;
    todo_stats.innerText = todoCount;

    const doingContainer = document.querySelector('#doing');
    const doingCount = doingContainer.querySelectorAll("#tache").length;
    doing_stats.innerText = doingCount;

    const doneContainer = document.querySelector('#done');
    const doneCount = doneContainer.querySelectorAll("#tache").length;
    done_stats.innerText = doneCount;

}

// create task
let dataTask;
if(localStorage.getItem('task') != null){
    dataTask = JSON.parse(localStorage.getItem('task'));
    
}else{
    dataTask=[];
}
submit.onclick = function(){

    //validation
    if (titre.value === "" || date.value === "") {
        alert("Please enter a title and a date for the task.");
        return;
    }
 
     let newTask = {
        titre : titre.value,
        description : description.value,
        priority : priority.value,
        date : date.value,
        status: status.value
     }
     
     dataTask.push(newTask);
    //  Save local storage
     localStorage.setItem('task', JSON.stringify(dataTask));

    //  hide the popup form 
      taskForm.classList.add("hidden");
      //Show data when i click on submit button
      triAuto();
      showTask();
      
}

showTask();



// affiche task
function showTask() {
     const allTasks = JSON.parse(localStorage.getItem('task'));

    let todo = document.getElementById('todo');
    let doing = document.getElementById('doing');
    let done = document.getElementById('done');

    todo.innerHTML = "";
    doing.innerHTML = "";
    done.innerHTML = "";

    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];
        if (task.status === 'TO DO') {
            createHTML(todo, task, i);
        } else if (task.status === 'DOING'){
            createHTML(doing, task, i);
        } else if (task.status === 'DONE'){
            createHTML(done, task, i);
        }
    }
    taskStats();


}

// background color of thr priority

function getPriorityColor(priority) {
    switch (priority) {
        case '1': return 'bg-redOrange';
        case '2': return 'bg-yellow';
        case '3': return 'bg-teal';
    } 
}


function createHTML(placeholder , dataTask, index){
    let div = document.createElement('div');

             div.innerHTML = `
                         <div draggable="true" id="tache" class="bg-darkgrey w-full h-[100px] rounded-[15px] mt-4 border border-white">
                             <div class="flex justify-between p-2"> 
                                 <i id= 'editButton' class='bx bxs-edit text-white text-3xl'></i>
                                 <h2 class="font-bold text-white text-3xl">${dataTask.titre}</h2>
                                 <i id="deletee" class='bx bxs-trash text-coral text-3xl'></i>
                             </div>
                             <div class="flex justify-between p-2">
                                 
                                 <div class="min-w-24 h-10 ${getPriorityColor(dataTask.priority)} flex justify-center font-bold text-white text-1xl rounded-[4px]">P${dataTask.priority}</div>
                                 <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.date}</div>
                             </div>
                         </div>  `

    placeholder.appendChild(div);

    displayTask(dataTask, div);
    
    div.querySelector('#deletee').addEventListener('click', function(event){
        event.stopPropagation();
        deleteTask(index);
    });
    div.querySelector('#editButton').addEventListener('click', function(event){
        event.stopPropagation();
        EditTask(index);
    });

}

// --------------------Show task detais--------------------------

function displayTask(task, taskDiv) {
    taskDiv.onclick = function() {
        tacheDetails.classList.remove("hidden");
        tacheDetails.innerHTML = `
            <div class="bg-darkgrey rounded-[40px] shadow-lg p-6 w-[90%] h-fit sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-fit sm:h-fit md:h-fit lg:h-fit xl:h-fit overflow-auto">
                <div class="flex justify-between p-2"> 
                    <i class='bx bxs-edit text-white text-3xl'></i>
                    <h2 class="font-bold text-white text-3xl">${task.titre}</h2>
                    <i id="exiteDetails" class='bx bxs-exit text-white text-3xl z-20'></i>
                </div>
                <div class="text-center text-white p-2">${task.description}</div>
                <div class="flex justify-between p-2">

                    <div class="min-w-24 h-10 ${getPriorityColor(task.priority)} flex justify-center font-bold text-white text-1xl rounded-[4px]">${task.priority}</div>
                    <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${task.date}</div>
                </div>
            </div>
        `;

        // Close details when the exit icon is clicked
        const exiteDetails = document.getElementById("exiteDetails");
        exiteDetails.addEventListener('click', function() {
            tacheDetails.classList.add("hidden");
        });
    }
}


//delete task 

function deleteTask(ind) {
           dataTask.splice(ind, 1);
           localStorage.setItem('task', JSON.stringify(dataTask));
           showTask();
}

function triAuto(){
    let tmp;
    for (let i = 0; i < dataTask.length; i++){
        for(let j = 0; j < dataTask.length - 1; j++) {
            if(dataTask[j].priority > dataTask[j+1].priority) {
                tmp = dataTask[j];
                dataTask[j] = dataTask[j+1];
                dataTask[j+1] = tmp;
            } else if (dataTask[j].priority === dataTask[j+1].priority){
                
                if(dataTask[j].date > dataTask[j+1].date){
                    tmp = dataTask[j];
                    dataTask[j] = dataTask[j+1];
                    dataTask[j+1] = tmp;
                }
            }
        }
    }
    localStorage.setItem('task', JSON.stringify(dataTask));
}
triAuto();


// edit task

function EditTask(index){
    editForm.classList.remove('hidden');
    
    const task = JSON.parse(localStorage.getItem('task'));
    
    
    editTitreInput.value = task[index].titre;
    descriptionEdit.value = task[index].description;
    priorityEdit.value = task[index].priority;
    console.log(task[index].date);
    dateEdit.value = task[index].date;
    statusEdit.value = task[index].status;
    editTachBtn.addEventListener('click', function(event){
        event.preventDefault();
        const taskEdit={
            titre : editTitreInput.value,
            description : descriptionEdit.value,
            priority : priorityEdit.value,
            date : dateEdit.value,
            status: statusEdit.value

        }
        task[index ] = taskEdit;
        localStorage.setItem('task', JSON.stringify(task));
        editForm.classList.add('hidden');
        
        showTask();

    });
}






