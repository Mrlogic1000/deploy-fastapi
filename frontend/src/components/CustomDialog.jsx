import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React from 'react'

export default function CustomDialog(props) {

    const {children, open, title, close} = props
  return (
    <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         {title}
        </DialogTitle>
        <Divider/>
        <DialogContent>
            {children}
        </DialogContent>
        
      </Dialog>
  )
}
