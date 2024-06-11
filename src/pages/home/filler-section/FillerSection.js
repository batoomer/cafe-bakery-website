import './filler-section.css';
import fillerImage from '../../../assets/images/home-coffee-image.jpg';

export default class FillerSection{
    
    #container = null;

    constructor(){
        this.#createHtmlTemplate();
    }

    #createHtmlTemplate(){
        this.#container = document.createElement('section');
        this.#container.classList.add('home__filler');
        this.#container.innerHTML = `
            <div class="home__filler-quote">
                <blockquote>
                    We want to do a lot of stuff; we're not in great shape. We didn't get a good night's sleep. 
                    We're a little depressed. Coffee solves all these problems in one delightful little cup.
                    <span>Jerry Seinfeld</span>
                </blockquote>
            </div>
            <div class="home__filler-image">
                <img src="${fillerImage}" alt="Coffee Image">
            </div>
        `;
    }
    render(){
        return this.#container
    }
}