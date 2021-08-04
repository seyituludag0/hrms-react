import React, { useState, useEffect } from "react";
import "../css/style.css";
import banner from "../img/banners/homepagebanner.png";
import businessman from "../img/icon/businessman.svg";
import network from "../img/icon/network.svg";
import userIcon from "../img/icon/user.svg";
import career from "../img/icon/career.svg";
import JobPostingService from "../services/JobPostingService";
import WorkTypeService from "../services/WorkTypeService";
import { Icon, Table, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToFavorite } from "../store/actions/favoriteActions";
import { Pagination } from "semantic-ui-react";
import FilterJobPosting from "../pages/FilterJobPosting";
import ViewCount from "./ViewCount";
import HomePageFilter from "../pages/HomePageFilter";
import LastAddedJobPostings from "./LastAddedJobPostings";
import company from "../img/icon/company.svg";
import location from "../img/icon/location.svg";
import HomePageFavoriteButton from "./HomePageFavoriteButton";
import PastDatePosts from "./PastDatePosts";

export default function Home() {
  const [jobPostings, setJobPostings] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(3);
  const dispatch = useDispatch();
  const [jobPostingCount, setJobPostingCount] = useState(0);
  const [filter, setFilter] = useState({});

  let jobPostingService = new JobPostingService();

  useEffect(() => {
    jobPostingService
      .findAllByOrderByPostedDateDesc(activePage, pageSize) //Yeni Eklenen İlanlar
      .then((result) => setJobPostings(result.data.data));
    jobPostingService
      .countGetAll()
      .then((result) => setJobPostingCount(result.data));
  }, [activePage, pageSize]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .findAllByOrderByPostedDateAsc(activePage, pageSize)
      .then((result) => setJobPostings(result.data.data));
  }, []);

  // useEffect(() => {
  //   let workTypeService = new WorkTypeService();
  //   workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data));
  // },[]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByFilter(filter)
      .then((result) => console.log(result.data.data));
  }, [filter]);

  useEffect(()=>{
    let jobPostingService = new JobPostingService();
    jobPostingService.findAllByOrderByPostedDateDesc(activePage, pageSize).then(result=>setJobPostings(result.data.data))
},[])

  // const handleToFavorite = (jobPosting)=>{
  //     dispatch(addToFavorite(jobPosting));
  //     toast.success("Favorilere eklendi")
  //   }

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  const handleFilterJobPosting = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
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
            Size {jobPostingCount} harika iş ilanımız var!
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

        <HomePageFilter />

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
                    Ve işinin başına geç
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------LastAddedJobPostings---------------------------------------------------------------------------- */}

        <LastAddedJobPostings />

        {/* -------------------------------------------------------------------------------------------------------------------------- */}

        <PastDatePosts />

        <ViewCount />

        {/* ------------------------------------------------------------------------------------------------------------------------- */}
         
     
      </div>
    </div>
  );
}
