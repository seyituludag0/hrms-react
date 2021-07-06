import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
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
// import Footer from "./Footer";
import About from "../pages/About";
import ActivationCodeEntry from "../pages/ActivationCodeEntry";
import ActiveEmployer from "../pages/Employer/ActiveEmployer";
import EmployeeList from "../pages/Employee/EmployeeList";
import AdminPaneli from "../pages/admin/AdminPaneli";
import Employers from "../pages/admin/Employer/Employers";
import AdminByFalseEmployers from "../pages/admin/Employer/AdminByFalseEmployers";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
              <Route exact path="/" component={Home} />
              <Route path="/adminjobpostinglist" component={AdminJobPostingList}/>
              <Route path="/admin" component={AdminPaneli}/>
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
              <Route exact path="/employer" component={ActiveEmployer} />
              <Route exact path="/employers" component={Employers} />
              <Route exact path="/employee" component={EmployeeList} />
              <Route exact path="/adminbyfalseemployers" component={AdminByFalseEmployers} />
              {/* <Footer /> */}
             
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
