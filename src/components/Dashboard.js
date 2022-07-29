import {  Avatar, Divider, Stack, Typography } from '@mui/material';
import Login from './Login'
import { Box, Container } from '@mui/system';
import useFetch from '../useFetch';
import {useStyle} from '../Layout/Style'


const Dashboard  = () => {
  const {user} = useFetch('https://trenchy-api.herokuapp.com/auth/profile')
  const classes = useStyle();

if(!user){
  return(<Login />)
}
   
return (
        <Container>
          <Stack>
            <img src='/img/iphone.jpg' alt='iphone' styles={{position:'relative', width:'100%'}}/>
            <Avatar src='/img/cartoon/jpeg' className={classes.dashBoardAvatar} />
            <Box sx={{display:'flex', alignItems:'center'}}>
             <Typography>@</Typography>
              <Typography variant='h6' componet='div'>{user.name.toUpperCase()}</Typography>
            </Box>
            <Box sx={{my:2}}>
              <Typography>FrontEnd Developer || JavaScript || REACT || Student @ FUTA</Typography>
            </Box>
            <Divider />
          </Stack>
        </Container>
      )
}

export default Dashboard