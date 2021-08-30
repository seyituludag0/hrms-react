import React, { useState, useEffect} from "react";
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
    Dropdown,
    Input
  } from "semantic-ui-react";
  import SocialMediaService from "../../../services/SocialMediaService";


export default function SocialMediaUpdate({socialMedia}) {
 
    const [open, setOpen] = useState(false)
    const [linkTypes, setLinkTypes] = useState([])
    const [candidateSocialMedias, setCandidateSocialMedias] = useState([])

    const formik = useFormik({
      initialValues: {
        id:socialMedia?.id,
        candidateId:socialMedia?.candidate.id,
        link:socialMedia?.link,
        linkTypeId: socialMedia?.linkType.id
      },
      enableReinitialize:true,
      onSubmit: (values) => {
        console.log(values);
        let socialMediaService = new SocialMediaService();
        socialMediaService.update(values).then(result=>toast.success(result.data.message));
      },
    })

    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    };

      useEffect(()=>{
        let socialMediaService = new SocialMediaService();
        socialMediaService.getSocialMediaLinkTypes().then(result=>setLinkTypes(result.data.data))
        socialMediaService.getSocialMediaByCandidateId(1).then(result=>setCandidateSocialMedias(result.data.data))
      },[])
      
      
        const linkTypeOption = linkTypes.map((linkType, index) => ({
          key: index,
          text: linkType?.linkType,
          value: linkType?.id,
        }));

      return (
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <Icon
                floated="right"
                primary
                style={{ marginBottom: "0.5em", marginRight: "0.5em", height:"2rem", marginTop:"6px", marginLeft:"6px", fontSize:"1.3rem", color:"black" }}
              >
                <Icon name="pencil"></Icon>
              </Icon>
            }
            
            style={{height:"35rem", marginLeft:"23rem", marginTop:"17rem"}}
          >
            <Modal.Header>Sosyal Medya Hesap Bilgilerini Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={formik.handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
         
                      
            <Grid stackable>
                <GridColumn width={7}>
                <Form.Field>
                    <label>Url Link</label>
                    <Input
                      name="link"
                      placeholder="site Adı"
                      value={formik.values.link}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.link && formik.touched.link && (
                      <Label basic color="red" pointing>
                        {formik.errors}
                      </Label>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Sosyal Medya Sitesi</label>
                    <Dropdown
                    name="linkTypeId"
                      clearable
                      item
                      placeholder="Sosyal Medya Sitesi"
                      search
                      selection
                      value={formik.values.linkTypeId}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "linkTypeId")
                      }
                      onBlur={formik.onBlur}
                      id="linkTypeId"
                      options={linkTypeOption}
                    />
                    {formik.errors.linkTypeId &&
                      formik.touched.linkTypeId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.linkTypeId}
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
      )
}
