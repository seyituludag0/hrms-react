import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import CvDetail from "../pages/CvDetail";
 import JobPosting from "../pages/JobPosting" 
import Candidate from "../pages/Candidate"
import Home from "../layouts/Home"
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobPostingDetail from "../pages/JobPostingDetail";
import JobPostingAdd from "../pages/JobPostingAdd";
import AdminJobPostingList from "../pages/admin/jobPosting/AdminJobPostingList";
import EmployerJobPostingList from "../pages/Employer/EmployerJobPostingList";
import { ToastContainer } from "react-toastify";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} style={{marginLeft:"95rem"}}>
            {/* <Search /> */}
          </Grid.Column>
          {/* <Route exact path="/register" component={Register} /> */}
          <Grid.Column width={14}>
             {/* <School /> */}
             {/* <JobPosting /> */}
            {/* <CvDetail /> */}
            {/* <Employee />  */}
            {/* <Department />   */}
        


              <Route exact path="/" component={Home} />
              <Route path="/adminjobpostinglist" component={AdminJobPostingList}/>
              <Route path="/employerjobpostinglist" component={EmployerJobPostingList}/>
              <Route exact path="/jobpostingadd" component={JobPostingAdd} />
              <Route exact path="/jobposting/:id" component={JobPostingDetail} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact  path="/jobpostings" component={JobPosting} />
              <Route exact  path="/candidates" component={Candidate} />
              <Route exact path="/candidate/:candidateId" component={CvDetail}/>

   

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
