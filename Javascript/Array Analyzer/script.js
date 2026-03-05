function Array_Analyzer(){
	var input=document.getElementById("n").value;
	u=document.getElementById("first");
	u.innerHTML="";
	const arr=[];
	let num="";
	let i;
	let count=0;
	for(let i=0;i<input.length;i++){
		if(input[i]!==","){
			num+=input[i];
		}
		else{
			arr.push(parseInt(num));
			num="";
			count++;
		}
	}
	if(num!==""){
		arr.push(parseInt(num));
		count++;
	}
	let sum=arr[0];
	let max=arr[0];
	let min=arr[0];
	for(let j=1;j<arr.length;j++){
		if(arr[j]>max){
			max=arr[j];
		}
		if(arr[j]<min){
			min=arr[j];
		}
		sum=sum+arr[j];
	}
	let evencount=0;
	let oddcount=0;
	for(let k=0;k<arr.length;k++){
		if(arr[k]%2==0){
			evencount+=1;
		}
		else{
			oddcount+=1;
		}	
	}
	var para1=document.createElement("p");
	para1.setAttribute("class","a");
	para1.textContent="Given Numbers : "+arr;
	u.appendChild(para1);
	var para2=document.createElement("p");
	para2.setAttribute("class","a");
	para2.textContent="Total number of elements : "+count;
	u.appendChild(para2);
	var para3=document.createElement("p");
	para3.setAttribute("class","a");
	para3.textContent="maximum number : "+max;
	u.appendChild(para3);
	var para4=document.createElement("p");
	para4.setAttribute("class","a");
	para4.textContent="Minimum Number : "+min;
	u.appendChild(para4);
	var para5=document.createElement("p");
	para5.setAttribute("class","a");
	para5.textContent="Sum of all elements : "+sum;
	u.appendChild(para5);
	var para6=document.createElement("p");
	para6.setAttribute("class","a");
	para6.textContent="Total no-of even numbers : "+evencount;
	u.appendChild(para6);
	var para7=document.createElement("p");
	para7.setAttribute("class","a");
	para7.textContent="Total no-of odd numbers : "+oddcount;
	u.appendChild(para7);
}

