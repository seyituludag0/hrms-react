import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container,  Menu, Image} from "semantic-ui-react";


export default function Navi() {
  return (
    <div>
          <Menu inverted fixed="top">
        <Container>
        <Image src='https://res.cloudinary.com/hrms-project/image/upload/v1623091360/free-logo-2ye432qlrl-idpzauzgux-removebg-preview_xzjkon.png'
         size='small' style={{width:"8 rem"}} />
          <Menu.Item>
              <Link to="/">Ana Sayfa</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/candidates">İş Arayanlar</Link>
          </Menu.Item>
         
          <Menu.Menu position="right">
          <Menu.Item>
              <Link to="/jobpostings">İş İlanları</Link>
          </Menu.Item>
            <Menu.Item>
            <Button.Group>
              <Button positive><Link to="login">Giriş Yap</Link></Button>
              <Button.Or />
              <Button basic color='red'><Link to="employerregister">Üye Ol</Link></Button>
            </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
