import React, { useState, useEffect } from "react";
import CityService from "../services/CityService";
import { Dropdown } from "semantic-ui-react";

export default function CityFilter({onSelect}) {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  },[]);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
 
  return (
    <div>
      <Dropdown
        clearable
        item
        placeholder="Şehir Seçiniz"
        selection
        search
        options={cityOption}
        onChange={handleChange}
      />
    </div>
  );

  function handleChange(event,data){
    onSelect(data.value)
      }
}
