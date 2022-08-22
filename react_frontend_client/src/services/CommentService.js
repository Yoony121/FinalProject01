import axios from 'axios';
import authHeader from './AuthHeader';

const COMMENT_API_BASE_URL = "http://localhost:8080/api/comments"

class ProductService {

    getCommentsOfProduct(id) {
        return axios.get(COMMENT_API_BASE_URL + '/' + id);
    }

    addCommentToProduct(productId, rating, content) {
        return axios.post(COMMENT_API_BASE_URL + '/' + productId + '/add', {rating: rating, content: content}, {headers: authHeader()});
    }

}

export default new ProductService()