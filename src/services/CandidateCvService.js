import axios from "axios";

export default class CandidateCvService{
    getCandidateCv(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getCandidateCvByCandidateId?candidateId=" + {candidateId})
    }
}