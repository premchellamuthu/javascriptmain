const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputbox.value === ''){
        alert("you must write somethng!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    savedata();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagname === "LI"){
         e.target.classlist.toggle("checked");
         savedata();
    }
       else if(e.target.tagname === "span"){
        e.target.parentelement.remove();
        savedata();
       }
}, false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();