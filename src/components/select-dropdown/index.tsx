import React from "react";
import { SelectDropdown } from "../../types";

type Props = {
  options: SelectDropdown[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ options, onChange }: Props) {
  return (
    <div>
      <select onChange={(e) => onChange(e)}>
        {options.map((data) => (
          <option value={data.value} key={`option-${data.label}`}>
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
