import {  AccountCircle, MailOutline,  Menu,  MoreVert,  Notifications, PeopleAltOutlined } from "@mui/icons-material"
import { AppBar, Badge, Box, ClickAwayListener, Container,Divider,Drawer,IconButton,   List,   ListItem,   ListItemButton,   ListItemIcon,   ListItemText,   MenuItem,   MenuList,   Toolbar, Typography } from "@mui/material"
import Mainbar from "./Mainbar"
import Rightbar from "./Rightbar"
import { useState } from "react"
import { useStyle , theme} from "./Style"
import { ThemeProvider } from "styled-components"






const drawerWidth = 200;
const menuItems = [
  {
    name:'Login',
    icon:<AccountCircle />
  },
  {
    name:"Logout",
    icon:<AccountCircle />
  }
]




const Navbar = ({children}) => {

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false)
  const classes = useStyle();


  // handling Togglers
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () =>{
    setProfileOpen(false)
  }

   

  return (
    <Container className={classes.layout}>
     <ThemeProvider theme={theme}>
     <AppBar elevation={0} position="fixed"  sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar sx={{justifyContent:"space-between"}}>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box  sx={{position:"relative"}}>
                  <Box>
                    <IconButton color="inherit">
                        <PeopleAltOutlined/>
                      </IconButton>
                    <ClickAwayListener onClickAway={handleClick}>
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
                    </ClickAwayListener>
                  </Box>
                    <Box  className={profileOpen ? classes.profile : classes.profileClose}>
                        <MenuList >
                          <MenuItem>Profile</MenuItem>
                          <MenuItem >My account</MenuItem>
                          <MenuItem >Logout</MenuItem>
                        </MenuList>
                  </Box>
            </Box>   
          </Toolbar>
        </AppBar>
     </ThemeProvider>
      <AppBar className={classes.appbar} color="transparent">
        <Toolbar>
          <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
            >
              <Menu sx={{display:{xs:'block', sm:'none'}}}/>
              <Typography sx={{display:{xs:"none", sm:'block'}}}>TRENCHY</Typography>
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{display:{xs:"block", sm:"none"},}}>TRENCHY</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
       sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        >
        <Box >
          <List>
              {menuItems.map(menu =>(
                <ListItem key={menu.name} button>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText>{menu.name}</ListItemText>
                </ListItem>
              ))}
            </List>
        </Box>
       </Drawer>
        <Box className={classes.page}>
        {children}
        </Box>
    </Container>
  )
}

export default Navbar