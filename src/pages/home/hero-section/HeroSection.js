import './hero-section.css';

export default class HeroSection{
    
    #container = null;

    constructor(){
        this.#createHtmlTemplate();
        this.#addEventListeners();
    }

    #createHtmlTemplate(){
        this.#container = document.createElement('section');
        this.#container.classList.add('home__hero');
        this.#container.innerHTML = `
            <div class='hero__content-wrapper'>
                <h1>Welcome to <span>Mariposa</span> Café & Bakery</h1>
                <p>Indulge in luxurious comfort with delightful culinary delights.</p>
                <button><span>→</span><span>See our menu</span></button>
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