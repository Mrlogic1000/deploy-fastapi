import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import styled from "styled-components";
import img from "../static/images/avatar/1.jpg";

// -----------------------------------------------------------

function Add() {
  const [open, setOpen] = useState(false);
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={(e) => setOpen(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          height={280}
          borderRadius={5}
          p={3}
        >
          <Typography
            variant="h6"
            fontWeight={100}
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar alt="Remy Sharp" src={img} sx={{ width: 24, height: 24 }} />
            <Typography variant="span">Mrlogic</Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            fullWidth
            multiline
            rows={4}
            placeholder="What is on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={2} mt={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
}

export default Add;
