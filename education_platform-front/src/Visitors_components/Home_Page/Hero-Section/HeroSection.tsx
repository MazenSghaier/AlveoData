import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import heroImg from "../../../assests/images/hero-img1.png";
import heroImg2 from "../../../assests/images/hero-img2.png";

import Button from "@mui/material/Button";

const HeroSection: React.FC = () => {

  const nav = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define a breakpoint for switching components
  const breakpoint = 1100; // For example, switch at 768px width

  const containerStyle: React.CSSProperties = {
    position: "relative",
    marginTop: "2rem",
    marginRight: "auto",
    marginBottom: "2rem",
    marginLeft: "auto",
    paddingBottom: "2rem", // Separate paddingBottom property
    width: "85rem",
    padding: "4rem", // You can keep padding as a shorthand property
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "1rem",
    overflow: "hidden", // Hide overflow to prevent background image from overflowing
  };

  const backgroundContainerStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
    width: "100vw", // Use viewport width to cover the entire container
    height: "100vh", // Use viewport height to cover the entire container
    transform: "rotate(1deg)", // Adjust the rotation degree as desired
    position: "absolute",
    top: 0,
    left: "-1rem", // Shift the image to the left by 1rem
    zIndex: -1, // Place the background container behind the content
    borderRadius: "1rem",
    opacity: 0.9, // Adjust the opacity of the background image to your liking
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#35bbe3", // Custom cyan color for the button background
    color: "#fff", // Button text color
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "600px", // Adjust for responsiveness
  };

  const containerStyle2: React.CSSProperties = {
    position: "relative",
    marginTop: "2rem",
    marginRight: "auto",
    marginBottom: "2rem",
    marginLeft: "auto",
    width: "85%",
    padding: "4rem",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
    borderRadius: "1rem",
    backgroundColor: "#35bbe3", // Set background color directly
  };

  const buttonStyle2: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#35bbe3",
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
    margin:'1.5rem'
  };

  const contentWithImages = (
    <div style={containerStyle} className="lg:flex lg:justify-between">
      <div
        className="bg-hero-img2 animate__animated animate__fadeIn lg:w-1/2 lg:mb-0"
        style={backgroundContainerStyle}
      ></div>
      <div className="lg:w-1/2 lg:pr-20 mb-8 lg:mb-0 animate__animated animate__slideInLeft">
        <div className="hero__content">
          <h2 className="mb-6 italic  lg:text-5xl font-semibold text-sky-600">
            Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
          </h2>
          <p className="mb-8 font-sans text-lg text-sky-950">
            Harness the power of technology with computer science courses, 
            covering programming languages, 
            software development, and artificial intelligence.
          </p>
          <div className="search">
            <Button style={buttonStyle} >Start Now</Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mb-8 lg:mb-0 animate__animated animate__slideInRight">
        <div
          className="h-full w-full"
          style={{
            position: "relative",
            paddingTop: "75%", // 4:3 aspect ratio
          }}
        >
          <img
            src={heroImg}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain", // Keeps the image within the container
            }}
          />
        </div>
      </div>
    </div>
  );  

  const contentWithOutImages = (
  <div style={containerStyle2}>
    <div style={contentStyle}>
      <h2 className="mb-6 text-2xl lg:text-5xl font-bold text-white">
        Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
      </h2>
      <p className="mb-8 text-sm lg:text-xl text-white">
        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
        Aut saepe voluptatum earum delectus <br /> deserunt id iste, quas
        officiis et repellat!
      </p>
      <div className="search">
        <Button style={buttonStyle2} onClick={() => {nav("/content")}}>Start Now</Button>
      </div>
    </div>
  </div> 
  );

  
  return (
    <section>
      { windowWidth > breakpoint ? contentWithImages : contentWithOutImages }
  </section>
);
};

export default HeroSection;
