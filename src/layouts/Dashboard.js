import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import Search from "../layouts/Search"
import CvDetail from "../pages/CvDetail";
 import JobPosting from "../pages/JobPosting" 
import Candidate from "../pages/Candidate"
import Home from "../layouts/Home"
import Register from "../pages/Register";
import LoginPage from "../pages/LoginPage";
import JobPostingDetail from "../pages/JobPostingDetail";
import JobPostingAdd from "../pages/JobPostingAdd";
import AdminJobPostingList from "../pages/admin/jobPosting/AdminJobPostingList";
import EmployerJobPostingList from "../pages/Employer/EmployerJobPostingList";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import About from "../pages/About";
import ActivationCodeEntry from "../pages/ActivationCodeEntry";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} style={{marginLeft:"95rem"}}>
            <Search />
          </Grid.Column>
          <Grid.Column width={14}>
              <Route exact path="/" component={Home} />
              <Route path="/adminjobpostinglist" component={AdminJobPostingList}/>
              <Route path="/employerjobpostinglist" component={EmployerJobPostingList}/>
              <Route exact path="/jobpostingadd" component={JobPostingAdd} />
              <Route exact path="/jobposting/:id" component={JobPostingDetail} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact  path="/jobpostings" component={JobPosting} />
              <Route exact  path="/candidates" component={Candidate} />
              <Route exact path="/candidate/:candidateId" component={CvDetail}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/activationcode" component={ActivationCodeEntry} />
              <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
