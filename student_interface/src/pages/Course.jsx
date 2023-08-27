import React from 'react'
import Sidenav from '../component/Sidenav'
import { Box } from '@mui/material'
import Navbar from '../component/Navbar'
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
          <div>{ id }</div>
        </Box>

      </Box>
    </>
  )
}