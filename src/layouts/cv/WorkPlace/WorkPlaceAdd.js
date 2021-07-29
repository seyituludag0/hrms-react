import React, { useEffect, useState } from "react";
import WorkPlaceService from "../../../services/WorkPlaceService";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Form,
  Grid,
  Card,
  Input,
  Modal,
  Icon,
  Label,
  TextArea,
} from "semantic-ui-react";
import { toast } from "react-toastify";

export default function WorkPlaceAdd() {
  const [open, setOpen] = useState(false);

  const workPlaceScheme = Yup.object().shape({
    workPlaceName: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    jobTitleName: Yup.string().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    dateOfEntry: Yup.date().required(
      "Bu alan boş geçilemez. Lütfen doldurunuz"
    ),
    dateOfQuit: Yup.date().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
    description: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz").min(30, "Minimum 30 karakterden oluşmalıdır")
  });

  let workPlaceService = new WorkPlaceService();
  const formik = useFormik({
    initialValues: {
      candidateId: 1,
      workPlaceName: "",
      jobTitleName: "",
      dateOfEntry: "",
      dateOfQuit: "",
      description: "",
    },
    // validationSchema: workPlaceScheme,
    onSubmit: (values) => {
      workPlaceService
        .add(values)
        .then((result) => toast.success(result.data.message));
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
            primary
            style={{ marginBottom: ".5em", marginRight: ".5em" }}
          >
            <Icon name="add"></Icon>Ekle
          </Button>
        }
        style={{ height: "33rem", marginLeft: "23rem", marginTop: "11rem"}}
      >
        <Modal.Header>İş Deneyim Ekle</Modal.Header>
        <Modal.Description>

          <Form
            onSubmit={formik.handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <Grid.Column width={7}>
                <Form.Field>
                  <Grid stackable>
                    <Grid.Column>
                      <Input
                        style={{ width: "100%" }}
                        id="workPlaceName"
                        name="workPlaceName"
                        onChange={formik.handleChange}
                        value={formik.values.workPlaceName}
                        onBlur={formik.handleBlur}
                        type="text"
                        placeholder="Şirket Adı"
                      />
                      {formik.errors.workPlaceName &&
                        formik.touched.workPlaceName && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.workPlaceName}
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
                        id="jobTitleName"
                        name="jobTitleName"
                        onChange={formik.handleChange}
                        value={formik.values.jobTitleName}
                        onBlur={formik.handleBlur}
                        type="text"
                        placeholder="İş Başlığı"
                      />
                      {formik.errors.jobTitleName &&
                        formik.touched.jobTitleName && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.jobTitleName}
                          </div>
                        )}
                    </Grid.Column>
                  </Grid>
                </Form.Field>

                <Form.Field>
                  <Grid stackable>
                    <Grid.Column width={8}>
                      <Input
                        style={{ width: "100%" }}
                        id="dateOfEntry"
                        name="dateOfEntry"
                        onChange={formik.handleChange}
                        value={formik.values.dateOfEntry}
                        onBlur={formik.handleBlur}
                        type="date"
                        placeholder="İşe girme tarihi"
                      />
                      {formik.errors.dateOfEntry &&
                        formik.touched.dateOfEntry && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.dateOfEntry}
                          </div>
                        )}
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <Input
                        type="date"
                        style={{ width: "100%" }}
                        id="dateOfQuit"
                        name="dateOfQuit"
                        onChange={formik.handleChange}
                        value={formik.values.dateOfQuit}
                        onBlur={formik.handleBlur}
                        placeholder="İşten ayrılma tarihi"
                      />
                      {formik.errors.dateOfQuit &&
                        formik.touched.dateOfQuit && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.dateOfQuit}
                          </div>
                        )}
                    </Grid.Column>
                  </Grid>
                </Form.Field>
              </Grid.Column>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column style={{ marginTop: "1rem" }}>
                    <TextArea
                    style={{width:"30rem", height:"12rem"}}
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      onBlur={formik.handleBlur}
                      type="text"
                      placeholder="Açıklama"
                    />
                    {formik.errors.description &&
                      formik.touched.description && (
                        <div className={"ui pointing red basic label"} style={{display:"block"}}>
                          {formik.errors.description}
                        </div>
                      )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
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
                Ekle
              </Button>
            </Modal.Actions>
          </Form>
        
        </Modal.Description>
      </Modal>
    </div>
  );
}
