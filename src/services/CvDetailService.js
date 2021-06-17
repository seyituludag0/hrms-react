import axios from "axios";

export default class CvDetailService{
    getAllCvDetails(){
        return axios.get("http://localhost:8080/api/cvDetails/getAll")
    }

    getByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getCandidateCvByCandidateId?candidateId=" + candidateId)
    }
}


