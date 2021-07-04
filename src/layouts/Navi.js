import React, { useEffect, useState }from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  Container,  Menu, Image} from "semantic-ui-react";
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useSelector } from 'react-redux'
import Favorite from './Favorite';
import FavoriteJobPostingService from "../services/FavoriteJobPostingService";
import { Table, Message } from 'semantic-ui-react';

export default function Navi() {
  // const {favoriteItems} = useSelector(state => state.favorite)
  const [favoriteJobPostings, setFavoriteJobPostings] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory();

  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignedIn(params) {
    setIsAuthenticated(true)
  }

  useEffect(()=>{
    let favoriteJobPostingService = new FavoriteJobPostingService();
    favoriteJobPostingService.getFavorites().then(result=>console.log(result.data.data))
  })

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
              <Link to="/jobpostings">İş İlanları</Link>
          </Menu.Item>

          <Menu.Item>
              <Link to="/employer">Şirketim</Link>
          </Menu.Item>

          <Menu.Item>
              <Link to="/candidate/1">Öz Geçmiş</Link>
          </Menu.Item>

          <Menu.Item>
              <Favorite />
          </Menu.Item>


                  {/* {favoriteJobPostings.length<0?(
                 <Link>xvxdvsdx</Link>
                  ):(<Table>
            <Message info color="red" visible style={{paddingLeft:"33%"}} size="big">
              Üzgünüz, Bu sayfada iş ilanı bulunamadı!
            </Message>
          </Table>)} */}
              

            <Menu.Item>
                { isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signedIn={handleSignedIn} /> }
            </Menu.Item>
              <Menu.Item>
                {/* <SignedIn /> */}
                {/* <SignedOut />  */}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
