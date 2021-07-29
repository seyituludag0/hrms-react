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
  import BasicInformationService from "../../../services/BasicInformationService.js";

export default function BasicInformations({basicInformation}) {
    const [open, setOpen] = useState(false)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:basicInformation?.id,
          candidate:basicInformation?.candidate,
          description:basicInformation?.description,
          cvPhotoUrl:basicInformation?.cvPhotoUrl
        },

        enableReinitialize:true,
        validationSchema: Yup.object({
            description:Yup.string().required(" Açıklama boş bırakılamaz!"),
        }),

        onSubmit: (values) => {
            let basicInformationService = new BasicInformationService();
            console.log(basicInformation)
            basicInformationService.update(values)
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
            
            style={{height:"30rem", marginLeft:"23rem", marginTop:"10rem"}}
          >
            <Modal.Header>Temel Bilgilerini Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
             

                <Grid stackable>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Resim Linki</label>
                      <input
                        name="cvPhotoUrl"
                        placeholder="Resim Linki"
                        value={values.cvPhotoUrl}
                        onChange={handleChange}
                      />
                      {errors.cvPhotoUrl && touched.cvPhotoUrl && (
                        <Label basic color="red" pointing>
                          {errors.cvPhotoUrl}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                </Grid>

                <Grid stackable>
                  <GridColumn width={12}>
                    <Form.Field>
                      <label>Açıklama Metni</label>
                      <textarea
                        name="description"
                        placeholder="Açıklama Metni"
                        value={values.description}
                        onChange={handleChange}
                      />
                      {errors.description && touched.description && (
                        <Label basic color="red" pointing>
                          {errors.description}
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
      )
}
