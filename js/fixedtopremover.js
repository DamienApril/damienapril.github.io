window.addEventListener('DOMContentLoaded', function() {
    // Check the window width on page load
    checkWindowWidth();
  
    // Check the window width whenever the window is resized
    window.addEventListener('resize', checkWindowWidth);
  });
  
  function checkWindowWidth() {
    var navbar = document.querySelector('.navbar'); // Replace with the appropriate selector for your navbar element
  
    if (window.innerWidth < 992) {
      navbar.classList.remove('fixed-top');
    } else {
      navbar.classList.add('fixed-top');
    }
  }