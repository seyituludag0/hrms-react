import axios from "axios";

export default class AuthService{

    registerCandidate(candidate){
        return axios.post("http://localhost:8080/api/auth/registerCandidate", candidate)
    }

    registerEmployer(employer){
        return axios.post("http://localhost:8080/api/auth/registerEmployer", employer)
    }

}