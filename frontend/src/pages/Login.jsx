import React from 'react'
import CustomForm from '../components/CustomForm'
import { Box, Stack, Typography } from '@mui/material'
import Header from '../components/Header'

function Login() {
  return (
   <Box sx={{height:'100vh', backgroundColor:'blue'}}>
    <Header/>
    <Stack height='100%' direction='row' sx={{backgroundColor:"yellow"}} justifyContent="space-between">
      <Box  bgcolor='green' flex={1}>
        <Typography variant='h1'>
          Column 1

        </Typography>
      </Box>
      <Box flex={1} bgcolor='orange'>
      <Typography variant='h1'  >
          Column 3

        </Typography>
      </Box>
    </Stack>
   </Box>
  )
}

export default Login