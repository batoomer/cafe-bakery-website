export default class ContactPage{
    constructor(){
        this.container = document.createElement('div');
    }

    render(){
        this.container.innerHTML = `<h1>Contact Page</h1>`

        return this.container;
    }
};