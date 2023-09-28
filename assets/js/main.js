$(document).ready(function() {
    $(window).on('load', function() {
        let preloader = $('.preloader');
        preloader.fadeOut(1000);
    });

    // FOOTER LOGIC \\
    let footerText = $('.footer-text');
    $(footerText).html(`&copy; ${new Date().getFullYear()} Alexander Sanderson`);

    let buttons = $('.btn');
    $(buttons).on('click', function() {
        ButtonAction(this);
    });

    const ButtonAction = (button) => {
        let width = $(button).width();
        let height = $(button).height();

        $(button).attr('disabled', true);
        $(button).css('opacity', '0.5');
        $(button).html('<i class="fa fa-spinner fa-spin"></i>');
        $(button).width(width);
        $(button).height(height);
    }
});