import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Card, CardContent, CardMedia, Container } from '@mui/material';
import chooseImg from "../../assests/images/graphics-design.png";

const ContentDisplay: React.FC = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
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
    <Container className="mt-4">
      <Slider {...settings}>
        {catalogueData.map((item, index) => (
          <div key={index} className="p-2">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt={item.label}
              />
              <CardContent>
                <p className="mb-2">{item.label}</p>
                <Button variant="contained" color="primary">
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ContentDisplay;
