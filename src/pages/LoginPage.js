import React from 'react'
import { Button, Input, Card, Form, Grid, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function LoginPage() {
    const candidateRegisterScheme = Yup.object().shape({
        email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
        password: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
      });
    
    
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: candidateRegisterScheme,
        onSubmit: (values) => {
        
        },
      });
    
      return (
        <div>
          <div
            className="my-div"
            style={{ marginLeft: "12rem", marginRight: "3rem" }}
          >
            <Card fluid color="blue" header="GİRİŞ YAP" />
            <Grid columns={2} padded>
              <Grid.Column>
                <Image src="https://res.cloudinary.com/hrms-project/image/upload/v1623352481/react-hrms/login_ggglwg.jpg"
                style={{width:"90%"}} 
                />
              </Grid.Column>
              <Grid.Column>
                <div className="my-form">
                  <Card fluid  style={{marginTop:"7rem"}}>
                    <Card.Content header="Giriş Yap" />
                    <Card.Content>
                      <Form onSubmit={formik.handleSubmit}>
    
                        <Form.Field>
                        <Grid.Column width={8}>
                              <Input
                                style={{ width: "100%" }}
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                type="text"
                                placeholder="Email"
                              />
                              {formik.errors.email &&
                                formik.touched.email && (
                                  <div className={"ui pointing red basic label"}>
                                    {formik.errors.email}
                                  </div>
                                )}
                            </Grid.Column>
                        </Form.Field>
    
                        <Form.Field>
                          <Grid stackable>
                            <Grid.Column>
                              <Input
                                style={{ width: "100%" }}
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                type="password"
                                placeholder="Şifre"
                              />
                              {formik.errors.password &&
                                formik.touched.password && (
                                  <div className={"ui pointing red basic label"}>
                                    {formik.errors.password}
                                  </div>
                                )}
                            </Grid.Column>
                          </Grid>
                        </Form.Field>
    
                        <Button
                          content="Giriş Yap"
                          labelPosition="right"
                          icon="add"
                          primary
                          type="submit"
                          style={{ marginLeft: "20px" }}
                        />
                      </Form>
                    </Card.Content>
                  </Card>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      );
}
