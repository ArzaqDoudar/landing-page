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

const VALUE = 100
let sectionArray = [];

const sections = document.getElementsByTagName("section")
const main_hero = document.getElementsByClassName("main__hero")


/**
 * End Global Variables
 * Start Helper Functions
*
*/

const getSectionsId = () => {

    for (let index = 0; index < sections.length; index++) {
        sectionArray.push({ id: sections[index].id, data: sections[index].getAttribute('data-nav') })

    }
    console.log('sectioArray', sectionArray);

}
getSectionsId();

const createUlElement = (unorderedList) => {
    if (unorderedList) {

        sectionArray.forEach(item => {
            const list_item = document.createElement('li');
            const list_item_link = document.createElement('a');
            list_item_link.setAttribute('class', "menu__link");
            list_item_link.setAttribute('href', `#${item.id}`);
            list_item_link.innerText = item.data;
            list_item.appendChild(list_item_link)
            navbar_list.appendChild(list_item)
        });
    }
}

const makeActive = () => {
    for (const section of sections) {
        const section2Top = sections[1].getBoundingClientRect();
        const box = section.getBoundingClientRect();

        if (box.top <= (box.height) && (box.bottom - VALUE <= box.height) && (box.bottom > VALUE)) {
            //apply active state on current section and corresponding Nav link
            addActiveClass(section, 'your-active-class')

        } else {
            //Remove active state from other section and corresponding Nav link
            removeActiveClass(section, 'your-active-class')
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

const navbar_list = document.getElementById('navbar__list');
createUlElement(navbar_list);

// Add class 'active' to section when near top of viewport
const addActiveClass = (elem, className) => {
    const elementClassList = elem.classList;
    elementClassList.add(className)
}
const removeActiveClass = (elem, className) => {
    const elementClassList = elem.classList;
    elementClassList.remove(className)
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', () => makeActive())