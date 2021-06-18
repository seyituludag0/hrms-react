import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Label, Icon, Button, Card } from "semantic-ui-react";
import JobPostingService from "../../services/JobPostingService";
import { toast } from "react-toastify";

export default function EmployerJobPostingList() {
  let { employerId } = useParams();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllByEmployerId(2)
      .then((result) => setJobPostings(result.data.data));
  }, []);

  let changeIsActiveByEmployer = (id) => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .changeIsActiveByEmployer(id)
      .then((result) => toast.success(result.data.message));
  };

  return (
    <div>
      <div
        className="my-div"
        style={{ marginLeft: "6rem", marginRight: "-3rem" }}
      >
        <Card fluid color="blue" header="İŞ İLANLARIM" />
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
              {/* <Table.HeaderCell textAlign="center"> Durum</Table.HeaderCell> */}
              <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
              <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
              <Table.HeaderCell>İlanın Durumunu Değiştir</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobPostings.map((jobPosting, key) => (
              <Table.Row key={key}>
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
                {jobPosting.openEmployer ? (
                  <Table.Cell>
                    <Label color="green" style={{ width: "100%" }}>
                      İş ilanı Açık
                    </Label>
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Label color="red" style={{ width: "100%" }}>
                      İş ilanı Kapalı
                    </Label>
                  </Table.Cell>
                )}
                {jobPosting.active ? (
                  <Table.Cell>
                    <Label color="green" style={{ width: "100%" }}>
                      Admin tarafından onaylı
                    </Label>
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Label color="orange" style={{ width: "100%" }}>
                      Admin tarafından hala pasif
                    </Label>
                  </Table.Cell>
                )}

                <Table.Cell collapsing>
                  <Button
                    onClick={() => changeIsActiveByEmployer(jobPosting.id)}
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
