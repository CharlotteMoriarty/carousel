$(function () {
    var carouselList = $('.carousel-ul');
    
    setInterval(function() {
        carouselList.animate({'marginLeft': -400}, 3000, moveFirstSlide);

    }, 5000);
    
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});

    }
});
