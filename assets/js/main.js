$(document).ready(function () {
    $(window).on('load', function () {
        let preloader = $('.preloader');
        preloader.fadeOut(1000);
    });

    let runeSection = $('#runes');
    let cards = $(runeSection).find('.rune-card');

    // RUNE SEARCH \\
    let runeSearch = $('#rune-search');
    let searchButton = $('#rune-search-button');

    $(searchButton).on('click', function () {
        let runeName = $(runeSearch).val().toLowerCase();

        if (runeName === '') {
            $(cards).show();
            // Reorder the cards so that they are back in alphabetical order
            $('.rune-search-results').append(cards);
            // Remoove any duplicate cards
            $('.rune-search-results').find('.rune-card').each(function () {
                let card = $(this);
                let cardTitle = $(card).find('.card-title').html().toLowerCase();

                if (cardTitle.includes(runeName)) {
                    $(card).show();
                } else {
                    $(card).hide();
                }
            });
            return;
        }

        ButtonAction(this);

        $(cards).each(function () {
            let card = $(this);
            let cardTitle = $(card).find('.card-title').html().toLowerCase();

            if (cardTitle.includes(runeName)) {
                $(card).show();
            } else {
                $(card).hide();
            }
        });

        let hiddenCards = $(cards).filter(function () {
            return $(this).css('display') === 'none';
        });

        let visibleCards = $(cards).filter(function () {
            return $(this).css('display') !== 'none';
        });

        // Reorder cards so that visible cards are first
        $('.rune-search-results').append(hiddenCards);
        $('.rune-search-results').prepend(visibleCards);

        ResetButtonAction(this, 'Search');
    });

    // BACK TO TOP \\
    let backToTopButton = $("#back-to-top");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(backToTopButton).fadeIn();
        } else {
            $(backToTopButton).fadeOut();
        }
    });

    $(backToTopButton).on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // FOOTER \\
    let footerText = $('.footer-text');
    $(footerText).html(`&copy; ${new Date().getFullYear()} Alexander Sanderson`);
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

const ResetButtonAction = (button, text) => {
    $(button).attr('disabled', false);
    $(button).css('opacity', '1');
    $(button).html(text);
}

// TODO: When the user scrolls, keep the navbar at the top of the page. \\
