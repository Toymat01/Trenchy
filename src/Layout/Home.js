import { Button,  Typography } from "@mui/material"
import { Box, Container} from "@mui/system"
import {useStyle} from './Style'
import { useNavigate } from "react-router-dom"
import useToken from '../components/useToken'
import Dashboard from '../components/Dashboard'

const Home = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const {token} = useToken();

    if(token){
        return(<Dashboard />)
    }
  return (
   <Container sx={{ textAlign:'center', py:10}} className={classes.page}>
    <Box sx={{}}>
        <Typography variant="h2" sx={{margin:'30px', fontSize:30}}>Welcome</Typography>
        <Typography variant="h4" >Join Trenchy Today</Typography>
    </Box>
    <Box sx={{my:'20px'}}  color='appbarColor'>
        <Button variant='contained'  color='appbarColor' sx={{margin:'5px', color:'white'}} onClick={() => navigate('/signup')}>Register</Button>
    </Box>
    <Box sx={{mt:10}}>
        <Typography>Already have an account?</Typography>
    </Box>
    <Box>
        <Button variant='contained' sx={{margin:'5px', color:'white'}}  color='appbarColor' onClick={() => navigate('/login')}>Login</Button>
    </Box>
    <Box sx={{}}>
        <img src='/img/trenchy.png' alt='trenchy logo' />
    </Box>
   </Container>
  )
}

export default Home