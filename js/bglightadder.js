window.addEventListener('DOMContentLoaded', function() {
    // Check the window width on page load
    checkWindowWidth();
  
    // Check the window width whenever the window is resized
    window.addEventListener('resize', checkWindowWidth);
  });
  
  function checkWindowWidth() {
    var navbar = document.querySelector('.navbar'); // Replace with the appropriate selector for your navbar element
  
    if (window.innerWidth < 992) {
      navbar.classList.add('bg-light');
    } else {
      navbar.classList.remove('bg-light');
    }
  

    if (window.innerWidth < 992) {
    navbar.classList.remove('fade-in');
    } else {
    navbar.classList.add('fade-in');
    }
}