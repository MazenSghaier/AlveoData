import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface TestimonialCardProps {
  title: string;
  content: string;
  studentName: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  content,
  studentName,
  location,
}) => {
  return (
    <div>
      <div className="single__testimonial m-16">
        <Typography variant="h6" component="h6" className="mb-3 fw-bold">
          {title}
        </Typography>
        <Typography>{content}</Typography>

        <div className="student__info mt-4">
          <Typography variant="h6" component="h6" className="fw-bold">
            {studentName}
          </Typography>
          <Typography>{location}</Typography>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
