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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBarList = document.getElementById('navbar__list');

// Add Lists and Links in NavBar
const section = document.querySelectorAll('section');

for (let i = 0; i <= section.length; i++) {
    const navBarItem = document.createElement('li');   
    navBarItem.innerHTML = '<a href="#' + section[i].getAttribute('id') + '" class="menu__link">' + section[i].getAttribute('data-nav') + '</a>';
    navBarList.append(navBarItem);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


