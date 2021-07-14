document.addEventListener("DOMContentLoaded", () => {

  let ulTasks = document.querySelector("ul#tasks");
  let form = document.getElementById("create-task-form");
  
  form.addEventListener('submit', function(event){
    event.preventDefault();
    let input = document.getElementById("new-task-description");
    let taskFromInput = document.getElementById("new-task-description").value;
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "X";
    li.innerText = taskFromInput;
    li.appendChild(button);
    ulTasks.appendChild(li);
    input.value = "";
    button.addEventListener("click",handleDelete);
  });
});

function handleDelete(e){
  e.target.parentElement.remove();
}


