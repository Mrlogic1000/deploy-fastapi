import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { deleteDevice } from '../utilities/api'

export default function CustomAlert({close,open,data}) {
  return (
    <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alert!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the device?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          
          <Button onClick={()=>{
            deleteDevice(data)
            window.location.reload('')
            }} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  )
}
