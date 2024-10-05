import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddCustomer from '@/app/dashboard/customers/Components/Forms/addCustomer/AddCustomer';
import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
// import { modalPropFace } from './types';
import SettingsIcon from '@mui/icons-material/Settings';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

// title='مشتری'   
// open={customerModuleState?.drawer} 
// setOpen={setCustomerModuleState} 

export default function DrawerLayout({
    title,
    open,
    setOpen,
    children

}:any) {
  const [state, setState] = React.useState({

    right: false,
  });


  const initialOpenSettingModal=()=>{
    setOpen((prev:any)=>({...prev,modal:true}))
  }

  const initialCloseDrawer=()=>{
    setOpen((prev:any)=>({...prev,drawer:false}))
  }

  const toggleDrawer =(anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

    //   setState({ ...state, [anchor]: open });
    //   setOpen()
    // setOpen((prev:any)=>({...prev,drawer:false,mode:null}))
    };

  const list = (anchor: Anchor) => (
    <Box
       sx={{py:'100px', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
<Box sx={{display:'flex',justifyContent:'start',columnGap:2}}   > 
   
            {
            true && <Box sx={{width:'100%',display:'flex',justifyContent:'space-between'}}  >
                <IconButton  onClick={initialOpenSettingModal}>
                <SettingsIcon  fontSize='small' />
            </IconButton>
            <IconButton onClick={initialCloseDrawer}>
                <CloseRounded fontSize='small' color='error' />
            </IconButton>
            </Box>
            }
</Box>
  <Box>
    {
        children
    }
  </Box>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={open}
            // onClose={setOpen((prev:any)=>({...prev,drawer:false}))}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
