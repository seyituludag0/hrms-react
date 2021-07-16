import React, { useState, useEffect } from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import JobTitleService from '../services/JobTitleService';
import WorkTypeService from '../services/WorkTypeService';
import CityService from '../services/CityService';
import JobPostingService from '../services/JobPostingService';

import { Grid, Button, Dropdown, Form, Input } from "semantic-ui-react";

export default function FilterJobPosting({ handleOnFilter }) {

  // const jobPostingSchema = Yup.object().shape({
  //   aramaMetni: Yup.string().min(2).max(25).required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  // });

  let jobPostingService = new JobPostingService();
  const formik = useFormik({
    initialValues: {
      aramaMetni : undefined,
      jobTitleId : undefined,
      workTypeId : undefined,
      cityId : undefined,
    },
    //  validationSchema: jobPostingSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      jobPostingService.getByFilter(values)
        .then((result) => console.log(result.data.data))
        handleOnFilter(values)
    },
    // onSubmit:(values)=>{
    //   alert(JSON.stringify(values, null, 2))
    // }
  });

  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);


  const workTypeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.type,
    value: workType.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
          
          <Grid padded className="form-xxx">
        
        <Grid.Column>
              
            <Form
             onSubmit={formik.handleSubmit}>
              <Form.Field >
              <Input
              style={{width:"14rem"}}
            name="aramaMetni"
            placeholder="Ara"
            icon="search"
            iconPosition="right"
          />
              </Form.Field>
                  <Form.Field>
                    <Dropdown
                      clearable
                      item
                      placeholder="İş Başlığı"
                      search
                      selection
                      multiple
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "jobTitleId")
                      }
                      onBlur={formik.onBlur}
                      id="jobTitleId"
                      value={formik.values.jobTitleId}
                      options={jobTitleOption}
                    />
                    {formik.errors.jobTitleId &&
                      formik.touched.jobTitleId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.jobTitleId}
                        </div>
                      )}
                  </Form.Field>

                  <Form.Field>
                    <Dropdown
                      clearable
                      item
                      placeholder="Şehir"
                      search
                      selection
                      multiple
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "cityId")
                      }
                      onBlur={formik.onBlur}
                      id="cityId"
                      value={formik.values.cityId}
                      options={cityOption}
                    />
                    {formik.errors.cityId && formik.touched.cityId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.cityId}
                      </div>
                    )}
                  </Form.Field>

                  <Form.Field>
                    <Dropdown
                      clearable
                      item
                      placeholder="Çalışma Tipi"
                      search
                      selection
                      multiple
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "workTypeId")
                      }
                      onBlur={formik.onBlur}
                      id="workTypeId"
                      value={formik.values.workTypeId}
                      options={workTypeOption}
                    />

                    {formik.errors.workTypeId &&
                      formik.touched.workTypeId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.workTypeId}
                        </div>
                      )}
                  </Form.Field>

                  <Button
                    content="Filtrele"
                    labelPosition="right"
                    icon="search"
                    primary
                    type="submit"
                    style={{ marginLeft: "20px" }}
                  />
                </Form>
              
        </Grid.Column>
      </Grid>
  
  );
}
