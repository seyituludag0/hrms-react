import axios from "axios";

export default class CityService {
  getFavorites() {
    return axios.get("http://localhost:8080/api/favoriteJobPostings/getall");
  }
  
  getByCandidateIdAndJobPostingId(candidateId, jobPostingId){
    return axios.get(`http://localhost:8080/api/favoriteJobPostings/getByCandidateIdAndJobPostingId?candidateId=${candidateId}&jobPostingId=${jobPostingId}`)
  }

  addFavorites(candidateId, jobPostingId) {
    return axios.post(`http://localhost:8080/api/favoriteJobPostings/add?candidateId=${candidateId}&jobPostingId=${jobPostingId}`);
  }

  getByCandidateIdFavorites(candidateId){
    return axios.get("http://localhost:8080/api/favoriteJobPostings/getByCandidateId?candidateId=1")
  }

}