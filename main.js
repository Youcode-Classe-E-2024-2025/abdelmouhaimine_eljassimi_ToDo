let titre = document.getElementById('titre');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let date = document.getElementById('date');
let submit = document.getElementById('submit');
let status = document.getElementById('status');
let tacheDetails = document.getElementById('tacheDetails');
let exiteDetails = document.getElementById('exiteDetails');


let todo_stats = document .getElementById('todo_stats');
let doing_stats = document .getElementById('doing_stats');
let done_stats = document .getElementById('done_stats');


// Open task form
let task = document.getElementById('task');
let taskForm = document.getElementById('taskForm');
let exiteForm = document.getElementById('exiteForm');


// delete task
let deletee = document.getElementById('deletee');

task.addEventListener('click', function(){       
    taskForm.classList.remove("hidden");
});
exiteForm.addEventListener('click', function(){       
    taskForm.classList.add("hidden");
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
      showTask();
}

showTask();



// affiche task
function showTask(){

    let todo = document.getElementById('todo');
    let doing = document.getElementById('doing');
    let done = document.getElementById('done');

    todo.innerHTML = "";
    doing.innerHTML = "";
    done.innerHTML = "";
    for(let i=0; i<dataTask.length; i++){
         if(dataTask[i].status === 'TO DO'){

            createHTML(todo , dataTask[i]);
            taskStats();
            
        }else if(dataTask[i].status === 'DOING'){
            
          createHTML(doing,dataTask[i]);
          taskStats();

        }else if(dataTask[i].status === 'DONE'){
          
            createHTML(done, dataTask[i]);
            taskStats();
          
        }
        
    }

    
}

// define the background color of thr priority

function getPriorityColor(priority) {
    switch (priority) {
        case 'P1': return 'bg-redOrange';
        case 'P2': return 'bg-yellow';
        case 'P3': return 'bg-teal';
    } 
}


function createHTML(placeholder , dataTask){
    let div = document.createElement('div');

             div.innerHTML = `
                         <div id="tache" class="bg-darkgrey w-full h-[100px] rounded-[15px] mt-4 border border-white">
                             <div class="flex justify-between p-2"> 
                                 <i class='bx bxs-edit text-white text-3xl'></i>
                                 <h2 class="font-bold text-white text-3xl">${dataTask.titre}</h2>
                                 <i id="deletee" class='bx bxs-trash text-coral text-3xl'></i>
                             </div>
                             <div class="flex justify-between p-2">
                                 
                                 <div class="min-w-24 h-10 ${getPriorityColor(dataTask.priority)} flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.priority}</div>
                                 <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.date}</div>
                             </div>
                         </div>  `

    placeholder.appendChild(div);

    displayTask(dataTask, div);
    // deleteTask(dataTask, div);
    
    div.querySelector('#deletee').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from bubbling to the task container
        deleteTask(task);
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



// clear inputs




//delete task 

function deleteTask(taskDelete) {
       const index = dataTask.indexOf(taskDelete);
        dataTask.splice(index, 1);
        localStorage.setItem('task', JSON.stringify(dataTask));
        showTask();
}




// Sort tasks with date and preority 



// Statistique 


