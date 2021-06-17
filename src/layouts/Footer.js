import React from 'react'
import { Link } from 'react-router-dom'
import '../layouts/Footer.css'


export default function Footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item" style={{marginLeft: '10rem', marginTop: '40px'}}>
                <h3 className="center">Sayfalar</h3>
                <hr />
                <ul className="center">
                  <li><Link to="/">Ana Sayfa</Link></li> <br />
                  <li><Link to="/jobpostings">İş İlanları</Link></li> <br />
                  <li><Link to="/">Hakkımızda</Link></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item" style={{marginTop: '40px'}}>
                <h3 className="center">İletişim</h3>
                <hr />
                <ul style={{textAlign: 'left'}}>
                  {/*<li><a ><strong>Seyit Uludağ</strong></a></li> <br>*/}
                  <li><a href="tel:(90) 552 210 7134"> <i style={{paddingRight: '5px'}} className="fa fa-phone" /> <strong>(552) 210 7134</strong></a></li> <br />
                  <li><a href="mailto:seyituludag0@gmail.com"><i style={{paddingRight: '5px'}} className="fas fa-envelope-square" /> <strong>seyituludag0@gmail.com</strong></a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item" style={{marginLeft: '3rem', marginTop: '40px'}}>
                <h3 className="center">Sosyal Medya Hesaplarımız</h3>
                <hr />
                <div className="effect lavinia" style={{marginLeft: '0px', paddingTop: '0px'}}>
                  <div style={{paddingTop: '1px', display: 'flex'}}>
                    <a href="https://www.instagram.com/seyituludag0/" target="_blank" className="insta" title="Instagram'da bize katılın"><i className="fab fa-instagram icon-color" aria-hidden="true" /></a>
                    <a href="https://www.linkedin.com/in/seyituludag/" target="_blank" className="linkedin" title="Linkedin'de bize katılın"><i className="fab fa-linkedin-in icon-color" aria-hidden="true" /></a>
                    <a href="https://github.com/seyituludag0" target="_blank" className="github" title="Github'da bize katılın"> <i className="fab fa-github icon-color" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright" style={{opacity: 'inherit'}}><b>HRMS - Human Resources Manager System</b> <br/> © 2021</p>
        </footer>
      </div>
    
    </div>
  )
}
