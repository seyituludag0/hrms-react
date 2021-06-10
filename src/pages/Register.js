import React from "react";
import {
  Segment,
  Form,
  Tab,
} from "semantic-ui-react";
import CandidateRegister from './CandidateRegister';
import EmployerRegister from './EmployerRegister';

export default function Register() {

  const tabs = [
    {
      menuItem: "Aday Girisi",
      render: () => <CandidateRegister /> ,
    },
    {
      menuItem: "İş Veren Girişi",
      render: () => <EmployerRegister />,
    },
  ];


  return (
    <>
     <Form size="large">
            <Segment stacked>
              <Tab panes={tabs} menu={{ secondary: true }} />
            </Segment>
          </Form>
  </>
  
  )
}
