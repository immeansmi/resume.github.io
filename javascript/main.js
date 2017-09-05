$(document).ready(function(){


  function animationHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      }
    );
  };
});

$(document).ready(function(){
      $('#logo').addClass('animated bounceInLeft');   
});



$(document).ready(function(){
  $(window).scroll(function(event) {
    var y = $(this).scrollTop();
    if (y > 360){
      $('#aboutme').addClass('animated bounceInDown'); 
	  $('#animateskill').addClass('animated rollIn common'); 
    }

  });

});