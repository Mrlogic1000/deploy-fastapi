import { Box, Modal, Stack, styled, Typography } from '@mui/material';
import React from 'react'


const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
export default function CustomModal({children,open,close}) {
  return (
    
        <StyleModal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box
         bgcolor={"background.default"}
         color={"text.primary"}
         width={400}
         
         borderRadius={5}
         p={3}
        >
        <Typography
        variant="h6"
        fontWeight={100}
        color="gray"
        textAlign="center"
        >
            New Device

        </Typography>
        
        {children}
        
        </Box>
        
      </StyleModal>
        
    
  )
}
