import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import SchoolService from "../../../services/SchoolService";
import {
    Button,
    Form,
    Grid,
    GridColumn,
    Label,
    Modal,
    Icon,
  } from "semantic-ui-react";

export default function SchoolUpdate({ schoolCandidate }) {
  const [open, setOpen] = useState(false)
  console.log(schoolCandidate);
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
        // id: schoolCandidate?.id,
        // schoolName:schoolCandidate?.school.schoolName,
        // departmentName:schoolCandidate?.department.departmentName,
        // candidate:schoolCandidate?.candidate,
        // dateOfEntry:schoolCandidate?.dateOfEntry,
        // dateOfGraduation:schoolCandidate?.dateOfGraduation

        id: schoolCandidate?.id,
        schoolName:schoolCandidate?.school.schoolName,
        departmentName:schoolCandidate?.department.departmentName,
        candidate:schoolCandidate?.candidate,
        dateOfEntry:schoolCandidate?.dateOfEntry,
        dateOfGraduation:schoolCandidate?.dateOfGraduation

    },
    enableReinitialize:true,
    validationSchema: Yup.object({
      schoolName:Yup.string().required("Okul adı boş bırakılamaz")
    }),

    onSubmit: (values) => {
      let schoolService = new SchoolService();
      console.log(schoolCandidate)
      schoolService.update(values)
      .then(result=>toast.success(result.data.message));
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
            
            style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
          >
            <Modal.Header>Sosyal Medya Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  {/* <GridColumn width={14}>
                    <Form.Field>
                      <label>Sosyal Medya Adı</label>
                      <input
                        name="linkType"
                        placeholder="Sosyal Medya "
                        value={values.linkType}
                        onChange={handleChange}
                      />
                      {errors.linkType && touched.linkType && (
                        <Label basic color="red" pointing>
                          {errors.linkType}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn> */}
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Url Link</label>
                      <input
                        name="link"
                        placeholder="site Adı"
                        value={values.link}
                        onChange={handleChange}
                      />
                      {errors.link && touched.link && (
                        <Label basic color="red" pointing>
                          {errors.link}
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
