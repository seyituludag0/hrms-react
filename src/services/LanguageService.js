import axios from "axios";

export default class LanguageService{
    getLanguages(){
        return axios.get("http://localhost:8080/api/languages/getAll")
    }

    getLanguageLevels(){
        return axios.get("http://localhost:8080/api/LanguageLevels/getAll")
    }

    add(languageCandidate){
        return axios.post("http://localhost:8080/api/LanguageCandidate/add", languageCandidate)
    }

    update(languageCandidate){
        return axios.post("http://localhost:8080/api/LanguageCandidate/update", languageCandidate)
    }

}



