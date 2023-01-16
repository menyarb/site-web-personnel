$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });

    $('#validate').click(function(e){
  
      e.preventDefault();
      
      var quiz1 = $('input[name="quiz1"]:checked').val();
      var quiz2 = $('input[name="quiz2"]:checked').val(); 
      var quiz3 = $('input[name="quiz3"]:checked').val();
      var quiz4 = $('input[name="quiz4"]:checked').val();
      var quiz5 = $('input[name="quiz5"]:checked').val();
      var quiz6 = $('input[name="quiz6"]:checked').val(); 
      var quiz7 = $('input[name="quiz7"]:checked').val();
      var quiz8 = $('input[name="quiz8"]:checked').val();
      var quiz9 = $('input[name="quiz9"]:checked').val();
      var quiz10 = $('input[name="quiz10"]:checked').val(); 

      var total = parseInt(quiz1) + parseInt(quiz2)+parseInt(quiz3) + parseInt(quiz4)+parseInt(quiz5) + parseInt(quiz6)+parseInt(quiz7) + parseInt(quiz8)+parseInt(quiz9) + parseInt(quiz10);
     
      var txt_total = total+' réponse(s) correcte<br /><br/>  1. Qatar<br />2. Oui<br />  3. Oui<br />4.  Brésil, a gagné 5 fois<br />  5. Italie et le Brésil<br />6. Uruguay <br />  7. Vrai<br />8.  1930<br />  9. 1<br />10.  Italie<br />';
      
      $('#response').html(txt_total);
      $('#response').fadeIn();
      
    });
  
  });