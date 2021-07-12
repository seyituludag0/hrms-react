import React, { useEffect, useState } from "react";
import JobPostingService from "../services/JobPostingService";
import FavoriteJobPostingService from "../services/FavoriteJobPostingService"
import { Grid } from "semantic-ui-react";
import { Button, Card, Image, Icon, Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import  CityFilter  from "../layouts/CityFilter"
import  WorkTypeFilter  from "../layouts/WorkTypeFilter"
import { Pagination } from "semantic-ui-react";
import { toast } from "react-toastify";
import FilterJobPosting from "../pages/FilterJobPosting";

export default function JobPosting() {
  const [jobPostings, setJobPosting] = useState([]);
  const [filteredJobPostings, setFilteredJobPostings] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const [filter, setFilter] = useState({});

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getJobPosting(activePage, pageSize)
      .then((result) => setJobPosting(result.data.data));
  }, [activePage, pageSize]);


  useEffect(() => {
    let filteredJobByJobPostings;
    if (selectedCity && selectedWorkType) {
      filteredJobByJobPostings = jobPostings.filter(
        (jobPosting) =>
          jobPosting.city.id === selectedCity &&
          jobPosting.workType.id === selectedWorkType
      );
    } else if (selectedCity) {
      filteredJobByJobPostings = jobPostings.filter(
        (jobPosting) => jobPosting.city.id === selectedCity
      );
    } else if (selectedWorkType) {
      filteredJobByJobPostings = jobPostings.filter(
        (jobPosting) => jobPosting.workType.id === selectedWorkType
      );
    } else {
      filteredJobByJobPostings = null;
    }
    setFilteredJobPostings(filteredJobByJobPostings);
  }, [ selectedWorkType, selectedCity]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  let pageAble=(pageNo)=>{
    setPageSize(pageNo);
  }
  
  
  const handleAddFavorite = (jobPostingId) => {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.addFavorites(1,jobPostingId).then((result) => {
      toast.success(result.data.message)
    })
  }

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getByFilter(filter).then((result) => {
        setJobPosting(result.data.data);
      });
  }, [filter]);

  const handleOnFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>

         <Grid.Column width={2} className="cities" style={{marginLeft:"93rem"}}>
         <CityFilter onSelect={handleSelectCity}/>
         <WorkTypeFilter onSelect={handleSelectWorkType}/>
          </Grid.Column>
 
          <Grid.Column width={2} className="work-types"  className="filter-job-postings">
         <FilterJobPosting handleOnFilter={handleOnFilter} />
          </Grid.Column>

          <Grid.Column width={14}>
            <div className="my-cards" style={{marginRight:"0rem", marginLeft:"9rem", marginTop:"-4.3rem"}}>
              <Card.Group>
                <Card
                  className="jobs"
                  fluid
                  color="blue"
                  header="İŞ İLANLARI"
                />
              </Card.Group>


              <Card.Group>
                {filteredJobPostings?filteredJobPostings.map((jobPosting) => (
                  <Card className="jobPostingCard" key={jobPosting.id}>
                    <Card.Content>
                      <Image
                        floated="right"
                        style={{ width: "10rem" }}
                        src={jobPosting.employer.companyLogo}
                      />
                      <Card.Header></Card.Header>
                      <Card.Meta
                        className="jobTitle"
                        style={{ fontSize: "17px", color: "#000000" }}
                      >
                        <strong>{jobPosting.jobTitle.title}</strong>
                      </Card.Meta>
                      <Card.Meta
                        className="jobTitle"
                        style={{ fontSize: "17px", color: "#000000" }}
                      >
                        <strong>{jobPosting.employer.companyName}</strong>
                      </Card.Meta>
                      <Dropdown.Header icon="location arrow" style={{ float: "left"}}></Dropdown.Header>
                        <Card.Meta className="cityName">
                          <h3>{jobPosting.city.name}</h3>
                        <Dropdown.Header icon="calendar check outline" style={{ float: "left", fontSize:"19px", marginTop:"0.5rem", marginLeft:"-1.9rem", color:"black"}}></Dropdown.Header>
                        </Card.Meta>
                        
                        <Card.Meta className="postedDate">
                        <h3>{jobPosting.postedDate}</h3>
                        </Card.Meta>

                        <Dropdown.Header icon="calendar times outline" style={{ float: "left", marginTop:"5.9rem", marginLeft:"-13.1rem", color:"black"}}></Dropdown.Header>

                        <Card.Meta className="lastApplyDate">
                        <h3 style={{marginLeft:"-2.3rem"}}>{jobPosting.lastApplyDate}</h3>
                        </Card.Meta>

                        <Dropdown.Header icon="money" style={{ float: "left", marginTop:"3rem", marginLeft:"2.5rem"}}></Dropdown.Header>

                        <Card.Meta className="minWage">
                        <h3>{jobPosting.minWage}₺</h3>
                        </Card.Meta>


                         <Dropdown.Header icon="money" style={{ float: "left", marginTop:"5.7rem", marginLeft:"-9.4rem"}}></Dropdown.Header>

                        <Card.Meta className="maxWage">
                        <h3 style={{marginLeft:"-1.3rem"}}>{jobPosting.maxWage}₺</h3>
                        </Card.Meta>

                        <Dropdown.Header style={{ float: "left", marginTop:"2.7rem", marginLeft:"1rem"}}>
                        <span style={{color:"#999999"}}>Açık Pozisyon Sayısı: </span> <h3 style={{ marginTop:"-2.1rem", marginLeft:"16rem", color:"#999999" }}>{jobPosting.numberOfOpenPositions}</h3>
                        </Dropdown.Header>


                      <Card.Description>
                        {jobPosting.jobDetails}
                      </Card.Description>
                      
                    </Card.Content>
                    <Card.Content extra>
                      <div
                        className="ui three buttons"
                        style={{ padding: "10px" }}
                      >
                        <Button basic color="green">
                        <Icon name="write square" style={{fontSize:"1.5rem"}} />
                          İlana Başvur
                        </Button>

                        <Button basic color="orange">
                        <Icon name="info" style={{fontSize:"1.5rem"}} />
                          <Link to={`/jobposting/${jobPosting.id}`}>Detayları Gör</Link>
                        </Button>

                  
                        <Button as="div" labelPosition="right" onClick={()=>{handleAddFavorite(jobPosting.id)}}>
                          <Button color="red">
                            <Icon name="heart" />
                            Favorilere Ekle
                          </Button>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))
                  :
                  jobPostings.map((jobPosting)=>(
                    <Card className="jobPostingCard" key={jobPosting.id}>
                    <Card.Content>
                      <Image
                        floated="right"
                        style={{ width: "10rem" }}
                        src={jobPosting.employer.companyLogo}
                      />
                      <Card.Header></Card.Header>
                      <Card.Meta
                        className="jobTitle"
                        style={{ fontSize: "17px", color: "#000000" }}
                      >
                        <strong>{jobPosting.jobTitle.title}</strong>
                      </Card.Meta>
                      <Card.Meta
                        className="jobTitle"
                        style={{ fontSize: "17px", color: "#000000" }}
                      >
                        <strong>{jobPosting.employer.companyName}</strong>
                      </Card.Meta>
                      <Dropdown.Header icon="location arrow" style={{ float: "left"}}></Dropdown.Header>
                        <Card.Meta className="cityName">
                          <h3>{jobPosting.city.name}</h3>
                        <Dropdown.Header icon="calendar check outline" style={{ float: "left", fontSize:"19px", marginTop:"0.5rem", marginLeft:"-1.9rem", color:"black"}}></Dropdown.Header>
                        </Card.Meta>
                        
                        <Card.Meta className="postedDate">
                        <h3>{jobPosting.postedDate}</h3>
                        </Card.Meta>

                        <Dropdown.Header icon="calendar times outline" style={{ float: "left", marginTop:"5.9rem", marginLeft:"-13.1rem", color:"black"}}></Dropdown.Header>

                        <Card.Meta className="lastApplyDate">
                        <h3 style={{marginLeft:"-2.3rem"}}>{jobPosting.lastApplyDate}</h3>
                        </Card.Meta>

                        <Dropdown.Header icon="money" style={{ float: "left", marginTop:"3rem", marginLeft:"2.5rem"}}></Dropdown.Header>

                        <Card.Meta className="minWage">
                        <h3>{jobPosting.minWage}₺</h3>
                        </Card.Meta>


                         <Dropdown.Header icon="money" style={{ float: "left", marginTop:"5.7rem", marginLeft:"-9.4rem"}}></Dropdown.Header>

                        <Card.Meta className="maxWage">
                        <h3 style={{marginLeft:"-1.3rem"}}>{jobPosting.maxWage}₺</h3>
                        </Card.Meta>

                        <Dropdown.Header style={{ float: "left", marginTop:"2.7rem", marginLeft:"1rem"}}>
                        <span style={{color:"#999999"}}>Açık Pozisyon Sayısı: </span> <h3 style={{ marginTop:"-2.1rem", marginLeft:"16rem", color:"#999999" }}>{jobPosting.numberOfOpenPositions}</h3>
                        </Dropdown.Header>


                      <Card.Description>
                        {jobPosting.jobDetails}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div
                        className="ui three buttons"
                        style={{ padding: "10px" }}
                      >
                        <Button basic color="green">
                        <Icon name="write square" style={{fontSize:"1.5rem"}} />
                          İlana Başvur
                        </Button>

                        <Button basic color="orange">
                        <Icon name="info" style={{fontSize:"1.5rem"}} />
                          <Link to={`/jobposting/${jobPosting.id}`}>Detayları Gör</Link>
                        </Button>

                  
                        <Button as="div" labelPosition="right" onClick={()=>{handleAddFavorite(jobPosting.id)}}>
                          <Button color="red">
                            <Icon name="heart" />
                            Favorilere Ekle
                          </Button>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  ))              
              }
              </Card.Group>
              
              
            </div>
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
               {jobPostings.length>0?(
                  <div className="pageable">

<p>Kaç adet iş ilanı görmek istiyorsunuz?</p>

<Button.Group>
<Button  onClick={()=>pageAble(10)}>10</Button>
<Button.Or />
<Button onClick={()=>pageAble(20)}>20</Button>
<Button.Or />
<Button>50</Button>
<Button.Or />
<Button>100</Button>
</Button.Group>
<br /> <br />

<Pagination
activePage={activePage}
onPageChange={onChange}
totalPages={10}
/>
</div>
               ):(<div></div>)}
    
    </div>
  );

  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }

  function handleSelectWorkType(workTypeId) {
    setSelectedWorkType(workTypeId);
  }

}




