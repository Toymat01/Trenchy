import {  Lock } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
const [name, setName] =useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPwd, setConfirmPwd] = useState('')
const navigate = useNavigate()
const axios = require('axios');


const handleClick =() =>{
  const user = {name, password, confirmPwd, email}
    axios.post('https://trenchy-api.herokuapp.com/auth/signup',{
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user),
        name:name,
        password:password,
        email:email,
        confirmPwd:confirmPwd,
    })
    .then(() =>{
        navigate('/login')
    })
    .catch((err) => alert(err.message))
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
          <TextField label="confirm password" type="password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />
          <Button variant='contained' color="appbarColor" sx={{color:"white"}} onClick={handleClick}>Register</Button>
        </Stack>
      </Container>
  )
}

export default SignUp