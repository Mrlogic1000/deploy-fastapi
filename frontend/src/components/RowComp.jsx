import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function RowComp({text, value}) {
  return (
    <Stack  direction='row' spacing={2} justifyContent='space-between' padding={1}>
  
   <Typography  variant='span'>{text}</Typography>
   <Typography sx={{fontWeight:'bold'}}  variant='span' textAlign='right' >
    {value?.toLocaleUpperCase()}
    </Typography>
   
  </Stack>  )
}
