import React, { useState, useEffect } from "react";
import "../css/style.css";
import banner from "../img/banners/homepagebanner.png";
import company from "../img/icon/company.svg";
import location from "../img/icon/location.svg";
import favorite from "../img/icon/favorite.svg";
import businessman from "../img/icon/businessman.svg";
import network from "../img/icon/network.svg";
import userIcon from "../img/icon/user.svg";
import career from "../img/icon/career.svg";
import JobPostingService from "../services/JobPostingService";
import { Icon, Table, Message} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../store/actions/favoriteActions";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Pagination } from "semantic-ui-react";


export default function Home() {
  const [jobPostings, setjobPostings] = useState([]);
  // const [workTypes, setWorkTypes] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(3)
  const dispatch = useDispatch()

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .findAllByOrderByPostedDateDesc(activePage, pageSize) //Yeni Eklenen İlanlar
      .then((result) => setjobPostings(result.data.data))
       
      // jobPostingService
      // .findAllByOrderByPostedDateAsc() //Önceden Eklenen İlanlar
      // .then((result) => setjobPostings(result.data.data));
  },[activePage, pageSize]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .findAllByOrderByPostedDateAsc(activePage, pageSize)
      .then((result) => setjobPostings(result.data.data)
      );
  },[]);

  const handleToFavorite = (jobPosting)=>{
      dispatch(addToFavorite(jobPosting))
      toast.success("Favorilere eklendi")
    } 

    const onChange = (e, pageInfo) => {
      setActivePage(pageInfo.activePage);
      // console.log(pageInfo.activePage)
      //console.log(pageInfo)
    };

  return (
      <div className="img">
        <img
          src={banner}
          width="100"
          style={{
            marginLeft: "60rem",
            width: "51.2%",
            position: "relative",
            zIndex: "-1",
          }}
          alt=""
        />
        <div
          className="text"
          style={{
            marginTop: "-28rem",
            marginLeft: "-20rem",
            fontSize: "1.5rem",
          }}
        >
          <p style={{ color: "black" }}>
            Hak ettiğiniz 200.000 harika iş teklifimiz var!
          </p>
        </div>

        <div
          className="text"
          style={{
            fontSize: "60px",
            lineHeight: "1.2",
            fontWeight: "900",
            marginLeft: "-17rem",
          }}
        >
          <p style={{ color: "black" }}>Dünyanın En Büyük</p>{" "}
          <p className="asd" style={{ marginLeft: "-25rem", color: "black" }}>
            İş Sitesi
          </p>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------- */}

        <div className="ftco-search" style={{ width: "60rem" }}>
          <div className="row">
            <div className="col-md-12 nav-link-wrap">
              <div
                className="nav nav-pills text-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active mr-md-1"
                  id="v-pills-1-tab"
                  data-toggle="pill"
                  href="#v-pills-1"
                  role="tab"
                  aria-controls="v-pills-1"
                  aria-selected="true"
                >
                  Haydi İş Aramaya Başlayalım
                </a>
              </div>
            </div>
            <div className="col-md-12 tab-wrap">
              <div className="tab-content p-4" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-nextgen-tab"
                >
                  <form action="#" className="search-job">
                    <div className="row no-gutters">
                      <div className="col-md mr-md-2">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-briefcase" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="örn: Web Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md mr-md-2">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="ion-ios-arrow-down" />
                              </div>
                              <select name id className="form-control">
                                <option value>Category</option>
                                <option value>Full Time</option>
                                <option value>Part Time</option>
                                <option value>Freelance</option>
                                <option value>Internship</option>
                                <option value>Temporary</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md mr-md-2">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-map-marker" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-groupx">
                          <div className="form-field">
                            <button
                              type="submit"
                              className="form-control btn btn-secondary"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-performance-tab"
                >
                  <form action="#" className="search-job">
                    <div className="row">
                      <div className="col-md">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-user" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="eg. Adam Scott"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="ion-ios-arrow-down" />
                              </div>
                              <select name id className="form-control">
                                <option value>Category</option>
                                <option value>Full Time</option>
                                <option value>Part Time</option>
                                <option value>Freelance</option>
                                <option value>Internship</option>
                                <option value>Temporary</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-groupx">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-map-marker" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-groupx">
                          <div className="form-field">
                            <button
                              type="submit"
                              className="form-control btn btn-secondary"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

        <div
          style={{
            backgroundColor: "#6c63ff",
            width: "110rem",
            height: "410px",
            marginTop: "3rem",
          }}
        >
          <div className="row">
            <div
              className="col-5t"
              style={{ marginLeft: "3rem", marginTop: "8rem" }}
            >
              <img src={userIcon} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ marginLeft: "4rem", marginTop: "1rem" }}
              >
                Milyonlarca İş Arayın
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    İş aramanda yardımcı olabilirim <br />
                    Öncelikle pozisyonunu seçmelisin
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-3"
              style={{ marginLeft: "5rem", marginTop: "8rem" }}
            >
              <img src={network} style={{ width: "5rem" }} alt="" />
              <h4 style={{ marginLeft: "3rem", marginTop: "1rem" }}>
                Ağını güçlendirebilirsin
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Böylelikle işverenlere daha çabuk ulaşabilirsin
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={career} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ fontSize: "1.5rem", marginTop: "1rem" }}
              >
                En İyi Kariyere Adım Adım
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Kariyerinde zirveye doğru adım adım ilerle
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-3"
              style={{ marginLeft: "82rem", marginTop: "-11rem" }}
            >
              <img src={businessman} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ fontSize: "1.5rem", marginTop: "1rem" }}
              >
                Ve işinin başına geç
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Kiraladığın araç gün içerisinde sana gelsin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------- */}
   <section className="ftco-section bg-light hotjobs">
          <div className="container" style={{ marginLeft: "15rem" }}>
            <div className="row">
              <div className=" pr-lg-5">
                <div className="row justify-content-center pb-3">
                  <div className="col-md-12 heading-section ">
                    {/* <span className="subheading">Son Eklenen İşler</span>
                    <h2 className="mb-4">Yeni Eklenen İlanlar</h2> */}
                  </div>
                </div>
                <div className="row">
                  {jobPostings.length>0?(
                  jobPostings.map((jobPosting) => (
                    <div className="col-md-12 ">
                      <div className="job-post-item py-4 d-block d-lg-flex align-items-center">
                        <div className="one-third mb-4 mb-md-0">
                          <div className="job-post-item-header d-flex align-items-center">
                            <h2 className="mr-3 text-black">
                              <Link to={`/jobposting/${jobPosting.id}`}>
                                {jobPosting.jobTitle.title}
                              </Link>
                            </h2>
                            <div className="badge-wrap">
                              <span className="bg-primary text-white badge py-2 px-3">
                                {jobPosting.workType.type}
                              </span>
                              <span
                                className="bg-primary text-white badge py-2 px-3"
                                style={{
                                  marginLeft: "1rem",
                                  backgroundColor: "red !important",
                                }}
                              >
                                {jobPosting.workingTimes.type}
                              </span>
                            </div>
                          </div>
                          <div className="job-post-item-body d-block d-md-flex">
                            <div className="mr-3">
                              <span className="icon-layers" />{" "}
                              <img
                                src={company}
                                width="20px"
                                style={{ marginTop: "-0.3rem" }}
                                alt=""
                              />
                              <a href={`http://${jobPosting.employer?.webAddress}`} rel="noreferrer" target="_blank" style={{ marginLeft: "5px" }}>
                                {jobPosting.employer.companyName}
                              </a>
                            </div>
                            <div>
                              <span>|</span>
                              <span className="icon-my_location" /> &nbsp;
                              <img src={location} width="20px" alt="" />
                              <span> {jobPosting.city.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                           {/* <div>
                            <a
                               onClick={()=>{}}
                              className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                            >
                              <span className="icon-heart">
                                <img src={favorite} width="20px" alt="" />
                              </span>
                            </a>
                          </div>  */}

                        <Button className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        style={{borderRadius:"2rem"}} onClick={()=>{handleToFavorite(jobPosting)}}
                        >
                        <span className="icon-heart">
                                <img src={favorite} width="20px" alt="" />
                              </span>
                          </Button>

                            

                          <a
                            href="/"
                            className="btn btn-primary "
                          >
                            İşe Başvur
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                  ):(<Table>
            <Message info color="red" visible style={{paddingLeft:"33%"}} size="big">
              Üzgünüz, Bu sayfada iş ilanı bulunamadı!
            </Message>
          </Table>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pagination
            activePage={activePage}
            onPageChange={onChange}
            totalPages={10}
          />
 
        {/* -------------------------------------------------------------------------------------------------------------------------- */}

        <section className="ftco-section">
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
                {jobPostings.map((jobPosting) => (
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
                ))}
              </div>
            </div>
            <Pagination
            activePage={activePage}
            onPageChange={onChange}
            totalPages={10}
          />
          </div>
        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------- */}

        <div
          style={{
            backgroundColor: "#6c63ff",
            width: "110rem",
            height: "410px",
            marginTop: "3rem",
          }}
        >
          <div className="row">
            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={businessman} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ marginTop: "1rem", fontSize: "2.5rem" }}
              >
                435,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    İş
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={network} style={{ width: "5rem" }} alt="" />
              <h4
                style={{
                  marginLeft: "3rem",
                  marginTop: "1rem",
                  fontSize: "2.5rem",
                }}
              >
                40,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Üyeler
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={userIcon} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                30,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    CV
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-3"
              style={{ marginLeft: "82rem", marginTop: "-11rem" }}
            >
              <img src={career} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                10,500
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Şirketler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </div>
  );
}
