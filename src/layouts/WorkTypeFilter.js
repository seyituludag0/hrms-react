import React, { useState, useEffect } from "react";
import WorkTypeService from "../services/WorkTypeService";
import { Dropdown } from "semantic-ui-react";

export default function WorkTypeFilter() {

    const [workTypes, setworkTypes] = useState([]);

  useEffect(() => {
    let workTypeService = new WorkTypeService();
    workTypeService.getWorkTypes().then((result) => setworkTypes(result.data.data));
  });

  const workTypeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.type,
    value: workType.id,
  }));

    return (
        <div>
            <Dropdown
        clearable
        item
        placeholder="Çalışma Tipi Seçiniz"
        selection
        options={workTypeOption}
      />
        </div>
    )
}
