let titre = document.getElementById('titre');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let date = document.getElementById('date');
let submit = document.getElementById('submit');
let status = document.getElementById('status');


// Open task form
let task = document.getElementById('task');
let taskForm = document.getElementById('taskForm');
let exiteForm = document.getElementById('exiteForm');

task.addEventListener('click', function(){       
    taskForm.classList.remove("hidden");
});
exiteForm.addEventListener('click', function(){       
    taskForm.classList.add("hidden");
});


// create task
let dataTask;
if(localStorage.getItem('task') != null){
    dataTask = JSON.parse(localStorage.getItem('task'));
    
}else{
    dataTask=[];
}
submit.onclick = function(){
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
    console.log(1);
   
    let todo = document.getElementById('todo');
    let doing = document.getElementById('doing');
    let done = document.getElementById('done');

    todo.innerHTML = "";
    doing.innerHTML = "";
    done.innerHTML = "";
    for(let i=0; i<dataTask.length; i++){
         if(dataTask[i].status === 'TO DO'){

            createHTML(todo , dataTask[i]);
            
        }else if(dataTask[i].status === 'DOING'){
            
          createHTML(doing,dataTask[i]);

        }else if(dataTask[i].status === 'DONE'){
          
            createHTML(done, dataTask[i]);
          
        }
            
    }
}


function createHTML(placeholder , dataTask) {
    let div = document.createElement('div');
    if(dataTask.priority === 'P1'){

        div.innerHTML = `
        <div id="tache" class="bg-darkgrey w-full h-[100px] rounded-[15px] mt-4 border border-white">
                        <div class="flex justify-between p-2"> 
                            <i class='bx bxs-edit text-white text-3xl'></i>
                            <h2 class="font-bold text-white text-3xl">${dataTask.titre}</h2>
                            <i class='bx bxs-trash text-coral text-3xl'></i>
                        </div>
                        <div class="flex justify-between p-2">
                            
                            <div class="min-w-24 h-10 bg-redOrange flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.priority}</div>
                            <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.date}</div>
                        </div>
                    </div>  `
                }else if(dataTask.priority === 'P2'){
                            div.innerHTML = `
                            <div id="tache" class="bg-darkgrey w-full h-[100px] rounded-[15px] mt-4 border border-white">
                                            <div class="flex justify-between p-2"> 
                                                <i class='bx bxs-edit text-white text-3xl'></i>
                                                <h2 class="font-bold text-white text-3xl">${dataTask.titre}</h2>
                                                <i class='bx bxs-trash text-coral text-3xl'></i>
                                            </div>
                                            <div class="flex justify-between p-2">
                                                
                                                <div class="min-w-24 h-10 bg-yellow flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.priority}</div>
                                                <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.date}</div>
                                            </div>
                                        </div>  `
                }else if(dataTask.priority === 'P3'){
                    div.innerHTML = `
                    <div id="tache" class="bg-darkgrey w-full h-[100px] rounded-[15px] mt-4 border border-white">
                                    <div class="flex justify-between p-2"> 
                                        <i class='bx bxs-edit text-white text-3xl'></i>
                                        <h2 class="font-bold text-white text-3xl">${dataTask.titre}</h2>
                                        <i class='bx bxs-trash text-coral text-3xl'></i>
                                    </div>
                                    <div class="flex justify-between p-2">
                                        
                                        <div class="min-w-24 h-10 bg-teal flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.priority}</div>
                                        <div class="min-w-40 h-10 bg-customGray flex justify-center font-bold text-white text-1xl rounded-[4px]">${dataTask.date}</div>
                                    </div>
                                </div>  `
        }
    placeholder.appendChild(div);
}



// clear inputs

// Read

//delete task



// Sort tasks with date and preority 



// Statistique 


