$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navabr");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav-contain').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.notification .drop-name').click(function(){
        $('.notification').toggleClass('active');
    });

    $('.avatar .drop-name').click(function(){
        $('.avatar').toggleClass('active');
    });

    $('.filter-icon').click(function(){
        $('.form-popup').addClass('active-form');
    });

    $('.form-popup .overlay').click(function(){
        $('.form-popup').removeClass('active-form');
    });

    $('.form-popup .custom-btn.cancel').click(function(){
        $('.form-popup').removeClass('active-form');
    });

    $('.days-data').click(function(){
        $('.days-contain').toggleClass('active-day');
    });

    $('.add-clinc-info-select .data-selected').click(function(){
        $('.add-clinc-info-select').toggleClass('active');
    });

    $('.add-order-disease .data-selected').click(function(){
        $('.add-order-disease').toggleClass('active');
    });

    $('.add-order-services .data-selected').click(function(){
        $('.add-order-services').toggleClass('active');
    });

    $('.add-order-maxillary .data-selected').click(function(){
        $('.add-order-maxillary').toggleClass('active');
    });

    $('.add-order-upper-right .data-selected').click(function(){
        $('.add-order-upper-right').toggleClass('active');
    });

    $('.add-doctor-second-select-data .data-selected').click(function(){
        $('.add-doctor-second-select-data').toggleClass('active');
    });


    $('.man-data').click(function(){
        $('.man-apear').addClass('active-man-box');
        $('.woman-apear').removeClass('active-man-box');
    });

    $('.woman-data').click(function(){
        $('.man-apear').removeClass('active-man-box');
        $('.woman-apear').addClass('active-man-box');
    });

    $('.owl-doctors').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // var btns = document.getElementsByClassName("select-data");
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // };

});

$(document).ready(function() {
    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
        }
    });
}); 