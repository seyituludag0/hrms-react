import React from 'react'
import { Link } from 'react-router-dom'
import '../layouts/Footer.css'
import { Icon } from "semantic-ui-react";


export default function Footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item" style={{marginLeft: '10rem', marginTop: '40px'}}>
                <h3 className="center" style={{color:"#bbbdff"}}>Sayfalar</h3>
                <hr />
                <ul className="center">
                  <li><Link to="/">Ana Sayfa</Link></li> <br />
                  <li><Link to="/jobpostings">İş İlanları</Link></li> <br />
                  <li><Link to="/about">Hakkımızda</Link></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item" style={{marginTop: '40px'}}>
                <h3 className="center" style={{color:"#bbbdff"}}>İletişim</h3>
                <hr />
                <ul style={{textAlign: 'left'}}>
                  {/*<li><a ><strong>Seyit Uludağ</strong></a></li> <br>*/}
                  <li><a href="tel:(90) 552 210 7134"> <Icon name="phone" size="large"/> <strong>(552) 210 7134</strong></a></li> <br />
                  <li><a href="mailto:seyituludag0@gmail.com"><Icon name="mail" size="large"/> <strong>seyituludag0@gmail.com</strong></a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item" style={{marginLeft: '3rem', marginTop: '40px'}}>
                <h3 className="center" style={{color:"#bbbdff"}}>Sosyal Medya Hesaplarımız</h3>
                <hr />
                <div className="effect lavinia" style={{marginLeft: '0px', paddingTop: '0px'}}>
                  <div style={{paddingTop: '1px', display: 'flex'}}>
                    <a href="https://www.instagram.com/seyituludag0/" target="_blank" title="Instagram'da bize katılın"><Icon style={{color:"#bbbdff"}} name="instagram" size="large"/></a>
                    <a href="https://www.linkedin.com/in/seyituludag/" target="_blank"  title="Linkedin'de bize katılın"><Icon style={{color:"#bbbdff"}} name="linkedin" size="large"/></a>
                    <a href="https://github.com/seyituludag0" target="_blank" title="Github'da bize katılın"><Icon style={{color:"#bbbdff"}} name="github" size="large"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright" style={{opacity: 'inherit', color:"#bbbdff"}}><b>HRMS - Human Resources Manager System</b> <br/> © 2021</p>
        </footer>
      </div>
    
      {/* <Icon name="instagram" />
      <Icon name="linkedin" />
      <Icon name="github" /> */}
      
    </div>
  )
}
