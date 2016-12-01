$(document).ready(function(){
  formGrid(prompt("How many squares would you like your pad's width and height to be?", 16));


  $('.draw').on('click', function(){
    $(this).removeClass().addClass('clicked');
  });

function formGrid(squared) {
  var totalsq = squared * squared;
  var pixelSize = (720 / squared / 720 * 100);
  for(i = 1; i <= totalsq; i++){
    $('.pad').append('<div class="draw"></div>')
  };
  $('.draw').css({'height': pixelSize + '%', 'width': pixelSize + '%'});

}



});
