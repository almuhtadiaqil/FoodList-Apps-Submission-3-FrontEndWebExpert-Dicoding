/* eslint-disable eol-last */
/* eslint-disable indent */
import UrlParser from '../../routes/url-parser';
import RestauranListSource from '../../data/restaurantlist-source';
import {
    createDetailCatalogueTemplate,
    createMenuContainerTemplate,
    createFoodMenuTemplate,
    createDrinkMenuTemplate,
    createReviewTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
    async render() {
        return `
        <h1 class="detail__label">Catalogue Detail</h1>
        <section class="content">
            <div class="detailContainer"></div>
            <div class="card menuContainer"></div>
            <div class="card addReviewContainer"></div>
            <div class="card reviewContainer"></div>
        </section>
        
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveWithoutCombiner();
        const restaurantDetail = await RestauranListSource.detailCatalogue(url.id);
        const { restaurant } = restaurantDetail;
        const menu = restaurant.menus;
        const restauranContainer = document.querySelector('.detailContainer');
        const menuContainer = document.querySelector('.menuContainer');
        const reviewContainer = document.querySelector('.reviewContainer');

        restauranContainer.innerHTML = createDetailCatalogueTemplate(restaurant);

        menuContainer.innerHTML = createMenuContainerTemplate;
        menu.foods.forEach((foods) => {
            const foodItem = document.querySelector('.food_menu');
            foodItem.innerHTML += createFoodMenuTemplate(foods);
        });
        menu.drinks.forEach((drinks) => {
            const drinkItem = document.querySelector('.drink_menu');
            drinkItem.innerHTML += createDrinkMenuTemplate(drinks);
        });

        restaurant.customerReviews.forEach((reviews) => {
            reviewContainer.innerHTML += createReviewTemplate(reviews);
        });
        LikeButtonPresenter.init({
            LikeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                city: restaurant.city,
                address: restaurant.address,
                pictureId: restaurant.pictureId,
                rating: restaurant.rating,
            },
        });
    },

};

export default Detail;