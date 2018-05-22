$(document).ready(function(){
  $('#title').click(() => {
    $('#response').html('<img src="https://ninchanese.com/wp-content/uploads/sites/3/2013/03/Cat_puts_on_glasses_to_read_Chinese.gif" id="pic">')
  })

  $('#buttonSubmit').click(function() {
    $('#formSubmit').submit();
  });

  $('#clear').click(function() {
    $('#formSubmit').val('');
  });

  $('#formSubmit').submit((event) => {
    const input =  $('#formSubmit').val();
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/dataIncoming",
      contentType: "application/json",
      data: input
    }).done(function(data) {
      $('#response').html(data)
    });
  });

});