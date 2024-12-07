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
import FinancialEventsLogger from '@/components/System/FinancialEventsLogger/FinancialEventsLogger';
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
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Filter7Icon from '@mui/icons-material/Filter7';
import CalculateIcon from '@mui/icons-material/Calculate';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FolderIcon from '@mui/icons-material/Folder';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DvrIcon from '@mui/icons-material/Dvr';
import EdgesensorLowIcon from '@mui/icons-material/EdgesensorLow';
import PeopleIcon from '@mui/icons-material/People';
import moment from 'jalali-moment';



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




  const  handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExit=()=>{
      window.location.href = '/'
  }
  

// const currentDate = moment().locale('fa').format('dddd، jD jMMMM jYYYY');
const currentDate = moment().locale("fa").format("jYYYY/jMM/jDD");

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
          {/* <Typography variant="caption" noWrap component="div">
            ادمین خوش آمدید
          </Typography> */}
          <Box>
        <FinancialEventsLogger/>
            
          </Box>
        <Box sx={{display:'flex',alignItems:'center'}}   >
        <ToggleMode/>
        <Typography>{currentDate}</Typography>

        </Box>

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
          {label:'فروش',url:'/dashboard/sales'},
          {label:'سفارشات',url:'/dashboard/orders'},
          {label:'مشتری',url:'/dashboard/customers'},

          {label:'ویترین',url:'/dashboard/showCase'},
          {label:'محصولات',url:'/dashboard/products'},
         
          {label:'انبار',url:'/dashboard/warehouse'},
          {label:'گزارشات',url:'/dashboard/reports'},
          

          {label:'موجودی',url:'/dashboard/okr'},
          {label:'حساب دفتری',url:'/dashboard/meetings'},
          {label:'وفاداری',url:'/dashboard/loyalty'},

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
                >
                  {index === 0 ? <DashboardIcon/>:

                  index===1?<ShoppingCartCheckoutIcon/>:

                  index===2?<EdgesensorLowIcon/>:

                  index===3?<PeopleIcon/>:

                  index===4?<DvrIcon/>:
                  index===5?<FolderIcon/>:
                  index===6?<WarehouseIcon/>:

                  index===7?<AssessmentIcon/>:
                  index===8?<Filter7Icon/>:
                  index===9?<EditNoteIcon/>:
                  index===10?<HandshakeIcon/>:

                  index===11?<HomeRepairServiceIcon/>:
                  index===12?<SettingsIcon/>:
                  index===13?<ExitToAppIcon/>:
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
                  index===3 || index===6  ? <Divider />:''
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

