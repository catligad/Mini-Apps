$(document).ready(function(){

  // Snow Falling
  function fallingSnow() {
    
    var $snowflakes = $(), qt = 20;
    
    for (var i = 0; i < qt; ++i) {
        var $snowflake = $('<div class="snowflakes"><img src="http://gifdanceparty.giphy.com/assets/dancers/kitty.gif"></div>');
        $snowflake.css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': (- Math.random() * $('#site').height()) + 'px'
        });
        // add this snowflake to the set of snowflakes
        $snowflakes = $snowflakes.add($snowflake);
    }
    $('#snowZone').prepend($snowflakes);

    $snowflakes.animate({
        top: "500px",
        opacity : "1",
    }, Math.random() + 5000, function(){
        $(this).remove();
    });
}

  $('#pic').click(() => {
    fallingSnow();
  })

  $('#title').click(() => {
    $('#response').html('<img src="https://ninchanese.com/wp-content/uploads/sites/3/2013/03/Cat_puts_on_glasses_to_read_Chinese.gif" id="pic">');
    $('#pic').click(() => {
      fallingSnow();
    });
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