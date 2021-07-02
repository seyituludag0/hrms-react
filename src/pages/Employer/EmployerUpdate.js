import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Label,
  Modal,
  Icon,
} from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import EmployerService from "../../services/EmployerService";

export default function EmployerUpdate({ employer }) {
  const [open, setOpen] = useState(false);

  let employerService = new EmployerService();

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id: employer?.id,
      companyName: employer?.companyName,
      webAddress: employer?.webAddress,
      email: employer?.email,
      phoneNumber: employer?.phoneNumber,
      password: employer?.password,
    //   verified: true,
    },

    enableReinitialize: true,
    validationSchema: Yup.object({
      companyName: Yup.string().required(" Şirket ismi boş bırakılamaz"),
      webAddress: Yup.string().required("Web adresi adı boş bırakılamaz"),
      password: Yup.string().required("Şifre boş bırakılamaz"),
    }),

    onSubmit: (values) => {
      console.log(values);
      employerService.update(values).then((result) => {
        toast.success(result.data.message)
      });
    },
  });

 

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            floated="right"
            positive
            style={{ marginBottom: ".5em", marginRight: ".5em" }}
          >
            <Icon name="pencil"></Icon>Düzenle
          </Button>
        }
      >
        <Modal.Header>Şirket Bilgilerini Güncelle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={14}>
                <Form.Field>
                  <label>Şirket Adı</label>
                  <input
                    name="companyName"
                    placeholder="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && touched.companyName && (
                    <Label basic color="red" pointing>
                      {errors.companyName}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
               
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>Web Adresi</label>
                  <input
                    name="webAddress"
                    placeholder="webAddress"
                    value={values.webAddress}
                    onChange={handleChange}
                  />
                  {errors.webAddress && touched.webAddress && (
                    <Label basic color="red" pointing>
                      {errors.webAddress}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <Label basic color="red" pointing>
                      {errors.email}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>Telefon Numarası</label>
                  <input
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Label basic color="red" pointing>
                      {errors.phoneNumber}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
            </Grid>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                Vazgeç
              </Button>
              <Button
                type="submit"
                color="teal"
                style={{ marginLeft: "22em", marginTop: "1em" }}
              >
                Güncelle
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}
