var msg = "Hover over an image below."

$(document).ready(function(){
  $(".preview").mouseover(function(){
  	$('#image').css('background-image', 'url('+$(this).attr('src')+')');
  	$('#image').text($(this).attr('alt'));
  });
  $(".preview").focus(function(){
  	$('#image').css('background-image', 'url('+$(this).attr('src')+')');
  	$('#image').text($(this).attr('alt'));
  });
   $(".preview").blur(function(){
   	 $('#image').css('background-image',"url('')");
   	 $('#image').text(msg);
  });
    $(".preview").onmouseleave(function(){
   	 $('#image').css('background-image',"url('')");
   	 $('#image').text(msg);
  });
  
});