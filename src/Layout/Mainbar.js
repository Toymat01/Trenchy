import { Box} from '@mui/material'
import Feeds from '../components/Feeds'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';

import { useStyle } from './Style'

const Mainbar = () => {
  const classes = useStyle()



  return (
              <Box className={classes.page} sx={{position:'relative'}}>
                <Feeds />
                <SpeedDial
                  ariaLabel="SpeedDial openIcon example"
                  sx={{ position: 'fixed', bottom:45, right:5,  '& .MuiFab-primary': { backgroundColor: '#9d8466', color: 'white' } }}
                  icon={<SpeedDialIcon openIcon={<EditIcon />}  />}
                >
                </SpeedDial>
              </Box>        
  )
}

export default Mainbar