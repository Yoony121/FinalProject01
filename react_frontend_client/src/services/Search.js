import axios from 'axios';

const SEARCH_URL = "http://localhost:8080/api/search"

class Search {

    constructor() {
        this.latitude = 0.0;
        this.longitude = 0.0;
        this.hasLocation = false;
    }

    async search(keywords, distance) {
        await window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log("Get location: " + position);
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.hasLocation = true;
                // this.setState({latitude: position.coords.latitude});
                // this.setState({longitude: position.coords.longitude});
                // this.setState({hasLocation: true});
            },
            error => {
                console.log("Get error: " + error);
                this.hasLocation = false;
                // this.setState({hasLocation: false});
            }
        );
        if (this.hasLocation) {
            return axios.post(SEARCH_URL, {keywords: keywords, distance: distance, latitude: this.latitude, longitude: this.longitude});
        } else {
            return axios.post(SEARCH_URL + '/no-geo', {keywords: keywords, distance: distance, latitude: 0.0, longitude: 0.0});
        }
    }
}

export default new Search();