import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = `<div id="likeButtonContainer"></div>`;
};

beforeEach(() => {
    addLikeButtonContainer();
})

describe('Liking A Restaurant', () => {
    it('should show the like button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurant.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurant.deleteRestaurant(1);
    })

    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // tambah restaurant dengan id 1 ke daftar restaurant yang disukai
        await FavoriteRestaurant.putRestaurant({ id: 1 });

        // simulasikan pengguna menekan tombol suka restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada restaurant yang ganda
        expect(await FavoriteRestaurant.getAllrestaurant()).toEqual([{ id: 1 }]);

        FavoriteRestaurant.deleteRestaurant(1);
    })

    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllrestaurant()).toEqual([]);
    })
});