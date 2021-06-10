import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
// import Department from "../pages/Department";
 import JobPosting from "../pages/JobPosting" 
// import Employee from "../pages/Employee";
// import Candidate from "../pages/Candidate"
import Home from "../layouts/Home"
// import Search from "./Search";
// import School from "../pages/School";
import Register from "../pages/Register";

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
            {/* <Candidate />*/}
            {/* <Employee />  */}
            {/* <Department />   */}
            <Route exact path="/" component={Home} />
              <Route  path="/register" component={Register} />
              <Route  path="/jobpostings" component={JobPosting} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
