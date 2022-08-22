import axios from 'axios';

const API_LOGIN_URL = "http://localhost:8080/api/auth/login"

class AuthService {

    login(userName, password) {
        return axios.post(API_LOGIN_URL, {userName: userName, password: password})
                    .then(res => {
                        if (res.data.accessToken) {
                            localStorage.setItem("user", JSON.stringify(res.data));
                        }
                        return res.data;
                    });
    }

    logout() {
        console.log("Logout triggered");
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();