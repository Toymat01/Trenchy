import { Box, Container } from "@mui/system"
import { IconButton, Modal, Paper, TextField } from "@mui/material"
import { MusicNote, Photo, Send, VideoCameraFront } from "@mui/icons-material"
import { useStyle } from "../Layout/Style"
import axios from "axios"
import { useState } from "react"
import useToken from "./useToken"



  // const axios = require('axios')
const ModalComponent = ({handleModalClose,modal}) => {
    const classes = useStyle()
    const [post, setPost] = useState('')
    const {token } = useToken()


    const handleSubmit = () => {
      axios.post('https://trenchy-api.herokuapp.com/post/write/',{
        body:JSON.stringify(post),
        post:post,
        header:{'Authorization': `Bearer ${token}`}
      })
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
    }
  return (
    <Container>
           <Modal
            open={modal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
         <Paper className={classes.modal}>
          <TextField placeholder="Dig a trench" fullWidth multiline rows={10} variant='standard' onChange={e => setPost(e.target.value)}/>
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
            <IconButton onClick={handleSubmit} >
              <Send />
            </IconButton>
          </Box>
         </Paper>          
      </Modal>
    </Container>
  )
}
export default  ModalComponent