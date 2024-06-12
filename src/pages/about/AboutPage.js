import './about-page.css';

export default class AboutPage{
    
    #container = null;


    #createHtmlTemplate() {
        this.#container = document.createElement('div');
        this.#container.classList.add('about__page-wrapper');
        this.#container.innerHTML = `
            <section class="about__intro"> 
                <h2>About Us</h2>
                <p>Welcome to Mariposa Café & Bakery. Discover our story.</p>
            </section>
            
            <section class="about__about-us">
                <div class="container">
                    <h2>About Mariposa Café & Bakery</h2>
                    <p>Mariposa Café & Bakery is a cozy and welcoming establishment located in the heart of the city. Our journey began with a passion for artisanal pastries and exceptional coffee. From humble beginnings, we've grown into a beloved destination for locals and visitors alike.</p>
                    <p>At Mariposa, we believe in using the finest ingredients to create delicious treats that delight the senses. Our team of talented chefs and baristas crafts each item with care and precision, ensuring that every bite and sip is a moment of pure indulgence.</p>
                    <p>Join us at Mariposa Café & Bakery and experience the magic of good food, good company, and good vibes.</p>
                </div>
            </section>

            <section class="about__vision-values">
                <div class="container">
                <h2>Our Vision and Values</h2>
                <p>At Mariposa Café & Bakery, our vision is to create a warm and inviting space where people can come together to enjoy delicious food, excellent coffee, and genuine hospitality. We believe in fostering a sense of community and belonging, where every guest feels welcomed and valued.</p>
                <p>Our values guide everything we do, from sourcing the finest ingredients to providing exceptional service. We prioritize quality, creativity, sustainability, and inclusivity in all aspects of our business.</p>
                </div>
            </section>

            <section class="about__commitment">
                <div class="container">
                    <h2>Our Commitment to Quality</h2>
                    <p>At Mariposa Café & Bakery, quality is at the heart of everything we do. From the moment you step through our doors, you'll experience the dedication and passion that goes into every pastry, every cup of coffee, and every interaction with our team.</p>
                    <p>We source the finest ingredients, carefully select our coffee beans, and prioritize craftsmanship in every aspect of our business. Our commitment to quality extends beyond our products to our service, atmosphere, and community engagement.</p>
                    <p>Join us at Mariposa Café & Bakery and taste the difference that quality makes.</p>
                </div>
            </section>
        `;
    };

    render() {
        this.#createHtmlTemplate();
        return this.#container;
    };
};