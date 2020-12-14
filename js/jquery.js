"use strict";
jQuery(function(){

  //skill progress bar event
  
  $(window).scroll(function() {

    if($(window).scrollTop() >= $('#skills').offset().top-100) {
      jQuery('.skillgraph__bar').each(function() {
    
        jQuery(this).find('.skill__value').stop().animate({
          width: $(this).attr('data-percent')
        }, 5000);
      });
    }else {
        jQuery('.skillgraph__bar').each(function() {
      
          jQuery(this).find('.skill__value').stop().animate({
            width:0 +'%'
          }, 250);
        });
      }
  });


    
    
  


});