import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, description, imageSource, linkText, linkUrl }) => {
  return (
    <Card sx={{ display: 'flex', boxShadow: 'none', padding: 2, height: 100 }}>
      {/* Left side with the image */}
      <CardMedia
        component="img"
        sx={{
          width: '100%', // Make the image responsive by setting width to 100%
          maxWidth: '200px', // Limit the maximum width of the image
          height: 'auto', // Allow the image's height to adjust proportionally
        }}
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
