function filterProjects(category) {
  var items = document.querySelectorAll('.project-item');
  items.forEach(function(item) {
      if (item.classList.contains(category) || category === 'all') {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });

  // Update button appearance
  var buttons = document.querySelectorAll('.category-button');
  buttons.forEach(function(button) {
      if (button.textContent.toLowerCase() === category) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });
}

function toggleProjectDetails(projectId) {
  var details = document.getElementById(projectId);
  var isVisible = details.style.display === 'block';
  details.style.display = isVisible ? 'none' : 'block';
}

// Initialize with all projects visible
filterProjects('all');
