import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chooseImg from "../../assests/images/graphics-design.png";
import './Content_display.css'; 

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
    slidesToScroll: 1,
    variableWidth: true,
    vertical: false,
  };

  const catalogueData = [
    { imageUrl: chooseImg, label: 'Item 1' },
    { imageUrl: chooseImg, label: 'Item 2' },
    { imageUrl: chooseImg, label: 'Item 3' },
    { imageUrl: chooseImg, label: 'Item 4' },
    { imageUrl: chooseImg, label: 'Item 5' },
    { imageUrl: chooseImg, label: 'Item 6' },
    { imageUrl: chooseImg, label: 'Item 7' },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <Container ref={containerRef} className={`mt-4 pb-8 ml-0 ${isVisible ? 'fade-in' : ''}`}>
        <div className="text-3xl font-semibold mb-4">Our Content</div>
        <Slider {...settings}>
          {catalogueData.map((item, index) => (
            <div key={index} className="p-2">
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={item.imageUrl}
                  alt={item.label}
                  className="zoomOnHover"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ }} color="text.primary">
                    {item.label}
                  </Typography>
                  <Button variant="contained" color="primary">
                    View
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
    </Container>
    </ThemeProvider>
  );
};

export default ContentDisplay;
