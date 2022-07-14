import { Lock } from '@mui/icons-material'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Login = () => {
  const axios = require("axios");

  useEffect(() => {
    axios.get('https://trenchy-api.herokuapp.com/')
    .then((res ) => console.log(res.data))
  },[])

  return (
       <Container>
        <Stack spacing={2} sx={{marginTop:10}}>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Lock />
            <Typography variant='h5' component="div">Login</Typography>
          </Box>
          <TextField label="Email" type="email" />
          <TextField label="password" type="password" />
          <Button variant='contained' color="appbarColor" sx={{color:"white"}}>Login</Button>
        </Stack>
      </Container>
  )
}

export default Login