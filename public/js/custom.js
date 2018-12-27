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

// $(function() {
//         $.scrollify({
//         section : "#test-example"
//     });
// });
