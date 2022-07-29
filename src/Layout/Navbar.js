import {  AccountBox, AccountCircle,  Feed,   Home,  PostAdd,   SpaRounded, } from "@mui/icons-material"
import { AppBar,  Avatar,  Box,  Divider,Drawer,IconButton,    List,    ListItem,    ListItemIcon,    ListItemText,    MenuItem,   MenuList,   Toolbar, Typography } from "@mui/material"
import {  useState } from "react"
import { useStyle} from "./Style"
import { useNavigate } from "react-router-dom"
import useToken from "../components/useToken"



// Menu items
const accountMenu1 =[
  {
    name:'Sign Up',
    path:'/signup',
  },
  {
    name:'Login',
    path:'/login',
  }
]
const accountMenu2 = [
  {
    name:'Logout',
  }
]

const drawerItems =[
  {
    name:'Profile',
    path:'/dashboard',
    icon:<AccountBox />
  },
  {
    name:'Feeds',
    path:'/posts',
    icon:<Feed />
  },
]




const Navbar = ({children}) => {

  const [profileOpen, setProfileOpen] = useState(false)
  const classes = useStyle();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const {token, removeToken} = useToken();
  const reload = () => { window.location.reload() }
 
  const handleDrawerOpen = () =>{
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    removeToken();
    navigate('/dashboard')
    reload();
  }
  
  return (
        <>
              <AppBar  position="fixed"  sx={{ top: 'auto', bottom: 0,}} color="footerColor"> 
                <Toolbar className={classes.footer}>
                    <Box className={!token ? classes.menu : null}>
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
                            {accountMenu1.map(item => (
                              <MenuList key={item.name} onClick={()=> navigate(item.path)} className={token ? classes.menu : null}>
                                <MenuItem>{item.name}</MenuItem>
                              </MenuList>
                            ))}
                            {accountMenu2.map(item => (
                              <MenuList key={item.name} onClick={handleLogout} className={!token ? classes.menu : null}>
                                <MenuItem>{item.name}</MenuItem>
                              </MenuList>
                            ))}
                        </Box>
                      </Box> 
                  </Toolbar>
                </AppBar>
                <AppBar color="appbarColor" elevation={0} >
                  <Toolbar className={classes.appbar}  >
                      <Box  className={!token ? classes.menu : null}>
                        <IconButton onClick={handleDrawerOpen} >
                          <SpaRounded sx={{color:"white"}}/>
                        </IconButton>
                      </Box>
                      <Box sx={{flexGrow:1}} />
                      <Box  className={!token ? classes.menu : null}>
                          <Typography sx={{fontFamily:'cursive'}}>TRENCHY</Typography>
                      </Box>
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