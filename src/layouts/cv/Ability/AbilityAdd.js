import React, { useEffect, useState } from "react";
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
import AbilityService from "../../../services/AbilityService";
import { toast } from "react-toastify";



export default function AbilityAdd({ability}) {
  let abilityService = new AbilityService();
  const [open, setOpen] = useState(false)

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      candidateId:1,
      abilityId:ability?.id
    },
    enableReinitialize:true,
  
    onSubmit: (values) => {
      
      console.log(values)
      abilityService.add(values)
        .then(toast.success("Eklendi"));
    },
  });

  const formik = useFormik({
    initialValues: {
      abilityId: "",
    },})

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    abilityService.getAbilities().then((result) => setAbilities(result.data.data));
    // abilityService.getAbilities().then((result) => console.log(result.data.data));
  }, []);


  const abilityOption = abilities.map((ability, index) => ({
    key: index,
    text: ability.name,
    value: ability.id,
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
        <Modal.Header>Yetenek Ekle</Modal.Header>
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
                        placeholder="Yetenek"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "abilityId")
                        }
                        onBlur={formik.onBlur}
                        id="abilityId"
                        value={formik.values.abilityId}
                        options={abilityOption}
                      />

                      {formik.errors.abilityId &&
                        formik.touched.abilityId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.abilityId}
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
