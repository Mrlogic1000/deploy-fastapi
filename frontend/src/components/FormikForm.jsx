import { Form, Formik } from 'formik'
import React from 'react'
import InputField from './InputField'
import { Button, Stack } from '@mui/material'

export default function FormikForm({inputs,initialValues,schema,closeDia}) {
  return (
    <div>
        <Formik 
         initialValues={{
          name:'',
          type:'',
          neigbor:'',
          comment:''
         }}
        //  validationSchema={step.props.validationSchema}
         onSubmit={()=>console.log('working')}
      >
        {(formik)=>(<Form>
            {inputs.map((input,key)=>(
                <InputField key={key} name={input.name} label={input.label} />
            ))}
          
          <Stack direction='row' justifyContent='space-between' margin={2}>
            <Button type="submit" variant="contained">Save</Button>
            <Button onClick={()=>closeDia} variant="contained">Cancel</Button>
            </Stack>
            
       
        </Form>)}
        </Formik>
    </div>
  )
}
