import React,{useState} from 'react';
import Sidenav from '../Students_component/Sidenav';
import InputAdornments from  '../Students_component/textfield';
import Navbar from '../Students_component/Navbar';
import { Box, Button, Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function Profile() {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const user = JSON.parse(localStorage.getItem('profile'))
  console.log(user);
  
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
                <Avatar sx={{width: 65, height: 65,}} src={`${process.env.PUBLIC_URL}/assests/logos/${user.result.pictureName}`} />
                {console.log(`${process.env.PUBLIC_URL}/assests/logos/${user.result.pictureName}`)}
              </Badge>
            </Box>
            <CardContent>
              <Typography variant="h5" sx={{ color:"#35bbe3" ,fontSize: '1.25rem', fontWeight: 'bold' }}>
                {user.result.username.toUpperCase()}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                 Member
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 2 }}>
                <Typography color="black">User ID:</Typography> {user.result._id}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
              <Typography color="black">Email:</Typography> {user.result.Email}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Join Date:</Typography>{user.result.joinDate}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Country:</Typography> {user.result.country.toUpperCase()}
              </Typography>
            </CardContent>
            <Divider sx={{ w: '8rem', mt: 3, mb:3 }} />
            <Button
              color="secondary"
              size="medium"
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
          
          <Box sx={{ ml: 3, display: 'flex', flexDirection: 'column' }}>
            <Button
              variant="outlined"
              onClick={toggleShow}
              sx={{
                width: '6rem',
                mt: 3,
                backgroundColor: '#35bbe3',
                color: 'white',
                '&:hover': {
                  color: '#35bbe3',
                },
              }}
              startIcon={<ArrowBackIosNewIcon />}
            >
              Back
            </Button>   
            <Grid item xs={12} sm={6}>
              <InputAdornments/>
            </Grid>
        </Box>
        )}
      </Box>
    </>
  );
}