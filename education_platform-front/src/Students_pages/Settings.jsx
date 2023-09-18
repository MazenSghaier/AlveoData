import React from 'react'
import Sidenav from '../Students_component/Sidenav'
import Navbar from '../Students_component/Navbar'
import { Box } from '@mui/material'


export default function Settings() {
  return (
    <>
    <Navbar/>
      <Box height={30} /> 
      <Box sx={{ display: "flex"}}>
        
        <Sidenav/>

        <Box component="main" sx={{flexGrow: 1,p: 3}}>
          <div>Settings</div>
        </Box>

      </Box>
    </>
  )
}