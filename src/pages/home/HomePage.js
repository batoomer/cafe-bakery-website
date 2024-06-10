export default class HomePage{
    constructor(){
        this.container = document.createElement('div');
    }

    render(){
        this.container.innerHTML = `<h1>Home Page</h1>`

        return this.container;
    }
};