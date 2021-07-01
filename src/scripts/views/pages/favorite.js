/* eslint-disable eol-last */
/* eslint-disable eqeqeq */
/* eslint-disable indent */
import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import { createCatalogueListTemplate } from '../templates/template-creator';

const Favorite = {

    async render() {
        return `
        <section class="content">
            <h1 class="catalouge__label">Your Favorite Restaurant</h1>
            <h1 class="restaurant-item__not_found"></h1>
            <div class="catalouge">         
                <div class="posts">

                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const restaurant = await FavoriteRestaurant.getAllrestaurant();
        const restauranContainer = document.querySelector('.posts');
        const catalougeLabel = document.querySelector('.catalouge__label');
        if (restaurant.length == 0) {
            catalougeLabel.innerHTML = 'You dont have a favorite restaurant';
            document.querySelector('footer').style.position = 'fixed';
            document.querySelector('footer').style.bottom = '0';
        }
        restaurant.forEach((favorite) => {
            restauranContainer.innerHTML += createCatalogueListTemplate(favorite);
        });
    },
};

export default Favorite;