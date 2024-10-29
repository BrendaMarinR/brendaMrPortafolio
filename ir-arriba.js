    $(document).ready(function(){

    
      $('.goSky').click(function(){
        $('body,html').animate({
          scrollTop:'0px'
        },300);
      });
  

    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.goSky').slideDown(200);
      } else {
        $('.goSky').slideUp(200);

      }
    });
  });

  