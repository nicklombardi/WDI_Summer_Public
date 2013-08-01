$(function() {
  $('#favorite-color').hover(changeToGreen);
  $('h1').hover(changeToGreen);
  $('#my-field').keydown(function(event) {
    if (event.which === 84) {
      $('h1:first').hide();
    }
  });

$window.resize(function() {
  alert("resize");
});




});



  $('#my-field').keyup(function(event) {
    if (event.which === 84) {
      $('h1:first').show();
    }
  });


function changeToGreen(){
  $(this).toggleClass("green");
}