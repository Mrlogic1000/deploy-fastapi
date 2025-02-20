import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

function Rightbar() {
  const avatars = [{ img: 1 }, { img: 2 }];
  const av = 1;
  return (
    <Box flex={2} p={2} bgcolor={"background.default"} color={"text.primary"} sx={{display:{ xs:"none", sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friend
        </Typography>

        <AvatarGroup max={7}>
          {avatars.map((av, index) => (
            <Avatar
              alt="Remy Sharp"
              src={require("../static/images/avatar/1.jpg")}
            />
          ))}

          <Avatar alt="Remy Sharp" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Travis Howard" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Cindy Baker" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Agnes Walker" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Trevor Henderson" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Trevor Henderson" src={require("../static/images/avatar/1.jpg")} />
          <Avatar alt="Trevor Henderson" src={require("../static/images/avatar/1.jpg")} />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Picturs</Typography>
        <ImageList cols={3} rowHeight={100}>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/1.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/img.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/1.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/img.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/1.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        <ImageListItem>
      <img       
        src={require("../static/images/avatar/img.jpg")}
        alt=""
        loading="lazy"
      />
    </ImageListItem>
        </ImageList>


        <Typography variant="h6" fontWeight={100} mt={2} >Latest Conversation</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={require("../static/images/avatar/img.jpg")} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={require("../static/images/avatar/img.jpg")} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  );
}

export default Rightbar;
