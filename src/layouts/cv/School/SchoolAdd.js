import React, { useEffect, useState } from 'react'
import SchoolService from "../../../services/SchoolService"
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
export default function SchoolAdd({school}) {
    let schoolService = new SchoolService();
const [schools, setSchools] = useState([])

const [open, setOpen] = useState(false)

useEffect(()=>{
    console.log(schools);
    let schoolService = new SchoolService();
    schoolService.getSchools().then(result=>console.log(result.data.data))
},[])


const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      candidateId:1,
      departmentId: "",
      dateOfEntry:"",
      dateOfGraduation:""
    },

    enableReinitialize:true,
  
    onSubmit: (values) => {
      
      console.log(values)
      schoolService.add(values)
      .then(result=>toast.success(result.data.message));
    },
  });

  useEffect(()=>{
    // console.log(languages);
    schoolService.getSchools().then(result=>setSchools(result.data.data))
  },[])


  const formik = useFormik({
    initialValues: {
      candidateId: "",
      departmentId: ""
    },})

    const schoolOption = schools.map((school, index) => ({
        key: index,
        text: school?.schoolName,
        value: school?.id,
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
        
        style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
      >
        <Modal.Header>Okul Adı Ekle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={7}>
              <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Okul Adı"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "departmentId")
                        }
                        onBlur={formik.onBlur}
                        id="departmentId"
                        value={formik.values.departmentId}
                        options={schoolOption}
                      />
                      {formik.errors.departmentId &&
                        formik.touched.departmentId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.departmentId}
                          </div>
                        )}
                    </Form.Field>
{/* 
                <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Okul Adı Seviyesi"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "languageLevelId")
                        }
                        onBlur={formik.onBlur}
                        id="languageLevelId"
                        value={formik.values.languageLevelId}
                        options={languageLevelOption}
                      />
                      {formik.errors.languageLevelId &&
                        formik.touched.languageLevelId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.languageLevelId}
                          </div>
                        )}
                    </Form.Field>
              */}
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
