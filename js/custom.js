/* js */
$(function() {

    $(window).on('load', function(){
        $('#status').delay(400).fadeOut();
        $('#preloader').delay(400).fadeOut('slow');
        $('body').delay(400).css({'overflow':'visible'});
    });

    $("#cursor-map").click(function(){
        $("#content-map").load("detail.html");
        $("#content-map").hide().fadeIn( 'slow' );
    });

});