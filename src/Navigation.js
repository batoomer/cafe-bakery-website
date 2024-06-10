import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import MenuPage from "./pages/menu/MenuPage";
import ContactPage from "./pages/contact/ContactPage";

export default class Navigation{
    
    #LINKS = {
        'home' : {'name': 'Home', 'page': HomePage},
        'about': {'name': 'About', 'page': AboutPage},
        'menu' : {'name': 'Menu', 'page': MenuPage},
        'contact': {'name': 'Contact', 'page': ContactPage}
    };

    #currentPage = 'home';
    
    constructor(){
        this.#render()
        this.#addEventListeners()
        this.#handleInitialPage();
    };

    #handleInitialPage() {
        this.#handlePageLoad('home');
        this.#setActiveNavigationButton(document.querySelector('.nav-btn[data-key="home"]'));
    }

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

    // Add the active class to the input navigation button and removes it for every other one.
    #setActiveNavigationButton(navButton){
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        navButton.classList.add('active');
    }

    #handleNavigationButtonClick(navButton){
        if(navButton.dataset['key'] === this.#currentPage) return; // Return If the navigation button clicked is the current page  
        this.#handlePageLoad(navButton.dataset['key']);
        this.#setActiveNavigationButton(navButton);
    };
};