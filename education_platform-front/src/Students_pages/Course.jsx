import React from 'react'
import Navbar from '../Students_component/Navbar'
import Sidenav from '../Students_component/Sidenav'
import Player from '../Students_component/Player';
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom';



export default function Course(props) {
  const location = useLocation();
  const pageIndex = location.state?.pageIndex;
  return (
    <>
    <Navbar/>
      <Box height={90} /> 
      <Box sx={{ display: "flex"}}>
        
        <Sidenav/>

        <Box component="main" sx={{flexGrow: 1,p: 3}}>

          <Player item={pageIndex}/>

        </Box>

      </Box>
    </>
  )
}