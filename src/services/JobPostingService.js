import axios from "axios"

export default class JobPostingService{
    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobposting/getall");
    }    

    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobposting/add",values)
    }

    getCandidateCvByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getCandidateCvByCandidateId?candidateId=" + candidateId)
    }

    getJobPostingById(id){
        return axios.get("http://localhost:8080/api/jobposting/getById?id=" + id)
    }

    // -------------------------------------------------------------------------------------------------------------------------

    // aktif iş ilanlarını görmek için

    getAllOpenJobPosting(){
        return axios.get("http://localhost:8080/api/jobposting/getAllOpenJobPostingList");
    }

    changeActiveByEmployee(id){
        return axios.post("http://localhost:8080/api/jobposting/changeActiveByEmployee?id=" + id)
    }

    getAllByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobposting/getAllJobPostingByEmployer?id=" + employerId)
    }

    changeIsActiveByEmployer(id){
        return axios.post("http://localhost:8080/api/jobposting/changeIsActiveByEmployer?id=" + id)
    }

    findAllByOrderByPostedDateDesc(){
        return axios.get("http://localhost:8080/api/jobposting/findAllByOrderByPostedDateDesc");
    }
    
    getJobPostingByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobposting/getByisActiveTrueAndEmployer_companyName?companyName=" + companyName)
    }

    getAllByCityId(cityId){
        return axios.get("http://localhost:8080/api/jobposting/getAllByCityId?cityId=" + cityId)
    }

    getAllByWorkTypeId(workTypeId){
        return axios.get("http://localhost:8080/api/jobposting/getByWorkTypeId?workId=" + workTypeId)
}

    getByCityIdAndWorkTypeId(cityId, workTypeId){
        return axios.get(`http://localhost:8080/api/jobposting/getByCityIdAndWorkTypeId?cityId=${cityId}&workTypeId=${workTypeId}`)
    }
}
