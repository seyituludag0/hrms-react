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
import EmployeeService from "../../services/EmployeeService";
export default function EmployeeUpdate({employee}) {


    const [open, setOpen] = useState(false);

    let employeeService = new EmployeeService();


    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id: employee?.id,
          firstName: employee?.firstName,
          lastName: employee?.lastName,
          email: employee?.email,
          password: employee?.password,
          identityNumber:employee?.identityNumber,
          birthYear:employee?.birthYear
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
          firstName: Yup.string().required("Ad boş bırakılamaz"),
          lastName: Yup.string().required("Soyad boş bırakılamaz"),
          email: Yup.string().required("Email boş bırakılamaz"),
          password: Yup.string().required("Şifre boş bırakılamaz"),
        }),

        onSubmit: (values) => {
            console.log(values);
            employeeService.update(values).then((result) => {
              toast.success(result.data.message)
            });
          },
    })




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
            <Modal.Header>Bilgilerini Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Ad</label>
                      <input
                        name="firstName"
                        placeholder="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && touched.firstName && (
                        <Label basic color="red" pointing>
                          {errors.firstName}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={12}>
                   
                  </GridColumn>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Soyad</label>
                      <input
                        name="lastName"
                        placeholder="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && touched.lastName && (
                        <Label basic color="red" pointing>
                          {errors.lastName}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>TC NO</label>
                      <input
                      disabled
                        name="identityNumber"
                        placeholder="identityNumber"
                        value={values.identityNumber}
                        onChange={handleChange}
                      />
                      {errors.identityNumber && touched.identityNumber && (
                        <Label basic color="red" pointing>
                          {errors.identityNumber}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Doğum Yılı</label>
                      <input
                      disabled
                        name="birthYear"
                        placeholder="birthYear"
                        value={values.birthYear}
                        onChange={handleChange}
                      />
                      {errors.birthYear && touched.birthYear && (
                        <Label basic color="red" pointing>
                          {errors.birthYear}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  
                  <GridColumn width={12}>
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
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Şifre</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && touched.password && (
                        <Label basic color="red" pointing>
                          {errors.password}
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
