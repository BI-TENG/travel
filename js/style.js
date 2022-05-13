$(document).ready(function() {
  // 漢堡開關
  $('.burger').click(function() {
    $(this).toggleClass('open');
    $('.navbar_box').slideToggle();
  });

  $('a[href^="#"]').click(function(event) {
    let $target = $(this.getAttribute('href'));
    if ($target.length) {
      event.preventDefault();
      $('html,body').stop().animate({
        scrollTop: $target.offset().top - 95
      }, 500);
    }
  })

  var windowWidth = $(window).width();
  if (windowWidth < 991) {
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      $('.navbar_box').slideToggle();
      $('.burger').toggleClass('open');
    })
  }
})
