import React, { useState, useEffect } from "react";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import { Grid, Button, Card, Image, Icon, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function FavoriteJobPosting() {
  let favoriteJobPostingService = new FavoriteJobPostingService();

  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  useEffect(() => {
    favoriteJobPostingService
      .getByCandidateIdFavorites(1)
      .then((result) => setFavorites(result.data.data));
  }, []);
  return (
    <div>
      <Card.Group>
        {favorites.map((favjob) => (
          <Card className="jobPostingCard" key={favorites.id}>
            <Card.Content>
              <Image
                floated="right"
                style={{ width: "10rem" }}
                src="https://res.cloudinary.com/hrms-project/image/upload/v1623090912/free-logo-2ye432qlrl-idpzauzgux_pjqz4x.jpg"
              />
              <Card.Header></Card.Header>
              <Card.Meta
                className="jobTitle"
                style={{ fontSize: "17px", color: "#000000" }}
              >
                <strong>{favjob.jobPosting.jobTitle.title}</strong>
              </Card.Meta>
              <Card.Meta
                className="jobTitle"
                style={{ fontSize: "17px", color: "#000000" }}
              >
                <strong>{favjob.jobPosting.employer.companyName}</strong>
              </Card.Meta>
              <Dropdown.Header
                icon="location arrow"
                style={{ float: "left" }}
              ></Dropdown.Header>
              <Card.Meta className="cityName">
                <h3>{favjob.jobPosting.city.name}</h3>
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
                <h3>{favjob.jobPosting.postedDate}</h3>
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
                  {favjob.jobPosting.lastApplyDate}
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
                <h3>{favjob.jobPosting.minWage}₺</h3>
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
                  {favjob.jobPosting.maxWage}₺
                </h3>
              </Card.Meta>

              <Dropdown.Header
                style={{
                  float: "left",
                  marginTop: "2.7rem",
                  marginLeft: "1rem",
                }}
              >
                <span style={{ color: "#999999" }}>Açık Pozisyon Sayısı: </span>{" "}
                <h3
                  style={{
                    marginTop: "-2.1rem",
                    marginLeft: "16rem",
                    color: "#999999",
                  }}
                >
                  {favjob.jobPosting.numberOfOpenPositions}
                </h3>
              </Dropdown.Header>

              <Card.Description>
                {favjob.jobPosting.jobDetails}
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
                  <Link to={`/jobposting/${favjob.jobPosting.id}`}>
                    Detayları Gör
                  </Link>
                </Button>

                <Button as="div" labelPosition="right">
                  <Button color="red">
                    <Icon name="heartbeat" />
                    Favorilerimden Çıkar
                  </Button>
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
