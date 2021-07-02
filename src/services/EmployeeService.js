import axios from "axios";

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }

    getByEmployeeId(id){
        return axios.get("http://localhost:8080/api/employees/getById?id=" + id)
    }

    update(values){
        return axios.post("http://localhost:8080/api/employees/update", values)
    }
}