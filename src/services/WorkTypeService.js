import axios from "axios";

export default class WorkTypeService{

    getWorkTypes(){
        return axios.get("http://localhost:8080/api/workTypes/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/workTypes/add", values)
    }
}