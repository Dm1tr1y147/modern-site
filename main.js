$(document).ready(function() {
    $(document).scroll(function () {
        var s_top = $(window).scrollTop();
        if (s_top > 0) {
            $("#navig").addClass("scrolled");
        } else {
            $("#navig").removeClass("scrolled");
        }
    });
    $('#menu').click(function() {
        $('#mm').toggleClass("showenl");
    });
    $(".mma").click(function() {
        $('.showenl').toggleClass("showenl");
    });
    $("#gototop").click( function() {
        $('html, body').stop().animate({
            scrollTop: 0
        });
    });
});