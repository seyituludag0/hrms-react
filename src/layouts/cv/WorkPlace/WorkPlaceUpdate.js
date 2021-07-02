import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Label,
  Modal,
  Icon,
} from "semantic-ui-react";
import WorkPlaceService from "../../../services/WorkPlaceService";

export default function WorkPlaceUpdate({ workPlace }) {
  const [open, setOpen] = useState(false);

  let workPlaceService = new WorkPlaceService();
  

  // const workPlaceScheme = Yup.object().shape({
  //   workPlaceName: Yup.string().required(
  //     "Bu alan boş geçilemez. Lütfen doldurunuz"
  //   ),
  //   jobTitleName: Yup.string().required(
  //     "Bu alan boş geçilemez. Lütfen doldurunuz"
  //   ),
  //   email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  //   dateOfEntry: Yup.date().required(
  //     "Bu alan boş geçilemez. Lütfen doldurunuz"
  //   ),
  //   dateOfQuit: Yup.date().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  // });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id:workPlace?.id,
      candidateId: 1,
      workPlaceName: workPlace?.workPlaceName,
      jobTitleName: workPlace?.jobTitle,
      dateOfEntry: workPlace?.dateOfEntry,
      dateOfQuit: workPlace?.dateOfQuit,
    },
    

    enableReinitialize: true,
    // validationSchema: workPlaceScheme,
    onSubmit: (values) => {
      workPlaceService.update(values).then(result=>toast.success(result.data.message))
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
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={14}>
                <Form.Field>
                  <label>İşyeri Adı</label>
                  <input
                    name="workPlaceName"
                    placeholder="İşyeri"
                    value={values.workPlaceName}
                    onChange={handleChange}
                  />
                  {errors.workPlaceName && touched.workPlaceName && (
                    <Label basic color="red" pointing>
                      {errors.workPlaceName}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
            </Grid>

            <GridColumn width={14}>
              <Form.Field>
                <label>İş Posizyonu Adı</label>
                <input
                  name="jobTitleName"
                  placeholder="İş Posizyonu"
                  value={values.jobTitleName}
                  onChange={handleChange}
                />
                {errors.jobTitle && touched.jobTitleName && (
                  <Label basic color="red" pointing>
                    {errors.jobTitleName}
                  </Label>
                )}
              </Form.Field>
            </GridColumn>

            <GridColumn width={7}>
              <Form.Field>
                <label>Başlama Tarihi</label>
                <input
                  name="dateOfEntry"
                  type="date"
                  value={values.dateOfEntry}
                  onChange={handleChange}
                />
                {errors.dateOfEntry && touched.dateOfEntry && (
                  <Label basic color="red" pointing>
                    {errors.dateOfEntry}
                  </Label>
                )}
              </Form.Field>
            </GridColumn>
            <GridColumn width={7}>
              <Form.Field>
                <label>Bitiş Tarihi</label>
                <input
                  name="dateOfQuit"
                  type="date"
                  value={values.dateOfQuit}
                  onChange={handleChange}
                />
                {errors.dateOfQuit && touched.dateOfQuit && (
                  <Label basic color="red" pointing>
                    {errors.dateOfQuit}
                  </Label>
                )}
              </Form.Field>
            </GridColumn>

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
