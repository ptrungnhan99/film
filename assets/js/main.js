$(function () {
    $('.tr-movie-active').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.tr-movie-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
            }
        });
        // filter items on button click
        $('.tr-movie-menu-active').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

    });
    //for menu active class
    $('.tr-movie-menu-active button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    })
});