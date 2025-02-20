import { ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import img from "../static/images/avatar/img.jpg"

function Page() {
  const contents = [
    {
      image:"3",
      title:"Shrimp and Chorizo Paella", subheader:"September 14, 2016", 
      content:" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like.",

        },
    {
      image:"2",
      title:"Shrimp and Chorizo Paella", subheader:"September 14, 2016", 
      content:" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like.",

        },
    {
      image:"2",
      title:"Shrimp and Chorizo Paella", subheader:"September 14, 2016", 
      content:" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like.",

        }
  ]
  return (

    <>

    {
      contents.map((content)=>(
        <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title={content.title}
      subheader={content.subheader}
    />
    <CardMedia
      component="img"
      height="194"
      image= {require('../static/images/avatar/img.jpg')}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {content.content}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Favorite />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
      
    </CardActions>
    
  </Card>

      ))
      
    }
    
    

    
    </>


  )
}

export default Page