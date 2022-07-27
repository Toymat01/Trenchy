import {  Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useToken from './useToken';
import Login from './Login'
import { Box, Container } from '@mui/system';


const axios = require('axios')
const Dashboard  = () => {
  const [user, setUser] = useState(null)
  const { token} =useToken();

// getting current user
  useEffect(() => {
      axios.get('https://trenchy-api.herokuapp.com/auth/profile',{
        headers:{'Authorization': `Bearer ${token}`}
      })
      .then((res) =>{
        setUser(res.data.this_user)
      })
      .catch((err) => console.log(err))
  },[token]);

if(!user){
  return(<Login />)
}
      return (
        <Container>
          <Stack>
            <img src = '/img/cartoon.jpeg' alt='user' />
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