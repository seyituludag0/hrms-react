import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
       
             
        <div className="myClass" style={{marginTop:"7rem"}}>
        <div className="main" style={{marginLeft:"-40rem"}}>
        <div className="containerr">
          <div className="sign-up-content">
            <form method="POST" className="signup-form">
              <h2 className="form-title"> </h2>
              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
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
              Hesabın yok mu? Hemen üye ol <br /><Link to="register"style={{textDecoration:"none"}} className="loginhere-link">Üye Ol</Link>
            </p>
          </div>
        </div>
        <img src="" alt="" />
      </div>
        <div className="imagee" style={{marginRight:"-30rem", marginTop:"-30rem"}}>
          <img style={{marginLeft:"10rem", marginTop:"-12rem", width:"52rem"}} src="https://res.cloudinary.com/hrms-project/image/upload/v1623352481/react-hrms/login_ggglwg.jpg" alt="" />
        </div>
    </div>
     
       
    )
}
