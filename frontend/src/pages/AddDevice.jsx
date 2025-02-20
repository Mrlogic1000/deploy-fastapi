import React from 'react'
import * as yup from 'yup'
import { postDevice } from '../utilities/api'
import MultiStepFormik, { FormStep } from '../components/MultiStepFormik'
import InputField from '../components/InputField'
import MyCheckbox from '../components/MyCheckBox'
import SinglePageForm from '../components/SinglePageForm'

export default function AddDevice() {
   const validationSchema = yup.object({
          name:yup.string()
          .required('The identity is required'),   
          location:yup.string()
          .required('The location is required'),
          model:yup.string()
          .required('Name is required'), 
          mac:yup.string()
          .required('Name is required'),
          type:yup.string()
          .required('Name is required'),
          serial_no:yup.string()
          .required('Name is required'),  
          active:yup.boolean()
          .required('Name is required'),
          status:yup.string()
          .required('Name is required'),
         
        })
       const initialValues={
                    name: "",
                    model: "",
                    location:'',
                    mac:'',
                    type:'',
                    serial_no:'',
                    status:'',
                    active:'',
                  }
 
  return (
  
      <>
      <SinglePageForm
       initialValues={{
        name: "",
        model: "",
        location:'',
        mac:'',
        type:'',
        serial_no:'',
        status:'',
        active:'',
      }}
      onSubmit={(values)=>{
        postDevice(values)
        // window.location.reload()
      }}
      />
      </>
        
        

       

        
      
      

  )
}
