$(document).ready(function(){
  for(i = 0; i < 256; i++){
  $('#pad').append('<div id="drawWrap"><div id="draw"></div></div>')
}
});
$(document).ready(function(){
  $('#draw').click(function(){
    $(this).fadeTo('fast', 0);
    console.log('1');
  });
});



$(document).ready(function(){
  $('#sub').click(function(){
    var pixels = $('#pix').attr();
    $('#pad').append();
    console.log(pixels);
  });
});
