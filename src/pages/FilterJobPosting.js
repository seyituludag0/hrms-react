import React, {useState, useEffect} from 'react'
import WorkTypeService from '../services/WorkTypeService';
import JobPostingService from '../services/JobPostingService';


export default function FilterJobPosting() {

    let workTypeService = new WorkTypeService();
    let jobPostingService = new JobPostingService();



const [workTypes, setWorkTypes] = useState([])
const [selectedJobTitle, setSelectedJobTitle] = useState(null)
const [selectedCity, setSelectedCity] = useState(null);
const [selectedWorkType, setSelectedWorkType] = useState(null);


useEffect(() => {
    workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data));
  },[]);

  useEffect(() => {
    let filteredJobByJobPostings;
    if(selectedJobTitle && selectedCity && selectedWorkType){
        // filteredJobByJobPostings = 
    }
},[]);













  const filtered = (jobTitle="Software Developer", cityName="Ankara", workTypeId=3) =>{
    jobPostingService.getByJobTitleAndCityNameAndWorkTypeId(jobTitle, cityName, workTypeId).then(result=>console.log(result.data.data))
    // jobPostingService.getByJobTitleAndCityNameAndWorkTypeId("Software Developer", "Ankara", 3).then(result=>console.log(result.data.data))
  }

    return (
        <div className="row">
        <div className="col-md-12 nav-link-wrap">
          <div
            className="nav nav-pills text-center"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active mr-md-1"
              id="v-pills-1-tab"
              data-toggle="pill"
              href="#v-pills-1"
              role="tab"
              aria-controls="v-pills-1"
              aria-selected="true"
            >
              Haydi İş Aramaya Başlayalım
            </a>
          </div>
        </div>
        <div className="col-md-12 tab-wrap">
          <div className="tab-content p-4" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="v-pills-nextgen-tab"
            >
                <div className="row no-gutters">
                  <div className="col-md mr-md-2">
                    <div className="form-groupx">
                      <div className="form-field">
                        <div className="icon">
                          <span className="icon-briefcase" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="örn: Web Developer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md mr-md-2">
                    <div className="form-groupx">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select name id className="form-control">
                          <option selected disabled>Çalışma Tipi</option>
                            {
                              workTypes.map((workType)=>(
                                <option>{workType.type}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md mr-md-2">
                    <div className="form-groupx">
                      <div className="form-field">
                        <div className="icon">
                          <span className="icon-map-marker" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-groupx">
                      <div className="form-field">
                        <button
                          type="submit"
                          onClick={()=>filtered()}
                          className="form-control btn btn-secondary"
                        >
                          Ara
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    
    )
}
