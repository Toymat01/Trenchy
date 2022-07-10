import { purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles"
import { createTheme } from '@mui/system';



const { palette} = createTheme();
const theme = createTheme({
  palette: {
   main:palette.purple
  },
});

const useStyle = makeStyles((theme) =>{
  return{
    profileOpen:{
      display:'block', 
      background:"black",
      border:"2px solid black",
      borderRadius:"10px",
      position:"absolute",
      right:20,
      top:-100
    },
    profile:{
      position: 'fixed',
      width: 200,
      top: '80%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
      p: 1,
      backgroundColor: 'black',
      borderRadius:6,
    },
    profileClose:{
      display:'none',
      transition:"ease 0.5s"
    }, 
    menu:{
        display:'none'
    },
    page:{
      width:'100%',
      padding:"70px",
      marginTop:"60px"

    }, 
    layout:{
      backgroundColor:"#817c7f"
    },
    appbar:{
      background:purple,
      color:'#fff', 
    }

  }
})




  export{useStyle, theme};