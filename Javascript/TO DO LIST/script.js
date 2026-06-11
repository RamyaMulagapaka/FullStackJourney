let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
// console.log(tasks);
tasks.forEach(function(task){
	// console.log(task)
	createtask(task);
})
document.getElementById("n").addEventListener("keypress",function(e){
	if(e.key==="Enter"){
		addtask();
	}
});
function addtask(){
	var input=document.getElementById("n").value;
	input=input.trim();
	if(input===""){
		alert("Please enter a task");
		return;
	}
	tasks.push(input);
	localStorage.setItem("tasks",JSON.stringify(tasks));
	createtask(input);
}
function createtask(input){
	var li=document.createElement("li");
	li.setAttribute("class","lists");
	li.textContent=input;
	var b=document.getElementById("u");
	b.appendChild(li);
	document.getElementById("n").value="";
	var editbtn=document.createElement("button");
	editbtn.textContent="Edit";
	editbtn.setAttribute("class","but1");
	editbtn.addEventListener("click",Edit);
	function Edit(){
		let newtask=prompt("Here You Go....! . you can edit your task ",li.firstChild.nodeValue);
		if(newtask!==null&newtask.trim()!=""){
			li.firstChild.nodeValue=newtask;
		}
	}
	li.appendChild(editbtn);
	var delbtn=document.createElement("button");
	delbtn.textContent=" Delete";
	delbtn.setAttribute("class","but2");
	delbtn.classList.add("bx","bx-trash");
	delbtn.addEventListener("click",Del);
	function Del(){
		li.remove();
	}
	li.appendChild(delbtn);
	var compbtn=document.createElement("button");
	compbtn.textContent="Complete";
	compbtn.setAttribute("class","complete");
	compbtn.addEventListener("click",completed);
	function completed(){
		editbtn.remove();
		li.classList.add("done");
		compbtn.textContent="✅";
		compbtn.style.backgroundColor="white";
		compbtn.disabled=true;
	}
	li.appendChild(compbtn);
}
