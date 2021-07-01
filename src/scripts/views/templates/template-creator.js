/* eslint-disable eol-last */
import CONFIG from '../../globals/config';

const createDetailCatalogueTemplate = (restaurant) => `
<h2 class="detail-title">${restaurant.name}</h2>
<div class="detail-card">
<picture>
  <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}">
  <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" class="detail-image">
</picture>
    <div class="detail__info">
        <p class="detail-text">${restaurant.city}</p>
        <p class="detail-text">${restaurant.address}</p>
        <p class="detail-text">⭐️${restaurant.rating}</p>
        <p>${restaurant.description}</p>
        <div class="categories">
          <ul><b>Categories : </b>
          ${restaurant.categories.map((categories) => `
            <li class="categories-item"><b>${categories.name}</b></li>
            `)}
          </ul>
        </div>
    </div>
</div>
<h1 class="detail__menu__label">${restaurant.name} Menu</h1>

`;

const createMenuContainerTemplate = `
  <div class="posts-detail">
    <article class="post-item">
        <h1 class="menu-item__title"><b>Foods Menu</b></h1>
        <div class="post-item__content food_menu">
            
        </div>
    </article>
    <article class="post-item">
        <h1 class="menu-item__title"><b>Drinks Menu</b></h1>
        <div class="post-item__content drink_menu">
            
        </div>
    </article>
  </div>
`;
const createFoodMenuTemplate = (restaurant) => `
<p class="food-list">${restaurant.name}</p>
`;

const createDrinkMenuTemplate = (restaurant) => `
<p class="drink-list">${restaurant.name}</p>
`;

const preloaderTemplate = `
<div class="lds-ellipsis">
<div></div>
<div></div>
<div></div>
</div>
`;

const createCatalogueContainer = `
  <div class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Find Any Food & Beverages Restaurant</h1>
        <p class="hero__tagline">The Best Restaurant For You</p>
    </div>
  </div>
  <section class="content">
    <h1 class="catalouge__label">Restaurant Catalouge</h1>
    <div class="catalouge">         
        <div class="posts">

        </div>
    </div>
  </section>
`;

const createCatalogueListTemplate = (restaurant) => `
        <article class="post-item">
        <picture>
          <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" class="post-item__thumbnail lazyload">
          <img class="post-item__thumbnail lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
          alt="${restaurant.name}" >
        </picture>
            <div class="post-item__content">
                <h1 class="post-item__title"><a href="${`#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
                <p>City : ${restaurant.city}</p>
                <p>⭐️${restaurant.rating}</p>
                <p class="post-item__description">${restaurant.description}</p>
            </div>
        </article>
`;

const createReviewTemplate = (reviews) => `
<div class="review-item">
  <img src="../images/defaultUser.png" alt="" class="reviewImage">
  <p><b>${reviews.name}</b></p>
  <p class="reviewText">${reviews.review}</p>
  <time>${reviews.date}</time>
</div> 
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailCatalogueTemplate,
  createCatalogueListTemplate,
  createFoodMenuTemplate,
  createDrinkMenuTemplate,
  createMenuContainerTemplate,
  createCatalogueContainer,
  preloaderTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createReviewTemplate,
};