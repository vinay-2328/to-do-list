document.querySelector('#add').onclick = function(){
   if(document.querySelector('#task input').value.length == 0){
       alert("Kindly Enter Task Name!!!!")
   }

   else{
       document.querySelector('#todoValue').innerHTML += `
           <div class="todoValues">
               <span id="taskname">
                   ${document.querySelector('#task input').value}
               </span>
               <button class="delete">
                   <i class="far fa-trash-alt">x</i>
               </button>
           </div>
       `;

       var current_tasks = document.querySelectorAll(".delete");
       for(var i=0; i<current_tasks.length; i++){
           current_tasks[i].onclick = function(){
               this.parentNode.remove();
           }
       }
   }
}