$(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar-brand").addClass("red-logo");
        } else {
            $(".navbar-brand").removeClass("red-logo");
        }
    });
});


$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});