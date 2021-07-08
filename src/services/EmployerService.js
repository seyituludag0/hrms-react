import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getByEmployerId(id) {
        return axios.get("http://localhost:8080/api/employers/getById?id=" + id);
      }

    update(values){
        return axios.post("http://localhost:8080/api/employers/update", values)
    }

    changeStatusVerified(id){
        return axios.post("http://localhost:8080/api/employers/changeStatusVerified?id=" + id)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/employers/employerAllCount")
    }

    uploadPhoto(employerId){
        return axios.post("http://localhost:8080/api/employers/uploadPhoto?employerId=" + employerId)
    }
}

