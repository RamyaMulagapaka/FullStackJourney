console.log("js is working");
function analyze(){
	var u=document.getElementById("d");
	var input=document.getElementById("n").value;
	input=Number(input);
	var para=document.createElement("p");
	para.setAttribute("class","even_odd");
	u.append(para);
	if(input%2===0){
		para.textContent=input+" is an Even Number";	
	}
	else{
		para.textContent=input+" is an Odd Number";
	}
	var sum=0;
	var factorial=1;
	var arr=[];
	for(let i=1;i<=input;i++){
		arr.push(i);
		sum=sum+i;
		factorial=factorial*i;
	}
	var para2=document.createElement("p");
	para2.setAttribute("class","even_odd");
	u.append(para2);
	para2.textContent="Numbers are "+arr;

	var para3=document.createElement("p");
	para3.setAttribute("class","even_odd");
	u.append(para3);
	para3.textContent="Sum Of  First "+input+" Numbers : "+sum;

	var para4=document.createElement("p");
	para4.setAttribute("class","even_odd");
	u.append(para4);
	para4.textContent="Factorial of "+input+" : "+factorial;

	var n=input;
	var rem=0;
	var rev=0;
	while(n!=0){
		rem=n%10;
		rev=rev*10+rem;
		n=Math.floor(n/10);
	}
	var para5=document.createElement("p");
	para5.setAttribute("class","even_odd");
	u.append(para5);
	if(rev===input){
		para5.textContent=input+" is a palindrome";
	}
	else{
		para5.textContent=input+" is a not palindrome";
	}

	if(input>170){
		var para6=document.createElement("marquee");
		para6.setAttribute("class","alerting");
		u.append(para6);
		para6.textContent="Number too large ! Factorial not supported...";
	}



}