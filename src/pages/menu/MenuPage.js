export default class MenuPage{
    constructor(){
        this.container = document.createElement('div');
    }

    render(){
        this.container.innerHTML = `<h1>Menu Page</h1>`

        return this.container;
    }
};