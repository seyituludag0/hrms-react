import React, { useEffect, useState } from "react";
import EmployerService from "../services/EmployerService";
import JobTitleService from "../services/JobTitleService";
import JobPostingService from "../services/JobPostingService";
import company from "../img/icon/company_01.svg";
import advertisement from "../img/icon/advertisement.svg";
import jobSearch from "../img/icon/job-search.svg";
export default function ViewCount() {
  const [employerCount, setEmployerCount] = useState(0);
  const [jobTitleCount, setJobTitle] = useState(0);
  const [jobPostingCount, setJobPostingCount] = useState(0);

  let employerService = new EmployerService();
  let jobTitleService = new JobTitleService();
  let jobPostingService = new JobPostingService();

  useEffect(() => {
    employerService
      .countGetAll()
      .then((result) => setEmployerCount(result.data));
    jobTitleService.countGetAll().then((result) => setJobTitle(result.data));
    jobPostingService
      .countGetAll()
      .then((result) => setJobPostingCount(result.data));
  }, []);

  return (
    <div>
     
     <div
          style={{
            backgroundColor: "#6c63ff",
            width: "110rem",
            height: "410px",
            marginTop: "3rem",
          }}
        >
          
          <div className="row">
            <div className="col-3" style={{ marginTop: "8rem", marginLeft:"12rem" }}>
              <img src={company} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ marginTop: "1rem", fontSize: "2.5rem" }}
              >
                {employerCount}
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Şirket
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={advertisement} style={{ width: "5rem" }} alt="" />
              <h4
                style={{
                  marginTop: "1rem",
                  fontSize: "2.5rem",
                }}
              >
                {jobPostingCount}
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    İş İlanı
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={jobSearch} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                {jobTitleCount}
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    İş Başlığı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
     </div>
  );
}
