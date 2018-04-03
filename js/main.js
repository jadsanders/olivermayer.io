/* global $ */


$(window).scroll(function() {
    
    var transition = "0.3s";
    
    if ($(this).scrollTop() > 640) { // this refers to window
        $('.custom-nav').addClass('custom-nav-small');
        $('.custom-brand').addClass('custom-brand-small');
        $('.custom-nav-link').addClass('custom-nav-link-small');
        $('.custom-brand svg').css({width: '40px', height: '40px', transition: transition});

    } else {
        $('.custom-nav').removeClass('custom-nav-small');
        $('.custom-brand').removeClass('custom-brand-small');
        $('.custom-nav-link').removeClass('custom-nav-link-small');
        $('.custom-brand svg').css({width: '80px', height: '80px', transition: transition});
    }
});


$('.carousel').carousel({
    interval: false
});


$("#projects-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#projects-section").offset().top
    }, 800, 'easeInOutExpo');
});

$("#hi-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#hi-section").offset().top
    }, 800, 'easeInOutExpo');
});