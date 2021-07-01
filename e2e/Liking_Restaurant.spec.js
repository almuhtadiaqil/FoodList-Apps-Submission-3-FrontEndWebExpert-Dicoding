const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.posts');
    I.see('You dont have a favorite restaurant', '.catalouge__label');
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('You dont have a favorite restaurant', '.catalouge__label');

    I.amOnPage('/');

    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');
    const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking restaurant', ({ I }) => {
    I.see('You dont have a favorite restaurant', '.catalouge__label');

    I.amOnPage('/');
    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('You dont have a favorite restaurant', '.catalouge__label');


})