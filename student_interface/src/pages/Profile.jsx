import React from 'react'
import Sidenav from '../component/Sidenav'
import { Box } from '@mui/material'
import Navbar from '../component/Navbar'

export default function Profile() {
  return (
    <>
    <Navbar/>
    <Box height={30} />
      <Box sx={{ display: "flex"}}>
        
        <Sidenav/>
        <Box component="main" sx={{flexGrow: 1,p: 3}}>
          <div>Profile</div>
        </Box>

      </Box>
    </>
  )
}
