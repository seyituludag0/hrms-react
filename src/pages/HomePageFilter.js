import React, { useState, useEffect } from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import JobTitleService from '../services/JobTitleService';
import WorkTypeService from '../services/WorkTypeService';
import CityService from '../services/CityService';
import JobPostingService from '../services/JobPostingService';

import { Button, Header, Image, Modal, Dropdown, Form } from "semantic-ui-react";

export default function FilterJobPosting({ handleOnFilter }) {

  const [open, setOpen] = useState(false)

  // const jobPostingSchema = Yup.object().shape({
  //   aramaMetni: Yup.string().min(2).max(25).required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  // });

  let jobPostingService = new JobPostingService();
  const formik = useFormik({
    initialValues: {
      aramaMetni : undefined,
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

  useEffect(() => {
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();

    
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
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


  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
  <div>
   
   
   <div className="ftco-search" style={{ width: "60rem" }}>
    <div className="row">
      <div className="col-md-12 nav-link-wrap">
        <div
          className="nav nav-pills text-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active mr-md-1"
            id="v-pills-1-tab"
            data-toggle="pill"
            role="tab"
            aria-controls="v-pills-1"
            aria-selected="true"
          >
            Haydi İş Aramaya Başlayalım
          </a>
        </div>
      </div>
      <div className="col-md-12 tab-wrap">
        <div className="tab-content p-4" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-1"
            role="tabpanel"
            aria-labelledby="v-pills-nextgen-tab"
          >
            <form action="#" className="search-job">
              <div className="row no-gutters">
                <div className="col-md mr-md-2">
                  <div className="form-groupx">
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-briefcase" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="örn: Web Developer"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md mr-md-2">
                  <div className="form-groupx">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md mr-md-2">
                  <div className="form-groupx">
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      
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
  
                    </div>
                  </div>
                </div>
                {/* <div className="col-md">
                  <div className="form-groupx">
                    <div className="form-field">
                      <button
                        type="submit"
                        className="form-control btn btn-secondary"
                      >
                        xxAxra
                      </button>
                    </div>
                  </div>
                </div> */}

              </div>
            </form>
          </div>
          </div>
      </div>
    </div>
     </div>
  
        
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="btn btn-secondary">Ara</Button>}
    >
      <Modal.Header>Filtrelediğiniz İş İlanları</Modal.Header>
      <Modal.Content>
        
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Kapat
        </Button>
       
      </Modal.Actions>
    </Modal>


    </div>

  )
}