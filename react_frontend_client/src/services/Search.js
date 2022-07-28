import axios from 'axios';

const SEARCH_URL = "http://localhost:8080/api/search"

class Search {

    search(keywords, distance) {
        return axios.post(SEARCH_URL, {keywords: keywords, distance: distance});
    }
}

export default new Search();