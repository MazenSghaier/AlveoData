import React from 'react'
import Sidenav from '../component/Sidenav'
import { Box, Divider } from '@mui/material'
import Navbar from '../component/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CustomCard from '../component/CustomCard';
import Link from '@mui/material/Link';

import image_1 from '../assests/images/image_1.jpg'


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function Home() {
  return (
    <>
    <Navbar/>
    <Box height={70} />
      <Box sx={{ display: "flex" }}> 
        <Sidenav/>

      <Box component="main" sx={{flexGrow: 1,p: 3}}>

        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Card sx={{ width: 500, }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
                <div>
                  <Link href="/" sx={{ p: 0 }}>
                    Last uploaded videos
                  </Link>
                </div>
                <div>
                  {/* Add your additional link here */}
                  <Link href="/your-additional-link" sx={{ p: 2 }}>
                    Courses
                  </Link>
                </div>
              </div>
              <CustomCard
                title="Last uploaded videos"
                description="lorem ..."
                imageSource={image_1}
                linkText="linear aggression"
              />
              <Divider sx={{ p: 1 }} variant="fullWidth" />
              <CustomCard
                title="Last uploaded videos"
                description="lorem ..."
                imageSource={image_1}
                linkText="linear aggression"
              />
              <Divider sx={{ p: 1 }} variant="fullWidth" />
              <CustomCard
                title="Last uploaded videos"
                description="lorem ..."
                imageSource={image_1}
                linkText="linear aggression"
              />
            </Card>
          </Grid>

          <Grid item xs={6} md={8}>
            <Card sx={{ width: 500 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
                    <div>
                      <Link href="/" >
                        Free Videos
                      </Link>
                    </div>
                    <div>
                      {/* Add your additional link here */}
                      <Link href="/your-additional-link" sx={{ p: 2 }}>
                        Courses
                      </Link>
                    </div>
                </div>
                <CustomCard title='Last uploaded videos' description="lorem ..." imageSource={image_1} linkText="linear aggression"/>
                <Divider sx={{  p:1 }} variant='fullWidth' />
                <CustomCard title='Last uploaded videos' description="lorem ..." imageSource={image_1} linkText="linear aggression"/>
                <Divider sx={{  p:1 }} variant='fullWidth'/>
                <CustomCard title='Last uploaded videos' description="lorem ..." imageSource={image_1} linkText="linear aggression"/>
            </Card>
          </Grid>
        </Grid>
      </Box>

      </Box>
    </>
  )
}