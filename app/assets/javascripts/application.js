//= require rails-ujs
//= require jquery
//= require_tree .
 $(window).scroll(function(){

      var wintop = $(this).scrollTop();

    $('#animated_counter').each(function(){
    if(wintop > $(this).offset().top - ($(window).height())){
      $(this).addClass('radial-chart__value');

    }
  });
});


//var i=$("#counter").html();
//var timer = setInterval(function(){
 //       var j = i++
 //       $("#counter").text(j);
 //         if(i>728){
 //           clearInterval(timer);
 //           $("#counter").addClass("end");
 //            }
 //         }, 105);
