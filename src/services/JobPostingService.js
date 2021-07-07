import axios from "axios"

export default class JobPostingService{
    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobPosting/getall");
    }    

    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobPosting/add",values)
    }

    getCandidateCvByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getCandidateCvByCandidateId?candidateId=" + candidateId)
    }

    getJobPostingById(id){
        return axios.get("http://localhost:8080/api/jobPosting/getById?id=" + id)
    }

    // -------------------------------------------------------------------------------------------------------------------------

    // aktif iş ilanlarını görmek için

    getAllOpenJobPosting(){
        return axios.get("http://localhost:8080/api/jobPosting/getAllOpenJobPostingList");
    }

    changeActiveByEmployee(id){
        return axios.post("http://localhost:8080/api/jobPosting/changeActiveByEmployee?id=" + id)
    }

    getAllByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobPosting/getAllJobPostingByEmployer?id=" + employerId)
    }

    changeIsActiveByEmployer(id){
        return axios.post("http://localhost:8080/api/jobPosting/changeIsActiveByEmployer?id=" + id)
    }

    findAllByOrderByPostedDateAsc(pageNo, size){
        return axios.get(`http://localhost:8080/api/jobPosting/findAllByOrderByPostedDateAsc?pageNo=${pageNo}&size=${size}`); //Önceden Eklenen İlanlar
    }
  
    findAllByOrderByPostedDateDesc(pageNo, size){
        return axios.get(`http://localhost:8080/api/jobPosting/findAllByOrderByPostedDateDesc?pageNo=${pageNo}&size=${size}`); //Yeni Eklenen İlanlar
    }
    
    getJobPostingByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobPosting/getByisActiveTrueAndEmployer_companyName?companyName=" + companyName)
    }

    getAllByCityId(cityId){
        return axios.get("http://localhost:8080/api/jobPosting/getAllByCityId?cityId=" + cityId)
    }

    getAllByWorkTypeId(workTypeId){
        return axios.get("http://localhost:8080/api/jobPosting/getByWorkTypeId?workId=" + workTypeId)
}

    getByCityIdAndWorkTypeId(cityId, workTypeId){
        return axios.get(`http://localhost:8080/api/jobPosting/getByCityIdAndWorkTypeId?cityId=${cityId}&workTypeId=${workTypeId}`)
    }

    countByJobTitleId(jobTitleId){
        return axios.get("http://localhost:8080/api/jobPosting/countByJobTitleId?jobTitleId="+jobTitleId)
    }
     
    countGetAll(){
       return axios.get("http://localhost:8080/api/jobPosting/jobPostingAllCount")
    }

     
    getByJobTitleAndCityNameAndWorkTypeId(jobTitle, cityName, workTypeId){
    return axios.get(`http://localhost:8080/api/jobPosting/getByJobTitleAndCityNameAndWorkTypeId?cityName=${cityName}&jobTitle=${jobTitle}&workTypeId=${workTypeId}`) 
  }

  
  
}

