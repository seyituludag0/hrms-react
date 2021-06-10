import React from 'react'
import '../registerStyles/css/style.css'
import  '../registerStyles/fonts/material-icon/css/material-design-iconic-font.min.css'

export default function CandidateRegister() {
    return (
       
        <div className="myClass">
        <div className="main" style={{marginLeft:"-40rem"}}>
        <div className="containerr">
          <div className="sign-up-content">
            <form method="POST" className="signup-form">
              <h2 className="form-title"> </h2>
              <div className="form-textbox">
                <label htmlFor="name">Ad</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-textbox">
                <label htmlFor="name">Soyad</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-textbox">
                <label htmlFor="name">TC No</label>
                <input type="number" name="name" id="name" />
              </div>
              <div className="form-textbox">
                <label htmlFor="name">Doğum Yılı</label>
                <input type="number" name="name" id="name" />
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
          <img style={{marginLeft:"10rem", marginTop:"-9rem", width:"52rem"}} src="https://res.cloudinary.com/hrms-project/image/upload/v1623329686/react-hrms/candidateRegister_g33ktg.png" alt="" />
        </div>
    </div>
       
    )
}
