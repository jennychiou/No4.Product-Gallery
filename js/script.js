// JavaScript source code
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

function page2(position = 0) {
    $('.container').toggleClass('switcher');
    $('.page').toggleClass('switcher');
    $('html, body').scrollTop(position);
}

$(document).ready(function () {
    let last_position = 0;
    $('.img_01').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_02').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_03').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_04').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_05').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_06').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.img_07').click(function (e) {
        last_position = $('html, body').scrollTop();
        page2();
    });
    $('.back').click(function (e) {
        page2(last_position);
    });
});