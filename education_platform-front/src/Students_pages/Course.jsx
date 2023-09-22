import React from 'react'
import Navbar from '../Students_component/Navbar'
import Sidenav from '../Students_component/Sidenav'
import Player from '../Students_component/Player';
import { Box } from '@mui/material'
import { useParams } from "react-router-dom";




export default function Course() {
    const { id } = useParams();
    
  return (
    <>
    <Navbar/>
      <Box height={90} /> 
      <Box sx={{ display: "flex"}}>
        
        <Sidenav/>

        <Box component="main" sx={{flexGrow: 1,p: 3}}>

          <Player />

        </Box>

      </Box>
    </>
  )
}