import axios from "axios"

export default class WorkPlaceService{
    getWorkPlaces(){
        return axios.get("http://localhost:8080/api/workPlaceCandidates/getall")
    }

    add(workPlaceCandidate){
        return axios.post("http://localhost:8080/api/workPlaceCandidates/add", workPlaceCandidate)
    }

    update(workPlaceCandidate){
        return axios.post("http://localhost:8080/api/workPlaceCandidates/update", workPlaceCandidate)
    }
    delete(id){
        return axios.post("http://localhost:8080/api/workPlaceCandidates/delete?id=" + id)
    }
}