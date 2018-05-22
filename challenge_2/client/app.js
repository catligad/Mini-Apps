$(document).ready(function(){
  $('#formSubmit').keypress(function(e) {
    if (e.which === 13) {
      $('#formSubmit').submit();
      return false;
    }
  });

  $('#formSubmit').submit((event) => {
    const input =  $('#formSubmit').val();
    console.log(input);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/dataIncoming",
      contentType: "application/json",
      data: input
    }).done(function(data) {
      console.log(data)
    });
  })

});