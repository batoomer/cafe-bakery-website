export default class AboutPage{
    constructor(){
        this.container = document.createElement('div');
    }

    render(){
        this.container.innerHTML = `<h1>About Page</h1>`

        return this.container;
    }
};