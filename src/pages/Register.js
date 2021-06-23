import React from "react";
import {
  Segment,
  Tab,
} from "semantic-ui-react";
import CandidateRegister from './CandidateRegister';
import EmployerRegister from './EmployerRegister';


export default function Register() {

  const tabs = [
    {
      menuItem: "İŞ ARAYAN OLARAK KAYIT OL",
      render: () => <CandidateRegister /> ,
    },
    {
      menuItem: "İŞVEREN OLARAK KAYIT OL",
      render: () => <EmployerRegister />,
    },
  ];


  return (
    <>
     <div size="large">
            <Segment stacked>
              <Tab panes={tabs} menu={{ secondary: true }} />
            </Segment>
          </div>
  </>
  
  )
}
