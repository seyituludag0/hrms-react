import axios from "axios";

export default class ActivationCodeService{
    activationCodeEntry(code){
        return axios.post("http://localhost:8080/api/activationCodes/verify?code=" + code)
    }
}

