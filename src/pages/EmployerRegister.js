import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Card, Form, Grid, Image } from "semantic-ui-react";
import AuthService from "../services/AuthService";
import { toast } from "react-toastify";

export default function EmployerRegister() {
  const candidateRegisterScheme = Yup.object().shape({
    companyName: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    webAddress: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    phoneNumber: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    password: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  });

  let authService = new AuthService();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      webAddress: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: candidateRegisterScheme,
    onSubmit: (values) => {
      authService.registerEmployer(values)
      .then((result) => toast.success(result.data.message));
    },
  });

  return (
    <div>
      <div
        className="my-div"
        style={{ marginLeft: "12rem", marginRight: "3rem" }}
      >
        <Card fluid color="blue" header="İŞVEREN OLARAK KAYIT OLUN" />
        <Grid columns={2} padded>
          <Grid.Column>
            <Image src="https://res.cloudinary.com/hrms-project/image/upload/v1624230155/hosting-provider-web-design-concept-with-people-characters-illustration_9209-4578_aplazx.jpg" 
            style={{marginTop:"6rem"}}/>
          </Grid.Column>
          <Grid.Column>
            <div className="my-form">
              <Card fluid style={{height:"34rem"}}>
                <Card.Content header="Kayıt Ol" />
                <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="companyName"
                            name="companyName"
                            onChange={formik.handleChange}
                            value={formik.values.companyName}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Şirket Adı"
                          />
                          {formik.errors.companyName &&
                            formik.touched.companyName && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.companyName}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>

                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="webAddress"
                            name="webAddress"
                            onChange={formik.handleChange}
                            value={formik.values.webAddress}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Web Sitesi"
                          />
                          {formik.errors.webAddress &&
                            formik.touched.webAddress && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.webAddress}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>

                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            type="email"
                            placeholder="Email"
                          />
                          {formik.errors.email && formik.touched.email && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.email}
                            </div>
                          )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>

                    <Form.Field>
                    <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            id="phoneNumber"
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="Telefon Numarası"
                          />
                          {formik.errors.phoneNumber &&
                            formik.touched.phoneNumber && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.phoneNumber}
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
                      content="Ekle"
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
