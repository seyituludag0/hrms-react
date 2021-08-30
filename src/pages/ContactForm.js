import React, { useState, useEffect } from "react";
import "../css/contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactService from "../services/ContactService";
import { toast } from "react-toastify";
import { Button, Form, Icon, Grid } from "semantic-ui-react";

export default function ContactForm() {
  const contactFormScheme = Yup.object().shape({
    fullName: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    message: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  });

  let contactService = new ContactService();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormScheme,
    onSubmit: (values) => {
      contactService
        .send(values)
        .then((result) => toast.success(result.data.message))
    },
  });

  return (
    <div className="wrapper">
      <div className="inner">
        <h3>Bize Ulaşın</h3>
        <p>
          Şikayetiniz, önerileriniz için ve tüm sorularınız için yazabilirsiniz
        </p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Grid stackable>
              <Grid.Column>
                <label className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    value={formik.values.fullName}
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.fullName}
                    </div>
                  )}
                  <span id="label-color">Ad Soyad</span>
                  <span className="border" />
                </label>
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field>
            <Grid stackable>
              <Grid.Column>
                <label className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.email}
                    </div>
                  )}
                  <span id="label-color">Email</span>
                  <span className="border" />
                </label>
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field>
            <Grid stackable>
              <Grid.Column>
                <label className="form-group">
                  <textarea
                    className="form-control"
                    type="text"
                    value={formik.values.message}
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.message && formik.touched.message && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.message}
                    </div>
                  )}
                  <span id="label-color">Mesajınız</span>
                  <span className="border" />
                </label>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Button>
            Gönder &nbsp; <Icon name="send" />
          </Button>
        </Form>
      </div>
    </div>
  );
}
