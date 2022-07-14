import { Avatar, Divider, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"


const Comments = () => {
  return (
        <div style={{margin:'10px 0'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <Avatar>T</Avatar>
            <Divider orientation='vertical' sx={{height:23, margin:'0 5px'}}  />
            <Typography>UserName <br/> replying to @toymat</Typography>
            </Box>
            <Container>
                <Typography>I completely agree with you Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus incidunt eligendi hic aspernatur vero similique illum, magni alias ipsum, laboriosam sed eos corrupti enim minima. Doloremque dicta </Typography>
                <Divider />
            </Container>
        </div>
  )
}

export default Comments