import './menu-page.css';

import coffeeCardImage from '../../assets/images/home-coffee-menu.jpg';
import croissantCardImage from '../../assets/images/home-croissant-menu.jpg';
import cakeCardImage from '../../assets/images/home-cake-menu.jpg';

export default class MenuPage {

    #container = null;

    #getCoffeeItems() {
        return [
            { name: 'Espresso', price: '$2.50', description: 'A rich, full-bodied shot of espresso made from our finest coffee beans.' },
            { name: 'Cappuccino', price: '$3.50', description: 'A perfect balance of espresso, steamed milk, and a layer of foam.' },
            { name: 'Latte', price: '$3.50', description: 'Smooth espresso combined with steamed milk and a light layer of foam.' },
            { name: 'Americano', price: '$2.75', description: 'Espresso diluted with hot water, creating a smooth, rich coffee with a similar strength to drip coffee.' },
            { name: 'Mocha', price: '$4.00', description: 'A delightful blend of espresso, steamed milk, and chocolate, topped with whipped cream.' },
            { name: 'Flat White', price: '$3.75', description: 'A smooth and velvety coffee made with espresso and steamed milk, offering a richer flavor than a latte.' },
            { name: 'Macchiato', price: '$3.00', description: 'A shot of espresso topped with a small amount of frothy steamed milk, creating a strong yet creamy coffee.' },
            { name: 'Affogato', price: '$4.50', description: 'A decadent coffee dessert featuring a scoop of vanilla ice cream or gelato "drowned" with a shot of hot espresso.' },
            { name: 'Cold Brew', price: '$3.75', description: 'A refreshing cold coffee brewed slowly over time for a smooth, bold flavor.' },
            { name: 'Nitro Cold Brew', price: '$4.50', description: 'Cold brew coffee infused with nitrogen, giving it a creamy texture and rich taste.' },
            { name: 'Iced Coffee', price: '$3.00', description: 'Freshly brewed coffee poured over ice for a crisp and refreshing beverage.' },
            { name: 'Iced Latte', price: '$3.75', description: 'Chilled espresso combined with cold milk and served over ice for a smooth, refreshing drink.' },
            { name: 'Iced Mocha', price: '$4.25', description: 'A chilled blend of espresso, milk, and chocolate syrup, served over ice and topped with whipped cream.' }
        ];
    }

    #getCroissantItems() {
        return [
            { name: 'Classic Butter Croissant', price: '$2.75', description: 'Flaky and buttery croissant baked to golden perfection.' },
            { name: 'Almond Croissant', price: '$3.25', description: 'Croissant filled with almond cream and topped with sliced almonds.' },
            { name: 'Chocolate Croissant', price: '$3.00', description: 'A decadent croissant filled with rich, melted chocolate.' },
            { name: 'Ham & Cheese Croissant', price: '$3.50', description: 'A savory croissant filled with ham and melted cheese, perfect for breakfast or lunch.' },
            { name: 'Pain au Chocolat', price: '$3.00', description: 'A classic French pastry with a rich chocolate center.' },
            { name: 'Spinach & Feta Croissant', price: '$3.75', description: 'A savory croissant filled with fresh spinach and creamy feta cheese.' },
            { name: 'Berry Croissant', price: '$3.25', description: 'A croissant filled with a delightful mix of fresh berries and a hint of cream.' }
        ];
    }

    #getCakeItems() {
        return [
            { name: 'Chocolate Cake', price: '$4.50', description: 'A rich and moist chocolate cake with a smooth chocolate ganache.' },
            { name: 'Red Velvet Cake', price: '$4.75', description: 'A classic red velvet cake with a hint of cocoa, topped with cream cheese frosting.' },
            { name: 'Cheesecake', price: '$4.25', description: 'Creamy and smooth cheesecake with a buttery graham cracker crust.' },
            { name: 'Carrot Cake', price: '$4.00', description: 'Moist carrot cake filled with spices and topped with a creamy frosting.' },
            { name: 'Lemon Drizzle Cake', price: '$4.00', description: 'A light and zesty lemon cake with a sweet lemon glaze.' },
            { name: 'Tiramisu', price: '$4.75', description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.' },
            { name: 'Fruit Tart', price: '$4.50', description: 'A crisp tart shell filled with creamy custard and topped with fresh seasonal fruits.' },
            { name: 'Black Forest Cake', price: '$4.75', description: 'Layers of chocolate sponge cake sandwiched with whipped cream and cherries.' },
            { name: 'Vanilla Bean Cake', price: '$4.00', description: 'A classic vanilla cake made with real vanilla beans, topped with vanilla buttercream.' },
            { name: 'Opera Cake', price: '$4.75', description: 'A French dessert made with layers of almond sponge cake, coffee buttercream, and chocolate ganache.' },
            { name: 'Matcha Green Tea Cake', price: '$4.50', description: 'A delicate cake infused with matcha green tea, topped with matcha cream.' },
            { name: 'Coconut Cake', price: '$4.25', description: 'A moist coconut-flavored cake topped with coconut buttercream and shredded coconut.' },
            { name: 'Peanut Butter Cake', price: '$4.50', description: 'A rich and creamy peanut butter cake layered with peanut butter frosting.' },
            { name: 'Banana Bread', price: '$3.75', description: 'A moist and flavorful banana bread, perfect for a sweet snack or breakfast.' },
            { name: 'Apple Pie', price: '$4.00', description: 'A classic pie filled with spiced apples and encased in a flaky crust.' }
        ];
    }

    #createCategoryHtml(title, imageSrc, items) {
        return `
            <section class="menu__category">
                <div><img src=${imageSrc}></div>
                <ul class="menu__items-wrapper">
                    <h2>${title}</h2>
                    ${items.map(item => `
                        <li class="menu__menu-item">
                            <h3>${item.name} <span class="price">${item.price}</span></h3>
                            <p>${item.description}</p>
                        </li>
                    `).join('')}
                </ul>
            </section>
        `;
    };

    #createHtmlTemplate() {
        this.#container = document.createElement('div');
        this.#container.classList.add('page-wrapper');
        this.#container.innerHTML = `
            <section class="menu__banner"> 
                <h2>Our Menu</h2>
                <p>Explore our delicious offerings and find your next favorite treat.</p>
            </section>
            ${this.#createCategoryHtml('Coffee Selections', coffeeCardImage, this.#getCoffeeItems())}
            ${this.#createCategoryHtml('Croissant Delights', croissantCardImage, this.#getCroissantItems())}
            ${this.#createCategoryHtml('Delicious Cakes', cakeCardImage, this.#getCakeItems())}
        `;
    };

    render() {
        this.#createHtmlTemplate();
        return this.#container;
    };
};
