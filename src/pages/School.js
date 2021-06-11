import React, { useEffect, useState } from "react";
import SchoolService from "../services/SchoolService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function School() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    let schoolService = new SchoolService(); 
    schoolService.getSchools().then((result) => setSchools(result.data.data));
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Body>
          {schools.map((school) => (
            <Table.Row key={school.id}>
              <Table.Cell>{school.schoolName}</Table.Cell>
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
  );
}
