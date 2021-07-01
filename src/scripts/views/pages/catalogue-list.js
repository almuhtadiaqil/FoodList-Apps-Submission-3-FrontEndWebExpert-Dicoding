/* eslint-disable eol-last */
/* eslint-disable indent */
import RestauranListSource from '../../data/restaurantlist-source';
import { createCatalogueListTemplate, createCatalogueContainer, preloaderTemplate } from '../templates/template-creator';

const CatalogueList = {
    async render() {
        return `
            <div class="katalog">
            
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestauranListSource.restaurantList();
        const catalogueContainer = document.querySelector('.katalog');

        catalogueContainer.innerHTML = createCatalogueContainer;
        const content = document.querySelector('.content');
        content.addEventListener('onload', async () => {
            content.innerHTML += preloaderTemplate;
        });

        restaurants.restaurants.forEach((restaurant) => {
            const restaurantsContainer = document.querySelector('.posts');
            restaurantsContainer.innerHTML += createCatalogueListTemplate(restaurant);
        });
    },

};

export default CatalogueList;