import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/product"

class ProductService {

    getMainPageProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/main-page');
    }

    getRecommendedProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/recommend');
    }

    getTrendingProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/trending');
    }

    getProductById(id) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + id);
    }

}

export default new ProductService()