console.log("Todo List");

// adding new Task 

// link for our UL which contains all tasks

const tasks = document.querySelector(".tasks");

// link of form which will give the user inserted task
const getTask = document.querySelector(".add");
// console.log(tasks);

// adding listner to our form
// which will listen to submit

const addNewTask = (e)=>{
    e.preventDefault();
    const newTask = e.target[0].value.trim();
    // console.log(newTask);
    if(newTask != ""){
        // creating new element LI 
        const li = document.createElement("li");
        li.classList.add("task");
        li.innerHTML = `${newTask}<span>X</span>`;

        // add li to ul / add task to tasks

        tasks.appendChild(li);
    }
    getTask.reset();
    

}

getTask.addEventListener("submit",addNewTask);


// deleteing the task


function handleClick(e){
    // event bubbling 
    e.stopPropagation();
    // console.log(e.target.tagName);
    if(e.target.tagName ==="LI"){
        // e.target.style.textDecoration = "line-through";
        e.target.classList.toggle("cross");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}
tasks.addEventListener("click",handleClick);

// allTasks.forEach(task=>{
    //     task.addEventListener("click",handleClick);
    // })
    
    
// adding search feature
const search = document.querySelector(".search");
    


const handleKeyPress =(e)=>{
    const allTasks = document.querySelectorAll(".task");
    // console.log(e.target.value);
    const key = e.target.value;
    allTasks.forEach((task)=>{
        if(!task.textContent.includes(key)){
            task.classList.add("hide");
        }
        else{
            task.classList.remove("hide");
        }
    })

}
search.addEventListener("keyup",handleKeyPress);
