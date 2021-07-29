import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Grid,
  Input,
  TextArea,
  Modal,
  Icon,
} from "semantic-ui-react";
import WorkPlaceService from "../../../services/WorkPlaceService";

export default function WorkPlaceUpdate({ workPlace }) {
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
    description: Yup.string().min(30).required("Bu alan boş geçilemez ve minimum 30 karakterden oluşmalıdır")
  });

  let workPlaceService = new WorkPlaceService();
  const formik = useFormik({
    initialValues: {
      id:workPlace?.id,
      candidateId: 1,
      workPlaceName: workPlace?.workPlaceName,
      jobTitleName: workPlace?.jobTitle,
      dateOfEntry: workPlace?.dateOfEntry,
      dateOfQuit: workPlace?.dateOfQuit,
      description: workPlace?.description
    },
    // validationSchema: workPlaceScheme,
    onSubmit: (values) => {
      console.log(values);
      workPlaceService
        .update(values)
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
            positive
            style={{ marginBottom: ".5em", marginRight: ".5em" }}
          >
            <Icon name="pencil"></Icon>Düzenle
          </Button>
        }
        style={{height:"27rem", marginLeft:"23rem", marginTop:"17rem"}}
      >
        <Modal.Header>İş Deneyimini Güncelle</Modal.Header>
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
                Güncelle
              </Button>
            </Modal.Actions>
          </Form>
        
          
        </Modal.Description>
      </Modal>
    </div>
  );
}
