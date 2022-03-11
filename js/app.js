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
    // select all sections
    const sections=Array.from(document.querySelectorAll("section"));
    // select navbar list
    const menu=document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createMenuItem(){
    for (const section of sections) {
        sectionName=section.getAttribute("data-nav");
        sectionId=section.getAttribute("id");
        listContent=document.createElement("li");
        listContent.innerHTML=`<a class="menu__link" data-nav="${sectionId}">${sectionName}</a>`;
        menu.appendChild(listContent);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createMenuItem();

// Add class 'active' to section when near top of viewport

function makeActive() {
    for (const section of sections) {
    let activeLink = menu.querySelector(`[data-nav=${section.id}]`);
      const box = section.getBoundingClientRect();
       
      if (box.top <= 150 && box.bottom >= 150) {
       section.classList.add("your-active-class");
       activeLink.classList.add("active__link");
      } else {
        section.classList.remove("your-active-class");
        activeLink.classList.remove("active__link");
      }
    }
  }



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
menu.addEventListener("click", (event) => {
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView();
   
});

// Set sections as active
document.addEventListener("scroll", function() {
    makeActive();
  });

