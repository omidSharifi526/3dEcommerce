"use client"
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import {Select,MenuItem} from '@mui/material';
import ToggleMode from '@/components/System/ToggleMode/ToggleMode';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GroupsIcon from '@mui/icons-material/Groups';
import EventSeatIcon from '@mui/icons-material/EventSeat';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer({children}:any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExit=()=>{
      window.location.href = '/'
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{width:'100%',display:'flex',justifyContent:'space-between'}}  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="caption" noWrap component="div">
            ادمین خوش آمدید
          </Typography>
          <ToggleMode/>
        </Toolbar>
        
       
      </AppBar>
      <Drawer variant="permanent" open={open}>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
          {[{label:'دشبورد',url:'/dashboard/overview'},
          {label:'مشتری',url:'/dashboard/customers'},
          {label:'محصولات',url:'/dashboard/products'},

          {label:'اهداف و نتایج',url:'/dashboard/okr'},
          {label:'ملاقات و مذاکرات',url:'/dashboard/meetings'},
          {label:'رخداد ها',url:'/dashboard/events'},

          {label:'خدمات',url:'/dashboard/services'},
          {label:'تنظیمات',url:'/dashboard/setting'},
          {label:'خروج',url:'/'}


        
        ].map((item:any, index:number) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
               component={Link} href={item?.url}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    fontSize:'10px !important'
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}

                  // ExitToAppIcon
                >
                  {index === 0 ? <DashboardIcon/>:
                  index===1?<AssignmentIndIcon/>:
                  index===2?<ShoppingBasketIcon/>:

                  index===3?<TrackChangesIcon/>:
                  index===4?<GroupsIcon/>:
                  index===5?<EventSeatIcon/>:

                  index===6?<HomeRepairServiceIcon/>:
                  index===7?<SettingsIcon/>:
                  index===8?<ExitToAppIcon/>:
                  ''}
                </ListItemIcon>
                <ListItemText
                  
                  primary={item?.label}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                 
                />
                
              </ListItemButton>
                {
                  index===2 || index===5  ? <Divider />:''
                }
            </ListItem>
          ))}
             <List>
 
        </List>
        </List>
       
        {/* <List>
          {['All mail', 'Trash', 'خروج'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={handleExit}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                <Link href={'/'}  />
              </ListItemButton>
    
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3,pt:10 }}>
       
       
     {
      children
     }

       
      </Box>
    </Box>
  );
}

