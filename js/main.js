$( window ).on( "load", function() {
    console.log('Serv  ok');
    $(".pre-loader").fadeOut("slow");
});

$(document).ready(function () {

    // MODAL FOOTER OPEN
    $('#open-modal').click(function () {
        $('#modal').css({
            'position': 'fixed'
        });
    });

    //MODAL FOOTER CLOSE
    $('#close-modal').click(function () {
        $('#modal').css({
            'position': 'unset'
        });
    });
  
});
