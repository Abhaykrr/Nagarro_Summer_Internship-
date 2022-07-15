 function addTask() {
    let content=$('input').val();
     if(content==""||content=="Enter ToDo"){ 
        $('input').val('Enter ToDo');
        setTimeout(() => {
         $('input').val(''); 
        }, 1000);
        return false;
     }
    $('ul').append('<li> <p>' + content + '</p>  <button class="check"><i class="fa fa-check"></i> </button> <button class="delete"><i class="fa fa-times"></i> </button> </li>')
    $('input').val('');
}

 $('ul').on('click','.delete', function(){
   $(this).parent('li').remove();
 })        

 $('ul').on('click','.check', function(){
    $(this).parent('li').toggleClass('completed');
  }) 

$('.add').on('click',addTask);
$('input').on('keydown',function(e){
    if(e.which==13){
        addTask();
    }
})
