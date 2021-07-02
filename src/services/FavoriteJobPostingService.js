import axios from "axios";

export default class CityService {
  getFavorites() {
    return axios.get("http://localhost:8080/api/favoriteJobPostings/getall");
  }
  addFavorites(values) {
    return axios.post("http://localhost:8080/api/favoriteJobPostings/add", values);
  }
  updateFavorites(values) {
    return axios.post("http://localhost:8080/api/favoriteJobPostings/update", values);
  }
}
