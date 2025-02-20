import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export default function InputField({name,...otherprops}) {  
  const [field, meta ] = useField(name)
  const configInput = {
    fullWidth:true ,  
    ...field ,
    ...otherprops,
    

  }

  if(meta && meta.touched && meta.error){
   configInput.error = true
    configInput.helperText  = meta.error
  }
  
 
  return (
 <>
 
 <TextField 
   sx={{marginTop:'20px'}}
   {...configInput}
  
   />
 
 </>
  )
}
