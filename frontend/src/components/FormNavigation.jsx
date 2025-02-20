import { Button, Stack } from '@mui/material'
import React from 'react'

export default function FormNavigation({hasPrevious,onBackClick,isLastStep}) {
  return (
    <Stack direction='row' gap={5} sx={{marginTop:'20px'}}>
        {hasPrevious && (
            <Button variant='contained' type='button' onClick={onBackClick}>Previous</Button>
        )}
        <Button type='submit' variant='contained' color='primary'>{isLastStep?"Submit":"Next"}</Button>
    </Stack>
  )
}
