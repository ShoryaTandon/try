let btn =document.querySelector("Button");
function addTask(){
     let inp =document.querySelector("input");
     let task =inp.value;
     inp.value="";

     let li =document.createElement("li");
     let ul =document.querySelector("ul")

     let cb=document.createElement("input")
     cb.type="checkbox";

     let delbtn =document.createElement("button");
     delbtn.innerText="delete task";

     ul.append(li);
     li.innerText=task;
     

     li.append(cb);
     li.append(delbtn);

   
}

// function delTask(){
//     let li=delbtn.parentElement;
//     li.remove();
// }
// delbtn.addEventListener("click",delTASK);

btn.addEventListener("click",addTask);
