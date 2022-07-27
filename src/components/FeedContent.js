import { Autorenew,  CommentOutlined,  Favorite,  Send } from '@mui/icons-material'
import {  Avatar, Divider, IconButton,  InputBase,  Typography} from '@mui/material'
import { Container,Box  } from '@mui/system'
import { useParams } from 'react-router-dom'
import { useStyle } from '../Layout/Style'
import useFetch from '../useFetch'
import Comments from './Comments'


const FeedContent = () => {
  const classes = useStyle()
  const {id} = useParams()
  const {post,isLoading, error} = useFetch(`https://trenchy-api.herokuapp.com/post/`+id)


    return (
      <Container className={classes.feedPage}>
          <Box sx={{ display:'flex', marginTop:'5px', position:'fixed', bottom:55.5, background:'white',width:'100%', left:0, right:0, zIndex:1}}>
              <InputBase   placeholder='Dig your reply' className={classes.feedInput} multiline  />
              <IconButton >
                <Send/>
              </IconButton>
          </Box>
            {isLoading && <Typography>Fetching post...</Typography>}
            {error && <Typography>{error}</Typography>}
            {post && (
              <>
                <Box sx={{display:'flex',alignItems:'center'}}>
                  <Avatar>{post.writer[0]}</Avatar>
                  <Divider orientation='vertical' sx={{height:23, margin:'0 5px'}}  />
                  <Typography>{post.writer}</Typography>
                </Box>
                <Box sx={{margin:'10px'}} >
                  <Typography>{post.post}</Typography>
                  <img src='/img/iphone.jpg' alt='iphone' style={{height:'300px', marginTop:5, borderRadius:'10px', width:'100%'}}/>
                </Box>
              </>
            )}
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

export default FeedContent;