import axios from "axios";

export default class SchoolService {
  // getSchools() {
  //   return axios.get("http://localhost:8080/api/schools/getAll");
  // }

  getSchools() {
    return axios.get("http://localhost:8080/api/schools/getAll");
  }

  update(schoolcandidate) {
        return axios.post("http://localhost:8080/api/schoolcandidate/update",schoolcandidate);
  }

  delete(id) {
    return axios.post("http://localhost:8080/api/schoolcandidate/delete?id=" + id);
  }
}
