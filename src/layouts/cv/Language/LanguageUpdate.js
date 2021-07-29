import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import LanguageService from "../../../services/LanguageService";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Dropdown,
  Modal,
  Icon,
} from "semantic-ui-react";
export default function LanguageUpdate({ dil }) {
    
const [languages, setLanguages] = useState([]);
const [languageLevels, setLanguageLevels] = useState([]);
    const [open, setOpen] = useState(false);

    // console.log(dil)

    const formik = useFormik({
      initialValues: {
        id:dil?.id,
       
        languageId:dil?.language.id,
        languageLevelId:dil?.languageLevel.id,
        candidateId:dil?.candidate.id,
      },
      enableReinitialize:true,
      onSubmit: (values) => {
        console.log(values);
        let languageService = new LanguageService();
        languageService.update(values).then(toast.success("Dil bilgisi güncellendi!"));
      },

    });

    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    };

    useEffect(()=>{
      // console.log(languages);
      let languageService = new LanguageService();
      languageService.getLanguages().then(result=>setLanguages(result.data.data))
      languageService.getLanguageLevels().then(result=>setLanguageLevels(result.data.data))
    },[])

    const languageOption = languages.map((language, index) => ({
      key: index,
      text: language?.languageName,
      value: language?.id,
    }));

    const languageLevelOption = languageLevels.map((languageLevel, index) => ({
      key: index,
      text: languageLevel?.levelName,
      value: languageLevel?.id
    }));

        return (
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                    <Icon name="pencil"/>
                }
            
            style={{height:"18rem", marginLeft:"23rem", marginTop:"17rem"}}
          >
            <Modal.Header>Dil Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={formik.handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={14}>
                  <Dropdown
                        clearable
                        item
                        placeholder="Dil"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "languageId")
                        }
                        onBlur={formik.onBlur}
                        id="languageId"
                        value={formik.values.languageId}
                        options={languageOption}
                      />

                      {formik.errors.languageId &&
                        formik.touched.languageId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.languageId}
                          </div>
                        )}
                  </GridColumn>
                  <GridColumn width={14}>
                  <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Dil Seviyesi"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "languageLevelId")
                        }
                        onBlur={formik.onBlur}
                        id="languageLevelId"
                        options={languageLevelOption}
                        value={formik.values.languageLevelId}
                      />
                      {formik.errors.languageLevelId &&
                        formik.touched.languageLevelId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.languageLevelId}
                          </div>
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
      );
}
