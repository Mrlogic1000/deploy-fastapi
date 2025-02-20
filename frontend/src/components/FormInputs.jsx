import React from 'react'

export default function FormInputs(props) {
  return (
    <TextField required id={props.id} name={props.name} placeholder={props.placeholder} onChange={props?.onChange} fullWidth variant="outlined" />
  )
}
