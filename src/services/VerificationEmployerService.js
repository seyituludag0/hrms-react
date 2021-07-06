import axios from "axios"

export default class VerificationEmployerService{

add(values){
    return axios.post("http://localhost:8080/api/verificationEmployers/add",values)
}

delete(id){
    return axios.post("http://localhost:8080/api/verificationEmployers/delete?id="+id)
}

getAll(){
    return axios.get("http://localhost:8080/api/verificationEmployers/getAll")
}

getAllByVerifyFalse(){
    return axios.get("http://localhost:8080/api/verificationEmployers/getAllByVerifyFalse")
}

getById(id){
    return axios.get("http://localhost:8080/api/verificationEmployers/getbyId?id="+id)
    }
}