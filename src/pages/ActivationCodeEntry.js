import React from "react";
import ActivationCodeService from "../services/ActivationCodeService"
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Card,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";


export default function ActivationCodeEntry() {
  const history = useHistory();
    const activationCodeScheme = Yup.object().shape({
        code: Yup.string().required(
          "Bu alan boş geçilemez. Lütfen doldurunuz"
        ),
      });

      let activationCodeService = new ActivationCodeService();
      const formik = useFormik({
        initialValues: {
          code: ""
        },
        validationSchema: activationCodeScheme,
        onSubmit: (values) => {
            console.log(values);
            activationCodeService
            .activationCodeEntry(values.code)
            .then((result) => toast.success(result.data.message))
            history.push("/")
        },
      });








  return (
    <div style={{marginLeft:"15rem"}}>
      <Card.Group>
        <Card fluid color="red" header="DOĞRULAMA KODUNU GİRİNİZ" />
      </Card.Group>



        <Grid padded>
         
          <Grid.Column>
            <div>
              <Card fluid >
                <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                  
                  
                  <Form.Field>
                    <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            id="code"
                            type="text"
                            name="code"
                            onChange={formik.handleChange}
                            value={formik.values.code}
                            onBlur={formik.handleBlur}
                            placeholder="Doğrulama Kodu"
                          />
                          {formik.errors.code &&
                            formik.touched.code && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.code}
                              </div>
                            )}
                        </Grid.Column>
                    </Form.Field>



                    <Button
                      content="Gönder"
                      labelPosition="right"
                      icon="send"
                      primary
                      type="submit"
                      style={{ marginLeft: "20px" }}
                    />
                  </Form>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid>
      







  {/*     <Card.Group>
    <Card fluid>
      <Card.Content>
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group> */}
    </div>
  );
}
