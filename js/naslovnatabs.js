$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      $('.tab-pane').removeClass('show active');
      $(target).addClass('show active');
      $('.tab-content').children().addClass('fade-out');
      $(target).removeClass('fade-out').addClass('fade-in');
    });
  });