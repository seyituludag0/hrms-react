import React, { useEffect, useState } from 'react'
import LanguageService from "../../../services/LanguageService"
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Dropdown,
  Modal,
  Icon,
} from "semantic-ui-react";
import { toast } from "react-toastify";

export default function LanguageAdd({language}) {
  const [open, setOpen] = useState(false)
const [languages, setLanguages] = useState([]);
const [languageLevels, setLanguageLevels] = useState([]);
// console.log(languages);
let languageService = new LanguageService();
const formik = useFormik({
  initialValues: {
    // id:language?.id,
    languageId:"",
    languageLevelId:"",
    candidateId:1
  },
  enableReinitialize:true,
  onSubmit: (values) => {
    console.log(values);
    languageService.add(values).then(result=>toast.success(result.data.message));
  },
})

useEffect(()=>{
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

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

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
        
        style={{height:"30rem", marginLeft:"23rem", marginTop:"17rem"}}
      >
        <Modal.Header>Dil Ekle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={formik.handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={7}>
              <Form.Field>
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
                        options={languageOption}
                      />
                      {formik.errors.languageId &&
                        formik.touched.languageId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.languageId}
                          </div>
                        )}
                    </Form.Field>

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
                Ekle
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  )
}
