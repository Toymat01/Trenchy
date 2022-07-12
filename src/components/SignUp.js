import { AppRegistration, Lock } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const SignUp = () => {
  return (
      <Container>
        <Stack spacing={2} sx={{marginTop:10}}>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Lock />
            <Typography variant='h5' component="div">Register</Typography>
          </Box>
          <TextField  label="Name"  />
          <TextField label="Email" type="email" />
          <TextField label="password" type="password" />
          <Button variant='contained' color="appbarColor" sx={{color:"white"}}>Register</Button>
        </Stack>
      </Container>
  )
}

export default SignUp