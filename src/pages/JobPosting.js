import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import { Card } from "semantic-ui-react";
import Filter from "../layouts/Filter";
import { Grid } from "semantic-ui-react";

export default function JobPosting() {
  const [jobPostings, setJobPosting] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPosting()
      .then((result) => setJobPosting(result.data.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} floated="left">
            <Filter />
          </Grid.Column>

          <Grid.Column width={14}>
            <Card.Group>
              <Card fluid color="blue" header="İŞ İLANLARI" />
            </Card.Group>
            
            <div className="ui cards">
              {jobPostings.map((jobPosting) => (
                <div className="card" key={jobPosting.id}>
                  <div className="content">
                    <div className="header">{jobPosting.jobTitle.title}</div>
                    <hr />
                    <div className="header">
                      {jobPosting.employer.companyName}
                    </div>
                    <div className="description">{jobPosting.jobDetails}</div>
                  </div>

                  <div className="content">
                    <div className="header">
                      {jobPosting.minWage} - {jobPosting.maxWage}₺
                    </div>
                  </div>

                  <div
                    className="ui bottom attached button"
                    style={{ backgroundColor: "blue", color: "#fff" }}
                  >
                    <i className="add icon"></i>
                    İlana Başvur
                  </div>
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Card.Group>
        <Card fluid color="blue" header="İŞ İLANLARI" />
      </Card.Group>
      <div className="ui cards">
        {jobPostings.map((jobPosting) => (
          <div className="card" key={jobPosting.id}>
            <div className="content">
              <div className="header">{jobPosting.jobTitle.title}</div>
              <hr />
              <div className="header">{jobPosting.employer.companyName}</div>
              <div className="description">{jobPosting.jobDetails}</div>
            </div>

            <div className="content">
              <div className="header">
                {jobPosting.minWage} - {jobPosting.maxWage}₺
              </div>
            </div>

            <div
              className="ui bottom attached button"
              style={{ backgroundColor: "blue", color: "#fff" }}
            >
              <i className="add icon"></i>
              İlana Başvur
            </div>
          </div>
        ))}
      </div>*/}
    </div>
  );
}
