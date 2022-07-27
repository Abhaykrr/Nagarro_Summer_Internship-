$(document).ready(function () {
 
     const slides = $('.slide');
     var counter=0;
      for(let i =0;i<slides.length;i++){
        slides[i].style.left=`${i*100}%`
      }

      setInterval(() => {
        counter++;
        if(counter==4) counter=0;
        for(let i =0;i<slides.length;i++){
         slides[i].style.transform=`translateX(-${counter*100}%)`
       }
      }, 2000);

      $('#btn').on('click',function(){
        counter--;
        if(counter==-1) counter=3;
        for(let i =0;i<slides.length;i++){
         slides[i].style.transform=`translateX(-${counter*100}%)`
       }
      });

      $('#btn1').on('click',function(){
         counter++;
         if(counter==4) counter=0;
         for(let i =0;i<slides.length;i++){
          slides[i].style.transform=`translateX(-${counter*100}%)`
        }
      });


  });




