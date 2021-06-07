import React, { useEffect, useState } from "react";
import CityService from "../services/CityService";
// import { Icon, Menu, Table } from "semantic-ui-react";
import { Dropdown, Input } from "semantic-ui-react";

export default function City() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  });

  return (
    <div className="SearchCityText">
      <Dropdown
        text="Şehirlere göre filtrele"
        icon="filter"
        floating
        labeled
        button
        className="icon"
        
      >
        <Dropdown.Menu>
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header icon="location arrow" content="Şehirler" />
          <Dropdown.Menu scrolling>
            {cities.map((city) => (
              <ul key={city.id} style={{ listStyle: "none" }}>
                <li>{city.name}</li>
              </ul>
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
