import HeroSection from "./hero-section/HeroSection.js";
import AboutSection from "./about-section/AboutSection.js";
import FillerSection from "./filler-section/FillerSection.js";
import MenuSection from "./menu-section/MenuSection.js";

export default class HomePage{

    #container = document.createElement('div');

    #createHtmlTemplate(){
        this.#container.appendChild(new HeroSection().render());
        this.#container.appendChild(new AboutSection().render());
        this.#container.appendChild(new FillerSection().render());
        this.#container.appendChild(new MenuSection().render());
    };

    render(){
        this.#createHtmlTemplate();
        return this.#container;
    };
};