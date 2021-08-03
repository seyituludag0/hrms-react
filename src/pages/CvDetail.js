import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "../css/Footer.css";
import linkedin from "../img/icon/linkedin.png";
import github from "../img/icon/github.svg";

import CandidateService from "../services/CandidateService";

import LanguageAdd from "../layouts/cv/Language/LanguageAdd";
import LanguageUpdate from "../layouts/cv/Language/LanguageUpdate";
import LanguageDelete from "../layouts/cv/Language/LanguageDelete";

import AbilityAdd from "../layouts/cv/Ability/AbilityAdd";
import AbilityUpdate from "../layouts/cv/Ability/AbilityUpdate";
import AbilityDelete from "../layouts/cv/Ability/AbilityDelete";

import WorkPlaceAdd from "../layouts/cv/WorkPlace/WorkPlaceAdd";
import WorkPlaceUpdate from "../layouts/cv/WorkPlace/WorkPlaceUpdate";
import WorkPlaceDelete from "../layouts/cv/WorkPlace/WorkPlaceDelete";

import SocialMediaUpdate from "../layouts/cv/SocialMedia/SocialMediaUpdate";

import BasicInformation from "../layouts/cv/BasicInformations/BasicInformations";

import { Message } from "semantic-ui-react";

export default function CvDetail() {
  let { candidateId } = useParams();

  const [cvDetail, setCvDetail] = useState(null);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidateCvByCandidateId(candidateId)
      .then((result) => setCvDetail(result.data.data));
  }, [cvDetail]);

  return (
    <div className="ana div">
      <div>
        <div
          style={{
            backgroundColor: "#6c63ff",
            width: "111rem",
            height: "35rem",
            marginTop: "-12rem",
          }}
        >
          <div className="team d-md-flex">
            <div
              className="img"
              style={{ marginTop: "7rem", marginLeft: "40em" }}
            >
              <img
                src={cvDetail?.cvDetail.cvPhotoUrl}
                style={{ height: "15rem", marginTop: "-2rem" }}
                alt=""
              />
            </div>

            <div className="text">
              <h1 style={{ marginTop: "21.3rem", marginLeft: "-117rem" }}>
                {cvDetail?.cvDetail.candidate.firstName}
              </h1>
              <h6 style={{ marginLeft: "-117rem", color: "#000000" }}>
                WEB DEVELOPER, GRAPHIC DESIGNER, PHOTOGRAPHER
              </h6>
              <a
                style={{
                  marginLeft: "-118rem",
                  backgroundColor: "#262444 !important",
                }}
                className="btn btn-primary smooth-scroll mr-2"
                href="/"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Beni işe al
              </a>
              <a
                className="btn btn-primary"
                href="/"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Cv'yi indir
              </a>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------- */}


        <div className="social-medias">

        {
          cvDetail?.socialMedias.map((socialMedia)=>(
            <div
          className="github"
          style={{
            backgroundColor: "gray",
            width: "3rem",
            marginLeft: "48rem",
            borderRadius: "42px",
            marginTop: "-2rem ",
          }}
        >
          <a
            // href={`http://${cvDetail?.socialMedias[0].link}`}
            href={`http://${socialMedia.link}`}
            target="_blank"
          >
            <img src={socialMedia.socialMediaLogo} alt="Github" style={{ width: "3.1rem" }} />
          </a>
        </div>
          ))
        }
         
           
        <div
          className="edit"
          style={{
            backgroundColor: "gray",
            width: "3rem",
            marginLeft: "56rem",
            borderRadius: "42px",
            marginTop: "-3rem ",
          }}
        >
          {/* <SocialMediaUpdate socialMediaLink={cvDetail?.socialMedias[0]} /> */}
          {/* <WorkPlaceUpdate workPlace={workPlaceCandidate} /> */}
          {/* <SocialMediaUpdate socialMediaLink={cvDetail?.socialMedias} /> */}
        </div>
      
      
          

    
          <div
            className="edit"
            style={{
              backgroundColor: "gray",
              width: "3rem",
              marginLeft: "56rem",
              borderRadius: "42px",
              marginTop: "-3rem ",
            }}
          >
            <SocialMediaUpdate socialMediaLink={cvDetail?.socialMedias[0]} />
          </div>
        </div>
        


        {/* <SocialMediaUpdate socialMediaLink={cvDetail?.socialMedias[0]} /> */}
        {/* --------------------------------------------------------------------------- */}

        <div
          className="info-box"
          style={{
            width: "80rem",
            height: "25rem",
            marginTop: "3rem",
            marginLeft: "10rem",
            color: "red",
            boxShadow: "10px 15px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="col-lg-6 col-md-12">
            <div className="card-body" style={{ color: "#000000" }}>
              <div className="h4 mt-0 title">Hakkımda</div>
              <p>{cvDetail?.cvDetail.description}</p>
            </div>
          </div>
          <BasicInformation basicInformation={cvDetail?.cvDetail} />

          {/* <SocialMediaUpdate socialMediaLink={cvDetail?.socialMedias[0]} /> */}
          <div
            className="col-lg-6 col-md-12"
            style={{ marginLeft: "40rem", marginTop: "-15rem" }}
          >
            <div className="card-body" style={{ color: "#000000" }}>
              <div className="h4 mt-0 title">Temel Bilgiler</div>
              {/* <div className="row">
            <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
            <div className="col-sm-8">24</div>
          </div> */}
              <div className="row mt-3">
                <div className="col-sm-4">
                  <strong className="text-uppercase">Ad:</strong>
                </div>
                <div className="col-sm-8">
                  {cvDetail?.cvDetail.candidate.firstName}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">
                  <strong className="text-uppercase">Soyad:</strong>
                </div>
                <div className="col-sm-8">
                  {cvDetail?.cvDetail.candidate.lastName}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">
                  <strong className="text-uppercase">Email:</strong>
                </div>
                <div className="col-sm-8">
                  {cvDetail?.cvDetail.candidate.email}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-4">
                  <strong className="text-uppercase">Diller:</strong>
                </div>
                <div className="col-sm-8">
                  {cvDetail?.languageCandidates
                    .map(
                      (languageCandidate) =>
                        languageCandidate.language.languageName
                    )
                    .join(",")}
                </div>
              </div>
            </div>
          </div>

          <div className="update-btns" style={{ marginTop: "12rem" }}></div>
          <div className="section" id="school" style={{ marginTop: "10rem" }}>
            <div className="container cc-school">
              {/* <SchoolAdd school={cvDetail?.schoolCandidates[0]} /> */}
              <div className="h4 text-center mb-4 title">Okullarım</div>

              { cvDetail?.schoolCandidates.length==0?<Message
                  icon="warning circle"
                  header="Henüz kayıtlı okul bilgileriniz bulunmamaktadır"
                />:
                <p>{cvDetail?.schoolCandidates.map((school) => (
    <div className="card">
      <div className="row">
        <div
          className="col-md-3 bg-primary"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-duration="500"
        >
          <div
            className="card-body cc-school-header"
            style={{ marginTop: "3rem" }}
          >
            {/* <p>March 2016 - Present</p> */}
            <div className="h5">
            Başlama Tarihi:  {school?.dateOfEntry} {(school.dateOfGraduation)==null?<p>Devam Ediyor</p>:<p>Mezun Olma Tarihi: {school.dateOfGraduation}</p>}
            </div>
          </div>
        </div>
        <div
          className="col-md-9"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-duration="500"
        >
          <div className="card-body">
            <div
              className="h5"
              style={{ marginLeft: "-23rem", fontSize: "1.8rem" }}
            >
              {school.schoolDepartment.school.schoolName}
            </div>
            <p
              className="category"
              style={{
                color: "gray",
                marginLeft: "-34rem",
                marginTop: "-7px",
                marginBottom: "7px",
                fontWeight: "bold",
              }}
            >
              {cvDetail?.schoolCandidates
                .map(
                  (schoolCandidate) =>
                    schoolCandidate.schoolDepartment.department
                      .departmentName
                )}
            </p>
            <p>
              {school?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}</p> }
              
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="section" style={{ marginTop: "10rem" }}>
            <div className="container cc-work-experience">
              <WorkPlaceAdd />
              <div className="h4 text-center mb-4 title">İş Deneyimlerim</div>

              {cvDetail?.workPlaceCandidate?.length == 0 ? (
                <Message
                  icon="warning circle"
                  header="Henüz kayıtlı iş deneyiminiz bulunmamaktadır"
                />
              ) : (
                <p>
                  {cvDetail?.workPlaceCandidate?.map((workPlaceCandidate) => (
                    <div className="card">
                      <div className="row">
                        <div
                          className="col-md-3 bg-primary"
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-duration="500"
                        >
                          <div
                            className="card-body cc-experience-header"
                            style={{ marginTop: "3rem" }}
                          >
                            {/* <p>March 2016 - Present</p> */}
                            <div className="h5">
                              Başlama Tarihi:  {workPlaceCandidate?.dateOfEntry} {(workPlaceCandidate?.dateOfQuit)==null?<p>Devam Ediyor</p>:<p>İşten Ayrılma Tarihi: {workPlaceCandidate?.dateOfQuit}</p>}
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-9"
                          data-aos="fade-left"
                          data-aos-offset="50"
                          data-aos-duration="500"
                        >
                          <div className="card-body">
                            <WorkPlaceDelete id={workPlaceCandidate?.id} />
                            <WorkPlaceUpdate workPlace={workPlaceCandidate} />
                            <div
                              className="h5"
                              style={{
                                marginLeft: "-23rem",
                                fontSize: "1.8rem",
                              }}
                            >
                              {workPlaceCandidate?.workPlaceName}
                            </div>
                            <p
                              style={{
                                color: "gray",
                                marginLeft: "-34rem",
                                marginTop: "-7px",
                                marginBottom: "7px",
                                fontWeight: "bold",
                              }}
                            >
                              <p style={{ color: "black" }}>
                                {workPlaceCandidate?.jobTitle}
                              </p>
                            </p>
                            <p style={{ color: "black" }}>
                              {workPlaceCandidate?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div className="section" id="school" style={{ marginTop: "10rem" }}>
            <div className="container cc-school">
              <AbilityAdd />
              <div className="h4 text-center mb-4 title">Yeteneklerim</div>

              {cvDetail?.abilityCandidates.length == 0 ? (
                <Message
                  icon="warning circle"
                  header="Henüz kayıtlı yeteneğiniz bulunmamaktadır"
                />
              ) : (
                <p>
                  {cvDetail?.abilityCandidates.map((ability) => (
                    <div
                      className="card"
                      style={{
                        borderRadius: "40px",
                        width: "13rem",
                        color: "black",
                        height: "4rem",
                        alignItems: "center",
                        backgroundColor: "#12CBC4",
                        display: "inline-block",
                        marginRight: "10px",
                      }}
                    >
                      <div
                        className="col-md-9"
                        style={{ marginTop: "10px", marginLeft: "18px" }}
                      >
                        <AbilityUpdate
                          ability={ability}
                          candidate={cvDetail?.candidate}
                        />
                        {ability?.ability.abilityName}
                        <AbilityDelete id={ability?.id} />
                      </div>
                    </div>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div className="section" id="school" style={{ marginTop: "10rem" }}>
            <div className="container cc-school">
              <LanguageAdd />
              <div className="h4 text-center mb-4 title">Dillerim</div>

              {cvDetail?.languageCandidates.length == 0 ? (
                <Message
                  icon="warning circle"
                  header="Henüz kayıtlı dil bilginiz bulunmamaktadır"
                />
              ) : (
                <p>
                  {cvDetail?.languageCandidates.map((languageCandidate) => (
                    <div
                      className="card"
                      style={{
                        borderRadius: "40px",
                        width: "17rem",
                        color: "black",
                        height: "4rem",
                        alignItems: "center",
                        backgroundColor: "#12CBC4",
                        display: "inline-block",
                        marginRight: "10px",
                      }}
                    >
                      <div
                        className="col-md-9"
                        style={{ marginTop: "10px", marginLeft: "25px" }}
                      >
                        <LanguageUpdate dil={languageCandidate} />
                        {languageCandidate?.language.languageName} (
                        {languageCandidate?.languageLevel.levelName})
                        <LanguageDelete id={languageCandidate?.id} />
                      </div>
                    </div>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: "8rem",
              backgroundColor: "#fff",
              color: "#fff",
            }}
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
}
