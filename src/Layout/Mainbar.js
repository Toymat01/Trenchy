import { Box,  Stack } from '@mui/material'
import Feeds from '../components/Feeds'

import { useStyle } from './Style'

const Mainbar = () => {
  const classes = useStyle()



  return (
            <Stack> 
              {/* <Box sx={{ position:'fixed', top:53,left:0, width:'100%', textAlign:'center', padding:'10px 0',zIndex:1, background:'#f6f7f8', }}>
                <Typography variant="h5">FEEDS</Typography>
                <Divider light={false}/>
              </Box> */}
              <Box className={classes.page}>
              <Feeds />
              </Box>
            </Stack> 
          
  )
}

export default Mainbar