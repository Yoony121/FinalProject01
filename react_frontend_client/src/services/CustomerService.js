import axios from 'axios';
import authHeader from './AuthHeader';
import AuthService from './AuthService';

const CUSTOMER_API_REGISTER_URL = "http://localhost:8080/api/auth/customer/registration"

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/customer"

class CustomerService {

    registerCustomer(customer) {
        return axios.post(CUSTOMER_API_REGISTER_URL, customer)
                    .then(res => {
                        if (res.data.accessToken) {
                            localStorage.setItem("user", JSON.stringify(res.data));
                        }
                        return res.data;
                    });
    }

    updateCustomer(customer) {
        return axios.post(CUSTOMER_API_BASE_URL + "/update/" + AuthService.getCurrentUser().id, customer, {headers: authHeader()});
    }

    getCustomerAccount() {
        return axios.get(CUSTOMER_API_BASE_URL + '/' + AuthService.getCurrentUser().id, {headers: authHeader()});
    }

}

export default new CustomerService()