import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Image, Segment } from 'semantic-ui-react'

export default function AdminPaneli() {
    return (
        <Grid stackable columns={2}>
    <Grid.Column as={NavLink} to="/adminjobpostinglist">
      <Segment>
        <Image style={{width:"71%"}} src='https://lh3.googleusercontent.com/proxy/326tF6VhevcMUdhdRzEMh-9JrwxxIcU4W2D8cbKGPDntjsyHD_ROSvLnShutg_pqvsd4JhQOXitj-L96Nhk5pFItsO_nGZJRA7NAuN2Tsc45IyKv' />
      </Segment>
    </Grid.Column>
    <Grid.Column as={NavLink} to="/employers">
      <Segment>
        <Image style={{width:"60%"}} src='https://asamco.com/wp-content/uploads/2021/02/company-icon-vector-isolated-white-background-company-transparent-sign-company-icon-vector-isolated-white-background-company-134078740.jpg' />
      </Segment>
    </Grid.Column>
  </Grid>
    )
}
