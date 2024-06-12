import './contact-form.css';

export default class ContactForm{

    
    #container;

    constructor(){
       this.#createHtmlTemplate();
    };

    #createHtmlTemplate(){
        this.#container = document.createElement('div');
        this.#container.classList.add('contact__form-container');
        this.#container.innerHTML = `
            <form action="#" method="post">
                <h2>Send us an email</h2>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="john.doe@gmail.com">
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required placeholder="subject">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" required placeholder="compose your email"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        `;
    };

    render(){
        return this.#container.outerHTML;
    }
}