import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import CandidateService from "../services/CandidateService";
import CvDetailService from "../services/CvDetailService";


export default function Candidate() {
  const [cvDetails, setCvDetails] = useState([]);

  useEffect(() => {
    let cvDetailService = new CvDetailService();
    cvDetailService
      .getAllCvDetails()
      .then((result) => setCvDetails(result.data.data));
  }, []);

  return (
    <div>
    
    {
          cvDetails.map((cvDetail)=>(
            <div className="col-md-6">
          <div className="team d-md-flex">
            {/* <div className="img" style={{backgroundImage: 'url({cvDetail.cvPhotoUrl})', width:"26rem"}} /> */}
            <div className="img">
              <img src={cvDetail.cvPhotoUrl} style={{width:"19rem"}} alt=""/>
            </div>
            <div className="text pl-md-4">
              {/* <span className="location mb-0" style={{marginRight:"12rem", fontSize:"15px"}}>Western City, UK</span> */}
              <h2 style={{color:"#000000", marginRight:"12rem"}}>{cvDetail.candidate.firstName} {cvDetail.candidate.lastName}</h2>
              {/* <span className="position" style={{color:"#ff6347", marginRight:"215px", fontSize:"11px"}}>Graduate</span> */}
              <p style={{marginTop:"2rem"}}>{cvDetail.description}</p>
              {/* <p><a href="/" className="btn btn-primary" style={{marginBottom:"-8rem"}}>Detay</a></p> */}
              <p><Link to={`/candidate/${cvDetail.id}`} className="btn btn-primary" style={{marginBottom:"-8rem"}}>Detay</Link></p>
            </div>
            {/* {`/product/${product.productName}`} */}
          </div>
        </div>
    
          ))
        }

     </div>
  );
}
