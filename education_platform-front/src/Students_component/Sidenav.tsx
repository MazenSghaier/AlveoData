import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import  { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import {  Row, Col } from "reactstrap";

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useNavigate } from 'react-router-dom';

import { HomeOutlined , PersonOutlined , BookOutlined , SettingsOutlined , SupportAgentOutlined} from '@mui/icons-material'
import { useAppStore } from '../AppSotre';
import { useContactAndSocial } from '../AppSotre';


import youTube from '../assests/Social_media/youtube.png';
import twitter from '../assests/Social_media/twitter.png';
import facebook from '../assests/Social_media/facebook.png';

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


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  const nav = useNavigate();
  
  const show = useContactAndSocial((state) => state.show);
  
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}  PaperProps={{ sx: { backgroundColor: "#35bbe3"  }}}>
        <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
          <Divider />
          <List>
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {nav("/Students")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <HomeOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white', opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
          <List>
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {nav("/profile")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <PersonOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" sx={{fontSize: '.9rem', fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white', opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
          <List>
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {nav("/courses")}} >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <BookOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Courses" sx={{ fontSize: '.9rem', fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white', opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {nav("/settings")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <SettingsOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ fontSize: '.9rem', fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white' , opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
          <List>
              <ListItem  disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <SupportAgentOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Support" sx={{ fontSize: '.9rem', fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white' , opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          
          </List>
          <Divider />
        <Box sx={{ display: 'block', paddingTop: 6, justifyContent: 'center', textAlign: 'center' , transition: 'max-height 0.3s ease-in-out',maxHeight: show ? '0' : '1000px',overflow: 'hidden',}}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ display: 'block', paddingY: 2 }}>
                <Typography variant="h6" sx={{ fontFamily:'sans-serif' ,fontWeight:'bold', color: ' white', fontSize: '.85rem', marginBottom: 1 }}>
                  Contact Number:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#35bbe3',
                    fontSize: '.85rem',
                    backgroundColor: 'white',
                    border: '2px solid white',
                    borderRadius: '2rem',
                    padding: '0.5rem 1rem',
                    display: 'inline-block',
                  }}
                >
                  +123456789
                </Typography>
              </Box>
            </Grid>
          </Grid>

              <Row className="justify-center items-center mt-4">
                <Col lg="12" md="12" className="mb-4 text-center">
                  <div className="flex flex-col space-y-4 mx-auto">
                    <Typography variant="h6" sx={{ fontFamily:'sans-serif' ,fontWeight:'bold', color: 'white', fontSize: '.85rem' }}>
                      Our Social Media
                    </Typography>
                    <div className="flex justify-center space-x-4">
                      <a href="/">
                        <img alt="" src={facebook} className="w-10 h-10" />
                      </a>
                      <a href="/">
                        <img alt="" src={youTube} className="w-10 h-10" />
                      </a>
                      <a href="/">
                        <img alt="" src={twitter} className="w-10 h-10" />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Box>
      </Drawer>
      
    </Box>
  );
}