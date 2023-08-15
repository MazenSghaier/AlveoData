import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Typography } from '@mui/material';
import Image from '../../../assests/images/why-choose-us.png';

const OurStorySection: React.FC = () => {
  return (
    <div className="my-20"> {/* Add margin to the top and bottom */}
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        {/* Animated text */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pr-16" // Add padding left to text
          >
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate animi deserunt libero nesciunt corporis explicabo nobis ex quo molestiae! Lorem ipsum dolor,
            </Typography>
          </motion.div>
        </Grid>
        {/* Animated image */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pl-16" // Add padding right to image
          >
            <img src={Image} alt="Our Story" className="w-full h-auto" />
          </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OurStorySection;
