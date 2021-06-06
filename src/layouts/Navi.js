import React from 'react';
import { Button, Container,  Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
          <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
          <Menu.Item>
              <Button primary>İş İlanları</Button>
            </Menu.Item>
            <Menu.Item>
            <Button.Group>
              <Button positive>Giriş Yap</Button>
              <Button.Or />
              <Button basic color='red'>Çıkış Yap</Button>
            </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
