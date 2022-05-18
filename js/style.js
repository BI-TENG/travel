$(document).ready(function() {
  // 漢堡開關
  $('.burger').click(function() {
    $(this).toggleClass('open');
    $('.navbar_box').toggleClass('show');
  });

  $('a[href^="#"]').click(function(event) {
    let $target = $(this.getAttribute('href'));
    if ($target.length) {
      event.preventDefault();
      $('html,body').stop().animate({
        scrollTop: $target.offset().top - 80
      }, 500);
    }
  })

  var windowWidth = $(window).width();
  if (windowWidth < 1199) {
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      $('.burger').toggleClass('open');
      $('.navbar_box').toggleClass('show');
    })
  }

  $('.bus_carousel').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      501: {
        items: 3,
        center: false,
        loop: false,
      }
    }
  });

  $('.choose_carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 30,
    dots: true,
    responsive: {
      768: {
        items: 2,
        margin: 50,
        loop: false,
        dots: true
      },
      1000: {
        items: 3,
        margin: 50,
        loop: false,
        dots: false
      }
    }
  });

  $('.tours_carousel').owlCarousel({
    responsive: {
      0: {
        items: 2,
        margin: 30,
        loop: true,
        autoplay: true,
        center: true,
        dots: false
      },
      501: {
        items: 2,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        center: false,
        dots: true
      },
      1024: {
        items: 3,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        center: false,
        dots: true
      },
      1400: {
        items: 4,
        margin: 50,
        loop: false,
        autoplay: false,
        center: false,
        dots: false
      }
    }
  });

  $('.reviews_carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 30,
    dots: true,
    responsive: {
      768: {
        items: 2,
        margin: 50,
        loop: false,
        dots: true
      },
      1000: {
        items: 3,
        margin: 50,
        loop: false,
        dots: false
      }
    }
  });

})
