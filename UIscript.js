// JavaScript to dynamically show/hide dropdown button
window.addEventListener('resize', function() {
  var sections = document.querySelector('.navbar-sections');
  var dropdown = document.querySelector('.dropdown');
  var searchContainer = document.querySelector('.search-container');
  if (sections && dropdown && searchContainer) {
    if (sections.offsetWidth <= 0) {
      dropdown.style.display = 'inline-block';
      searchContainer.style.display = 'none';
    } else {
      dropdown.style.display = 'none';
      searchContainer.style.display = 'flex';
    }
  }
});

// Add event listener for dropdown click
// Get the dropdown element
var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
// Add an event listener to the dropdown
if (dropdown) {
  dropdown.addEventListener('click', function(event) {
    // Toggle margin-right property when dropdown is clicked
    if (this.style.marginRight === '20px'&&dropdownContent.style.display==='none') {
      this.style.marginRight = '';
    } else {
      this.style.marginRight = '20px';
    }    
    // Prevent the event from bubbling up to the document
    event.stopPropagation();
  });
}

// Add an event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is not the dropdown and if the dropdown has margin-right of 20px
  if (dropdown && event.target !== dropdown && dropdown.style.marginRight === '20px') {
    // Remove margin-right property
    dropdown.style.marginRight = '';
  }
});
// Add an event listener to the dropdown
if (dropdownContent) {
  dropdownContent.addEventListener('click', function(event) {
    // Toggle margin-right property when dropdown is clicked
    if (this.style.display === 'block') {
      this.style.display = 'none';
    }
    // Prevent the event from bubbling up to the document
    event.stopPropagation();
  });
}

  

  // toggle card section
  function toggleSection(sectionId, element) {
    var sectionContent = document.getElementById(sectionId);
    var activeSections = document.querySelectorAll('.section-content.active');
  
    // Collapse all active sections
    activeSections.forEach(function(section) {
      section.classList.remove('active');
    });
  
    // Expand the clicked section
    sectionContent.classList.add('active');
  
    // Change color of clicked h3 element
    var clickedH3 = document.querySelectorAll('.section h3.active');
    clickedH3.forEach(function(h3) {
      h3.classList.remove('active');
    });
    element.classList.add('active');
  }


//funcion to open the brand logo starts

  document.querySelector('.logo').addEventListener('click', function() {
    document.getElementById("myModal").classList.add('active');
});

// Close popup when clicked anywhere
document.querySelector('.popup').addEventListener('click', function() {
    document.getElementById("myModal").classList.remove('active');
});

//funcion to open the brand logo ends