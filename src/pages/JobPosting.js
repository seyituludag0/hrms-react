import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import { Icon,  Menu, Table } from "semantic-ui-react";

export default function JobPosting() {
  const [jobPostings, setJobPosting] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getJobPosting().then(result=>setJobPosting(result.data.data))
  },[]);

  return (
    <div>
      
      <Table celled>
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
    {
        jobPostings.map(jobPosting=>(
            <Table.Row key="id">
                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                <Table.Cell>{jobPosting.jobTitle.title}</Table.Cell>
                <Table.Cell>{jobPosting.city.name}</Table.Cell>
                <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
                <Table.Cell>{jobPosting.postedDate}</Table.Cell>
                <Table.Cell>{jobPosting.lastApplyDate}</Table.Cell>
      </Table.Row>
        ))
    }      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

    </div>
  );
}
