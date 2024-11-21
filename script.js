let text=document.getElementById("text-1");
let plus=document.getElementById("btn-inc");
let minus=document.getElementById("btn-dec");
let clear=document.getElementById("btn-clr");
let warning=document.getElementById("warn")


let count=0;

function UpdatedBtns(){
if(count===0){
    clear.style.display="none";
    minus.disabled=true;
    minus.style.backgroundColor="grey"
    warning.innerHTML=`<p style="color:red">Error : Cannot go below 0</p>`;
    
}else{
    clear.style.display="inline";
    minus.disabled=false;
    minus.style.backgroundColor="white";
    warning.innerHTML="";
}
}

function increment(){
   count++;
   text.innerHTML=`<p style="color:#ccc">Your current count is: ${count}</p>` 
   console.log(count);
   
   UpdatedBtns()
}

function decrement(){
    count--;
    text.innerHTML=`<p style="color:#ccc">Your current count is: ${count}</p>`    
    console.log(count)
    UpdatedBtns()
}
function Clear(){
    count=0;
    text.innerHTML=`<p>Your current count is: ${count}</p>`
    console.log(count)
    UpdatedBtns()
}
