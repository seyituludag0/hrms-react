import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  Container,  Menu, Image} from "semantic-ui-react";
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';

export default function Navi() {

  // const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory();

  // function handleSignOut(params) {
  //   setIsAuthenticated(false)
  //   history.push("/")
  // }

  // function handleSignedIn(params) {
  //   setIsAuthenticated(true)
  // }


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
              <Link to="/candidates">İş Arayan CV'leri</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/about">Hakkımızda</Link>
          </Menu.Item>
         
          <Menu.Menu position="right">
          <Menu.Item>
              <Link to="/jobpostingadd">İlan Ekle</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to="/jobpostings">İş İlanları</Link>
          </Menu.Item>
         
            {/* <Menu.Item>
                { isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signedIn={handleSignedIn} /> }
            </Menu.Item> */}
             <Menu.Item>
                <SignedIn />
                <SignedOut /> 
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
