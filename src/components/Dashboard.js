import { Refresh } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useToken from './useToken';



const Dashboard  = () => {
  const [user, setUser] = useState(null)
  const {getToken, token, removeToken} =useToken()
  const reload = () => { window.location.reload() }
const handleLogout = () => {
  removeToken();
  reload();
}

    useEffect(() => {
      if(token){
        getToken(token)
        const user = token
        setUser(user)
      }
    },[]);
    if(user){
      return (
          <div>
            <Typography>welcome {user.name}</Typography>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
    )
    }else{
      return(
        <div>
          <Typography>No user has logged in</Typography>
        </div>
      )
    }
}

export default Dashboard 