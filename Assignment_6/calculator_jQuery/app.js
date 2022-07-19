let num1 ='';
let num2 ='';
let operator='';
let total='';

const history = $('.history');


$(document).ready(function(){
    $('button').on('click' ,function (e){
        let btn = e.target.innerHTML;

        if(btn=='C') return;

        if((btn>='0' && btn<='9'||btn== '.')){
            handleNumber(btn);
        }else{
            handleOperator(btn);
        }
    });

    $('#c').on('click',function(){  
        removeHistory();
    });


    $('#ac').on('click',function(){
      num1='';
      num2='';
      operator='';
      total='';

      displayButton('0');
    });

    $('#enter').on('click', function(){
       handleTotal();
    });

});



function handleNumber(num){

    if(operator==""){
     num1+=num;
     displayButton(num1);
    }else{
     num2+=num;
     displayButton(num1+operator+num2);
    }

    // if(num1===""){
    //     num1=num
    // }else{
    //     num2=num
    // }

    //displayButton(num);
}

function handleOperator(oper){

     if(operator===''){
        operator=oper;
        displayButton(num1+operator);
     }    

   

    // if(operator===""){
    //     operator=oper;
    // }else{
    //   handleTotal();
    //   operator=oper;
    // }
}

function handleTotal(){ 
    total='';
    switch(operator){
        case '+':
            total+= +num1 + +num2;
            displayButton(total);
        break;

        case '-':
            total+= +num1 - +num2;
            displayButton(total);
        break;
 0
        case '/':
            total+= +num1 / +num2;
            displayButton(total);
        break;

        case '*':
            total+= +num1 * +num2;
            displayButton(total);
        break;

        case '%':
            total+= +num1 % +num2;
            displayButton(total);
        break;

        case '^':
            total+= Math.pow(num1,num2);
            displayButton(total);
        break;
    }

    addHistory();
    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function addHistory(){

    console.log("hello");
    
    history.append(`<div class="his">` + num1 + ` `+ operator +  ` `+ num2 + ` = `+ total +`</div>`);

   
}

function removeHistory(){
    let already = $('.history div:first-child')
    if(already){
     $('.his').remove();
    }

    num1='';
    num2='';
    operator='';
    total='';

    displayButton('0');
}


function updateVariables(){
    num1=total;
    num2="";
    operator='';
}

