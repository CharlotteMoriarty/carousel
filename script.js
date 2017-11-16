$(function () {
    var carouselList = $('carousel-ul');
    
    setInterval(function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide());

    }, 1000);
    
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});

    }
});