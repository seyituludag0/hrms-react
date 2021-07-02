import React, { useState, useEffect } from "react";
import EmployerService from "../../services/EmployerService";
import { Card, Table, Image,  Grid } from "semantic-ui-react";
import EmployerUpdate from "./EmployerUpdate";

export default function ActiveEmployer() {
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByEmployerId(2)
      .then((result) => setEmployer(result.data.data));
  }, []);

  return (
    <Card style={{ width: "75rem", marginLeft: "15rem" }}>
      <Grid columns={2} padded>
        <Grid.Column>
          <Image src="https://asamco.com/wp-content/uploads/2021/02/company-icon-vector-isolated-white-background-company-transparent-sign-company-icon-vector-isolated-white-background-company-134078740.jpg" />
        </Grid.Column>
        <Grid.Column>
          <Table celled inverted selectable style={{ marginLeft: "-7rem", marginTop:"13rem" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>{employer?.companyName}</Table.Cell>
                <Table.Cell>{employer?.email}</Table.Cell>
                <Table.Cell><a
                    href={`http://${employer?.webAddress}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {employer?.webAddress}
                  </a></Table.Cell>
                <Table.Cell>{employer?.phoneNumber}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <EmployerUpdate employer={employer}/>
        </Grid.Column>
      </Grid>
    </Card>
  );
}
