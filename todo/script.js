let globalid = 1;

function markAsDone(id){
    const todo = document.getElementById(id);
    todo.children[2].innerHTML = "Done!";
}

function buildChild(title,disc,id){
    const child = document.createElement("div");
    const firstMiniChild = document.createElement("div");
    const secondMinChild = document.createElement("div");
    const thirdMiniChild = document.createElement("button");
    firstMiniChild.innerHTML = title;
    secondMinChild.innerHTML = disc;
    thirdMiniChild.innerHTML = "mark as done";
    thirdMiniChild.setAttribute("onclick",`markAsDone(${id})`);
    child.appendChild(firstMiniChild);
    child.appendChild(secondMinChild);
    child.appendChild(thirdMiniChild);
    child.setAttribute("id",id);
    return child;
}

function addTodo(){
    let title = document.getElementById("title").value;
    let disc = document.getElementById("discription").value;
    
    const parent = document.getElementById("container"); 
    parent.appendChild(buildChild(title,disc,globalid++));
    
}