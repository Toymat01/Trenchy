
import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles"






const theme = createTheme({
  palette: {
    appbarColor:{
      main:"#9d8466"
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
      background:"white",
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
    },
    loader:{
      display:'flex',
      height:'50vh',
      justifyContent:'center',
      alignItems:'center'
    },
    dashBoardAvatar:{
      position:'absolute',
      top:'-20px',
      width:'100%'
    },
  }
})




  export{useStyle, theme};