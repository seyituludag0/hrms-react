import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, Image } from 'semantic-ui-react'

export default function EmployerRegister() {
  return (
    <Formik
      initialValues={{
        companyName: "",
        email: "",
        password: "",
        phoneNumber:"",
        webAddress: "",
        
      }}
      validationSchema={Yup.object().shape({
        companyName: Yup.string().required("Şirket ismi zorunlu"),
        email: Yup.string()
          .email("Geçersiz email")
          .required("Email zorunlu"),
        password: Yup.string()
          .min(6, "Şifre en az 6 karakterden oluşmalıdır")
          .required("Şifre zorunlu"),
       phoneNumber: Yup.number().required("Telefon numarası zorunlu"),
       webAddress:Yup.string().required("Web sitesi zorunlu")
      })}
      onSubmit={(fields) => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
      render={({ errors, status, touched }) => (

        <Grid columns={2} padded>
      <Grid.Column>
      <div className="myClass">
          <div className="main" style={{ marginLeft: "-40rem" }}>
            <div className="containerr">
              <div className="sign-up-content">
                <Form>
                <div className="form-group">
                        <label htmlFor="companyName" style={{marginLeft:"11rem"}}>Şirket İsmi</label>
                        <Field name="companyName" style={{marginLeft:"45rem", width:"34rem"}} type="text" className={'form-control' + (errors.companyName && touched.companyName ? ' is-invalid' : '')} />
                        <ErrorMessage name="companyName" style={{marginLeft:"20rem"}} component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="webAddress"  style={{marginLeft:"11rem"}}>Web Site</label>
                        <Field name="webAddress" style={{marginLeft:"45rem", width:"34rem"}} type="text" className={'form-control' + (errors.companyName && touched.companyName ? ' is-invalid' : '')} />
                        <ErrorMessage name="webAddress" style={{marginLeft:"20rem"}} component="div" className="invalid-feedback" />
                    </div>
                   
                    <div className="form-group" >
                        <label htmlFor="email" style={{marginLeft:"9.2rem"}}>Email</label>
                        <Field name="email" style={{marginLeft:"45rem", width:"34rem"}} type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" style={{marginLeft:"20rem"}} component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group" style={{marginLeft:"11rem"}}>
                        <label htmlFor="password" style={{marginLeft:"-2rem"}}>Şifre</label>
                        <Field name="password" style={{marginLeft:"34rem", width:"34rem"}} type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" style={{marginLeft:"14rem"}} component="div" className="invalid-feedback" />
                    </div>
                   
                    <div className="form-group" style={{marginLeft:"11rem"}}>
                        <label htmlFor="phoneNumber" style={{marginLeft:"3.5rem"}}>Telefon Numarası</label>
                        <Field name="phoneNumber" style={{marginLeft:"34rem", width:"34rem"}} type="tel" className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name="phoneNumber" style={{marginLeft:"14rem"}} component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group" style={{marginLeft:"38rem", marginTop:"2rem"}}>
                        <button type="submit" className="btn btn-primary mr-2">Kayıt Ol</button>
                        <button type="reset" className="btn btn-secondary">Temizle</button>
                    </div>

               </Form>

                {/* <p className="loginhere">
                  Zaten hesabın var mı? Hemen giriş yap <br />
                  <Link
                    to="login"
                    style={{ textDecoration: "none" }}
                    className="loginhere-link"
                  >
                    Giriş Yap
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
         
        </div>
      
      </Grid.Column>
    
      <Grid.Column>
        <Image src="https://res.cloudinary.com/hrms-project/image/upload/v1623329705/react-hrms/employerRegister_lbw6ah.png" alt="" />
      </Grid.Column>
      
    </Grid>

       )}
    />
  );
}
