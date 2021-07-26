import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import company from "../img/icon/company.svg";
import location from "../img/icon/location.svg";
import HomePageFavoriteButton from "./HomePageFavoriteButton";
import { Icon, Table, Message} from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";

export default function HomePageJobPosting() {

    const [activePage, setActivePage] = useState(1);
    const [pageSize] = useState(3)
    const [jobPostings, setJobPostings] = useState([])

    useEffect(()=>{
        let jobPostingService = new JobPostingService();
        jobPostingService.findAllByOrderByPostedDateDesc(activePage, pageSize).then(result=>setJobPostings(result.data.data))
    },[])

    return (
        <div className="ftco-section bg-light hotjobs">
          <div className="container" style={{ marginLeft: "15rem" }}>
            <div className="row">
              <div className=" pr-lg-5">
                <div className="row">
                  <div className="col-md-12 heading-section ">
                    <span className="subheading">Son Eklenen İşler</span>
                    <h2 className="mb-4">Yeni Eklenen İlanlar</h2>
                  </div>
                  {jobPostings.length > 0 ? (
                    jobPostings.map((jobPosting) => (
                      <div className="col-md-12 ">
                        <div className="job-post-item py-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header d-flex align-items-center">
                              <h2 className="mr-3 text-black">
                                <Link to={`/jobposting/${jobPosting.id}`}>
                                  {jobPosting.jobTitle.title}
                                </Link>
                              </h2>
                              <div className="badge-wrap">
                                <span className="bg-primary text-white badge py-2 px-3">
                                  {jobPosting.workType.type}
                                </span>
                                <span
                                  className="bg-primary text-white badge py-2 px-3"
                                  style={{
                                    marginLeft: "1rem",
                                    backgroundColor: "red !important",
                                  }}
                                >
                                  {jobPosting.workingTimes.type}
                                </span>
                              </div>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3">
                                <span className="icon-layers" />{" "}
                                <img
                                  src={company}
                                  width="20px"
                                  style={{ marginTop: "-0.3rem" }}
                                  alt=""
                                />
                                <a
                                  href={`http://${jobPosting.employer?.webAddress}`}
                                  rel="noreferrer"
                                  target="_blank"
                                  style={{ marginLeft: "5px" }}
                                >
                                  {jobPosting.employer.companyName}
                                </a>
                              </div>
                              <div>
                                <span>|</span>
                                <span className="icon-my_location" /> &nbsp;
                                <img src={location} width="20px" alt="" />
                                <span> {jobPosting.city.name}</span>
                              </div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <HomePageFavoriteButton jobPostingId={jobPosting.id} />
                            <a href="/" className="btn btn-primary ">
                              İşe Başvur
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Table>
                      <Message
                        info
                        color="red"
                        visible
                        style={{ paddingLeft: "33%" }}
                        size="big"
                      >
                        Üzgünüz, Bu sayfada iş ilanı bulunamadı!
                      </Message>
                    </Table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

}
