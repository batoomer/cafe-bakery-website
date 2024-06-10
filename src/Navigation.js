import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import MenuPage from "./pages/menu/MenuPage";
import ContactPage from "./pages/contact/ContactPage";

export default class Navigation{
    
    // Constant object to register the pages for the navigation logic
    #LINKS = {
        'home' : {'name': 'Home', 'page': HomePage},
        'about': {'name': 'About', 'page': AboutPage},
        'menu' : {'name': 'Menu', 'page': MenuPage},
        'contact': {'name': 'Contact', 'page': ContactPage}
    };

    // Variable to track the current loaded page
    #currentPage = 'home';
    
    constructor(){
        // Create the navigation buttons and add the event listeners
        this.#render();
        this.#addEventListeners();
        // Load the home page at start
        this.#handleInitialPage();
    };

    // Handles loading the home page at the start
    #handleInitialPage() {
        this.#handlePageLoad('home');
        this.#setActiveNavigationButton(document.querySelector('.nav-btn[data-key="home"]'));
    }

    // Creates the navigation buttons of the header
    #render(){
        // Get the navigation element
        this.navMenu = document.querySelector('.navigation-bar');
        // Add the navigation buttons to the DOM
        for (const [key, value] of Object.entries(this.#LINKS)){
            const listItem = document.createElement('li');
            listItem.innerHTML = `<button data-key="${key}" class="nav-btn">${value.name}</button>`;
            this.navMenu.firstElementChild.appendChild(listItem);
        };
    };

    // Adds the event listeners
    #addEventListeners(){
        this.navMenu = document.querySelector('.navigation-bar > ul').addEventListener('click', (e) => {   
            if (e.target.closest('.nav-btn')){
                // Handle Navigation Button Clicks
                this.#handleNavigationButtonClick(e.target.closest('.nav-btn'));  
            };
        });
    };

    // Handles loading the new page
    #handlePageLoad(key) {
        const TargetPage = this.#LINKS[key].page;
        document.querySelector('#main-content').replaceChildren(new TargetPage().render());
        this.#currentPage = key;
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    // Adds the active class to the input navigation button and removes it for every other one.
    #setActiveNavigationButton(navButton){
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        navButton.classList.add('active');
    }

    // Handles the navigation button click
    #handleNavigationButtonClick(navButton){
        if(navButton.dataset['key'] === this.#currentPage) return; // Return If the navigation button clicked is the current page  
        this.#handlePageLoad(navButton.dataset['key']);
        this.#setActiveNavigationButton(navButton);
    };
};