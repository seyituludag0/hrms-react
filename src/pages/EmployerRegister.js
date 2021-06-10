import React from 'react'
import '../registerStyles/css/style.css'
import  '../registerStyles/fonts/material-icon/css/material-design-iconic-font.min.css'

export default function EmployerRegister() {
    return (
       
        <div className="myClass">
        <div className="main" style={{marginLeft:"-40rem"}}>
        <div className="containerr" style={{marginLeft:"40rem"}}>
          <div className="sign-up-content">
            <form method="POST" className="signup-form">
              <h2 className="form-title"> </h2>
              <div className="form-textbox">
                <label htmlFor="name">Şirket İsmi</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-textbox">
                <label htmlFor="name">Telefon No</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-textbox">
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" id="pass" />
              </div>
              <div className="form-textbox">
                <input type="submit" name="submit" id="submit" className="submit" />
              </div>
            </form>
            <p className="loginhere">
              Zaten hesabın var mı? Hemen giriş yap <br /><a href="/" style={{textDecoration:"none"}} className="loginhere-link"> Giriş Yap</a>
            </p>
          </div>
        </div>
        <img src="" alt="" />
      </div>
        <div className="imagee" style={{marginRight:"-30rem", marginTop:"-30rem"}}>
          <img style={{marginLeft:"10rem", marginTop:"-3.2rem", width:"52rem", height:"31rem"}}
           src="https://res.cloudinary.com/hrms-project/image/upload/v1623329705/react-hrms/employerRegister_lbw6ah.png" alt="" />
        </div>
    </div>
       
    )
}
