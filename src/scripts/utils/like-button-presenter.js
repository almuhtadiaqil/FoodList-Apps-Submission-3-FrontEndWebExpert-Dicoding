/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import FavoriteRestaurant from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {

    async init({ LikeButtonContainer, restaurant }) {
        this._likeButtonContainer = LikeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },

};

export default LikeButtonPresenter;