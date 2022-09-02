/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBarMenu = document.querySelector('.page__header');
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function determines whether section is in the viewport and should be highlighted or not, including highlighted nav bar menu links
function isSectionActive() {
  for (const section of sections) {
    const sectionPosition = section.getBoundingClientRect();

    if (sectionPosition.top <= 300 && sectionPosition.bottom >= 300) {
      const sectionId = section.id;

      // Select active link and set class: active
      document.querySelector(`.${sectionId}`).classList.add('active');
      // Select active section and set class: your-active-class
      section.classList.add('your-active-class');
    } 
      else {
        const sectionId = section.id;
        // Remove class: active from other links (not active)
        document.querySelector(`.${sectionId}`).classList.remove('active');
        // Remove class: active from other sections (not active)
        section.classList.remove('your-active-class');
      }
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Function dynamically creates a navigation menu based on the sections of the page
function buildNavBar () {
  for (let i = 0; i < sections.length; i++) {
    // Create HTML elements <li> and <a>
    const navBarItem = document.createElement('li');
    const navBarLink = document.createElement('a');
      
    // Get Section Name and Section Id for href and text in HTML element <a>
    const sectionName = sections[i].dataset.nav;
    const sectionId = sections[i].id;
      
    // Set attributes (href and classes) and text to HTML element <a>
    // navBarLink.href = `#${sectionId}`;
    navBarLink.classList.add('menu__link', sectionId);
    navBarLink.innerText = sectionName;
      
    // Second option with innerHTML and template literal
    // navBarItem.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionName}</a>`;
      
    // Insert child elements to their parent elements
    navBarItem.append(navBarLink);
    navBarList.append(navBarItem);
  }
}


// Function smoothly scrolls to Sections when click on corresponding link (using scrollTO event on navBarLinks)
function scrollToAnchor () {
  for (let i = 0; i < sections.length; i++) {
    const sectionId = sections[i].id;
    const navBarLink = document.querySelector(`.${sectionId}`);

    // Add event listener to navBarLink for click
    const sectionPositionTop = sections[i].offsetTop;
    navBarLink.addEventListener('click', (e) => {
      scrollTo({
        top: sectionPositionTop,
        behavior: 'smooth'
      });
      e.preventDefault();
    }, false);
  }
}
    // Second option with scrollIntoView
    // navBarLink.addEventListener('click', (e) => { sections[i].scrollIntoView({behavior: 'smooth', block: 'start'}); }, false);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// When the user scrolls this calls the isSectionActive function to determine which section is in viewport
document.addEventListener('scroll', function () {
  isSectionActive();
});


// Build menu
buildNavBar ();


// Scroll to section on link click
scrollToAnchor ();


// Set sections as active


// Add a scroll-to-top button on the page that only visible when the user scrolls below the fold of the page
const btnToTop = document.querySelector('#btn-to-top');

// When the user clicks on scroll-to-top button the page will scroll to the top smoothly
btnToTop.addEventListener('click', (event) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//Hide fixed navigation bar while not scrolling (it should still be present on page load). And appearing the scroll-to-top button after Section2
document.onscroll = () => {
  // Show fixed navigation bar while scrolling
  navBarMenu.style.display = 'block';

  let isScrolling;
  clearTimeout(isScrolling);

  // Hide fixed navigation bar while not scrolling
  isScrolling = setTimeout(() => {
    navBarMenu.style.display = 'none';
  }, 8000);

  // If the user scrolls down to Section 3, the scroll-to-top button appears
  if(window.scrollY >= sections[1].offsetTop - 50) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
};