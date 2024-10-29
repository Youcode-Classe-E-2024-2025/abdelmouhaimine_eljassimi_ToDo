let titre = document.getElementById('titre');
let description = document.getElementById('description');
let section = document.getElementById('section');
let date = document.getElementById('date');
let submit = document.getElementById('submit');



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


// add task
let dataTask;
if(localStorage.task != null){
    dataTask = JSON.parse(localStorage.task);
}else{
    dataTask=[];
}
submit.onclick = function(){
     let newTask = {
        titre : titre.value,
        description : description.value,
        section : section.value,
        date : date.value,
     }

     dataTask.push(newTask);
     console.log( dataTask);

    //  Save local storage
     localStorage.setItem('task', JSON.stringify(dataTask));

    //  hide the popup form 
      taskForm.classList.add("hidden");
}







// create task



// clear inputs

// Read

//delete task



// Sort tasks with date and preority 



// Statistique 


