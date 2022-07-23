
$(document).ready(function(){
  var copy='';

      $('#a').on('click', function(){
        copy= $('#text').select();
        document.execCommand('copy');
      });

      $('#b').on('click', function(){
        $('#out').val($(copy).val());
      });

      $('#c').on('click', function(){
        $('#out').val($('#out').val().toUpperCase());
      });

      $('#d').on('click', function(){
        $('#out').val($('#out').val().toLowerCase());
      });
 
      $('#e').on('click', function(){
        $('#out').val(''); 
      });

      $('#f').on('click', function(){
        $('#out').css('color', ' #33b249')
      });

      $('#g').on('click', function(){
        $('#out').css('color', ' #dd7973')
      });

      $('#h').on('click', function(){
        $('#out').css('color', ' #80669d')
      });

}); 