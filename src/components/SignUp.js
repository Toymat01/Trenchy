import {  Lock } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, {  useState } from 'react'

const SignUp = () => {
const [name, setName] =useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [profile, setProfile] =useState('');
const [confirmPwd, setConfirmPwd] = useState('')
const axios = require('axios');


const handleClick =() =>{
  const user = {name, password, profile, confirmPwd}
    axios.post('https://trenchy-api.herokuapp.com/auth/signup',{
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user),
        name:name,
        password:password,
        profile:profile,
        confirmPwd:'test1234'
    })
    .then((res) =>console.log(res))
}
  return (
      <Container>
        <Stack spacing={2} sx={{marginTop:10}}>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Lock />
            <Typography variant='h5' component="div">Register</Typography>
          </Box>
          <TextField  label="Name"  value={name} onChange={(e) =>setName(e.target.value)}/>
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant='contained' color="appbarColor" sx={{color:"white"}} onClick={() => handleClick(email,password,name)}>Register</Button>
        </Stack>
      </Container>
  )
}

export default SignUp