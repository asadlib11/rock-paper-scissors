import React from "react";
import { SelectDropdown } from "../../types";

type Props = {
  options: SelectDropdown[];
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ options, value = '', onChange }: Props) {
  return (
    <select data-testid="select" onChange={(e) => onChange(e)} value={value}>
      {options.map((data) => (
        <option value={data.value} key={`option-${data.label}`}>
          {data.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
