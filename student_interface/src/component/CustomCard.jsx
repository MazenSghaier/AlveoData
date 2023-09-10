import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CustomCard = ({ title, description, imageSource, linkText, linkUrl }) => {
  return (
    <Card sx={{ display: 'flex', boxShadow: 'none' , padding:2, height:100}}> 
      {/* Left side with the image */}
      <CardMedia
        component="img"
        sx={{ width: 100  }}
        image={imageSource}
        alt={title}
      />

      {/* Right side with title, description, and link */}
      <div sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Title */}
          <Typography variant="h5" component="div">
            {linkText}
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default CustomCard;
