import React, { useState, useEffect } from "react";
import JobPostingService from "../../../services/JobPostingService";
import { Card, Table, Button, Label, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";


export default function AdminJobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllOpenJobPosting()
      .then((result) => setJobPostings(result.data.data));
  },[]);

  let changeIsActiveEmployee = (id) => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .changeActiveByEmployee(id)
      .then(result=>toast.success(result.data.message));
  };

  return (
    <div>
      <div className="my-div" style={{marginLeft:"7rem", marginRight:"-5rem"}}>
      <Card fluid color="blue" header="Tüm İş İlanları" />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Maaş</Table.HeaderCell>
            <Table.HeaderCell>Yayına Alınma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Admin Onayı</Table.HeaderCell>
            <Table.HeaderCell>İlanı Onayla</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting, key) => (
            <Table.Row key={jobPosting.id}>
              <Table.HeaderCell>{jobPosting.jobTitle.title}</Table.HeaderCell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              <Table.Cell>
                {jobPosting.minWage}₺ - {jobPosting.maxWage}₺
              </Table.Cell>
              <Table.Cell>{jobPosting.postedDate}</Table.Cell>
              <Table.Cell>{jobPosting.workType?.type}</Table.Cell>
              <Table.Cell>{jobPosting.workingTimes?.type}</Table.Cell>
              <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
              {jobPosting.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Aktif
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="red" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}
               <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsActiveEmployee(jobPosting.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Değiştir
                </Button>
              </Table.Cell>
            </Table.Row>
            
          ))}
         
        </Table.Body>
      </Table>
    
      </div>
   </div>
  );
}
