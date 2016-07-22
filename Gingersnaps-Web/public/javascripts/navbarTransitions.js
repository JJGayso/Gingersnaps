$(document).ready(function() {

  $("#homeButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#myCarousel").offset().top - 60
    }, 1000);
  });

  $("#drinkMenuButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#drinkMenu").offset().top - 60
    }, 1000);
  });

  $("#foodMenuButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#foodMenu").offset().top - 60
    }, 1000);
  });

  $("#infoButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#info").offset().top - 60
    }, 1000);
  });
});
