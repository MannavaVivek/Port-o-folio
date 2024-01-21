(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>Software Engineer</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Robotics Enthusiast</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Solo Traveller</strong>')
    .pauseFor(1500)
    .start();

function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    var icon = projectDetails.previousElementSibling; // Adjust as needed

    // Check if the details are currently open
    if (projectDetails.style.height) {
        // If open, close them by setting height to 0
        projectDetails.style.height = null;
        icon.classList.remove('rotate');
    } else {
        // Temporarily set height to 'auto' to calculate the full expanded height
        var prevHeight = projectDetails.style.height;
        projectDetails.style.height = "auto";
        var fullHeight = projectDetails.scrollHeight + "px";
        projectDetails.style.height = prevHeight;

        // After the browser has had a chance to paint, set the height to its full height
        setTimeout(() => {
            projectDetails.style.height = fullHeight;
        }, 0);
        icon.classList.add('rotate');
    }
}

  
  
