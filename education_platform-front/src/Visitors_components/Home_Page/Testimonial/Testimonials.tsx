import React from "react";
import { Container, Grid} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard"; // Make sure to update the import path
import img from "../../../assests/images/testimonial01.png";
import "./testimonial.css";

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      title: "Excellent course of materials",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae neque!",
      studentName: "Jhon Doe",
      location: "California, United State",
    },
    {
      title: "Excellent course of materials",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae neque!",
      studentName: "Jhon Doe",
      location: "California, United State",
    },
    {
      title: "Excellent course of materials",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae neque!",
      studentName: "Jhon Doe",
      location: "California, United State",
    },
    // Add more testimonials here
  ];

  return (
    <section>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={10} md={12}>
            <div className="testimonial__wrapper flex justify-between items-center">
              <div className="testimonial__img w-1/2 pr-5">
                <img src={img} alt="" className="w-full" />
              </div>

              <div className="testimonial__content w-1/2">
                <h2 className="italic  lg:text-4xl font-semibold p-6 text-sky-500">
                  Our Students Voice
                </h2>

                <Carousel
                  infiniteLoop
                  showStatus={false}
                  showThumbs={false}
                  autoPlay
                  interval={3000}
                  transitionTime={500}
                  
                >
                  {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      title={testimonial.title}
                      content={testimonial.content}
                      studentName={testimonial.studentName}
                      location={testimonial.location}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
