import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Navbar from '../Students_component/Navbar'
import Sidenav from '../Students_component/Sidenav'
import Progressbar from '../Students_component/Progressbar'

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { getCourse } from '../actions/course';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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

    function calculatePlaylistCompletion(index, lessonCompletion) {
      const lessonsPerPlaylist = 9; // Assuming each playlist has 9 lessons
      const lessonsInPlaylist = lessonCompletion.slice(0, 9);
    
      const completedLessons = lessonsInPlaylist.filter((completed) => completed).length;
    
      console.log(`lessonCompletion for course ${index}:`, lessonCompletion);
      console.log(`Completed Lessons for Playlist ${index}: ${completedLessons}`);
      console.log(`Total Lessons for Playlist ${index}: ${lessonsPerPlaylist}`);
    
      return (completedLessons / lessonsPerPlaylist) * 100;
    }
    
    
export default function Courses() {

  const [completionPercentages, setCompletionPercentages] = useState([]);

    const nav = useNavigate();

    const dispatch = useDispatch();
  
    const handleCourseClick = (index) => {
      // Dispatch an action with the index before navigating
      dispatch(getCourse(index));
  
      // Navigate to the course page
      nav(`/course/${index}`,{ state: { pageIndex: index } });
    };

    useEffect(() => {
      const calculateCompletionPercentages = () => {
        const allCompletionPercentages = [];
    
        for (let index = 0; index < courses.length; index++) {
          const lessonCompletionData = localStorage.getItem(`lessonCompletion_${index}`);
          try {
          const lessonCompletion = lessonCompletionData ? JSON.parse(lessonCompletionData) : [];
    
          console.log(`lessonCompletion for course ${index}:`, lessonCompletion);
    
          const completionPercentage = calculatePlaylistCompletion(index, lessonCompletion);
    
          allCompletionPercentages.push({
            name: courses[index].name,
            completionPercentage: isNaN(completionPercentage) ? 0 : completionPercentage,
          });
    
        setCompletionPercentages(allCompletionPercentages);
      } catch (error) {
        console.error(`Error parsing lessonCompletion data for course ${index}:`)
      }
      };
    }
      calculateCompletionPercentages();
    }, []);
    
  
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
                  <div className="custom-link" onClick={() => handleCourseClick(index)}>
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
                            fontWeight: 'bold',
                          }}
                        >
                          {course.name}
                        </Typography>
                        {completionPercentages[index] && (
                          <Progressbar
                            value={ completionPercentages[index].completionPercentage || 0 }
                          />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}