import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../cvDetailStyles/style.css";

import CandidateService from "../services/CandidateService"
import linkedin from "../img/icon/linkedin.png"
import github from "../img/icon/github.svg";

export default function CvDetail() {

  let { candidateId } = useParams();
  
  const [cvDetail, setCvDetail] = useState({})

  useEffect(()=>{
    let candidateService = new CandidateService();
    candidateService.getCandidateCvByCandidateId(candidateId).then(result=>setCvDetail(result.data.data))
  },[candidateId])

  // console.log(cvDetail.cvDetail?.candidate?.firstName);
  // console.log(cvDetail.cvDetail?.cvPhotoUrl);
console.log("********************************");
console.log(cvDetail.schoolCandidates);
  // console.log(cvDetail.cvDetail?.candidate?.firstName);
  // console.log(cvDetail.languageCandidates?.language?.id);
  return (

    <div className="ana div">

<div>
    {/* --------------------------------------------------------------------------- */}

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
            src={cvDetail.cvDetail?.cvPhotoUrl}
            style={{ width: "12rem", marginTop:"-2rem" }}
            alt=""
          />
        </div>

        <div className="text">
          <h1 style={{ marginTop: "21.3rem", marginLeft: "-117rem" }}>
            {cvDetail.cvDetail?.candidate?.firstName}
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
            href="#contact"
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



<div className="linkedin">
      <a href="/" target="_blank">
        <img src={linkedin} alt="Linkedin" style={{width:"4.5rem", marginTop:"-1rem", marginLeft:"-0.75rem"}} />
      </a>
    </div>

    <div className="github">
    <a href="/" target="_blank">
        <img src={github} alt="Github" style={{width:"3.1rem"}} />
      </a>
    </div>

    {/* --------------------------------------------------------------------------- */}

    <div className="info-box"
      style={{
        width: "80rem",
        height: "25rem",
        marginTop: "3rem",
        marginLeft: "10rem",
        color: "red",
        boxShadow:"10px 15px 6px rgba(0, 0, 0, 0.6)"
      }}
    >
      <div className="col-lg-6 col-md-12">
        <div className="card-body" style={{color:"#000000"}}>
          <div className="h4 mt-0 title">Hakkımda</div>
          <p>{cvDetail.cvDetail?.description}</p>
        </div>
      </div>

      <div className="col-lg-6 col-md-12" style={{marginLeft:"40rem", marginTop:"-15rem"}}>
        <div className="card-body" style={{color:"#000000"}}>
          <div className="h4 mt-0 title">Temel Bilgiler</div>
          {/* <div className="row">
            <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
            <div className="col-sm-8">24</div>
          </div> */}
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Ad:</strong></div>
            <div className="col-sm-8">{cvDetail.cvDetail?.candidate?.firstName}</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Soyad:</strong></div>
            <div className="col-sm-8">{cvDetail.cvDetail?.candidate?.lastName}</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
            <div className="col-sm-8">{cvDetail.cvDetail?.candidate?.email}</div>
          </div>
          {/* <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Telefon:</strong></div>
            <div className="col-sm-8">{cvDetail.cvDetail?.candidate?.phoneNumber}</div>
          </div> */}
          {/* <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
            <div className="col-sm-8">140, City Center, New York, U.S.A</div>
          </div> */}
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Diller:</strong></div>
            <div className="col-sm-8">{cvDetail.languageCandidates?.language?.languageName}</div>
          </div>
        </div>
      </div>
    

      <div className="section" id="experience" style={{marginTop:"5rem"}}>
<div className="container cc-experience" style={{marginTop:"10rem"}}>
  <div className="h4 text-center mb-4 title">İş Deneyimlerim</div>
  <div className="card">
    <div className="row">
      <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body cc-experience-header" style={{marginTop:"3rem"}}>
          <p>March 2016 - Present</p>
          <div className="h5">{cvDetail.experiences?.id}</div>
        </div>
      </div>
      <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body">
          <div className="h5" style={{marginLeft:"-39rem", fontSize:"1.8rem"}}>Front End Developer</div>
          <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
           
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row">
      <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body cc-experience-header" style={{marginTop:"3rem"}}>
          <p>March 2016 - Present</p>
          <div className="h5">CreativeM</div>
        </div>
      </div>
      <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body">
          <div className="h5" style={{marginLeft:"-43rem"}}>Front End Developer</div>
          <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
        </div>
      </div>
    </div>
  </div>

<div className="card">
    <div className="row">
      <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body cc-experience-header" style={{marginTop:"3rem"}}>
          <p>March 2016 - Present</p>
          <div className="h5">CreativeM</div>
        </div>
      </div>
      <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div className="card-body">
          <div className="h5" style={{marginLeft:"-43rem"}}>Front End Developer</div>
          <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
        </div>
      </div>
    </div>
  </div>
  

 </div>
</div>


<div className="section" id="school" style={{marginTop:"5rem"}}>
      <div className="container cc-school">
        <div className="h4 text-center mb-4 title">Okullarım</div>
       
        <div className="card">
<div className="row">
  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
    <div className="card-body cc-school-header" style={{marginTop:"3rem"}}>
      <p>March 2016 - Present</p>
      <div className="h5">Master's Degree</div>
    </div>
  </div>
  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
<div className="card-body">
<div className="h5" style={{marginLeft:"-30rem", fontSize:"1.8rem"}}>Master of Information Technology</div>
<p className="category" style={{color:"gray", marginLeft:"-39rem", marginTop:"-7px", marginBottom:"7px", fontWeight:"bold"}}>University of Computer Science</p>
<p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
</div>
</div>
</div>
</div><div className="card">
<div className="row">
  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
    <div className="card-body cc-school-header" style={{marginTop:"3rem"}}>
      <p>March 2016 - Present</p>
      <div className="h5">Master's Degree</div>
    </div>
  </div>
  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
<div className="card-body">
<div className="h5" style={{marginLeft:"-30rem", fontSize:"1.8rem"}}>Master of Information Technology</div>
<p className="category" style={{color:"gray", marginLeft:"-39rem", marginTop:"-7px", marginBottom:"7px", fontWeight:"bold"}}>University of Computer Science</p>
<p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
</div>
</div>
</div>
</div><div className="card">
<div className="row">
  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
    <div className="card-body cc-school-header" style={{marginTop:"3rem"}}>
      <p>March 2016 - Present</p>
      <div className="h5">Master's Degree</div>
    </div>
  </div>
  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
<div className="card-body">
<div className="h5" style={{marginLeft:"-30rem", fontSize:"1.8rem"}}>Master of Information Technology</div>
<p className="category" style={{color:"gray", marginLeft:"-39rem", marginTop:"-7px", marginBottom:"7px", fontWeight:"bold"}}>University of Computer Science</p>
<p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
</div>
</div>
</div>
</div>
        
      
       </div>
    </div>
    
    <div style={{ marginTop:"8rem", backgroundColor:"#fff", color:"#fff"}}>x</div>

    </div>
  </div>

    
   
     

    </div>

   );
}
