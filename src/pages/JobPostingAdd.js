import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";
import WorkingTimeService from "../services/WorkingTimeService";
import WorkTypeService from "../services/WorkTypeService";
import CityService from "../services/CityService";
import JobTitleService from "../services/JobTitleService";

export default function JobPostingAdd() {
  let jobPostingService = new JobPostingService();
  const JobPostingAddSchema = Yup.object().shape({
    lastApplyDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    jobDetails: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workingTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    numberOfOpenPositions: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minWage: Yup.number().min(0, "0 Dan az olamaz"),
    maxWage: Yup.number().min(0, "0 Dan az olamaz"),
  });

  const formik = useFormik({
    initialValues: {
      lastApplyDate: "",
      jobDetails: "",
      jobTitleId: "",
      workTypeId: "",
      workingTimeId: "",
      numberOfOpenPositions: "",
      cityId: "",
      minWage: "",
      maxWage: "",
    },
    validationSchema: JobPostingAddSchema,
    onSubmit: (values) => {
      values.employerId = 2;
      jobPostingService
        .addJobPosting(values)
        .then((result) => alert(result.data.message));
    },
  });

  const [workingTimes, setWorkTimes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workingTimeService
      .getWorkingTimes()
      .then((result) => setWorkTimes(result.data.data));
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  const workingTimeOption = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.type,
    value: workingTime.id,
  }));

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
    <div>
      <div className="my-div" style={{marginLeft:"10rem", marginRight:"-3rem"}}>
        <Card fluid color="blue" header="ŞİRKETİNİZ İÇİN BİR İLAN EKLEYİN" />
        <Grid columns={2} padded>
          <Grid.Column>
            <Image src="https://res.cloudinary.com/hrms-project/image/upload/v1623695721/react-hrms/jobpostingadded_rwkb6k.jpg" />
          </Grid.Column>
          <Grid.Column>
            <div>
              <Card fluid>
                <Card.Content header="İş ilanı Ekle" />
                <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="İş Başlığı"
                        search
                        selection
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

                    <Form.Field>
                      <Dropdown
                        clearable
                        item
                        placeholder="Çalışma Süresi"
                        search
                        selection
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "workingTimeId")
                        }
                        onBlur={formik.onBlur}
                        id="workingTimeId"
                        value={formik.values.workingTimeId}
                        options={workingTimeOption}
                      />

                      {formik.errors.workingTimeId &&
                        formik.touched.workingTimeId && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.workingTimeId}
                          </div>
                        )}
                    </Form.Field>

                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            type="number"
                            placeholder="Minimum Maaş"
                            value={formik.values.minWage}
                            name="minWage"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.minWage && formik.touched.minWage && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.minWage}
                            </div>
                          )}
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            type="number"
                            placeholder="Maksimum Maaş"
                            value={formik.values.maxWage}
                            name="maxWage"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.maxWage && formik.touched.maxWage && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.maxWage}
                            </div>
                          )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>

                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            id="numberOfOpenPositions"
                            name="numberOfOpenPositions"
                            error={Boolean(formik.errors.numberOfOpenPositions)}
                            onChange={formik.handleChange}
                            value={formik.values.numberOfOpenPositions}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="Açık Posisyon sayısı"
                          />
                          {formik.errors.numberOfOpenPositions &&
                            formik.touched.numberOfOpenPositions && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.numberOfOpenPositions}
                              </div>
                            )}
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            style={{ width: "100%" }}
                            type="date"
                            error={Boolean(formik.errors.lastApplyDate)}
                            onChange={(event, data) =>
                              handleChangeSemantic(data.value, "lastApplyDate")
                            }
                            value={formik.values.lastApplyDate}
                            onBlur={formik.handleBlur}
                            name="lastApplyDate"
                            placeholder="Son başvuru tarihi"
                          />
                          {formik.errors.lastApplyDate &&
                            formik.touched.lastApplyDate && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.lastApplyDate}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>

                    <Form.Field>
                      <TextArea
                        placeholder="Açıklama"
                        style={{ minHeight: 100 }}
                        error={Boolean(formik.errors.jobDetails).toString()}
                        value={formik.values.jobDetails}
                        name="jobDetails"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.jobDetails &&
                        formik.touched.jobDetails && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.jobDetails}
                          </div>
                        )}
                    </Form.Field>
                    <Button
                      content="Ekle"
                      labelPosition="right"
                      icon="add"
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
      </div>
    </div>
  );
}
