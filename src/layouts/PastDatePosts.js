import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Icon, Table, Message} from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";
import { Pagination } from "semantic-ui-react";

export default function PastDatePosts() {
    const [jobPostings, setjobPostings] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageSize] = useState(3)

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService
          .findAllByOrderByPostedDateAsc(activePage, pageSize)
          .then((result) => setjobPostings(result.data.data)
          );
      },[]);

      const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
      };

  return (
    <div className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div
            className="col-md-7 heading-section text-center"
            style={{ marginLeft: "10rem" }}
          >
            <span className="subheading">İş Başlıkları</span>
            <h2 className="mb-4" style={{ fontSize: "52px" }}>
              Geçmiş Tarihli İlanlar
            </h2>
          </div>
        </div>

        <div className="jobs" style={{ display: "inline-flex" }}>
          <div className="row">
            {jobPostings.length > 0 ? (
              jobPostings.map((jobPosting) => (
                <div className="col-md-3" style={{ width: "100rem" }}>
                  <ul className="category" key={jobPosting.id}>
                    <li>
                      <Link to={`/jobposting/${jobPosting.id}`}>
                        {jobPosting.jobTitle.title} <br />
                        <span>Açık Pozisyon Sayısı</span>{" "}
                        <span className="number">
                          {jobPosting.numberOfOpenPositions}
                        </span>
                        <Icon name="angle right" />
                      </Link>
                    </li>
                  </ul>
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
        <Pagination
          activePage={activePage}
          onPageChange={onChange}
          totalPages={10}
        />
      </div>
    </div>
  );
}
