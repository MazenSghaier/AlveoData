import React from "react";
import heroImg from "../../assests/images/hero-img1.png";
import heroImg2 from "../../assests/images/hero-img2.png";

import Button from "@mui/material/Button";

const HeroSection: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative", // Ensure the parent container is relative for positioning the background container
    margin: "2rem",
    marginBottom: "2rem", // Adjust the margin-bottom to reduce space
    paddingBottom: "2rem", // Adjust the padding-bottom to reduce space
    width: "85rem",
    height: "40rem",
    padding: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "1rem",
  };

  const backgroundContainerStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "calc(100% + 4rem)", // Add 4rem to the width (2rem for left + 2rem for right)
    height: "100%", // Adjust the height of the background image
    transform: "rotate(1deg)", // Adjust the rotation degree as desired
    position: "absolute",
    top: 0,
    left: "-2rem", // Shift the image to the left by 2rem
    zIndex: -1, // Place the background container behind the content
    borderRadius: "1rem",
    opacity: 0.9, // Adjust the opacity of the background image to your liking
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#26C6DA", // Custom cyan color for the button background
    color: "#fff", // Button text color
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
  };

  return (
    <section>
      <div style={containerStyle} className="lg:flex lg:justify-between">
        <div
          className="bg-hero-img2 animate__animated animate__fadeIn lg:w-1/2 lg:mb-0"
          style={backgroundContainerStyle}
        ></div>
        <div className="lg:w-1/2 lg:pr-20 mb-8 lg:mb-0 animate__animated animate__slideInLeft">
          <div className="hero__content">
            <h2 className="mb-6 text-2xl lg:text-5xl font-bold text-black">
              Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
            </h2>
            <p className="mb-8 text-sm lg:text-xl text-black">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Aut saepe voluptatum earum delectus <br /> deserunt id iste, quas
              officiis et repellat!
            </p>
            <div className="search">
              <Button style={buttonStyle}>Start Now</Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 animate__animated animate__slideInRight">
          <img src={heroImg} alt="" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
