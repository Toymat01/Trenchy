import { Button,  Divider,  Stack,  Typography } from "@mui/material"
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
    <Stack>
            <Box sx={{}}>
                <Typography variant="h2" sx={{margin:'30px', fontSize:50}}>Welcome</Typography>
                <Typography >Join Trenchy Today</Typography>
            </Box>
            <Box sx={{mb:'15px'}}  color='appbarColor'>
                <Button variant='contained'  color='appbarColor' sx={{margin:'5px', color:'white', borderRadius:'20px', px:10}} onClick={() => navigate('/signup')}>Register</Button>
            </Box>
            <Divider>
                or
            </Divider>
            <Box sx={{mt:'15px'}}>
                <Typography>Already have an account?</Typography>
            </Box>
            <Box>
                <Button variant='contained' sx={{margin:'5px', color:'white', borderRadius:'20px', px:10}}  color='appbarColor' onClick={() => navigate('/login')}>Login</Button>
            </Box>
            <Box sx={{mt:10}}>
                <img src='/img/trenchy.png' alt='trenchy logo' />
            </Box>
        </Stack>
   </Container>
  )
}

export default Home