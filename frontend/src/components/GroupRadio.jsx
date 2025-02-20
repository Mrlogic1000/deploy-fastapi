import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function GroupRadio({ options, aria, name, direction, title }) {
  const rgroup = options.map((option, index) => (
    
      <FormControlLabel
      key={index}
        name={option.name}
        value={option.value}
        control={<Radio />}
        label={option.label}
      />
    
  ));
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup row={direction} aria-labelledby={aria} name={name}>
      {rgroup}
      </RadioGroup>
    </>
  );
}
