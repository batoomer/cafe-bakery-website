import ContactForm from './contact-form/ContactForm';
import './contact-page.css';


export default class ContactPage{
    
    #container = null;

    #createHtmlTemplate() {
        this.#container = document.createElement('div');
        this.#container.classList.add('page-wrapper');
        this.#container.innerHTML = `
            <section class="contact__banner"> 
                <h2>Contact Us</h2>
                <p>We'd Love to Hear from You</p>
            </section>

            <section class="contact__form-map">
                <div class="contact__details">
                    <ul>
                        <li>Contact</li>
                        <li>
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            Number, Street address, Postal Code, City, Country
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                            253-1##-####</li>                
                        <li>
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                            </svg>
                            info@mycafebakery.com
                        </li>
                    </ul>
                    <ul>
                        <li>Open</li>
                        <li>Monday-Friday 6:30 - 00:00</li>
                        <li>Saturday 7:00 - 02:30</li>
                        <li>Sunday 10:00 - 23:00</li>
                    </ul>
                </div>
                
                <div class="contact__map">
                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Athens,%20Greece+(Restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                ${new ContactForm().render()}
                
            </section>
            
        `;
    };

    render() {
        this.#createHtmlTemplate();
        return this.#container;
    };
};