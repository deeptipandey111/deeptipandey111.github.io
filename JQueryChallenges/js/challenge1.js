$(document).ready(function(){

  $("#subscribe").change(function() {
    if (this.checked) {
      $('#emailField').show();		
      console.log("selected");
    } else {
      $('#emailField').hide();
      console.log("not selected");
    }
    
  });

});
