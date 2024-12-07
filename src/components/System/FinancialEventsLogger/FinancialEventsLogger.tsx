import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Typography } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} sx={{bgcolor:'inherit'}} onChange={handleChange}>
      <BottomNavigationAction
        label={<Typography variant='caption'   >یادآوری</Typography>}
        value="recents"
        icon={<NotificationsActiveIcon />}
      />
      <BottomNavigationAction
      sx={{minWidth:'150px'}}
        label={<Typography variant='caption'   >آخرین های مالی</Typography>}
        value="favorites"
        icon={<CurrencyExchangeOutlinedIcon />
        

        }
      />
      {/* <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      /> */}
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  );
}
