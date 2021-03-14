 $('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.thumbnail_slider',
  autoplay: true,
  autoplaySpeed: 1000,
});

$('.thumbnail_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.banner_slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});