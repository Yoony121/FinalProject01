import axios from 'axios';
import authHeader from './AuthHeader';
import AuthService from './AuthService';

const SELLER_API_BASE_URL = "http://localhost:8080/api/seller"

const SELLER_API_REGISTER_URL = "http://localhost:8080/api/auth/seller/registration"

class SellerService {

    registerSeller(seller) {
        return axios.post(SELLER_API_REGISTER_URL, seller)
                    .then(res => {
                        if (res.data.accessToken) {
                            localStorage.setItem("user", JSON.stringify(res.data));
                        }
                        return res.data;
                    });
    }

    updateSeller(seller) {
        return axios.post(SELLER_API_BASE_URL + "/update/" + AuthService.getCurrentUser().id, seller, {headers: authHeader()});
    }

    getSellerAccount() {
        return axios.get(SELLER_API_BASE_URL + '/' + AuthService.getCurrentUser().id, {headers: authHeader()});
    }

}

export default new SellerService()