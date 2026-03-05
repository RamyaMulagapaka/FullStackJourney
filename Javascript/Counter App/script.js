let h=[];
function incre(){
	var num=document.getElementById("num").innerText;
	var input=parseInt(num);
	input=input+1;
	document.getElementById("num").innerText=input;
	h.push("+1  ---> "+input);	
}
function decre(){
	var num=document.getElementById("num").innerText;
	var input=parseInt(num);
	input=input-1;
	document.getElementById("num").innerText=input;
	h.push("-1 ---> "+input);
}
function start(){
	document.getElementById("num").innerText=0;
	h.push("set to 0");
}
function history(){
	var div=document.getElementById("f");
	div.innerHTML="";
	h.forEach((item)=>{
		var p=document.createElement("p");
		p.setAttribute("class","his");
		p.textContent=item;
		div.appendChild(p);
});
}

function os(){
	var u=document.getElementById("sidebar");
	if(u.style.left==="0px"){
		u.style.left="-200px";
	}
	else{
		u.style.left="0px";
	}
}

