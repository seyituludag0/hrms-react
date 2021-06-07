import React from 'react';
import { Button, Container,  Menu, Image} from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
          <Menu inverted fixed="top">
        <Container>
        <Image src='https://res.cloudinary.com/hrms-project/image/upload/v1623091360/free-logo-2ye432qlrl-idpzauzgux-removebg-preview_xzjkon.png'
         size='small' style={{width:"8 rem"}} />
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş Arayanlar" />
         
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
