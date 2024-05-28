$('.justin-carousel').owlCarousel({
    // center: true,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    // autoHeight: false,
    // autoHeightClass: 'owl-height',
    // stagePadding:170,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000, // this seems to make it autoscroll
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // navText : ["<img src='/wp-content/uploads/2021/07/Arrow-Left-Blair-ITC.png' />","<img src='/wp-content/uploads/2021/07/Arrow-Right-Blair-ITC.png' />"],
    // items:1,
    responsive: {
        0: {
            items: 1,
            // slideBy: 2
        },
        600: {
            items: 2,
            // slideBy: 3
        },
        1000: {
            items: 1,
            // slideBy: 4
        }
    }
});