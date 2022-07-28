import axios from 'axios';
import ProductService from './ProductService';
import authHeader from './AuthHeader';

const CART_BASE_URL = "http://localhost:8080/api/cart"

class CartService {

    addToCart(productId) {
        let currentCart = {};
        if (localStorage.getItem("cart") !== null) {
            currentCart = JSON.parse(localStorage.getItem("cart"));
        }
        if (productId in currentCart) {
            currentCart[productId] = currentCart[productId] + 1;
        } else {
            currentCart[productId] = 1;
        }
        console.log(productId);
        console.log(currentCart[productId]);
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }

    async getProductsFromCart() {
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        console.log("Current cart");
        console.log(currentCart);
        let products = [];
        for (const productId in currentCart) {
            let product;
            await ProductService.getProductById(productId).then(res => product=res.data);
            product["countInCart"] = currentCart[productId];
            products.push(product);
        }
        console.log("Current products");
        console.log(products);
        return products;
    }

    addProductToCartForCustomer(productId) {
        return axios.post(CART_BASE_URL + "/" + productId, {}, {headers: authHeader()});
    }

    removeProductFromCartForCustomer(cartId) {
        return axios.delete(CART_BASE_URL + "/" + cartId, {headers: authHeader()});
    }

    getCartProductsForCustomer() {
        return axios.get(CART_BASE_URL, {headers: authHeader()});
    }

}

export default new CartService();