import { Autorenew,  CommentOutlined,  Favorite,  Send } from '@mui/icons-material'
import {  Avatar, Divider, IconButton,  InputBase,  Typography} from '@mui/material'
import { Container,Box  } from '@mui/system'
import React from 'react'
import { useStyle } from '../Layout/Style'
import Comments from './Comments'


const FeedContent = () => {
const classes = useStyle()


  return (
    <Container className={classes.feedPage}>
        <Box sx={{ display:'flex', marginTop:'5px', position:'fixed', bottom:55.5, background:'white',width:'100%', left:0, right:0, zIndex:1}}>
             <InputBase   placeholder='Dig your reply' className={classes.feedInput} multiline  />
            <IconButton >
               <Send/>
            </IconButton>
        </Box>
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Avatar>U</Avatar>
          <Divider orientation='vertical' sx={{height:23, margin:'0 5px'}}  />
          <Typography>UserName</Typography>
        </Box>
        <Box sx={{margin:'10px'}} >
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia sequi exercitationem reiciendis doloremque corporis iste labore, quasi provident blanditiis nobis quisquam fugit hic dolorem nesciunt corrupti ab eum ducimus facilis ipsum. Tempore neque nam odit praesentium maxime, excepturi similique!</Typography>
          <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident modi, dolore eligendi amet laudantium quisquam dolorum sed? Minima esse beatae praesentium similique quas voluptatum magnam fuga tempore, dicta asperiores saepe.</Typography>
          <img src='/img/iphone.jpg' alt='iphone' style={{height:'300px', marginTop:5, borderRadius:'10px', width:'100%'}}/>
        </Box>
        <Divider />
          <IconButton>
            <CommentOutlined />
            <Typography>7 comments</Typography>
          </IconButton>
          <IconButton>
           <Favorite />
           <Typography>5 likes</Typography>
          </IconButton>
          <IconButton>
            <Autorenew />
            <Typography>5 quotes</Typography>
          </IconButton>
        <Divider />
       <Box sx={{margin:'10px 0'}}>
        <Comments />
        <Comments />
       </Box>
    </Container>
  )
}

export default FeedContent