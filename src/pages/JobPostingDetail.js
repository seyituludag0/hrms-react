import {
  Button,
  Card,
  Image,
  Icon,
  Dropdown,
  Header,
  Table,
} from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import FavoriteAddButton from "../layouts/FavoriteAddButton";
import { toast } from "react-toastify";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import moment from "moment";
import "moment/locale/tr";

export default function JobPostingDetail() {
  let { id } = useParams();

  const [jobPostingDetail, setJobPosting] = useState({});
  const [jobPostingByEmployer, setJobPostingByEmployer] = useState([]);



  useEffect(() => {


    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostingById(id)
      .then((result) => setJobPosting(result.data.data));

    jobPostingService
      .getJobPostingByEmployerId(106) // Fake id verildi ilerde düzeltilecek
      .then((result) => setJobPostingByEmployer(result.data.data));
  }, []);

  const handleAddFavorite = (jobPostingId) => {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.addFavorites(1, jobPostingId).then((result) => {
      toast.success(result.data.message);
    });
  };

  return (
    <div>
      <div
        className="myCards"
        style={{ marginRight: "-5rem", marginLeft: "15rem" }}
      >
        <Card.Group>
          {/* <Card className="jobs" fluid color="blue" header="İŞ İLANLARI" /> */}
          <Card
            className="jobs"
            fluid
            color="blue"
            header="İŞ İLANININ DETAYI"
          />
        </Card.Group>
        <Card className="jobPostingCard">
          <Card.Content>
            <Image
              floated="right"
              style={{ width: "10rem" }}
              src={jobPostingDetail.employer?.companyLogo}
            />
            <Card.Header></Card.Header>
            <Card.Meta
              className="jobTitle"
              style={{ fontSize: "17px", color: "#000000" }}
            >
              <strong>{jobPostingDetail.jobTitle?.title}</strong>
            </Card.Meta>
            <Card.Meta
              className="jobTitle"
              style={{ fontSize: "17px", color: "#000000" }}
            >
              <strong>{jobPostingDetail.employer?.companyName}</strong>
            </Card.Meta>
            <Dropdown.Header
              icon="location arrow"
              style={{ float: "left" }}
            ></Dropdown.Header>
            <Card.Meta className="cityName">
              <h3>{jobPostingDetail.city?.name}</h3>
              <Dropdown.Header
                icon="calendar check outline"
                style={{
                  float: "left",
                  fontSize: "19px",
                  marginTop: "0.5rem",
                  marginLeft: "-1.9rem",
                  color: "black",
                }}
              ></Dropdown.Header>
            </Card.Meta>

            <Card.Meta className="postedDate" style={{ marginLeft: "-7rem" }}>
              <h3>{jobPostingDetail.postedDate}</h3>
            </Card.Meta>

            <Dropdown.Header
              icon="calendar times outline"
              style={{
                float: "left",
                marginTop: "5.9rem",
                marginLeft: "-13.1rem",
                color: "black",
              }}
            ></Dropdown.Header>

            <Card.Meta className="lastApplyDate">
              <h3 style={{ marginLeft: "-2.3rem" }}>
                {jobPostingDetail.lastApplyDate}
              </h3>

              {/* <h3 style={{ marginLeft: "-2.3rem" }}>
                {jobPostingDetail.lastApplyDate}
              </h3> */}

{/* <h3>{moment(jobPostingDetail.postedDate).locale("tr").fromNow()}</h3> */}
              {/* {jobPostingDetail.postedDate!==null?<h1>{jobPostingDetail.postedDate}</h1>:<h1>x</h1>} */}
            </Card.Meta>

            <Dropdown.Header
              icon="money"
              style={{ float: "left", marginTop: "3rem", marginLeft: "2.5rem" }}
            ></Dropdown.Header>

            <Card.Meta className="minWage">
              <h3>{jobPostingDetail.minWage}₺</h3>
            </Card.Meta>

            <Dropdown.Header
              icon="money"
              style={{
                float: "left",
                marginTop: "5.7rem",
                marginLeft: "-9.4rem",
              }}
            ></Dropdown.Header>

            <Card.Meta className="maxWage">
              <h3 style={{ marginLeft: "-1.5rem" }}>
                {jobPostingDetail.maxWage}₺
              </h3>
            </Card.Meta>

            <Dropdown.Header
              style={{ float: "left", marginTop: "2.7rem", marginLeft: "1rem" }}
            >
              <span style={{ color: "#333333" }}>Açık Pozisyon Sayısı: </span>{" "}
              <h3
                style={{
                  marginTop: "-2.1rem",
                  marginLeft: "18rem",
                  color: "#333333",
                }}
              >
                {jobPostingDetail.numberOfOpenPositions}
              </h3>
            </Dropdown.Header>

            {/* <div className="date">
                    {
                      jobPostingDetail.lastApplyDate!==null?<b>{moment(jobPostingDetail.lastApplyDate)
                      .endOf(jobPostingDetail.posted_date)
                      .from(jobPostingDetail.posted_date)}{" "}bitiyor</b>:<h1>Null</h1>
                    }
            </div> */}
  
            <div className="date">
                    {

                       jobPostingDetail.lastApplyDate!==null?<b>{moment(jobPostingDetail.lastApplyDate)
                      .endOf(jobPostingDetail.posted_date)
                      .from(jobPostingDetail.posted_date)}{" "}bitiyor</b>:<b>Son Başvuru Tarihi Bilinmiyor</b>

                      // jobPostingDetail.lastApplyDate!==null?<b>{moment(jobPostingDetail.lastApplyDate)
                      // .endOf(jobPostingDetail.posted_date)
                      // .from(jobPostingDetail.posted_date)}{" "}bitiyor</b>:<b>Son Başvuru Tarihi Mevcut Değil</b>
                    }
            </div>

            <Dropdown.Header
              style={{
                float: "left",
                marginTop: "5.7rem",
                marginLeft: "-28rem",
              }}
            >
              <span style={{ color: "#333333" }}>Çalışma Tipi: </span>{" "}
              <h3
                style={{
                  marginTop: "-2.1rem",
                  marginLeft: "27rem",
                  color: "#333333",
                }}
              >
                {jobPostingDetail.workType?.type}
              </h3>
            </Dropdown.Header>

            <Dropdown.Header
              style={{
                float: "left",
                marginTop: "8.7rem",
                marginLeft: "-36rem",
              }}
            >
              <span style={{ color: "#333333" }}>Çalışma Zamanı Tipi: </span>{" "}
              <h3
                style={{
                  marginTop: "-2.1rem",
                  marginLeft: "27rem",
                  color: "#333333",
                }}
              >
                {jobPostingDetail.workingTimes?.type}
              </h3>
            </Dropdown.Header>
          </Card.Content>

          <Card.Content extra>
            <div className="ui three buttons" style={{ padding: "10px" }}>
              <Button basic color="green">
                <Icon name="write square" style={{ fontSize: "1.5rem" }} />
                İlana Başvur
              </Button>

              <FavoriteAddButton jobPostingId={jobPostingDetail.id} />
            </div>
          </Card.Content>

          <hr />
          {/* ///////////////////////////////////////////ŞİRKET BİLGİLERİ///////////////////////////////////////////////////////////////// */}
          <Card.Group>
            <Card
              className="jobs"
              fluid
              color="blue"
              header="İŞVEREN ŞİRKET BİLGİLERİ"
            />
          </Card.Group>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Şirket İsmi</Table.HeaderCell>
                <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h2" textAlign="center">
                    {jobPostingDetail.employer?.companyName}
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>
                  <a
                    href={`http://${jobPostingDetail.employer?.webAddress}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {jobPostingDetail.employer?.webAddress}
                  </a>
                </Table.Cell>
                <Table.Cell singleLine>
                  {jobPostingDetail.employer?.email}
                </Table.Cell>
                <Table.Cell>
                  {jobPostingDetail.employer?.phoneNumber}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          {/* /////////////////////////////////////ŞİRKETE AİT TÜM İLANLAR//////////////////////////////////////////////////////// */}

          <br />

          <Card.Group>
            <Card
              className="jobs"
              fluid
              color="blue"
              header="ŞİRKETE AİT TÜM İLANLAR"
            />
          </Card.Group>

          <br />

          {jobPostingByEmployer.map((jobPostingByEmployer) => (
            <Card className="jobPostingCard" key={jobPostingByEmployer.id}>
              <Card.Content>
                <Image
                  floated="right"
                  style={{ width: "10rem" }}
                  src={jobPostingByEmployer.employer.companyLogo}
                />
                <Card.Header></Card.Header>
                <Card.Meta
                  className="jobTitle"
                  style={{ fontSize: "17px", color: "#000000" }}
                >
                  <strong>{jobPostingByEmployer.jobTitle.title}</strong>
                </Card.Meta>
                <Card.Meta
                  className="jobTitle"
                  style={{ fontSize: "17px", color: "#000000" }}
                >
                  <strong>{jobPostingByEmployer.employer.companyName}</strong>
                </Card.Meta>
                <Dropdown.Header
                  icon="location arrow"
                  style={{ float: "left" }}
                ></Dropdown.Header>
                <Card.Meta className="cityName">
                  <h3>{jobPostingByEmployer.city.name}</h3>
                  <Dropdown.Header
                    icon="calendar check outline"
                    style={{
                      float: "left",
                      fontSize: "19px",
                      marginTop: "0.5rem",
                      marginLeft: "-1.9rem",
                      color: "black",
                    }}
                  ></Dropdown.Header>
                </Card.Meta>

                <Card.Meta className="postedDate">
                  <h3>{jobPostingByEmployer.postedDate}</h3>
                </Card.Meta>

                <Dropdown.Header
                  icon="calendar times outline"
                  style={{
                    float: "left",
                    marginTop: "5.9rem",
                    marginLeft: "-13.1rem",
                    color: "black",
                  }}
                ></Dropdown.Header>

                <Card.Meta className="lastApplyDate">
                  <h3 style={{ marginLeft: "-2.3rem" }}>
                    {jobPostingByEmployer.lastApplyDate}
                  </h3>
                </Card.Meta>

                <Dropdown.Header
                  icon="money"
                  style={{
                    float: "left",
                    marginTop: "3rem",
                    marginLeft: "2.5rem",
                  }}
                ></Dropdown.Header>

                <Card.Meta className="minWage">
                  <h3>{jobPostingByEmployer.minWage}₺</h3>
                </Card.Meta>

                <Dropdown.Header
                  icon="money"
                  style={{
                    float: "left",
                    marginTop: "5.7rem",
                    marginLeft: "-9.4rem",
                  }}
                ></Dropdown.Header>

                <Card.Meta className="maxWage">
                  <h3 style={{ marginLeft: "-1.3rem" }}>
                    {jobPostingByEmployer.maxWage}₺
                  </h3>
                </Card.Meta>

                <Dropdown.Header
                  style={{
                    float: "left",
                    marginTop: "2.7rem",
                    marginLeft: "1rem",
                  }}
                >
                  <span style={{ color: "#999999" }}>
                    Açık Pozisyon Sayısı:{" "}
                  </span>{" "}
                  <h3
                    style={{
                      marginTop: "-2.1rem",
                      marginLeft: "16rem",
                      color: "#999999",
                    }}
                  >
                    {jobPostingByEmployer.numberOfOpenPositions}
                  </h3>
                </Dropdown.Header>

                <Card.Description>
                  {jobPostingByEmployer.jobDetails}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui three buttons" style={{ padding: "10px" }}>
                  <Button basic color="green">
                    <Icon name="write square" style={{ fontSize: "1.5rem" }} />
                    İlana Başvur
                  </Button>

                  <Button basic color="orange">
                    <Icon name="info" style={{ fontSize: "1.5rem" }} />
                    <Link to={`/jobposting/${jobPostingByEmployer.id}`}>
                      Detayları Gör
                    </Link>
                  </Button>

                  <Button
                    as="div"
                    labelPosition="right"
                    onClick={() => {
                      handleAddFavorite(jobPostingByEmployer.id);
                    }}
                  >
                    <Button color="red">
                      <Icon name="heart" />
                      Favorilere Ekle
                    </Button>
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
}
