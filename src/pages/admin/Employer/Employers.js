import React, { useState, useEffect } from "react";
import {
  Card,
  Header,
  Table,
} from "semantic-ui-react";
import EmployerService from "../../../services/EmployerService";

export default function Employers() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then((result) => {
      setEmployers(result.data.data);
    });
  }, []);

  return (
    <div>
      <Card.Group>
        <Card
          className="jobs"
          fluid
          color="blue"
          header="İŞVEREN ŞİRKET BİLGİLERİ"
        />
      </Card.Group>
      {
      employers.map((employer) => (
        <Table celled padded>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell singleLine>Şirket İsmi</Table.HeaderCell>
    <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
    <Table.HeaderCell>Email</Table.HeaderCell>
    <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  <Table.Row>
    <Table.Cell>
      <Header as="h2" textAlign="center">
        {employer?.companyName.toUpperCase()}
      </Header>
    </Table.Cell>
    <Table.Cell singleLine>
      <a
        href={`http://${employer?.webAddress}`}
        rel="noreferrer"
        target="_blank"
      >
        {employer?.webAddress}
      </a>
    </Table.Cell>
    <Table.Cell singleLine>
      {employer?.email}
    </Table.Cell>
    <Table.Cell>{employer?.phoneNumber}</Table.Cell>
  </Table.Row>
</Table.Body>
</Table>

      ))}
    </div>
  );
}
