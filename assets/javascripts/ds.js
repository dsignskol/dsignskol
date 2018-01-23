$(document).ready(function() {
  $('.homepage > .container > .btn-primary').click(function() {
    $(this)
      .next('.courses')
      .slideToggle();
    $(this)
      .find('.fa')
      .toggleClass('fa-angle-down fa-angle-up');
  });

  $('.menu').click(function() {
    $(this)
      .find('.fa')
      .toggleClass('fa-bars fa-close');
    $('.sidebar').toggleClass('active');
    $('body').toggleClass('disable-scroll');
  });

  $('#au').click(function(e) {
    e.preventDefault();

    var isVisible = $('.dropdownHolder.au').is(':visible');
    var isNeighbourVisible = $('.dropdownHolder.cd').is(':visible');

    console.log('au isVisible', isVisible);
    console.log('au isNeighbourVisible', isNeighbourVisible);

    $(this)
      .find('.fa')
      .toggleClass('fa-angle-down fa-angle-up');

    if (isNeighbourVisible) {
      $('.dropdownHolder.cd').slideUp('fast');
      $('#cd .fa').toggleClass('fa-angle-down fa-angle-up');
    }

    if (!isVisible) {
      $('.dropdownHolder.au').slideDown('fast');
    } else {
      $('.dropdownHolder.au').slideUp('fast');
    }
  });

  $('#cd').click(function(e) {
    e.preventDefault();

    var isVisible = $('.dropdownHolder.cd').is(':visible');
    var isNeighbourVisible = $('.dropdownHolder.au').is(':visible');

    console.log('cd isVisible', isVisible);
    console.log('cd isNeighbourVisible', isNeighbourVisible);

    $(this)
      .find('.fa')
      .toggleClass('fa-angle-down fa-angle-up');

    if (isNeighbourVisible) {
      $('.dropdownHolder.au').slideUp('fast');
      $('#au .fa').toggleClass('fa-angle-down fa-angle-up');
    }
    if (!isVisible) {
      $('.dropdownHolder.cd').slideDown('fast');
    } else {
      $('.dropdownHolder.cd').slideUp('fast');
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('.Header, .dropdownHolder').addClass('scrolled');
    } else {
      $('.Header, .dropdownHolder').removeClass('scrolled');
    }
  });
});
