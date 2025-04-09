$(document).ready(function() {
  $('#mobile-btn').on('click', function() {
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
  });

  $(window).on('scroll', () => {
    const header = $('header');
    const scrollPosition = $(window).scrollTop - header.outerHeight();

    if(scrollPosition <= 0 ) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)')
    }
  })
});
