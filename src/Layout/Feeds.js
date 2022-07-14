import { AutorenewOutlined,  CommentOutlined, FavoriteOutlined, MusicNote, Photo,  Send,  VideoCameraFront } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStyle } from './Style'
import { useParams } from 'react-router-dom'

const Feeds = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  const {id} = useParams()

  const [modal, setModal] = useState(false)

  const handleModalOpen = () => {
    setModal(true)
  }
  const handleModalClose = () =>{
    setModal(false)
  }

  return (
    <div>
      <Box > 
        <Card sx={{borderRadius:6, margin:'10px 0'}} >
        <div onClick={() => navigate(`/feeds/${id}`)}>
            <CardHeader 
              title="How to be Good"
              subheader="september 13 2022"
              avatar={<Avatar>T</Avatar>}
            />
            <CardMedia image='/img/iphone.jpg' component="img" height="190" />
            <CardContent>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ad delectus minima odio. Assumenda commodi ad impedit omnis hic atque, nemo saepe pariatur. Odio corrupti reprehenderit culpa ipsa? Nemo, error!</Typography>
            </CardContent>
        </div>
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
      </Box>
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