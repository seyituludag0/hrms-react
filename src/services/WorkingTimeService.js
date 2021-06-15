import axios from "axios";

export default class WorkingTimeService{

    getWorkingTimes(){
        return axios.get("http://localhost:8080/api/workingTime/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/workingTime/add", values)
    }
}