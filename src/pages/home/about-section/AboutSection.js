import './about-section.css';
import aboutImage from '../../../assets/images/home-about-image.jpg';

export default class AboutSection{
    
    #container = null;

    constructor(){
        this.#createHtmlTemplate();
        this.#addEventListeners();
    }

    #createHtmlTemplate(){
        this.#container = document.createElement('section');
        this.#container.classList.add('home__about');
        this.#container.innerHTML = `
        <div class="home__about-image">
            <img src="${aboutImage}" alt="test">
        </div>
        <article class="home__about-article">
            <header>
                <p>Discover the Essence</p>
                <h1>Crafting Culinary Memories: The Story of Mariposa Café & Bakery</h1>  
            </header>
            <section>
                <p>
                    At Mariposa Café & Bakery, we believe food can do more than just fill your stomach - 
                    it can also fill your heart. Our journey started with a simple idea: to make a cozy 
                    spot where folks could come together for great food and friendly vibes. Over time, 
                    Mariposa has become a favorite hangout, famous for our tasty pastries, fresh coffee, 
                    and welcoming atmosphere.
                </p>
                <p>
                    Every dish on our menu, from our flaky croissants to our rich cakes, is made with love 
                    and attention to detail. Our chefs and baristas work hard to blend local ingredients with 
                    global flavors, creating meals that satisfy both your taste buds and your soul. But Mariposa 
                    Café & Bakery isn't just about food - it's about connections, celebrations, and making memories 
                    that last a lifetime.
                </p>
            </section>
            <footer>
                <button>Read More</button>
            </footer>
        </article>
        `;
    };

    #addEventListeners(){
        this.#container.querySelector('button').addEventListener('click', () =>{
            document.querySelector('.nav-btn[data-key="about"').click();
        })
    };

    render(){
        return this.#container
    }
}