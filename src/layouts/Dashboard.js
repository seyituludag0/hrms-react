import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import CvDetail from "../pages/CvDetail";
// import Department from "../pages/Department";
 import JobPosting from "../pages/JobPosting" 
// import Employee from "../pages/Employee";
import Candidate from "../pages/Candidate"
import Home from "../layouts/Home"
// import Search from "./Search";
// import School from "../pages/School";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EmployerRegister from "../pages/EmployerRegister";
// import Formiks from "../pages/Formiks";

export default function Dashboard() {
  return (
    <div>
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
              <Route exact path="/employerregister" component={EmployerRegister} />
              <Route exact path="/" component={Register} />
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
