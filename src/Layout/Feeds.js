import { AutorenewOutlined,  CommentOutlined, FavoriteOutlined, MusicNote, Photo,  Send,  VideoCameraFront } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStyle } from './Style'
import useToken from '../components/useToken'

const axios = require('axios')

const Feeds = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  const[posts, setPosts] = useState(null);
  // const [isLoading, setIsLoading] = useState(false)
  const {token} = useToken()
 
  // handling modals
  const [modal, setModal] = useState(false)
  const handleModalOpen = () => {
    setModal(true)
  }
  const handleModalClose = () =>{
    setModal(false)
  }

  // fetching posts
  useEffect(() => {
 if(token){
  axios.get('https://trenchy-api.herokuapp.com/post/posts/',{
    headers:{'Authorization':`Bearer ${token}`}
  })
  .then(res => {
    setPosts(res.data.data)
  })
  .catch(err => {console.log(err.message)})
 }
  },[token])

  if(!posts){
    return(<Typography>Fetching Posts...</Typography>)
  }

  return (
    <div>
      <Box > 
      {posts && posts.map(post => ( 
        <Card sx={{borderRadius:6, margin:'10px 0'}}  key={post._id}>
                  <div  key={post.modified_date} onClick={() => navigate(`/posts/${post._id}`)}>
                      <CardHeader 
                        title={post.writer}
                        subheader={post.modified_date}
                        avatar={<Avatar>T</Avatar>}
                      />
                      <CardMedia image='/img/iphone.jpg' component="img" height="190" />
                      <CardContent>
                        <Typography>{post.post}</Typography>
                      </CardContent>
                  </div>
              <CardActions>
                <IconButton >
                  <FavoriteOutlined />
                </IconButton>
                <Typography>2</Typography>
                <IconButton>
                  <AutorenewOutlined/>
                </IconButton>
                <Typography>7</Typography>
                <IconButton onClick={handleModalOpen}>
                  <CommentOutlined />
                </IconButton>
                <Typography>5</Typography>
              </CardActions>
            </Card>
      ))}     
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