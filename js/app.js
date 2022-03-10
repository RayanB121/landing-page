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
    const menu=document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createMenuItem(){
    for (const section of sections) {
        sectionName=section.getAttribute("data-nav");
        sectionLink=section.getAttribute("id");
        listContent=document.createElement("li");
        listContent.innerHTML=`<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
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
    let observer= new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add("your-active-class");
            }else{
                entry.target.classList.remove("your-active-class");
            }
        })  
    },{
        threshold:0.5,
        rootMargin:"-150px"
    });
// observe all sections 
    sections.forEach(entry =>{
        observer.observe(entry);
    })

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


