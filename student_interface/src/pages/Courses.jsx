import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import Sidenav from '../component/Sidenav'
import { Box } from '@mui/material'
import Navbar from '../component/Navbar'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import LinearBuffer from '../component/Progressbar'

import statistics from './../assests/Courses/statistics.png'
import matlab from './../assests/Courses/matlab.png'
import c_plus from './../assests/Courses/c_plus.png'
import algebra from './../assests/Courses/algebra.png'
import analysis from './../assests/Courses/analysis.png'
import calcules from './../assests/Courses/calcules.png'
import database from './../assests/Courses/database.png'
import java from './../assests/Courses/java.png'
import machine_learning from './../assests/Courses/machine_learning.png'
import probability from './../assests/Courses/probability.png'
import python from './../assests/Courses/python.png'
import Course from './Course';

const courses = [
    {cours : statistics , name :"Statistics"},
     {cours : matlab, name :"Matlab"},
     {cours : c_plus, name :"C++"},
     {cours : algebra, name :"Algebra"},
     {cours : analysis, name :"Analysis"},
     {cours : calcules , name :"Calcules" },
     {cours : database, name :"Data base" },
     {cours : java , name :"Java" },
     {cours : machine_learning, name :"Machine Learning" },
     {cours : probability , name :"Probability" },
     {cours : python , name :"Python"},
    ];

export default function Courses() {
    const nav = useNavigate();
  return (
    <>
      <Navbar />
      <Box height={90} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#35bbe3',
              fontSize: '1.8rem',
              marginBottom: 1,
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
            }}
          >
            Courses
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ m: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link to={`/course/${index}`} className="custom-link">
                  <Card
                    sx={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, .4)',
                      '&:hover': {
                        backgroundColor: '#c9f3ff',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: 'cover',
                        width: '30%',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        flex: '1',
                        height: '30%',
                        margin: 'auto',
                        marginTop: '15px',
                      }}
                      image={course.cours}
                      title={course.name}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontFamily: 'sans-serif',
                          color: '#35bbe3',
                          fontSize: '1rem',
                          fontWeight:'bold'
                        }}
                      >
                        {course.name}
                      </Typography>
                      <LinearBuffer />
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}