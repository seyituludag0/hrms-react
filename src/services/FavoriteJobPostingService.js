import axios from "axios";

export default class CityService {
  getFavorites() {
    return axios.get("http://localhost:8080/api/favoriteJobPostings/getall");
  }
  
  getByCandidateIdAndJobPostingId(candidateId, jobPostingId){
    return axios.get(`http://localhost:8080/api/favoriteJobPostings/getByCandidateIdAndJobPostingId?candidateId=${candidateId}&jobPostingId=${jobPostingId}`)
  }

  // addFavorites(jobPosting) {
  //   return axios.post("http://localhost:8080/api/favoriteJobPostings/add", jobPosting);
  // }
  addFavorites(candidateId, jobPostingId) {
    return axios.post(`http://localhost:8080/api/favoriteJobPostings/add?candidateId=${candidateId}&jobPostingId=${jobPostingId}`);
  }

  updateFavorites(values) {
    return axios.post("http://localhost:8080/api/favoriteJobPostings/update", values);
  }

  delete(id){
    return axios.delete("http://localhost:8080/api/favoriteJobPostings/delete?id=" + id)
  }
}
