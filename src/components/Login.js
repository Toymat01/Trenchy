import { Lock } from '@mui/icons-material'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'
import useToken from './useToken';



 

const Login = () => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const { setToken} = useToken()


  const axios = require("axios");
  const handleClick = () =>{
    const user = {name, password}
    axios.post('https://trenchy-api.herokuapp.com/auth/signin/',{
      headers:{'Content-Type': 'application.json'},
      body:JSON.stringify(user),
      name:name,
      password:password
    })
    .then((res) =>{
      setToken(res.data.checkUser)
        navigate('/dashboard')
    })
    .catch((err) =>{
      alert('credentials does not exist')
    })
  }

  return (
       <Container>
        <Stack spacing={2} sx={{marginTop:10}}>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Lock />
            <Typography variant='h5' component="div">Login</Typography>
          </Box>
          <TextField label="Email" type="email" value={name} onChange={e => setName(e.target.value)}/>
          <TextField label="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant='contained' color="appbarColor" sx={{color:"white"}} onClick={ handleClick}>Login</Button>
        </Stack>
      </Container>
  )
}

export default Login


// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };