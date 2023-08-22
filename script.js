const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const addBtn  = document.querySelector(".btn");

// addBtn.addEventListener('click', addTask());


// adding new task to todo
function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }else{
        let listItem = document.createElement("li");
        listItem.textContent = inputBox.value;
        listContainer.appendChild(listItem);
        // close icon
        let closeIcon = document.createElement("span");
        closeIcon.innerHTML = "\u00d7" ;
        listItem.appendChild(closeIcon);

    }

    // clearing input field
    inputBox.value = "";
    // updating data in localstorage after adding every new item
    saveDate();
}

listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        // adding or removing checked class
        e.target.classList.toggle("checked");
        // updating data in localstorage
        saveDate();
    }else if(e.target.tagName === "SPAN"){
        // deleting list item 
        e.target.parentElement.remove();
        // updating data in localstorage
        saveDate();
    }
}, false);

// storing data in localStorage
function saveDate(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

// after refreshing or opening the browser to show the existing list itens
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTasks();