
let inp=document.querySelector('input');
let add=document.querySelector('.add');

function addTask() {

            let content=document.querySelector('input').value;

            if(content==''||content=="Please Enter Something"){
                document.querySelector('input').value="Please Enter Something";
                document.querySelector('input').style.color="yellow";
                setTimeout(() => {
                    document.querySelector('input').value="";
                }, 1000);
                
            }else{

                document.querySelector(".todo").innerHTML
                += `<li class="task">

                    <p>
                     ${document.querySelector('input').value}
                     </p>
                   
                            <button class="check">
                            <i class="fa fa-check"></i>
                            </button> 

                            <button class="delete">
                            <i class="fa fa-times"></i>
                            </button> 

                           
                    </li > `;

                    let current_tasks = document.querySelectorAll('.delete');


                    for (let i = 0; i < current_tasks.length; i++) {
                        current_tasks[i].onclick = function () {
                            this.parentNode.remove();
                        }
                    }

                    let tasks = document.querySelectorAll('.check');
                  

                    for (let i = 0; i < tasks.length; i++) {
                        tasks[i].onclick = function () {
                            this.parentElement.classList.toggle('completed');
                        }
                    }



                    document.querySelector('input').value="";
            }
        }



add.addEventListener('click', addTask);
window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addTask();
    }
})
