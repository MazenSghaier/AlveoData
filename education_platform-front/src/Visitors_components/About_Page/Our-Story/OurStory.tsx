import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Typography } from '@mui/material';
import Image from '../../../assests/images/why-choose-us.png';

const OurStorySection: React.FC = () => {
  const [textHasScrolled, setTextHasScrolled] = useState(false);
  const [imageHasScrolled, setImageHasScrolled] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (textRef.current && window.scrollY > textRef.current.offsetTop - window.innerHeight / 2) {
      setTextHasScrolled(true);
    }
    if (imageRef.current && window.scrollY > imageRef.current.offsetTop - window.innerHeight / 2) {
      setImageHasScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="my-20">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Animated text */}
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={textHasScrolled ? { x: -100, opacity: 0 } : {}}
              animate={textHasScrolled ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="pr-16"
              ref={textRef}
            >
              <h2 className="italic lg:text-3xl p-5 font-semibold text-sky-500">
                Our Story
              </h2>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate animi deserunt libero nesciunt corporis explicabo nobis ex quo molestiae! Lorem ipsum dolor,
              </Typography>
            </motion.div>
          </Grid>
          {/* Animated image */}
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={imageHasScrolled ? { x: -100, opacity: 0 } : {}}
              animate={imageHasScrolled ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="pl-16"
              ref={imageRef}
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
