import React, { useState, useEffect } from 'react'
import VerificationEmployerService from "../../../services/VerificationEmployerService"
import { Table, Button } from "semantic-ui-react";
import EmployerService from "../../../services/EmployerService";

export default function AdminByFalseEmployers() {
  let verificationEmployerService = new VerificationEmployerService();
const [verificationEmployers, setVerificationEmployers] = useState([])

useEffect(()=>{
    verificationEmployerService.getAllByVerifyFalse().then(result=>setVerificationEmployers(result.data.data))
},[verificationEmployers])

let employerService = new EmployerService();
let changeStatusVerified=(id)=>{
    employerService.changeStatusVerified(id);
}

function handleVerifiedButtonClick(employer) {
    changeStatusVerified(employer.id);
    employerService.update(employer);
    setVerificationEmployers(
      verificationEmployers.filter((emp) => emp.id === employer.id)
    );
    verificationEmployerService.delete(employer.id).then("Silindi").catch("HATA!")
  }



return (
    <div style={{marginLeft:"20rem"}}>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>WebSitesi</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Onay Durumu</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {verificationEmployers?.map((employer, key) => (
          <Table.Body>
            <Table.Row key={key}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAddress}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>
                {employer?.verified
                  ? "Doğrulanmış"
                  : "Doğrulanması gereken güncelleme "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Button
                  onClick={() => handleVerifiedButtonClick(employer)}
                  fluid
                  color="red"
                >
                  Onayla
                </Button>{" "}
              </Table.Cell>
              {/* <Table.Cell> <Button onClick={()=>deleteVerificationEmployer(employer.userId)} fluid color="red"> Listeden kaldır</Button> </Table.Cell> */}
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}
