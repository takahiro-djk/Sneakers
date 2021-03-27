(function ($) {
  var $nav = $('.header');
  var $btn = $('.nav_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on('click', function () {
    $nav.removeClass(open);
  });
})(jQuery);

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: '10%',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});

$(function () {
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 100){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});