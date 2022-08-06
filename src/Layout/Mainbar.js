import { Box} from '@mui/material'
import Feeds from '../components/Feeds'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import { useStyle } from './Style'
import ModalComponent from '../components/Modal';
import { useState } from 'react';




const Mainbar = () => {
  const classes = useStyle()
   const [modal, setModal] = useState(false);
 

   
      const handleModalOpen = () => {
        setModal(true)
      }
      const handleModalClose = () =>{
        setModal(false)
      }



  return (
              <Box className={classes.page} sx={{position:'relative'}}>
                <Feeds />
                <SpeedDial
                  ariaLabel="SpeedDial openIcon example"
                  sx={{ position: 'fixed', bottom:60, right:16,  '& .MuiFab-primary': { backgroundColor: '#9d8466', color: 'white' } }}
                  icon={<SpeedDialIcon  openIcon={<EditIcon />} />}
                  color='appbarColor'
                  onClick={handleModalOpen}
                >
                </SpeedDial>
                <ModalComponent 
                 handleModalClose={handleModalClose}
                 modal = {modal} 
                 />
              </Box>        
  )
}

export default Mainbar