import API_ENDPOINT from '../globals/api-endpoint';

class RestauranListSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.CATALOGUE_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailCatalogue(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestauranListSource;
