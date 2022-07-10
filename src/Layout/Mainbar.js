import { AddComment, Comment, ExpandMore, ExpandMoreOutlined, FavoriteOutlined, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Divider, IconButton, Typography } from '@mui/material'
import { purple, red } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Mainbar = () => {

  const [like, setLike] = useState(false)



  return (
    <Container className='mainbar'>
      <Box sx={{display:'flex'}}>
        <Avatar  >T</Avatar>
        <Box>
          <Typography>UserNAme</Typography>
          <Divider/>
          <Typography>useremail</Typography>

        </Box>
      </Box>
        
    </Container>
  )
}

export default Mainbar