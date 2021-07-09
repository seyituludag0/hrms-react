import React,{useState, useEffect} from 'react'
import AbilityService from "../../../services/AbilityService"
import { useFormik } from "formik";
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
export default function AbilityUpdate({ability}) {
    
    let abilityService = new AbilityService();
    const [open, setOpen] = useState(false);
    const [abilities, setAbilities] = useState([]);
  
   
    const formik = useFormik({
      initialValues: {
        id:ability?.id,
        abilityId:ability?.ability.id,
        candidateId:1,
      },
      enableReinitialize:true,
      onSubmit: (values) => {
        console.log(values);
        let abilityService = new AbilityService();
        abilityService.update(values).then(toast.success("Yetenek bilgisi güncellendi!"));
      },
    })


    useEffect(()=>{
      abilityService.getAbilities().then(result=>setAbilities(result.data.data))
    },[])

    const abilityOption = abilities.map((ability, index) => ({
      key: index,
      text: ability?.abilityName,
      value: ability?.id,
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
              positive
              style={{ marginBottom: ".5em", marginRight: ".5em" }}
            >
              <Icon name="pencil"></Icon>Düzenle
            </Button>
          }
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
        >
          <Modal.Header>Yetenek Güncelle</Modal.Header>
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
                </GridColumn>
                <GridColumn width={14}>
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
