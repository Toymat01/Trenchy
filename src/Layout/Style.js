
import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles"





const theme = createTheme({
  palette: {
    appbarColor:{
      main:"#5b6260"
    },
    footerColor:{
      main:"#fdfffc"
    }
  },
});

const useStyle = makeStyles((theme) =>{
  return{
    profileOpen:{
      display:'block', 
      border:"2px solid white",
      borderRadius:"10px",
      position:"absolute",
      background:"white",
      bottom:-20,
      left:0
    },
    profileClose:{
      display:'none',
    }, 
    menu:{
        display:'none'
    },
    page:{
      width:'100%',
      margin:"60px auto",
      maxWidth:"500px",
    }, 
    appbar:{
        color:"#fdfffc",
        justifyContent:"center"
    },
    footer:{
        justifyContent:"center",
        color:'#5b6260'
    },
    feeds:{
      background:"white",
      margin:"0 auto",
    },
    userInfo:{
      display:"flex",
      alignItems:"center"
    },
    paper:{
      background:'#f6f7f8',
      position:'fixed',
      height:'100%',
      width:'100px',
      left:0,
      top:50,
      padding:20
    },
    modal:{
      position:'absolute',
      top:'60%',
      left:0,
      width:'100%',
      boxShadow:24,
      padding:'10px 0',
    },
    feedPage:{
      width:'100%',
      marginTop:'60px',
      marginBottom:'100px',
      maxWidth:"500px",
    }, 
    feedInput:{
      width:'340px', 
      border:'solid 2px #fff5e7',
      borderRadius:'20px',
      padding:'5px'
    }
  }
})




  export{useStyle, theme};