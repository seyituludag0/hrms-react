import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import Filter from "../layouts/Filter";
import { Grid } from "semantic-ui-react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

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
            <div className="myCards">
              <Card.Group>
                <Card className ="jobs"
                  fluid
                  color="blue"
                  header="İŞ İLANLARI"
                />
              </Card.Group>

              <Card.Group>
                {jobPostings.map((jobPosting) => (
                  <Card className="jobPostingCard" key={jobPosting.id}>
                    <Card.Content>
                      <Image
                        floated="right"
                        style={{ width: "10rem" }}
                        src="https://res.cloudinary.com/hrms-project/image/upload/v1623090912/free-logo-2ye432qlrl-idpzauzgux_pjqz4x.jpg"
                      />
                      <Card.Header></Card.Header>
                      <Card.Meta className="jobTitle" style={{ fontSize: "17px", color: "#000000" }}>
                        <strong>{jobPosting.jobTitle.title}</strong>
                      </Card.Meta>
                      <Card.Meta className="jobTitle"  style={{ fontSize: "17px", color: "#000000" }}>
                        <strong>{jobPosting.employer.companyName}</strong>
                      </Card.Meta>
                      <Card.Description>
                        {jobPosting.jobDetails} <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div
                        className="ui three buttons"
                        style={{ padding: "10px" }}
                      >
                        <Button basic color="green">
                          İlana Başvur
                        </Button>

                        <Button basic color="orange">
                          Detayları Gör
                        </Button>
                        <Button as="div" labelPosition="right">
                          <Button color="red">
                            <Icon name="heart" />
                            Favorilere Ekle
                          </Button>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
