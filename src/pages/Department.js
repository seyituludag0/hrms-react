import React, { useEffect, useState } from 'react'
import DepartmentService from "../services/DepartmentService";
import { Icon, Menu, Table, Button, Card } from "semantic-ui-react";

export default function Department() {

    const [departments, setDepartments] = useState([])

    useEffect(()=>{
        let departmentService = new DepartmentService();
        departmentService.getDepartments().then(result=>setDepartments(result.data.data)) 
    },[])

    return (
        <div>
            
            <Card.Group>
      <Card fluid color="blue" header="DEPARTMAN İSİMLERİ" />
    </Card.Group>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Departman İsmi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {departments.map((department) => (
            <Table.Row key={department.id}>
              <Table.Cell>{department.departmentName}</Table.Cell>
              <Table.Cell>
                <Button basic color="orange">
                  Detay
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
  


        </div>
    )
}
