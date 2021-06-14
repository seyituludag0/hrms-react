import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function CandidateRegisterr() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        identityNumber: "",
        birthYear: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First Name zorunlu"),
        lastName: Yup.string().required("Last Name zorunlu"),
        email: Yup.string()
          .email("Geçersiz email")
          .required("Email zorunlu"),
        password: Yup.string()
          .min(6, "Şifre en az 6 karakterden oluşmalıdır")
          .required("Şifre zorunlu"),
        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm Password zorunlu')

        identityNumber: Yup.string().required("TC No zurunlu").max(11, "TC No 11 haneden uzun olamaz"),
        birthYear: Yup.string().required("DOğum yılı zorunlu"),
      })}
      onSubmit={(fields) => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
      render={({ errors, status, touched }) => (
        <div className="myClass">
          <div className="main" style={{ marginLeft: "-40rem" }}>
            <div className="containerr">
              <div className="sign-up-content">
                <Form>
                <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="firstName" style={{marginLeft:"-23.8rem"}}>First Name</label>
                        <Field name="firstName" style={{marginLeft:"58rem", width:"34rem"}} type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    </div>
                    
                    <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="lastName" style={{marginLeft:"-23.8rem"}}>Last Name</label>
                        <Field name="lastName" style={{marginLeft:"58rem", width:"34rem"}} type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="email" style={{marginLeft:"61rem", width:"34rem"}} style={{marginLeft:"-25.8rem"}}>Email</label>
                        <Field name="email" style={{marginLeft:"58rem", width:"34rem"}} type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                   
                  
                   <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="identityNumber" style={{marginLeft:"-25.8rem"}}>TC No</label>
                        <Field name="identityNumber" style={{marginLeft:"58rem", width:"34rem"}} type="number" className={'form-control' + (errors.identityNumber && touched.identityNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name="identityNumber" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="birthYear" style={{marginLeft:"-23.8rem"}}>Doğum Yılı</label>
                        <Field name="birthYear" style={{marginLeft:"58rem", width:"34rem"}} type="number" className={'form-control' + (errors.birthYear && touched.birthYear ? ' is-invalid' : '')} />
                        <ErrorMessage name="birthYear" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group" style={{marginLeft:"-13rem"}}>
                        <label htmlFor="password" style={{marginLeft:"-25.8rem"}}>Şifre</label>
                        <Field name="password" style={{marginLeft:"58rem", width:"34rem"}} type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group">
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
          <div
            className="imagee"
            style={{ marginRight: "-30rem", marginTop: "-30rem" }}
          >
            <img
              style={{
                marginLeft: "21rem",
                marginTop: "-20rem",
              }}
              src="https://res.cloudinary.com/hrms-project/image/upload/v1623329686/react-hrms/candidateRegister_g33ktg.png"
              alt=""
            />
          </div>
        </div>
      )}
    />
  );
}
