import { Autorenew, AutorenewOutlined, Comment, CommentOutlined, FavoriteOutlined, MusicNote, Photo, Redo, Replay, Send, Share, VideoCameraFront } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, InputBase, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyle } from './Style'

const Feeds = () => {
  const classes = useStyle()

  const [modal, setModal] = useState(false)

  const handleModalOpen = () => {
    setModal(true)
  }
  const handleModalClose = () =>{
    setModal(false)
  }

  return (
    <div>
      <Card sx={{borderRadius:6, margin:'5px 0'}} >
        <CardHeader 
          title="How to be Good"
          subheader="september 13 2022"
          avatar={<Avatar>T</Avatar>}
        />
        <CardMedia image='/img/iphone.jpg' component="img" height="190" />
        <CardContent>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis?</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteOutlined/>
          </IconButton>
          <Typography>3</Typography>
          <IconButton>
            <AutorenewOutlined/>
          </IconButton>
          <Typography>7</Typography>
          <IconButton onClick={handleModalOpen}>
            <CommentOutlined/>
          </IconButton>
          <Typography>5</Typography>
        </CardActions>
      </Card>
      <Divider sx={{margin:'10px 0'}}  />
      <Modal
         open={modal}
         onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
         <Paper className={classes.modal}>
          <TextField placeholder="dig your comment" fullWidth multiline rows={6} variant='standard'/>
          <Box sx={{display:'flex'}}>
            <IconButton>
              <Photo />
            </IconButton>
            <IconButton>
              <MusicNote />
            </IconButton>
            <IconButton>
              <VideoCameraFront/>
            </IconButton>
            <Box sx={{flexGrow:1}}/>
            <IconButton >
              <Send />
            </IconButton>
          </Box>
         </Paper>          
      </Modal>
    </div>
  )
}

export default Feeds;