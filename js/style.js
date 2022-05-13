$(document).ready(function() {
  // 漢堡開關
  $('.burger').click(function() {
    $(this).toggleClass('open');
    $('.navbar').toggleClass('show');
  });
})
