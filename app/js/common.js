window.addEventListener('DOMContentLoaded', () => {

    // Rating stars

    let $star_rating = $('.star-rating .fa');

    let SetRatingStar = function () {
        return $star_rating.each(function () {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };

    $star_rating.on('click', function () {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();
    $(document).ready(function () {

    });

    // add class and remove color white and black

    $(".header-page__btn").click(function (e) {
        e.preventDefault();
        $(".header-page__btn").removeClass("active");
        $(this).addClass("active")
        $("body").addClass("active")
    })

    $(".header-page__btn:first-child").click(function (e) {
        $("body").removeClass("active")
    })

    // add class and remove class grid item

    $(".toggle-btn__item").click(function (e) {
        e.preventDefault();
        $(".toggle-btn__item").removeClass("active");
        $(this).addClass("active")
        $(".grid").removeClass("active")
    })

    $(".toggle-btn__item:last-child").click(function () {
        $(".grid").addClass("active")
    })



})