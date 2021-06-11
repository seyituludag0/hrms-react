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
  },[])

  console.log(cvDetail)

  return (

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
            src="https://res.cloudinary.com/hrms-project/image/upload/v1623257938/react-hrms/person_2_k4sj1i.jpg"
            style={{ width: "19rem" }}
            alt=""
          />
        </div>

        <div className="text">
          <h1 style={{ marginTop: "21.3rem", marginLeft: "-117rem" }}>
            Anthony Barnett
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

    {/* <div className="linkedin">
      <img src={linkedin1} alt="" />
    </div>

    <div className="github">
    <img src={github} alt="" />
    </div> */}

<div className="linkedin">
      <a href="/" target="_blank">
        <img src={linkedin} alt="Linkedin" />
      </a>
    </div>

    <div className="github">
    <a href="/" target="_blank">
        <img src={github} alt="Github" />
      </a>
    </div>

    {/* --------------------------------------------------------------------------- */}

    <div className="info"
      style={{
        width: "80rem",
        height: "20rem",
        marginTop: "3rem",
        marginLeft: "10rem",
        color: "red",
        boxShadow:"10px 15px 6px rgba(0, 0, 0, 0.6)"
      }}
    >
      <div className="col-lg-6 col-md-12">
        <div className="card-body" style={{color:"#000000"}}>
          <div className="h4 mt-0 title">About</div>
          <p>
            Hello! I am Anthony Barnett. Web Developer, Graphic Designer and
            Photographer.
          </p>
          <p>
            Creative CV is a HTML resume template for professionals. Built
            with Bootstrap 4, Now UI Kit and FontAwesome, this modern and
            responsive design template is perfect to showcase your portfolio,
            skills and experience.{" "}
            <a href="/">Learn More</a>
          </p>
        </div>





      </div>

      <div className="col-lg-6 col-md-12" style={{marginLeft:"40rem", marginTop:"-15rem"}}>
        <div className="card-body" style={{color:"#000000"}}>
          <div className="h4 mt-0 title">Basic Information</div>
          <div className="row">
            <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
            <div className="col-sm-8">24</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
            <div className="col-sm-8">anthony@company.com</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
            <div className="col-sm-8">+1718-111-0011</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
            <div className="col-sm-8">140, City Center, New York, U.S.A</div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
            <div className="col-sm-8">English, German, French</div>
          </div>
        </div>
      </div>
    

      <div className="section" id="experience" style={{marginTop:"5rem"}}>
<div className="container cc-experience">
  <div className="h4 text-center mb-4 title">Work Experience</div>
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
        <div className="h4 text-center mb-4 title">Education</div>
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
          <p class="category" style={{color:"gray", marginLeft:"-39rem", marginTop:"-7px", marginBottom:"7px", fontWeight:"bold"}}>University of Computer Science</p>
          <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
        </div>
      </div>
          </div>
        </div>
    
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
              <div className="card-body cc-school-header" style={{marginTop:"3rem"}}>
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
              <div className="card-body cc-school-header" style={{marginTop:"3rem"}}>
                <p>March 2016 - Present</p>
                <div className="h5">CreativeM</div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
              <div className="card-body">
                <div className="h5" style={{marginLeft:"-43rem"}}>Master of Information Technology</div>
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

    
   

   );
}
