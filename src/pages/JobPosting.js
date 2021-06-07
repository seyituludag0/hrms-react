import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import { Card } from "semantic-ui-react";

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
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key="id">
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobPosting.postedDate}</Table.Cell>
              <Table.Cell>{jobPosting.lastApplyDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table> */}
<Card.Group>
    <Card fluid color='blue' header='İŞ İLANLARI' />
  
  </Card.Group>
       <div className="ui cards">
      {jobPostings.map((jobPosting) => (
           <div className="card" key={jobPosting.id}>
          <div className="content">
          <div className="header">{jobPosting.jobTitle.title}</div>
          <hr />
          <div className="header">{jobPosting.employer.companyName}</div>
            <div className="description">
              {jobPosting.jobDetails}
            </div>
          </div>

          <div className="content">
            <div className="header">{jobPosting.minWage} - {jobPosting.maxWage}₺</div>
          </div>

          
          <div className="ui bottom attached button" style={{backgroundColor:"blue",color:"#fff"}}>
            <i className="add icon"></i>
              İlana Başvur
          </div>
        </div>
          ))}
      </div>
    




    </div>
  );
}


