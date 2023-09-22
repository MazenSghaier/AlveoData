import React from 'react';
import { Box } from '@mui/material';
import Player from '../Students_component/Player';
import Video_0 from '../assests/videos/Video_0.mp4';




export default function PlayList() {
  return (
    <Box sx={{ display: "flex" }}>
      <Player />
    </Box>
  );
}
