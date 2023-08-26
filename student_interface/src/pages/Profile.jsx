import React from 'react';
import Sidenav from '../component/Sidenav';
import { Box, Button, Divider, Typography } from '@mui/material';
import Navbar from '../component/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

export default function Profile() {
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
            mt: 2,
          }}
        >
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
                Mazen Sghaier
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
        </Box>
      </Box>
    </>
  );
}
