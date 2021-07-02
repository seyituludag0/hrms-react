import axios from "axios"

export default class AbilityService{
    getAbilities(){
        return axios.get("http://localhost:8080/api/abilities/getAll")
    }

    getAbilityCandidates(){
        return axios.get("http://localhost:8080/api/abilityCandidates/getall")
    }

    add(values){
        return axios.post("http://localhost:8080/api/abilityCandidates/add", values)
    }

    update(abilityCandidate){
        return axios.post("http://localhost:8080/api/abilityCandidates/update", abilityCandidate)
    }
}

