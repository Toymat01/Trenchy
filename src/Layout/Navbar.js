import {  AccountBox, AccountCircle,  Feed,   Home, Message, PostAdd, Save, Settings,  SpaRounded, } from "@mui/icons-material"
import { AppBar,  Avatar,  Box,  Divider,Drawer,IconButton,    List,    ListItem,    ListItemIcon,    ListItemText,    MenuItem,   MenuList,   Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { useStyle} from "./Style"
import { useNavigate } from "react-router-dom"




const accountMenu =[
  {
    name:'Profile',
    path:'/profile',
  },
  {
    name:'Sign Up',
    path:'/signup',
  },
  {
    name:'Login',
    path:'/login',
  }
]

const Navbar = ({children}) => {

  const [profileOpen, setProfileOpen] = useState(false)
  const classes = useStyle();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
 
  const handleDrawerOpen = () =>{
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }


  const drawerItems =[
    {
      name:'Profile',
      path:'/profile',
      icon:<AccountBox />
    },
    {
      name:'Feeds',
      path:'/',
      icon:<Feed />
    },
    {
      name:'Message',
      path:'/',
      icon:<Message />
    },
    {
      name:'Saved Posts',
      path:'/',
      icon:<Save />
    },
    {
      name:'Settings',
      path:'/',
      icon:<Settings />
    },

  ]



   

  return (
        <>
              <AppBar  position="fixed"  sx={{ top: 'auto', bottom: 0, }} color="footerColor">
                <Toolbar  className={classes.footer}>
                    <Box >
                        <IconButton color="inherit" onClick = {()=> navigate('/')}>
                          <Home/>
                        </IconButton>
                        <IconButton color="inherit">
                          <PostAdd />
                        </IconButton>
                        <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-haspopup={profileOpen ? "true" : "false"} 
                          color="inherit"
                          onClick={() => setProfileOpen((prev) =>!prev)}
                        >
                          <AccountCircle />
                        </IconButton>
                        <Box className={profileOpen ? classes.profileOpen : classes.profileClose}>
                            {accountMenu.map(item => (
                              <MenuList key={item.name} onClick={()=> navigate(item.path)}>
                                <MenuItem>{item.name}</MenuItem>
                              </MenuList>
                            ))}
                        </Box>
                      </Box> 
                  </Toolbar>
                </AppBar>
                <AppBar color="appbarColor" elevation={0}>
                  <Toolbar className={classes.appbar}>
                      <IconButton onClick={handleDrawerOpen}>
                        <SpaRounded sx={{color:"white"}}/>
                      </IconButton>
                      <Box sx={{flexGrow:1}}/>
                        <Typography sx={{fontFamily:'cursive'}}>TRENCHY</Typography>
                  </Toolbar>
                </AppBar>
                <Drawer 
                  variant="temporary"
                  edge="left"
                  onClose={handleDrawerClose}
                  open={open}
                  sx={{
                    '& .MuiDrawer-paper':{width:250, boxSizing:'border-box'}, 
                  }}
                  classes={{paper:250}}
                >
                <Box sx={{padding:3}}>
                  <Avatar src="/img/cartoon.jpeg"/>
                  <Typography>user Name</Typography>
                  <Typography variant="p" component="p">@user</Typography>
                </Box>
                <Divider />
                <List>
                    {drawerItems.map((item) => (
                      <ListItem key={item.name} button onClick={() => navigate(item.path)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                      </ListItem>
                    ))}
                </List>
              </Drawer>
              <Box className={classes.page}>
                {children}
              </Box>
         </>
  )
}

export default Navbar