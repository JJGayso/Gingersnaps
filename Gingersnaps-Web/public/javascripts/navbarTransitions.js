$(document).ready(function() {
  $("#drinkMenuButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#drinkMenu").offset().top - 60
    }, 1000);
  });
});
