import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Card,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import AuthService from "../services/AuthService";
import { toast } from "react-toastify";
import { useHistory } from "react-router";



export default function CandidateRegister() {
  const history = useHistory();

  const candidateRegisterScheme = Yup.object().shape({
    firstName: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    lastName: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    identityNumber: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    birthDate: Yup.date().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    password: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  });

  let authService = new AuthService();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      identityNumber: "",
      birthDate: "",
      password: "",
    },
    validationSchema: candidateRegisterScheme,
    onSubmit: (values) => {
      authService
        .registerCandidate(values)
        .then((result) => toast.success(result.data.message))
        history.push("/activationcode")
    },
  });

  return (
    <div>
      <div
        className="my-div"
        style={{ marginLeft: "12rem", marginRight: "3rem" }}
      >
        <Card fluid color="blue" header="İŞ ARAYAN OLARAK KAYIT OLUN" />
        <Grid columns={2} padded>
          <Grid.Column>
            <Image src="https://res.cloudinary.com/hrms-project/image/upload/v1624224262/candidato-trabajo-idea-empleo-entrevista-trabajo-busqueda-jefe-contratacion-banner-web-ilustracion_277904-2835_v4xoy0.jpg" />
          </Grid.Column>
          <Grid.Column>
            <div>
              <Card fluid style={{height:"31rem"}}>
                <Card.Content header="Kayıt Ol" />
                <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Ad"
                          />
                          {formik.errors.firstName &&
                            formik.touched.firstName && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.firstName}
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
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Soyad"
                          />
                          {formik.errors.lastName &&
                            formik.touched.lastName && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.lastName}
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
                            id="identityNumber"
                            name="identityNumber"
                            onChange={formik.handleChange}
                            value={formik.values.identityNumber}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="TC Kimlik No"
                          />
                          {formik.errors.identityNumber &&
                            formik.touched.identityNumber && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.identityNumber}
                              </div>
                            )}
                        </Grid.Column>
                    </Form.Field>

                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <Input
                            type="date"
                            style={{ width: "100%" }}
                            id="birthDate"
                            name="birthDate"
                            onChange={formik.handleChange}
                            value={formik.values.birthDate}
                            onBlur={formik.handleBlur}
                            placeholder="Doğum Tarihi"
                          />
                          {formik.errors.birthDate &&
                            formik.touched.birthDate && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.birthDate}
                              </div>
                            )}
                        </Grid.Column>

                        <Grid.Column width={8}>
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
