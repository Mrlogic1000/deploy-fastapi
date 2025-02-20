import React from 'react'
import MultiStepFormik, { FormStep } from './MultiStepFormik'
import InputField from './InputField'
import * as yup from 'yup'
import MyCheckbox from './MyCheckBox'
import MySelect from './MySelect'
import { postDevice } from '../utilities/api'

export default function MultiSTepForm() {
  const identity = yup.object({
    name:yup.string()
    .required('The identity is required'),   
    location:yup.string()
    .required('The location is required'),  
   
  })
  const details = yup.object({
    model:yup.string()
    .required('Name is required'), 
    mac:yup.string()
    .required('Name is required'),
    type:yup.string()
    .required('Name is required'),
    serial_no:yup.string()
    .required('Name is required'),
   
  })
  const status = yup.object({   
    install:yup.string()
    .required('Name is required'),
    status:yup.string()
    .required('Name is required'),
  })
 
  return (
  
      <MultiStepFormik
       initialValues={{
        name: "",
        model: "",
        location:'',
        mac:'',
        type:'',
        serial_no:'',
        status:'',
        install:'',
      }}
      onSubmit={(values)=>{
        postDevice(values)
        window.location.reload()
      }}
      >
        <FormStep
        stepName='Identity'
        validationSchema={identity}
        // onSubmit={(values)=>console.log(values)}
        >
        <InputField  name='name' label='Name' />
        <InputField  name='location' label='Location' />       
        {/* <MySelect name='area' label='Areas' options={[{value:'yes',label:'Yes'}]}/> */}

        </FormStep>
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
        <FormStep
        stepName='Details'
        validationSchema={details}
        // onSubmit={(values)=>console.log(values)}
        >
        <InputField name='mac' label='MAC' />
        <InputField  name='model' label='Model' /> 
        <InputField  name='type' label='Type' /> 
        <InputField  name='serial_no' label='Serial Nunmber' />
        </FormStep>

        <FormStep
        stepName='Status'
        validationSchema={status}
        // onSubmit={(values)=>console.log(values)}
        >
        <InputField name='install' label='Install' />
        <InputField name='status' label='Working' />

        </FormStep>

        
        {/* <FormStep
        stepName='Network'
        onSubmit={()=>console.log('step 1 submit')}
        validationSchema = {validationSchema}
        >
        <InputField  name='port' label='Name' />
        <InputField  name='ip' label='Model' />

        </FormStep> */}

        
      
      </MultiStepFormik>

  )
}
