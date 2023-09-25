import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Content_display.css';

import oop from "../../assests/Courses_images/oop.png";
import rest from "../../assests/Courses_images/rest.png";
import linear from "../../assests/Courses_images/linear.jpg";
import cyber from "../../assests/Courses_images/cyber.jpg";
import algebra from "../../assests/Courses_images/algebra.png";
import c_plus from "../../assests/Courses_images/c_plus.jpg";
import derive from "../../assests/Courses_images/derive.jpg";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#35bbe3",
      contrastText: "#fff"
    },
  },
});

const ContentDisplay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    vertical: false,
  };

  const catalogueData = [
    { imageUrl: oop, label: 'Object Oriented Programming' , button:'Programming' },
    { imageUrl: rest, label: 'Restful API ', button:'Web developpement' },
    { imageUrl: linear, label: 'Linear reggression' , button:'Machine Learning'},
    { imageUrl: cyber, label: 'Cyber Security Essentials', button:'Cyber Security'  },
    { imageUrl: algebra, label: 'Abstract Algebra Groups' , button:'Algebra' },
    { imageUrl: derive, label: 'Partial derivation' , button:'Analysis' },
    { imageUrl: c_plus, label: 'Abstract Class C++', button:'Programming'  },
  ];

  const nav = useNavigate();

  const handleCardClick = (item:any) => {
    // Use the `nav` function to navigate to the desired page with item data
    nav(`/freecourse/${item.label}`, { state: item });
  };
  return (
    <ThemeProvider theme={customTheme}>
      <Container ref={containerRef} className={`mt-4 pb-8 ml-0 ${isVisible ? 'fade-in' : ''}`} >
        <div className="non-italic  lg:text-3xl font-semibold text-sky-500">Our Subjects</div>
        <Slider  {...settings} ref={sliderRef}>
          {catalogueData.map((item, index) => (
            <div key={index} className="p-2" style={{ height: '400px', width: '400px'}} onClick={() => handleCardClick(item)}>
              <Card key={index} sx={{ maxWidth: 400, height: '100%' , width: '100%'}}>
                <CardMedia
                  component="img"
                  height="500"
                  style={{ height: '200px', objectFit: 'cover' }}
                  image={item.imageUrl}
                  alt={item.label}
                  className="zoomOnHover"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ }} color="text.primary">
                    {item.label}
                  </Typography>
                  <Button variant="contained" color="primary"sx={{fontSize: '.8rem', fontWeight: 'bold', }}  >
                    {item.button}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
        <div className="slider-buttons">
                <Button onClick={() => sliderRef.current?.slickPrev()} className="slider-button prev btn">Previous</Button>
                <Button onClick={() => sliderRef.current?.slickNext()} className="slider-button next btn">Next</Button>
        </div>
    </Container>
    </ThemeProvider>
  );
};

export default ContentDisplay;
