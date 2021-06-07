import React from "react";
import { Grid } from "semantic-ui-react";
//import Department from "../pages/Department";
 import JobPosting from "../pages/JobPosting"
// import Employee from "../pages/Employee";
// import Candidate from "../pages/Candidate"

import Search from "../layouts/Search"

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} style={{marginLeft:"95rem"}}>
            <Search />
          </Grid.Column>
          <Grid.Column width={14}>
            
             <JobPosting />
            {/*<Candidate />
            <Employee /> 
            <Department />*/}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
