import axios from 'axios';
import ProductService from './ProductService';
import authHeader from './AuthHeader';

const WISHLIST_BASE_URL = "http://localhost:8080/api/wishlist"

class WishListService {

    addProductToWishListForCustomer(productId) {
        return axios.post(WISHLIST_BASE_URL + "/" + productId, {}, {headers: authHeader()});
    }

    removeProductFromWishListForCustomer(wishListId) {
        return axios.delete(WISHLIST_BASE_URL + "/" + wishListId,   {headers: authHeader()});
    }

    getWishListProductsForCustomer() {
        return axios.get(WISHLIST_BASE_URL, {headers: authHeader()});
    }

}

export default new WishListService();