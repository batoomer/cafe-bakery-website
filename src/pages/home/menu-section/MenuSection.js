import './menu-section.css';
import coffeeCardImage from '../../../assets/images/home-coffee-menu.jpg';
import croissantCardImage from '../../../assets/images/home-croissant-menu.jpg';
import cakeCardImage from '../../../assets/images/home-cake-menu.jpg';

export default class MenuSection{
    
    #container = null;

    constructor(){
        this.#createHtmlTemplate();
        //this.#addEventListeners();
    };

    

    #createMenuCard(cardHeading, items, buttonText, cardImg){
        let itemsHtml = items.map(item => `
            <div class="home__menu-item">
                <h3 class="home__menu-item-name">${item.name}</h3>
                <p class="home__menu-item-description">${item.description}</p>
            </div>
        `).join('');

        return `
            <div class="home__menu-card">
                <img src="${cardImg}" alt="Coffee Image"/>
                <h2 class="home__menu-card-heading">${cardHeading}</h2>
                ${itemsHtml}
                <button class="home__menu-cta">${buttonText}</button>
            </div>
        `;      
    };

    #createHtmlTemplate(){
        this.#container = document.createElement('section');
        this.#container.classList.add('home__menu');

        const card1 = this.#createMenuCard('Coffee Selections', [
            { name: 'Espresso', description: 'A rich, full-bodied shot of espresso made from our finest coffee beans.' },
            { name: 'Cappuccino', description: 'A perfect balance of espresso, steamed milk, and a layer of foam.' },
            { name: 'Latte', description: 'Smooth espresso combined with steamed milk and a light layer of foam.' }
        ], 'See More', coffeeCardImage);
    
        const card2 = this.#createMenuCard('Croissant Delights', [
            { name: 'Butter Croissant', description: 'Flaky and buttery croissant baked to golden perfection.' },
            { name: 'Almond Croissant', description: 'Croissant filled with almond cream and topped with sliced almonds.' },
            { name: 'Chocolate Croissant', description: 'A decadent croissant filled with rich, melted chocolate.' }
        ], 'See More', croissantCardImage);
    
        const card3 = this.#createMenuCard('Cake Treats', [
            { name: 'Red Velvet', description: 'A moist and velvety cake with a hint of cocoa, topped with cream cheese frosting.' },
            { name: 'Lemon Drizzle', description: 'A zesty and moist lemon cake drizzled with sweet lemon icing.' },
            { name: 'Carrot Cake', description: 'Spiced carrot cake with walnuts and a luscious cream cheese frosting.' }
        ], 'See More', cakeCardImage );

        this.#container.innerHTML = `
            <div class="home__menu-wrapper">
                <h1 class="home__menu-title">What We Think You Will Love</h1>
                <div class="home__menu-cards">
                    ${card1}
                    ${card2}
                    ${card3}
                </div>
            </div>
        `;
    };

    #addEventListeners(){
        this.#container.querySelector('button').addEventListener('click', () =>{
            document.querySelector('.nav-btn[data-key="menu"').click();
        })
    };

    render(){
        return this.#container
    }
}