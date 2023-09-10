import React from 'react'
import Sidenav from '../component/Sidenav'
import { Box, Divider, Stack } from '@mui/material'
import Navbar from '../component/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CustomCard from '../component/CustomCard';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LinearBuffer from '../component/Progressbar'
import image_1 from '../assests/images/image_1.jpg'

import statistics from './../assests/Courses/statistics.png'
import matlab from './../assests/Courses/matlab.png'
import c_plus from './../assests/Courses/c_plus.png'
import algebra from './../assests/Courses/algebra.png'
import analysis from './../assests/Courses/analysis.png'

const courses = [
  {cours : statistics , name :"Statistics"},
   {cours : matlab, name :"Matlab"},
   {cours : c_plus, name :"C++"},
   {cours : algebra, name :"Algebra"},
   {cours : analysis, name :"Analysis"},
  ];

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
      <Stack direction='row'>
        <Grid container spacing={2} >
          
          <Grid item xs={6} md={8} >
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
        <Grid container spacing={2} >
          
          <Grid item xs={6} md={8} >
          <Card sx={{ width: 300 }}>
            <Typography sx={{ p: 2, color: '#35bbe3', fontWeight: 'bold' }}>
              My progress
            </Typography>
            {courses.map((course, index) => (
              <Link to={`/course/${index}`} className="custom-link" key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      backgroundColor: '#c9f3ff',
                    },
                    p: 2,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={course.cours} alt={course.name} style={{ width: '30px', height: '30px', marginRight: '8px' }} />
                    <div>
                      <Typography
                        sx={{
                          fontFamily: 'sans-serif',
                          color: '#35bbe3',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {course.name}
                      </Typography>
                      <LinearBuffer />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </Card>

          </Grid>

        </Grid>
        </Stack>
      </Box>

      </Box>
    </>
  )
}