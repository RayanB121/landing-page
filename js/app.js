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
    const sections=Array.from(document.querySelectorAll("section"));
    const navBarList=document.getElementById("navbar__list");
    const navBarMenu=document.querySelector(".navbar__menu");

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
        navBarList.appendChild(listContent);
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createMenuItem();

// create hamburger menu
    const menuBar=document.createElement("div");
    menuBar.className="hamburger";
    menuBar.innerHTML=`<span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>`;
    navBarMenu.appendChild(menuBar);

const hamburger = document.querySelector(".hamburger");
// Open navagiton menu when hamburger menu clickd
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navBarList.classList.toggle("active");
});

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
    let activeLink = navBarList.querySelector(`[data-nav=${section.id}]`);
      const box = section.getBoundingClientRect();
      if (box.top <= 150 && box.bottom >= 150) {
       section.classList.add("your-active-class");
      } else {
        section.classList.remove("your-active-class");
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
navBarList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav){
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
    }
  });

// Set sections as active
document.addEventListener("scroll", function() {
    makeActive();
  });

