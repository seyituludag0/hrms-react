import axios from "axios"

export default class BasicInformationService{
    getBasicInformations(){
        return axios.get("http://localhost:8080/api/cvDetails/getall")
    }

    update(BasicInformation){
        return axios.post("http://localhost:8080/api/cvDetails/update", BasicInformation)
    }
}