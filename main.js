$(document).ready(function () {
  // Sliders
  //// Slider Top
  $('.js-items-slider-container .slider-for').slick({
 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2500,
    autoplaySpeed: 2500,
    autoplay: true,
    rtl: false, // left to right
    asNavFor: '.js-items-slider-container .slider-nav'
  });
  $('.js-items-slider-container .slider-nav').slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    speed: 2500,
    autoplaySpeed: 2500,
    autoplay: true,
    rtl: false, // left to right
    cssEase: 'linear',
    asNavFor: '.js-items-slider-container .slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    accessibility: true,
    onAfterChange: function (slide, index) {
      console.log("slider-nav change");
      console.log(this.$slides.get(index));
      $('.current-slide').removeClass('current-slide');
      $(this.$slides.get(index)).addClass('current-slide');
    },
    onInit: function (slick) {
      $(slick.$slides.get(0)).addClass('current-slide');
    }
  });
});
$(document).ready(function () {
  $('.cta_wrap_inner_button').click(function () {
    $('.cta_wrap').toggleClass('cta-open')
  })
});
$(document).ready(function () {
  $('.curent_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1500,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

$('.carousel').owlCarousel({
  margin: 15,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 100,
  autoplayHoverPause: true,
  rtl: false,
  "navText": [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});

$('.caro').owlCarousel({
  margin: 15,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 100,
  nav: true,
  autoplayHoverPause: true,
  rtl: false,
  "navText": [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});
// testmonial
$('.testmonial').owlCarousel({
  margin: 15,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 100,
  autoplayHoverPause: true,
  rtl: false,
  "navText": [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g>
<circle opacity="0.5" fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%" style=""></circle>
<circle fill="none" stroke="#c28562" cx="71%" cy="50%" r="24%"></circle>
</g>
<polygon fill="#c28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>`],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});

// Read more
$(document).ready(function () {
  $('.moreless-button').click(function () {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
  $('.menu-arrow').click(function () {
    $('ul.sub-menu.cus_menu').slideToggle('500')
  });
  $('.mobile-header-opener ').click(function () {
    $('ul#menu-main-menu-2').slideToggle('500')
  });
});
//  side menu toggle 
$('.toggle_arrow').click(function () {
  $('ul.side_sub-menu').slideToggle('500')
});
$('.cta_wrap_inner_two').click(function () {
  $('body').addClass('side_open');
});
$('.close_icon').click(function () {
  $('body').removeClass('side_open');
});

// search js header 
$('.search-icon ').click(function () {
  $('.header').addClass('search_open');
});
$('.src-close ').click(function () {
  $('.header').removeClass('search_open');
});
// Back to top 
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
  $(".back-to-top").addClass('bp_visible');
  } else {
  $(".back-to-top").removeClass('bp_visible');
  }
  });$(".back-to-top").click(function() {
  $("HTML, BODY").animate({
  scrollTop: 0
  }, 800);
  });