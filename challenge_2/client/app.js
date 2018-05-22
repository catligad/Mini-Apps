$(document).ready(function(){
  

















  $('#formSubmit').keypress(function(e) {
    if (e.which === 13) {
      $('form#login').submit();
      return false;
    }
  })
});