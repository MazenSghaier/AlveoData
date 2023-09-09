import React,{useState, useEffect} from 'react';
import Sidenav from '../component/Sidenav';
import { Box, Button, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Navbar from '../component/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import InputAdornments from  '../component/textfield';
import Grid from '@mui/material/Grid';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useDispatch } from 'react-redux';
import { getUser } from '../actions/user';
import { useSelector } from 'react-redux';

export default function Profile() {

  const user = useSelector(state => state.user);
  console.log(user.user[0].username);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() =>{

    dispatch(getUser());
    
  },[dispatch])

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p:0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml:4
            
          }}
        > {!show && (
          <Card sx={{ maxWidth: 345, p: 10, borderRadius: '15px', boxShadow: '0px 2px 4px rgba(0, 0, 0, .5)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<div style={{ width: 15, height: 15, backgroundColor: '#46d008', borderRadius: '50%' }} />}
              >
                <Avatar sx={{ width: 80, height: 80 }} src="/your-image-url.jpg" />
              </Badge>
            </Box>
            <CardContent>
              <Typography variant="h5" sx={{ color:"#35bbe3" ,fontSize: '1.25rem', fontWeight: 'bold' }}>
                {user.user[0].username}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                 Member
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 2 }}>
                <Typography color="black">User ID:</Typography> ABC123
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
              <Typography color="black">Email:</Typography> mazen@example.com
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Phone:</Typography> +123 456 7890
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Address:</Typography> 123 Street, City, Country
              </Typography>
            </CardContent>
            <Divider sx={{ w: '8rem', mt: 3, mb:3 }} />
            <Button
              variant="outlined"
              onClick={toggleShow}
              sx={{
                width: '6rem',
                mt: 3,
                backgroundColor: '#35bbe3',
                display: 'block', 
                margin: '0 auto',
                color:'white',
                '&:hover': {
                  color: '#35bbe3', 
                },
              }}
            >
              Modify
            </Button>          
          </Card>
          )}
        </Box>
        {show && (
          
        <Box sx={{ ml: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={6}>
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#46d008', borderRadius: '50%' , mt:8}} />}
            >
            </Badge> 
            <Avatar src="/your-image-url.jpg" />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon sx={{ color:'#35bbe3' }} />
                  <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 2 }}> ABC123 </Typography>
                </IconButton>
              </label>
          </Grid>
          <Typography>Personal Information</Typography>
          <InputAdornments />
          <Button
              variant="outlined"
              onClick={toggleShow}
              sx={{
                width: '6rem',
                mt: 3,
                backgroundColor: '#35bbe3',
                display: 'block', 
                margin: '0 auto',
                color:'white',
                '&:hover': {
                  color: '#35bbe3', 
                },
              }}
            >
              Modify
            </Button> 
        </Box>
        )}
      </Box>
    </>
  );
}