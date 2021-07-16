import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService"
import { Card, Table, Image, Grid } from "semantic-ui-react";
import EmployeeUpdate from "./EmployeeUpdate"
export default function EmployeeList() {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
      let employeeService = new EmployeeService();
      employeeService.getByEmployeeId(19).then((result) => setEmployee(result.data.data));
    }, [employee]);


    return (
      <Card style={{ width: "62rem", marginLeft: "15rem" }}>
        <Grid columns={2} padded>
          <Grid.Column>
            <Image src="https://avatars.githubusercontent.com/u/76704724?s=400&u=648e6b282d136fd28b63254f27375219f66b1f3f&v=4" />
          </Grid.Column>
          <Grid.Column>
            <Table celled inverted selectable style={{ marginLeft: "-2rem", marginTop:"8rem" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Ad</Table.HeaderCell>
                  <Table.HeaderCell>Soyad</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
  
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{employee?.firstName}</Table.Cell>
                  <Table.Cell>{employee?.lastName}</Table.Cell>
                  <Table.Cell>{employee?.email}</Table.Cell>
                  <Table.Cell>{employee?.birthYear}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <EmployeeUpdate employee={employee}/>
          </Grid.Column>
        </Grid>
      </Card>
    );
}
