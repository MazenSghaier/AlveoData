import React from 'react'
import Sidenav from '../component/Sidenav'
import { Box, Typography } from '@mui/material'
import Navbar from '../component/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import InputAdornments from './../component/textfield'

export default function Profile() {
  return (
    <>
    <Navbar/>
    <Box height={70} />
      <Box sx={{ display: "flex" , }}>
        
        <Sidenav/>

        <Box component="main" sx={{flexGrow: 1,p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' , mt:10 }}>
          
          <Card sx={{ maxWidth: 345 , p:10 }}>
            
            <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' , mt:3}}>
              <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#46d008', borderRadius: '50%'  }} />}
                  >
                    <Avatar sx={{width: 80, height: 80, }} src="/your-image-url.jpg" />
                </Badge>
              </Box>
              <CardContent>
                
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

          {/*<Grid item xs={6} md={8}>
            <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#46d008', borderRadius: '50%' }} />}
              >
                <Avatar src="/your-image-url.jpg" />
            </Badge>
            <Typography>Personnal informations</Typography>
              <InputAdornments/>
            </Grid>
            <Grid item xs={6} md={4}>
              
            </Grid>
              </Grid>*/}
        </Box>

      </Box>
    </>
  )
}
